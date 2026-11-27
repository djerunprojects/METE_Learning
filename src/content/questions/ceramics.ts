import type { Question } from '../types'

// Disciplines · Ceramics & Glasses.
// Sources: Callister & Rethwisch (ch. 12, 13); Kingery, Bowen & Uhlmann, Introduction to Ceramics;
// Barsoum, Fundamentals of Ceramics; Shelby, Introduction to Glass Science and Technology.

const structures: Question[] = [
  {
    id: 'cer-001',
    nodeId: 'ceramic-structures',
    type: 'multiple_choice',
    prompt: 'In ionic ceramics, which two factors mainly decide the crystal structure?',
    options: [
      'Electrical neutrality and the ratio of cation to anion radius',
      'Color and density',
      'Melting point and hardness',
      'Grain size and porosity',
    ],
    answer: 0,
    explanation:
      'The structure must balance charges, and each cation must touch as many anions as possible without the anions overlapping, which depends on the radius ratio.',
  },
  {
    id: 'cer-002',
    nodeId: 'ceramic-structures',
    type: 'trend',
    prompt: 'Think about how many anions can fit around a cation.',
    change: 'the cation-to-anion radius ratio increases',
    target: 'the coordination number of the cation',
    answer: 'increases',
    explanation:
      'A larger cation has room for more anions around it: roughly CN 4 for small ratios, then 6, then 8 as the ratio approaches 1.',
  },
  {
    id: 'cer-003',
    nodeId: 'ceramic-structures',
    type: 'matching',
    prompt: 'Match each compound to its crystal structure type.',
    pairs: [
      { left: 'NaCl', right: 'Rock salt (CN 6)' },
      { left: 'CsCl', right: 'Cesium chloride (CN 8)' },
      { left: 'ZnS', right: 'Zinc blende (CN 4)' },
      { left: 'CaF₂', right: 'Fluorite' },
    ],
    explanation:
      'These prototype structures are used to describe many ceramics: MgO has the rock salt structure, and UO₂ and ZrO₂ are fluorite-type.',
  },
  {
    id: 'cer-004',
    nodeId: 'ceramic-structures',
    type: 'multiple_choice',
    prompt: 'Why are ceramics much stronger in compression than in tension?',
    options: [
      'Tension opens small flaws and cracks and makes them grow, while compression closes them',
      'Ceramics have no flaws',
      'Compression makes ceramics ductile',
      'Ceramics are metallic in compression',
    ],
    answer: 0,
    explanation:
      'Ceramics cannot blunt crack tips by plastic flow, so tiny pores and surface scratches limit tensile strength. Compressive strength can be about ten times higher.',
  },
  {
    id: 'cer-005',
    nodeId: 'ceramic-structures',
    type: 'true_false',
    prompt: 'Silicate ceramics are built from SiO₄⁴⁻ tetrahedra.',
    answer: true,
    explanation:
      'Each silicon sits at the center of four oxygens. How the tetrahedra share corners (isolated, chains, sheets or 3D networks) explains silicates from olivine to clay to quartz and glass.',
  },
  {
    id: 'cer-006',
    nodeId: 'ceramic-structures',
    type: 'multiple_choice',
    prompt: 'What is a Schottky defect in an ionic crystal?',
    options: [
      'A pair of cation and anion vacancies, so the crystal stays electrically neutral',
      'A cation that moved into an interstitial site, leaving a vacancy',
      'An extra electron',
      'A grain boundary',
    ],
    answer: 0,
    explanation:
      'Defects in ionic crystals must keep the charge balanced. A cation moving into an interstitial site, leaving its own vacancy behind, is a Frenkel defect instead.',
  },
  {
    id: 'cer-007',
    nodeId: 'ceramic-structures',
    type: 'trend',
    prompt: 'Compare sintered alumina samples.',
    change: 'the porosity increases',
    target: 'the flexural strength',
    answer: 'decreases',
    explanation:
      'Pores reduce the cross-section carrying load and act as flaws that concentrate stress. Strength falls roughly exponentially with porosity, and so does the elastic modulus.',
  },
  {
    id: 'cer-008',
    nodeId: 'ceramic-structures',
    type: 'multiple_choice',
    prompt: 'Why do strength values of a ceramic scatter so much, so that Weibull statistics are needed?',
    options: [
      'Strength depends on the largest flaw in each specimen, and flaw sizes vary from sample to sample',
      'Ceramics have identical flaws in every specimen',
      'Measurements on ceramics are always wrong',
      'Ceramics change composition during testing',
    ],
    answer: 0,
    explanation:
      'Fracture starts at the worst flaw. Since flaw sizes are random, strength is described by a probability of failure, and designers aim for a very low one.',
  },
  {
    id: 'cer-009',
    nodeId: 'ceramic-structures',
    type: 'trend',
    prompt: 'Ceramic specimens are made from the same material in different sizes.',
    change: 'the stressed volume of the specimen increases',
    target: 'the average measured strength',
    answer: 'decreases',
    explanation:
      'A bigger volume is more likely to contain a large, critical flaw. This size effect is why small lab specimens can overestimate the strength of large parts.',
  },
  {
    id: 'cer-010',
    nodeId: 'ceramic-structures',
    type: 'multiple_choice',
    prompt: 'How does transformation toughening work in partially stabilized zirconia?',
    options: [
      'Tetragonal grains near a crack tip transform to monoclinic with a volume increase, squeezing the crack shut',
      'The zirconia melts at the crack tip',
      'Zirconia becomes metallic under stress',
      'The crack is filled by glass',
    ],
    answer: 0,
    explanation:
      'The stress at the crack tip triggers the transformation, and the roughly 4% volume expansion puts the crack under compression. This gives zirconia unusually high toughness for a ceramic.',
  },
]

