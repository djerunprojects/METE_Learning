import type { ReactNode } from 'react'
import type { DiagramId } from '../content'

// SVG drawings for pick_region diagrams. Region ids must match `src/content/diagrams.ts`.
// Each region is a clickable path; `label` is where its letter (A, B, …) is drawn.
// `overlay` holds lines, axes and text drawn on top (not clickable).

export interface ArtRegion {
  id: string
  d: string
  label: [number, number]
}

export interface DiagramArt {
  viewBox: string
  /** Draw dashed outlines around regions (useful when regions are bands, not phase fields). */
  outlined?: boolean
  regions: ArtRegion[]
  overlay: ReactNode
}

type Pt = [number, number]
const line = (pts: Pt[]) => pts.map(([x, y], i) => `${i ? 'L' : 'M'}${x} ${y}`).join(' ')
const cont = (pts: Pt[]) => pts.map(([x, y]) => `L${x} ${y}`).join(' ')

// ---------------------------------------------------------------------------
// Stress–strain curve (ductile metal)
// ---------------------------------------------------------------------------

const SS = { x0: 50, y0: 230, yieldX: 95, yieldY: 92, utsX: 265, utsY: 52, fracX: 352, fracY: 92 }

const stressStrain: DiagramArt = {
  viewBox: '0 0 400 270',
  outlined: true,
  regions: [
    { id: 'elastic', d: `M${SS.x0} 28 H${SS.yieldX} V${SS.y0} H${SS.x0} Z`, label: [72, 22] },
    { id: 'uniform_plastic', d: `M${SS.yieldX} 28 H${SS.utsX} V${SS.y0} H${SS.yieldX} Z`, label: [180, 22] },
    { id: 'necking', d: `M${SS.utsX} 28 H${SS.fracX - 10} V${SS.y0} H${SS.utsX} Z`, label: [303, 22] },
    {
      id: 'fracture',
      d: `M${SS.fracX - 11} ${SS.fracY} a11 11 0 1 0 22 0 a11 11 0 1 0 -22 0`,
      label: [SS.fracX + 20, SS.fracY + 5],
    },
  ],
  overlay: (
    <>
      <line x1={SS.x0} y1={SS.y0} x2={385} y2={SS.y0} className="axis" />
      <line x1={SS.x0} y1={SS.y0} x2={SS.x0} y2={18} className="axis" />
      <text x={385} y={252} textAnchor="end" className="axis-label">
        Engineering strain, ε
      </text>
      <text x={18} y={130} textAnchor="middle" className="axis-label" transform="rotate(-90 18 130)">
        Engineering stress, σ
      </text>
      <path
        d={`M${SS.x0} ${SS.y0} L${SS.yieldX} ${SS.yieldY} C 140 72, 205 53, ${SS.utsX} ${SS.utsY} C 305 52, 335 66, ${SS.fracX} ${SS.fracY}`}
        className="curve"
      />
    </>
  ),
}

// ---------------------------------------------------------------------------
// Binary eutectic phase diagram (A–B), schematic
// x: 50 = 100% A … 370 = 100% B; y: 30 = hot … 270 = cold
// ---------------------------------------------------------------------------

const liqA = 'M50 70 Q150 110 230 170' // liquidus, A side
const solA = 'M50 70 Q70 140 110 170' // solidus, A side
const liqB = 'M370 95 Q300 120 230 170' // liquidus, B side
const solB = 'M370 95 Q360 140 330 170' // solidus, B side
const solvA = 'M110 170 Q80 220 65 270' // α solvus
const solvB = 'M330 170 Q345 220 355 270' // β solvus

