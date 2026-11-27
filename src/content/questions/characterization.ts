import type { Question } from '../types'

// Core · Characterization branch.
// Sources: Callister & Rethwisch (ch. 3, 4, 6, 8); Cullity & Stock, Elements of X-Ray Diffraction;
// Goldstein et al., Scanning Electron Microscopy and X-Ray Microanalysis.

const microscopy: Question[] = [
  {
    id: 'mc-001',
    nodeId: 'microscopy',
    type: 'trend',
    prompt: 'The finest detail a microscope can show is limited by diffraction.',
    formula: 'resolution-limit',
    change: 'the wavelength λ used for imaging gets shorter',
    target: 'the smallest resolvable distance d',
    answer: 'decreases',
    explanation:
      'd is proportional to λ, so a shorter wavelength resolves finer detail. That is the main reason electron microscopes outperform light microscopes.',
  },
  {
    id: 'mc-002',
    nodeId: 'microscopy',
    type: 'trend',
    prompt: 'Compare two objective lenses on the same light microscope.',
    formula: 'resolution-limit',
    change: 'the numerical aperture NA of the objective lens is higher',
    target: 'the smallest resolvable distance d',
    answer: 'decreases',
    explanation:
      'NA is in the denominator, so a higher NA gives a smaller d, meaning better resolution. Oil-immersion objectives raise NA above 1.',
  },
  {
    id: 'mc-003',
    nodeId: 'microscopy',
    type: 'multiple_choice',
    prompt: 'Why can an electron microscope resolve much finer detail than a light microscope?',
    options: [
      'Electrons have a far shorter wavelength than visible light',
      'Electrons are heavier than atoms',
      'Electron microscopes use stronger glass lenses',
      'Electrons are not affected by diffraction',
    ],
    answer: 0,
    explanation:
      'Accelerated electrons have wavelengths of a few picometers, compared with about 400–700 nm for visible light. Light microscopes are limited to roughly 0.2 µm, while TEM can reach atomic resolution.',
  },
  {
    id: 'mc-004',
    nodeId: 'microscopy',
    type: 'matching',
    prompt: 'Match each signal used in the SEM to the information it gives.',
    pairs: [
      { left: 'Secondary electrons (SE)', right: 'Surface topography' },
      { left: 'Backscattered electrons (BSE)', right: 'Atomic-number (composition) contrast' },
      { left: 'Characteristic X-rays (EDS)', right: 'Which elements are present' },
      { left: 'Diffracted backscattered electrons (EBSD)', right: 'Crystal orientation of each grain' },
    ],
    explanation:
      'Low-energy secondary electrons escape only from near the surface, so they show shape. Heavier elements backscatter more electrons and look brighter in BSE images. X-ray energies identify elements, and EBSD patterns reveal crystal orientation.',
  },
  {
    id: 'mc-005',
    nodeId: 'microscopy',
    type: 'true_false',
    prompt: 'TEM needs very thin samples because the electrons must pass through the specimen.',
    answer: true,
    explanation:
      'TEM samples are usually thinner than about 100 nm, prepared by electropolishing, ion milling or a focused ion beam. In the SEM, by contrast, the beam scans the surface of a bulk sample.',
  },
  {
    id: 'mc-006',
    nodeId: 'microscopy',
    type: 'multiple_choice',
    prompt: 'What is the usual order of preparing a metallographic sample?',
    options: [
      'Section → mount → grind → polish → etch',
      'Etch → polish → grind → mount → section',
      'Polish → section → etch → grind',
      'Grind → etch → section → mount',
    ],
    answer: 0,
    explanation:
      'Cut a representative piece, mount it for handling, grind with progressively finer abrasives, polish to a mirror finish, then etch to reveal grain boundaries and phases.',
  },
  {
    id: 'mc-007',
    nodeId: 'microscopy',
    type: 'multiple_choice',
    prompt: 'Which technique can directly image individual dislocations?',
    options: ['TEM', 'Optical microscopy', 'Hardness testing', 'Density measurement'],
    answer: 0,
    explanation:
      'The strain field around a dislocation changes how electrons diffract, so dislocations appear as dark lines in TEM images. Optical microscopes cannot resolve them.',
  },
  {
    id: 'mc-008',
    nodeId: 'microscopy',
    type: 'true_false',
    prompt:
      'Non-conductive samples such as ceramics and polymers are often coated with a thin layer of gold or carbon before SEM imaging to prevent charging.',
    answer: true,
    explanation:
      'Without a conductive path, electrons build up on the surface and distort the image. A few nanometers of coating carries the charge away. Low-vacuum SEMs offer another solution.',
  },
  {
    id: 'mc-009',
    nodeId: 'microscopy',
    type: 'multiple_choice',
    prompt: 'Why do optical microscopes for metals use reflected light instead of transmitted light?',
    options: [
      'Metals are opaque, so light cannot pass through them',
      'Reflected light has a shorter wavelength',
      'Transmitted light damages metals',
      'Metals are transparent at visible wavelengths',
    ],
    answer: 0,
    explanation:
      'Free electrons in metals absorb and reflect visible light. Metallographic microscopes therefore shine light onto the polished surface and collect what is reflected.',
  },
  {
    id: 'mc-010',
    nodeId: 'microscopy',
    type: 'trend',
    prompt: 'An image is enlarged beyond what the lens can actually resolve.',
    formula: 'resolution-limit',
    change: 'the magnification keeps increasing beyond the resolution limit',
    target: 'the amount of real detail you can see',
    answer: 'no_change',
    explanation:
      'This is "empty magnification". The image gets bigger but blurrier, because d is set by λ and NA, not by magnification.',
  },
]

