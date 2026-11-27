import type { Question } from '../types'

// Applications · Materials Selection.
// Sources: Ashby, Materials Selection in Mechanical Design; Ashby, Materials and the Environment;
// Callister & Rethwisch (ch. 22).

const ashby: Question[] = [
  {
    id: 'ash-001',
    nodeId: 'ashby-charts',
    type: 'pick_region',
    prompt: 'Which region on this chart contains metals and alloys?',
    diagram: 'ashby_modulus_density',
    answer: 'metals',
    explanation:
      'Metals cluster at high density (about 1.7–20 Mg/m³) and high modulus (about 40–400 GPa), from magnesium to tungsten.',
  },
  {
    id: 'ash-002',
    nodeId: 'ashby-charts',
    type: 'pick_region',
    prompt: 'Which family has a low modulus but a density close to that of water?',
    diagram: 'ashby_modulus_density',
    answer: 'elastomers',
    explanation:
      'Rubbers have densities around 1 Mg/m³ but moduli of only about 0.001–0.1 GPa, thousands of times less stiff than metals.',
  },
  {
    id: 'ash-003',
    nodeId: 'ashby-charts',
    type: 'pick_region',
    prompt: 'Which family spans the lowest densities and moduli on the chart?',
    diagram: 'ashby_modulus_density',
    answer: 'foams',
    explanation:
      'Foams are mostly gas, so both density and stiffness drop far below those of the solid they are made from. They are used for cushioning, insulation and sandwich cores.',
  },
  {
    id: 'ash-004',
    nodeId: 'ashby-charts',
    type: 'multiple_choice',
    prompt: 'Why are Ashby charts drawn on log–log scales?',
    options: [
      'Properties span many orders of magnitude, and performance indices then plot as straight lines',
      'Log scales make all materials look the same',
      'To hide the data',
      'Because the properties are always negative',
    ],
    answer: 0,
    explanation:
      'Modulus ranges from about 0.0001 to 1000 GPa. On log axes, a constant value of E/ρ, √E/ρ or ∛E/ρ is a straight line with slope 1, 2 or 3, respectively.',
  },
  {
    id: 'ash-005',
    nodeId: 'ashby-charts',
    type: 'trend',
    prompt: 'A light, stiff tie rod (loaded in tension) is being selected.',
    formula: 'index-tie',
    change: 'a candidate material has a higher E/ρ',
    target: 'the mass of the tie needed for the required stiffness',
    answer: 'decreases',
    explanation:
      'For a tie of fixed length and stiffness, mass is proportional to ρ/E. Maximizing E/ρ minimizes mass; steel, aluminum and titanium have roughly the same E/ρ, while CFRP is much better.',
  },
  {
    id: 'ash-006',
    nodeId: 'ashby-charts',
    type: 'multiple_choice',
    prompt: 'For a light, stiff beam in bending, which material index should be maximized?',
    formula: 'index-beam',
    options: ['√E / ρ', 'E / ρ', 'ρ / E', 'E · ρ'],
    answer: 0,
    explanation:
      'A beam can be made deeper to gain stiffness, so the shape change makes density matter more than stiffness. That is why wood, with a good √E/ρ, works so well for beams.',
  },
  {
    id: 'ash-007',
    nodeId: 'ashby-charts',
    type: 'trend',
    prompt: 'Compare the material indices for a light, stiff panel versus a tie.',
    formula: 'index-panel',
    change: 'the component is a plate in bending (∛E/ρ) instead of a tie in tension (E/ρ)',
    target: 'the advantage of low-density materials like foams and polymers',
    answer: 'increases',
    explanation:
      'With E only to the 1/3 power, density dominates the index. Low-density materials, and sandwich panels with foam cores, become very competitive for panels.',
  },
  {
    id: 'ash-008',
    nodeId: 'ashby-charts',
    type: 'multiple_choice',
    prompt: 'What does a line of slope 1 on a log E vs log ρ chart represent?',
    options: [
      'All materials on the line have the same E/ρ (specific stiffness)',
      'All materials on the line have the same density',
      'All materials on the line have the same cost',
      'Nothing',
    ],
    answer: 0,
    explanation:
      'log E = log ρ + constant is a slope-1 line. Materials above the line beat those below it for a light, stiff tie.',
  },
  {
    id: 'ash-009',
    nodeId: 'ashby-charts',
    type: 'true_false',
    prompt: 'Woods measured along the grain are surprisingly competitive with metals for light, stiff beams.',
    answer: true,
    explanation:
      'Wood has a low density and decent modulus along the grain, giving a √E/ρ comparable to steel and aluminum. Natural cellular structure is very efficient.',
  },
  {
    id: 'ash-010',
    nodeId: 'ashby-charts',
    type: 'pick_region',
    prompt: 'Which family offers high modulus at low density, giving the best specific stiffness among structural materials on this chart?',
    diagram: 'ashby_modulus_density',
    answer: 'composites',
    explanation:
      'CFRP combines a modulus of around 70–200 GPa (depending on layup) with a density of about 1.6 Mg/m³, placing it above metals on the E/ρ guideline.',
  },
]