const binaryEutectic: DiagramArt = {
  viewBox: '0 0 400 300',
  regions: [
    { id: 'liquid', d: 'M50 30 L370 30 L370 95 Q300 120 230 170 Q150 110 50 70 Z', label: [210, 62] },
    { id: 'alpha_l', d: 'M50 70 Q150 110 230 170 L110 170 Q70 140 50 70 Z', label: [128, 146] },
    { id: 'beta_l', d: 'M370 95 Q300 120 230 170 L330 170 Q360 140 370 95 Z', label: [316, 150] },
    { id: 'alpha', d: 'M50 70 Q70 140 110 170 Q80 220 65 270 L50 270 Z', label: [64, 205] },
    { id: 'beta', d: 'M370 95 Q360 140 330 170 Q345 220 355 270 L370 270 Z', label: [358, 222] },
    { id: 'alpha_beta', d: 'M110 170 L330 170 Q345 220 355 270 L65 270 Q80 220 110 170 Z', label: [215, 228] },
  ],
  overlay: (
    <>
      {[liqA, solA, liqB, solB, solvA, solvB].map((d) => (
        <path key={d} d={d} className="phase-line" />
      ))}
      <line x1={110} y1={170} x2={330} y2={170} className="phase-line" />
      <circle cx={230} cy={170} r={3.5} className="phase-point" />
      <text x={236} y={186} className="diagram-note is-small">
        eutectic
      </text>
      <line x1={50} y1={270} x2={370} y2={270} className="axis" />
      <line x1={50} y1={270} x2={50} y2={24} className="axis" />
      <line x1={370} y1={270} x2={370} y2={24} className="axis" />
      <text x={50} y={287} textAnchor="middle" className="axis-label">
        A
      </text>
      <text x={370} y={287} textAnchor="middle" className="axis-label">
        B
      </text>
      <text x={210} y={290} textAnchor="middle" className="axis-label">
        Composition (wt% B) →
      </text>
      <text x={20} y={150} textAnchor="middle" className="axis-label" transform="rotate(-90 20 150)">
        Temperature →
      </text>
    </>
  ),
}

// ---------------------------------------------------------------------------
// Fe–Fe₃C, steel region, schematic. x = 50 + 145.45·(wt% C); y = 30 + 0.48·(1100 − T °C)
// Eutectoid: 0.76 wt% C, 727 °C. A3 starts at 912 °C. α field widened for visibility.
// ---------------------------------------------------------------------------

const FE = {
  t912: 120,
  t727: 209,
  eutX: 160.5,
  acmTopX: 339.5, // Acm at 1100 °C (≈ 1.99 wt% C)
  alphaX727: 68, // α solvus at 727 °C (true value 0.022 wt% C; widened)
  alphaXBottom: 62,
}

const feC: DiagramArt = {
  viewBox: '0 0 400 300',
  regions: [
    { id: 'gamma', d: line([[50, 30], [FE.acmTopX, 30], [FE.eutX, FE.t727], [50, FE.t912]]) + ' Z', label: [140, 105] },
    { id: 'alpha_gamma', d: line([[50, FE.t912], [FE.eutX, FE.t727], [FE.alphaX727, FE.t727]]) + ' Z', label: [96, 192] },
    { id: 'alpha', d: line([[50, FE.t912], [FE.alphaX727, FE.t727], [FE.alphaXBottom, 270], [50, 270]]) + ' Z', label: [58, 245] },
    { id: 'gamma_fe3c', d: line([[FE.acmTopX, 30], [370, 30], [370, FE.t727], [FE.eutX, FE.t727]]) + ' Z', label: [305, 140] },
    { id: 'alpha_fe3c', d: line([[FE.alphaX727, FE.t727], [370, FE.t727], [370, 270], [FE.alphaXBottom, 270]]) + ' Z', label: [220, 245] },
  ],
  overlay: (
    <>
      <path d={line([[50, FE.t912], [FE.eutX, FE.t727]])} className="phase-line" />
      <path d={line([[FE.acmTopX, 30], [FE.eutX, FE.t727]])} className="phase-line" />
      <path d={line([[50, FE.t912], [FE.alphaX727, FE.t727], [FE.alphaXBottom, 270]])} className="phase-line" />
      <line x1={FE.alphaX727} y1={FE.t727} x2={370} y2={FE.t727} className="phase-line" />
      <circle cx={FE.eutX} cy={FE.t727} r={3.5} className="phase-point" />
      <line x1={50} y1={270} x2={370} y2={270} className="axis" />
      <line x1={50} y1={270} x2={50} y2={24} className="axis" />
      <text x={44} y={FE.t727 + 4} textAnchor="end" className="axis-label">
        727
      </text>
      <text x={44} y={FE.t912 + 4} textAnchor="end" className="axis-label">
        912
      </text>
      <text x={FE.eutX} y={285} textAnchor="middle" className="axis-label">
        0.76
      </text>
      <line x1={FE.eutX} y1={270} x2={FE.eutX} y2={275} className="axis" />
      <text x={50} y={285} textAnchor="middle" className="axis-label">
        0
      </text>
      <text x={341} y={285} textAnchor="middle" className="axis-label">
        2.0
      </text>
      <line x1={341} y1={270} x2={341} y2={275} className="axis" />
      <text x={250} y={298} textAnchor="middle" className="axis-label">
        Carbon (wt% C)
      </text>
      <text x={14} y={150} textAnchor="middle" className="axis-label" transform="rotate(-90 14 150)">
        Temperature (°C)
      </text>
    </>
  ),
}

