import { useState } from 'react'
import type { ReactNode } from 'react'
import type {
  CauseEffectQuestion,
  MatchingQuestion,
  MultipleChoiceQuestion,
  PickRegionQuestion,
  Question,
  TrendDirection,
  TrendQuestion,
} from '../content'
import { shuffle } from '../game/lesson'
import type { Response } from '../game/lesson'
import { InsideControl, RichText } from './RichText'
import { RegionDiagram } from './RegionDiagram'

export interface QuestionProps<Q extends Question = Question> {
  question: Q
  response: Response | null
  onChange: (r: Response | null) => void
  checked: boolean
}

/** Renders the answer area for any question type. Remount (key by id) for each new question. */
export function QuestionView(props: QuestionProps) {
  const q = props.question
  switch (q.type) {
    case 'multiple_choice':
      return <MultipleChoice {...props} question={q} />
    case 'true_false':
      return (
        <Choices
          options={[
            { key: 1, label: 'True' },
            { key: 0, label: 'False' },
          ]}
          selected={props.response?.kind === 'bool' ? [props.response.value ? 1 : 0] : []}
          correct={[q.answer ? 1 : 0]}
          checked={props.checked}
          onToggle={(k) => props.onChange({ kind: 'bool', value: k === 1 })}
          columns
        />
      )
    case 'trend':
      return <Trend {...props} question={q} />
    case 'cause_effect':
      return <CauseEffect {...props} question={q} />
    case 'matching':
      return <Matching {...props} question={q} />
    case 'pick_region':
      return <PickRegion {...props} question={q} />
  }
}

// ---------------------------------------------------------------------------
// Shared option list
// ---------------------------------------------------------------------------

interface Option {
  key: number
  label: ReactNode
}

function Choices({
  options,
  selected,
  correct,
  checked,
  onToggle,
  multi = false,
  columns = false,
}: {
  options: Option[]
  selected: number[]
  correct: number[]
  checked: boolean
  onToggle: (key: number) => void
  multi?: boolean
  columns?: boolean
}) {
  return (
    <div className={`choices${columns ? ' choices-grid' : ''}`} role={multi ? 'group' : 'radiogroup'}>
      {options.map((o) => {
        const isSel = selected.includes(o.key)
        const isRight = correct.includes(o.key)
        let state = isSel ? 'is-selected' : ''
        if (checked) state = isRight ? (isSel ? 'is-correct' : 'is-missed') : isSel ? 'is-wrong' : 'is-dim'
        return (
          <button
            key={o.key}
            type="button"
            role={multi ? 'checkbox' : 'radio'}
            aria-checked={isSel}
            className={`choice ${state}`}
            disabled={checked}
            onClick={() => onToggle(o.key)}
          >
            {multi && <span className="choice-box" aria-hidden="true" />}
            <span className="choice-label">
              <InsideControl>{o.label}</InsideControl>
            </span>
          </button>
        )
      })}
    </div>
  )
}

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

function MultipleChoice({ question: q, response, onChange, checked }: QuestionProps<MultipleChoiceQuestion>) {
  const [order] = useState(() => shuffle(q.options.map((_, i) => i)))
  return (
    <Choices
      options={order.map((i) => ({ key: i, label: <RichText text={q.options[i]} /> }))}
      selected={response?.kind === 'single' ? [response.index] : []}
      correct={[q.answer]}
      checked={checked}
      onToggle={(i) => onChange({ kind: 'single', index: i })}
    />
  )
}

const TRENDS: { value: TrendDirection; arrow: string; label: string }[] = [
  { value: 'increases', arrow: '↑', label: 'Increases' },
  { value: 'decreases', arrow: '↓', label: 'Decreases' },
  { value: 'no_change', arrow: '→', label: 'No change' },
  { value: 'depends', arrow: '?', label: 'It depends' },
]

function Trend({ question: q, response, onChange, checked }: QuestionProps<TrendQuestion>) {
  return (
    <>
      <p className="trend-question">
        If <strong><RichText text={q.change} /></strong>, what happens to <strong><RichText text={q.target} /></strong>?
      </p>
      <Choices
        options={TRENDS.map((t, i) => ({
          key: i,
          label: (
            <>
              <span className="trend-arrow" aria-hidden="true">
                {t.arrow}
              </span>{' '}
              {t.label}
            </>
          ),
        }))}
        selected={response?.kind === 'trend' ? [TRENDS.findIndex((t) => t.value === response.value)] : []}
        correct={[TRENDS.findIndex((t) => t.value === q.answer)]}
        checked={checked}
        onToggle={(i) => onChange({ kind: 'trend', value: TRENDS[i].value })}
        columns
      />
    </>
  )
}

