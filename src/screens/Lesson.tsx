import { useState } from 'react'
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

  const check = () => {
    if (!response) return
    setChecked(true)
    setResults((r) => [...r, grade(q, response)])
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
        <QuestionView question={q} response={response} onChange={setResponse} checked={checked} />
      </main>

      <footer className={`lesson-footer${checked ? (isCorrect ? ' is-correct' : ' is-wrong') : ''}`}>
        <div className="lesson-footer-inner">
          {checked && (
            <div className="feedback" role="status">
              <div className="feedback-title">{isCorrect ? '✓ Correct!' : '✗ Not quite'}</div>
              <p className="feedback-text">
                <RichText text={q.explanation} />
              </p>
            </div>
          )}
          {checked ? (
            <button type="button" className="primary" onClick={next} autoFocus>
              {index + 1 >= questions.length ? 'See results' : 'Continue'}
            </button>
          ) : (
            <button type="button" className="primary" onClick={check} disabled={!response}>
              Check
            </button>
          )}
        </div>
      </footer>
    </div>
  )
}
