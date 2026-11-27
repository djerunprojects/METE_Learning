import type { Question } from '../types'

// Core · Mechanical Properties branch.
// Sources: Callister & Rethwisch (ch. 6, 7, 8); Askeland (ch. 6, 7); Dieter, Mechanical Metallurgy.

const stressStrain: Question[] = [
  {
    id: 'ss-001',
    nodeId: 'stress-strain',
    type: 'trend',
    prompt: "In the elastic region, stress and strain follow Hooke's law.",
    formula: 'hookes-law',
    change: 'the same stress σ is applied to a material with a higher elastic modulus E',
    target: 'the elastic strain ε',
    answer: 'decreases',
    explanation:
      'Rearranging gives ε = σ / E. For the same σ, a larger E means a smaller strain: a stiffer material stretches less.',
  },
  {
    id: 'ss-002',
    nodeId: 'stress-strain',
    type: 'pick_region',
    prompt: 'On the stress–strain curve of a ductile metal, where does the cross-section start to shrink locally at one spot?',
    diagram: 'stress_strain_ductile',
    answer: 'necking',
    explanation:
      'After the ultimate tensile strength, deformation concentrates in one region and the cross-section narrows locally (necking). Engineering stress falls because it is calculated on the original area.',
  },
  {
    id: 'ss-003',
    nodeId: 'stress-strain',
    type: 'true_false',
    prompt: 'Elastic deformation is not permanent: the material returns to its original shape when the load is removed.',
    answer: true,
    explanation:
      'In elastic deformation, bonds are only stretched, not broken or rearranged, so the atoms return to their original positions. Plastic deformation is permanent because dislocations have moved.',
  },
  {
    id: 'ss-004',
    nodeId: 'stress-strain',
    type: 'pick_region',
    prompt: 'Where on the curve does the material deform only elastically?',
    diagram: 'stress_strain_ductile',
    answer: 'elastic',
    explanation:
      'The initial straight-line portion is elastic: stress is proportional to strain, and its slope is the elastic modulus E. It ends at the yield point.',
  },
  {
    id: 'ss-005',
    nodeId: 'stress-strain',
    type: 'pick_region',
    prompt: 'Where does the metal strain harden while deforming uniformly along its length?',
    diagram: 'stress_strain_ductile',
    answer: 'uniform_plastic',
    explanation:
      'Between yield and the ultimate tensile strength, the stress needed keeps rising because dislocations multiply and tangle (strain hardening). The whole gauge length thins evenly until necking starts.',
  },
  {
    id: 'ss-006',
    nodeId: 'stress-strain',
    type: 'trend',
    prompt: 'A metal bar is stretched elastically along its length.',
    formula: 'poisson-ratio',
    change: 'the bar gets longer under the tensile load',
    target: 'its width (diameter)',
    answer: 'decreases',
    explanation:
      'A positive axial strain ε_z comes with a negative lateral strain ε_x, so the bar gets thinner. For most metals ν ≈ 0.3.',
  },
  {
    id: 'ss-007',
    nodeId: 'stress-strain',
    type: 'multiple_choice',
    prompt: 'What does the elastic modulus E measure?',
    options: [
      'Stiffness: resistance to elastic deformation',
      'Strength: the stress at which yielding starts',
      'Ductility: how much it can stretch before breaking',
      'Hardness: resistance to indentation',
    ],
    answer: 0,
    explanation:
      'E is the slope of the elastic part of the stress–strain curve. A high E means a stiff material. It depends mainly on bond strength and is barely changed by heat treatment or cold work, unlike yield strength.',
  },
  {
    id: 'ss-008',
    nodeId: 'stress-strain',
    type: 'matching',
    prompt: 'Match each material to its approximate elastic modulus.',
    pairs: [
      { left: 'Steel', right: '≈ 200 GPa' },
      { left: 'Aluminum', right: '≈ 70 GPa' },
      { left: 'Alumina (Al₂O₃)', right: '≈ 380 GPa' },
      { left: 'HDPE', right: '≈ 1 GPa' },
    ],
    explanation:
      'Ceramics with strong ionic–covalent bonds are stiffest, metals are in between, and polymers, whose chains are held by weak secondary bonds, are far less stiff.',
  },
  {
    id: 'ss-009',
    nodeId: 'stress-strain',
    type: 'trend',
    prompt: 'Think about how bond stiffness changes as atoms vibrate more.',
    change: 'the temperature of most metals increases',
    target: 'the elastic modulus',
    answer: 'decreases',
    explanation:
      'As the lattice expands with heating, the slope of the force–separation curve at the average spacing gets smaller, so the modulus slowly drops.',
  },
  {
    id: 'ss-010',
    nodeId: 'stress-strain',
    type: 'multiple_choice',
    prompt: 'What is the difference between engineering stress and true stress?',
    options: [
      'True stress uses the actual (instantaneous) cross-sectional area; engineering stress uses the original area',
      'True stress includes temperature; engineering stress does not',
      'Engineering stress is always higher than true stress in tension',
      'There is no difference after yielding',
    ],
    answer: 0,
    explanation:
      'As a tensile bar thins, the true stress on the shrinking area keeps rising even after the engineering curve peaks at the ultimate tensile strength.',
  },
]

