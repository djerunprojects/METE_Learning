import type { DiagramDef, DiagramId } from './types'

// Diagram definitions used by pick_region questions: the regions a question can refer to.
// The drawings live in `src/ui/diagramArt.tsx` (one art entry per diagram, same region ids).
// Regions are shown as letters A, B, C… in this order; names appear after checking.
export const diagrams: Record<DiagramId, DiagramDef> = {
  stress_strain_ductile: {
    id: 'stress_strain_ductile',
    title: 'Engineering stress–strain curve (ductile metal)',
    regions: [
      { id: 'elastic', label: 'Elastic region' },
      { id: 'uniform_plastic', label: 'Uniform plastic deformation (strain hardening)' },
      { id: 'necking', label: 'Necking' },
      { id: 'fracture', label: 'Fracture point' },
    ],
  },
  binary_eutectic: {
    id: 'binary_eutectic',
    title: 'Binary eutectic phase diagram (components A and B)',
    regions: [
      { id: 'liquid', label: 'L (liquid)' },
      { id: 'alpha_l', label: 'α + L' },
      { id: 'beta_l', label: 'β + L' },
      { id: 'alpha', label: 'α (A-rich solid solution)' },
      { id: 'beta', label: 'β (B-rich solid solution)' },
      { id: 'alpha_beta', label: 'α + β' },
    ],
  },
  fe_c_steel: {
    id: 'fe_c_steel',
    title: 'Fe–Fe₃C phase diagram, steel region (schematic; α field widened for visibility)',
    regions: [
      { id: 'gamma', label: 'γ (austenite)' },
      { id: 'alpha_gamma', label: 'α + γ' },
      { id: 'alpha', label: 'α (ferrite)' },
      { id: 'gamma_fe3c', label: 'γ + Fe₃C' },
      { id: 'alpha_fe3c', label: 'α + Fe₃C' },
    ],
  },
  ttt_eutectoid: {
    id: 'ttt_eutectoid',
    title: 'Isothermal transformation (TTT) diagram, eutectoid steel (schematic)',
    regions: [
      { id: 'stable_austenite', label: 'Stable austenite (above 727 °C)' },
      { id: 'unstable_austenite', label: 'Austenite, not yet transformed' },
      { id: 'pearlite', label: 'Pearlite forms' },
      { id: 'bainite', label: 'Bainite forms' },
      { id: 'martensite', label: 'Martensite (below Mₛ)' },
    ],
  },
  aging_curve: {
    id: 'aging_curve',
    title: 'Precipitation hardening: hardness vs aging time at a fixed aging temperature',
    regions: [
      { id: 'underaged', label: 'Underaged' },
      { id: 'peak', label: 'Peak aged' },
      { id: 'overaged', label: 'Overaged' },
    ],
  },
  polymer_modulus: {
    id: 'polymer_modulus',
    title: 'Modulus vs temperature for an amorphous thermoplastic (schematic)',
    regions: [
      { id: 'glassy', label: 'Glassy region' },
      { id: 'transition', label: 'Glass transition (around Tg)' },
      { id: 'rubbery', label: 'Rubbery plateau' },
      { id: 'viscous', label: 'Viscous flow' },
    ],
  },
  ashby_modulus_density: {
    id: 'ashby_modulus_density',
    title: 'Material property chart: Young’s modulus vs density (log–log, simplified)',
    regions: [
      { id: 'foams', label: 'Foams' },
      { id: 'elastomers', label: 'Elastomers' },
      { id: 'polymers', label: 'Polymers' },
      { id: 'woods', label: 'Woods (along the grain)' },
      { id: 'composites', label: 'Composites (CFRP, GFRP)' },
      { id: 'metals', label: 'Metals and alloys' },
      { id: 'ceramics', label: 'Technical ceramics' },
    ],
  },
  unit_cells: {
    id: 'unit_cells',
    title: 'Cubic unit cells (atoms drawn small so all positions are visible)',
    regions: [
      { id: 'sc', label: 'Simple cubic (SC)' },
      { id: 'bcc', label: 'Body-centered cubic (BCC)' },
      { id: 'fcc', label: 'Face-centered cubic (FCC)' },
    ],
  },
  cu_ni: {
    id: 'cu_ni',
    title: 'Cu–Ni phase diagram (isomorphous)',
    regions: [
      { id: 'liquid', label: 'L (liquid)' },
      { id: 'alpha_l', label: 'α + L' },
      { id: 'alpha', label: 'α (solid solution)' },
    ],
  },
  jominy: {
    id: 'jominy',
    title: 'Jominy end-quench curves: plain carbon steel (solid) and alloy steel (dashed)',
    regions: [
      { id: 'quenched_end', label: 'Near the quenched end: martensite (fastest cooling)' },
      { id: 'transition', label: 'Steep drop: martensite mixed with bainite or pearlite' },
      { id: 'far_end', label: 'Far end: pearlite (slowest cooling)' },
    ],
  },
  s_n: {
    id: 's_n',
    title: 'S–N curves: steel (solid, with a fatigue limit) and aluminum alloy (dashed)',
    regions: [
      { id: 'low_cycle', label: 'Low-cycle fatigue (high stress, few cycles)' },
      { id: 'high_cycle', label: 'High-cycle fatigue (failure after many cycles)' },
      { id: 'below_limit', label: 'Below the steel’s fatigue (endurance) limit' },
    ],
  },
}
