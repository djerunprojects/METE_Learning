import type { Question } from '../types'

// Disciplines · Functional Materials.
// Sources: Callister & Rethwisch (ch. 18–21); Kasap, Principles of Electronic Materials and Devices;
// Cullity & Graham, Introduction to Magnetic Materials.

const electrical: Question[] = [
  {
    id: 'ep-001',
    nodeId: 'electrical-properties',
    type: 'multiple_choice',
    prompt: 'Why do metals conduct electricity so well?',
    options: [
      'Their highest occupied energy band is only partly filled (or overlaps an empty band), so many electrons can move freely',
      'They have a very large band gap',
      'All their electrons are tightly bound',
      'They contain ions that move',
    ],
    answer: 0,
    explanation:
      'With empty states right next to filled ones, even a tiny electric field can accelerate electrons. Insulators and semiconductors have a gap that electrons must first jump across.',
  },
  {
    id: 'ep-002',
    nodeId: 'electrical-properties',
    type: 'multiple_choice',
    prompt: 'How do the band gaps of metals, semiconductors and insulators compare?',
    options: [
      'Metals: no gap; semiconductors: small gap (about 1 eV); insulators: large gap (several eV)',
      'All have the same band gap',
      'Metals have the largest gap',
      'Insulators have no gap',
    ],
    answer: 0,
    explanation:
      'Silicon’s gap is about 1.1 eV, so some electrons are thermally excited at room temperature. Diamond or alumina, with gaps over 5 eV, have almost none.',
  },
  {
    id: 'ep-003',
    nodeId: 'electrical-properties',
    type: 'trend',
    prompt: 'Conductivity depends on how many carriers there are and how easily they move.',
    formula: 'electrical-conductivity',
    change: 'the electron mobility μ_e increases',
    target: 'the conductivity σ',
    answer: 'increases',
    explanation:
      'σ is proportional to μ_e. Mobility falls when electrons are scattered more often, by lattice vibrations, impurities or defects.',
  },
  {
    id: 'ep-004',
    nodeId: 'electrical-properties',
    type: 'trend',
    prompt: 'A copper wire is heated.',
    change: 'the temperature increases',
    target: 'its electrical conductivity',
    answer: 'decreases',
    explanation:
      'Stronger lattice vibrations scatter electrons more, lowering mobility. The number of free electrons in a metal barely changes.',
  },
  {
    id: 'ep-005',
    nodeId: 'electrical-properties',
    type: 'trend',
    prompt: 'Compare copper samples of different purity at room temperature.',
    change: 'the impurity content increases',
    target: 'the electrical resistivity',
    answer: 'increases',
    explanation:
      'Impurity atoms disrupt the regular lattice and scatter electrons. That is why conductors use high-purity, oxygen-free copper.',
  },
  {
    id: 'ep-006',
    nodeId: 'electrical-properties',
    type: 'true_false',
    prompt: "Matthiessen's rule says a metal's total resistivity is the sum of contributions from thermal vibrations, impurities and deformation.",
    answer: true,
    explanation:
      'Each type of scattering adds its own resistivity. At very low temperature, the thermal part almost vanishes and impurities dominate.',
  },
  {
    id: 'ep-007',
    nodeId: 'electrical-properties',
    type: 'multiple_choice',
    prompt: 'Why are electrical conductors usually made from pure metals rather than strong alloys?',
    options: [
      'Alloying atoms scatter electrons and raise resistivity',
      'Alloys are always weaker',
      'Pure metals are cheaper in every case',
      'Alloys are not conductive at all',
    ],
    answer: 0,
    explanation:
      'There is a trade-off between strength and conductivity. When both are needed, special alloys such as dilute Cu–Cr or Cu–Be are used, often precipitation hardened so that most solute leaves the matrix.',
  },
  {
    id: 'ep-008',
    nodeId: 'electrical-properties',
    type: 'multiple_choice',
    prompt: 'What is a dielectric material?',
    options: [
      'An electrical insulator that can be polarized by an electric field, used in capacitors',
      'A very good conductor',
      'A magnetic material',
      'A semiconductor with doping',
    ],
    answer: 0,
    explanation:
      'Dielectrics store energy by polarizing. A higher dielectric constant gives a larger capacitance; barium titanate is a classic high-permittivity ceramic.',
  },
  {
    id: 'ep-009',
    nodeId: 'electrical-properties',
    type: 'multiple_choice',
    prompt: 'What is superconductivity?',
    options: [
      'Zero electrical resistance below a critical temperature',
      'Very high resistance at low temperature',
      'Conduction only at high temperature',
      'Conduction by ions',
    ],
    answer: 0,
    explanation:
      'Superconducting magnets in MRI scanners use Nb–Ti wire cooled with liquid helium. Some ceramic superconductors work at liquid-nitrogen temperature.',
  },
  {
    id: 'ep-010',
    nodeId: 'electrical-properties',
    type: 'trend',
    prompt: 'A copper wire is cold drawn.',
    change: 'the amount of cold work increases',
    target: 'the electrical resistivity',
    answer: 'increases',
    explanation:
      'Dislocations and other defects add scattering. The effect is small compared with impurities, but annealed copper conducts slightly better than hard-drawn copper.',
  },
]

