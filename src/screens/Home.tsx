import { branches, MAX_RANK, nodes } from '../content'
import type { Rank } from '../content'
import { nodesWithQuestions } from '../game/lesson'
import { RichText } from '../ui/RichText'

// Temporary home screen (step 2): lists the lessons that have questions.
// The skill tree screen replaces it in step 3.

export function RankPips({ rank }: { rank: Rank }) {
  return (
    <span className="pips" aria-label={`Rank ${rank} of ${MAX_RANK}`}>
      {Array.from({ length: MAX_RANK }, (_, i) => (
        <span key={i} className={`pip${i < rank ? ' is-on' : ''}`} />
      ))}
    </span>
  )
}

export function Home({
  ranks,
  xp,
  onStart,
}: {
  ranks: Record<string, Rank>
  xp: number
  onStart: (nodeId: string) => void
}) {
  const available = nodesWithQuestions()
  const lessons = nodes.filter((n) => available.has(n.id))
  return (
    <main className="home">
      <header className="home-header">
        <h1>METE Learning</h1>
        <span className="xp-chip">{xp} XP</span>
      </header>
      <p className="home-intro">
        Sample lessons. The full skill tree screen arrives in the next step. Progress is kept until you reload the page.
      </p>
      <ul className="lesson-list">
        {lessons.map((n) => {
          const branch = branches.find((b) => b.id === n.branch)!
          const rank = ranks[n.id] ?? 0
          return (
            <li key={n.id} className="lesson-card">
              <div className="lesson-card-head">
                <span className="lesson-branch">{branch.name}</span>
                <RankPips rank={rank} />
              </div>
              <h2>
                <RichText text={n.title} />
              </h2>
              <p>
                <RichText text={n.summary} />
              </p>
              <button type="button" className="primary" onClick={() => onStart(n.id)}>
                {rank === 0 ? 'Start' : rank === 1 ? 'Master it' : 'Practice'}
              </button>
            </li>
          )
        })}
      </ul>
      <section className="home-glossary-note">
        <h2>Tip</h2>
        <p>
          Words with a dotted underline, like <RichText text="CFRP" /> or <RichText text="BCC" />, are acronyms: hover or tap
          them for the full name. Hover or tap a formula to see what each symbol means.
        </p>
      </section>
    </main>
  )
}
