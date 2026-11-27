import { useEffect, useRef, useState } from 'react'
import type { SkillLesson, SkillNode } from '../content'
import { Formula } from '../ui/Formula'
import { LessonText } from '../ui/LessonText'
import { RegionDiagram } from '../ui/RegionDiagram'
import { RichText } from '../ui/RichText'

/**
 * Swipeable lesson cards for one skill. The last card lists the key points and offers
 * either "Start practice" (first time) or a way back (when re-reading).
 */
export function LessonReader({
  node,
  lesson,
  finishLabel,
  onFinish,
  onQuit,
}: {
  node: SkillNode
  lesson: SkillLesson
  finishLabel: string
  onFinish: () => void
  onQuit: () => void
}) {
  const total = lesson.cards.length + 1 // + key points
  const [index, setIndex] = useState(0)
  const touchStart = useRef<{ x: number; y: number } | null>(null)
  const isSummary = index === lesson.cards.length
  const card = lesson.cards[index]

  const go = (i: number) => {
    const next = Math.max(0, Math.min(total - 1, i))
    if (next !== index) {
      setIndex(next)
      window.scrollTo(0, 0)
    }
  }

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') setIndex((i) => Math.min(total - 1, i + 1))
      if (e.key === 'ArrowLeft') setIndex((i) => Math.max(0, i - 1))
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [total])

  return (
    <div
      className="reader"
      onTouchStart={(e) => (touchStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY })}
      onTouchEnd={(e) => {
        const start = touchStart.current
        touchStart.current = null
        if (!start) return
        const dx = e.changedTouches[0].clientX - start.x
        const dy = e.changedTouches[0].clientY - start.y
        // Horizontal swipes only, so vertical scrolling and tapping tooltips still work.
        if (Math.abs(dx) > 60 && Math.abs(dx) > 1.5 * Math.abs(dy)) go(index + (dx < 0 ? 1 : -1))
      }}
    >
      <header className="lesson-top">
        <button type="button" className="icon-button" onClick={onQuit} aria-label="Close lesson">
          ✕
        </button>
        <div className="dots" role="tablist" aria-label="Lesson cards">
          {Array.from({ length: total }, (_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={i === total - 1 ? 'Key points' : `Card ${i + 1}`}
              className={`dot${i === index ? ' is-active' : ''}${i < index ? ' is-done' : ''}`}
              onClick={() => go(i)}
            />
          ))}
        </div>
        <span className="lesson-count">
          {index + 1}/{total}
        </span>
      </header>

      <main className="reader-body" key={index}>
        <p className="lesson-node">Lesson · {node.title}</p>
        {isSummary ? (
          <>
            <h1 className="reader-title">Key points</h1>
            <ul className="key-points">
              {lesson.keyPoints.map((k, i) => (
                <li key={i}>
                  <RichText text={k} />
                </li>
              ))}
            </ul>
          </>
        ) : (
          <>
            <h1 className="reader-title">
              <RichText text={card.title} />
            </h1>
            <div className="reader-text">
              <LessonText body={card.body} />
            </div>
            {card.formula && <Formula id={card.formula} />}
            {card.diagram && (
              <RegionDiagram diagram={card.diagram} selected={null} onSelect={() => {}} checked answer={card.highlight ?? ''} />
            )}
          </>
        )}
      </main>

      <nav className="reader-nav">
        <button type="button" className="secondary" onClick={() => go(index - 1)} disabled={index === 0}>
          Back
        </button>
        {isSummary ? (
          <button type="button" className="primary" onClick={onFinish}>
            {finishLabel}
          </button>
        ) : (
          <button type="button" className="primary" onClick={() => go(index + 1)}>
            Next
          </button>
        )}
      </nav>
    </div>
  )
}
