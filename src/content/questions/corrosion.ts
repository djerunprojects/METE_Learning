import type { Question } from '../types'

// Disciplines · Corrosion & Degradation.
// Sources: Callister & Rethwisch (ch. 17); Fontana, Corrosion Engineering; Jones, Principles and Prevention of Corrosion;
// Birks, Meier & Pettit, Introduction to the High-Temperature Oxidation of Metals.

const electrochem: Question[] = [
  {
    id: 'ec-001',
    nodeId: 'electrochemistry',
    type: 'multiple_choice',
    prompt: 'In a corrosion cell, where does the metal dissolve (oxidize)?',
    options: ['At the anode', 'At the cathode', 'In the electrolyte', 'In the external wire'],
    answer: 0,
    explanation:
      'At the anode, metal atoms give up electrons and go into solution as ions (e.g. Fe → Fe²⁺ + 2e⁻). The electrons are consumed by a reduction reaction at the cathode.',
  },
  {
    id: 'ec-002',
    nodeId: 'electrochemistry',
    type: 'multiple_choice',
    prompt: 'What is the most common cathode reaction for steel corroding in neutral, aerated water?',
    options: [
      'O₂ + 2H₂O + 4e⁻ → 4OH⁻',
      'Fe → Fe²⁺ + 2e⁻',
      '2H⁺ + 2e⁻ → H₂ (always)',
      'Cu²⁺ + 2e⁻ → Cu',
    ],
    answer: 0,
    explanation:
      'Oxygen reduction is the usual cathode reaction in neutral water. In acids, hydrogen evolution dominates. Fe → Fe²⁺ is the anode reaction.',
  },
  {
    id: 'ec-003',
    nodeId: 'electrochemistry',
    type: 'multiple_choice',
    prompt: 'Which four elements are needed for a corrosion cell to work?',
    options: [
      'An anode, a cathode, an electrolyte and an electrical connection between them',
      'Heat, light, oxygen and pressure',
      'Only water',
      'Only a metal',
    ],
    answer: 0,
    explanation:
      'Remove any one and corrosion stops. Coatings remove the electrolyte, insulation breaks the electrical path, and cathodic protection changes which surface is the anode.',
  },
  {
    id: 'ec-004',
    nodeId: 'electrochemistry',
    type: 'multiple_choice',
    prompt: 'A steel bolt holds a copper plate in seawater. Which metal corrodes faster?',
    options: ['The steel bolt', 'The copper plate', 'Both equally', 'Neither'],
    answer: 0,
    explanation:
      'Steel is more active (anodic) than copper in the galvanic series for seawater, so the coupling speeds up attack on the steel. Copper corrodes less than it would on its own.',
  },
  {
    id: 'ec-005',
    nodeId: 'electrochemistry',
    type: 'trend',
    prompt: 'Two different metals are coupled in seawater.',
    change: 'the anode area becomes small compared with the cathode area',
    target: 'the corrosion rate of the anode',
    answer: 'increases',
    explanation:
      'All the cathodic current must be balanced by the small anode, so the current density there is high. A small anode with a large cathode is the worst combination, e.g. steel rivets in a copper sheet.',
  },
  {
    id: 'ec-006',
    nodeId: 'electrochemistry',
    type: 'true_false',
    prompt:
      'The standard emf series ranks metals against the SHE under standard conditions, while the galvanic series ranks them as actually measured in a real environment such as seawater.',
    answer: true,
    explanation:
      'Real alloys and passive films don’t follow standard conditions. The galvanic series is more useful for predicting which metal corrodes in a real couple.',
  },
  {
    id: 'ec-007',
    nodeId: 'electrochemistry',
    type: 'multiple_choice',
    prompt: 'What is passivity?',
    options: [
      'A very thin, protective oxide film forms on the metal and greatly slows corrosion',
      'The metal stops conducting electricity',
      'The metal becomes radioactive',
      'The metal dissolves faster',
    ],
    answer: 0,
    explanation:
      'Stainless steels (at least about 11–12% Cr), aluminum and titanium owe their corrosion resistance to passive films a few nanometers thick.',
  },
  {
    id: 'ec-008',
    nodeId: 'electrochemistry',
    type: 'trend',
    prompt: 'Consider steel corroding in water.',
    change: 'the water temperature increases (oxygen still available)',
    target: 'the corrosion rate',
    answer: 'increases',
    explanation:
      'Reaction rates and diffusion speed up with temperature. In an open system, though, hot water holds less dissolved oxygen, so very near boiling the rate can drop again.',
  },
  {
    id: 'ec-009',
    nodeId: 'electrochemistry',
    type: 'multiple_choice',
    prompt: 'Why does dissolved oxygen matter so much for steel corroding in neutral water?',
    options: [
      'Oxygen reduction is the main cathode reaction, so oxygen supply often controls the corrosion rate',
      'Oxygen makes the water acidic',
      'Oxygen forms a perfect barrier on steel',
      'Oxygen has no effect',
    ],
    answer: 0,
    explanation:
      'Without a cathode reaction, the anode reaction cannot continue. Deaerated boiler water corrodes steel very slowly for this reason.',
  },
  {
    id: 'ec-010',
    nodeId: 'electrochemistry',
    type: 'trend',
    prompt: 'Corrosion is an electrochemical process, so mass loss follows Faraday’s law.',
    formula: 'faraday',
    change: 'the corrosion current I increases',
    target: 'the mass of metal lost over a year',
    answer: 'increases',
    explanation:
      'Every electron released at the anode corresponds to metal dissolving. Measuring the corrosion current (e.g. by polarization tests) gives the corrosion rate directly.',
  },
]

