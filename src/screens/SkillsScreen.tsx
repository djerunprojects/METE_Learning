import { useState } from 'react'
import { branches, nodes } from '../content'
import type { Rank } from '../content'
import { nodesWithQuestions } from '../game/lesson'
import { band, proficiency, relativeDay } from '../game/proficiency'
import type { Progress } from '../game/progress'
import { RankPips } from '../ui/RankPips'
import { RichText } from '../ui/RichText'

type Sort = 'branch' | 'weakest' | 'recent'

const SORTS: { id: Sort; label: string }[] = [
  { id: 'branch', label: 'By branch' },
  { id: 'weakest', label: 'Weakest first' },
  { id: 'recent', label: 'Last practiced' },
]

const SORT_KEY = 'mete-learning-skills-sort'

function initialSort(): Sort {
  try {
    const v = localStorage.getItem(SORT_KEY)
    if (v === 'branch' || v === 'weakest' || v === 'recent') return v
  } catch {
    // Storage unavailable: use the default.
  }
  return 'branch'
}

const pct = (p: number) => `${Math.round(p * 100)}%`
const withContent = nodesWithQuestions()
const order = new Map(nodes.map((n, i) => [n.id, i]))

function ProficiencyBar({ value }: { value: number | null }) {
  if (value === null) return <span className="prof-none">No answers yet</span>
  return (
    <span className={`prof prof-${band(value)}`}>
      <span
        className="prof-bar"
        role="meter"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(value * 100)}
        aria-label="Proficiency"
      >
        <span className="prof-fill" style={{ width: pct(value) }} />
      </span>
      <span className="prof-value">{pct(value)}</span>
    </span>
  )
}

export function SkillsScreen({ progress, onPractice }: { progress: Progress; onPractice: (nodeId: string) => void }) {
  const [sort, setSort] = useState<Sort>(initialSort)

  const chooseSort = (s: Sort) => {
    setSort(s)
    try {
      localStorage.setItem(SORT_KEY, s)
    } catch {
      // Not critical.
    }
  }

  const skills = nodes
    .filter((n) => (progress.ranks[n.id] ?? 0) >= 1)
    .map((n) => ({
      node: n,
      rank: (progress.ranks[n.id] ?? 0) as Rank,
      prof: proficiency(progress.recent[n.id] ?? []),
      last: progress.lastPlayed[n.id] ?? null,
      branch: branches.find((b) => b.id === n.branch)!,
    }))

  const sorted = [...skills].sort((a, b) => {
    if (sort === 'weakest') return (a.prof ?? 2) - (b.prof ?? 2) || order.get(a.node.id)! - order.get(b.node.id)!
    if (sort === 'recent') return (b.last ?? '').localeCompare(a.last ?? '')
    return order.get(a.node.id)! - order.get(b.node.id)!
  })

  const summaries = branches
    .map((b) => {
      const inBranch = nodes.filter((n) => n.branch === b.id)
      const learned = skills.filter((s) => s.branch.id === b.id)
      const profs = learned.flatMap((s) => (s.prof === null ? [] : [s.prof]))
      const avg = profs.length ? profs.reduce((x, y) => x + y, 0) / profs.length : null
      return { branch: b, total: inBranch.length, learned: learned.length, avg }
    })
    .filter((s) => s.learned > 0)

  if (skills.length === 0) {
    return (
      <main className="skills">
        <h1>My skills</h1>
        <div className="empty">
          <p>You haven't learned any skills yet.</p>
          <p>Open the skill tree and start with <strong>Classes of Materials</strong>. Skills you learn will show up here with your proficiency.</p>
        </div>
      </main>
    )
  }

  return (
    <main className="skills">
      <h1>My skills</h1>
      <p className="skills-intro">
        Proficiency is your accuracy on a skill's last 20 answers, with recent answers counting more. Practice weak skills to raise it.
      </p>

      <section aria-labelledby="branch-overview">
        <h2 id="branch-overview" className="section-title">
          Branches
        </h2>
        <ul className="branch-summaries">
          {summaries.map((s) => (
            <li key={s.branch.id} className="branch-summary">
              <span className="branch-summary-name">{s.branch.name}</span>
              <span className="branch-summary-stats">
                {s.learned}/{s.total} learned
                {s.avg !== null && <> · avg {pct(s.avg)}</>}
              </span>
              <span className="branch-summary-bar" aria-hidden="true">
                <span style={{ width: `${(s.learned / s.total) * 100}%` }} />
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="skill-list">
        <div className="skills-toolbar">
          <h2 id="skill-list" className="section-title">
            Learned skills ({skills.length})
          </h2>
          <div className="segmented" role="radiogroup" aria-label="Sort skills">
            {SORTS.map((s) => (
              <button
                key={s.id}
                type="button"
                role="radio"
                aria-checked={sort === s.id}
                className={sort === s.id ? 'is-active' : ''}
                onClick={() => chooseSort(s.id)}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>

        <ul className="skill-list">
          {sorted.map((s) => (
            <li key={s.node.id} className="skill-row">
              <div className="skill-main">
                <span className="lesson-branch">{s.branch.name}</span>
                <span className="skill-title">
                  <RichText text={s.node.title} />
                </span>
                <span className="skill-meta">
                  <RankPips rank={s.rank} /> {s.rank === 2 ? 'Mastered' : 'Learned'}
                  {s.last && <> · practiced {relativeDay(s.last)}</>}
                </span>
              </div>
              <div className="skill-prof">
                <ProficiencyBar value={s.prof} />
              </div>
              <button
                type="button"
                className="secondary skill-practice"
                onClick={() => onPractice(s.node.id)}
                disabled={!withContent.has(s.node.id)}
                title={withContent.has(s.node.id) ? undefined : 'Lessons for this skill are coming soon'}
              >
                Practice
                {!withContent.has(s.node.id) && <span className="sr-only"> (lessons coming soon)</span>}
              </button>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