// ---------------------------------------------------------------------------
// TTT diagram, eutectoid steel, schematic.
// x = 60 + 50·(log₁₀ t + 1), t in seconds (0.1 s … 10⁵ s); y = 30 + 0.3·(800 − T °C)
// ---------------------------------------------------------------------------

const TTT = { a1: 52, nose: 108, ms: 204 }

// Transformation start curve, from the A1 line (long times) down to Ms.
const start: Pt[] = [
  [370, 53], [285, 54.5], [170, 60], [125, 75], [106, 93], [102.5, 108],
  [108, 122], [120, 135], [135, 150], [165, 165], [200, 180], [230, 195], [245, TTT.ms],
]
const noseIdx = start.findIndex(([, y]) => y === TTT.nose)
const upper = start.slice(0, noseIdx + 1) // A1 → nose
const lower = start.slice(noseIdx) // nose → Ms

// Transformation finish curve (decoration only).
const finish: Pt[] = [
  [370, 54], [260, 60], [200, 75], [172, 93], [160, 108], [170, 122],
  [190, 135], [225, 150], [260, 165], [290, 180], [325, 195], [340, TTT.ms],
]

const decades = [-1, 0, 1, 2, 3, 4, 5]
const tickLabel = (e: number) => (e === 0 ? '1' : e === 1 ? '10' : `10${e < 0 ? '⁻¹' : ['', '', '²', '³', '⁴', '⁵'][e]}`)

const ttt: DiagramArt = {
  viewBox: '0 0 400 300',
  regions: [
    { id: 'stable_austenite', d: `M60 30 H370 V${TTT.a1} H60 Z`, label: [215, 46] },
    { id: 'unstable_austenite', d: `M60 ${TTT.a1} L370 ${TTT.a1} ${cont(start)} L60 ${TTT.ms} Z`, label: [80, 150] },
    { id: 'pearlite', d: `${line(upper)} L370 ${TTT.nose} Z`, label: [300, 86] },
    { id: 'bainite', d: `${line(lower)} L370 ${TTT.ms} L370 ${TTT.nose} Z`, label: [300, 160] },
    { id: 'martensite', d: `M60 ${TTT.ms} H370 V270 H60 Z`, label: [215, 245] },
  ],
  overlay: (
    <>
      <path d={line(start)} className="phase-line" />
      <path d={line(finish)} className="phase-line is-dashed" />
      <line x1={60} y1={TTT.a1} x2={370} y2={TTT.a1} className="phase-line is-dashed" />
      <line x1={60} y1={TTT.ms} x2={370} y2={TTT.ms} className="phase-line" />
      <line x1={102.5} y1={TTT.nose} x2={370} y2={TTT.nose} className="phase-line is-dotted" />
      <text x={66} y={TTT.ms - 5} className="diagram-note">
        Mₛ
      </text>
      <line x1={60} y1={270} x2={370} y2={270} className="axis" />
      <line x1={60} y1={270} x2={60} y2={24} className="axis" />
      {decades.map((e) => {
        const x = 60 + 50 * (e + 1)
        return (
          <g key={e}>
            <line x1={x} y1={270} x2={x} y2={275} className="axis" />
            <text x={x} y={286} textAnchor="middle" className="axis-label">
              {tickLabel(e)}
            </text>
          </g>
        )
      })}
      <text x={54} y={TTT.a1 + 4} textAnchor="end" className="axis-label">
        727
      </text>
      <text x={54} y={TTT.nose + 4} textAnchor="end" className="axis-label">
        ~540
      </text>
      <text x={54} y={TTT.ms + 4} textAnchor="end" className="axis-label">
        ~220
      </text>
      <text x={215} y={298} textAnchor="middle" className="axis-label">
        Time (s, log scale)
      </text>
      <text x={14} y={150} textAnchor="middle" className="axis-label" transform="rotate(-90 14 150)">
        Temperature (°C)
      </text>
    </>
  ),
}