const forms: Question[] = [
  {
    id: 'foc-001',
    nodeId: 'forms-of-corrosion',
    type: 'matching',
    prompt: 'Match each form of corrosion to its description.',
    pairs: [
      { left: 'Galvanic corrosion', right: 'Two dissimilar metals in electrical contact' },
      { left: 'Pitting', right: 'Small, deep holes, often caused by chlorides' },
      { left: 'Crevice corrosion', right: 'Attack in stagnant solution inside narrow gaps' },
      { left: 'Intergranular corrosion', right: 'Attack along grain boundaries' },
    ],
    explanation:
      'Localized forms of corrosion can cause failure with very little total metal loss, which makes them more dangerous than uniform corrosion.',
  },
  {
    id: 'foc-002',
    nodeId: 'forms-of-corrosion',
    type: 'multiple_choice',
    prompt: 'Why can type 304 stainless steel suffer intergranular corrosion next to a weld?',
    options: [
      'Chromium carbides form at grain boundaries at about 500–800 °C, depleting the nearby metal of chromium',
      'Welding adds copper to the grain boundaries',
      'The weld becomes magnetic',
      'Grain boundaries become more noble',
    ],
    answer: 0,
    explanation:
      'This is sensitization. The Cr-depleted zones along boundaries can no longer passivate. Low-carbon grades (304L) or stabilized grades (321, 347) prevent it.',
  },
  {
    id: 'foc-003',
    nodeId: 'forms-of-corrosion',
    type: 'multiple_choice',
    prompt: 'What does SCC need in order to happen?',
    options: [
      'A tensile stress, a susceptible alloy and a specific environment, all at once',
      'Only high temperature',
      'Only compressive stress',
      'Any metal in any water',
    ],
    answer: 0,
    explanation:
      'Classic examples are austenitic stainless steel in hot chloride solutions and brass in ammonia. Removing any one factor, such as relieving residual tensile stress, can prevent it.',
  },
  {
    id: 'foc-004',
    nodeId: 'forms-of-corrosion',
    type: 'true_false',
    prompt: 'Pitting is especially dangerous because very little total metal loss can perforate a wall, and pits are hard to detect.',
    answer: true,
    explanation:
      'Pits often hide under deposits or corrosion products. The solution inside a pit becomes acidic and chloride-rich, so it keeps growing on its own.',
  },
  {
    id: 'foc-005',
    nodeId: 'forms-of-corrosion',
    type: 'multiple_choice',
    prompt: 'Dezincification of brass is an example of:',
    options: ['Selective leaching', 'Galvanic corrosion with steel', 'High-temperature oxidation', 'Erosion only'],
    answer: 0,
    explanation:
      'Zinc dissolves preferentially, leaving a weak, porous copper-rich layer. Adding small amounts of arsenic or tin inhibits it in brasses used for plumbing.',
  },
  {
    id: 'foc-006',
    nodeId: 'forms-of-corrosion',
    type: 'multiple_choice',
    prompt: 'What is erosion–corrosion?',
    options: [
      'Accelerated attack where a moving fluid wears away the protective film, often at bends and high velocities',
      'Corrosion in still air',
      'Corrosion only at grain boundaries',
      'Oxidation at high temperature',
    ],
    answer: 0,
    explanation:
      'Fast or turbulent flow, especially with suspended particles, strips passive or oxide films so fresh metal keeps corroding. Pump impellers and pipe elbows are typical victims.',
  },
  {
    id: 'foc-007',
    nodeId: 'forms-of-corrosion',
    type: 'trend',
    prompt: 'A stainless steel is exposed to different waters.',
    change: 'the chloride concentration increases',
    target: 'the risk of pitting',
    answer: 'increases',
    explanation:
      'Chloride ions break down passive films locally. Seawater is far more aggressive to stainless steels than fresh water.',
  },
  {
    id: 'foc-008',
    nodeId: 'forms-of-corrosion',
    type: 'trend',
    prompt: 'Type 316 stainless steel is like 304 with about 2–3% molybdenum added.',
    change: 'molybdenum is added to the stainless steel',
    target: 'its resistance to pitting in chloride environments',
    answer: 'increases',
    explanation:
      'Molybdenum strengthens the passive film and helps it repair. That is why 316 is preferred for marine and chemical service.',
  },
  {
    id: 'foc-009',
    nodeId: 'forms-of-corrosion',
    type: 'multiple_choice',
    prompt: 'What is hydrogen embrittlement?',
    options: [
      'Atomic hydrogen enters a metal (especially high-strength steel) and causes brittle cracking under stress',
      'Hydrogen gas makes metals stronger',
      'Water freezing in cracks',
      'Rust forming in dry air',
    ],
    answer: 0,
    explanation:
      'Hydrogen can come from corrosion, electroplating, pickling or welding. Small hydrogen atoms diffuse to high-stress regions and weaken the metal.',
  },
  {
    id: 'foc-010',
    nodeId: 'forms-of-corrosion',
    type: 'cause_effect',
    prompt: 'Select every correct statement.',
    scenario: 'A welded 304 stainless steel tank leaks, with corrosion running along grain boundaries a few millimeters from the weld.',
    options: [
      'The heat-affected zone was sensitized by chromium carbide formation',
      'Using the low-carbon grade 304L would help prevent it',
      'A solution anneal after welding would dissolve the carbides',
      'A higher-carbon stainless steel would solve the problem',
    ],
    answers: [0, 1, 2],
    explanation:
      'Less carbon means fewer chromium carbides. Solution annealing (about 1050 °C, then quenching) puts the chromium back into solution. More carbon makes sensitization worse.',
  },
]

