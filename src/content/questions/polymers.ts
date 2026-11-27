import type { Question } from '../types'

// Disciplines · Polymers.
// Sources: Callister & Rethwisch (ch. 14, 15); Young & Lovell, Introduction to Polymers;
// Osswald & Menges, Materials Science of Polymers for Engineers.

const structure: Question[] = [
  {
    id: 'pst-001',
    nodeId: 'polymer-structure',
    type: 'multiple_choice',
    prompt: 'What is the degree of polymerization?',
    options: [
      'The average number of repeat units (mers) in a chain',
      'The percentage of crystallinity',
      'The number of crosslinks per chain',
      'The glass transition temperature',
    ],
    answer: 0,
    explanation:
      'It equals the average molecular weight divided by the molecular weight of one repeat unit. Commercial polymers often have thousands of repeat units per chain.',
  },
  {
    id: 'pst-002',
    nodeId: 'polymer-structure',
    type: 'trend',
    prompt: 'Compare samples of the same thermoplastic.',
    change: 'the average molecular weight increases',
    target: 'the tensile strength',
    answer: 'increases',
    explanation:
      'Longer chains are more entangled and have more secondary bonds along their length, so they are harder to pull apart. Very high molecular weight makes the melt hard to process, though.',
  },
  {
    id: 'pst-003',
    nodeId: 'polymer-structure',
    type: 'matching',
    prompt: 'Match each chain architecture to its description.',
    pairs: [
      { left: 'Linear', right: 'Long chains without side branches' },
      { left: 'Branched', right: 'Side chains that keep chains from packing closely' },
      { left: 'Crosslinked', right: 'Neighboring chains joined at points by covalent bonds' },
      { left: 'Network', right: 'Dense three-dimensional covalent network, e.g. cured epoxy' },
    ],
    explanation:
      'Architecture controls packing, crystallinity and whether the polymer can melt: linear and branched chains can flow, while crosslinked and network polymers cannot.',
  },
  {
    id: 'pst-004',
    nodeId: 'polymer-structure',
    type: 'trend',
    prompt: 'Compare polyethylenes with different chain structures.',
    change: 'the amount of chain branching increases',
    target: 'the crystallinity and density',
    answer: 'decreases',
    explanation:
      'Branches keep chains from folding neatly into crystals. LDPE is heavily branched (about 0.92 g/cm³), while nearly linear HDPE reaches about 0.96 g/cm³.',
  },
  {
    id: 'pst-005',
    nodeId: 'polymer-structure',
    type: 'multiple_choice',
    prompt: 'Why is HDPE stiffer and denser than LDPE?',
    options: [
      'Its nearly linear chains pack more efficiently, giving higher crystallinity',
      'It contains metal atoms',
      'It is crosslinked',
      'It has a much lower molecular weight',
    ],
    answer: 0,
    explanation:
      'Crystalline regions are denser and stiffer than amorphous ones. HDPE is used for rigid bottles and pipes, and LDPE for flexible film.',
  },
  {
    id: 'pst-006',
    nodeId: 'polymer-structure',
    type: 'multiple_choice',
    prompt: 'In isotactic polypropylene, the side groups are:',
    options: [
      'All on the same side of the chain, so the chain is regular and can crystallize',
      'Randomly placed on either side',
      'Alternating from side to side, always',
      'Absent',
    ],
    answer: 0,
    explanation:
      'Isotactic (same side) and syndiotactic (alternating) chains are regular enough to crystallize. Atactic (random) PP is amorphous and soft.',
  },
  {
    id: 'pst-007',
    nodeId: 'polymer-structure',
    type: 'true_false',
    prompt: 'Polymers are rarely fully crystalline; most "crystalline" polymers are semicrystalline, with crystals in an amorphous matrix.',
    answer: true,
    explanation:
      'Long, entangled chains cannot all fold into crystals. Chain segments form folded-chain lamellae (often grouped in spherulites), with amorphous material in between.',
  },
  {
    id: 'pst-008',
    nodeId: 'polymer-structure',
    type: 'trend',
    prompt: 'Compare samples of the same polymer.',
    change: 'the degree of crystallinity increases',
    target: 'the density',
    answer: 'increases',
    explanation:
      'Chains pack more tightly in crystals than in amorphous regions. Measuring density is a common way to estimate crystallinity. Stiffness and strength also usually rise.',
  },
  {
    id: 'pst-009',
    nodeId: 'polymer-structure',
    type: 'multiple_choice',
    prompt: 'What is a copolymer?',
    options: [
      'A polymer made of two or more different repeat units',
      'A blend of a polymer and a metal',
      'A polymer with only one type of repeat unit',
      'Two polymers glued together',
    ],
    answer: 0,
    explanation:
      'Arrangements can be random, alternating, block or graft. Styrene–butadiene rubber in car tires, for example, is a random copolymer.',
  },
  {
    id: 'pst-010',
    nodeId: 'polymer-structure',
    type: 'multiple_choice',
    prompt: 'What does vulcanization of rubber do?',
    options: [
      'Forms sulfur crosslinks between chains, so the rubber springs back instead of flowing',
      'Melts the rubber',
      'Removes all crosslinks',
      'Makes the rubber crystalline',
    ],
    answer: 0,
    explanation:
      'Uncrosslinked natural rubber is sticky and creeps. A light network of sulfur crosslinks lets chains uncoil when stretched but pulls them back when released.',
  },
]

