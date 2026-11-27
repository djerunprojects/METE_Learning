import type { Question } from '../types'

// Applications · Energy Materials.
// Sources: Huggins, Advanced Batteries: Materials Science Aspects; O'Hayre et al., Fuel Cell Fundamentals;
// Green, Solar Cells: Operating Principles; Was, Fundamentals of Radiation Materials Science;
// Callister & Rethwisch (ch. 18, 22).

const battery: Question[] = [
  {
    id: 'bat-001',
    nodeId: 'battery-materials',
    type: 'multiple_choice',
    prompt: 'How does a lithium-ion battery store and release energy?',
    options: [
      'Lithium ions shuttle between two host electrodes (intercalation) through an electrolyte, while electrons flow through the external circuit',
      'Lithium metal burns inside the cell',
      'Electrons are stored in the electrolyte',
      'The electrodes melt and resolidify',
    ],
    answer: 0,
    explanation:
      'On charging, Li⁺ leaves the cathode (e.g. LiCoO₂) and slips between graphite layers in the anode (up to LiC₆). On discharge it flows back, and the electrons do useful work outside.',
  },
  {
    id: 'bat-002',
    nodeId: 'battery-materials',
    type: 'matching',
    prompt: 'Match each battery component to a typical material.',
    pairs: [
      { left: 'Anode', right: 'Graphite' },
      { left: 'Cathode', right: 'Layered oxide such as NMC' },
      { left: 'Electrolyte', right: 'LiPF₆ salt in organic carbonate solvents' },
      { left: 'Separator', right: 'Porous polyethylene or polypropylene film' },
    ],
    explanation:
      'The separator keeps the electrodes apart while letting ions through; the electrolyte carries ions but not electrons.',
  },
  {
    id: 'bat-003',
    nodeId: 'battery-materials',
    type: 'multiple_choice',
    prompt: 'What is the SEI?',
    options: [
      'A thin layer formed on the anode in the first cycles from electrolyte breakdown; it lets Li⁺ through but blocks further electrolyte reaction',
      'A type of cathode',
      'A battery management chip',
      'The metal case',
    ],
    answer: 0,
    explanation:
      'A stable SEI is essential, but forming it consumes some lithium, and its slow growth over the battery’s life is a main cause of capacity fade.',
  },
  {
    id: 'bat-004',
    nodeId: 'battery-materials',
    type: 'multiple_choice',
    prompt: 'Why is LFP considered safer than layered oxide cathodes?',
    options: [
      'Its olivine structure with strong P–O bonds does not release oxygen easily when overheated',
      'It has the highest voltage',
      'It contains no lithium',
      'It is liquid',
    ],
    answer: 0,
    explanation:
      'Oxygen released from a hot layered oxide can feed thermal runaway. LFP is more stable and long-lived, but has lower voltage (about 3.2 V) and energy density.',
  },
  {
    id: 'bat-005',
    nodeId: 'battery-materials',
    type: 'trend',
    prompt: 'A lithium-ion cell is charged at low temperature.',
    change: 'the charging rate increases at low temperature',
    target: 'the risk of lithium plating and dendrites on the anode',
    answer: 'increases',
    explanation:
      'If lithium cannot enter the graphite fast enough, it deposits as metal on the surface. Dendrites can pierce the separator and short the cell.',
  },
  {
    id: 'bat-006',
    nodeId: 'battery-materials',
    type: 'multiple_choice',
    prompt: 'Silicon anodes can store about ten times more lithium than graphite. What is their main problem?',
    options: [
      'Silicon swells by roughly 300% when fully lithiated, so particles crack and the SEI keeps re-forming',
      'Silicon does not react with lithium',
      'Silicon is too heavy',
      'Silicon is a metal',
    ],
    answer: 0,
    explanation:
      'Repeated swelling and shrinking pulverizes particles and consumes electrolyte. Nanostructured silicon and silicon–graphite blends are used to manage it.',
  },
  {
    id: 'bat-007',
    nodeId: 'battery-materials',
    type: 'true_false',
    prompt: 'Thermal runaway is a self-heating chain reaction in which a hot cell triggers exothermic reactions that heat it further.',
    answer: true,
    explanation:
      'SEI breakdown, electrolyte decomposition and cathode oxygen release each release heat at rising temperatures. Separators that shut down when hot, safer chemistries and cooling all help prevent it.',
  },
  {
    id: 'bat-008',
    nodeId: 'battery-materials',
    type: 'trend',
    prompt: 'A battery is stored for a long time.',
    change: 'the storage temperature increases',
    target: 'the rate of capacity loss',
    answer: 'increases',
    explanation:
      'Side reactions such as SEI growth are thermally activated, so batteries age faster when hot. Storing at moderate charge and temperature extends life.',
  },
  {
    id: 'bat-009',
    nodeId: 'battery-materials',
    type: 'multiple_choice',
    prompt: 'What is the main appeal of solid-state electrolytes?',
    options: [
      'They replace flammable liquid electrolytes and may allow lithium metal anodes with much higher energy density',
      'They are cheaper to make than any liquid',
      'They conduct electrons well',
      'They make batteries heavier on purpose',
    ],
    answer: 0,
    explanation:
      'Ceramic or polymer solid electrolytes improve safety. The challenges are ionic conductivity, interface contact and lithium dendrites growing along grain boundaries.',
  },
  {
    id: 'bat-010',
    nodeId: 'battery-materials',
    type: 'cause_effect',
    prompt: 'Select every factor that speeds up capacity fade.',
    scenario: 'An electric vehicle battery is losing range faster than expected.',
    options: [
      'Frequent fast charging, especially in the cold',
      'Long periods parked fully charged in hot weather',
      'Repeated deep discharge to near 0% and charge to 100%',
      'Keeping the battery at moderate temperature and mid-range charge',
    ],
    answers: [0, 1, 2],
    explanation:
      'Lithium plating, SEI growth and mechanical stress on electrode particles are all worse under these conditions. Moderate temperature and state of charge slow aging.',
  },
]

