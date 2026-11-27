import { useRef, useState } from 'react'
import { branches, nodes } from '../content'
import type { Branch, Layer, Rank, SkillNode } from '../content'
import { nodesWithQuestions } from '../game/lesson'
import { nodeStatus, requirements } from '../game/unlock'
import type { Progress } from '../game/progress'
import { NodeSheet } from '../ui/NodeSheet'
import { RankPips } from '../ui/RankPips'
import { RichText } from '../ui/RichText'

const LAYERS: { layer: Layer; title: string; description: string }[] = [
  { layer: 'root', title: 'Foundations', description: 'Every path starts here.' },
  {
    layer: 'core',
    title: 'Core',
    description: 'The four elements of materials engineering: structure, properties, processing and performance.',
  },
  { layer: 'discipline', title: 'Disciplines', description: 'Specialize in a material class or process area.' },
  { layer: 'application', title: 'Applications', description: 'Endgame branches that combine several disciplines.' },
]

const withContent = nodesWithQuestions()

function StatusIcon({ status }: { status: ReturnType<typeof nodeStatus> }) {
  if (status === 'locked')
    return (
      <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true" className="node-icon">
        <rect x="3" y="7" width="10" height="7" rx="1.5" fill="currentColor" />
        <path d="M5 7V5a3 3 0 0 1 6 0v2" fill="none" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    )
  if (status === 'mastered') return <span className="node-icon" aria-hidden="true">★</span>
  if (status === 'learned') return <span className="node-icon" aria-hidden="true">✓</span>
  return null
}

function NodeTile({ node, ranks, onOpen }: { node: SkillNode; ranks: Record<string, Rank>; onOpen: () => void }) {
  const status = nodeStatus(node, ranks)
  const rank = ranks[node.id] ?? 0
  const soon = !withContent.has(node.id)
  // Extra requirements from other branches (besides the previous node in this branch).
  const crossReqs = node.tier > 1 ? (node.unlock?.allOf ?? []).filter((id) => nodes.find((n) => n.id === id)?.branch !== node.branch) : []
  return (
    <button
      type="button"
      className={`node status-${status}${soon ? ' is-soon' : ''}`}
      onClick={onOpen}
      aria-label={`${node.title}: ${status}${soon ? ', lessons coming soon' : ''}`}
    >
      <span className="node-top">
        <StatusIcon status={status} />
        {crossReqs.length > 0 && (
          <span className="node-cross" title={`Also needs ${crossReqs.length} skill(s) from other branches`}>
            +{crossReqs.length}
          </span>
        )}
      </span>
      <span className="node-title">{node.title}</span>
      <RankPips rank={rank} />
    </button>
  )
}

function BranchColumn({ branch, ranks, onOpen }: { branch: Branch; ranks: Record<string, Rank>; onOpen: (n: SkillNode) => void }) {
  const list = nodes.filter((n) => n.branch === branch.id)
  const entry = list[0] ? requirements(list[0], ranks) : null
  const learnedCount = list.filter((n) => (ranks[n.id] ?? 0) >= 1).length
  return (
    <div className={`branch branch-${branch.layer}`}>
      <div className="branch-head">
        <h3>{branch.name}</h3>
        <span className="branch-count">
          {learnedCount}/{list.length}
        </span>
      </div>
      {branch.layer !== 'root' && entry && (
        <div className="branch-entry">
          {entry.all.length > 0 && (
            <>
              Needs{' '}
              {entry.all.map((r, i) => (
                <span key={r.node.id} className={r.met ? 'is-met' : ''}>
                  {i > 0 && ', '}
                  <RichText text={r.node.title} />
                </span>
              ))}
            </>
          )}
          {entry.any && (
            <span className={entry.any.have >= entry.any.count ? 'is-met' : ''}>
              Needs {entry.any.count} disciplines past their first skill ({entry.any.have}/{entry.any.count})
            </span>
          )}
        </div>
      )}
      <ol className="branch-nodes">
        {list.map((n, i) => (
          <li key={n.id}>
            {i > 0 && <span className={`connector${(ranks[list[i - 1].id] ?? 0) >= 1 ? ' is-on' : ''}`} aria-hidden="true" />}
            <NodeTile node={n} ranks={ranks} onOpen={() => onOpen(n)} />
          </li>
        ))}
      </ol>
    </div>
  )
}

