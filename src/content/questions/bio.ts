import type { Question } from '../types'

// Applications · Biomaterials.
// Sources: Ratner et al., Biomaterials Science: An Introduction to Materials in Medicine; Park & Lakes, Biomaterials;
// Hench (1991), Bioceramics: From Concept to Clinic; Callister & Rethwisch (biomaterials case studies).

const biocompat: Question[] = [
  {
    id: 'bc-001',
    nodeId: 'biocompatibility',
    type: 'multiple_choice',
    prompt: 'What does "biocompatible" mean?',
    options: [
      'The material performs its job with an appropriate host response in a specific application',
      'The material causes no reaction of any kind in the body',
      'The material dissolves in the body',
      'The material is made from natural sources',
    ],
    answer: 0,
    explanation:
      'No material is completely inert in the body. Biocompatibility depends on the application: what works in bone may fail in contact with blood.',
  },
  {
    id: 'bc-002',
    nodeId: 'biocompatibility',
    type: 'multiple_choice',
    prompt: 'What happens first when an implant is placed in the body?',
    options: [
      'Proteins from blood and body fluids adsorb onto its surface within seconds',
      'Bone immediately grows into it',
      'The implant starts to dissolve',
      'Nothing happens for several weeks',
    ],
    answer: 0,
    explanation:
      'Cells never meet the bare material; they meet the protein layer on it. Surface chemistry and roughness control which proteins adsorb and how, which steers the rest of the response.',
  },
  {
    id: 'bc-003',
    nodeId: 'biocompatibility',
    type: 'multiple_choice',
    prompt: 'What is the typical end result of the foreign body response to a non-degradable implant in soft tissue?',
    options: [
      'A thin fibrous (collagen) capsule walls off the implant',
      'The implant is digested completely',
      'The implant turns into bone',
      'Blood vessels grow through the implant',
    ],
    answer: 0,
    explanation:
      'Macrophages try and fail to remove the implant, then fibroblasts build a collagen capsule around it. A thin, stable capsule is usually acceptable; a thick or inflamed one is not.',
  },
  {
    id: 'bc-004',
    nodeId: 'biocompatibility',
    type: 'matching',
    prompt: 'Match each type of material–tissue interaction to an example.',
    pairs: [
      { left: 'Bioinert', right: 'Alumina femoral head: minimal interaction, thin capsule' },
      { left: 'Bioactive', right: 'Bioactive glass: bonds chemically to bone' },
      { left: 'Bioresorbable', right: 'Polylactic acid screw: gradually replaced by tissue' },
    ],
    explanation:
      'Biomaterials are often grouped by how they interact with tissue: tolerated, bonded, or replaced over time.',
  },
  {
    id: 'bc-005',
    nodeId: 'biocompatibility',
    type: 'true_false',
    prompt: 'Wear debris from a joint replacement, such as polyethylene particles, can trigger inflammation that dissolves the surrounding bone and loosens the implant.',
    answer: true,
    explanation:
      'Macrophages that engulf micrometer-sized wear particles release signals that activate bone resorption (osteolysis). Wear resistance is therefore a biocompatibility issue, which led to highly crosslinked UHMWPE.',
  },
  {
    id: 'bc-006',
    nodeId: 'biocompatibility',
    type: 'multiple_choice',
    prompt: 'Why is corrosion a biocompatibility concern for metal implants?',
    options: [
      'Released metal ions, such as nickel or cobalt, can cause allergic or toxic reactions, and corrosion weakens the device',
      'Corrosion makes implants heavier',
      'Body fluids are not corrosive',
      'Corrosion only affects the color of the implant',
    ],
    answer: 0,
    explanation:
      'Body fluids are warm, oxygenated chloride solutions, which are quite aggressive to metals. Implant alloys rely on stable passive films (TiO₂ or Cr₂O₃).',
  },
  {
    id: 'bc-007',
    nodeId: 'biocompatibility',
    type: 'multiple_choice',
    prompt: 'What is the main extra requirement for materials that contact blood, such as heart valves and stents?',
    options: [
      'They must not trigger blood clotting (thrombosis) on their surface',
      'They must be magnetic',
      'They must be transparent',
      'They must dissolve quickly',
    ],
    answer: 0,
    explanation:
      'Adsorbed proteins and activated platelets can start clots that block the device or travel elsewhere. Surface treatments and anticoagulant drugs are used to manage this.',
  },
  {
    id: 'bc-008',
    nodeId: 'biocompatibility',
    type: 'trend',
    prompt: 'Think about the surface of a titanium dental implant.',
    change: 'the surface is made moderately rougher at the micrometer scale (e.g. by grit blasting and acid etching)',
    target: 'bone attachment (osseointegration)',
    answer: 'increases',
    explanation:
      'Micro-rough surfaces give bone cells more area and better anchoring, which speeds up and strengthens direct bone contact compared with machined, smooth surfaces.',
  },
  {
    id: 'bc-009',
    nodeId: 'biocompatibility',
    type: 'multiple_choice',
    prompt: 'Why must the sterilization method be chosen carefully for polymer implants?',
    options: [
      'Some methods, such as gamma radiation or steam, can break chains, crosslink or deform the polymer',
      'Polymers cannot be sterilized at all',
      'Sterilization makes polymers magnetic',
      'Only metals need sterilization',
    ],
    answer: 0,
    explanation:
      'Gamma irradiation in air can oxidize UHMWPE over time, and steam can melt or hydrolyze some polymers. Ethylene oxide gas or irradiation in inert packaging are alternatives.',
  },
  {
    id: 'bc-010',
    nodeId: 'biocompatibility',
    type: 'cause_effect',
    prompt: 'Select every correct statement.',
    scenario: 'A new alloy is proposed for a permanent hip stem.',
    options: [
      'Its corrosion resistance in warm saline must be tested',
      'The biological effects of any released ions must be evaluated',
      'Its fatigue strength matters, because a hip is loaded millions of times per year',
      'Only its tensile strength matters',
    ],
    answers: [0, 1, 2],
    explanation:
      'Implant materials must satisfy mechanical, corrosion and biological requirements together. People take roughly a million or more steps a year, so fatigue resistance is essential.',
  },
]