const oxidation: Question[] = [
  {
    id: 'hto-001',
    nodeId: 'high-temp-oxidation',
    type: 'multiple_choice',
    prompt: 'What does a Pilling–Bedworth ratio between about 1 and 2 usually indicate?',
    formula: 'pilling-bedworth',
    options: [
      'A protective, adherent oxide scale',
      'A porous, non-protective scale',
      'A scale that always flakes off',
      'No oxide forms',
    ],
    answer: 0,
    explanation:
      'With a ratio a bit above 1, the oxide slightly over-fills the space of the metal it replaced and stays continuous. Below 1 it is too thin to cover; well above 2, compressive stresses make it spall.',
  },
  {
    id: 'hto-002',
    nodeId: 'high-temp-oxidation',
    type: 'trend',
    prompt: 'A metal oxidizes following the parabolic law.',
    formula: 'parabolic-oxidation',
    change: 'the oxidation time increases',
    target: 'the rate of weight gain',
    answer: 'decreases',
    explanation:
      'As the scale thickens, ions must diffuse farther through it, so the rate keeps slowing. Parabolic kinetics are a sign of a protective scale.',
  },
  {
    id: 'hto-003',
    nodeId: 'high-temp-oxidation',
    type: 'trend',
    prompt: 'The same alloy is oxidized at different temperatures.',
    formula: 'parabolic-oxidation',
    change: 'the temperature increases',
    target: 'the parabolic rate constant K_p',
    answer: 'increases',
    explanation:
      'K_p depends on diffusion through the scale, which follows an Arrhenius law, so it rises steeply with temperature.',
  },
  {
    id: 'hto-004',
    nodeId: 'high-temp-oxidation',
    type: 'multiple_choice',
    prompt: 'What controls the rate when oxidation follows parabolic kinetics?',
    options: [
      'Diffusion of ions (or electrons) through the growing oxide scale',
      'The supply of liquid water',
      'The color of the oxide',
      'Nothing; the rate is constant',
    ],
    answer: 0,
    explanation:
      'Metal ions diffuse outward or oxygen ions inward through the scale. The thicker it gets, the longer the path, so the rate falls.',
  },
  {
    id: 'hto-005',
    nodeId: 'high-temp-oxidation',
    type: 'multiple_choice',
    prompt: 'Why are chromium and aluminum added to heat-resistant alloys?',
    options: [
      'They form slow-growing, protective Cr₂O₃ or Al₂O₃ scales',
      'They lower the melting point',
      'They make the alloy magnetic',
      'They make the oxide scale porous',
    ],
    answer: 0,
    explanation:
      'These oxides are very stable and allow only slow diffusion, so they protect the metal underneath. Heating elements, stainless steels and superalloys rely on them.',
  },
  {
    id: 'hto-006',
    nodeId: 'high-temp-oxidation',
    type: 'true_false',
    prompt: 'Linear oxidation kinetics (constant rate) suggest that the scale is porous, cracked or otherwise non-protective.',
    answer: true,
    explanation:
      'If the scale does not slow down oxygen access, the reaction continues at a steady rate. Magnesium in air, for example, oxidizes linearly at high temperature.',
  },
  {
    id: 'hto-007',
    nodeId: 'high-temp-oxidation',
    type: 'multiple_choice',
    prompt: 'Which Pilling–Bedworth ratio suggests a porous, non-protective scale?',
    formula: 'pilling-bedworth',
    options: ['Less than 1', 'Between 1 and 2', 'Exactly 1.5', 'It never matters'],
    answer: 0,
    explanation:
      'If the oxide takes up less volume than the metal it consumed, it cannot cover the surface completely, leaving paths for oxygen. Magnesium (about 0.8) is a classic example.',
  },
  {
    id: 'hto-008',
    nodeId: 'high-temp-oxidation',
    type: 'multiple_choice',
    prompt: 'Why is thermal cycling hard on oxide scales?',
    options: [
      'Different expansion of metal and oxide creates stresses that crack and spall the scale, exposing fresh metal',
      'Cycling makes the oxide thicker and safer',
      'Oxides expand more than metals',
      'Cycling stops diffusion',
    ],
    answer: 0,
    explanation:
      'Each cooling builds up compressive stress in the scale. When it spalls, the protective element must form new scale, and the alloy is gradually depleted of it.',
  },
  {
    id: 'hto-009',
    nodeId: 'high-temp-oxidation',
    type: 'multiple_choice',
    prompt: 'What is hot corrosion in gas turbines?',
    options: [
      'Accelerated attack when molten salt deposits, such as sodium sulfate, dissolve the protective oxide',
      'Corrosion of cold parts by rainwater',
      'Normal slow oxidation',
      'Fatigue cracking',
    ],
    answer: 0,
    explanation:
      'Sodium from seawater and sulfur from fuel form Na₂SO₄ deposits. Once molten, they flux away protective scales. Higher Cr content and coatings help.',
  },
  {
    id: 'hto-010',
    nodeId: 'high-temp-oxidation',
    type: 'multiple_choice',
    prompt: 'Above about 1000 °C, why are alumina-forming alloys preferred over chromia-forming alloys?',
    options: [
      'Cr₂O₃ reacts further to form volatile CrO₃, so the chromia scale thins out',
      'Alumina melts at a lower temperature',
      'Chromium becomes radioactive',
      'Chromia scales become porous at room temperature',
    ],
    answer: 0,
    explanation:
      'In oxidizing gas at high temperature, chromia evaporates as CrO₃. Alumina stays stable and slow-growing, so the hottest components rely on Al₂O₃ scales.',
  },
]

