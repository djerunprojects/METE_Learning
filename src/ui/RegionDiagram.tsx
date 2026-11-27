import type { KeyboardEvent } from 'react'
import { diagrams } from '../content'
import type { DiagramId } from '../content'
import { diagramArt } from './diagramArt'

export interface RegionDiagramProps {
  diagram: DiagramId
  selected: string | null
  onSelect: (id: string) => void
  checked: boolean
  answer: string
}

/** A diagram with clickable regions labelled A, B, C…; region names are revealed after checking. */
export function RegionDiagram({ diagram, selected, onSelect, checked, answer }: RegionDiagramProps) {
  const def = diagrams[diagram]
  const art = diagramArt[diagram]
  const letter = (id: string) => String.fromCharCode(65 + def.regions.findIndex((r) => r.id === id))
  const label = (id: string) => def.regions.find((r) => r.id === id)!.label

  const state = (id: string) => {
    if (checked && id === answer) return 'is-correct'
    if (checked && id === selected) return 'is-wrong'
    if (id === selected) return 'is-selected'
    return ''
  }

  return (
    <figure className={`diagram${art.outlined ? ' is-outlined' : ''}`}>
      <svg viewBox={art.viewBox} role="radiogroup" aria-label={def.title}>
        {art.regions.map((r) => (
          <path
            key={r.id}
            d={r.d}
            className={`region-shape ${state(r.id)}`}
            onClick={() => !checked && onSelect(r.id)}
            aria-hidden="true"
          />
        ))}
        <g className="diagram-overlay">{art.overlay}</g>
        {art.regions.map((r) => (
          <g
            key={r.id}
            className={`region-label ${state(r.id)}`}
            role="radio"
            aria-checked={selected === r.id}
            aria-label={checked ? `${letter(r.id)}: ${label(r.id)}` : `Region ${letter(r.id)}`}
            tabIndex={checked ? -1 : 0}
            onClick={() => !checked && onSelect(r.id)}
            onKeyDown={(e: KeyboardEvent) => {
              if (!checked && (e.key === 'Enter' || e.key === ' ')) {
                e.preventDefault()
                onSelect(r.id)
              }
            }}
          >
            <circle cx={r.label[0]} cy={r.label[1] - 5} r={10} />
            <text x={r.label[0]} y={r.label[1]} textAnchor="middle">
              {letter(r.id)}
            </text>
          </g>
        ))}
      </svg>
      <figcaption className="diagram-title">{def.title}</figcaption>
      {checked && (
        <div className="diagram-legend">
          {def.regions.map((r) => (
            <span key={r.id} className={r.id === answer ? 'is-answer' : ''}>
              <strong>{letter(r.id)}</strong> {r.label}
            </span>
          ))}
        </div>
      )}
    </figure>
  )
}
