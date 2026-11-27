import { useEffect, useRef } from 'react'
import { branches } from '../content'
import type { Rank, SkillNode } from '../content'
import { nodeStatus, requirements } from '../game/unlock'
import type { Ranks } from '../game/unlock'
import { RankPips } from './RankPips'
import { RichText } from './RichText'

const STATUS_TEXT = {
  locked: 'Locked',
  available: 'Ready to learn',
  learned: 'Learned',
  mastered: 'Mastered',
} as const

/** Details for one skill node, shown as a bottom sheet (phone) or centered card (desktop). */
export function NodeSheet({
  node,
  ranks,
  hasContent,
  onStart,
  onClose,
}: {
  node: SkillNode
  ranks: Ranks
  hasContent: boolean
  onStart: () => void
  onClose: () => void
}) {
  const ref = useRef<HTMLDivElement>(null)
  const status = nodeStatus(node, ranks)
  const rank: Rank = ranks[node.id] ?? 0
  const req = requirements(node, ranks)
  const branch = branches.find((b) => b.id === node.branch)!

  useEffect(() => {
    ref.current?.focus()
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])

  const action = rank === 0 ? 'Start lesson' : rank === 1 ? 'Replay to master' : 'Practice'

  return (
    <div className="sheet-backdrop" onClick={onClose}>
      <div
        ref={ref}
        className={`sheet status-${status}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="sheet-title"
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sheet-head">
          <span className="lesson-branch">{branch.name}</span>
          <button type="button" className="icon-button" onClick={onClose} aria-label="Close">
            ✕
          </button>
        </div>
        <h2 id="sheet-title">
          <RichText text={node.title} />
        </h2>
        <div className="sheet-status">
          <RankPips rank={rank} />
          <span>{STATUS_TEXT[status]}</span>
        </div>
        <p className="sheet-summary">
          <RichText text={node.summary} />
        </p>

        {(req.all.length > 0 || req.any) && (
          <div className="sheet-reqs">
            <h3>Requires</h3>
            <ul>
              {req.all.map(({ node: r, met }) => (
                <li key={r.id} className={met ? 'is-met' : ''}>
                  <span aria-hidden="true">{met ? '✓' : '○'}</span> <RichText text={r.title} />
                  <span className="sr-only">{met ? ' (learned)' : ' (not learned yet)'}</span>
                </li>
              ))}
            </ul>
            {req.any && (
              <>
                <p className="sheet-any">
                  Any {req.any.count} of these ({req.any.have}/{req.any.count} learned):
                </p>
                <ul>
                  {req.any.options.map(({ node: r, met }) => (
                    <li key={r.id} className={met ? 'is-met' : ''}>
                      <span aria-hidden="true">{met ? '✓' : '○'}</span> <RichText text={r.title} />
                      <span className="sr-only">{met ? ' (learned)' : ' (not learned yet)'}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        )}

        <div className="sheet-actions">
          {!hasContent ? (
            <p className="sheet-note">Lessons for this skill are coming soon.</p>
          ) : status === 'locked' ? (
            <p className="sheet-note">Learn the required skills above to unlock this one.</p>
          ) : (
            <button type="button" className="primary" onClick={onStart}>
              {action}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
