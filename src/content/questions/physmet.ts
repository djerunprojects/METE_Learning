import type { Question } from '../types'

// Disciplines · Physical Metallurgy.
// Sources: Callister & Rethwisch (ch. 7, 10, 11); Askeland (ch. 8, 11–14); Porter & Easterling (ch. 5);
// Polmear, Light Alloys; Krauss, Steels: Processing, Structure, and Performance.

const strengthening: Question[] = [
  {
    id: 'sm-001',
    nodeId: 'strengthening-mechanisms',
    type: 'multiple_choice',
    prompt: 'What do grain refinement, solid-solution strengthening, strain hardening and precipitation hardening have in common?',
    options: [
      'They all make dislocation motion harder',
      'They all increase the elastic modulus',
      'They all remove dislocations from the metal',
      'They all work only at high temperature',
    ],
    answer: 0,
    explanation:
      'Plastic deformation in metals happens by dislocation motion, so every strengthening method adds obstacles: grain boundaries, strained solute atoms, other dislocations or particles.',
  },
  {
    id: 'sm-002',
    nodeId: 'strengthening-mechanisms',
    type: 'trend',
    prompt: 'Zinc dissolves substitutionally in copper to form brass.',
    change: 'more zinc is dissolved in the copper',
    target: 'the yield strength',
    answer: 'increases',
    explanation:
      'Each solute atom distorts the surrounding lattice. These strain fields interact with dislocations and make them harder to move: solid-solution strengthening.',
  },
  {
    id: 'sm-003',
    nodeId: 'strengthening-mechanisms',
    type: 'trend',
    prompt: 'Compare two solutes added at the same concentration.',
    change: 'the size difference between the solute and host atoms is larger',
    target: 'the solid-solution strengthening effect',
    answer: 'increases',
    explanation:
      'A bigger size mismatch creates larger lattice strains around each solute atom, which interact more strongly with dislocations.',
  },
  {
    id: 'sm-004',
    nodeId: 'strengthening-mechanisms',
    type: 'multiple_choice',
    prompt: 'Why do solute atoms strengthen a metal?',
    options: [
      'Their lattice strain fields interact with the strain fields of dislocations, pinning them',
      'They make the metal amorphous',
      'They increase the number of grain boundaries',
      'They remove vacancies',
    ],
    answer: 0,
    explanation:
      'A larger solute atom prefers the stretched region below an edge dislocation, and a smaller one the compressed region above. Moving the dislocation away from these comfortable positions takes extra stress.',
  },
  {
    id: 'sm-005',
    nodeId: 'strengthening-mechanisms',
    type: 'multiple_choice',
    prompt: 'What happens when a cold-worked metal is annealed above its recrystallization temperature?',
    options: [
      'New strain-free grains form, so strength drops and ductility is restored',
      'It becomes harder and more brittle',
      'It melts and resolidifies',
      'Its dislocation density increases further',
    ],
    answer: 0,
    explanation:
      'The stored energy of the cold-worked structure drives nucleation of new, nearly dislocation-free grains. The effects of strain hardening are erased.',
  },
  {
    id: 'sm-006',
    nodeId: 'strengthening-mechanisms',
    type: 'trend',
    prompt: 'Recrystallization is driven by the energy stored in a cold-worked metal.',
    change: 'the amount of prior cold work increases',
    target: 'the recrystallization temperature',
    answer: 'decreases',
    explanation:
      'More cold work stores more energy, giving a stronger driving force for new grains, so recrystallization can happen at a lower temperature. Below a critical amount of cold work, it does not happen at all.',
  },
  {
    id: 'sm-007',
    nodeId: 'strengthening-mechanisms',
    type: 'true_false',
    prompt: 'The recrystallization temperature of a metal is typically about one-third to one-half of its absolute melting temperature.',
    answer: true,
    explanation:
      'It depends on purity and amount of cold work, but 0.3–0.5 T_m (in kelvin) is the usual range. Impurities and alloying usually raise it.',
  },
  {
    id: 'sm-008',
    nodeId: 'strengthening-mechanisms',
    type: 'matching',
    prompt: 'Match each strengthening mechanism to an example.',
    pairs: [
      { left: 'Grain refinement', right: 'Adding inoculants to a casting' },
      { left: 'Solid-solution strengthening', right: 'Alloying copper with zinc to make brass' },
      { left: 'Strain hardening', right: 'Cold drawing a wire' },
      { left: 'Precipitation hardening', right: 'Aging an Al–Cu alloy' },
    ],
    explanation:
      'Each adds a different obstacle to dislocations: boundaries, solute strain fields, other dislocations, or fine particles.',
  },
  {
    id: 'sm-009',
    nodeId: 'strengthening-mechanisms',
    type: 'cause_effect',
    prompt: 'Select every correct statement.',
    scenario: 'Lead (melting point 327 °C) is rolled at room temperature.',
    options: [
      'Room temperature is above lead’s recrystallization temperature, so this counts as hot working',
      'Lead barely strain hardens during the rolling',
      'The lead becomes very hard and brittle',
      'The lead must be annealed after every pass',
    ],
    answers: [0, 1],
    explanation:
      'For lead, room temperature (about 295 K) is roughly half of its melting temperature (600 K). It recrystallizes as it deforms, so it does not strain harden. "Hot" and "cold" working are defined relative to the recrystallization temperature, not to room temperature.',
  },
  {
    id: 'sm-010',
    nodeId: 'strengthening-mechanisms',
    type: 'multiple_choice',
    prompt: 'Which strengthening mechanism is undone by recrystallization annealing?',
    options: ['Strain hardening', 'Solid-solution strengthening', 'Using a stiffer base metal', 'Adding carbon to iron'],
    answer: 0,
    explanation:
      'Annealing removes the extra dislocations from cold work. Solute atoms stay dissolved, so solid-solution strengthening remains.',
  },
]