const xrd: Question[] = [
  {
    id: 'xr-001',
    nodeId: 'xrd',
    type: 'multiple_choice',
    prompt: 'Why do crystals diffract X-rays at particular angles?',
    options: [
      'The spacing between atomic planes is similar to the X-ray wavelength, so reflected waves add up only at certain angles',
      'X-rays bounce off the crystal surface like a mirror at every angle',
      'X-rays are absorbed only by grain boundaries',
      'Amorphous materials diffract more strongly than crystals',
    ],
    answer: 0,
    explanation:
      'Waves scattered from parallel planes reinforce each other only when the extra path length, 2d sin θ, equals a whole number of wavelengths. That is Bragg’s law.',
  },
  {
    id: 'xr-002',
    nodeId: 'xrd',
    type: 'trend',
    prompt: 'The X-ray wavelength and the order n are fixed.',
    formula: 'bragg',
    change: 'the spacing d of the diffracting planes is larger',
    target: 'the diffraction angle θ',
    answer: 'decreases',
    explanation:
      'sin θ = nλ / 2d, so a larger d gives a smaller sin θ and a smaller angle. Widely spaced planes diffract at low angles.',
  },
  {
    id: 'xr-003',
    nodeId: 'xrd',
    type: 'trend',
    prompt: 'Adding a larger solute atom expands a cubic metal’s lattice, so every plane spacing d grows.',
    formula: 'bragg',
    change: 'the lattice parameter increases',
    target: 'the 2θ positions of the diffraction peaks',
    answer: 'decreases',
    explanation:
      'Larger d means smaller θ, so all peaks shift to lower 2θ. Peak shifts are used to measure lattice parameters, solute content and residual strain.',
  },
  {
    id: 'xr-004',
    nodeId: 'xrd',
    type: 'trend',
    prompt: 'The same sample is measured with two different X-ray sources.',
    formula: 'bragg',
    change: 'a source with a shorter wavelength λ is used',
    target: 'the angle θ at which a given plane diffracts',
    answer: 'decreases',
    explanation:
      'sin θ = nλ / 2d, so a shorter λ gives smaller angles for every plane. That is why peak positions are always quoted together with the radiation used (e.g. Cu Kα).',
  },
  {
    id: 'xr-005',
    nodeId: 'xrd',
    type: 'true_false',
    prompt: 'An amorphous material such as window glass gives broad humps rather than sharp diffraction peaks.',
    answer: true,
    explanation:
      'Without long-range order there are no regularly repeating planes, only typical nearest-neighbor distances. That produces broad scattering humps, which is how XRD tells amorphous and crystalline materials apart.',
  },
  {
    id: 'xr-006',
    nodeId: 'xrd',
    type: 'multiple_choice',
    prompt: 'What is XRD most commonly used for in materials engineering?',
    options: [
      'Identifying the crystalline phases present, by comparing peak positions and intensities with reference patterns',
      'Measuring hardness',
      'Imaging the grain structure directly',
      'Measuring electrical resistivity',
    ],
    answer: 0,
    explanation:
      'Each crystalline phase has a characteristic "fingerprint" pattern. Databases of reference patterns let you identify, for example, retained austenite in a steel or the phases in a ceramic.',
  },
  {
    id: 'xr-007',
    nodeId: 'xrd',
    type: 'trend',
    prompt: 'Peak width also carries information about the microstructure.',
    change: 'the crystallite (grain) size becomes very small, in the nanometer range',
    target: 'the width of the diffraction peaks',
    answer: 'increases',
    explanation:
      'Very small crystals have too few planes to cancel diffraction sharply away from the exact Bragg angle, so peaks broaden. The Scherrer equation uses this to estimate crystallite size.',
  },
  {
    id: 'xr-008',
    nodeId: 'xrd',
    type: 'true_false',
    prompt: 'In BCC metals, not every set of planes gives a diffraction peak: reflections appear only when h + k + l is even.',
    answer: true,
    explanation:
      'For other planes, waves scattered by the body-center atoms cancel those from the corner atoms. In FCC, peaks appear only when h, k and l are all odd or all even. These rules help identify the crystal structure.',
  },
  {
    id: 'xr-009',
    nodeId: 'xrd',
    type: 'multiple_choice',
    prompt: 'How can XRD measure residual stress in a part?',
    options: [
      'Elastic strain changes the plane spacing d, which shifts the peak positions',
      'Stress changes the X-ray wavelength',
      'Stressed regions do not diffract at all',
      'Stress changes the color of the sample',
    ],
    answer: 0,
    explanation:
      'Residual stress stretches or compresses the lattice. Measuring how d changes with the tilt of the sample gives the strain, and with the elastic constants, the stress.',
  },
  {
    id: 'xr-010',
    nodeId: 'xrd',
    type: 'matching',
    prompt: 'Match each question to the best technique for answering it.',
    pairs: [
      { left: 'Which crystalline phases are in this powder?', right: 'XRD' },
      { left: 'What does this fracture surface look like up close?', right: 'SEM' },
      { left: 'Which elements are in this small particle?', right: 'EDS' },
      { left: 'Where are the dislocations in this grain?', right: 'TEM' },
    ],
    explanation:
      'Choosing the right tool is half of characterization: diffraction for phases, SEM imaging for surfaces, X-ray spectroscopy for elements, and TEM for defects at the nanometer scale.',
  },
]

