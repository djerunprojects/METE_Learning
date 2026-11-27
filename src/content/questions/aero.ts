import type { Question } from '../types'

// Applications · Aerospace Materials.
// Sources: Reed, The Superalloys: Fundamentals and Applications; Polmear, Light Alloys; Padture, Gell & Jordan (2002),
// Thermal barrier coatings for gas-turbine engine applications; Mouritz, Introduction to Aerospace Materials.

const lightweight: Question[] = [
  {
    id: 'lw-001',
    nodeId: 'lightweight-alloys',
    type: 'trend',
    prompt: 'Lithium is added to aluminum to make Al–Li alloys.',
    change: 'the lithium content increases (within the alloy range)',
    target: 'the density',
    answer: 'decreases',
    explanation:
      'Lithium is the lightest metal. Each 1 wt% Li lowers density by about 3% and raises the elastic modulus by about 6%, both of which save weight.',
  },
  {
    id: 'lw-002',
    nodeId: 'lightweight-alloys',
    type: 'trend',
    prompt: 'Lithium is added to aluminum to make Al–Li alloys.',
    change: 'the lithium content increases (within the alloy range)',
    target: 'the elastic modulus',
    answer: 'increases',
    explanation:
      'Lithium is one of very few alloying elements that make aluminum both lighter and stiffer, which is why Al–Li alloys are used in fuselages and rocket fuel tanks.',
  },
  {
    id: 'lw-003',
    nodeId: 'lightweight-alloys',
    type: 'matching',
    prompt: 'Match each aircraft alloy to where it is typically used.',
    pairs: [
      { left: '7075 / 7xxx aluminum', right: 'Upper wing skins (high compressive strength)' },
      { left: '2024 / 2xxx aluminum', right: 'Lower wing and fuselage skins (damage tolerance, fatigue)' },
      { left: 'Ti-6Al-4V', right: 'Engine fan blades and highly loaded frames' },
      { left: 'High-strength steel', right: 'Landing gear' },
    ],
    explanation:
      'The upper wing is mostly compressed in flight, the lower wing is in tension and fatigue-critical, engines need warm strength, and landing gear needs the highest strength in a compact space.',
  },
  {
    id: 'lw-004',
    nodeId: 'lightweight-alloys',
    type: 'multiple_choice',
    prompt: 'Why are 7xxx aluminum alloys often used in an overaged (T7) temper in aircraft?',
    options: [
      'Overaging gives up a little strength but greatly improves resistance to stress corrosion cracking',
      'Overaging makes them stronger than peak aging',
      'T7 tempers are cheaper to weld',
      'Overaging makes them lighter',
    ],
    answer: 0,
    explanation:
      'Peak-aged 7075-T6 can suffer SCC in thick sections. T73 and similar tempers trade about 10–15% strength for much better corrosion behavior.',
  },
  {
    id: 'lw-005',
    nodeId: 'lightweight-alloys',
    type: 'multiple_choice',
    prompt: 'Why are titanium alloys often used next to carbon fiber composites in aircraft structures?',
    options: [
      'Titanium does not form a damaging galvanic couple with carbon, and its thermal expansion is closer to CFRP than aluminum’s',
      'Titanium is lighter than aluminum',
      'Titanium is cheaper than aluminum',
      'Titanium conducts electricity better than carbon',
    ],
    answer: 0,
    explanation:
      'Aluminum corrodes in contact with carbon fibers and expands much more with temperature. Composite-intensive aircraft therefore use more titanium.',
  },
  {
    id: 'lw-006',
    nodeId: 'lightweight-alloys',
    type: 'true_false',
    prompt: 'Titanium alloys are used in the cooler front stages of jet engine compressors, but nickel superalloys take over in the hotter rear stages.',
    answer: true,
    explanation:
      'Titanium alloys lose strength and oxidize above roughly 500–600 °C. In the hotter parts, nickel superalloys are needed despite their higher density.',
  },
  {
    id: 'lw-007',
    nodeId: 'lightweight-alloys',
    type: 'multiple_choice',
    prompt: 'What does "specific strength" mean?',
    options: ['Strength divided by density', 'Strength times density', 'Strength at a specific temperature', 'Strength of one specific alloy'],
    answer: 0,
    explanation:
      'For anything that flies, the strength per unit mass matters more than strength alone. Titanium and Al–Li alloys and composites score well.',
  },
  {
    id: 'lw-008',
    nodeId: 'lightweight-alloys',
    type: 'trend',
    prompt: 'An aircraft lower wing skin is designed against fatigue.',
    change: 'the alloy’s fatigue crack growth resistance and fracture toughness are higher',
    target: 'the safe inspection interval for the structure',
    answer: 'increases',
    explanation:
      'Under damage-tolerant design, cracks are assumed to exist. Slower growth and a larger critical crack size give more time between inspections, which is why 2xxx alloys are used there.',
  },
  {
    id: 'lw-009',
    nodeId: 'lightweight-alloys',
    type: 'multiple_choice',
    prompt: 'Why is magnesium used only sparingly in modern airliners?',
    options: [
      'Concerns about corrosion and flammability have limited it, despite its low density',
      'It is too dense',
      'It is too stiff',
      'It cannot be cast',
    ],
    answer: 0,
    explanation:
      'Magnesium is about 35% lighter than aluminum, but it corrodes easily and burns once ignited. Newer alloys and rule changes are reopening some interior uses.',
  },
  {
    id: 'lw-010',
    nodeId: 'lightweight-alloys',
    type: 'cause_effect',
    prompt: 'Select every correct statement.',
    scenario: 'An airframe designer replaces a 2024 aluminum fuselage panel with an Al–Li alloy panel of the same shape.',
    options: [
      'The panel becomes lighter',
      'The panel becomes stiffer',
      'Fatigue crack growth resistance can be better in modern Al–Li alloys',
      'Al–Li alloys are cheaper than conventional aluminum alloys',
    ],
    answers: [0, 1, 2],
    explanation:
      'Modern (third-generation) Al–Li alloys combine lower density and higher stiffness with good damage tolerance. They cost more because lithium is expensive and reactive to process.',
  },
]