const sintering: Question[] = [
  {
    id: 'sin-001',
    nodeId: 'sintering',
    type: 'multiple_choice',
    prompt: 'What is the driving force for sintering?',
    options: [
      'Reducing the total surface energy by reducing surface area',
      'Melting the whole powder',
      'Applying an electric current',
      'Increasing porosity',
    ],
    answer: 0,
    explanation:
      'Fine powders have a huge surface area with high energy. Atoms diffuse to form necks between particles and fill pores, lowering that energy.',
  },
  {
    id: 'sin-002',
    nodeId: 'sintering',
    type: 'trend',
    prompt: 'The same ceramic is sintered from powders of different sizes.',
    change: 'the powder particle size is smaller',
    target: 'the rate of densification',
    answer: 'increases',
    explanation:
      'Smaller particles have more surface energy per volume and shorter diffusion distances, so they sinter faster and at lower temperatures.',
  },
  {
    id: 'sin-003',
    nodeId: 'sintering',
    type: 'trend',
    prompt: 'A ceramic powder compact is sintered for a fixed time.',
    change: 'the sintering temperature increases',
    target: 'the densification rate',
    answer: 'increases',
    explanation:
      'Diffusion speeds up exponentially with temperature. Too high a temperature, however, causes excessive grain growth.',
  },
  {
    id: 'sin-004',
    nodeId: 'sintering',
    type: 'multiple_choice',
    prompt: 'What happens in the three stages of solid-state sintering?',
    options: [
      'Necks form between particles → open pore channels shrink → isolated closed pores are eliminated',
      'Melting → pouring → solidifying',
      'Pressing → cutting → polishing',
      'Grain growth → cracking → densification',
    ],
    answer: 0,
    explanation:
      'Initially particles bond at contacts. In the intermediate stage, most of the shrinkage happens as pore channels narrow. In the final stage, the remaining pores are isolated and slow to remove.',
  },
  {
    id: 'sin-005',
    nodeId: 'sintering',
    type: 'true_false',
    prompt: 'Sintering usually shrinks the part, so the green body must be made oversized.',
    answer: true,
    explanation:
      'Removing porosity reduces volume; linear shrinkage of 15–20% is common for ceramics. Uneven shrinkage causes warping.',
  },
  {
    id: 'sin-006',
    nodeId: 'sintering',
    type: 'multiple_choice',
    prompt: 'Why is grain growth controlled during final-stage sintering?',
    options: [
      'Fast-moving grain boundaries can leave pores trapped inside grains, where they are almost impossible to remove',
      'Grain growth always increases density',
      'Larger grains make ceramics tougher in all cases',
      'Grain growth has no effect on pores',
    ],
    answer: 0,
    explanation:
      'Pores on grain boundaries can shrink by boundary diffusion. Adding a little MgO to alumina slows boundary motion and enables nearly pore-free, even translucent alumina.',
  },
  {
    id: 'sin-007',
    nodeId: 'sintering',
    type: 'multiple_choice',
    prompt: 'What is liquid-phase sintering?',
    options: [
      'A small amount of liquid wets the particles and speeds up rearrangement and densification',
      'The whole part is melted and cast',
      'Sintering in a water bath',
      'Sintering without any heating',
    ],
    answer: 0,
    explanation:
      'The liquid pulls particles together by capillary forces and provides fast diffusion paths. It is used for cemented carbides, many porcelains and silicon nitride.',
  },
  {
    id: 'sin-008',
    nodeId: 'sintering',
    type: 'multiple_choice',
    prompt: 'What does hot pressing add to sintering?',
    options: [
      'Applied pressure during heating, giving higher density at lower temperature',
      'A magnetic field',
      'A coating',
      'Faster cooling',
    ],
    answer: 0,
    explanation:
      'Pressure adds to the driving force for densification, so less grain growth occurs. It is used for hard-to-sinter ceramics such as boron carbide armor.',
  },
  {
    id: 'sin-009',
    nodeId: 'sintering',
    type: 'true_false',
    prompt: 'Surface diffusion and evaporation–condensation make necks grow between particles but do not shrink the part.',
    answer: true,
    explanation:
      'These mechanisms only move material from one surface to another. Densification needs material taken from grain boundaries or the particle interior, by grain boundary or lattice diffusion.',
  },
  {
    id: 'sin-010',
    nodeId: 'sintering',
    type: 'cause_effect',
    prompt: 'Select every change that would help.',
    scenario: 'A sintered alumina part still has 8% porosity, which is too much.',
    options: [
      'Use a finer starting powder',
      'Raise the sintering temperature or time',
      'Add a small amount of MgO to limit grain growth',
      'Use a coarser starting powder',
    ],
    answers: [0, 1, 2],
    explanation:
      'Finer powders sinter faster, more temperature or time allows more diffusion, and controlling grain growth keeps pores on boundaries where they can be removed. Coarser powder would make it worse.',
  },
]

