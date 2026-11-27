import { MASTERY_THRESHOLD, PASS_THRESHOLD } from '../content'
import { XP_PER_CORRECT } from '../game/scoring'
import type { LessonOutcome } from '../game/scoring'

function headline(o: LessonOutcome) {
  if (o.newRank === 2 && o.previousRank < 2) return { title: 'Mastered!', icon: '★★' }
  if (o.newRank === 1 && o.previousRank === 0) return { title: 'Skill learned!', icon: '★' }
  if (o.perfect) return { title: 'Perfect run!', icon: '✦' }
  if (o.passed) return { title: 'Nice practice!', icon: '✓' }
  return { title: 'Keep going', icon: '↻' }
}

function rankNote(o: LessonOutcome) {
  const pct = (x: number) => `${Math.round(x * 100)}%`
  if (o.newRank === 2) return o.previousRank === 2 ? 'Already mastered: good practice.' : 'Rank 2 of 2 reached.'
  if (o.newRank === 1)
    return o.previousRank === 1
      ? `Score ${pct(MASTERY_THRESHOLD)} or more on a replay to master this skill.`
      : `Rank 1 of 2. Replay and score ${pct(MASTERY_THRESHOLD)} or more to master it.`
  return `You need ${pct(PASS_THRESHOLD)} to learn this skill. Read the explanations and try again.`
}

export function Results({
  title,
  outcome,
  note,
  levelUp,
  onRetry,
  onHome,
  homeLabel,
}: {
  title: string
  outcome: LessonOutcome
  /** Replaces the rank message (used for mistake reviews, which do not change ranks). */
  note?: string
  /** The new level, when this lesson caused a level up. */
  levelUp: number | null
  /** Omitted when there is nothing left to play again. */
  onRetry?: () => void
  onHome: () => void
  homeLabel: string
}) {
  const h = headline(outcome)
  return (
    <main className="results">
      <div className={`results-badge${outcome.passed ? ' is-pass' : ''}`} aria-hidden="true">
        {h.icon}
      </div>
      <h1>{h.title}</h1>
      <p className="results-node">{title}</p>

      <div className="stats">
        <div className="stat">
          <div className="stat-value">
            {outcome.correct}/{outcome.total}
          </div>
          <div className="stat-label">Correct</div>
        </div>
        <div className="stat">
          <div className="stat-value">{Math.round(outcome.accuracy * 100)}%</div>
          <div className="stat-label">Accuracy</div>
        </div>
        <div className="stat">
          <div className="stat-value">+{outcome.xp}</div>
          <div className="stat-label">XP{outcome.xp > outcome.correct * XP_PER_CORRECT ? ' (perfect bonus)' : ''}</div>
        </div>
      </div>

      {levelUp !== null && (
        <p className="level-up" role="status">
          Level up! You reached <strong>level {levelUp}</strong>.
        </p>
      )}

      <p className="rank-note">{note ?? rankNote(outcome)}</p>

      <div className="results-actions">
        {onRetry && (
          <button type="button" className="secondary" onClick={onRetry}>
            Play again
          </button>
        )}
        <button type="button" className="primary" onClick={onHome}>
          {homeLabel}
        </button>
      </div>
    </main>
  )
}