const superalloys: Question[] = [
  {
    id: 'sa-001',
    nodeId: 'superalloys',
    type: 'multiple_choice',
    prompt: 'What are the two main phases in a nickel-based superalloy?',
    options: [
      'An FCC γ matrix and coherent γ′ (Ni₃(Al,Ti)) precipitates',
      'Ferrite and cementite',
      'Austenite and martensite',
      'α and β titanium',
    ],
    answer: 0,
    explanation:
      'The γ′ precipitates are ordered and coherent with the matrix, and can make up 60–70% of the volume in turbine blade alloys. They are extremely effective obstacles to dislocations.',
  },
  {
    id: 'sa-002',
    nodeId: 'superalloys',
    type: 'multiple_choice',
    prompt: 'Why is nickel a good base for alloys that work close to their melting point?',
    options: [
      'It stays FCC up to its melting point, with no phase changes, and tolerates lots of alloying',
      'It is the lightest metal',
      'It has no oxide film',
      'It is BCC at high temperature',
    ],
    answer: 0,
    explanation:
      'A stable, ductile FCC matrix, slow diffusion and the ability to form γ′ and protective oxides make nickel alloys usable at a high fraction of their melting temperature.',
  },
  {
    id: 'sa-003',
    nodeId: 'superalloys',
    type: 'true_false',
    prompt: 'The yield strength of γ′ actually increases with temperature over a range, unlike most metals.',
    answer: true,
    explanation:
      'This "anomalous yield" effect comes from dislocations in the ordered γ′ becoming locked by cross-slip. It helps superalloys keep their strength up to about 800 °C.',
  },
  {
    id: 'sa-004',
    nodeId: 'superalloys',
    type: 'multiple_choice',
    prompt: 'How did turbine blade microstructures evolve to improve creep life?',
    options: [
      'Equiaxed grains → directionally solidified columnar grains → single crystals',
      'Single crystals → equiaxed grains → powder',
      'Cast iron → steel → aluminum',
      'They have not changed',
    ],
    answer: 0,
    explanation:
      'First, grain boundaries across the stress direction were removed (columnar grains), then all of them (single crystals). This allowed higher temperatures and removal of grain-boundary elements that lower the melting point.',
  },
  {
    id: 'sa-005',
    nodeId: 'superalloys',
    type: 'multiple_choice',
    prompt: 'Why are refractory elements such as rhenium, tungsten and molybdenum added to modern single-crystal superalloys?',
    options: [
      'They strengthen the γ matrix and slow diffusion, improving creep resistance',
      'They lower the cost',
      'They reduce the density',
      'They make the alloy magnetic',
    ],
    answer: 0,
    explanation:
      'These heavy, slow-diffusing atoms slow the coarsening of γ′ and the climb of dislocations. Too much, however, forms brittle topologically close-packed phases.',
  },
  {
    id: 'sa-006',
    nodeId: 'superalloys',
    type: 'trend',
    prompt: 'Creep rupture data for a superalloy are compared using the Larson–Miller parameter.',
    formula: 'larson-miller',
    change: 'the blade runs at a higher temperature T at the same stress (same Larson–Miller parameter)',
    target: 'the time to rupture t_r',
    answer: 'decreases',
    explanation:
      'At a given stress, the parameter is fixed. A larger T must be balanced by a smaller log t_r. Roughly, every 10–15 °C increase can halve the rupture life.',
  },
  {
    id: 'sa-007',
    nodeId: 'superalloys',
    type: 'multiple_choice',
    prompt: 'How can turbine blades operate in gas hotter than the melting point of the alloy?',
    options: [
      'Internal cooling passages, film cooling holes and thermal barrier coatings keep the metal cooler than the gas',
      'The alloys have no melting point',
      'The gas cools down before it reaches the blades',
      'The blades are replaced every flight',
    ],
    answer: 0,
    explanation:
      'Air from the compressor flows through the blade and out of small holes, forming a cool film. A ceramic coating adds a further temperature drop.',
  },
  {
    id: 'sa-008',
    nodeId: 'superalloys',
    type: 'trend',
    prompt: 'A turbine blade is held at high temperature for many hours.',
    change: 'the service time at temperature increases',
    target: 'the size of the γ′ precipitates',
    answer: 'increases',
    explanation:
      'γ′ particles coarsen over time and can join into plates (rafting) under stress. Coarser precipitates are less effective obstacles, which limits blade life.',
  },
  {
    id: 'sa-009',
    nodeId: 'superalloys',
    type: 'multiple_choice',
    prompt: 'Why are turbine discs (unlike blades) usually made from fine-grained polycrystalline superalloys?',
    options: [
      'Discs run cooler and need high strength and fatigue resistance, which fine grains provide',
      'Discs need creep resistance at the very highest temperatures',
      'Single crystals are too light',
      'Fine grains melt at a higher temperature',
    ],
    answer: 0,
    explanation:
      'Discs see lower temperatures but huge cyclic stresses from rotation. Fine grains (often from powder metallurgy) give high yield and fatigue strength.',
  },
  {
    id: 'sa-010',
    nodeId: 'superalloys',
    type: 'cause_effect',
    prompt: 'Select every correct statement.',
    scenario: 'A single-crystal turbine blade alloy is being designed.',
    options: [
      'Without grain boundaries, there is no grain boundary sliding during creep',
      'Elements added only to strengthen grain boundaries (such as B and C) can be reduced, raising the melting point',
      'The blade is grown with its low-modulus direction along the blade axis, improving thermal fatigue',
      'Single crystals have no dislocations, so they never creep',
    ],
    answers: [0, 1, 2],
    explanation:
      'Single crystals still creep by dislocation motion, but much more slowly. Removing grain-boundary elements allows a higher solution heat treatment and higher service temperatures. The <001> direction along the axis gives a low modulus, reducing thermal stresses.',
  },
]