const glass: Question[] = [
  {
    id: 'gl-001',
    nodeId: 'glass-ceramics',
    type: 'multiple_choice',
    prompt: 'What is a glass?',
    options: [
      'An amorphous solid with no long-range atomic order',
      'A polycrystalline ceramic',
      'A metal alloy',
      'A liquid at room temperature',
    ],
    answer: 0,
    explanation:
      'Glasses keep the disordered structure of a liquid, frozen in place. Silica glass is a random network of corner-sharing SiO₄ tetrahedra.',
  },
  {
    id: 'gl-002',
    nodeId: 'glass-ceramics',
    type: 'multiple_choice',
    prompt: 'What is the glass transition temperature?',
    options: [
      'The temperature where a supercooled liquid becomes a rigid glass, seen as a change in slope of volume vs temperature',
      'The melting point of the crystal',
      'The boiling point',
      'The temperature where glass becomes metallic',
    ],
    answer: 0,
    explanation:
      'On cooling, the liquid’s viscosity rises until atoms can no longer rearrange to keep up. Below this point, the volume shrinks at the lower rate of a solid.',
  },
  {
    id: 'gl-003',
    nodeId: 'glass-ceramics',
    type: 'multiple_choice',
    prompt: 'What does adding Na₂O to silica glass do, as in soda-lime glass?',
    options: [
      'It acts as a network modifier: it breaks Si–O–Si bridges and lowers viscosity and working temperature',
      'It makes the glass crystalline',
      'It raises the melting point a lot',
      'It turns the glass into a metal',
    ],
    answer: 0,
    explanation:
      'Each Na₂O adds oxygens that end the network chains. A less connected network flows at much lower temperature, so the glass is cheaper to melt and form. CaO is added to restore chemical durability.',
  },
  {
    id: 'gl-004',
    nodeId: 'glass-ceramics',
    type: 'trend',
    prompt: 'Compare silica-based glasses.',
    change: 'more network modifier (such as Na₂O) is added',
    target: 'the softening temperature',
    answer: 'decreases',
    explanation:
      'Breaking more network bonds makes the structure easier to deform at high temperature. Pure fused silica softens far higher than soda-lime glass.',
  },
  {
    id: 'gl-005',
    nodeId: 'glass-ceramics',
    type: 'trend',
    prompt: 'Glass is shaped while hot.',
    change: 'the temperature of the glass increases',
    target: 'its viscosity',
    answer: 'decreases',
    explanation:
      'Viscosity falls steeply with temperature. Glass forming is done in specific viscosity windows: melting, working, softening and annealing points.',
  },
  {
    id: 'gl-006',
    nodeId: 'glass-ceramics',
    type: 'multiple_choice',
    prompt: 'How does thermal tempering strengthen glass?',
    options: [
      'Rapid air cooling of the surface leaves it in compression and the core in tension, so surface flaws are held closed',
      'It makes the glass crystalline',
      'It removes all flaws',
      'It adds a polymer coating',
    ],
    answer: 0,
    explanation:
      'The surface solidifies first, and the core then contracts and pulls it into compression. A crack must overcome that compression before it can grow. When it does break, the stored energy shatters it into small, safer pieces.',
  },
  {
    id: 'gl-007',
    nodeId: 'glass-ceramics',
    type: 'true_false',
    prompt: 'Glass-ceramics are made by first forming a glass and then crystallizing it with a controlled heat treatment (nucleation, then growth).',
    answer: true,
    explanation:
      'Nucleating agents such as TiO₂ are added. A low-temperature hold forms many nuclei, and a higher-temperature hold grows them into a fine-grained crystalline body.',
  },
  {
    id: 'gl-008',
    nodeId: 'glass-ceramics',
    type: 'multiple_choice',
    prompt: 'Why can glass-ceramic cooktops survive sudden temperature changes?',
    options: [
      'Their thermal expansion is close to zero, so thermal stresses are tiny',
      'They are very thick',
      'They conduct heat like copper',
      'They are made of metal',
    ],
    answer: 0,
    explanation:
      'Thermal stress is proportional to the expansion coefficient. Some crystal phases in these materials contract when heated, cancelling the glass’s expansion.',
  },
  {
    id: 'gl-009',
    nodeId: 'glass-ceramics',
    type: 'multiple_choice',
    prompt: 'What does annealing a glass do?',
    options: [
      'Relieves internal thermal stresses by holding near the annealing point and then cooling slowly',
      'Makes the glass crystalline',
      'Makes the glass harder by quenching',
      'Melts the glass',
    ],
    answer: 0,
    explanation:
      'At the annealing point, viscosity is low enough for stresses to relax within minutes. Slow cooling afterwards prevents new stresses from forming.',
  },
  {
    id: 'gl-010',
    nodeId: 'glass-ceramics',
    type: 'trend',
    prompt: 'The same glass-forming liquid is cooled at different rates.',
    change: 'the cooling rate is faster',
    target: 'the glass transition temperature',
    answer: 'increases',
    explanation:
      'With faster cooling, atoms have less time to rearrange, so the structure freezes in at a higher temperature. Tg depends on cooling rate, unlike a true melting point.',
  },
]