const heatTreatment: Question[] = [
  {
    id: 'hts-001',
    nodeId: 'heat-treatment-steels',
    type: 'matching',
    prompt: 'Match each steel heat treatment to its main result.',
    pairs: [
      { left: 'Full annealing (furnace cool)', right: 'Soft and ductile, coarse pearlite' },
      { left: 'Normalizing (air cool)', right: 'Refined grains, fine pearlite' },
      { left: 'Quenching (water or oil)', right: 'Very hard martensite' },
      { left: 'Tempering (reheat below 727 °C)', right: 'Tougher, less brittle martensite' },
    ],
    explanation:
      'Slower cooling gives softer, coarser products; fast cooling gives martensite. Quenching is almost always followed by tempering.',
  },
  {
    id: 'hts-002',
    nodeId: 'heat-treatment-steels',
    type: 'multiple_choice',
    prompt: 'Why is quenched martensite tempered?',
    options: [
      'As-quenched martensite is very hard but brittle; tempering precipitates fine carbides and relieves stresses, improving toughness',
      'To make it harder than as-quenched',
      'To turn it back into austenite',
      'To add more carbon',
    ],
    answer: 0,
    explanation:
      'During tempering, trapped carbon leaves the supersaturated martensite as fine carbides, and internal stresses relax. The result is tempered martensite with a useful balance of strength and toughness.',
  },
  {
    id: 'hts-003',
    nodeId: 'heat-treatment-steels',
    type: 'trend',
    prompt: 'Quenched steel samples are tempered for the same time at different temperatures.',
    change: 'the tempering temperature increases',
    target: 'the hardness',
    answer: 'decreases',
    explanation:
      'At higher tempering temperatures, carbides coarsen and the matrix recovers more, so hardness and strength fall.',
  },
  {
    id: 'hts-004',
    nodeId: 'heat-treatment-steels',
    type: 'trend',
    prompt: 'The same quenched steel is tempered at higher and higher temperatures.',
    change: 'the tempering temperature increases',
    target: 'the toughness and ductility',
    answer: 'increases',
    explanation:
      'Tempering trades hardness for toughness. Designers pick the tempering temperature to hit the required balance. (Some steels show temper embrittlement in certain ranges, but the overall trend holds.)',
  },
  {
    id: 'hts-005',
    nodeId: 'heat-treatment-steels',
    type: 'multiple_choice',
    prompt: 'What does hardenability describe?',
    options: [
      'How easily, and to what depth, a steel forms martensite on quenching',
      'The maximum hardness a steel can reach',
      'The hardness after annealing',
      'The resistance to scratching',
    ],
    answer: 0,
    explanation:
      'Hardenability is about depth of hardening, not peak hardness. A high-hardenability steel forms martensite even with slower cooling, so thick sections harden through.',
  },
  {
    id: 'hts-006',
    nodeId: 'heat-treatment-steels',
    type: 'multiple_choice',
    prompt: 'Which test is used to measure the hardenability of a steel?',
    options: ['Jominy end-quench test', 'Charpy impact test', 'Tensile test', 'Creep test'],
    answer: 0,
    explanation:
      'A bar is austenitized and water-sprayed on one end, so cooling rate falls along its length. Hardness measured along the bar shows how far martensite forms.',
  },
  {
    id: 'hts-007',
    nodeId: 'heat-treatment-steels',
    type: 'trend',
    prompt: 'Compare fully martensitic structures in plain carbon steels.',
    change: 'the carbon content increases (up to about 0.6–0.8 wt%)',
    target: 'the hardness of the martensite',
    answer: 'increases',
    explanation:
      'More trapped carbon means more lattice distortion and more obstacles to dislocations. Martensite hardness rises steeply with carbon up to around 0.6 wt% C.',
  },
  {
    id: 'hts-008',
    nodeId: 'heat-treatment-steels',
    type: 'trend',
    prompt: 'The same steel part is quenched in two different media.',
    change: 'the part is quenched in water instead of oil (a more severe quench)',
    target: 'the risk of distortion and quench cracking',
    answer: 'increases',
    explanation:
      'Faster cooling creates bigger temperature differences between surface and core, and martensite expands as it forms. Larger internal stresses can warp or crack the part, so the mildest quench that still hardens is preferred.',
  },
  {
    id: 'hts-009',
    nodeId: 'heat-treatment-steels',
    type: 'true_false',
    prompt:
      'The maximum hardness of martensite depends mainly on carbon content, while alloying elements such as Cr, Mo and Ni mainly increase hardenability.',
    answer: true,
    explanation:
      'Alloying slows the diffusional transformations (shifting the C-curves right), so martensite forms at slower cooling rates. It does not make the martensite itself much harder.',
  },
  {
    id: 'hts-010',
    nodeId: 'heat-treatment-steels',
    type: 'cause_effect',
    prompt: 'Select every correct statement.',
    scenario: 'A thick bar of plain carbon steel is water quenched. The surface is hard, but the center is much softer.',
    options: [
      'The center cooled more slowly and missed the martensite transformation',
      'The center formed pearlite or bainite instead',
      'An alloy steel with higher hardenability would harden deeper',
      'The center must contain more carbon than the surface',
    ],
    answers: [0, 1, 2],
    explanation:
      'Heat must be conducted out through the surface, so the core cools more slowly. If it crosses the pearlite or bainite curves, it ends up softer. Higher hardenability fixes this; the carbon content is the same throughout.',
  },
]