const tradeoffs: Question[] = [
  {
    id: 'st-001',
    nodeId: 'selection-tradeoffs',
    type: 'multiple_choice',
    prompt: 'What are the four steps of "translation" in Ashby’s selection method?',
    options: [
      'Function, constraints, objective and free variables',
      'Mine, smelt, cast and roll',
      'Price, color, weight and smell',
      'Design, build, test and sell',
    ],
    answer: 0,
    explanation:
      'Translation turns a design need into a selection problem: what the part does, what it must satisfy, what to minimize or maximize, and what the designer can still change.',
  },
  {
    id: 'st-002',
    nodeId: 'selection-tradeoffs',
    type: 'multiple_choice',
    prompt: 'In materials selection, what is the difference between screening and ranking?',
    options: [
      'Screening removes materials that fail hard constraints; ranking orders the survivors by a performance index',
      'They are the same thing',
      'Ranking happens before screening',
      'Screening uses only cost',
    ],
    answer: 0,
    explanation:
      'First eliminate everything that cannot work (e.g. melts below the service temperature), then rank what is left by how well it meets the objective.',
  },
  {
    id: 'st-003',
    nodeId: 'selection-tradeoffs',
    type: 'true_false',
    prompt: 'When two objectives conflict, such as low mass and low cost, there is usually no single best material, only a set of best compromises.',
    answer: true,
    explanation:
      'This set is called the trade-off surface or Pareto front. The final choice depends on how much the designer values each objective, for example using a penalty function.',
  },
  {
    id: 'st-004',
    nodeId: 'selection-tradeoffs',
    type: 'matching',
    prompt: 'Match each product to the objective that dominates its material choice.',
    pairs: [
      { left: 'Racing bicycle frame', right: 'Minimum mass (cost matters less)' },
      { left: 'Car body panel for a mass-market car', right: 'Low cost at high production volume' },
      { left: 'Turbine blade', right: 'Strength and creep resistance at high temperature' },
      { left: 'Hip implant', right: 'Biocompatibility and fatigue resistance' },
    ],
    explanation:
      'The same type of part can end up in different materials depending on what matters most to the user and the market.',
  },
  {
    id: 'st-005',
    nodeId: 'selection-tradeoffs',
    type: 'trend',
    prompt: 'Think about the value of saving mass in different vehicles.',
    change: 'the application moves from a family car to an aircraft to a spacecraft',
    target: 'the extra cost per kilogram saved that is worth paying',
    answer: 'increases',
    explanation:
      'Each kilogram saved is worth more where fuel or launch cost is high. That is why CFRP and titanium are common in aerospace but rarer in mass-market cars.',
  },
  {
    id: 'st-006',
    nodeId: 'selection-tradeoffs',
    type: 'multiple_choice',
    prompt: 'Why must the manufacturing process be considered along with the material?',
    options: [
      'Not every material can be made into every shape economically, and processing changes properties',
      'Processing never affects properties',
      'All materials can be cast at room temperature',
      'Processes are chosen after the product is sold',
    ],
    answer: 0,
    explanation:
      'A complex thin-walled shape might be easy to die cast in aluminum but impossible in a ceramic. Process, shape and material must be selected together.',
  },
  {
    id: 'st-007',
    nodeId: 'selection-tradeoffs',
    type: 'multiple_choice',
    prompt: 'A designer must keep a spring from yielding while storing as much elastic energy per unit volume as possible. Which property combination matters?',
    options: [
      'High yield strength squared divided by modulus (σ_y²/E)',
      'High density',
      'Low yield strength',
      'High thermal conductivity',
    ],
    answer: 0,
    explanation:
      'Stored elastic energy per volume at yield is σ_y²/(2E), so springs need a high yield strength relative to stiffness. Spring steels, titanium alloys and even rubber score well.',
  },
  {
    id: 'st-008',
    nodeId: 'selection-tradeoffs',
    type: 'trend',
    prompt: 'A pressure vessel must leak before it breaks, so a crack can be found before a sudden fracture.',
    change: 'the material has a higher ratio of fracture toughness to yield strength',
    target: 'how well it satisfies leak-before-break',
    answer: 'increases',
    explanation:
      'A high toughness-to-yield ratio means the crack can grow through the wall (and leak) before reaching the size that causes fast fracture.',
  },
  {
    id: 'st-009',
    nodeId: 'selection-tradeoffs',
    type: 'multiple_choice',
    prompt: 'Besides properties, which practical factors often decide the final material choice?',
    options: [
      'Cost, availability, supply security, ease of joining and existing experience',
      'Only the color',
      'Only the elastic modulus',
      'The name of the material',
    ],
    answer: 0,
    explanation:
      'A technically ideal material may be too expensive, hard to source or unfamiliar to the manufacturer. Proven materials with design data reduce risk.',
  },
  {
    id: 'st-010',
    nodeId: 'selection-tradeoffs',
    type: 'cause_effect',
    prompt: 'Select every constraint that would rule out common polymers.',
    scenario: 'A bracket must work continuously at 400 °C in an engine bay.',
    options: [
      'Most polymers soften or decompose well below 400 °C',
      'Polymers creep significantly at elevated temperature',
      'The service temperature screens out most polymers before ranking even starts',
      'Polymers are always too dense',
    ],
    answers: [0, 1, 2],
    explanation:
      'Maximum service temperature is a classic screening constraint. Even high-performance polymers like PEEK are limited to about 250 °C. Polymers are not too dense; that is one of their strengths.',
  },
]

