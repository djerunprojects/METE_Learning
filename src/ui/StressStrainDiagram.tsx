import { diagrams } from '../content'

// Engineering stress–strain curve of a ductile metal, drawn in SVG.
// Regions are labelled A–D; their names are revealed after checking.

const X0 = 50 // origin
const Y0 = 230
const YIELD = { x: 95, y: 92 }
const UTS = { x: 265, y: 52 }
const FRACTURE = { x: 352, y: 92 }

const CURVE = `M${X0} ${Y0} L${YIELD.x} ${YIELD.y} C 140 72, 205 53, ${UTS.x} ${UTS.y} C 305 52, 335 66, ${FRACTURE.x} ${FRACTURE.y}`

interface Band {
  id: string
  x1: number
  x2: number
}
const BANDS: Band[] = [
  { id: 'elastic', x1: X0, x2: YIELD.x },
  { id: 'uniform_plastic', x1: YIELD.x, x2: UTS.x },
  { id: 'necking', x1: UTS.x, x2: FRACTURE.x - 10 },
]

export interface RegionPickerProps {
  selected: string | null
  onSelect: (id: string) => void
  checked: boolean
  answer: string
}

function regionState(id: string, { selected, checked, answer }: RegionPickerProps) {
  if (checked && id === answer) return 'is-correct'
  if (checked && id === selected) return 'is-wrong'
  if (id === selected) return 'is-selected'
  return ''
}

export function StressStrainDiagram(props: RegionPickerProps) {
  const { onSelect, checked } = props
  const def = diagrams.stress_strain_ductile
  const letter = (id: string) => String.fromCharCode(65 + def.regions.findIndex((r) => r.id === id))
  const label = (id: string) => def.regions.find((r) => r.id === id)!.label

  const interactive = (id: string) => ({
    role: 'radio' as const,
    'aria-checked': props.selected === id,
    'aria-label': checked ? `${letter(id)}: ${label(id)}` : `Region ${letter(id)}`,
    tabIndex: checked ? -1 : 0,
    onClick: () => !checked && onSelect(id),
    onKeyDown: (e: React.KeyboardEvent) => {
      if (!checked && (e.key === 'Enter' || e.key === ' ')) {
        e.preventDefault()
        onSelect(id)
      }
    },
  })

  return (
    <figure className="diagram">
      <svg viewBox="0 0 400 270" role="radiogroup" aria-label={def.title}>
        {BANDS.map((b) => (
          <g key={b.id} className={`region ${regionState(b.id, props)}`} {...interactive(b.id)}>
            <rect x={b.x1} y={28} width={b.x2 - b.x1} height={Y0 - 28} rx={6} />
            <text x={(b.x1 + b.x2) / 2} y={22} textAnchor="middle" className="region-letter">
              {letter(b.id)}
            </text>
          </g>
        ))}

        {/* Axes */}
        <line x1={X0} y1={Y0} x2={385} y2={Y0} className="axis" />
        <line x1={X0} y1={Y0} x2={X0} y2={18} className="axis" />
        <text x={385} y={252} textAnchor="end" className="axis-label">
          Engineering strain, ε
        </text>
        <text x={18} y={Y0 / 2 + 15} textAnchor="middle" className="axis-label" transform={`rotate(-90 18 ${Y0 / 2 + 15})`}>
          Engineering stress, σ
        </text>

        <path d={CURVE} className="curve" />

        {/* Fracture point */}
        <g className={`region point ${regionState('fracture', props)}`} {...interactive('fracture')}>
          <circle cx={FRACTURE.x} cy={FRACTURE.y} r={11} />
          <text x={FRACTURE.x + 18} y={FRACTURE.y + 5} className="region-letter">
            {letter('fracture')}
          </text>
        </g>
      </svg>
      {checked && (
        <figcaption className="diagram-legend">
          {def.regions.map((r) => (
            <span key={r.id} className={r.id === props.answer ? 'is-answer' : ''}>
              <strong>{letter(r.id)}</strong> {r.label}
            </span>
          ))}
        </figcaption>
      )}
    </figure>
  )
}