const metallic: Question[] = [
  {
    id: 'mi-001',
    nodeId: 'metallic-implants',
    type: 'matching',
    prompt: 'Match each implant alloy to a typical use.',
    pairs: [
      { left: 'Ti-6Al-4V', right: 'Hip stems and dental implants that bond to bone' },
      { left: 'Co–Cr–Mo', right: 'Wear-resistant joint bearing surfaces' },
      { left: '316L stainless steel', right: 'Temporary fracture plates and screws' },
      { left: 'Nitinol (Ni–Ti)', right: 'Self-expanding stents' },
    ],
    explanation:
      'Titanium alloys combine biocompatibility with lower stiffness, Co–Cr alloys resist wear, stainless steel is cheap and easy to form, and Nitinol is superelastic.',
  },
  {
    id: 'mi-002',
    nodeId: 'metallic-implants',
    type: 'multiple_choice',
    prompt: 'What is stress shielding?',
    options: [
      'A stiff implant carries most of the load, so the bone around it is under-loaded and gradually resorbs',
      'A coating that shields the implant from corrosion',
      'Bone carrying all the load and fracturing',
      'Radiation shielding in X-ray imaging',
    ],
    answer: 0,
    explanation:
      'Bone adapts to the loads it carries (Wolff’s law). Cortical bone has a modulus of about 10–30 GPa, far below stainless steel or Co–Cr (about 200 GPa), so a stiff stem takes the load and the bone thins.',
  },
  {
    id: 'mi-003',
    nodeId: 'metallic-implants',
    type: 'trend',
    prompt: 'Compare hip stems made of different alloys with the same shape.',
    change: 'the elastic modulus of the stem material decreases toward that of bone',
    target: 'stress shielding of the surrounding bone',
    answer: 'decreases',
    explanation:
      'A less stiff stem shares more load with the bone. Ti-6Al-4V (about 110 GPa) shields less than Co–Cr, and β-titanium alloys (around 55–85 GPa) less still.',
  },
  {
    id: 'mi-004',
    nodeId: 'metallic-implants',
    type: 'multiple_choice',
    prompt: 'Why are titanium alloys so well accepted by bone?',
    options: [
      'A stable TiO₂ passive film resists corrosion and allows bone to grow in direct contact (osseointegration)',
      'Titanium dissolves and turns into bone',
      'Titanium is magnetic',
      'Titanium has the highest stiffness of all implant metals',
    ],
    answer: 0,
    explanation:
      'The oxide film re-forms instantly if scratched and is very inert. Dental implants rely on bone bonding directly to it.',
  },
  {
    id: 'mi-005',
    nodeId: 'metallic-implants',
    type: 'multiple_choice',
    prompt: 'Why is implant stainless steel the low-carbon "L" grade (316L)?',
    options: [
      'Low carbon prevents chromium carbides from forming at grain boundaries, which would reduce corrosion resistance',
      'Low carbon makes it magnetic',
      'Carbon is toxic',
      'Low carbon makes it harder',
    ],
    answer: 0,
    explanation:
      'Chromium carbide formation (sensitization) would leave chromium-depleted zones that corrode. Molybdenum in 316L also improves resistance to chloride pitting in body fluids.',
  },
  {
    id: 'mi-006',
    nodeId: 'metallic-implants',
    type: 'true_false',
    prompt: 'Nitinol stents can be compressed into a thin catheter and spring back to full size in the artery because the alloy is superelastic.',
    answer: true,
    explanation:
      'Under stress, Nitinol’s austenite transforms to martensite and back, allowing recoverable strains of several percent, far more than ordinary metals.',
  },
  {
    id: 'mi-007',
    nodeId: 'metallic-implants',
    type: 'multiple_choice',
    prompt: 'Why are Co–Cr–Mo alloys chosen for bearing surfaces in some joint replacements?',
    options: [
      'High hardness and excellent wear and corrosion resistance',
      'They are the lightest implant metals',
      'They have a modulus similar to bone',
      'They are biodegradable',
    ],
    answer: 0,
    explanation:
      'Co–Cr femoral heads articulate against polyethylene with low wear. Ti-6Al-4V is a poor bearing material because it galls and wears.',
  },
  {
    id: 'mi-008',
    nodeId: 'metallic-implants',
    type: 'trend',
    prompt: 'A titanium alloy hip stem experiences cyclic loading from walking.',
    change: 'the stem has a rougher, scratched surface instead of a smooth, shot-peened one',
    target: 'its fatigue life',
    answer: 'decreases',
    explanation:
      'Fatigue cracks start at surface stress concentrators. Smooth surfaces and compressive residual stress from peening extend life, which is critical for loads cycled millions of times a year.',
  },
  {
    id: 'mi-009',
    nodeId: 'metallic-implants',
    type: 'multiple_choice',
    prompt: 'Why are many patients tested or monitored when an implant contains nickel?',
    options: [
      'Nickel is a common cause of metal allergy if ions are released',
      'Nickel is radioactive',
      'Nickel makes implants invisible on X-rays',
      'Nickel dissolves bone directly',
    ],
    answer: 0,
    explanation:
      'Nickel sensitivity affects a notable fraction of people. Nitinol relies on its titanium-rich oxide surface to limit nickel release.',
  },
  {
    id: 'mi-010',
    nodeId: 'metallic-implants',
    type: 'cause_effect',
    prompt: 'Select every correct statement.',
    scenario: 'A surgeon chooses a titanium-alloy plate over a stainless steel plate for a long-term bone fixation.',
    options: [
      'Titanium’s lower modulus reduces stress shielding',
      'Titanium has excellent corrosion resistance in body fluids',
      'Titanium causes fewer artifacts in MRI images and is non-magnetic',
      'Titanium is the cheaper option',
    ],
    answers: [0, 1, 2],
    explanation:
      'Titanium is lighter, less stiff, highly corrosion resistant and non-magnetic. Its main drawback is cost; stainless steel remains common for temporary fixation.',
  },
]