const semis: Question[] = [
  {
    id: 'smc-001',
    nodeId: 'semiconductors',
    type: 'multiple_choice',
    prompt: 'What is an intrinsic semiconductor?',
    options: [
      'A pure semiconductor whose carriers come from electrons thermally excited across the band gap, giving equal numbers of electrons and holes',
      'A semiconductor heavily doped with phosphorus',
      'A metal',
      'An insulator with no electrons',
    ],
    answer: 0,
    explanation:
      'Each excited electron leaves a hole in the valence band, so n = p. Conductivity is set by the band gap and the temperature.',
  },
  {
    id: 'smc-002',
    nodeId: 'semiconductors',
    type: 'multiple_choice',
    prompt: 'Doping silicon with phosphorus makes it:',
    options: ['n-type', 'p-type', 'An insulator', 'A metal'],
    answer: 0,
    explanation:
      'Phosphorus has five valence electrons, one more than silicon needs for bonding. The extra electron is easily freed, so electrons are the majority carriers. P is a donor.',
  },
  {
    id: 'smc-003',
    nodeId: 'semiconductors',
    type: 'multiple_choice',
    prompt: 'Doping silicon with boron makes it:',
    options: ['p-type', 'n-type', 'Intrinsic', 'Superconducting'],
    answer: 0,
    explanation:
      'Boron has three valence electrons, leaving a missing bond (a hole). Holes are the majority carriers. B is an acceptor.',
  },
  {
    id: 'smc-004',
    nodeId: 'semiconductors',
    type: 'trend',
    prompt: 'An intrinsic semiconductor is heated.',
    change: 'the temperature increases',
    target: 'its electrical conductivity',
    answer: 'increases',
    explanation:
      'More electrons gain enough thermal energy to cross the gap, so the carrier count rises exponentially. This outweighs the drop in mobility, the opposite of metals.',
  },
  {
    id: 'smc-005',
    nodeId: 'semiconductors',
    type: 'trend',
    prompt: 'Compare intrinsic semiconductors at the same temperature.',
    change: 'the band gap is larger',
    target: 'the intrinsic carrier concentration',
    answer: 'decreases',
    explanation:
      'The number of excited carriers depends exponentially on the band gap divided by the thermal energy. Germanium (about 0.67 eV) has far more intrinsic carriers than silicon (about 1.1 eV).',
  },
  {
    id: 'smc-006',
    nodeId: 'semiconductors',
    type: 'true_false',
    prompt: 'In a doped semiconductor, there is a wide temperature range where the carrier concentration stays nearly constant, set by the dopant level.',
    answer: true,
    explanation:
      'Once all dopant atoms are ionized, adding more heat creates few extra carriers until intrinsic excitation takes over at high temperature. Devices are designed to operate in this stable "extrinsic" range.',
  },
  {
    id: 'smc-007',
    nodeId: 'semiconductors',
    type: 'multiple_choice',
    prompt: 'How does a p–n junction diode behave?',
    options: [
      'Current flows easily in forward bias but very little in reverse bias, so it rectifies',
      'It conducts equally in both directions',
      'It never conducts',
      'It only conducts at very low temperatures',
    ],
    answer: 0,
    explanation:
      'In forward bias, the barrier at the junction shrinks and carriers cross it. In reverse bias, the depletion zone widens. This one-way behavior is the basis of diodes, solar cells and transistors.',
  },
  {
    id: 'smc-008',
    nodeId: 'semiconductors',
    type: 'matching',
    prompt: 'Match each semiconductor to a typical use.',
    pairs: [
      { left: 'Silicon', right: 'Integrated circuits and most solar cells' },
      { left: 'Gallium arsenide', right: 'High-frequency electronics and infrared lasers' },
      { left: 'Gallium nitride', right: 'Blue and white LEDs and power electronics' },
      { left: 'Germanium', right: 'Infrared optics and early transistors' },
    ],
    explanation:
      'The band gap and electron mobility decide the use. Wide-gap GaN emits blue light and handles high voltages; GaAs has high mobility and a direct gap for light emission.',
  },
  {
    id: 'smc-009',
    nodeId: 'semiconductors',
    type: 'trend',
    prompt: 'Silicon is doped with phosphorus at room temperature.',
    change: 'the dopant concentration increases',
    target: 'the electrical conductivity',
    answer: 'increases',
    explanation:
      'Each donor adds a free electron, so conductivity rises roughly in proportion to dopant level, although very heavy doping lowers mobility somewhat.',
  },
  {
    id: 'smc-010',
    nodeId: 'semiconductors',
    type: 'multiple_choice',
    prompt: 'Why does conductivity rise with temperature in a semiconductor but fall in a metal?',
    options: [
      'In a semiconductor, more carriers are excited across the gap, and this outweighs extra scattering; in a metal, the carrier count is fixed and only scattering increases',
      'Metals lose electrons when heated',
      'Semiconductors get a smaller atomic size',
      'Both actually behave the same',
    ],
    answer: 0,
    explanation:
      'σ depends on both carrier number and mobility. In metals the number is already huge and constant; in semiconductors it grows exponentially with temperature.',
  },
]

