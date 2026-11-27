import type { Question } from '../types'

// Sample questions (step 1). Draft content: to be reviewed for accuracy.
export const stressStrainQuestions: Question[] = [
  {
    id: 'ss-001',
    nodeId: 'stress-strain',
    type: 'trend',
    prompt: "In the elastic region, stress and strain follow Hooke's law.",
    formula: 'hookes-law',
    change: 'the same stress σ is applied to a material with a higher elastic modulus E',
    target: 'the elastic strain ε',
    answer: 'decreases',
    explanation:
      'Rearranging gives ε = σ / E. For the same σ, a larger E means a smaller strain — a stiffer material stretches less.',
  },
  {
    id: 'ss-002',
    nodeId: 'stress-strain',
    type: 'pick_region',
    prompt: 'On the stress–strain curve of a ductile metal, where does the cross-section start to shrink locally at one spot?',
    diagram: 'stress_strain_ductile',
    answer: 'necking',
    explanation:
      'After the ultimate tensile strength, deformation concentrates in one region and the cross-section narrows locally (necking). Engineering stress falls because it is calculated on the original area.',
  },
]