function CauseEffect({ question: q, response, onChange, checked }: QuestionProps<CauseEffectQuestion>) {
  const [order] = useState(() => shuffle(q.options.map((_, i) => i)))
  const selected = response?.kind === 'multi' ? response.indices : []
  return (
    <>
      <div className="scenario">
        <RichText text={q.scenario} />
      </div>
      <p className="hint">Select all that apply.</p>
      <Choices
        multi
        options={order.map((i) => ({ key: i, label: <RichText text={q.options[i]} /> }))}
        selected={selected}
        correct={q.answers}
        checked={checked}
        onToggle={(i) => {
          const next = selected.includes(i) ? selected.filter((s) => s !== i) : [...selected, i]
          onChange(next.length ? { kind: 'multi', indices: next } : null)
        }}
      />
    </>
  )
}

function Matching({ question: q, onChange, checked }: QuestionProps<MatchingQuestion>) {
  const n = q.pairs.length
  const [rightOrder] = useState(() => shuffle(q.pairs.map((_, i) => i)))
  // matches[left] = right index, or -1 when unpaired
  const [matches, setMatches] = useState<number[]>(() => Array(n).fill(-1))
  const [activeLeft, setActiveLeft] = useState<number | null>(null)

  const update = (next: number[]) => {
    setMatches(next)
    onChange(next.every((m) => m >= 0) ? { kind: 'matching', matches: next } : null)
  }

  const pickRight = (r: number) => {
    // With no left item chosen, pick the first unpaired one.
    const left = activeLeft ?? matches.findIndex((m) => m < 0)
    if (left < 0) return
    const next = matches.map((m) => (m === r ? -1 : m))
    next[left] = r
    update(next)
    const nextOpen = next.findIndex((m) => m < 0)
    setActiveLeft(nextOpen >= 0 ? nextOpen : null)
  }

  const pairNumber = (left: number) => (matches[left] >= 0 ? left + 1 : null)
  const leftOfRight = (r: number) => matches.findIndex((m) => m === r)

  return (
    <div className="matching">
      <p className="hint">Pick an item on the left, then its match on the right.</p>
      <div className="matching-cols">
        <div className="matching-col">
          {q.pairs.map((p, i) => {
            const ok = matches[i] === i
            const state = checked ? (ok ? 'is-correct' : 'is-wrong') : activeLeft === i ? 'is-selected' : ''
            return (
              <button
                key={i}
                type="button"
                className={`choice match-item ${state}`}
                disabled={checked}
                aria-pressed={activeLeft === i}
                onClick={() => setActiveLeft(i)}
              >
                {pairNumber(i) !== null && <span className="pair-badge">{pairNumber(i)}</span>}
                <span className="choice-label">
                  <InsideControl>
                    <RichText text={p.left} />
                  </InsideControl>
                  {checked && !ok && (
                    <span className="match-correction">
                      → <RichText text={p.right} />
                    </span>
                  )}
                </span>
              </button>
            )
          })}
        </div>
        <div className="matching-col">
          {rightOrder.map((r) => {
            const left = leftOfRight(r)
            const state = checked ? (left === r ? 'is-correct' : left >= 0 ? 'is-wrong' : '') : left >= 0 ? 'is-paired' : ''
            return (
              <button
                key={r}
                type="button"
                className={`choice match-item ${state}`}
                disabled={checked}
                onClick={() => pickRight(r)}
              >
                {left >= 0 && <span className="pair-badge">{left + 1}</span>}
                <span className="choice-label">
                  <InsideControl>
                    <RichText text={q.pairs[r].right} />
                  </InsideControl>
                </span>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

function PickRegion({ question: q, response, onChange, checked }: QuestionProps<PickRegionQuestion>) {
  return (
    <RegionDiagram
      diagram={q.diagram}
      selected={response?.kind === 'region' ? response.id : null}
      onSelect={(id) => onChange({ kind: 'region', id })}
      checked={checked}
      answer={q.answer}
    />
  )
}