const magnetic: Question[] = [
  {
    id: 'mag-001',
    nodeId: 'magnetic-materials',
    type: 'multiple_choice',
    prompt: 'What causes ferromagnetism in iron, cobalt and nickel?',
    options: [
      'Unpaired electron spins that align parallel with their neighbors over regions called domains',
      'Free electrons moving in circles',
      'Their high density',
      'Their crystal color',
    ],
    answer: 0,
    explanation:
      'A quantum-mechanical exchange interaction makes neighboring spins line up. Each domain is fully magnetized; an unmagnetized piece just has domains pointing in random directions.',
  },
  {
    id: 'mag-002',
    nodeId: 'magnetic-materials',
    type: 'multiple_choice',
    prompt: 'What happens above the Curie temperature?',
    options: [
      'Thermal agitation destroys the alignment of spins, and the ferromagnet becomes paramagnetic',
      'The material becomes a superconductor',
      'The material melts',
      'Magnetization becomes stronger',
    ],
    answer: 0,
    explanation:
      'For iron the Curie temperature is 768 °C. Above it, a magnet no longer attracts iron filings. On cooling back down, ferromagnetism returns.',
  },
  {
    id: 'mag-003',
    nodeId: 'magnetic-materials',
    type: 'trend',
    prompt: 'A ferromagnet is heated, staying below its Curie temperature.',
    change: 'the temperature increases toward the Curie temperature',
    target: 'the saturation magnetization',
    answer: 'decreases',
    explanation:
      'Thermal vibrations increasingly disturb spin alignment, so the maximum magnetization falls, reaching zero at the Curie point.',
  },
  {
    id: 'mag-004',
    nodeId: 'magnetic-materials',
    type: 'matching',
    prompt: 'Match each magnetic material to its use.',
    pairs: [
      { left: 'Fe–Si electrical steel', right: 'Transformer cores' },
      { left: 'Nd–Fe–B', right: 'Strong permanent magnets in motors' },
      { left: 'Soft ferrites', right: 'High-frequency inductor cores' },
      { left: 'Sm–Co', right: 'Permanent magnets for high temperatures' },
    ],
    explanation:
      'Soft magnets (easy to magnetize and demagnetize) suit alternating fields. Hard magnets (very hard to demagnetize) keep their magnetization permanently.',
  },
  {
    id: 'mag-005',
    nodeId: 'magnetic-materials',
    type: 'multiple_choice',
    prompt: 'What does the area inside a magnetic hysteresis loop represent?',
    options: [
      'The energy lost per magnetization cycle',
      'The density of the material',
      'The Curie temperature',
      'The electrical conductivity',
    ],
    answer: 0,
    explanation:
      'Soft magnetic materials for transformers need a thin loop (low loss). Permanent magnets have a fat loop with high coercivity and remanence.',
  },
  {
    id: 'mag-006',
    nodeId: 'magnetic-materials',
    type: 'true_false',
    prompt: 'Adding about 3% silicon to transformer steel raises its electrical resistivity, which reduces eddy-current losses.',
    answer: true,
    explanation:
      'Changing magnetic fields induce circulating currents in the core that waste energy as heat. Higher resistivity and thin laminations both reduce these eddy currents.',
  },
  {
    id: 'mag-007',
    nodeId: 'magnetic-materials',
    type: 'multiple_choice',
    prompt: 'Why are transformer cores built from thin, insulated laminations instead of solid steel?',
    options: [
      'Laminations break up the paths of eddy currents, reducing energy loss',
      'Laminations are stronger',
      'Solid steel cannot be magnetized',
      'Laminations increase the Curie temperature',
    ],
    answer: 0,
    explanation:
      'Thin sheets restrict eddy currents to small loops. For even higher frequencies, insulating ferrites or powder cores are used.',
  },
  {
    id: 'mag-008',
    nodeId: 'magnetic-materials',
    type: 'multiple_choice',
    prompt: 'How does a ferromagnet become magnetized when a field is applied?',
    options: [
      'Domains aligned with the field grow by domain wall motion, and then magnetization rotates toward the field',
      'New atoms are added',
      'Electrons leave the material',
      'The crystal structure changes to FCC',
    ],
    answer: 0,
    explanation:
      'At low fields, domain walls move; at high fields, the remaining magnetization rotates until the material is saturated.',
  },
  {
    id: 'mag-009',
    nodeId: 'magnetic-materials',
    type: 'trend',
    prompt: 'Think about a soft magnetic material for a transformer.',
    change: 'the number of inclusions and defects that pin domain walls increases',
    target: 'the coercivity',
    answer: 'increases',
    explanation:
      'Pinned walls need a stronger field to move, widening the hysteresis loop and raising losses. Soft magnets are made clean, with large grains. Permanent magnets use pinning on purpose.',
  },
  {
    id: 'mag-010',
    nodeId: 'magnetic-materials',
    type: 'multiple_choice',
    prompt: 'Why are ferrites (magnetic ceramics) useful at high frequencies?',
    options: [
      'They are electrical insulators, so eddy-current losses are very low',
      'They are the strongest magnets known',
      'They are excellent electrical conductors',
      'They are not magnetic',
    ],
    answer: 0,
    explanation:
      'At high frequency, eddy currents in metallic cores would be huge. Ferrites combine useful magnetism with high resistivity, so they are used in inductors, antennas and switch-mode power supplies.',
  },
]