// ---------------------------------------------------------------------------
// Precipitation hardening aging curve, schematic. Hardness vs log(aging time).
// ---------------------------------------------------------------------------

const AGE = { x0: 50, y0: 230, peakX: 205, peakY: 62 }

const agingCurve: DiagramArt = {
  viewBox: '0 0 400 270',
  outlined: true,
  regions: [
    { id: 'underaged', d: 'M50 28 H170 V230 H50 Z', label: [110, 22] },
    { id: 'peak', d: 'M170 28 H240 V230 H170 Z', label: [205, 22] },
    { id: 'overaged', d: 'M240 28 H375 V230 H240 Z', label: [308, 22] },
  ],
  overlay: (
    <>
      <line x1={AGE.x0} y1={AGE.y0} x2={385} y2={AGE.y0} className="axis" />
      <line x1={AGE.x0} y1={AGE.y0} x2={AGE.x0} y2={18} className="axis" />
      <text x={385} y={252} textAnchor="end" className="axis-label">
        Aging time (log scale)
      </text>
      <text x={18} y={130} textAnchor="middle" className="axis-label" transform="rotate(-90 18 130)">
        Hardness / strength
      </text>
      <path d={`M55 200 C 110 195, 150 70, ${AGE.peakX} ${AGE.peakY} C 255 55, 300 130, 372 165`} className="curve" />
    </>
  ),
}

// ---------------------------------------------------------------------------
// Modulus vs temperature, amorphous thermoplastic, schematic.
// ---------------------------------------------------------------------------

const polymerModulus: DiagramArt = {
  viewBox: '0 0 400 270',
  outlined: true,
  regions: [
    { id: 'glassy', d: 'M50 28 H140 V230 H50 Z', label: [95, 22] },
    { id: 'transition', d: 'M140 28 H205 V230 H140 Z', label: [172, 22] },
    { id: 'rubbery', d: 'M205 28 H295 V230 H205 Z', label: [250, 22] },
    { id: 'viscous', d: 'M295 28 H375 V230 H295 Z', label: [335, 22] },
  ],
  overlay: (
    <>
      <line x1={50} y1={230} x2={385} y2={230} className="axis" />
      <line x1={50} y1={230} x2={50} y2={18} className="axis" />
      <text x={385} y={252} textAnchor="end" className="axis-label">
        Temperature →
      </text>
      <text x={18} y={130} textAnchor="middle" className="axis-label" transform="rotate(-90 18 130)">
        Modulus (log scale)
      </text>
      <path d="M55 60 C 100 62, 130 66, 150 85 C 165 105, 175 165, 205 175 C 240 182, 270 182, 295 186 C 320 192, 345 215, 372 225" className="curve" />
      <line x1={172} y1={230} x2={172} y2={236} className="axis" />
      <text x={172} y={247} textAnchor="middle" className="axis-label">
        Tg
      </text>
    </>
  ),
}

export const diagramArt: Record<DiagramId, DiagramArt> = {
  stress_strain_ductile: stressStrain,
  binary_eutectic: binaryEutectic,
  fe_c_steel: feC,
  ttt_eutectoid: ttt,
  aging_curve: agingCurve,
  polymer_modulus: polymerModulus,
}