const tbc: Question[] = [
  {
    id: 'tbc-001',
    nodeId: 'thermal-barrier-coatings',
    type: 'multiple_choice',
    prompt: 'What are the layers of a typical TBC system on a turbine blade, from the outside in?',
    options: [
      'Ceramic topcoat (YSZ) → thin thermally grown alumina (TGO) → metallic bond coat → superalloy',
      'Superalloy → ceramic → paint',
      'Polymer → steel → copper',
      'Only a single layer of aluminum',
    ],
    answer: 0,
    explanation:
      'The ceramic insulates, the bond coat bonds and protects against oxidation, and the TGO that grows between them is the actual oxidation barrier.',
  },
  {
    id: 'tbc-002',
    nodeId: 'thermal-barrier-coatings',
    type: 'multiple_choice',
    prompt: 'Why is YSZ the standard TBC topcoat?',
    options: [
      'Very low thermal conductivity, relatively high thermal expansion for a ceramic, and stability at high temperature',
      'It is a metal',
      'It has the highest thermal conductivity of any ceramic',
      'It is transparent to heat',
    ],
    answer: 0,
    explanation:
      'YSZ conducts heat at only about 1–2 W/(m·K) and expands enough to reduce mismatch stresses with the metal. Its yttria content (about 7–8 wt%) gives a tough, metastable tetragonal phase.',
  },
  {
    id: 'tbc-003',
    nodeId: 'thermal-barrier-coatings',
    type: 'trend',
    prompt: 'Heat flows through the ceramic topcoat.',
    formula: 'fourier',
    change: 'the thermal conductivity k of the topcoat decreases',
    target: 'the temperature of the metal underneath (same gas temperature and cooling)',
    answer: 'decreases',
    explanation:
      'A lower k means a larger temperature drop across the coating. A coating a few hundred micrometers thick can lower the metal temperature by 100 °C or more.',
  },
  {
    id: 'tbc-004',
    nodeId: 'thermal-barrier-coatings',
    type: 'multiple_choice',
    prompt: 'What is the main job of the metallic bond coat?',
    options: [
      'To form a slow-growing, protective alumina scale and help the ceramic adhere',
      'To insulate against heat',
      'To carry the mechanical load',
      'To color the blade',
    ],
    answer: 0,
    explanation:
      'Oxygen passes easily through YSZ, so the bond coat (an MCrAlY or Pt-aluminide alloy) provides aluminum to grow a dense Al₂O₃ layer that protects the superalloy.',
  },
  {
    id: 'tbc-005',
    nodeId: 'thermal-barrier-coatings',
    type: 'trend',
    prompt: 'A coated blade runs for thousands of hours.',
    change: 'the TGO layer grows thicker',
    target: 'the risk of the ceramic coating spalling off',
    answer: 'increases',
    explanation:
      'The growing oxide and its expansion mismatch build up stress at the interface. Eventually cracks link up and the topcoat flakes off, a common end-of-life mechanism.',
  },
  {
    id: 'tbc-006',
    nodeId: 'thermal-barrier-coatings',
    type: 'multiple_choice',
    prompt: 'Why do electron-beam vapor-deposited TBCs have a columnar structure?',
    options: [
      'Separated columns can open and close as the metal expands, making the coating strain tolerant',
      'Columns make the coating conduct more heat',
      'Columns are needed to make it transparent',
      'Columns prevent any oxidation',
    ],
    answer: 0,
    explanation:
      'The metal underneath expands more than the ceramic. Gaps between columns accommodate this, improving life under thermal cycling. Plasma-sprayed coatings use splat boundaries and pores for a similar effect and lower conductivity.',
  },
  {
    id: 'tbc-007',
    nodeId: 'thermal-barrier-coatings',
    type: 'true_false',
    prompt: 'Molten sand and volcanic ash (CMAS) can infiltrate TBCs and cause them to fail.',
    answer: true,
    explanation:
      'Ingested particles melt on hot coatings, seep into the pores and columns and then solidify, stiffening the coating and dissolving the YSZ. Engines operating in dusty regions are especially affected.',
  },
  {
    id: 'tbc-008',
    nodeId: 'thermal-barrier-coatings',
    type: 'trend',
    prompt: 'A coating is engineered with more fine pores and microcracks, without losing adhesion.',
    change: 'the porosity of the ceramic topcoat increases',
    target: 'its thermal conductivity',
    answer: 'decreases',
    explanation:
      'Pores and boundaries scatter phonons and add low-conductivity gaps. Plasma-sprayed coatings often have about 10–20% porosity for this reason.',
  },
  {
    id: 'tbc-009',
    nodeId: 'thermal-barrier-coatings',
    type: 'multiple_choice',
    prompt: 'What is the purpose of EBCs on SiC/SiC ceramic matrix composites?',
    options: [
      'To protect the SiC from water vapor in combustion gas, which would otherwise volatilize its protective silica',
      'To make the CMC electrically conductive',
      'To increase the weight',
      'To provide lubrication',
    ],
    answer: 0,
    explanation:
      'In hot, wet combustion gas, the SiO₂ scale on SiC reacts to form volatile Si(OH)₄, so the material recedes. Rare-earth silicate coatings block this.',
  },
  {
    id: 'tbc-010',
    nodeId: 'thermal-barrier-coatings',
    type: 'cause_effect',
    prompt: 'Select every benefit.',
    scenario: 'An engine maker adds thermal barrier coatings to its high-pressure turbine blades.',
    options: [
      'The engine can run hotter for better efficiency',
      'Less cooling air may be needed',
      'Blade metal temperature drops, extending creep and oxidation life',
      'The blades can be made of aluminum instead',
    ],
    answers: [0, 1, 2],
    explanation:
      'The temperature drop can be spent on higher gas temperature, less cooling air, longer life, or a mix. Aluminum would still be far too weak at these temperatures.',
  },
]