const opticalThermal: Question[] = [
  {
    id: 'ot-001',
    nodeId: 'optical-thermal',
    type: 'trend',
    prompt: 'A rod is heated by the same amount, ΔT.',
    formula: 'thermal-expansion',
    change: 'the rod’s material has a larger expansion coefficient α_l',
    target: 'the change in length Δl',
    answer: 'increases',
    explanation:
      'Δl is proportional to α_l. Polymers expand roughly ten times more than metals, and many ceramics expand less than metals.',
  },
  {
    id: 'ot-002',
    nodeId: 'optical-thermal',
    type: 'trend',
    prompt: 'A bar is clamped between rigid walls and then heated.',
    formula: 'thermal-stress',
    change: 'the bar’s material has a higher elastic modulus E',
    target: 'the thermal stress',
    answer: 'increases',
    explanation:
      'The bar is prevented from expanding, so the blocked strain α_l·ΔT turns into stress proportional to E. Stiff materials build up larger stresses. This one is compressive on heating.',
  },
  {
    id: 'ot-003',
    nodeId: 'optical-thermal',
    type: 'multiple_choice',
    prompt: 'Why are metals opaque to visible light?',
    options: [
      'Free electrons can absorb photons of any visible energy, since there is no band gap',
      'Metals have a very large band gap',
      'Metals contain many pores',
      'Light passes straight through metals',
    ],
    answer: 0,
    explanation:
      'Absorbed light is mostly re-emitted from a very thin surface layer, which is why metals look shiny. Only extremely thin metal films let light through.',
  },
  {
    id: 'ot-004',
    nodeId: 'optical-thermal',
    type: 'multiple_choice',
    prompt: 'Why is window glass transparent?',
    options: [
      'Its band gap is larger than visible photon energies, and it has no grain boundaries or pores to scatter light',
      'It contains free electrons',
      'It is a metal',
      'It has a very small band gap',
    ],
    answer: 0,
    explanation:
      'Photons do not have enough energy to excite electrons across the gap, and a homogeneous amorphous structure does not scatter them. Polycrystalline ceramics are usually translucent or opaque because of scattering.',
  },
  {
    id: 'ot-005',
    nodeId: 'optical-thermal',
    type: 'trend',
    prompt: 'Compare sintered alumina samples.',
    change: 'the porosity increases',
    target: 'the translucency',
    answer: 'decreases',
    explanation:
      'Pores have a very different refractive index from the solid, so each one scatters light. Nearly pore-free alumina can be translucent and is used in streetlight lamp tubes.',
  },
  {
    id: 'ot-006',
    nodeId: 'optical-thermal',
    type: 'multiple_choice',
    prompt: 'Why does the semiconductor cadmium sulfide look yellow?',
    options: [
      'It absorbs photons with energy above its band gap (blue/violet) and transmits the rest, which looks yellow',
      'It emits yellow light by burning',
      'It has free electrons like a metal',
      'It contains yellow dye',
    ],
    answer: 0,
    explanation:
      'CdS has a band gap of about 2.4 eV, so it absorbs higher-energy blue and violet light. Our eyes see the transmitted remainder.',
  },
  {
    id: 'ot-007',
    nodeId: 'optical-thermal',
    type: 'trend',
    prompt: 'Heat flows through a wall with a fixed temperature difference across it.',
    formula: 'fourier',
    change: 'the wall is made of a material with higher thermal conductivity k',
    target: 'the heat flux through the wall',
    answer: 'increases',
    explanation:
      'q is proportional to k. Copper (about 400 W/(m·K)) moves heat far better than glass (about 1) or polymer foam (about 0.03).',
  },
  {
    id: 'ot-008',
    nodeId: 'optical-thermal',
    type: 'multiple_choice',
    prompt: 'Why are metals usually better thermal conductors than ceramics?',
    options: [
      'Free electrons carry heat in metals, while ceramics rely mainly on lattice vibrations (phonons)',
      'Ceramics are always porous',
      'Metals have lower melting points',
      'Ceramics have more free electrons',
    ],
    answer: 0,
    explanation:
      'Electrons are very efficient heat carriers. Some very stiff, simple ceramics (diamond, aluminum nitride) are exceptions, with high phonon conductivity.',
  },
  {
    id: 'ot-009',
    nodeId: 'optical-thermal',
    type: 'true_false',
    prompt: 'Polymers are generally poor thermal conductors.',
    answer: true,
    explanation:
      'With no free electrons and tangled chains that scatter vibrations, polymers have conductivities around 0.1–0.5 W/(m·K). Foamed polymers are even lower, which makes them good insulation.',
  },
  {
    id: 'ot-010',
    nodeId: 'optical-thermal',
    type: 'matching',
    prompt: 'Match each property to an application that relies on it.',
    pairs: [
      { left: 'Near-zero thermal expansion (Invar)', right: 'Precision instruments and clock parts' },
      { left: 'High thermal conductivity (copper, aluminum nitride)', right: 'Heat sinks' },
      { left: 'Very low thermal conductivity (aerogels, foams)', right: 'Thermal insulation' },
      { left: 'Very low light loss (high-purity silica)', right: 'Optical fibers' },
    ],
    explanation:
      'Functional applications are about matching one standout property to the job, while keeping the others acceptable.',
  },
]

export const functionalQuestions: Question[] = [...electrical, ...semis, ...magnetic, ...opticalThermal]
