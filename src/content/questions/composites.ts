import type { Question } from '../types'

// Disciplines · Composites.
// Sources: Callister & Rethwisch (ch. 16); Hull & Clyne, An Introduction to Composite Materials;
// Chawla, Composite Materials: Science and Engineering.

const matrix: Question[] = [
  {
    id: 'mr-001',
    nodeId: 'matrix-reinforcement',
    type: 'multiple_choice',
    prompt: 'Which set of jobs does the matrix do in a fiber composite?',
    options: [
      'Holds fibers in place, transfers load between them and protects them from damage and the environment',
      'Carries most of the load on its own',
      'Makes the composite electrically conductive',
      'Only adds color',
    ],
    answer: 0,
    explanation:
      'The fibers carry most of the load, but only if the matrix bonds them together and passes stress into them by shear at the interface.',
  },
  {
    id: 'mr-002',
    nodeId: 'matrix-reinforcement',
    type: 'matching',
    prompt: 'Match each material to its composite type.',
    pairs: [
      { left: 'Concrete (gravel and sand in cement)', right: 'Large-particle composite' },
      { left: 'Fiberglass boat hull', right: 'Fiber-reinforced composite' },
      { left: 'Plywood', right: 'Laminar composite' },
      { left: 'Aluminum honeycomb between thin skins', right: 'Sandwich panel' },
    ],
    explanation:
      'Composites are grouped by the shape and arrangement of the reinforcement: particles, fibers, layers, or skins on a light core.',
  },
  {
    id: 'mr-003',
    nodeId: 'matrix-reinforcement',
    type: 'multiple_choice',
    prompt: 'Why does the fiber–matrix interface matter so much?',
    options: [
      'Load reaches the fibers only through the interface, so poor bonding wastes the fibers’ strength',
      'The interface has no effect on properties',
      'A strong interface always makes composites more brittle and is avoided',
      'The interface only affects color',
    ],
    answer: 0,
    explanation:
      'Glass fibers are coated with sizing and coupling agents (e.g. silanes) to bond to the resin. In ceramic composites, a weaker interface is chosen on purpose for toughness.',
  },
  {
    id: 'mr-004',
    nodeId: 'matrix-reinforcement',
    type: 'true_false',
    prompt: 'In polymer-matrix composites, the reinforcement is usually much stiffer and stronger than the matrix.',
    answer: true,
    explanation:
      'Carbon fibers can have a modulus over 200 GPa, compared with about 3 GPa for epoxy. The combination is stiff and strong, yet light.',
  },
  {
    id: 'mr-005',
    nodeId: 'matrix-reinforcement',
    type: 'trend',
    prompt: 'Fibers need a minimum length to be loaded to their full strength.',
    formula: 'critical-fiber-length',
    change: 'the fiber–matrix bond strength τ_c increases',
    target: 'the critical fiber length l_c',
    answer: 'decreases',
    explanation:
      'A stronger interface transfers stress into the fiber over a shorter distance, so even shorter fibers can be fully loaded.',
  },
  {
    id: 'mr-006',
    nodeId: 'matrix-reinforcement',
    type: 'trend',
    prompt: 'Compare fibers of the same material and the same interface.',
    formula: 'critical-fiber-length',
    change: 'the fiber diameter d increases',
    target: 'the critical fiber length l_c',
    answer: 'increases',
    explanation:
      'A thicker fiber has more cross-section to fill with stress relative to its surface area, so it needs a longer length for the interface to load it fully.',
  },
  {
    id: 'mr-007',
    nodeId: 'matrix-reinforcement',
    type: 'multiple_choice',
    prompt: 'What happens when fibers are much shorter than the critical length?',
    options: [
      'They cannot be loaded to their full strength, so they reinforce poorly',
      'They make the composite stronger than continuous fibers',
      'They dissolve in the matrix',
      'They behave exactly like continuous fibers',
    ],
    answer: 0,
    explanation:
      'Stress builds up from zero at the fiber ends. Very short fibers act more like particles. Continuous or long fibers (length well above l_c) are needed for the best properties.',
  },
  {
    id: 'mr-008',
    nodeId: 'matrix-reinforcement',
    type: 'multiple_choice',
    prompt: 'Why are thin fibers much stronger than the same material in bulk form?',
    options: [
      'A small diameter leaves less room for large flaws, so the critical flaw is smaller',
      'Thin fibers have different chemistry',
      'Fibers are always single crystals of metal',
      'Bulk materials are always amorphous',
    ],
    answer: 0,
    explanation:
      'Brittle strength is controlled by the largest flaw. Glass fibers can be several times stronger than bulk glass for this reason.',
  },
  {
    id: 'mr-009',
    nodeId: 'matrix-reinforcement',
    type: 'multiple_choice',
    prompt: 'Why are composites so attractive in aerospace?',
    options: [
      'High specific stiffness and strength: stiffness and strength divided by density',
      'They are cheaper than aluminum in every case',
      'They are easy to recycle',
      'They are isotropic',
    ],
    answer: 0,
    explanation:
      'Carbon fiber composites match or beat metals in stiffness and strength at a much lower density. Every kilogram saved reduces fuel burn.',
  },
  {
    id: 'mr-010',
    nodeId: 'matrix-reinforcement',
    type: 'cause_effect',
    prompt: 'Select every correct statement.',
    scenario: 'A glass fiber–epoxy part has poor bonding between fibers and matrix.',
    options: [
      'Fibers pull out of the matrix easily',
      'Load transfer to the fibers is inefficient, so strength is lower',
      'A silane coupling agent on the fibers would improve bonding',
      'The part becomes stiffer than one with perfect bonding',
    ],
    answers: [0, 1, 2],
    explanation:
      'Without a good interface, fibers cannot share the load. Coupling agents bond chemically to both glass and resin. Poor bonding never improves stiffness.',
  },
]