const fuelCells: Question[] = [
  {
    id: 'fch-001',
    nodeId: 'fuel-cells-hydrogen',
    type: 'matching',
    prompt: 'Match each fuel cell type to its electrolyte and operating temperature.',
    pairs: [
      { left: 'PEMFC', right: 'Proton-conducting polymer membrane, about 80 °C' },
      { left: 'SOFC', right: 'Oxide-ion-conducting YSZ ceramic, about 600–1000 °C' },
    ],
    explanation:
      'The electrolyte material decides which ion moves and how hot the cell must run. PEMFCs suit vehicles; SOFCs suit stationary power and can use various fuels.',
  },
  {
    id: 'fch-002',
    nodeId: 'fuel-cells-hydrogen',
    type: 'multiple_choice',
    prompt: 'Why do PEMFCs need platinum catalysts while SOFCs usually do not?',
    options: [
      'At about 80 °C reactions are slow and need a very active catalyst; at SOFC temperatures, reactions are fast with cheaper materials such as nickel',
      'Platinum conducts oxide ions',
      'SOFCs do not use any electrodes',
      'Platinum melts at SOFC temperatures',
    ],
    answer: 0,
    explanation:
      'Reducing or replacing platinum is a major research goal for PEMFCs. SOFCs use Ni–YSZ anodes and perovskite cathodes.',
  },
  {
    id: 'fch-003',
    nodeId: 'fuel-cells-hydrogen',
    type: 'true_false',
    prompt: 'A PEMFC membrane must stay hydrated, because its proton conductivity depends on water in the membrane.',
    answer: true,
    explanation:
      'Protons travel along water-filled channels in polymers such as Nafion. That is why PEMFCs need water management and cannot easily run above about 100 °C.',
  },
  {
    id: 'fch-004',
    nodeId: 'fuel-cells-hydrogen',
    type: 'trend',
    prompt: 'YSZ conducts oxide ions by hopping through oxygen vacancies.',
    change: 'the operating temperature of an SOFC increases',
    target: 'the ionic conductivity of the electrolyte',
    answer: 'increases',
    explanation:
      'Ion hopping is thermally activated, like diffusion. That is why SOFCs run hot; thinner electrolytes and better ion conductors allow somewhat lower temperatures.',
  },
  {
    id: 'fch-005',
    nodeId: 'fuel-cells-hydrogen',
    type: 'multiple_choice',
    prompt: 'Why does adding yttria to zirconia make it an oxide-ion conductor?',
    options: [
      'Replacing Zr⁴⁺ with Y³⁺ creates oxygen vacancies to keep charge balance, and oxide ions hop through them',
      'Yttrium adds free electrons',
      'Yttria makes zirconia metallic',
      'Yttria removes all vacancies',
    ],
    answer: 0,
    explanation:
      'Every two Y³⁺ ions need one oxygen vacancy for charge neutrality. These vacancies are the carriers that make YSZ a solid electrolyte. Yttria also stabilizes the cubic phase.',
  },
  {
    id: 'fch-006',
    nodeId: 'fuel-cells-hydrogen',
    type: 'multiple_choice',
    prompt: 'Why is high-strength steel a concern for hydrogen pipelines and tanks?',
    options: [
      'Hydrogen enters the steel and causes hydrogen embrittlement, lowering ductility and fatigue resistance',
      'Hydrogen makes steel melt',
      'Hydrogen is a lubricant',
      'Hydrogen does not interact with metals',
    ],
    answer: 0,
    explanation:
      'Hydrogen atoms diffuse to high-stress regions and promote cracking. Lower-strength steels, austenitic stainless steels and aluminum liners are preferred.',
  },
  {
    id: 'fch-007',
    nodeId: 'fuel-cells-hydrogen',
    type: 'matching',
    prompt: 'Match each hydrogen storage method to its key challenge.',
    pairs: [
      { left: 'Compressed gas (about 700 bar)', right: 'Strong, heavy pressure vessels (often carbon fiber wrapped)' },
      { left: 'Liquid hydrogen', right: 'Must be kept at about 20 K and boils off' },
      { left: 'Metal hydrides', right: 'Heavy, and need heat to release the hydrogen' },
    ],
    explanation:
      'Hydrogen holds a lot of energy per kilogram but very little per liter, so every storage method is a compromise.',
  },
  {
    id: 'fch-008',
    nodeId: 'fuel-cells-hydrogen',
    type: 'trend',
    prompt: 'An SOFC is heated and cooled repeatedly during start-up and shut-down.',
    change: 'the thermal expansion mismatch between cell layers increases',
    target: 'the risk of cracking and delamination',
    answer: 'increases',
    explanation:
      'Ceramic layers bonded together but expanding differently build up stress on each thermal cycle. Matching expansion coefficients is a key part of SOFC design.',
  },
  {
    id: 'fch-009',
    nodeId: 'fuel-cells-hydrogen',
    type: 'multiple_choice',
    prompt: 'What is the only direct product when a hydrogen fuel cell runs on pure hydrogen and air?',
    options: ['Water (plus heat)', 'Carbon dioxide', 'Methane', 'Sulfur dioxide'],
    answer: 0,
    explanation:
      'Hydrogen and oxygen combine electrochemically to form water. Overall emissions depend on how the hydrogen was produced.',
  },
  {
    id: 'fch-010',
    nodeId: 'fuel-cells-hydrogen',
    type: 'cause_effect',
    prompt: 'Select every advantage of SOFCs over PEMFCs.',
    scenario: 'A utility compares SOFCs and PEMFCs for a stationary power plant.',
    options: [
      'SOFCs can run on natural gas or other fuels, reformed inside the cell',
      'SOFCs do not need platinum catalysts',
      'SOFC waste heat is hot enough to be used, raising overall efficiency',
      'SOFCs start up faster from cold',
    ],
    answers: [0, 1, 2],
    explanation:
      'High temperature brings fuel flexibility, cheap catalysts and useful heat. The downside is slow start-up and thermal cycling stress, which is why PEMFCs dominate vehicles.',
  },
]

