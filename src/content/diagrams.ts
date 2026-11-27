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
}
