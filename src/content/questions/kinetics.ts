import type { Question } from '../types'

// Core · Kinetics branch.
// Sources: Callister & Rethwisch (ch. 5, 10); Porter & Easterling (ch. 2, 4, 5); Askeland (ch. 5, 9, 12).

const diffusion: Question[] = [
  {
    id: 'df-001',
    nodeId: 'diffusion',
    type: 'trend',
    prompt: 'Diffusion is thermally activated.',
    formula: 'arrhenius-diffusion',
    change: 'the temperature T increases',
    target: 'the diffusion coefficient D',
    answer: 'increases',
    explanation:
      'A higher T makes −Q/(R·T) less negative, so D rises exponentially. More atoms have enough thermal energy to jump past the energy barrier.',
  },
  {
    id: 'df-002',
    nodeId: 'diffusion',
    type: 'trend',
    prompt: 'Compare two diffusion systems at the same temperature with similar D₀.',
    formula: 'arrhenius-diffusion',
    change: 'the activation energy Q is larger',
    target: 'the diffusion coefficient D',
    answer: 'decreases',
    explanation:
      'A larger Q makes the exponent more negative, so fewer atoms can make a successful jump. Substitutional diffusion usually has a higher Q than interstitial diffusion and is slower.',
  },
  {
    id: 'df-003',
    nodeId: 'diffusion',
    type: 'trend',
    prompt: 'Gas diffuses through a metal plate under steady-state conditions.',
    formula: 'fick-first-law',
    change: 'the concentration gradient across the plate becomes steeper',
    target: 'the magnitude of the diffusion flux J',
    answer: 'increases',
    explanation:
      'J is proportional to dC/dx. A steeper gradient (bigger concentration difference or thinner plate) drives more atoms through per second. The minus sign just means flow goes from high to low concentration.',
  },
  {
    id: 'df-004',
    nodeId: 'diffusion',
    type: 'trend',
    prompt: 'A steel gear is carburized at a fixed temperature, so D is constant.',
    formula: 'diffusion-distance',
    change: 'the carburizing time is made four times longer',
    target: 'the depth of the carburized case',
    answer: 'increases',
    explanation:
      'Depth grows with √t, so four times the time gives about twice the depth, not four times. Diffusion slows as the gradient flattens.',
  },
  {
    id: 'df-005',
    nodeId: 'diffusion',
    type: 'multiple_choice',
    prompt: 'Why does carbon diffuse much faster in iron than iron atoms do (self-diffusion)?',
    options: [
      'Carbon diffuses interstitially, so it does not need a neighboring vacancy to jump',
      'Carbon atoms are heavier than iron atoms',
      'Carbon forms ionic bonds with iron',
      'Iron atoms cannot diffuse at all',
    ],
    answer: 0,
    explanation:
      'Small interstitial atoms almost always have an empty neighboring interstitial site to jump into. Substitutional atoms (including iron itself) must wait for a vacancy next to them, which is rare.',
  },
  {
    id: 'df-006',
    nodeId: 'diffusion',
    type: 'true_false',
    prompt: 'Diffusion is generally faster along grain boundaries and free surfaces than through the bulk crystal.',
    answer: true,
    explanation:
      'Boundaries and surfaces have more open, disordered atomic packing, so the activation energy for jumps is lower. These "short-circuit" paths matter most at lower temperatures.',
  },
  {
    id: 'df-007',
    nodeId: 'diffusion',
    type: 'multiple_choice',
    prompt: "When does Fick's first law apply directly?",
    options: [
      'Steady-state diffusion, where the concentration profile does not change with time',
      'Only when the diffusion coefficient is zero',
      'Only to liquids',
      'When the concentration at each point changes with time',
    ],
    answer: 0,
    explanation:
      "Fick's first law relates flux to the gradient at steady state (e.g. hydrogen passing through a membrane). When concentrations change with time, as in carburizing, Fick's second law is used.",
  },
  {
    id: 'df-008',
    nodeId: 'diffusion',
    type: 'multiple_choice',
    prompt: 'What does carburizing a low-carbon steel gear achieve?',
    options: [
      'Carbon diffuses into the surface at high temperature, so after quenching the surface is hard and wear-resistant',
      'It removes carbon from the surface to make it soft',
      'It coats the gear with a polymer',
      'It makes the whole gear brittle all the way through',
    ],
    answer: 0,
    explanation:
      'The part is held in a carbon-rich atmosphere in the austenite range. The high-carbon surface becomes a hard case after quenching, while the low-carbon core stays tough.',
  },
  {
    id: 'df-009',
    nodeId: 'diffusion',
    type: 'cause_effect',
    prompt: 'Select every change that would help.',
    scenario: 'A heat treater wants a deeper carburized case in the same amount of time.',
    options: [
      'Raise the carburizing temperature',
      'Raise the carbon concentration at the surface (a richer atmosphere)',
      'Lower the carburizing temperature',
      'Cool the part during carburizing',
    ],
    answers: [0, 1],
    explanation:
      'Higher temperature increases D exponentially. A higher surface concentration increases the driving gradient, so a given carbon level reaches deeper. Lowering the temperature slows diffusion.',
  },
  {
    id: 'df-010',
    nodeId: 'diffusion',
    type: 'true_false',
    prompt:
      'At the same temperature, carbon diffuses faster in BCC iron (ferrite) than in FCC iron (austenite), even though austenite can dissolve much more carbon.',
    answer: true,
    explanation:
      'BCC is less densely packed, so the activation energy for carbon jumps is lower (about 87 kJ/mol vs about 148 kJ/mol in FCC). Carburizing is still done in the austenite range because austenite dissolves far more carbon and the temperature is higher.',
  },
]