const pv: Question[] = [
  {
    id: 'pv-001',
    nodeId: 'photovoltaics',
    type: 'multiple_choice',
    prompt: 'How does a solar cell produce electricity?',
    options: [
      'Photons with enough energy excite electrons across the band gap, and the p–n junction separates the electrons and holes',
      'Sunlight heats a wire',
      'Photons push the atoms',
      'Light melts the silicon',
    ],
    answer: 0,
    explanation:
      'The built-in electric field at the junction sends electrons and holes to opposite contacts, driving current through an external circuit.',
  },
  {
    id: 'pv-002',
    nodeId: 'photovoltaics',
    type: 'multiple_choice',
    prompt: 'Why can photons with energy below the band gap not produce current in a solar cell?',
    options: [
      'They do not have enough energy to lift an electron across the gap, so they pass through or are absorbed as heat',
      'They are always reflected',
      'They produce too much current',
      'They destroy the junction',
    ],
    answer: 0,
    explanation:
      'Silicon’s gap of about 1.1 eV means it cannot use infrared light with wavelengths beyond about 1100 nm. Photons with much more energy waste the excess as heat.',
  },
  {
    id: 'pv-003',
    nodeId: 'photovoltaics',
    type: 'true_false',
    prompt: 'A single-junction solar cell has a theoretical maximum efficiency of roughly 33% under ordinary sunlight.',
    answer: true,
    explanation:
      'This Shockley–Queisser limit comes from losing sub-gap photons and the excess energy of high-energy photons. Multi-junction cells, which stack several band gaps, can exceed it.',
  },
  {
    id: 'pv-004',
    nodeId: 'photovoltaics',
    type: 'trend',
    prompt: 'A silicon solar panel is operated in hot sunshine.',
    change: 'the cell temperature increases',
    target: 'the conversion efficiency',
    answer: 'decreases',
    explanation:
      'Higher temperature increases intrinsic carrier generation and recombination, which lowers the cell voltage. Silicon loses roughly 0.4% of its power per °C of heating.',
  },
  {
    id: 'pv-005',
    nodeId: 'photovoltaics',
    type: 'multiple_choice',
    prompt: 'Why do crystalline silicon cells need wafers about 100–200 µm thick, while thin-film cells can be only a few micrometers thick?',
    options: [
      'Silicon has an indirect band gap and absorbs light weakly; materials like CdTe have a direct gap and absorb strongly',
      'Silicon is transparent to all light',
      'Thin films are always more efficient',
      'Thicker wafers are cheaper',
    ],
    answer: 0,
    explanation:
      'In an indirect-gap material, absorption needs help from lattice vibrations, so light travels farther before being absorbed. Light trapping by surface texturing helps silicon.',
  },
  {
    id: 'pv-006',
    nodeId: 'photovoltaics',
    type: 'trend',
    prompt: 'Compare silicon materials for solar cells.',
    change: 'the density of defects and grain boundaries increases',
    target: 'the cell efficiency',
    answer: 'decreases',
    explanation:
      'Defects act as recombination centers where electrons and holes meet and are lost before reaching the contacts. That is why monocrystalline cells are more efficient than multicrystalline ones.',
  },
  {
    id: 'pv-007',
    nodeId: 'photovoltaics',
    type: 'multiple_choice',
    prompt: 'What do surface texturing and anti-reflection coatings on solar cells do?',
    options: [
      'Reduce reflection and trap more light inside the cell',
      'Make the cell stronger',
      'Increase the band gap',
      'Cool the cell',
    ],
    answer: 0,
    explanation:
      'Bare polished silicon reflects over 30% of sunlight. Pyramidal texturing and a silicon nitride coating cut reflection to a few percent, which is why cells look dark blue or black.',
  },
  {
    id: 'pv-008',
    nodeId: 'photovoltaics',
    type: 'multiple_choice',
    prompt: 'What is the biggest obstacle for perovskite solar cells?',
    options: [
      'Long-term stability: they degrade with moisture, heat and light',
      'They have very low efficiency',
      'They need extremely pure silicon',
      'They cannot absorb visible light',
    ],
    answer: 0,
    explanation:
      'Perovskites reached efficiencies above 25% within about a decade and are cheap to make, but they must survive decades outdoors. Encapsulation and more stable compositions are active research areas.',
  },
  {
    id: 'pv-009',
    nodeId: 'photovoltaics',
    type: 'true_false',
    prompt: 'Satellites often use multi-junction cells made of compound semiconductors such as gallium arsenide because power per unit area and mass matters more than cost in space.',
    answer: true,
    explanation:
      'Stacking cells with different band gaps captures more of the spectrum, with efficiencies around 30% or more. They are too expensive for most rooftop use.',
  },
  {
    id: 'pv-010',
    nodeId: 'photovoltaics',
    type: 'cause_effect',
    prompt: 'Select every change that would raise the power output.',
    scenario: 'A solar farm operator wants more power from existing silicon panels.',
    options: [
      'Keep the panels cleaner so less light is blocked',
      'Improve ventilation so the panels run cooler',
      'Reduce shading of the panels',
      'Let the panels get hotter',
    ],
    answers: [0, 1, 2],
    explanation:
      'More light in and lower cell temperature both raise output. Partial shading is especially harmful because shaded cells limit the current of the whole string.',
  },
]