const aeroComposites: Question[] = [
  {
    id: 'ac-001',
    nodeId: 'aerospace-composites',
    type: 'multiple_choice',
    prompt: 'Roughly what share of the structural weight of the newest wide-body airliners (e.g. Boeing 787, Airbus A350) is composite?',
    options: ['About half', 'About 1%', 'Nearly 100%', 'None'],
    answer: 0,
    explanation:
      'Fuselage barrels, wings and tail are largely CFRP, saving weight and reducing fatigue and corrosion maintenance compared with aluminum.',
  },
  {
    id: 'ac-002',
    nodeId: 'aerospace-composites',
    type: 'multiple_choice',
    prompt: 'What is "barely visible impact damage" in composite structures?',
    options: [
      'Internal delaminations from an impact (e.g. a dropped tool) that leave little or no visible mark on the surface',
      'A large dent that is easy to see',
      'Paint scratches only',
      'Corrosion spots',
    ],
    answer: 0,
    explanation:
      'Composites can hide serious internal damage under a nearly intact surface. Designs must tolerate such damage, and NDT such as ultrasonic scanning is used to find it.',
  },
  {
    id: 'ac-003',
    nodeId: 'aerospace-composites',
    type: 'trend',
    prompt: 'A CFRP panel is tested in compression after being impacted.',
    change: 'the impact energy increases',
    target: 'the compressive strength after impact',
    answer: 'decreases',
    explanation:
      'Delaminations let plies buckle locally under compression. "Compression after impact" strength is a key design value for composite wings.',
  },
  {
    id: 'ac-004',
    nodeId: 'aerospace-composites',
    type: 'multiple_choice',
    prompt: 'Why do CFRP aircraft skins need lightning strike protection, such as embedded copper mesh?',
    options: [
      'CFRP conducts electricity much worse than aluminum, so a strike can overheat and damage it',
      'Carbon attracts lightning more than metal',
      'Copper makes the skin stiffer',
      'It is only decorative',
    ],
    answer: 0,
    explanation:
      'Aluminum skins spread lightning current easily. A conductive mesh or foil gives the current a safe path over composite skins.',
  },
  {
    id: 'ac-005',
    nodeId: 'aerospace-composites',
    type: 'true_false',
    prompt: 'Composite structures are often designed for the "hot–wet" condition, because absorbed moisture and high temperature together weaken the matrix most.',
    answer: true,
    explanation:
      'Moisture lowers the matrix Tg and its stiffness, which matters most for matrix-dominated properties such as compression and shear.',
  },
  {
    id: 'ac-006',
    nodeId: 'aerospace-composites',
    type: 'multiple_choice',
    prompt: 'Why do composite fuselages suffer much less from fatigue and corrosion than aluminum ones?',
    options: [
      'Carbon fibers resist fatigue well and do not corrode like aluminum',
      'Composites are never loaded',
      'Composites are heavier',
      'Composites are made of steel',
    ],
    answer: 0,
    explanation:
      'This allows higher cabin pressure and humidity in aircraft such as the 787, improving comfort, and reduces maintenance.',
  },
  {
    id: 'ac-007',
    nodeId: 'aerospace-composites',
    type: 'multiple_choice',
    prompt: 'Which NDT method is most widely used to find delaminations in composite parts?',
    options: ['Ultrasonic inspection', 'Magnetic particle inspection', 'Dye penetrant only', 'Hardness testing'],
    answer: 0,
    explanation:
      'Ultrasound reflects from delaminations and voids, mapping internal damage. Magnetic particle inspection only works on ferromagnetic metals.',
  },
  {
    id: 'ac-008',
    nodeId: 'aerospace-composites',
    type: 'trend',
    prompt: 'A design uses CFRP instead of aluminum for a wing of the same stiffness.',
    change: 'the structure is converted from aluminum to CFRP',
    target: 'the structural weight',
    answer: 'decreases',
    explanation:
      'Thanks to CFRP’s higher specific stiffness and strength, weight savings of around 20% are common for primary structures, which reduces fuel burn.',
  },
  {
    id: 'ac-009',
    nodeId: 'aerospace-composites',
    type: 'multiple_choice',
    prompt: 'Why are holes and fasteners a weak point in composite structures?',
    options: [
      'Drilling cuts fibers and creates stress concentrations, and the material cannot yield locally to redistribute stress like metal',
      'Composites cannot be drilled',
      'Fasteners make composites heavier only',
      'Holes improve strength',
    ],
    answer: 0,
    explanation:
      'Metals yield around holes and share the load. Brittle composites keep the stress concentration, so joints need careful design, extra plies or adhesive bonding.',
  },
  {
    id: 'ac-010',
    nodeId: 'aerospace-composites',
    type: 'cause_effect',
    prompt: 'Select every correct statement.',
    scenario: 'A maintenance team inspects a CFRP wing panel after a reported tool drop.',
    options: [
      'Internal damage may be present even if the surface looks fine',
      'Ultrasonic scanning should be used to check for delamination',
      'The compressive strength of the panel may be reduced',
      'If there is no visible dent, the panel is definitely undamaged',
    ],
    answers: [0, 1, 2],
    explanation:
      'Composites can hide impact damage. Regulations require structures to carry design loads with barely visible damage present, and inspections are planned accordingly.',
  },
]

