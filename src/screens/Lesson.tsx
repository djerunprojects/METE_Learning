import { useEffect, useRef, useState } from 'react'
import type { Question, SkillNode } from '../content'
import { grade } from '../game/lesson'
import type { Response } from '../game/lesson'
import { Formula } from '../ui/Formula'
import { QuestionView } from '../ui/QuestionView'
import { RichText } from '../ui/RichText'

export function Lesson({
  node,
  questions,
  onFinish,
  onQuit,
}: {
  node: SkillNode
  questions: Question[]
  /** Called with one entry per question: true when answered correctly. */
  onFinish: (answers: boolean[]) => void
  onQuit: () => void
}) {
  const [index, setIndex] = useState(0)
  const [response, setResponse] = useState<Response | null>(null)
  const [checked, setChecked] = useState(false)
  const [results, setResults] = useState<boolean[]>([])

  const q = questions[index]
  const isCorrect = checked && response !== null && grade(q, response)
  const done = index + (checked ? 1 : 0)

  // Every type except "select all that apply" is answered by the tap itself.
  // Matching reports a response only once every pair is made, so it also auto-submits.
  const submitsOnTap = q.type !== 'cause_effect'

  const check = (r: Response) => {
    setChecked(true)
    setResults((prev) => [...prev, grade(q, r)])
  }

  const answer = (r: Response | null) => {
    if (checked) return
    setResponse(r)
    if (r && submitsOnTap) check(r)
  }

  const next = () => {
    if (index + 1 >= questions.length) {
      onFinish(results)
      return
    }
    setIndex(index + 1)
    setResponse(null)
    setChecked(false)
  }

  return (
    <div className="lesson">
      <header className="lesson-top">
        <button type="button" className="icon-button" onClick={onQuit} aria-label="Quit lesson">
          ✕
        </button>
        <div
          className="progress"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={questions.length}
          aria-valuenow={done}
          aria-label="Lesson progress"
        >
          <div className="progress-fill" style={{ width: `${(done / questions.length) * 100}%` }} />
        </div>
        <span className="lesson-count">
          {index + 1}/{questions.length}
        </span>
      </header>

      <main className="lesson-body" key={q.id}>
        <p className="lesson-node">{node.title}</p>
        <h1 className="prompt">
          <RichText text={q.prompt} />
        </h1>
        {q.formula && <Formula id={q.formula} />}
        <QuestionView question={q} response={response} onChange={answer} checked={checked} />

        {!checked && !submitsOnTap && (
          <div className="submit-row">
            <button type="button" className="primary" onClick={() => response && check(response)} disabled={!response}>
              Submit
            </button>
          </div>
        )}

        {checked && (
          <Feedback
            correct={isCorrect}
            explanation={q.explanation}
            last={index + 1 >= questions.length}
            onNext={next}
          />
        )}
      </main>
    </div>
  )
}

/** Feedback shown right under the options, scrolled into view after answering. */
function Feedback({
  correct,
  explanation,
  last,
  onNext,
}: {
  correct: boolean
  explanation: string
  last: boolean
  onNext: () => void
}) {
  const ref = useRef<HTMLDivElement>(null)
  const button = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    button.current?.focus({ preventScroll: true })
    // Bring the whole card into view with a small margin below it. The layout can still grow
    // a little right after answering (e.g. the revealed diagram legend), so check again shortly after.
    const ensureVisible = () => {
      const el = ref.current
      if (!el) return
      const overflow = el.getBoundingClientRect().bottom - (window.innerHeight - 16)
      if (overflow > 1) window.scrollBy({ top: overflow, behavior: 'smooth' })
    }
    const frame = requestAnimationFrame(ensureVisible)
    const timer = window.setTimeout(ensureVisible, 350)
    return () => {
      cancelAnimationFrame(frame)
      window.clearTimeout(timer)
    }
  }, [])

  return (
    <div ref={ref} className={`feedback ${correct ? 'is-correct' : 'is-wrong'}`} role="status">
      <div className="feedback-title">{correct ? '✓ Correct!' : '✗ Not quite'}</div>
      <p className="feedback-text">
        <RichText text={explanation} />
      </p>
      <button ref={button} type="button" className="primary feedback-next" onClick={onNext}>
        {last ? 'See results' : 'Continue'}
      </button>
    </div>
  )
}