const nuclear: Question[] = [
  {
    id: 'nuc-001',
    nodeId: 'nuclear-materials',
    type: 'multiple_choice',
    prompt: 'What does a fast neutron do when it hits a metal lattice?',
    options: [
      'It knocks atoms out of their sites, creating cascades of vacancies and interstitials',
      'It makes the metal transparent',
      'It has no effect',
      'It instantly melts the metal',
    ],
    answer: 0,
    explanation:
      'A single collision can displace hundreds of atoms. Damage is measured in displacements per atom (dpa); reactor internals can reach tens of dpa over their life.',
  },
  {
    id: 'nuc-002',
    nodeId: 'nuclear-materials',
    type: 'trend',
    prompt: 'A ferritic steel reactor pressure vessel is irradiated over decades.',
    change: 'the neutron dose increases',
    target: 'the ductile-to-brittle transition temperature',
    answer: 'increases',
    explanation:
      'Irradiation creates tiny defect clusters and copper-rich precipitates that harden the steel and raise its DBTT. Surveillance specimens inside the vessel track this shift.',
  },
  {
    id: 'nuc-003',
    nodeId: 'nuclear-materials',
    type: 'multiple_choice',
    prompt: 'Why have copper and phosphorus impurities been limited in modern reactor vessel steels?',
    options: [
      'They make irradiation embrittlement worse',
      'They make the steel radioactive forever',
      'They improve toughness too much',
      'They are too expensive',
    ],
    answer: 0,
    explanation:
      'Copper forms nanoscale clusters under irradiation, and phosphorus segregates to grain boundaries. Older vessels with higher copper show larger DBTT shifts.',
  },
  {
    id: 'nuc-004',
    nodeId: 'nuclear-materials',
    type: 'multiple_choice',
    prompt: 'Why are zirconium alloys used for fuel cladding in water-cooled reactors?',
    options: [
      'Zirconium absorbs very few neutrons and resists corrosion in hot water',
      'Zirconium is the strongest metal',
      'Zirconium is the cheapest metal',
      'Zirconium melts at a low temperature',
    ],
    answer: 0,
    explanation:
      'Low neutron absorption keeps the chain reaction efficient. At very high temperatures, though, zirconium reacts with steam to produce hydrogen, as at Fukushima in 2011.',
  },
  {
    id: 'nuc-005',
    nodeId: 'nuclear-materials',
    type: 'true_false',
    prompt: 'Under irradiation, vacancies can cluster into tiny voids, making some steels swell by several percent in volume.',
    answer: true,
    explanation:
      'Void swelling is worst in austenitic stainless steels at intermediate temperatures. Ferritic–martensitic steels swell much less, which is one reason they are favored for advanced reactors.',
  },
  {
    id: 'nuc-006',
    nodeId: 'nuclear-materials',
    type: 'multiple_choice',
    prompt: 'Why is uranium dioxide (UO₂) used as nuclear fuel instead of uranium metal?',
    options: [
      'It has a very high melting point (about 2800 °C), is chemically stable and holds fission products well',
      'It conducts heat better than metal',
      'It is lighter',
      'It is not radioactive',
    ],
    answer: 0,
    explanation:
      'Ceramic fuel tolerates high temperatures and resists reacting with water. Its main drawback is low thermal conductivity, which makes the pellet centers very hot.',
  },
  {
    id: 'nuc-007',
    nodeId: 'nuclear-materials',
    type: 'trend',
    prompt: 'Heat generated inside a UO₂ fuel pellet is conducted to its surface.',
    formula: 'fourier',
    change: 'the thermal conductivity k of the fuel decreases (as it does with burnup)',
    target: 'the temperature at the center of the pellet',
    answer: 'increases',
    explanation:
      'With lower k, a steeper temperature gradient is needed to conduct the same heat out, so the center runs hotter. Fission products and porosity lower k over the fuel’s life.',
  },
  {
    id: 'nuc-008',
    nodeId: 'nuclear-materials',
    type: 'multiple_choice',
    prompt: 'How do ODS steels resist radiation damage?',
    options: [
      'Very fine, stable oxide nanoparticles trap helium and defects and keep the microstructure stable',
      'They contain no iron',
      'They absorb all neutrons',
      'They are amorphous',
    ],
    answer: 0,
    explanation:
      'Nanometer-sized yttrium–titanium oxides act as sinks for vacancies and interstitials and hold helium in tiny bubbles instead of letting it collect at grain boundaries.',
  },
  {
    id: 'nuc-009',
    nodeId: 'nuclear-materials',
    type: 'multiple_choice',
    prompt: 'Where does helium in irradiated metals come from, and why is it harmful?',
    options: [
      'Nuclear reactions (transmutation) produce helium atoms, which collect in bubbles at grain boundaries and embrittle the metal',
      'It is added during manufacturing',
      'It comes from the air',
      'It makes metals stronger',
    ],
    answer: 0,
    explanation:
      'Helium does not dissolve in metals. Bubbles at grain boundaries cause brittle intergranular fracture at high temperature, a key issue for fusion reactor materials.',
  },
  {
    id: 'nuc-010',
    nodeId: 'nuclear-materials',
    type: 'cause_effect',
    prompt: 'Select every effect that typically occurs.',
    scenario: 'A steel component is exposed to neutron irradiation for many years.',
    options: [
      'Yield strength increases (irradiation hardening)',
      'Ductility decreases',
      'The ductile-to-brittle transition temperature rises (for ferritic steels)',
      'The steel becomes softer and more ductile',
    ],
    answers: [0, 1, 2],
    explanation:
      'Defect clusters and precipitates block dislocations, like strain hardening. The steel gets stronger but less able to deform, so it fractures more easily.',
  },
]

export const energyQuestions: Question[] = [...battery, ...fuelCells, ...pv, ...nuclear]