const nucleation: Question[] = [
  {
    id: 'ng-001',
    nodeId: 'nucleation-growth',
    type: 'trend',
    prompt: 'A liquid is cooled below its melting point. ΔG_v becomes more negative as undercooling increases.',
    formula: 'critical-radius',
    change: 'the undercooling increases',
    target: 'the critical radius r*',
    answer: 'decreases',
    explanation:
      'A larger |ΔG_v| in the denominator makes r* smaller. With a stronger driving force, smaller clusters of atoms are already stable enough to grow.',
  },
  {
    id: 'ng-002',
    nodeId: 'nucleation-growth',
    type: 'trend',
    prompt: 'The energy barrier depends strongly on the driving force.',
    formula: 'nucleation-barrier',
    change: 'the undercooling increases (|ΔG_v| becomes larger)',
    target: 'the nucleation barrier ΔG*',
    answer: 'decreases',
    explanation:
      'ΔG* depends on 1/ΔG_v², so a bigger driving force lowers the barrier quickly. That is why nucleation rate rises sharply once a melt is undercooled enough.',
  },
  {
    id: 'ng-003',
    nodeId: 'nucleation-growth',
    type: 'trend',
    prompt: 'Compare two transformations with the same driving force ΔG_v.',
    formula: 'critical-radius',
    change: 'the interface energy γ between the new and old phase is higher',
    target: 'the critical radius r*',
    answer: 'increases',
    explanation:
      'r* is proportional to γ. Creating more costly interface means a nucleus must be larger before its volume energy gain outweighs its surface cost.',
  },
  {
    id: 'ng-004',
    nodeId: 'nucleation-growth',
    type: 'multiple_choice',
    prompt: 'Why is heterogeneous nucleation easier than homogeneous nucleation?',
    options: [
      'An existing surface (mold wall, particle) replaces part of the new interface, lowering the energy barrier',
      'It needs a higher undercooling',
      'It happens only in pure metals',
      'It increases the interface energy',
    ],
    answer: 0,
    explanation:
      'A nucleus forming on a surface that it wets needs less new interface, so ΔG* is reduced by a factor that depends on the contact angle. In practice almost all nucleation is heterogeneous.',
  },
  {
    id: 'ng-005',
    nodeId: 'nucleation-growth',
    type: 'true_false',
    prompt: 'Clusters smaller than the critical radius r* tend to dissolve, while nuclei larger than r* tend to grow.',
    answer: true,
    explanation:
      'Below r*, adding atoms raises the total free energy because surface cost dominates. Above r*, adding atoms lowers it because volume gain dominates, so the nucleus keeps growing.',
  },
  {
    id: 'ng-006',
    nodeId: 'nucleation-growth',
    type: 'multiple_choice',
    prompt: 'What do grain refiners (inoculants), such as Ti–B additions to molten aluminum, do?',
    options: [
      'Provide many heterogeneous nucleation sites, giving a finer grain size',
      'Raise the melting point of aluminum',
      'Prevent any nucleation, giving a single crystal',
      'Dissolve the oxide film on the melt',
    ],
    answer: 0,
    explanation:
      'Inoculant particles act as nucleation sites that work at small undercooling. Many grains start growing at once, so each ends up small, which improves strength and castability.',
  },
  {
    id: 'ng-007',
    nodeId: 'nucleation-growth',
    type: 'trend',
    prompt: 'Think about solidification close to the melting point.',
    change: 'the melt is cooled faster, reaching a larger undercooling',
    target: 'the nucleation rate',
    answer: 'increases',
    explanation:
      'More undercooling means a larger driving force and a smaller barrier, so many more nuclei form per second. The result is a finer grain size.',
  },
  {
    id: 'ng-008',
    nodeId: 'nucleation-growth',
    type: 'multiple_choice',
    prompt: 'How does the overall rate of a diffusional solid-state transformation usually change as the temperature is lowered below the equilibrium transformation temperature?',
    options: [
      'It first increases, then decreases: a maximum at intermediate temperature',
      'It only increases',
      'It only decreases',
      'It stays constant',
    ],
    answer: 0,
    explanation:
      'Just below the equilibrium temperature, the driving force is tiny. At low temperature, diffusion is very slow. The rate peaks in between, which gives the C-shaped curves on TTT diagrams.',
  },
  {
    id: 'ng-009',
    nodeId: 'nucleation-growth',
    type: 'trend',
    prompt: 'Transformation kinetics often follow the S-shaped Avrami curve.',
    formula: 'avrami',
    change: 'the rate constant k increases (for example, a more favorable temperature)',
    target: 'the time needed to reach 50% transformation',
    answer: 'decreases',
    explanation:
      'A larger k makes the exponent grow faster with time, so any given fraction transformed is reached sooner. The S-curve shifts to shorter times.',
  },
  {
    id: 'ng-010',
    nodeId: 'nucleation-growth',
    type: 'cause_effect',
    prompt: 'Select every correct statement.',
    scenario: 'A liquid metal is undercooled further and further below its melting point.',
    options: [
      'The driving force for solidification increases',
      'The critical nucleus size gets smaller',
      'Atomic mobility decreases',
      'The critical radius becomes infinitely large',
    ],
    answers: [0, 1, 2],
    explanation:
      'Undercooling raises |ΔG_v|, which shrinks r* and ΔG*. Lower temperature also slows atomic motion. These competing effects shape transformation kinetics. r* is infinite only at the melting point itself, where ΔG_v = 0.',
  },
]