const tps: Question[] = [
  {
    id: 'tp-001',
    nodeId: 'thermal-protection',
    type: 'multiple_choice',
    prompt: 'How does an ablative heat shield, such as PICA, protect a spacecraft?',
    options: [
      'The material chars and decomposes, and the gases and removed material carry heat away',
      'It reflects all heat like a mirror',
      'It conducts heat quickly into the cabin',
      'It is cooled by water',
    ],
    answer: 0,
    explanation:
      'Pyrolysis absorbs energy, the gases block some heating, and the char surface radiates heat away. The shield is consumed, so it is used once.',
  },
  {
    id: 'tp-002',
    nodeId: 'thermal-protection',
    type: 'multiple_choice',
    prompt: 'Why were the Space Shuttle’s silica tiles such good insulators?',
    options: [
      'They were highly porous (about 90% empty space) silica with very low thermal conductivity',
      'They were made of solid copper',
      'They were dense metal plates',
      'They were filled with water',
    ],
    answer: 0,
    explanation:
      'Tiles could be red hot on one face but cool enough to hold by the edges moments later. Their low expansion also gave excellent thermal shock resistance.',
  },
  {
    id: 'tp-003',
    nodeId: 'thermal-protection',
    type: 'multiple_choice',
    prompt: 'Where was RCC used on the Space Shuttle?',
    options: [
      'On the nose cap and wing leading edges, the hottest areas (above about 1260 °C)',
      'On the cabin windows',
      'Inside the engines',
      'As cabin insulation',
    ],
    answer: 0,
    explanation:
      'Carbon–carbon keeps its strength at extreme temperature. A silicon carbide coating protected it from oxidation.',
  },
  {
    id: 'tp-004',
    nodeId: 'thermal-protection',
    type: 'true_false',
    prompt: 'The Columbia disaster (2003) began when foam from the external tank struck the RCC on the left wing leading edge during launch.',
    answer: true,
    explanation:
      'The impact made a hole in the RCC panel. During re-entry, hot gas entered the wing and destroyed it from the inside.',
  },
  {
    id: 'tp-005',
    nodeId: 'thermal-protection',
    type: 'trend',
    prompt: 'A reusable insulating tile is heated on its outer face during re-entry.',
    change: 'the tile has a lower thermal conductivity',
    target: 'the temperature reached at the structure behind it',
    answer: 'decreases',
    explanation:
      'Less heat is conducted through the tile during the minutes of re-entry heating, so the aluminum structure underneath stays within its limits.',
  },
  {
    id: 'tp-006',
    nodeId: 'thermal-protection',
    type: 'multiple_choice',
    prompt: 'Why did Shuttle tiles have a black, high-emissivity surface coating?',
    options: [
      'To radiate as much heat as possible back away from the vehicle',
      'To absorb more sunlight',
      'For decoration only',
      'To conduct heat into the structure',
    ],
    answer: 0,
    explanation:
      'Radiation increases with emissivity and very strongly with temperature. A hot, high-emissivity surface sheds most of the incoming heat.',
  },
  {
    id: 'tp-007',
    nodeId: 'thermal-protection',
    type: 'multiple_choice',
    prompt: 'What is the main trade-off between ablative and reusable heat shields?',
    options: [
      'Ablators handle very high heating but are consumed; reusable systems survive many flights but tolerate lower peak heating or need careful maintenance',
      'Ablators are always reusable',
      'Reusable systems are always cheaper per kilogram',
      'There is no trade-off',
    ],
    answer: 0,
    explanation:
      'Capsules returning from the Moon or Mars use ablators. Reusable vehicles use tiles, blankets or metallic and ceramic systems, with inspection between flights.',
  },
  {
    id: 'tp-008',
    nodeId: 'thermal-protection',
    type: 'trend',
    prompt: 'A spacecraft enters the atmosphere.',
    change: 'the entry speed increases (e.g. returning from the Moon instead of low Earth orbit)',
    target: 'the heat load on the heat shield',
    answer: 'increases',
    explanation:
      'Heating rises steeply with speed (roughly with its cube). Lunar return capsules face much harsher heating than vehicles returning from orbit.',
  },
  {
    id: 'tp-009',
    nodeId: 'thermal-protection',
    type: 'multiple_choice',
    prompt: 'Why do carbon–carbon composites need an oxidation-protection coating?',
    options: [
      'Carbon burns in oxygen at high temperature, so it must be sealed off',
      'Carbon melts at 500 °C',
      'Coatings make it lighter',
      'Carbon is attacked by vacuum',
    ],
    answer: 0,
    explanation:
      'Carbon starts oxidizing in air at a few hundred °C. Silicon carbide coatings form a glassy silica layer that blocks oxygen.',
  },
  {
    id: 'tp-010',
    nodeId: 'thermal-protection',
    type: 'cause_effect',
    prompt: 'Select every property that suits a re-entry insulating tile.',
    scenario: 'Engineers choose a material for reusable insulating tiles.',
    options: [
      'Very low thermal conductivity',
      'Low thermal expansion for thermal shock resistance',
      'Low density',
      'High thermal conductivity',
    ],
    answers: [0, 1, 2],
    explanation:
      'The tile must keep heat out, survive rapid heating and cooling, and add as little mass as possible. High conductivity would let heat reach the structure.',
  },
]

export const aeroQuestions: Question[] = [...lightweight, ...superalloys, ...tbc, ...aeroComposites, ...tps]