export function TreeScreen({
  progress,
  saveFailed,
  onStart,
  onImport,
}: {
  progress: Progress
  saveFailed: boolean
  onStart: (nodeId: string) => void
  onImport: (json: string) => string | null
}) {
  const [openId, setOpenId] = useState<string | null>(null)
  const [importMsg, setImportMsg] = useState<string | null>(null)
  const fileRef = useRef<HTMLInputElement>(null)
  const open = openId ? nodes.find((n) => n.id === openId)! : null
  const learned = nodes.filter((n) => (progress.ranks[n.id] ?? 0) >= 1).length
  const mastered = nodes.filter((n) => (progress.ranks[n.id] ?? 0) >= 2).length

  const exportProgress = () => {
    const blob = new Blob([JSON.stringify(progress, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `mete-progress-${new Date().toISOString().slice(0, 10)}.json`
    a.click()
    URL.revokeObjectURL(url)
  }

  const importFile = async (file: File) => {
    if (!window.confirm('Replace your current progress with the progress in this file?')) return
    const error = onImport(await file.text())
    setImportMsg(error ?? 'Progress imported.')
  }

  return (
    <>
      <main className="tree">
        <div className="tree-intro">
          <h1>METE Skill Tree</h1>
          <p>
            {learned}/{nodes.length} skills learned · {mastered} mastered. Tap a skill to see what it needs.
          </p>
          <ul className="legend" aria-label="Legend">
            <li><span className="legend-dot status-locked" /> Locked</li>
            <li><span className="legend-dot status-available" /> Ready</li>
            <li><span className="legend-dot status-learned" /> Learned</li>
            <li><span className="legend-dot status-mastered" /> Mastered</li>
            <li><span className="legend-dot is-soon" /> Coming soon</li>
            <li><span className="node-cross">+1</span> Needs a skill from another branch</li>
          </ul>
          {saveFailed && (
            <p className="warning" role="alert">
              Your browser is blocking storage, so progress won't be saved. Use Export to keep a copy.
            </p>
          )}
        </div>

        {LAYERS.map(({ layer, title, description }) => (
          <section key={layer} className={`layer layer-${layer}`} aria-labelledby={`layer-${layer}`}>
            <div className="layer-head">
              <h2 id={`layer-${layer}`}>{title}</h2>
              <p>{description}</p>
            </div>
            <div className="branch-row">
              {branches
                .filter((b) => b.layer === layer)
                .map((b) => (
                  <BranchColumn key={b.id} branch={b} ranks={progress.ranks} onOpen={(n) => setOpenId(n.id)} />
                ))}
            </div>
          </section>
        ))}

        <section className="progress-tools">
          <h2>Your progress</h2>
          <p>Progress is saved in this browser. Export a copy to back it up or move it to another device.</p>
          <div className="progress-actions">
            <button type="button" className="secondary" onClick={exportProgress}>
              Export progress
            </button>
            <button type="button" className="secondary" onClick={() => fileRef.current?.click()}>
              Import progress
            </button>
            <input
              ref={fileRef}
              type="file"
              accept="application/json,.json"
              hidden
              onChange={(e) => {
                const file = e.target.files?.[0]
                e.target.value = ''
                if (file) void importFile(file)
              }}
            />
          </div>
          {importMsg && (
            <p className="import-msg" role="status">
              {importMsg}
            </p>
          )}
        </section>
      </main>

      {open && (
        <NodeSheet
          node={open}
          ranks={progress.ranks}
          hasContent={withContent.has(open.id)}
          onClose={() => setOpenId(null)}
          onStart={() => onStart(open.id)}
        />
      )}
    </>
  )
}