const ttt: Question[] = [
  {
    id: 'tt-001',
    nodeId: 'ttt-cct',
    type: 'pick_region',
    prompt: 'Where on this diagram is austenite the stable (equilibrium) phase?',
    diagram: 'ttt_eutectoid',
    answer: 'stable_austenite',
    explanation:
      'Above the eutectoid temperature (727 °C), austenite is the equilibrium phase for eutectoid steel and does not transform, no matter how long you wait.',
  },
  {
    id: 'tt-002',
    nodeId: 'ttt-cct',
    type: 'pick_region',
    prompt: 'Where does bainite form during isothermal holding?',
    diagram: 'ttt_eutectoid',
    answer: 'bainite',
    explanation:
      'Bainite forms between roughly 215 and 540 °C in eutectoid steel: below the nose of the curve and above Mₛ. It is a fine mixture of ferrite and cementite (not lamellar like pearlite).',
  },
  {
    id: 'tt-003',
    nodeId: 'ttt-cct',
    type: 'pick_region',
    prompt: 'Where does martensite form?',
    diagram: 'ttt_eutectoid',
    answer: 'martensite',
    explanation:
      'Martensite forms when austenite is cooled below the martensite start temperature Mₛ fast enough to avoid the C-curve nose. It forms almost instantly as the temperature drops, rather than over time.',
  },
  {
    id: 'tt-004',
    nodeId: 'ttt-cct',
    type: 'multiple_choice',
    prompt: 'How does martensite form?',
    options: [
      'By a diffusionless shear transformation of austenite during rapid cooling',
      'By slow diffusion of carbon out of austenite',
      'By solidification of the liquid',
      'By recrystallization of cold-worked ferrite',
    ],
    answer: 0,
    explanation:
      'Atoms move cooperatively by small shear displacements, with no time for carbon to diffuse. The carbon is trapped, which distorts the lattice and makes martensite very hard.',
  },
  {
    id: 'tt-005',
    nodeId: 'ttt-cct',
    type: 'multiple_choice',
    prompt: 'What crystal structure does martensite in steel have?',
    options: ['BCT', 'FCC', 'HCP', 'Simple cubic'],
    answer: 0,
    explanation:
      'Trapped carbon atoms stretch the BCC lattice along one axis, making it body-centered tetragonal. The tetragonality increases with carbon content.',
  },
  {
    id: 'tt-006',
    nodeId: 'ttt-cct',
    type: 'true_false',
    prompt: 'On a TTT diagram, the left curve marks where the transformation starts and the right curve marks where it finishes.',
    answer: true,
    explanation:
      'At a given temperature, read left to right along the time axis: austenite until the start curve, a mix while transforming, and fully transformed after the finish curve. The 50% curve is often drawn in between.',
  },
  {
    id: 'tt-007',
    nodeId: 'ttt-cct',
    type: 'multiple_choice',
    prompt: 'Why does the transformation curve of a TTT diagram have a "nose" at intermediate temperature?',
    options: [
      'Near 727 °C the driving force is small; at low temperature diffusion is slow; so transformation is fastest in between',
      'Austenite melts at the nose temperature',
      'Martensite forms at the nose',
      'The nose is where carbon content is highest',
    ],
    answer: 0,
    explanation:
      'This is the nucleation-versus-diffusion trade-off. For eutectoid steel the nose is at about 540 °C, where transformation starts in under a second.',
  },
  {
    id: 'tt-008',
    nodeId: 'ttt-cct',
    type: 'trend',
    prompt: 'Eutectoid steel is transformed isothermally to pearlite at different temperatures above the nose.',
    change: 'the transformation temperature is lowered (closer to the nose)',
    target: 'the spacing between the ferrite and cementite plates in pearlite',
    answer: 'decreases',
    explanation:
      'At lower temperature, carbon can only diffuse short distances in the time available, so the plates form closer together. Fine pearlite is harder and stronger than coarse pearlite.',
  },
  {
    id: 'tt-009',
    nodeId: 'ttt-cct',
    type: 'multiple_choice',
    prompt: 'What is the difference between a TTT diagram and a CCT diagram?',
    options: [
      'TTT is for holding at a constant temperature; CCT is for continuous cooling at different rates',
      'TTT is for cast iron; CCT is for steel',
      'TTT shows composition; CCT shows temperature',
      'There is no difference',
    ],
    answer: 0,
    explanation:
      'Real parts usually cool continuously, so CCT diagrams are more practical for heat treatment. Their curves are shifted to longer times and lower temperatures compared with TTT curves.',
  },
  {
    id: 'tt-010',
    nodeId: 'ttt-cct',
    type: 'trend',
    prompt: 'Alloying elements such as Cr, Mo and Ni shift the pearlite and bainite curves to longer times.',
    change: 'the curves move to the right',
    target: 'the critical cooling rate needed to form martensite',
    answer: 'decreases',
    explanation:
      'With slower transformation, a slower quench can still miss the nose and form martensite. Thicker sections can be hardened all the way through, which means hardenability increases.',
  },
]

export const kineticsQuestions: Question[] = [...diffusion, ...nucleation, ...ttt]
