import type { Question } from '../types'

// Disciplines · Extractive Metallurgy.
// Sources: Gilchrist, Extraction Metallurgy; Wills & Finch, Wills' Mineral Processing Technology;
// Gaskell, Introduction to the Thermodynamics of Materials (Ellingham diagrams); Callister & Rethwisch (ch. 11).

const mineral: Question[] = [
  {
    id: 'mp-001',
    nodeId: 'mineral-processing',
    type: 'multiple_choice',
    prompt: 'What is the main goal of mineral processing (beneficiation)?',
    options: [
      'Separate the valuable minerals from the waste rock to make a richer concentrate',
      'Turn the ore directly into pure metal',
      'Add impurities to the ore',
      'Melt the ore',
    ],
    answer: 0,
    explanation:
      'Ores often contain only a few percent of valuable mineral. Concentrating it first means far less material has to be smelted or leached.',
  },
  {
    id: 'mp-002',
    nodeId: 'mineral-processing',
    type: 'multiple_choice',
    prompt: 'What does comminution mean?',
    options: [
      'Crushing and grinding ore to free the mineral grains from the waste rock',
      'Mixing ore with water',
      'Heating ore in air',
      'Dissolving ore in acid',
    ],
    answer: 0,
    explanation:
      'Valuable minerals are locked inside rock. Breaking the ore down until the grains are freed ("liberated") is required before they can be separated.',
  },
  {
    id: 'mp-003',
    nodeId: 'mineral-processing',
    type: 'true_false',
    prompt: 'Grinding is usually the most energy-intensive step in a mineral processing plant.',
    answer: true,
    explanation:
      'Breaking rock into fine particles takes a lot of energy, and very little of it goes into creating new surface. Comminution can use around half of a mine site’s electricity.',
  },
  {
    id: 'mp-004',
    nodeId: 'mineral-processing',
    type: 'multiple_choice',
    prompt: 'Froth flotation separates minerals based on differences in:',
    options: [
      'Surface chemistry: whether the particle surface repels water and sticks to air bubbles',
      'Magnetic properties',
      'Melting point',
      'Color',
    ],
    answer: 0,
    explanation:
      'Air bubbles carry water-repellent (hydrophobic) particles up into a froth that is skimmed off, while wetted particles stay in the slurry.',
  },
  {
    id: 'mp-005',
    nodeId: 'mineral-processing',
    type: 'multiple_choice',
    prompt: 'In froth flotation, what do collectors do?',
    options: [
      'They adsorb on the target mineral and make its surface hydrophobic',
      'They make all particles sink',
      'They dissolve the gangue',
      'They grind the ore',
    ],
    answer: 0,
    explanation:
      'Collectors (e.g. xanthates for sulfide minerals) coat the valuable mineral selectively. Frothers stabilize the bubbles, and depressants keep unwanted minerals wetted.',
  },
  {
    id: 'mp-006',
    nodeId: 'mineral-processing',
    type: 'matching',
    prompt: 'Match each separation method to the property it uses.',
    pairs: [
      { left: 'Froth flotation', right: 'Surface wettability' },
      { left: 'Magnetic separation', right: 'Magnetic susceptibility' },
      { left: 'Gravity separation (jigs, spirals)', right: 'Density' },
      { left: 'Electrostatic separation', right: 'Electrical conductivity' },
    ],
    explanation:
      'Every separation method exploits a property that differs between the valuable mineral and the gangue.',
  },
  {
    id: 'mp-007',
    nodeId: 'mineral-processing',
    type: 'trend',
    prompt: 'An ore is ground in a mill before separation.',
    change: 'the ore is ground finer',
    target: 'the degree of liberation of the valuable mineral',
    answer: 'increases',
    explanation:
      'Smaller particles are more likely to be either pure mineral or pure gangue, rather than locked together. That improves separation, up to the point where very fine particles become hard to recover.',
  },
  {
    id: 'mp-008',
    nodeId: 'mineral-processing',
    type: 'trend',
    prompt: 'The same ore is ground in a mill.',
    change: 'the target particle size is made finer',
    target: 'the energy consumed per tonne of ore',
    answer: 'increases',
    explanation:
      'Grinding energy rises steeply as particle size falls. Plants grind only as fine as needed for adequate liberation.',
  },
  {
    id: 'mp-009',
    nodeId: 'mineral-processing',
    type: 'multiple_choice',
    prompt: 'What is gangue?',
    options: [
      'The worthless minerals in an ore',
      'The valuable mineral',
      'The final refined metal',
      'The slag on top of molten metal',
    ],
    answer: 0,
    explanation:
      'Gangue is the rock and minerals that surround the valuable mineral, often silicates such as quartz. It ends up in the tailings.',
  },
  {
    id: 'mp-010',
    nodeId: 'mineral-processing',
    type: 'cause_effect',
    prompt: 'Select every correct statement.',
    scenario: 'A magnetite iron ore is crushed, ground and concentrated before pelletizing.',
    options: [
      'Magnetic separation works well because magnetite is strongly magnetic',
      'Concentrating reduces the mass that must be shipped and smelted',
      'Flotation can never be used for any iron ore',
      'Concentration raises the iron grade of the furnace feed',
    ],
    answers: [0, 1, 3],
    explanation:
      'Magnetite (Fe₃O₄) is ferrimagnetic, so low-intensity magnetic separators work well. Higher-grade feed means less slag and energy per tonne of iron. Flotation is in fact also used for some iron ores, often to remove silica.',
  },
]