const testing: Question[] = [
  {
    id: 'mt-001',
    nodeId: 'mechanical-testing',
    type: 'multiple_choice',
    prompt: 'Which property does a standard tensile test not give you?',
    options: ['Yield strength', 'Ultimate tensile strength', 'Percent elongation', 'Impact energy'],
    answer: 3,
    explanation:
      'A tensile test gives E, yield strength, ultimate tensile strength and ductility. Impact energy needs a high-rate test on a notched specimen, such as the Charpy test.',
  },
  {
    id: 'mt-002',
    nodeId: 'mechanical-testing',
    type: 'multiple_choice',
    prompt: 'What does a Charpy impact test measure?',
    options: [
      'The energy absorbed when a pendulum breaks a notched specimen',
      'The depth of an indentation',
      'The number of cycles to failure',
      'The elastic modulus',
    ],
    answer: 0,
    explanation:
      'The pendulum swings lower after breaking the specimen, and the lost height gives the absorbed energy. It is a quick comparison of toughness under impact.',
  },
  {
    id: 'mt-003',
    nodeId: 'mechanical-testing',
    type: 'trend',
    prompt: 'A plain carbon (BCC) steel is Charpy tested at several temperatures.',
    change: 'the test temperature drops below the ductile-to-brittle transition',
    target: 'the absorbed impact energy',
    answer: 'decreases',
    explanation:
      'Below the DBTT, fracture changes from ductile (dimpled, energy-absorbing) to brittle cleavage, and the absorbed energy drops sharply.',
  },
  {
    id: 'mt-004',
    nodeId: 'mechanical-testing',
    type: 'true_false',
    prompt: 'Hardness tests are quick, cheap and nearly non-destructive, which makes them popular for quality control.',
    answer: true,
    explanation:
      'A hardness test leaves only a small dent and takes seconds, and hardness correlates with strength in many alloys. That makes it ideal for checking heat-treated parts.',
  },
  {
    id: 'mt-005',
    nodeId: 'mechanical-testing',
    type: 'multiple_choice',
    prompt: 'How are fatigue test results usually presented?',
    options: [
      'As an S–N curve: stress amplitude against number of cycles to failure (log scale)',
      'As a stress–strain curve',
      'As a phase diagram',
      'As a TTT diagram',
    ],
    answer: 0,
    explanation:
      'Specimens are cycled at different stress amplitudes until they break. Plotting stress against log cycles gives the S–N (Wöhler) curve, which shows any fatigue limit.',
  },
  {
    id: 'mt-006',
    nodeId: 'mechanical-testing',
    type: 'multiple_choice',
    prompt: 'How is a typical creep test run?',
    options: [
      'A constant load is held at high temperature, and strain is recorded over time',
      'The specimen is struck with a pendulum',
      'The load is cycled rapidly at room temperature',
      'A diamond is pressed into the surface',
    ],
    answer: 0,
    explanation:
      'Plotting strain against time gives the creep curve with its primary, secondary and tertiary stages. Stress-rupture tests record the time to failure.',
  },
  {
    id: 'mt-007',
    nodeId: 'mechanical-testing',
    type: 'trend',
    prompt: 'A metal is tensile tested at different speeds.',
    change: 'the strain rate increases',
    target: 'the measured yield strength (for most metals)',
    answer: 'increases',
    explanation:
      'Faster loading gives dislocations less time for thermally activated motion, so most metals appear somewhat stronger. That is why test standards specify the strain rate.',
  },
  {
    id: 'mt-008',
    nodeId: 'mechanical-testing',
    type: 'cause_effect',
    prompt: 'Select every correct requirement.',
    scenario: 'An engineer needs to measure the plane-strain fracture toughness K_Ic of a steel.',
    options: [
      'Use a specimen with a sharp pre-crack (usually grown by fatigue)',
      'Make the specimen thick enough for plane-strain conditions',
      'Use a smooth, unnotched tensile bar',
      'A hardness test alone is enough',
    ],
    answers: [0, 1],
    explanation:
      'K_Ic describes resistance to a sharp crack, so the specimen needs one. If the specimen is too thin, the crack tip deforms more freely (plane stress) and gives a higher, non-conservative value.',
  },
  {
    id: 'mt-009',
    nodeId: 'mechanical-testing',
    type: 'true_false',
    prompt: 'Ceramics are usually tested in bending rather than tension, because brittle specimens are hard to grip and align for tensile tests.',
    answer: true,
    explanation:
      'Gripping a brittle specimen can crack it, and slight misalignment adds bending stress. A three- or four-point bend test gives the flexural strength (modulus of rupture) more reliably.',
  },
  {
    id: 'mt-010',
    nodeId: 'mechanical-testing',
    type: 'matching',
    prompt: 'Match each test to the property it measures.',
    pairs: [
      { left: 'Tensile test', right: 'Yield and ultimate tensile strength' },
      { left: 'Charpy impact test', right: 'Impact energy' },
      { left: 'Rockwell test', right: 'Hardness' },
      { left: 'Rotating-beam test', right: 'Fatigue life (S–N curve)' },
    ],
    explanation:
      'Each test loads the material in a different way. Choose the one that matches the service conditions: steady load, impact, contact or cyclic loading.',
  },
]

export const characterizationQuestions: Question[] = [...microscopy, ...xrd, ...testing]