const mixtures: Question[] = [
  {
    id: 'rom-001',
    nodeId: 'rule-of-mixtures',
    type: 'trend',
    prompt: 'A unidirectional composite is loaded along the fibers.',
    formula: 'iso-strain',
    change: 'the fiber volume fraction V_f increases',
    target: 'the composite modulus E_c along the fibers',
    answer: 'increases',
    explanation:
      'Fibers are much stiffer than the matrix, so replacing matrix with fiber raises E_c in proportion to V_f.',
  },
  {
    id: 'rom-002',
    nodeId: 'rule-of-mixtures',
    type: 'multiple_choice',
    prompt: 'For a unidirectional fiber composite, which direction has the higher modulus?',
    options: [
      'Along the fibers (longitudinal)',
      'Across the fibers (transverse)',
      'Both are always equal',
      'It depends only on the matrix color',
    ],
    answer: 0,
    explanation:
      'Along the fibers, both phases strain together and the stiff fibers dominate. Across the fibers, stress passes through the soft matrix, so the modulus is much lower.',
  },
  {
    id: 'rom-003',
    nodeId: 'rule-of-mixtures',
    type: 'trend',
    prompt: 'A unidirectional composite is loaded across the fibers.',
    formula: 'iso-stress',
    change: 'the matrix modulus E_m increases',
    target: 'the transverse modulus E_ct',
    answer: 'increases',
    explanation:
      'In the iso-stress case, the compliant matrix controls the result. Stiffening the matrix raises the transverse modulus much more than stiffening the fibers would.',
  },
  {
    id: 'rom-004',
    nodeId: 'rule-of-mixtures',
    type: 'true_false',
    prompt: 'Unidirectional fiber composites are strongly anisotropic.',
    answer: true,
    explanation:
      'Stiffness and strength along the fibers can be ten or more times higher than across them. Laminates stack plies at different angles to spread the properties.',
  },
  {
    id: 'rom-005',
    nodeId: 'rule-of-mixtures',
    type: 'multiple_choice',
    prompt: 'How do the iso-strain and iso-stress equations relate to the real modulus of a composite?',
    options: [
      'Iso-strain gives an upper bound and iso-stress a lower bound',
      'Iso-stress gives an upper bound and iso-strain a lower bound',
      'Both give the same value',
      'Neither has anything to do with the modulus',
    ],
    answer: 0,
    explanation:
      'For any arrangement of the same phases, the modulus lies between the two bounds. Particle composites typically fall in between.',
  },
  {
    id: 'rom-006',
    nodeId: 'rule-of-mixtures',
    type: 'trend',
    prompt: 'In longitudinal loading, the share of load carried by the fibers is E_f·V_f compared with E_m·V_m.',
    formula: 'iso-strain',
    change: 'the fibers are much stiffer relative to the matrix (higher E_f / E_m)',
    target: 'the fraction of the load carried by the fibers',
    answer: 'increases',
    explanation:
      'Both phases have the same strain, so the stiffer phase carries more stress. In carbon–epoxy, fibers carry well over 90% of the load.',
  },
  {
    id: 'rom-007',
    nodeId: 'rule-of-mixtures',
    type: 'trend',
    prompt: 'Density also follows a rule of mixtures. Carbon fibers (about 1.8 g/cm³) are added to epoxy (about 1.2 g/cm³).',
    change: 'the fiber volume fraction increases',
    target: 'the composite density',
    answer: 'increases',
    explanation:
      'The density is the volume-weighted average of the two phases, so it moves toward the denser carbon fiber. It still stays far below aluminum (2.7 g/cm³).',
  },
  {
    id: 'rom-008',
    nodeId: 'rule-of-mixtures',
    type: 'multiple_choice',
    prompt: 'What is a practical upper limit for the fiber volume fraction in aligned fiber composites?',
    options: ['About 60–70%', 'About 10%', 'Exactly 100%', 'About 95%'],
    answer: 0,
    explanation:
      'Above about 60–70%, there is not enough resin to fully wet and bond all the fibers, and voids and dry spots appear.',
  },
  {
    id: 'rom-009',
    nodeId: 'rule-of-mixtures',
    type: 'trend',
    prompt: 'A unidirectional composite is tested at different angles to the fibers.',
    change: 'the angle between the load and the fibers increases from 0° to 90°',
    target: 'the stiffness in the loading direction',
    answer: 'decreases',
    explanation:
      'At 0°, the fibers carry the load. As the angle grows, more of the load goes through the matrix in shear and transverse tension, so stiffness drops quickly.',
  },
  {
    id: 'rom-010',
    nodeId: 'rule-of-mixtures',
    type: 'multiple_choice',
    prompt: 'What is a quasi-isotropic laminate?',
    options: [
      'A stack of plies at 0°, ±45° and 90°, giving similar in-plane stiffness in all directions',
      'A single unidirectional ply',
      'A laminate with randomly oriented short fibers only',
      'A metal sheet',
    ],
    answer: 0,
    explanation:
      'Balancing ply angles spreads stiffness evenly in the plane, useful when loads come from many directions. Through-thickness properties remain low.',
  },
]