const pyro: Question[] = [
  {
    id: 'py-001',
    nodeId: 'pyrometallurgy',
    type: 'multiple_choice',
    prompt: 'On an Ellingham diagram, what does it mean when an oxide’s line lies lower?',
    formula: 'gibbs-free-energy',
    options: [
      'The oxide is more stable (more negative ΔG° of formation)',
      'The oxide is less stable',
      'The metal melts at a lower temperature',
      'The oxide is a gas',
    ],
    answer: 0,
    explanation:
      'The Ellingham diagram plots ΔG° for forming oxides (per mole of O₂) against temperature. Lower lines, such as those for Al₂O₃ and CaO, belong to oxides that are harder to reduce.',
  },
  {
    id: 'py-002',
    nodeId: 'pyrometallurgy',
    type: 'multiple_choice',
    prompt: 'At a given temperature, metal A can reduce the oxide of metal B when:',
    options: [
      'Metal A’s oxide line lies below metal B’s oxide line on the Ellingham diagram',
      'Metal A’s oxide line lies above metal B’s',
      'Metal A has a higher melting point',
      'Metal A is heavier',
    ],
    answer: 0,
    explanation:
      'The overall reaction’s ΔG° is the difference between the two lines. If A’s oxide is more stable, A takes the oxygen. This is how aluminum reduces Cr₂O₃ in the aluminothermic (thermite) process.',
  },
  {
    id: 'py-003',
    nodeId: 'pyrometallurgy',
    type: 'trend',
    prompt: 'Most metal oxide lines on an Ellingham diagram slope upward, because oxygen gas is consumed (ΔS° < 0).',
    formula: 'gibbs-free-energy',
    change: 'the temperature increases',
    target: 'the stability of a typical metal oxide',
    answer: 'decreases',
    explanation:
      'With ΔS° < 0, the −TΔS° term is positive and grows with T, so ΔG° becomes less negative. That is why oxides are easier to reduce at high temperature.',
  },
  {
    id: 'py-004',
    nodeId: 'pyrometallurgy',
    type: 'multiple_choice',
    prompt: 'Why can carbon reduce many metal oxides at high temperature?',
    options: [
      'The line for 2C + O₂ → 2CO slopes downward because gas is produced, so it crosses below many metal oxide lines at high temperature',
      'Carbon is a metal',
      'Carbon oxide lines slope upward like metal oxides',
      'Carbon reacts only with gold',
    ],
    answer: 0,
    explanation:
      'Forming CO doubles the number of gas molecules (ΔS° > 0), so ΔG° becomes more negative with temperature. Above the crossover temperature, carbon can reduce the metal oxide; for iron oxide this happens in the blast furnace.',
  },
  {
    id: 'py-005',
    nodeId: 'pyrometallurgy',
    type: 'multiple_choice',
    prompt: 'What does roasting a sulfide concentrate such as ZnS do?',
    options: [
      'Heats it in air to convert the sulfide to an oxide, releasing SO₂',
      'Melts it into pure zinc',
      'Dissolves it in water',
      'Adds sulfur to it',
    ],
    answer: 0,
    explanation:
      'Oxides are easier to reduce with carbon or to leach than sulfides. The SO₂ is captured and turned into sulfuric acid.',
  },
  {
    id: 'py-006',
    nodeId: 'pyrometallurgy',
    type: 'multiple_choice',
    prompt: 'What is the role of a flux in smelting?',
    options: [
      'It combines with gangue and impurities to form a low-melting slag',
      'It reduces the metal oxide',
      'It makes the metal boil',
      'It is the fuel',
    ],
    answer: 0,
    explanation:
      'Silica-rich gangue melts at very high temperatures on its own. Adding a flux such as limestone (CaO) forms a fluid slag that separates easily from the metal.',
  },
  {
    id: 'py-007',
    nodeId: 'pyrometallurgy',
    type: 'true_false',
    prompt: 'In a smelting furnace, the molten slag floats on top of the molten metal because it is less dense.',
    answer: true,
    explanation:
      'Oxide slags have densities around 3 g/cm³, compared with about 7 g/cm³ for molten iron. The slag also protects the metal from the atmosphere and absorbs impurities.',
  },
  {
    id: 'py-008',
    nodeId: 'pyrometallurgy',
    type: 'multiple_choice',
    prompt: 'In copper smelting, what is the "matte"?',
    options: [
      'A molten mixture of copper and iron sulfides that is later converted to blister copper',
      'A layer of pure copper',
      'The solid waste rock',
      'A copper oxide powder',
    ],
    answer: 0,
    explanation:
      'Smelting removes much of the iron into the slag and leaves a Cu–Fe–S matte. Blowing air through it in a converter oxidizes the remaining iron and sulfur, giving blister copper (about 98–99% Cu).',
  },
  {
    id: 'py-009',
    nodeId: 'pyrometallurgy',
    type: 'multiple_choice',
    prompt: 'Why do copper smelters often produce sulfuric acid as a by-product?',
    options: [
      'Sulfur from the sulfide ore leaves as SO₂ gas, which is captured and converted to H₂SO₄',
      'Sulfuric acid is used as fuel',
      'Copper ores contain sulfuric acid',
      'It is added to cool the furnace',
    ],
    answer: 0,
    explanation:
      'Capturing SO₂ prevents acid rain and turns a pollutant into a saleable product. Much of the acid is used again in hydrometallurgy.',
  },
  {
    id: 'py-010',
    nodeId: 'pyrometallurgy',
    type: 'trend',
    prompt: 'Iron oxide is reduced by a CO–CO₂ gas mixture.',
    change: 'the CO/CO₂ ratio of the gas increases',
    target: 'the reducing power of the gas',
    answer: 'increases',
    explanation:
      'CO removes oxygen from the oxide and becomes CO₂. A gas richer in CO (lower oxygen potential) can reduce more stable oxides, all the way down to metallic iron.',
  },
]

