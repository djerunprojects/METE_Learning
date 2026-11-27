import type { Question } from '../types'

// Foundations · Classes of Materials. Sources: Callister & Rethwisch ch. 1; Askeland ch. 1.
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
    prompt: 'For a pure metal, resistivity follows the relation below, with α > 0.',
    formula: 'metal-resistivity',
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
  {
    id: 'com-007',
    nodeId: 'classes-of-materials',
    type: 'multiple_choice',
    prompt: 'Which class of materials typically has the lowest density?',
    options: ['Metals', 'Ceramics', 'Polymers'],
    answer: 2,
    explanation:
      'Polymers are built from light atoms (mostly C and H) in loosely packed chains, so most have densities of about 0.9–2 g/cm³. Ceramics are typically 2–6 g/cm³ and common metals 2.7 (Al) to 7.9 (steel) g/cm³ or more.',
  },
  {
    id: 'com-008',
    nodeId: 'classes-of-materials',
    type: 'true_false',
    prompt: 'Ceramics are generally good electrical and thermal insulators.',
    answer: true,
    explanation:
      'With electrons tightly held in ionic and covalent bonds, most ceramics have few free charge carriers, which is why alumina and glass are used as insulators. There are exceptions, such as semiconducting silicon carbide and highly heat-conducting diamond.',
  },
  {
    id: 'com-009',
    nodeId: 'classes-of-materials',
    type: 'cause_effect',
    prompt: 'Select every statement that is correct.',
    scenario: 'A lining must survive 1400 °C in an oxidizing furnace atmosphere for months.',
    options: [
      'A ceramic such as alumina is a good choice because of its very high melting point',
      'An oxide ceramic is a good choice because it is already oxidized and chemically stable in air',
      'A ceramic is a good choice because ceramics are very ductile',
      'A common polymer would be a good choice because polymers resist heat well',
    ],
    answers: [0, 1],
    explanation:
      'Alumina melts above 2000 °C and, being an oxide, does not oxidize further. Ceramics are brittle rather than ductile, and common polymers soften or decompose at a few hundred °C at most.',
  },
  {
    id: 'com-010',
    nodeId: 'classes-of-materials',
    type: 'matching',
    prompt: 'Match each material to a typical application.',
    pairs: [
      { left: 'Copper', right: 'Electrical wiring' },
      { left: 'Silicon carbide', right: 'Abrasives and grinding wheels' },
      { left: 'Polycarbonate', right: 'Shatter-resistant safety glasses' },
      { left: 'GFRP', right: 'Boat hulls' },
    ],
    explanation:
      'Copper combines high electrical conductivity with ductility. Silicon carbide is extremely hard. Polycarbonate is a transparent, tough polymer. Glass-fiber reinforced polymer is light, stiff and does not corrode in water.',
  },
]