const thermal: Question[] = [
  {
    id: 'pth-001',
    nodeId: 'polymer-thermal',
    type: 'multiple_choice',
    prompt: 'As an amorphous polymer is heated through its glass transition temperature Tg, it changes from:',
    options: ['Rigid and glassy to soft and rubbery', 'Liquid to solid', 'Rubbery to glassy', 'Crystalline to amorphous'],
    answer: 0,
    explanation:
      'Below Tg, chain segments are frozen in place. Above Tg, they gain enough thermal energy to rotate and move, and the stiffness drops by orders of magnitude.',
  },
  {
    id: 'pth-002',
    nodeId: 'polymer-thermal',
    type: 'pick_region',
    prompt: 'Where is the polymer hard and glassy?',
    diagram: 'polymer_modulus',
    answer: 'glassy',
    explanation:
      'At low temperature, the modulus is high (a few GPa) and nearly constant. Polystyrene and PMMA are used in this region at room temperature.',
  },
  {
    id: 'pth-003',
    nodeId: 'polymer-thermal',
    type: 'pick_region',
    prompt: 'Where does the polymer behave like a rubber?',
    diagram: 'polymer_modulus',
    answer: 'rubbery',
    explanation:
      'On the rubbery plateau, entanglements (or crosslinks) act as temporary links, so the polymer stretches elastically with a low modulus. Elastomers are used here.',
  },
  {
    id: 'pth-004',
    nodeId: 'polymer-thermal',
    type: 'pick_region',
    prompt: 'Where does the modulus drop by several orders of magnitude over a short temperature range?',
    diagram: 'polymer_modulus',
    answer: 'transition',
    explanation:
      'Around Tg, chain segments start moving cooperatively, and stiffness falls from GPa to MPa. Designers keep rigid parts well below this region.',
  },
  {
    id: 'pth-005',
    nodeId: 'polymer-thermal',
    type: 'pick_region',
    prompt: 'Where does an uncrosslinked thermoplastic start to flow like a viscous liquid?',
    diagram: 'polymer_modulus',
    answer: 'viscous',
    explanation:
      'At high enough temperature, whole chains can slide past each other and the entanglements no longer hold. This is the processing region for molding and extrusion. A crosslinked polymer would stay on the plateau instead.',
  },
  {
    id: 'pth-006',
    nodeId: 'polymer-thermal',
    type: 'trend',
    prompt: 'Compare versions of the same polymer.',
    change: 'the crosslink density increases',
    target: 'the glass transition temperature',
    answer: 'increases',
    explanation:
      'Crosslinks restrict chain segment motion, so more thermal energy is needed before segments can move. Highly crosslinked epoxies can have Tg values well above 150 °C.',
  },
  {
    id: 'pth-007',
    nodeId: 'polymer-thermal',
    type: 'multiple_choice',
    prompt: 'What is the key difference between thermoplastics and thermosets?',
    options: [
      'Thermoplastics soften when heated and can be remelted; thermosets are crosslinked and decompose instead of melting',
      'Thermosets melt at lower temperatures',
      'Thermoplastics are always crosslinked',
      'There is no difference',
    ],
    answer: 0,
    explanation:
      'Thermoplastic chains are held by secondary bonds that loosen on heating, so they can be reshaped and recycled. Thermoset networks are permanent covalent structures.',
  },
  {
    id: 'pth-008',
    nodeId: 'polymer-thermal',
    type: 'true_false',
    prompt: 'Only crystalline regions have a melting temperature Tm; a fully amorphous polymer has only a glass transition Tg.',
    answer: true,
    explanation:
      'Melting means crystals breaking up. Semicrystalline polymers show both Tg (from their amorphous part) and Tm, with Tm always higher than Tg.',
  },
  {
    id: 'pth-009',
    nodeId: 'polymer-thermal',
    type: 'trend',
    prompt: 'Compare polymers with different chain structures.',
    change: 'the chain has bulkier side groups or a stiffer backbone',
    target: 'the glass transition temperature',
    answer: 'increases',
    explanation:
      'Anything that makes chain segments harder to rotate raises Tg. Polyethylene has Tg around −100 °C, while polystyrene (with bulky phenyl side groups) is around 100 °C.',
  },
  {
    id: 'pth-010',
    nodeId: 'polymer-thermal',
    type: 'multiple_choice',
    prompt: 'A rubber seal that works fine in summer cracks during a very cold launch. Why?',
    options: [
      'Below its glass transition temperature, the rubber becomes glassy, stiff and brittle',
      'Cold makes rubber melt',
      'Rubber is always brittle',
      'Cold increases its crosslink density permanently',
    ],
    answer: 0,
    explanation:
      'Elastomers only work above Tg. Cold O-rings in the 1986 Challenger disaster lost their resilience and failed to seal.',
  },
]