const sustainability: Question[] = [
  {
    id: 'sus-001',
    nodeId: 'sustainability-recycling',
    type: 'multiple_choice',
    prompt: 'What is embodied energy?',
    options: [
      'The energy needed to produce one kilogram of a material from raw resources',
      'The energy stored in a material’s chemical bonds only',
      'The energy used while the product is in service',
      'The energy released when a material burns',
    ],
    answer: 0,
    explanation:
      'It covers mining, extraction and refining. Aluminum from ore needs roughly 200 MJ/kg, steel about 30 MJ/kg, and concrete only about 1 MJ/kg.',
  },
  {
    id: 'sus-002',
    nodeId: 'sustainability-recycling',
    type: 'trend',
    prompt: 'Aluminum can be made from bauxite ore or from recycled scrap.',
    change: 'recycled scrap is used instead of primary aluminum',
    target: 'the energy needed per kilogram',
    answer: 'decreases',
    explanation:
      'Remelting scrap avoids the energy-hungry electrolysis of alumina and saves about 90–95% of the energy, which is why aluminum cans are so worth recycling.',
  },
  {
    id: 'sus-003',
    nodeId: 'sustainability-recycling',
    type: 'multiple_choice',
    prompt: 'What does an LCA look at?',
    options: [
      'Environmental impact over the whole life: material production, manufacturing, transport, use and end of life',
      'Only the cost of the material',
      'Only the recycling stage',
      'Only the color and appearance',
    ],
    answer: 0,
    explanation:
      'Looking at the whole life avoids shifting the impact from one stage to another without noticing.',
  },
  {
    id: 'sus-004',
    nodeId: 'sustainability-recycling',
    type: 'true_false',
    prompt: 'For a fuel-burning car, the use phase usually dominates lifetime energy use, so making it lighter can save more energy than is spent making lighter materials.',
    answer: true,
    explanation:
      'Fuel burned over the vehicle’s life typically outweighs the energy of making it. Lighter materials with higher embodied energy can pay back through fuel savings, though the balance changes for electric vehicles.',
  },
  {
    id: 'sus-005',
    nodeId: 'sustainability-recycling',
    type: 'multiple_choice',
    prompt: 'Why is copper contamination a problem when recycling steel scrap?',
    options: [
      'Copper is hard to remove in steelmaking and causes hot shortness (surface cracking during hot rolling)',
      'Copper makes steel float',
      'Copper burns away easily',
      'Copper improves all steel properties',
    ],
    answer: 0,
    explanation:
      'Copper is more noble than iron, so it is not oxidized away. It builds up in recycled steel and is diluted with clean scrap or primary iron.',
  },
  {
    id: 'sus-006',
    nodeId: 'sustainability-recycling',
    type: 'multiple_choice',
    prompt: 'Why are thermoset composites such as carbon fiber–epoxy hard to recycle?',
    options: [
      'The crosslinked matrix cannot be remelted, so fibers must be recovered by grinding, burning off or dissolving the resin',
      'Carbon fibers dissolve in water',
      'They are not made of any useful materials',
      'They melt at room temperature',
    ],
    answer: 0,
    explanation:
      'Recovered fibers are usually shorter and used in lower-grade products (downcycling). Thermoplastic matrices and new recyclable resins are being developed.',
  },
  {
    id: 'sus-007',
    nodeId: 'sustainability-recycling',
    type: 'trend',
    prompt: 'Products are designed with recycling in mind.',
    change: 'fewer different materials are used, and they are easier to separate',
    target: 'the quality and value of the recycled material',
    answer: 'increases',
    explanation:
      'Mixed alloys and bonded multi-material parts contaminate scrap streams. Design for disassembly keeps materials clean and valuable.',
  },
  {
    id: 'sus-008',
    nodeId: 'sustainability-recycling',
    type: 'multiple_choice',
    prompt: 'What are critical raw materials?',
    options: [
      'Materials that are economically important but have supply risks, such as cobalt or rare earth elements',
      'Materials that are always cheap',
      'Materials found in every country',
      'Materials that are never recycled',
    ],
    answer: 0,
    explanation:
      'Batteries, permanent magnets and electronics depend on elements whose production is concentrated in a few places. Substitution and recycling reduce the risk.',
  },
  {
    id: 'sus-009',
    nodeId: 'sustainability-recycling',
    type: 'multiple_choice',
    prompt: 'What is the main idea of a circular economy for materials?',
    options: [
      'Keep materials in use as long as possible through reuse, repair, remanufacturing and recycling',
      'Use each material once and discard it',
      'Only use materials that are round',
      'Burn all waste for energy',
    ],
    answer: 0,
    explanation:
      'Instead of take–make–dispose, products and materials loop back into use. Durability and repairability are as important as recycling.',
  },
  {
    id: 'sus-010',
    nodeId: 'sustainability-recycling',
    type: 'cause_effect',
    prompt: 'Select every change that would lower the environmental impact.',
    scenario: 'A company wants to cut the carbon footprint of its aluminum bicycle frames.',
    options: [
      'Use a higher fraction of recycled aluminum',
      'Source primary aluminum smelted with low-carbon electricity',
      'Design frames to last longer and be repairable',
      'Use a different alloy in every tube so the frame is harder to recycle',
    ],
    answers: [0, 1, 2],
    explanation:
      'Recycled content and clean electricity cut production impact, and longer life spreads it over more use. Mixing alloys makes recycling harder.',
  },
]

export const selectionQuestions: Question[] = [...ashby, ...tradeoffs, ...sustainability]