const hydro: Question[] = [
  {
    id: 'hy-001',
    nodeId: 'hydro-electrometallurgy',
    type: 'multiple_choice',
    prompt: 'What is leaching?',
    options: [
      'Dissolving the valuable metal from an ore into an aqueous solution',
      'Melting the ore',
      'Crushing the ore',
      'Burning off sulfur',
    ],
    answer: 0,
    explanation:
      'Examples include sulfuric acid for copper oxide ores and cyanide solutions for gold. The metal is then recovered from the solution.',
  },
  {
    id: 'hy-002',
    nodeId: 'hydro-electrometallurgy',
    type: 'true_false',
    prompt: 'Hydrometallurgy can treat low-grade ores economically, for example by heap leaching.',
    answer: true,
    explanation:
      'In heap leaching, crushed ore is piled on a lined pad and sprayed with solution for weeks or months. There is no grinding or smelting, so even ores with well under 1% metal can be worthwhile.',
  },
  {
    id: 'hy-003',
    nodeId: 'hydro-electrometallurgy',
    type: 'multiple_choice',
    prompt: 'What is solvent extraction used for in hydrometallurgy?',
    options: [
      'Selectively moving metal ions into an organic liquid to purify and concentrate them, then stripping them into a clean electrolyte',
      'Dissolving the ore',
      'Melting the metal',
      'Grinding the ore',
    ],
    answer: 0,
    explanation:
      'Leach solutions are dilute and impure. An organic extractant picks up mainly the target metal, and a strong acid then strips it into a concentrated, clean solution ready for electrowinning.',
  },
  {
    id: 'hy-004',
    nodeId: 'hydro-electrometallurgy',
    type: 'multiple_choice',
    prompt: 'What is electrowinning?',
    options: [
      'Depositing metal from a solution onto a cathode by passing current, using an inert anode',
      'Dissolving an impure anode and plating it onto a cathode',
      'Melting metal with electricity',
      'Removing oxygen with carbon',
    ],
    answer: 0,
    explanation:
      'The metal comes from the solution and the anode does not dissolve (oxygen evolves there instead). Electrorefining, in contrast, dissolves an impure metal anode.',
  },
  {
    id: 'hy-005',
    nodeId: 'hydro-electrometallurgy',
    type: 'multiple_choice',
    prompt: 'How does electrorefining of copper work?',
    options: [
      'Impure copper anodes dissolve and pure copper plates onto cathodes; precious metals fall to the bottom as anode slime',
      'Copper ore is dissolved directly onto the cathode',
      'Copper is boiled and condensed',
      'Copper is reduced with carbon',
    ],
    answer: 0,
    explanation:
      'More noble impurities such as gold and silver do not dissolve and collect as slime, a valuable by-product. Less noble ones stay in solution. The cathodes reach about 99.99% Cu.',
  },
  {
    id: 'hy-006',
    nodeId: 'hydro-electrometallurgy',
    type: 'trend',
    prompt: 'Copper is electrowon for a fixed time.',
    formula: 'faraday',
    change: 'the current I increases',
    target: 'the mass of copper deposited',
    answer: 'increases',
    explanation:
      'The deposited mass is proportional to the charge passed (I × t). Doubling the current doubles the deposit, assuming the current efficiency stays the same.',
  },
  {
    id: 'hy-007',
    nodeId: 'hydro-electrometallurgy',
    type: 'trend',
    prompt: 'Compare two metals with the same molar mass, deposited with the same current and time.',
    formula: 'faraday',
    change: 'each metal ion needs more electrons to be reduced (higher n)',
    target: 'the mass deposited',
    answer: 'decreases',
    explanation:
      'More electrons per atom means fewer atoms are deposited for the same charge, since n is in the denominator.',
  },
  {
    id: 'hy-008',
    nodeId: 'hydro-electrometallurgy',
    type: 'multiple_choice',
    prompt: 'Why is aluminum made by electrolysis of alumina dissolved in molten cryolite (Hall–Héroult process) rather than by carbon reduction?',
    options: [
      'Al₂O₃ is so stable that carbon would need impractically high temperatures; cryolite lets alumina be electrolyzed at about 960 °C',
      'Aluminum is too noble to be reduced',
      'Carbon reacts with aluminum to form gold',
      'Alumina is a liquid at room temperature',
    ],
    answer: 0,
    explanation:
      'The Al₂O₃ line sits near the bottom of the Ellingham diagram. Pure alumina melts above 2000 °C, but dissolved in molten cryolite it can be electrolyzed at around 960 °C.',
  },
  {
    id: 'hy-009',
    nodeId: 'hydro-electrometallurgy',
    type: 'true_false',
    prompt: 'A current efficiency below 100% means some of the current drives side reactions, such as hydrogen evolution, instead of depositing metal.',
    answer: true,
    explanation:
      'Faraday’s law gives the theoretical deposit. Side reactions waste electrical energy, so plants work hard to keep current efficiency above about 90%.',
  },
  {
    id: 'hy-010',
    nodeId: 'hydro-electrometallurgy',
    type: 'matching',
    prompt: 'Match each process to its typical use.',
    pairs: [
      { left: 'Heap leaching', right: 'Low-grade copper oxide ores' },
      { left: 'Cyanidation', right: 'Gold extraction' },
      { left: 'Hall–Héroult cell', right: 'Aluminum production' },
      { left: 'Electrorefining', right: 'High-purity copper cathodes' },
    ],
    explanation:
      'Hydrometallurgy suits low-grade and complex ores, while electrometallurgy produces reactive metals (Al) and high-purity products (Cu).',
  },
]

