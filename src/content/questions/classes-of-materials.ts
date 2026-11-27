import type { Question } from '../types'

// Sample questions (step 1).
// Draft content: to be reviewed for accuracy.
export const classesOfMaterialsQuestions: Question[] = [
  {
    id: 'com-001',
    nodeId: 'classes-of-materials',
    type: 'multiple_choice',
    prompt: 'Which class of materials typically has the highest electrical conductivity?',
    options: ['Metals', 'Ceramics', 'Polymers', 'Glasses'],
    answer: 0,
    explanation:
      'Metallic bonding leaves valence electrons delocalized (an "electron sea"), so they move freely under an electric field. Ceramics and polymers hold their electrons in ionic or covalent bonds.',
  },
  {
    id: 'com-002',
    nodeId: 'classes-of-materials',
    type: 'true_false',
    prompt: 'Ceramics are generally brittle because their ionic and covalent bonds make dislocation motion very difficult.',
    answer: true,
    explanation:
      'Directional covalent bonds and the need to keep like-charged ions apart strongly resist slip. With almost no plastic deformation available, cracks propagate instead — brittle behavior.',
  },
  {
    id: 'com-003',
    nodeId: 'classes-of-materials',
    type: 'matching',
    prompt: 'Match each material to its class.',
    pairs: [
      { left: 'Steel', right: 'Metal' },
      { left: 'Alumina (Al₂O₃)', right: 'Ceramic' },
      { left: 'Polyethylene', right: 'Polymer' },
      { left: 'Carbon-fiber reinforced polymer (CFRP)', right: 'Composite' },
    ],
    explanation:
      'Steel is an iron–carbon alloy (metal). Alumina is an oxide of aluminum (ceramic). Polyethylene is a long carbon–hydrogen chain (polymer). CFRP combines carbon fibers in a polymer matrix (composite).',
  },
  {
    id: 'com-004',
    nodeId: 'classes-of-materials',
    type: 'trend',
    prompt: 'For a pure metal, resistivity follows the relation below.',
    formula: 'ρ = ρ₀ [1 + α (T − T₀)]   (α > 0 for metals)',
    change: 'the temperature of a copper wire increases',
    target: 'its electrical resistivity ρ',
    answer: 'increases',
    explanation:
      'With α > 0, a higher T gives a higher ρ. Physically, stronger lattice vibrations at higher temperature scatter the conduction electrons more often.',
  },
  {
    id: 'com-005',
    nodeId: 'classes-of-materials',
    type: 'cause_effect',
    prompt: 'Select every effect that is likely.',
    scenario: 'A steel bracket is replaced by a polymer bracket of exactly the same shape.',
    options: [
      'The bracket becomes lighter',
      'The bracket becomes less stiff',
      'The bracket can withstand higher service temperatures',
      'The bracket becomes a better electrical insulator',
    ],
    answers: [0, 1, 3],
    explanation:
      'Polymers have much lower density (≈1 g/cm³ vs ≈7.9 g/cm³), much lower elastic modulus (a few GPa vs ≈200 GPa) and are electrical insulators. They soften or degrade at far lower temperatures than steel, so service temperature drops.',
  },
  {
    id: 'com-006',
    nodeId: 'classes-of-materials',
    type: 'multiple_choice',
    prompt: 'In a carbon-fiber reinforced polymer (CFRP), what is the main role of the carbon fibers?',
    options: [
      'Carry most of the load and provide stiffness and strength',
      'Bind the part together and protect it from the environment',
      'Make the part electrically insulating',
      'Lower the cost of the part',
    ],
    answer: 0,
    explanation:
      'The stiff, strong fibers carry most of the load. The polymer matrix holds the fibers in place, transfers load between them and protects them.',
  },
]