const nonferrous: Question[] = [
  {
    id: 'nfa-001',
    nodeId: 'nonferrous-alloys',
    type: 'matching',
    prompt: 'Match each alloy family to its key strength.',
    pairs: [
      { left: 'Aluminum alloys', right: 'Low density and good corrosion resistance' },
      { left: 'Titanium alloys', right: 'High strength-to-weight ratio and biocompatibility' },
      { left: 'Copper alloys', right: 'High electrical and thermal conductivity' },
      { left: 'Nickel-based superalloys', right: 'Strength and creep resistance at very high temperatures' },
    ],
    explanation:
      'Aluminum (2.7 g/cm³) dominates light structures, titanium (4.5 g/cm³) suits high loads and medical implants, copper carries electricity and heat, and nickel superalloys run in the hottest parts of jet engines.',
  },
  {
    id: 'nfa-002',
    nodeId: 'nonferrous-alloys',
    type: 'multiple_choice',
    prompt: 'Brass is copper alloyed mainly with:',
    options: ['Zinc', 'Tin', 'Nickel', 'Aluminum'],
    answer: 0,
    explanation:
      'Brass is Cu–Zn. Traditional bronze is Cu–Sn, and cupronickel is Cu–Ni (used in coins and marine piping).',
  },
  {
    id: 'nfa-003',
    nodeId: 'nonferrous-alloys',
    type: 'multiple_choice',
    prompt: 'Aluminum is a reactive metal. Why does it still resist corrosion in air?',
    options: [
      'A thin, adherent aluminum oxide film forms and protects the metal underneath',
      'Aluminum is a noble metal',
      'Aluminum does not react with oxygen',
      'Aluminum is always painted',
    ],
    answer: 0,
    explanation:
      'The Al₂O₃ film is only a few nanometers thick but dense and self-healing. Anodizing makes it thicker. Chlorides (e.g. seawater) can break it locally and cause pitting.',
  },
  {
    id: 'nfa-004',
    nodeId: 'nonferrous-alloys',
    type: 'true_false',
    prompt: 'Pure aluminum can be strengthened by precipitation hardening.',
    answer: false,
    explanation:
      'Precipitation hardening needs alloying elements that dissolve at high temperature and precipitate when aged, such as Cu, Mg–Si or Zn–Mg. Pure aluminum can only be strengthened by cold work or grain refinement.',
  },
  {
    id: 'nfa-005',
    nodeId: 'nonferrous-alloys',
    type: 'multiple_choice',
    prompt: 'Which wrought aluminum alloy series are heat-treatable (precipitation hardenable)?',
    options: ['2xxx, 6xxx and 7xxx', '1xxx and 3xxx', '1xxx only', 'All series'],
    answer: 0,
    explanation:
      '2xxx (Al–Cu), 6xxx (Al–Mg–Si) and 7xxx (Al–Zn–Mg) are age hardened. 1xxx (pure Al), 3xxx (Al–Mn) and 5xxx (Al–Mg) are strengthened by cold work and solid solution.',
  },
  {
    id: 'nfa-006',
    nodeId: 'nonferrous-alloys',
    type: 'multiple_choice',
    prompt: 'Ti-6Al-4V is an α + β titanium alloy. Which phase does vanadium stabilize?',
    options: ['β (BCC)', 'α (HCP)', 'Neither', 'Liquid'],
    answer: 0,
    explanation:
      'Vanadium (like Mo) stabilizes the BCC β phase, while aluminum (like O) stabilizes the HCP α phase. Balancing the two lets the alloy be heat treated for strength.',
  },
  {
    id: 'nfa-007',
    nodeId: 'nonferrous-alloys',
    type: 'trend',
    prompt: 'Consider single-phase α brasses.',
    change: 'the zinc content increases from 0 to about 30 wt%',
    target: 'the tensile strength',
    answer: 'increases',
    explanation:
      'Zinc strengthens copper by solid solution. Unusually, ductility also improves up to about 30 wt% Zn, which is why 70/30 "cartridge brass" is so good for deep drawing.',
  },
  {
    id: 'nfa-008',
    nodeId: 'nonferrous-alloys',
    type: 'multiple_choice',
    prompt: 'Why are magnesium alloys attractive for lightweight parts?',
    options: [
      'Magnesium is the lightest structural metal, about 1.74 g/cm³',
      'Magnesium has the highest elastic modulus of any metal',
      'Magnesium is very easy to cold form at room temperature',
      'Magnesium is immune to corrosion',
    ],
    answer: 0,
    explanation:
      'Magnesium is about two-thirds the density of aluminum. Its HCP structure limits room-temperature formability, and it corrodes easily, so it is often die cast and coated.',
  },
  {
    id: 'nfa-009',
    nodeId: 'nonferrous-alloys',
    type: 'true_false',
    prompt: 'Even small amounts of dissolved alloying elements lower the electrical conductivity of copper.',
    answer: true,
    explanation:
      'Solute atoms scatter conduction electrons. That is why electrical wiring uses high-purity copper, and why alloys like brass conduct far worse than pure copper.',
  },
  {
    id: 'nfa-010',
    nodeId: 'nonferrous-alloys',
    type: 'cause_effect',
    prompt: 'Select every reason that supports this choice.',
    scenario: 'An engineer chooses a titanium alloy instead of an aluminum alloy for a part near a jet engine that runs at 400 °C.',
    options: [
      'Titanium alloys keep their strength to higher temperatures than aluminum alloys',
      'Titanium is less dense than aluminum',
      'Titanium has excellent corrosion resistance thanks to its oxide film',
      'Titanium is cheaper than aluminum',
    ],
    answers: [0, 2],
    explanation:
      'Aluminum alloys lose much of their strength above about 150–200 °C, while titanium alloys are used to around 500 °C. Titanium is denser (4.5 vs 2.7 g/cm³) and far more expensive.',
  },
]