const bioceramics: Question[] = [
  {
    id: 'bcr-001',
    nodeId: 'bioceramics',
    type: 'multiple_choice',
    prompt: 'Why are alumina and zirconia used for femoral heads in hip replacements?',
    options: [
      'They are very hard, wear-resistant and bioinert',
      'They bond chemically to bone',
      'They dissolve and are replaced by bone',
      'They are very ductile',
    ],
    answer: 0,
    explanation:
      'Polished ceramic heads produce far less wear debris than metal heads. Their brittleness is managed with high-purity, fine-grained material and careful design.',
  },
  {
    id: 'bcr-002',
    nodeId: 'bioceramics',
    type: 'multiple_choice',
    prompt: 'Why is HA a good coating for bone implants?',
    options: [
      'It has a composition similar to the mineral in bone, so bone bonds to it',
      'It is the strongest ceramic known',
      'It is a metal',
      'It prevents all protein adsorption',
    ],
    answer: 0,
    explanation:
      'Bone mineral is a calcium phosphate close to hydroxyapatite. HA coatings on titanium stems speed up bone attachment.',
  },
  {
    id: 'bcr-003',
    nodeId: 'bioceramics',
    type: 'true_false',
    prompt: 'Bulk HA is too brittle to be used alone for heavily loaded implants, which is why it is mostly used as a coating or filler.',
    answer: true,
    explanation:
      'HA has low fracture toughness (around 1 MPa·√m). Putting a thin coating on a tough metal core combines bone bonding with load-bearing ability.',
  },
  {
    id: 'bcr-004',
    nodeId: 'bioceramics',
    type: 'multiple_choice',
    prompt: 'How does bioactive glass (such as 45S5 Bioglass) bond to bone?',
    options: [
      'Ion exchange with body fluid forms a surface layer of hydroxycarbonate apatite that bone bonds to',
      'It melts in the body',
      'It is glued with cement',
      'It forms metallic bonds with bone',
    ],
    answer: 0,
    explanation:
      'Sodium and calcium ions leave the glass, a silica-rich gel forms, and calcium phosphate deposits on it as an apatite layer within hours to days. Bone and even soft tissue can bond to it.',
  },
  {
    id: 'bcr-005',
    nodeId: 'bioceramics',
    type: 'trend',
    prompt: 'Compare calcium phosphate bone substitutes.',
    change: 'the material is β-tricalcium phosphate instead of dense, well-crystallized HA',
    target: 'the rate at which the body resorbs it',
    answer: 'increases',
    explanation:
      'β-tricalcium phosphate is more soluble than HA, so it is gradually resorbed and replaced by new bone. Mixtures of the two let the resorption rate be tuned.',
  },
  {
    id: 'bcr-006',
    nodeId: 'bioceramics',
    type: 'multiple_choice',
    prompt: 'What is "low-temperature degradation" of zirconia implants?',
    options: [
      'In body fluids, tetragonal zirconia slowly transforms to monoclinic at the surface, roughening it and lowering strength',
      'Zirconia melting at body temperature',
      'Zirconia becoming magnetic',
      'Zirconia dissolving completely',
    ],
    answer: 0,
    explanation:
      'Water speeds up the tetragonal-to-monoclinic transformation that gives zirconia its toughness. Some zirconia heads failed this way in the early 2000s; alumina-toughened zirconia composites reduce the risk.',
  },
  {
    id: 'bcr-007',
    nodeId: 'bioceramics',
    type: 'trend',
    prompt: 'Alumina femoral heads are made with different grain sizes.',
    change: 'the grain size is made finer (with high purity and density)',
    target: 'the strength and reliability of the head',
    answer: 'increases',
    explanation:
      'Finer grains mean smaller flaws and higher strength. Modern medical alumina has much finer grains than early versions, which cut fracture rates dramatically.',
  },
  {
    id: 'bcr-008',
    nodeId: 'bioceramics',
    type: 'multiple_choice',
    prompt: 'Why is a ceramic-on-ceramic hip bearing attractive?',
    options: [
      'It produces extremely little wear debris, reducing bone loss caused by particles',
      'It is the cheapest bearing',
      'It can never fracture',
      'It is soft and squeaks less',
    ],
    answer: 0,
    explanation:
      'Hard, smooth ceramics wear far less than polyethylene. The trade-offs are a small fracture risk and occasional squeaking.',
  },
  {
    id: 'bcr-009',
    nodeId: 'bioceramics',
    type: 'true_false',
    prompt: 'Bioactive glasses can bond to soft tissue as well as to bone.',
    answer: true,
    explanation:
      'Some compositions, such as 45S5, form their apatite layer fast enough that soft tissue such as collagen can attach. This is unusual among biomaterials.',
  },
  {
    id: 'bcr-010',
    nodeId: 'bioceramics',
    type: 'cause_effect',
    prompt: 'Select every correct statement.',
    scenario: 'A dentist fills a bone defect with porous calcium phosphate granules.',
    options: [
      'Bone can grow into the pores',
      'The granules provide a scaffold that new bone builds on (osteoconduction)',
      'A more resorbable calcium phosphate would be replaced by bone faster',
      'The granules must be fully dense to work',
    ],
    answers: [0, 1, 2],
    explanation:
      'Interconnected porosity lets cells and blood vessels move in. Resorbable phases make room for new bone. Dense granules would block ingrowth.',
  },
]