const protection: Question[] = [
  {
    id: 'pc-001',
    nodeId: 'protection-coatings',
    type: 'multiple_choice',
    prompt: 'How does cathodic protection with a sacrificial anode work?',
    options: [
      'A more active metal such as zinc or magnesium is connected to the structure and corrodes instead of it',
      'A more noble metal is attached and corrodes',
      'The structure is painted',
      'The structure is heated',
    ],
    answer: 0,
    explanation:
      'The structure becomes the cathode of the cell. Ship hulls, buried pipelines and water heaters use sacrificial anodes, which must be replaced as they are consumed.',
  },
  {
    id: 'pc-002',
    nodeId: 'protection-coatings',
    type: 'multiple_choice',
    prompt: 'How does impressed-current cathodic protection work?',
    options: [
      'An external DC power supply drives current so that the structure is made the cathode',
      'A battery heats the structure',
      'Zinc paint is applied',
      'The structure is insulated from the ground',
    ],
    answer: 0,
    explanation:
      'Inert anodes and a rectifier supply the protective current. It suits large structures, such as long pipelines, where sacrificial anodes would not provide enough current.',
  },
  {
    id: 'pc-003',
    nodeId: 'protection-coatings',
    type: 'multiple_choice',
    prompt: 'Why is galvanized steel still protected where the zinc coating is scratched?',
    options: [
      'Zinc is more active than iron, so it corrodes sacrificially and protects the exposed steel',
      'Zinc is more noble than iron',
      'Scratches heal by themselves',
      'Zinc is an insulator',
    ],
    answer: 0,
    explanation:
      'The zinc acts as a sacrificial anode around small scratches. It also corrodes slowly in air on its own, which gives galvanized steel a long life.',
  },
  {
    id: 'pc-004',
    nodeId: 'protection-coatings',
    type: 'true_false',
    prompt: 'In most environments, if a tin coating on steel is scratched, the exposed steel corrodes faster, because tin is more noble than iron there.',
    answer: true,
    explanation:
      'Tin protects only as a barrier. Once breached, the steel becomes the anode in a galvanic couple with a large tin cathode. (Inside sealed food cans the polarity can reverse, which is part of why tin works there.)',
  },
  {
    id: 'pc-005',
    nodeId: 'protection-coatings',
    type: 'multiple_choice',
    prompt: 'What are corrosion inhibitors?',
    options: [
      'Chemicals added in small amounts to the environment that slow corrosion, for example by forming a film on the metal',
      'Metals that corrode first',
      'Paints only',
      'Acids that clean the surface',
    ],
    answer: 0,
    explanation:
      'Inhibitors are used in closed systems such as car radiators, boilers and oil pipelines, where the environment can be controlled.',
  },
  {
    id: 'pc-006',
    nodeId: 'protection-coatings',
    type: 'trend',
    prompt: 'Compare iron–chromium alloys in moist air.',
    change: 'the chromium content increases beyond about 11%',
    target: 'the corrosion resistance',
    answer: 'increases',
    explanation:
      'Above about 11–12% Cr, a continuous chromium-rich passive film forms. More chromium (plus Ni and Mo) makes it more robust.',
  },
  {
    id: 'pc-007',
    nodeId: 'protection-coatings',
    type: 'multiple_choice',
    prompt: 'What does anodizing aluminum do?',
    options: [
      'Thickens the protective aluminum oxide layer electrochemically',
      'Coats the aluminum with zinc',
      'Removes all oxide from the surface',
      'Makes the aluminum magnetic',
    ],
    answer: 0,
    explanation:
      'The part is made the anode in an acid bath, growing an oxide layer many micrometers thick. Its pores can be dyed and then sealed.',
  },
  {
    id: 'pc-008',
    nodeId: 'protection-coatings',
    type: 'multiple_choice',
    prompt: 'Which is a good corrosion-conscious design practice?',
    options: [
      'Avoid crevices and dissimilar metal contact, and allow water to drain',
      'Use small anodes connected to large cathodes',
      'Leave pockets where water can collect',
      'Join copper and steel directly in seawater',
    ],
    answer: 0,
    explanation:
      'Many corrosion problems are designed in. Continuous welds instead of lap joints, insulating washers between dissimilar metals and drain holes prevent them.',
  },
  {
    id: 'pc-009',
    nodeId: 'protection-coatings',
    type: 'trend',
    prompt: 'An aluminum part is bolted to a steel frame outdoors.',
    change: 'an insulating washer and sleeve are fitted between the two metals',
    target: 'the galvanic corrosion of the aluminum',
    answer: 'decreases',
    explanation:
      'Breaking the electrical path between the metals stops the galvanic current, so the aluminum corrodes only at its normal, much slower rate.',
  },
  {
    id: 'pc-010',
    nodeId: 'protection-coatings',
    type: 'cause_effect',
    prompt: 'Select every good protection measure.',
    scenario: 'A steel pipeline is to be buried in moist soil for 50 years.',
    options: [
      'Apply a protective coating',
      'Add cathodic protection to protect any coating defects',
      'Use zinc or magnesium sacrificial anodes, or impressed current',
      'Connect it directly to buried copper grounding rods',
    ],
    answers: [0, 1, 2],
    explanation:
      'Coatings and cathodic protection work as a team: the coating covers most of the area, and cathodic protection handles the holidays (defects). Bonding to copper would make the steel the anode of a galvanic couple.',
  },
]

export const corrosionQuestions: Question[] = [...electrochem, ...forms, ...oxidation, ...protection]