const plasticity: Question[] = [
  {
    id: 'ph-001',
    nodeId: 'plasticity-hardness',
    type: 'multiple_choice',
    prompt: 'Why is the yield strength of many metals defined with the 0.2% offset method?',
    options: [
      'Many metals have no sharp yield point, so a small permanent strain (0.002) is used to mark the start of yielding',
      'Because 0.2% is the strain at fracture',
      'Because the elastic modulus is 0.2% of the tensile strength',
      'It is only used for ceramics',
    ],
    answer: 0,
    explanation:
      'The change from elastic to plastic is gradual in most metals. A line parallel to the elastic part, shifted by 0.002 strain, gives a reproducible yield strength.',
  },
  {
    id: 'ph-002',
    nodeId: 'plasticity-hardness',
    type: 'trend',
    prompt: 'A copper sheet is cold rolled to a smaller thickness at room temperature.',
    change: 'the amount of cold work increases',
    target: 'the yield strength',
    answer: 'increases',
    explanation:
      'Cold work multiplies dislocations, and they get in each other’s way. More stress is needed to keep them moving, so the metal strain hardens.',
  },
  {
    id: 'ph-003',
    nodeId: 'plasticity-hardness',
    type: 'trend',
    prompt: 'The same copper sheet is cold rolled further.',
    change: 'the amount of cold work increases',
    target: 'the ductility (percent elongation)',
    answer: 'decreases',
    explanation:
      'Strength and ductility usually trade off. Part of the metal’s capacity to deform has already been used up by cold working. Annealing can restore ductility.',
  },
  {
    id: 'ph-004',
    nodeId: 'plasticity-hardness',
    type: 'multiple_choice',
    prompt: 'What causes strain hardening?',
    options: [
      'Dislocation density increases and dislocations block each other’s motion',
      'Vacancies disappear',
      'The elastic modulus increases',
      'Grains melt and resolidify',
    ],
    answer: 0,
    explanation:
      'Dislocation density can rise from about 10¹⁰ to 10¹⁵ m⁻² during heavy cold work. The stress fields of dislocations interact and tangle, so moving any one of them takes more stress.',
  },
  {
    id: 'ph-005',
    nodeId: 'plasticity-hardness',
    type: 'matching',
    prompt: 'Match each hardness test to its indenter.',
    pairs: [
      { left: 'Brinell', right: 'Hard steel or tungsten carbide ball' },
      { left: 'Vickers', right: 'Square-based diamond pyramid' },
      { left: 'Rockwell C', right: 'Diamond cone' },
      { left: 'Knoop', right: 'Elongated diamond pyramid (microhardness)' },
    ],
    explanation:
      'All hardness tests press an indenter into the surface and measure the size or depth of the dent. Diamond indenters are used for hard materials and for microhardness tests on small features.',
  },
  {
    id: 'ph-006',
    nodeId: 'plasticity-hardness',
    type: 'true_false',
    prompt: 'For many steels, tensile strength can be roughly estimated from hardness, because both reflect resistance to plastic deformation.',
    answer: true,
    explanation:
      'An indentation is made by local plastic flow. For steels, tensile strength is roughly proportional to Brinell hardness, which makes hardness a quick check on strength.',
  },
  {
    id: 'ph-007',
    nodeId: 'plasticity-hardness',
    type: 'multiple_choice',
    prompt: 'What is ductility?',
    options: [
      'The amount of plastic deformation a material can take before it fractures',
      'The stress at which yielding starts',
      'The energy absorbed elastically',
      'The resistance to scratching',
    ],
    answer: 0,
    explanation:
      'Ductility is usually reported as percent elongation or percent reduction in area in a tensile test. Brittle materials have very little.',
  },
  {
    id: 'ph-008',
    nodeId: 'plasticity-hardness',
    type: 'trend',
    prompt: 'Compare deforming the same metal at room temperature and well above its recrystallization temperature (hot working).',
    change: 'the working temperature increases',
    target: 'the stress needed for plastic flow',
    answer: 'decreases',
    explanation:
      'At high temperature, thermal activation helps dislocations move and recovery and recrystallization remove strain hardening. That is why large shape changes are done hot.',
  },
  {
    id: 'ph-009',
    nodeId: 'plasticity-hardness',
    type: 'multiple_choice',
    prompt: 'What is resilience?',
    options: [
      'The energy a material absorbs while deforming elastically (the area under the elastic part of the curve)',
      'The total energy absorbed up to fracture',
      'The maximum stress before necking',
      'The ability to resist crack growth',
    ],
    answer: 0,
    explanation:
      'Resilience matters for springs, which must store energy and release it without permanent deformation. Toughness is the total energy absorbed up to fracture, including plastic deformation.',
  },
  {
    id: 'ph-010',
    nodeId: 'plasticity-hardness',
    type: 'cause_effect',
    prompt: 'Select every correct statement.',
    scenario: 'A copper wire is bent back and forth at room temperature. It gets harder to bend, then breaks.',
    options: [
      'It strain hardened because its dislocation density increased',
      'Its ductility decreased with each bend',
      'It got harder because it recrystallized',
      'Annealing the wire before it broke would have restored its ductility',
    ],
    answers: [0, 1, 3],
    explanation:
      'Repeated bending is cold work: dislocations multiply, the wire strengthens and its remaining ductility is used up until it cracks. Recrystallization softens a metal and needs heating; annealing would have reset it.',
  },
]