const ironSteel: Question[] = [
  {
    id: 'is-001',
    nodeId: 'iron-steelmaking',
    type: 'multiple_choice',
    prompt: 'In a blast furnace, what mainly reduces the iron oxide?',
    options: ['Carbon monoxide gas made from coke', 'Hydrogen from water', 'Limestone', 'Oxygen'],
    answer: 0,
    explanation:
      'Hot air burns coke at the bottom to form CO, which rises and reduces the descending iron oxide (Fe₂O₃ → Fe₃O₄ → FeO → Fe). Coke also provides heat and supports the burden.',
  },
  {
    id: 'is-002',
    nodeId: 'iron-steelmaking',
    type: 'multiple_choice',
    prompt: 'What is the role of limestone charged into a blast furnace?',
    options: [
      'It is a flux that forms slag with silica and alumina gangue',
      'It is the main fuel',
      'It reduces the iron oxide',
      'It adds carbon to the iron',
    ],
    answer: 0,
    explanation:
      'Limestone breaks down to CaO, which combines with SiO₂ and Al₂O₃ to form a fluid slag. The slag also picks up sulfur from the iron.',
  },
  {
    id: 'is-003',
    nodeId: 'iron-steelmaking',
    type: 'multiple_choice',
    prompt: 'About how much carbon does pig iron from the blast furnace contain?',
    options: ['About 4 wt%', 'About 0.1 wt%', 'About 0.8 wt%', 'About 10 wt%'],
    answer: 0,
    explanation:
      'Iron absorbs carbon as it trickles through the hot coke. With about 4% C plus Si, Mn, S and P, pig iron is brittle and must be refined into steel.',
  },
  {
    id: 'is-004',
    nodeId: 'iron-steelmaking',
    type: 'multiple_choice',
    prompt: 'How does a BOF turn pig iron into steel?',
    options: [
      'Pure oxygen is blown in, oxidizing excess carbon, silicon, manganese and phosphorus',
      'Coke is added to raise the carbon',
      'The iron is electrolyzed',
      'Scrap is dissolved in acid',
    ],
    answer: 0,
    explanation:
      'The oxidation reactions release so much heat that no external fuel is needed, and some scrap is added to control the temperature. Oxides join the slag and CO leaves as gas.',
  },
  {
    id: 'is-005',
    nodeId: 'iron-steelmaking',
    type: 'multiple_choice',
    prompt: 'What is the main raw material for EAF steelmaking?',
    options: ['Steel scrap (often with DRI), melted by electric arcs', 'Iron ore and coke', 'Bauxite', 'Copper concentrate'],
    answer: 0,
    explanation:
      'Electric arc furnaces recycle scrap. DRI, made by reducing iron ore pellets with gas, is added to dilute impurities from the scrap.',
  },
  {
    id: 'is-006',
    nodeId: 'iron-steelmaking',
    type: 'true_false',
    prompt: 'Making steel from scrap in an EAF emits much less CO₂ per tonne than the blast furnace–BOF route.',
    answer: true,
    explanation:
      'Scrap is already iron, so no oxide has to be reduced with carbon. The EAF route typically emits a fraction of the CO₂, especially with low-carbon electricity.',
  },
  {
    id: 'is-007',
    nodeId: 'iron-steelmaking',
    type: 'multiple_choice',
    prompt: 'Why is steel deoxidized ("killed") with aluminum or silicon before casting?',
    options: [
      'To remove dissolved oxygen, which would otherwise form gas porosity (CO bubbles) and oxide inclusions during solidification',
      'To add oxygen for strength',
      'To raise the carbon content',
      'To make the steel magnetic',
    ],
    answer: 0,
    explanation:
      'Al and Si form stable oxides that float into the slag. A fully killed steel solidifies quietly without gas evolution.',
  },
  {
    id: 'is-008',
    nodeId: 'iron-steelmaking',
    type: 'multiple_choice',
    prompt: 'What does continuous casting do?',
    options: [
      'Solidifies liquid steel directly and continuously into slabs, blooms or billets',
      'Melts scrap',
      'Reduces iron ore',
      'Rolls steel into foil',
    ],
    answer: 0,
    explanation:
      'Steel flows into a water-cooled copper mold, and a solid shell is withdrawn continuously. It replaced ingot casting because it gives higher yield, better quality and lower energy use.',
  },
  {
    id: 'is-009',
    nodeId: 'iron-steelmaking',
    type: 'multiple_choice',
    prompt: 'Why are sulfur and phosphorus kept low in most steels?',
    options: [
      'Sulfur causes hot shortness (cracking during hot working) and phosphorus causes cold shortness (brittleness)',
      'They make steel too soft',
      'They raise the melting point too much',
      'They make steel non-magnetic',
    ],
    answer: 0,
    explanation:
      'Sulfur forms low-melting FeS at grain boundaries (controlled by adding Mn to form MnS). Phosphorus segregates and embrittles ferrite, especially at low temperature.',
  },
  {
    id: 'is-010',
    nodeId: 'iron-steelmaking',
    type: 'cause_effect',
    prompt: 'Select every correct statement.',
    scenario: 'A steelmaker needs a very clean steel with low hydrogen and few inclusions for heavy forgings.',
    options: [
      'Vacuum degassing removes dissolved hydrogen and nitrogen',
      'Hydrogen in steel can cause internal cracks (flakes) and embrittlement',
      'Adding wet scrap at the end will help',
      'Argon stirring in the ladle helps inclusions float out into the slag',
    ],
    answers: [0, 1, 3],
    explanation:
      'Secondary metallurgy in the ladle refines the steel after the furnace: vacuum removes gases, and gentle stirring lets oxide inclusions rise. Moisture is a source of hydrogen, so wet charge materials are avoided.',
  },
]

export const extractiveQuestions: Question[] = [...mineral, ...pyro, ...hydro, ...ironSteel]