const precipitation: Question[] = [
  {
    id: 'prh-001',
    nodeId: 'precipitation-hardening',
    type: 'multiple_choice',
    prompt: 'What is the correct order of steps in precipitation hardening?',
    options: [
      'Solution treat → quench → age',
      'Age → quench → solution treat',
      'Quench → solution treat → age',
      'Cold work → anneal → quench',
    ],
    answer: 0,
    explanation:
      'First dissolve the alloying elements at high temperature, then quench to trap them in a supersaturated solid solution, then age to form fine precipitates.',
  },
  {
    id: 'prh-002',
    nodeId: 'precipitation-hardening',
    type: 'multiple_choice',
    prompt: 'Why is the alloy quenched after solution treatment?',
    options: [
      'To keep the solute dissolved as a supersaturated solid solution, without coarse precipitates forming during cooling',
      'To form martensite',
      'To make large precipitates',
      'To melt the alloy',
    ],
    answer: 0,
    explanation:
      'Slow cooling would let the solute come out as a few coarse particles at grain boundaries, which give little strength. Quenching keeps it dissolved for controlled aging.',
  },
  {
    id: 'prh-003',
    nodeId: 'precipitation-hardening',
    type: 'pick_region',
    prompt: 'Where on the aging curve is the alloy at its maximum hardness?',
    diagram: 'aging_curve',
    answer: 'peak',
    explanation:
      'At peak aging, precipitates are very fine, closely spaced and often coherent with the matrix, giving the maximum resistance to dislocation motion. Tempers such as T6 aim for this condition.',
  },
  {
    id: 'prh-004',
    nodeId: 'precipitation-hardening',
    type: 'pick_region',
    prompt: 'Where on the aging curve has the alloy been overaged?',
    diagram: 'aging_curve',
    answer: 'overaged',
    explanation:
      'With longer aging, precipitates grow and become fewer and farther apart, and hardness falls. Overaging is sometimes chosen on purpose (T7 tempers) for better stress-corrosion resistance.',
  },
  {
    id: 'prh-005',
    nodeId: 'precipitation-hardening',
    type: 'pick_region',
    prompt: 'Where are the precipitates still too small or too few for maximum strength?',
    diagram: 'aging_curve',
    answer: 'underaged',
    explanation:
      'Early in aging, clusters and early precipitates are forming, but there are not yet enough of them at the optimum size, so hardness is still rising.',
  },
  {
    id: 'prh-006',
    nodeId: 'precipitation-hardening',
    type: 'trend',
    prompt: 'The same alloy is aged at different temperatures.',
    change: 'the aging temperature increases',
    target: 'the time needed to reach peak hardness',
    answer: 'decreases',
    explanation:
      'Precipitation is diffusion controlled, so it speeds up at higher temperature and the whole aging curve shifts to shorter times.',
  },
  {
    id: 'prh-007',
    nodeId: 'precipitation-hardening',
    type: 'trend',
    prompt: 'The same alloy is aged at different temperatures, each to its own peak.',
    change: 'the aging temperature increases',
    target: 'the maximum (peak) hardness reached',
    answer: 'decreases',
    explanation:
      'At higher temperature, there is less supersaturation driving nucleation, so fewer, coarser precipitates form. The peak comes sooner but is lower.',
  },
  {
    id: 'prh-008',
    nodeId: 'precipitation-hardening',
    type: 'multiple_choice',
    prompt: 'Why does overaging soften the alloy?',
    options: [
      'Precipitates coarsen and spread farther apart, so dislocations can bow between them more easily',
      'The precipitates dissolve completely',
      'The alloy recrystallizes into martensite',
      'Vacancies collect and soften the alloy',
    ],
    answer: 0,
    explanation:
      'Large precipitates grow at the expense of small ones (coarsening) and often lose coherency with the matrix. Fewer, widely spaced obstacles let dislocations loop around them at lower stress.',
  },
  {
    id: 'prh-009',
    nodeId: 'precipitation-hardening',
    type: 'true_false',
    prompt: 'For precipitation hardening to work, the solubility of the alloying element must decrease significantly as the temperature drops.',
    answer: true,
    explanation:
      'A solvus line that slopes strongly lets the alloy dissolve a lot of solute when hot but become supersaturated when cold. Al–Cu (2xxx alloys) is the classic example.',
  },
  {
    id: 'prh-010',
    nodeId: 'precipitation-hardening',
    type: 'multiple_choice',
    prompt: 'Some 2xxx aluminum rivets are stored in a freezer until they are used. Why?',
    options: [
      'They age harden at room temperature (natural aging), so cold storage keeps them soft enough to install',
      'Cold makes aluminum stronger permanently',
      'Freezing prevents corrosion',
      'Freezing removes the oxide layer',
    ],
    answer: 0,
    explanation:
      'Some alloys age at room temperature after quenching. Refrigeration slows diffusion, so the rivets stay soft and can be driven. They then harden in service.',
  },
]

export const physmetQuestions: Question[] = [...strengthening, ...heatTreatment, ...nonferrous, ...precipitation]