const fracture: Question[] = [
  {
    id: 'ft-001',
    nodeId: 'fracture-toughness',
    type: 'trend',
    prompt: 'A plate made of a material with a fixed fracture toughness K_Ic contains a crack.',
    formula: 'stress-intensity',
    change: 'the crack length a increases',
    target: 'the stress σ needed to cause fracture',
    answer: 'decreases',
    explanation:
      'Rearranging gives σ = K_Ic / (Y√(πa)). Longer cracks concentrate stress more, so less applied stress is needed to break the part. That is why inspecting for cracks matters.',
  },
  {
    id: 'ft-002',
    nodeId: 'fracture-toughness',
    type: 'trend',
    prompt: 'Two plates have the same crack size and geometry.',
    formula: 'stress-intensity',
    change: 'the plate is made of a material with a higher K_Ic',
    target: 'the stress the plate can carry before fracture',
    answer: 'increases',
    explanation:
      'σ at fracture is proportional to K_Ic. Tough metals often have K_Ic above 50 MPa·√m, while ceramics and glasses are usually below 5 MPa·√m.',
  },
  {
    id: 'ft-003',
    nodeId: 'fracture-toughness',
    type: 'multiple_choice',
    prompt: 'What do the fracture surfaces of ductile metals typically show under the SEM?',
    options: [
      'Dimples from microvoids that grew and joined, often in a cup-and-cone shape',
      'Flat, shiny cleavage facets',
      'Beach marks',
      'A perfectly smooth glassy surface',
    ],
    answer: 0,
    explanation:
      'Ductile fracture starts with voids forming at inclusions, which grow and link up under plastic strain. Each void leaves a dimple on the fracture surface.',
  },
  {
    id: 'ft-004',
    nodeId: 'fracture-toughness',
    type: 'multiple_choice',
    prompt: 'How does brittle fracture typically happen in crystalline metals?',
    options: [
      'By cleavage: cracks run along specific crystal planes with very little plastic deformation',
      'By extensive necking before failure',
      'By slow void growth',
      'By melting at the crack tip',
    ],
    answer: 0,
    explanation:
      'In cleavage, bonds break across a crystal plane, giving flat facets and "river" patterns. When the crack runs along grain boundaries instead, it is called intergranular fracture.',
  },
  {
    id: 'ft-005',
    nodeId: 'fracture-toughness',
    type: 'true_false',
    prompt: 'Sharp cracks and notches concentrate stress, so the local stress at a crack tip can be far higher than the applied stress.',
    answer: true,
    explanation:
      'The stress near a crack tip rises with the square root of the crack length divided by the tip radius. This explains why real materials break far below their theoretical strength.',
  },
  {
    id: 'ft-006',
    nodeId: 'fracture-toughness',
    type: 'trend',
    prompt: 'Think about a notch machined into a loaded part.',
    change: 'the radius at the tip of the notch gets smaller (the notch gets sharper)',
    target: 'the stress concentration at the notch',
    answer: 'increases',
    explanation:
      'The maximum stress grows as the tip radius shrinks. Designers use generous fillet radii and avoid sharp corners for this reason.',
  },
  {
    id: 'ft-007',
    nodeId: 'fracture-toughness',
    type: 'multiple_choice',
    prompt: 'Many BCC steels become brittle when cold. What is this behavior called?',
    options: ['Ductile-to-brittle transition', 'Strain hardening', 'Creep', 'Recrystallization'],
    answer: 0,
    explanation:
      'Below the DBTT, BCC metals absorb little energy and fail by cleavage. The transition is measured with impact tests over a range of temperatures.',
  },
  {
    id: 'ft-008',
    nodeId: 'fracture-toughness',
    type: 'multiple_choice',
    prompt: 'Which test is used to find the ductile-to-brittle transition temperature?',
    options: ['Charpy V-notch impact test', 'Vickers hardness test', 'Tensile test at room temperature', 'X-ray diffraction'],
    answer: 0,
    explanation:
      'A pendulum breaks notched bars tested at different temperatures. Plotting absorbed energy against temperature shows a sharp drop at the DBTT.',
  },
  {
    id: 'ft-009',
    nodeId: 'fracture-toughness',
    type: 'cause_effect',
    prompt: 'Select every factor that contributed.',
    scenario: 'During the Second World War, several welded steel Liberty ships cracked in two in cold seas.',
    options: [
      'The low water temperature put the steel below its ductile-to-brittle transition',
      'Welds and sharp hatch corners concentrated stress and started cracks',
      'The steel was FCC, so it had no transition',
      'Welding made a continuous hull, so a running crack was not stopped at riveted joints',
    ],
    answers: [0, 1, 3],
    explanation:
      'The ships combined a steel with a relatively high DBTT, sharp stress concentrations and all-welded hulls where cracks could run continuously. Ship steel is BCC (ferritic), which is why it showed a transition.',
  },
  {
    id: 'ft-010',
    nodeId: 'fracture-toughness',
    type: 'true_false',
    prompt: 'FCC metals such as aluminum and copper do not show a sharp ductile-to-brittle transition.',
    answer: true,
    explanation:
      'FCC metals keep many easy slip systems even at very low temperatures, so they stay ductile. That is why aluminum alloys and austenitic stainless steels are used for cryogenic tanks.',
  },
]

