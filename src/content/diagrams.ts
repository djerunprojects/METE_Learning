import type { DiagramDef, DiagramId } from './types'

// Diagram definitions used by pick_region questions.
// The drawings themselves are built in the lesson UI (step 2); this file defines
// the regions a question can refer to.
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
}