const biodegradable: Question[] = [
  {
    id: 'bd-001',
    nodeId: 'biodegradable-materials',
    type: 'multiple_choice',
    prompt: 'What is the main clinical advantage of a biodegradable bone screw?',
    options: [
      'It does not need a second surgery for removal, because it dissolves as the bone heals',
      'It is always stronger than titanium',
      'It never causes any tissue reaction',
      'It is permanent',
    ],
    answer: 0,
    explanation:
      'Temporary fixation is only needed for weeks to months. A device that gradually disappears avoids removal surgery and long-term stress shielding.',
  },
  {
    id: 'bd-002',
    nodeId: 'biodegradable-materials',
    type: 'multiple_choice',
    prompt: 'How do PLA and PGA degrade in the body?',
    options: [
      'By hydrolysis of ester bonds in the chains, producing lactic and glycolic acid',
      'By melting at body temperature',
      'By rusting',
      'By evaporating',
    ],
    answer: 0,
    explanation:
      'Water breaks the ester links, lowering molecular weight until fragments are absorbed. The acids are metabolized, though a burst of acid can irritate tissue.',
  },
  {
    id: 'bd-003',
    nodeId: 'biodegradable-materials',
    type: 'trend',
    prompt: 'Compare biodegradable polyesters.',
    change: 'the polymer is PGA instead of PLA',
    target: 'the degradation rate',
    answer: 'increases',
    explanation:
      'PGA is more hydrophilic, so water attacks it faster; it loses strength in weeks, while PLA takes months to years. PLGA copolymers let surgeons choose rates in between.',
  },
  {
    id: 'bd-004',
    nodeId: 'biodegradable-materials',
    type: 'trend',
    prompt: 'Compare PLA devices of the same shape.',
    change: 'the crystallinity of the PLA increases',
    target: 'the degradation rate',
    answer: 'decreases',
    explanation:
      'Water penetrates crystalline regions slowly, so amorphous regions are attacked first. Highly crystalline PLA can persist for years.',
  },
  {
    id: 'bd-005',
    nodeId: 'biodegradable-materials',
    type: 'multiple_choice',
    prompt: 'What happens when a magnesium alloy implant degrades in the body?',
    options: [
      'It corrodes, releasing Mg²⁺ ions and hydrogen gas',
      'It turns into titanium',
      'It melts',
      'It becomes stronger',
    ],
    answer: 0,
    explanation:
      'Magnesium reacts with water: Mg + 2H₂O → Mg(OH)₂ + H₂. Magnesium ions are naturally present in the body, but hydrogen released too quickly can form gas pockets.',
  },
  {
    id: 'bd-006',
    nodeId: 'biodegradable-materials',
    type: 'multiple_choice',
    prompt: 'Why is magnesium attractive for bone implants besides being degradable?',
    options: [
      'Its elastic modulus (about 45 GPa) is closer to bone than other metals, reducing stress shielding',
      'It is the stiffest metal',
      'It never corrodes',
      'It is heavier than steel',
    ],
    answer: 0,
    explanation:
      'Magnesium’s density (about 1.74 g/cm³) and stiffness are close to those of bone, and it is stronger than biodegradable polymers.',
  },
  {
    id: 'bd-007',
    nodeId: 'biodegradable-materials',
    type: 'true_false',
    prompt: 'A key design goal for biodegradable implants is that they lose strength at about the same rate as the tissue heals and takes over the load.',
    answer: true,
    explanation:
      'Too fast, and the bone or vessel is unsupported before it heals. Too slow, and the device behaves like a permanent implant.',
  },
  {
    id: 'bd-008',
    nodeId: 'biodegradable-materials',
    type: 'cause_effect',
    prompt: 'Select every way to slow down the degradation.',
    scenario: 'A magnesium alloy stent degrades too quickly in early tests.',
    options: [
      'Refine alloy purity, since iron and nickel impurities cause fast galvanic corrosion',
      'Add a protective coating',
      'Alloy with elements that form a more protective surface layer',
      'Add more iron impurities',
    ],
    answers: [0, 1, 2],
    explanation:
      'Impurities form tiny galvanic cells with magnesium. High-purity alloys, rare-earth or zinc additions and polymer or ceramic coatings are used to control the rate.',
  },
  {
    id: 'bd-009',
    nodeId: 'biodegradable-materials',
    type: 'multiple_choice',
    prompt: 'Which everyday medical product commonly uses biodegradable polymers?',
    options: ['Absorbable surgical sutures', 'Hip stems', 'Dental crowns', 'Pacemaker cases'],
    answer: 0,
    explanation:
      'PGA and PLGA sutures hold wounds closed for a few weeks and then dissolve, so they do not need removal.',
  },
  {
    id: 'bd-010',
    nodeId: 'biodegradable-materials',
    type: 'trend',
    prompt: 'Think about a large, thick PLA implant compared with a thin one.',
    change: 'the implant gets thicker',
    target: 'the risk of acid build-up and faster degradation inside the bulk',
    answer: 'increases',
    explanation:
      'Acidic degradation products trapped inside a thick part catalyze further hydrolysis (autocatalysis), so the interior can degrade faster than the surface and release acid in a burst.',
  },
]