const fatigueCreep: Question[] = [
  {
    id: 'fcr-001',
    nodeId: 'fatigue-creep',
    type: 'multiple_choice',
    prompt: 'Fatigue failure happens under:',
    options: [
      'Repeated (cyclic) stresses, often well below the yield strength',
      'A single load above the tensile strength',
      'Constant load at high temperature',
      'Chemical attack without any load',
    ],
    answer: 0,
    explanation:
      'Each cycle grows a small crack a tiny amount, until the remaining section breaks suddenly. Fatigue causes a large share of mechanical failures in service.',
  },
  {
    id: 'fcr-002',
    nodeId: 'fatigue-creep',
    type: 'true_false',
    prompt:
      'Steels often have a fatigue (endurance) limit, a stress below which they can in principle survive unlimited cycles. Most aluminum alloys do not.',
    answer: true,
    explanation:
      'The S–N curve of many steels flattens out. For aluminum alloys it keeps falling, so designers instead quote a fatigue strength at a set number of cycles, such as 10⁷.',
  },
  {
    id: 'fcr-003',
    nodeId: 'fatigue-creep',
    type: 'multiple_choice',
    prompt: 'Beach marks and striations on a fracture surface show that the part failed by:',
    options: ['Fatigue', 'Creep', 'Ductile overload', 'Corrosion only'],
    answer: 0,
    explanation:
      'Beach marks (visible to the eye) show where the crack front stopped and restarted. Striations (seen in the SEM) can show the advance in individual load cycles.',
  },
  {
    id: 'fcr-004',
    nodeId: 'fatigue-creep',
    type: 'cause_effect',
    prompt: 'Select every change that would improve fatigue life.',
    scenario: 'A steel spring keeps failing by fatigue.',
    options: [
      'Shot peening the surface to create compressive residual stress',
      'Polishing the surface to remove scratches',
      'Adding a sharp notch to the spring',
      'Hardening the surface by carburizing or nitriding',
    ],
    answers: [0, 1, 3],
    explanation:
      'Fatigue cracks usually start at the surface. Compressive surface stress, a smoother finish and a harder case all delay crack initiation. Notches concentrate stress and make it worse.',
  },
  {
    id: 'fcr-005',
    nodeId: 'fatigue-creep',
    type: 'trend',
    prompt: 'Think about a part loaded with a cyclic stress of fixed amplitude.',
    change: 'the mean (average) stress of the cycle is increased',
    target: 'the fatigue life',
    answer: 'decreases',
    explanation:
      'A higher tensile mean stress keeps the crack open for more of each cycle, so it grows faster. That is why compressive residual stresses help.',
  },
  {
    id: 'fcr-006',
    nodeId: 'fatigue-creep',
    type: 'multiple_choice',
    prompt: 'Above roughly what temperature does creep become important for metals?',
    options: ['About 0.4 of the absolute melting temperature (0.4 T_m)', 'Only at the melting point', 'Below room temperature', 'About 0.05 T_m'],
    answer: 0,
    explanation:
      'Above about 0.4 T_m (in kelvin), diffusion is fast enough for dislocation climb and grain boundary sliding. Lead creeps at room temperature for this reason, while steel needs several hundred °C.',
  },
  {
    id: 'fcr-007',
    nodeId: 'fatigue-creep',
    type: 'trend',
    prompt: 'A turbine part creeps at a constant temperature.',
    formula: 'creep-rate',
    change: 'the applied stress σ increases',
    target: 'the steady-state creep rate',
    answer: 'increases',
    explanation:
      'The creep rate goes as σⁿ with n often between 3 and 8, so even a small stress increase raises the creep rate a lot.',
  },
  {
    id: 'fcr-008',
    nodeId: 'fatigue-creep',
    type: 'trend',
    prompt: 'A turbine part creeps at a constant stress.',
    formula: 'creep-rate',
    change: 'the temperature T increases',
    target: 'the steady-state creep rate',
    answer: 'increases',
    explanation:
      'The Arrhenius term exp(−Q_c/(R·T)) grows quickly with T because creep relies on diffusion. A few tens of degrees can shorten creep life dramatically.',
  },
  {
    id: 'fcr-009',
    nodeId: 'fatigue-creep',
    type: 'matching',
    prompt: 'Match each creep stage to its description.',
    pairs: [
      { left: 'Primary creep', right: 'Creep rate decreases as the material strain hardens' },
      { left: 'Secondary (steady-state) creep', right: 'Nearly constant rate: hardening and recovery balance' },
      { left: 'Tertiary creep', right: 'Rate accelerates as voids, cracks and necking lead to rupture' },
    ],
    explanation:
      'Design is usually based on the steady-state creep rate or the time to rupture. Secondary creep often makes up most of the life.',
  },
  {
    id: 'fcr-010',
    nodeId: 'fatigue-creep',
    type: 'multiple_choice',
    prompt: 'Why are the hottest jet engine turbine blades made as single crystals?',
    options: [
      'With no grain boundaries, there is no grain boundary sliding or cavitation, so creep resistance is much better',
      'Single crystals are cheaper to make',
      'Single crystals have no dislocations at all',
      'Single crystals melt at a much lower temperature',
    ],
    answer: 0,
    explanation:
      'At high temperature, grain boundaries are weak spots where sliding and voids start. Removing them, and aligning the crystal along the blade, greatly extends creep life.',
  },
]

export const propertiesQuestions: Question[] = [...stressStrain, ...plasticity, ...fracture, ...fatigueCreep]