const refractories: Question[] = [
  {
    id: 'rf-001',
    nodeId: 'refractories',
    type: 'multiple_choice',
    prompt: 'What makes a material a refractory?',
    options: [
      'It keeps its strength and stability at high temperature and resists attack by molten metal and slag',
      'It conducts electricity well',
      'It melts at a low temperature',
      'It is transparent',
    ],
    answer: 0,
    explanation:
      'Refractories line furnaces, ladles and kilns. Besides a high melting point, they need resistance to thermal shock, slag attack and creep.',
  },
  {
    id: 'rf-002',
    nodeId: 'refractories',
    type: 'matching',
    prompt: 'Match each refractory to its chemical character.',
    pairs: [
      { left: 'Silica brick', right: 'Acid' },
      { left: 'Magnesia (MgO) brick', right: 'Basic' },
      { left: 'Chromite brick', right: 'Neutral' },
    ],
    explanation:
      'Acid refractories (SiO₂-rich) resist acid slags, basic ones (MgO, dolomite) resist basic slags, and neutral ones such as chromite and high alumina are less sensitive to slag chemistry.',
  },
  {
    id: 'rf-003',
    nodeId: 'refractories',
    type: 'multiple_choice',
    prompt: 'A steelmaking converter has a basic, lime-rich slag. Which lining should be used?',
    options: [
      'A basic refractory such as MgO–carbon',
      'An acid silica refractory',
      'A polymer lining',
      'Any lining works the same',
    ],
    answer: 0,
    explanation:
      'A basic slag reacts with and dissolves an acid lining. Matching slag and refractory chemistry is a basic rule of furnace design.',
  },
  {
    id: 'rf-004',
    nodeId: 'refractories',
    type: 'trend',
    prompt: 'Compare refractory bricks of the same composition.',
    change: 'the porosity increases',
    target: 'the thermal conductivity',
    answer: 'decreases',
    explanation:
      'Pores filled with gas conduct heat poorly, so porous bricks are better insulators. That is why insulating firebrick is light and porous.',
  },
  {
    id: 'rf-005',
    nodeId: 'refractories',
    type: 'trend',
    prompt: 'Compare refractory bricks of the same composition in contact with molten slag.',
    change: 'the open porosity increases',
    target: 'the resistance to slag penetration',
    answer: 'decreases',
    explanation:
      'Open pores let liquid slag soak into the brick, where it dissolves the grains and causes spalling. Dense bricks are used where slag contact occurs.',
  },
  {
    id: 'rf-006',
    nodeId: 'refractories',
    type: 'multiple_choice',
    prompt: 'Which combination of properties gives good thermal shock resistance?',
    options: [
      'Low thermal expansion, high thermal conductivity and high strength or toughness',
      'High thermal expansion and low conductivity',
      'High density only',
      'Low strength and high expansion',
    ],
    answer: 0,
    explanation:
      'Low expansion means small thermal strains. High conductivity reduces temperature differences inside the part. Strength and toughness resist the remaining stresses.',
  },
  {
    id: 'rf-007',
    nodeId: 'refractories',
    type: 'trend',
    prompt: 'A refractory part is restrained and then heated quickly.',
    formula: 'thermal-stress',
    change: 'the material has a larger thermal expansion coefficient α_l',
    target: 'the thermal stress',
    answer: 'increases',
    explanation:
      'σ is proportional to α_l, so materials that expand more build up larger stresses when restrained or heated unevenly, and are more likely to crack.',
  },
  {
    id: 'rf-008',
    nodeId: 'refractories',
    type: 'true_false',
    prompt: 'MgO–carbon refractories are used in steelmaking converters because the graphite resists wetting by slag and improves thermal shock resistance.',
    answer: true,
    explanation:
      'Graphite is not wetted by slag, and it has high conductivity and low expansion. Antioxidants such as Al or Mg are added to protect the carbon from burning out.',
  },
  {
    id: 'rf-009',
    nodeId: 'refractories',
    type: 'multiple_choice',
    prompt: 'Where is highly porous insulating firebrick used in a furnace?',
    options: [
      'As a backup layer behind the dense working lining, to reduce heat loss',
      'In direct contact with molten slag',
      'As the hearth under molten metal',
      'As electrical wiring',
    ],
    answer: 0,
    explanation:
      'The dense hot-face lining resists attack, while the porous layer behind it keeps heat in. Insulating brick would be penetrated quickly by slag.',
  },
  {
    id: 'rf-010',
    nodeId: 'refractories',
    type: 'cause_effect',
    prompt: 'Select every correct statement.',
    scenario: 'The refractory lining of a ladle keeps cracking and flaking off (spalling).',
    options: [
      'Rapid temperature changes create thermal stresses in the lining',
      'Preheating the ladle before filling it reduces the thermal shock',
      'A refractory with lower thermal expansion or higher toughness would help',
      'Choosing a refractory with higher thermal expansion would help',
    ],
    answers: [0, 1, 2],
    explanation:
      'Thermal spalling comes from steep temperature gradients. Preheating reduces them, and low-expansion, tough refractories withstand them better.',
  },
]

export const ceramicsQuestions: Question[] = [...structures, ...sintering, ...glass, ...refractories]