const fiberComposites: Question[] = [
  {
    id: 'fib-001',
    nodeId: 'fiber-composites',
    type: 'matching',
    prompt: 'Match each fiber to its main characteristic.',
    pairs: [
      { left: 'Carbon fiber', right: 'Very high stiffness at low density' },
      { left: 'E-glass fiber', right: 'Low cost and good strength, but lower stiffness' },
      { left: 'Aramid (Kevlar) fiber', right: 'High toughness and impact resistance, but weak in compression' },
      { left: 'Flax fiber', right: 'Renewable and light, with variable properties' },
    ],
    explanation:
      'Fiber choice is a trade-off between stiffness, toughness, cost and environmental impact. Glass dominates by volume; carbon dominates high-performance uses.',
  },
  {
    id: 'fib-002',
    nodeId: 'fiber-composites',
    type: 'multiple_choice',
    prompt: 'Why isn’t CFRP used for everything?',
    options: [
      'It is costly, can be damaged by impact without visible signs, and is hard to recycle',
      'It is heavier than steel',
      'It has very low stiffness',
      'It cannot be made into any shape',
    ],
    answer: 0,
    explanation:
      'Fibers and processing are expensive, impacts can cause hidden delamination, and thermoset matrices cannot simply be remelted. These limit its use to where light weight pays off.',
  },
  {
    id: 'fib-003',
    nodeId: 'fiber-composites',
    type: 'multiple_choice',
    prompt: 'What is delamination?',
    options: [
      'Separation between the plies of a laminate',
      'Fiber breakage along the length',
      'Melting of the matrix',
      'Corrosion of the fibers',
    ],
    answer: 0,
    explanation:
      'Between plies there is only resin, so interlaminar strength is low. Impacts, free edges and holes are common starting points.',
  },
  {
    id: 'fib-004',
    nodeId: 'fiber-composites',
    type: 'true_false',
    prompt: 'Aramid fibers are strong in tension but relatively weak in compression.',
    answer: true,
    explanation:
      'The highly oriented polymer chains buckle (kink) under compression. Aramid suits tension and impact uses such as body armor and ropes.',
  },
  {
    id: 'fib-005',
    nodeId: 'fiber-composites',
    type: 'multiple_choice',
    prompt: 'What is a prepreg?',
    options: [
      'Fibers already impregnated with partly cured resin, stored cold until layup',
      'Dry fabric without any resin',
      'A fully cured composite part',
      'A metal sheet',
    ],
    answer: 0,
    explanation:
      'Prepregs give precise fiber content and good quality. They are laid up in molds and cured with heat and pressure, often in an autoclave.',
  },
  {
    id: 'fib-006',
    nodeId: 'fiber-composites',
    type: 'multiple_choice',
    prompt: 'Why are high-performance laminates cured in an autoclave?',
    options: [
      'Heat cures the resin while pressure consolidates the plies and squeezes out voids',
      'To cool the part quickly',
      'To add color',
      'To dissolve the fibers',
    ],
    answer: 0,
    explanation:
      'Pressure of several bar keeps volatiles dissolved and forces plies together, giving very low void content. Out-of-autoclave methods aim to match this at lower cost.',
  },
  {
    id: 'fib-007',
    nodeId: 'fiber-composites',
    type: 'trend',
    prompt: 'Compare laminates made from the same materials.',
    change: 'the void content in the matrix increases',
    target: 'the interlaminar shear strength',
    answer: 'decreases',
    explanation:
      'Voids sit in the resin-rich layers between plies, reducing the area that carries shear and acting as crack starters. Roughly each 1% of voids costs several percent of interlaminar strength.',
  },
  {
    id: 'fib-008',
    nodeId: 'fiber-composites',
    type: 'multiple_choice',
    prompt: 'Compared with an epoxy matrix, what does a thermoplastic matrix such as PEEK offer?',
    options: [
      'Higher toughness, and parts that can be reshaped, welded and more easily recycled, but at higher processing temperatures',
      'Lower toughness and lower processing temperature',
      'It cannot be used with carbon fibers',
      'It cures at room temperature',
    ],
    answer: 0,
    explanation:
      'Thermoplastic matrices soften on heating, so they can be formed and welded. PEEK must be processed near 400 °C, which raises cost.',
  },
  {
    id: 'fib-009',
    nodeId: 'fiber-composites',
    type: 'multiple_choice',
    prompt: 'Why can carbon fiber composites cause corrosion when fastened to aluminum?',
    options: [
      'Carbon is electrically conductive and much more noble, so aluminum becomes the anode in a galvanic cell',
      'Carbon fibers contain acid',
      'Aluminum dissolves carbon',
      'Composites absorb all the moisture from aluminum',
    ],
    answer: 0,
    explanation:
      'With moisture present, aluminum in contact with carbon corrodes rapidly. A glass-fiber ply, sealants or titanium fasteners are used to insulate the joint.',
  },
  {
    id: 'fib-010',
    nodeId: 'fiber-composites',
    type: 'trend',
    prompt: 'An epoxy matrix absorbs moisture in a humid environment.',
    change: 'the absorbed moisture content increases',
    target: 'the glass transition temperature of the matrix',
    answer: 'decreases',
    explanation:
      'Water acts as a plasticizer, letting chain segments move more easily. Hot-wet conditions are therefore the critical design case for composite structures.',
  },
]