const scaffolds: Question[] = [
  {
    id: 'ts-001',
    nodeId: 'tissue-scaffolds',
    type: 'multiple_choice',
    prompt: 'What is a tissue engineering scaffold for?',
    options: [
      'A temporary porous structure that guides cells to grow new tissue, then degrades',
      'A permanent metal implant',
      'A coating to stop cell attachment',
      'A drug pill',
    ],
    answer: 0,
    explanation:
      'The scaffold mimics the ECM: it gives cells something to attach to and a 3D shape to fill, and it is replaced by new tissue over time.',
  },
  {
    id: 'ts-002',
    nodeId: 'tissue-scaffolds',
    type: 'multiple_choice',
    prompt: 'Why must scaffold pores be interconnected?',
    options: [
      'So cells, nutrients and blood vessels can reach the whole interior',
      'To make the scaffold heavier',
      'To prevent any cell entry',
      'Interconnection has no effect',
    ],
    answer: 0,
    explanation:
      'Isolated pores cannot be reached. Cells deeper than a few hundred micrometers from a nutrient supply die without blood vessels growing in.',
  },
  {
    id: 'ts-003',
    nodeId: 'tissue-scaffolds',
    type: 'multiple_choice',
    prompt: 'For bone ingrowth, scaffold pores typically need to be at least about:',
    options: ['100 µm across', '1 nm across', '10 mm across', '0.1 µm across'],
    answer: 0,
    explanation:
      'Pores of roughly 100 µm and up (often 200–500 µm is targeted) allow bone cells and blood vessels to grow in. Much smaller pores block ingrowth; much larger ones weaken the scaffold.',
  },
  {
    id: 'ts-004',
    nodeId: 'tissue-scaffolds',
    type: 'trend',
    prompt: 'Compare scaffolds made of the same material.',
    change: 'the porosity increases',
    target: 'the scaffold’s strength and stiffness',
    answer: 'decreases',
    explanation:
      'More open space means less material carrying load. This is the central trade-off in scaffold design: enough porosity for tissue growth, enough strength to survive implantation and use.',
  },
  {
    id: 'ts-005',
    nodeId: 'tissue-scaffolds',
    type: 'matching',
    prompt: 'Match each scaffold fabrication method to what it produces.',
    pairs: [
      { left: 'Electrospinning', right: 'Mats of nanofibers resembling natural collagen fibers' },
      { left: '3D printing', right: 'Precisely designed pore shapes and patient-specific outer shapes' },
      { left: 'Salt leaching', right: 'Pores left where dissolved salt crystals were' },
      { left: 'Freeze-drying', right: 'Pores left where ice crystals sublimated' },
    ],
    explanation:
      'Each method gives a different control over pore size, shape and interconnection. 3D printing gives the most control.',
  },
  {
    id: 'ts-006',
    nodeId: 'tissue-scaffolds',
    type: 'true_false',
    prompt: 'Ideally, a scaffold degrades at roughly the same rate that new tissue forms.',
    answer: true,
    explanation:
      'The scaffold should hand over its support gradually. Too fast and the tissue collapses; too slow and the scaffold gets in the way of the new tissue.',
  },
  {
    id: 'ts-007',
    nodeId: 'tissue-scaffolds',
    type: 'multiple_choice',
    prompt: 'Why are the surfaces of polymer scaffolds sometimes coated with proteins or short peptide sequences?',
    options: [
      'To help cells recognize and attach to the scaffold',
      'To make the scaffold waterproof',
      'To stop all degradation',
      'To make it magnetic',
    ],
    answer: 0,
    explanation:
      'Cells attach through receptors that bind specific protein sequences, such as the RGD peptide found in fibronectin. Synthetic polymers often lack these signals.',
  },
  {
    id: 'ts-008',
    nodeId: 'tissue-scaffolds',
    type: 'trend',
    prompt: 'Cells sense the stiffness of the material they grow on.',
    change: 'a scaffold for bone is made much softer than bone tissue',
    target: 'how well it supports bone-forming behavior of stem cells',
    answer: 'decreases',
    explanation:
      'Stem cells tend to follow the stiffness cues of their surroundings: soft substrates favor soft-tissue types, stiffer ones favor bone. Matching stiffness to the target tissue helps.',
  },
  {
    id: 'ts-009',
    nodeId: 'tissue-scaffolds',
    type: 'multiple_choice',
    prompt: 'Why is PCL popular for 3D-printed scaffolds?',
    options: [
      'It melts at a low temperature (about 60 °C), prints easily and degrades slowly over months to years',
      'It is a ceramic',
      'It never degrades',
      'It is extremely stiff, like steel',
    ],
    answer: 0,
    explanation:
      'PCL’s low melting point makes melt extrusion easy, and its slow degradation suits long healing times. It is often combined with calcium phosphates for bone.',
  },
  {
    id: 'ts-010',
    nodeId: 'tissue-scaffolds',
    type: 'cause_effect',
    prompt: 'Select every likely cause.',
    scenario: 'In a thick scaffold, cells survive near the surface but die in the center.',
    options: [
      'Nutrients and oxygen cannot diffuse far enough into the center',
      'Pores are too small or poorly interconnected',
      'Blood vessels have not yet grown into the center',
      'The center has too many nutrients',
    ],
    answers: [0, 1, 2],
    explanation:
      'Without vascularization, cells depend on diffusion, which only reaches a few hundred micrometers. Larger, connected pores and growth factors that encourage blood vessels help.',
  },
]

export const bioQuestions: Question[] = [...biocompat, ...metallic, ...bioceramics, ...biodegradable, ...scaffolds]