const visco: Question[] = [
  {
    id: 've-001',
    nodeId: 'viscoelasticity',
    type: 'multiple_choice',
    prompt: 'What does viscoelastic mean?',
    options: [
      'The material responds partly like an elastic solid and partly like a viscous liquid, so its behavior depends on time',
      'It is perfectly elastic at all times',
      'It flows like water at room temperature',
      'It conducts electricity',
    ],
    answer: 0,
    explanation:
      'Polymers store some energy elastically and dissipate some by viscous flow. How they respond depends on loading time, rate and temperature.',
  },
  {
    id: 've-002',
    nodeId: 'viscoelasticity',
    type: 'multiple_choice',
    prompt: 'What is stress relaxation?',
    options: [
      'At constant strain, the stress in the material decreases over time',
      'At constant stress, strain increases over time',
      'The material hardens with time',
      'The material cracks under load',
    ],
    answer: 0,
    explanation:
      'Stretched chains gradually rearrange to more relaxed shapes, so less stress is needed to hold the same strain. Plastic snap fits and bolted gaskets can lose their clamping force this way.',
  },
  {
    id: 've-003',
    nodeId: 'viscoelasticity',
    type: 'multiple_choice',
    prompt: 'What is creep in polymers?',
    options: [
      'Strain that keeps increasing with time under a constant load, even at room temperature',
      'Instant elastic deformation',
      'Melting under load',
      'Shrinkage during cooling',
    ],
    answer: 0,
    explanation:
      'Many polymers are close to their Tg at room temperature, so chains slowly slide and uncoil under load. Metals usually creep only at much higher temperatures.',
  },
  {
    id: 've-004',
    nodeId: 'viscoelasticity',
    type: 'trend',
    prompt: 'A polymer’s relaxation modulus is measured after a fixed time.',
    change: 'the test temperature increases',
    target: 'the relaxation modulus',
    answer: 'decreases',
    explanation:
      'Higher temperature lets chains relax faster, so less stress remains after the same time. Near Tg, the change is dramatic.',
  },
  {
    id: 've-005',
    nodeId: 'viscoelasticity',
    type: 'trend',
    prompt: 'The same polymer is tested at different loading rates.',
    change: 'the loading rate is faster',
    target: 'the apparent stiffness',
    answer: 'increases',
    explanation:
      'With less time to relax, the chains respond more elastically. That is why a polymer can seem rigid under impact but sags under a slow, steady load.',
  },
  {
    id: 've-006',
    nodeId: 'viscoelasticity',
    type: 'true_false',
    prompt: 'Time–temperature superposition says that, for a polymer, raising the temperature has a similar effect to waiting longer.',
    answer: true,
    explanation:
      'Curves measured at different temperatures can be shifted along the log-time axis to form one master curve. Short tests at high temperature can then predict long-term behavior.',
  },
  {
    id: 've-007',
    nodeId: 'viscoelasticity',
    type: 'multiple_choice',
    prompt: 'Silly Putty bounces when dropped but slowly spreads into a puddle when left on a table. Why?',
    options: [
      'Over short times it acts elastic; over long times it flows as a viscous liquid',
      'It changes chemically when dropped',
      'It is a metal',
      'It melts on impact',
    ],
    answer: 0,
    explanation:
      'This is viscoelasticity in action: the response depends on the time scale of loading compared with the material’s relaxation time.',
  },
  {
    id: 've-008',
    nodeId: 'viscoelasticity',
    type: 'multiple_choice',
    prompt: 'The Maxwell model, a spring and a dashpot in series, best describes:',
    options: ['Stress relaxation', 'Perfect elasticity', 'Brittle fracture', 'Thermal expansion'],
    answer: 0,
    explanation:
      'At fixed strain, the dashpot slowly extends and lets the spring relax, so stress decays. The Kelvin–Voigt model (spring and dashpot in parallel) instead describes delayed elastic creep.',
  },
  {
    id: 've-009',
    nodeId: 'viscoelasticity',
    type: 'trend',
    prompt: 'Compare a thermoplastic and crosslinked versions of it under a constant long-term load.',
    change: 'the crosslink density increases',
    target: 'the long-term creep',
    answer: 'decreases',
    explanation:
      'Crosslinks stop whole chains from sliding past each other, so the polymer cannot flow indefinitely. Creep levels off instead of continuing.',
  },
  {
    id: 've-010',
    nodeId: 'viscoelasticity',
    type: 'cause_effect',
    prompt: 'Select every correct statement.',
    scenario: 'A plastic bookshelf slowly sags more and more over several months.',
    options: [
      'The polymer is creeping under the constant load',
      'A warmer room would make it sag faster',
      'Glass-fiber reinforcement would reduce the sagging',
      'Using a lower-molecular-weight grade would reduce the sagging',
    ],
    answers: [0, 1, 2],
    explanation:
      'Creep speeds up with temperature, and stiff fibers carry load without creeping. Lower molecular weight means fewer entanglements and more creep, not less.',
  },
]