const mmcCmc: Question[] = [
  {
    id: 'mx-001',
    nodeId: 'mmc-cmc',
    type: 'multiple_choice',
    prompt: 'Which is a typical MMC?',
    options: [
      'Aluminum reinforced with SiC particles',
      'Epoxy reinforced with glass fibers',
      'Alumina reinforced with SiC fibers',
      'Pure copper',
    ],
    answer: 0,
    explanation:
      'Al–SiC composites are stiffer and more wear resistant than aluminum, and are used for brake rotors, pistons and electronic packaging.',
  },
  {
    id: 'mx-002',
    nodeId: 'mmc-cmc',
    type: 'trend',
    prompt: 'SiC particles are added to an aluminum alloy.',
    change: 'the volume fraction of SiC increases',
    target: 'the elastic modulus',
    answer: 'increases',
    explanation:
      'SiC has a modulus of about 400 GPa versus about 70 GPa for aluminum, so the composite gets stiffer with more reinforcement.',
  },
  {
    id: 'mx-003',
    nodeId: 'mmc-cmc',
    type: 'trend',
    prompt: 'SiC particles are added to an aluminum alloy.',
    change: 'the volume fraction of SiC increases',
    target: 'the ductility',
    answer: 'decreases',
    explanation:
      'Hard ceramic particles crack or debond and limit plastic flow of the matrix, so elongation drops. That is the price of higher stiffness and wear resistance.',
  },
  {
    id: 'mx-004',
    nodeId: 'mmc-cmc',
    type: 'multiple_choice',
    prompt: 'What is the main goal of CMCs?',
    options: [
      'To make ceramics tougher and more damage tolerant',
      'To make ceramics conduct electricity',
      'To lower the melting point',
      'To make ceramics transparent',
    ],
    answer: 0,
    explanation:
      'Ceramics are already stiff and heat resistant; their weakness is brittleness. Fibers in a ceramic matrix bridge cracks so the material fails gradually rather than suddenly.',
  },
  {
    id: 'mx-005',
    nodeId: 'mmc-cmc',
    type: 'multiple_choice',
    prompt: 'Why is the fiber–matrix interface in a CMC deliberately made weak?',
    options: [
      'So cracks deflect along the interface and fibers pull out, absorbing energy instead of breaking',
      'To make the composite as brittle as possible',
      'To increase the elastic modulus',
      'To make it easier to melt',
    ],
    answer: 0,
    explanation:
      'With a strong bond, a crack would run straight through fibers and matrix together. A weak interface (e.g. a thin carbon or BN coating) gives the toughening mechanisms.',
  },
  {
    id: 'mx-006',
    nodeId: 'mmc-cmc',
    type: 'true_false',
    prompt: 'SiC/SiC CMCs are used in hot sections of jet engines because they withstand higher temperatures than nickel superalloys at about one-third of the density.',
    answer: true,
    explanation:
      'They need less cooling air and weigh less, which improves engine efficiency. Environmental barrier coatings protect them from water vapor.',
  },
  {
    id: 'mx-007',
    nodeId: 'mmc-cmc',
    type: 'multiple_choice',
    prompt: 'Where are carbon–carbon composites typically used?',
    options: [
      'Aircraft and race-car brake discs and re-entry heat shields',
      'Food packaging',
      'Electrical wiring',
      'Window glass',
    ],
    answer: 0,
    explanation:
      'They keep their strength above 2000 °C in inert conditions and handle thermal shock well. They oxidize in hot air, so protective coatings are needed for long exposures.',
  },
  {
    id: 'mx-008',
    nodeId: 'mmc-cmc',
    type: 'multiple_choice',
    prompt: 'Cemented carbide (WC particles bonded with cobalt) is best described as:',
    options: [
      'A particle composite with a metal matrix (a cermet)',
      'A polymer composite',
      'A pure ceramic',
      'A fiber-reinforced ceramic',
    ],
    answer: 0,
    explanation:
      'Hard WC grains provide wear resistance, and the ductile cobalt matrix provides toughness. It is the standard material for cutting tools.',
  },
  {
    id: 'mx-009',
    nodeId: 'mmc-cmc',
    type: 'trend',
    prompt: 'A composite is cooled from its high processing temperature.',
    change: 'the mismatch in thermal expansion between fiber and matrix increases',
    target: 'the residual thermal stresses',
    answer: 'increases',
    explanation:
      'The two phases try to contract by different amounts but are bonded together, which leaves internal stresses that can cause microcracking.',
  },
  {
    id: 'mx-010',
    nodeId: 'mmc-cmc',
    type: 'cause_effect',
    prompt: 'Select every benefit of the switch.',
    scenario: 'An engine maker switches pistons from a plain aluminum alloy to an aluminum–SiC MMC.',
    options: [
      'Higher stiffness',
      'Better wear resistance',
      'Better strength retention at elevated temperature',
      'Easier and cheaper machining',
    ],
    answers: [0, 1, 2],
    explanation:
      'Ceramic particles stiffen the alloy, resist wear and slow softening when hot. The same hard particles make MMCs abrasive and expensive to machine.',
  },
]

export const compositesQuestions: Question[] = [...matrix, ...mixtures, ...fiberComposites, ...mmcCmc]