const processing: Question[] = [
  {
    id: 'ppr-001',
    nodeId: 'polymer-processing',
    type: 'matching',
    prompt: 'Match each polymer process to a typical product.',
    pairs: [
      { left: 'Injection molding', right: 'Complex parts such as bottle caps and housings' },
      { left: 'Extrusion', right: 'Pipes, profiles and film' },
      { left: 'Blow molding', right: 'Hollow bottles' },
      { left: 'Thermoforming', right: 'Trays and cups formed from heated sheet' },
    ],
    explanation:
      'Thermoplastics are shaped as melts or softened sheets and then cooled. The process is chosen by geometry and production volume.',
  },
  {
    id: 'ppr-002',
    nodeId: 'polymer-processing',
    type: 'multiple_choice',
    prompt: 'Why are thermosets processed differently from thermoplastics?',
    options: [
      'They must be shaped before or while they cure, because once crosslinked they cannot be melted again',
      'They melt at lower temperatures',
      'They are always processed as powders',
      'They cannot be molded at all',
    ],
    answer: 0,
    explanation:
      'Thermosets are formed as liquid resins or pre-polymers and then cured by heat or a hardener, for example by compression molding or resin transfer molding.',
  },
  {
    id: 'ppr-003',
    nodeId: 'polymer-processing',
    type: 'trend',
    prompt: 'A thermoplastic melt is pushed through an extruder.',
    change: 'the melt temperature increases',
    target: 'the melt viscosity',
    answer: 'decreases',
    explanation:
      'Hotter chains move more freely. Too much heat, though, can degrade the polymer, so processing windows are limited.',
  },
  {
    id: 'ppr-004',
    nodeId: 'polymer-processing',
    type: 'trend',
    prompt: 'Polymer melts are usually shear thinning.',
    change: 'the shear rate increases (for example, flow speeds up in a narrow gate)',
    target: 'the melt viscosity',
    answer: 'decreases',
    explanation:
      'At high shear rates, chains disentangle and line up with the flow, so they slide past each other more easily. This helps fill thin-walled molds.',
  },
  {
    id: 'ppr-005',
    nodeId: 'polymer-processing',
    type: 'multiple_choice',
    prompt: 'Polymer chains get oriented along the flow direction during processing. What is the effect?',
    options: [
      'Strength and stiffness are higher along the flow direction, so properties become anisotropic',
      'Properties become the same in all directions',
      'The polymer becomes amorphous',
      'There is no effect',
    ],
    answer: 0,
    explanation:
      'Oriented chains carry load along their covalent backbones. This is used on purpose in fibers and stretched films, but can cause warpage in molded parts.',
  },
  {
    id: 'ppr-006',
    nodeId: 'polymer-processing',
    type: 'multiple_choice',
    prompt: 'What causes sink marks on injection-molded parts?',
    options: [
      'Thick sections keep shrinking as their core cools, pulling the surface inward when packing pressure is not enough',
      'Too little shrinkage',
      'The mold being too cold everywhere',
      'Using a thermoset',
    ],
    answer: 0,
    explanation:
      'Designers keep wall thickness uniform and use ribs instead of thick sections. Longer packing time also helps.',
  },
  {
    id: 'ppr-007',
    nodeId: 'polymer-processing',
    type: 'true_false',
    prompt: 'Semicrystalline polymers usually shrink more on cooling from the melt than amorphous polymers.',
    answer: true,
    explanation:
      'Crystallization packs chains more densely, adding to the normal thermal contraction. Mold dimensions must account for shrinkage of a few percent in materials such as polypropylene.',
  },
  {
    id: 'ppr-008',
    nodeId: 'polymer-processing',
    type: 'multiple_choice',
    prompt: 'What does a plasticizer do when added to a polymer such as PVC?',
    options: [
      'It lowers Tg and makes the polymer more flexible',
      'It raises Tg and makes it more rigid',
      'It crosslinks the polymer',
      'It adds color only',
    ],
    answer: 0,
    explanation:
      'Small plasticizer molecules sit between chains and let them move more easily. Plasticized PVC is used for flexible hoses and cable insulation; unplasticized PVC for rigid pipes.',
  },
  {
    id: 'ppr-009',
    nodeId: 'polymer-processing',
    type: 'trend',
    prompt: 'A semicrystalline polymer is injection molded.',
    change: 'the mold is kept colder, so the part cools faster',
    target: 'the degree of crystallinity',
    answer: 'decreases',
    explanation:
      'Crystallization needs time between Tm and Tg. Fast cooling freezes chains before they can organize, giving a more amorphous, often clearer but less stiff part.',
  },
  {
    id: 'ppr-010',
    nodeId: 'polymer-processing',
    type: 'multiple_choice',
    prompt: 'Why are nylon and PET pellets dried before molding?',
    options: [
      'Absorbed moisture causes hydrolysis at melt temperatures, breaking chains and causing bubbles',
      'Water makes the pellets too heavy',
      'Dry pellets melt at a lower temperature',
      'Moisture makes the polymer crosslink',
    ],
    answer: 0,
    explanation:
      'These condensation polymers absorb water from the air. In the hot melt, water attacks the chain bonds, lowering molecular weight and strength.',
  },
]

export const polymersQuestions: Question[] = [...structure, ...thermal, ...visco, ...processing]
