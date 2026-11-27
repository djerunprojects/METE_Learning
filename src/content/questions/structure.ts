import type { Question } from '../types'

// Core · Structure branch.
// Sources: Callister & Rethwisch, Materials Science and Engineering (ch. 2–4, 7, 9);
// Askeland, The Science and Engineering of Materials (ch. 2–4).

const atomicBonding: Question[] = [
  {
    id: 'ab-001',
    nodeId: 'atomic-bonding',
    type: 'multiple_choice',
    prompt: 'Which type of bond involves a "sea" of delocalized valence electrons shared by all atoms?',
    options: ['Ionic', 'Covalent', 'Metallic', 'Van der Waals'],
    answer: 2,
    explanation:
      'In metallic bonding, valence electrons are not tied to any one atom. They form an electron sea around positive ion cores, which explains why metals conduct electricity and heat well.',
  },
  {
    id: 'ab-002',
    nodeId: 'atomic-bonding',
    type: 'multiple_choice',
    prompt: 'The bonding in sodium chloride (NaCl) is mainly:',
    options: ['Ionic', 'Covalent', 'Metallic', 'Hydrogen bonding'],
    answer: 0,
    explanation:
      'Sodium gives its valence electron to chlorine, forming Na⁺ and Cl⁻ ions held together by electrostatic (Coulomb) attraction. That is ionic bonding.',
  },
  {
    id: 'ab-003',
    nodeId: 'atomic-bonding',
    type: 'matching',
    prompt: 'Match each material to its dominant bonding type.',
    pairs: [
      { left: 'Diamond', right: 'Covalent' },
      { left: 'Magnesium oxide (MgO)', right: 'Ionic' },
      { left: 'Aluminum', right: 'Metallic' },
      { left: 'Between neighboring polyethylene chains', right: 'Van der Waals (secondary)' },
    ],
    explanation:
      'Diamond is a 3D network of C–C covalent bonds. MgO is made of Mg²⁺ and O²⁻ ions. Aluminum has metallic bonding. Polyethylene chains are covalent inside, but neighboring chains are held together only by weak van der Waals forces.',
  },
  {
    id: 'ab-004',
    nodeId: 'atomic-bonding',
    type: 'true_false',
    prompt: 'Covalent bonds are directional, while ionic and metallic bonds are non-directional.',
    answer: true,
    explanation:
      'A covalent bond is a shared electron pair between two specific atoms, so it points in a definite direction (e.g. the 109.5° tetrahedral bonds in diamond). Ionic attraction and the metallic electron sea act equally in all directions.',
  },
  {
    id: 'ab-005',
    nodeId: 'atomic-bonding',
    type: 'trend',
    prompt: 'Think about the bonding energy E₀: the depth of the potential energy well at the equilibrium spacing.',
    change: 'the bonding energy E₀ of a material is larger (a deeper energy well)',
    target: 'its melting temperature',
    answer: 'increases',
    explanation:
      'Melting requires enough thermal energy to break bonds apart. A deeper well means stronger bonds, so more energy and a higher temperature are needed. Tungsten (very strong metallic bonding) melts at about 3410 °C, mercury below room temperature.',
  },
  {
    id: 'ab-006',
    nodeId: 'atomic-bonding',
    type: 'trend',
    prompt: 'Think about the force–separation curve between two atoms near the equilibrium spacing r₀.',
    change: 'the force–separation curve is steeper at r₀',
    target: 'the elastic modulus',
    answer: 'increases',
    explanation:
      'The elastic modulus is proportional to the slope of the force–separation curve at r₀. A steeper slope means more force is needed to stretch the bonds by the same amount, so the material is stiffer.',
  },
  {
    id: 'ab-007',
    nodeId: 'atomic-bonding',
    type: 'trend',
    prompt: 'Thermal expansion comes from the asymmetric shape of the energy well: as atoms vibrate harder, their average spacing grows.',
    change: 'the bonding energy increases (a deeper, narrower well)',
    target: 'the coefficient of thermal expansion',
    answer: 'decreases',
    explanation:
      'A deep, narrow well is nearly symmetric near its bottom, so heating barely shifts the average spacing. Strongly bonded ceramics therefore expand less than weakly bonded polymers.',
  },
  {
    id: 'ab-008',
    nodeId: 'atomic-bonding',
    type: 'cause_effect',
    prompt: 'Select every statement that helps explain this.',
    scenario: 'Metals are ductile electrical conductors, while ionic ceramics are brittle insulators.',
    options: [
      'Metallic bonds are non-directional, so planes of atoms can slip past each other without breaking the bonding',
      'Free electrons in metals can carry electric charge',
      'In ionic solids, slip can bring ions of the same charge next to each other, causing strong repulsion',
      'Ionic bonds are much weaker than metallic bonds',
    ],
    answers: [0, 1, 2],
    explanation:
      'The electron sea makes metals both conductive and tolerant of slip. In ionic crystals, slip that pushes like charges together is strongly resisted, so they fracture instead. Ionic bonds are not weak: they are typically as strong as or stronger than metallic bonds.',
  },
  {
    id: 'ab-009',
    nodeId: 'atomic-bonding',
    type: 'multiple_choice',
    prompt: 'Which type of bonding is the weakest?',
    options: ['Ionic', 'Covalent', 'Metallic', 'Van der Waals'],
    answer: 3,
    explanation:
      'Van der Waals (secondary) bonds come from weak attractions between dipoles, typically around 0.1 eV per bond or less. Primary bonds (ionic, covalent, metallic) are roughly 1–10 eV.',
  },
  {
    id: 'ab-010',
    nodeId: 'atomic-bonding',
    type: 'multiple_choice',
    prompt: 'Polyethylene softens at a fairly low temperature even though its C–C bonds are strong covalent bonds. Why?',
    options: [
      'Neighboring chains are held together only by weak secondary (van der Waals) bonds',
      'Its C–C bonds are actually ionic',
      'Polyethylene contains metallic bonds that melt easily',
      'Covalent bonds become weak above room temperature',
    ],
    answer: 0,
    explanation:
      'Softening and melting of polyethylene do not break the covalent backbone. They only need the chains to slide past each other, which is resisted by weak van der Waals forces.',
  },
]

const crystalStructures: Question[] = [
  {
    id: 'cs-001',
    nodeId: 'crystal-structures',
    type: 'matching',
    prompt: 'Match each cubic crystal structure to its coordination number (CN) and atomic packing factor (APF).',
    pairs: [
      { left: 'SC', right: 'CN = 6, APF ≈ 0.52' },
      { left: 'BCC', right: 'CN = 8, APF ≈ 0.68' },
      { left: 'FCC', right: 'CN = 12, APF ≈ 0.74' },
    ],
    explanation:
      'Simple cubic has 6 nearest neighbors and is loosely packed. BCC has 8 neighbors and 68% of its volume filled. FCC is close-packed: 12 neighbors and 74% filled, the maximum for equal spheres.',
  },
  {
    id: 'cs-002',
    nodeId: 'crystal-structures',
    type: 'matching',
    prompt: 'Match each metal to its crystal structure at room temperature.',
    pairs: [
      { left: 'Iron (α-Fe)', right: 'BCC' },
      { left: 'Copper', right: 'FCC' },
      { left: 'Magnesium', right: 'HCP' },
    ],
    explanation:
      'α-iron (ferrite) is BCC, as are Cr, Mo and W. Copper is FCC, like Al, Ni, Ag and Au. Magnesium is HCP, like Zn and α-titanium.',
  },
  {
    id: 'cs-003',
    nodeId: 'crystal-structures',
    type: 'true_false',
    prompt:
      'FCC and HCP have the same atomic packing factor (0.74). They differ only in how close-packed planes are stacked: A-B-C-A-B-C… for FCC and A-B-A-B… for HCP.',
    answer: true,
    explanation:
      'Both are stacks of identical close-packed atomic layers. Whether the third layer sits over the first (A) or in a new position (C) gives HCP or FCC. The packing density is the same.',
  },
  {
    id: 'cs-004',
    nodeId: 'crystal-structures',
    type: 'trend',
    prompt: 'Compare two metals with the same crystal structure and the same lattice parameter.',
    formula: 'theoretical-density',
    change: 'the atomic weight A is higher',
    target: 'the theoretical density ρ',
    answer: 'increases',
    explanation:
      'ρ is proportional to A when n and V_C are unchanged: the same number of atoms fits in the same volume, but each atom is heavier.',
  },
  {
    id: 'cs-005',
    nodeId: 'crystal-structures',
    type: 'trend',
    prompt: 'For a cubic unit cell, V_C = a³, where a is the lattice parameter.',
    formula: 'theoretical-density',
    change: 'the lattice parameter a increases while n and A stay the same',
    target: 'the theoretical density ρ',
    answer: 'decreases',
    explanation:
      'A larger a gives a larger unit-cell volume V_C in the denominator. The same mass is spread over more volume, so the density drops.',
  },
  {
    id: 'cs-006',
    nodeId: 'crystal-structures',
    type: 'multiple_choice',
    prompt: 'How many atoms belong to one FCC unit cell?',
    options: ['1', '2', '4', '6'],
    answer: 2,
    explanation:
      'FCC has 8 corner atoms each shared by 8 cells (8 × 1/8 = 1) and 6 face atoms each shared by 2 cells (6 × 1/2 = 3), giving 4 atoms per cell. BCC has 2 and SC has 1.',
  },
  {
    id: 'cs-007',
    nodeId: 'crystal-structures',
    type: 'multiple_choice',
    prompt: 'In a BCC unit cell, along which direction do atoms touch each other?',
    options: ['Along the cube edge', 'Along the face diagonal', 'Along the body diagonal', 'They do not touch'],
    answer: 2,
    explanation:
      'The center atom touches the eight corner atoms, so atoms are in contact along the body diagonal. That gives a = 4R/√3. In FCC, atoms touch along the face diagonal (a = 2R√2).',
  },
  {
    id: 'cs-008',
    nodeId: 'crystal-structures',
    type: 'multiple_choice',
    prompt:
      'Iron is BCC at room temperature but FCC between 912 °C and 1394 °C. What is this ability to have more than one crystal structure called?',
    options: ['Polymorphism (allotropy)', 'Anisotropy', 'Isotropy', 'Amorphism'],
    answer: 0,
    explanation:
      'Polymorphism means one substance can take different crystal structures depending on temperature and pressure. For elements it is called allotropy. The BCC ↔ FCC change in iron is the basis of steel heat treatment.',
  },
  {
    id: 'cs-009',
    nodeId: 'crystal-structures',
    type: 'true_false',
    prompt:
      "A single crystal's properties can depend on direction (anisotropy), but a polycrystal with randomly oriented grains usually behaves nearly isotropically.",
    answer: true,
    explanation:
      'Atomic spacing differs between crystal directions, so properties such as the elastic modulus vary with direction in a single crystal. With many randomly oriented grains, the directional effects average out. A strong texture (preferred grain orientation) can make a polycrystal anisotropic again.',
  },
  {
    id: 'cs-010',
    nodeId: 'crystal-structures',
    type: 'cause_effect',
    prompt: 'Select every statement that helps explain this.',
    scenario: 'At room temperature, FCC metals such as copper and aluminum are generally more ductile than HCP metals such as zinc and magnesium.',
    options: [
      'FCC metals have 12 slip systems on close-packed {111} planes, so slip can happen in many directions',
      'HCP metals have few slip systems that operate easily at room temperature',
      'FCC atoms are held together by covalent bonds',
      'HCP metals have no slip planes at all',
    ],
    answers: [0, 1],
    explanation:
      'Ductility needs several independent slip systems so grains can deform in any direction. FCC has many. HCP mainly slips on its basal plane at room temperature, which is too few. HCP metals do have slip planes, and both are metallically bonded.',
  },
]

const defects: Question[] = [
  {
    id: 'dd-001',
    nodeId: 'defects-dislocations',
    type: 'trend',
    prompt: 'Vacancies exist in every crystal at equilibrium.',
    formula: 'vacancy-concentration',
    change: 'the temperature T increases',
    target: 'the number of vacancies N_v',
    answer: 'increases',
    explanation:
      'A higher T makes the exponent −Q_v/kT less negative, so N_v rises exponentially. Near the melting point, there is roughly one vacancy per 10,000 atomic sites.',
  },
  {
    id: 'dd-002',
    nodeId: 'defects-dislocations',
    type: 'trend',
    prompt: 'Compare two metals at the same temperature.',
    formula: 'vacancy-concentration',
    change: 'the vacancy formation energy Q_v is higher',
    target: 'the number of vacancies N_v',
    answer: 'decreases',
    explanation:
      'A larger Q_v makes the exponent more negative, so fewer vacancies form at the same temperature. Creating each vacancy costs more energy.',
  },
  {
    id: 'dd-003',
    nodeId: 'defects-dislocations',
    type: 'matching',
    prompt: 'Match each defect to its dimensionality.',
    pairs: [
      { left: 'Vacancy', right: 'Point defect (0-D)' },
      { left: 'Edge dislocation', right: 'Line defect (1-D)' },
      { left: 'Grain boundary', right: 'Interfacial defect (2-D)' },
      { left: 'Pore or inclusion', right: 'Volume defect (3-D)' },
    ],
    explanation:
      'Defects are grouped by how many dimensions they extend in: a missing atom (point), a line along which atoms are misaligned (dislocation), a surface between grains (boundary), and a 3D void or particle.',
  },
  {
    id: 'dd-004',
    nodeId: 'defects-dislocations',
    type: 'multiple_choice',
    prompt: 'For an edge dislocation, how is the Burgers vector oriented relative to the dislocation line?',
    options: ['Perpendicular', 'Parallel', 'At 45°', 'There is no Burgers vector'],
    answer: 0,
    explanation:
      'In an edge dislocation, the Burgers vector is perpendicular to the line (the edge of the extra half-plane). In a screw dislocation it is parallel. Mixed dislocations are in between.',
  },
  {
    id: 'dd-005',
    nodeId: 'defects-dislocations',
    type: 'multiple_choice',
    prompt: 'Plastic deformation of crystalline metals happens mainly by:',
    options: [
      'The motion of dislocations',
      'Vacancies moving to the surface',
      'Atoms breaking all their bonds at once along a plane',
      'Grain boundaries melting',
    ],
    answer: 0,
    explanation:
      'Dislocations let a crystal slip one row of bonds at a time instead of breaking a whole plane of bonds at once. That is why real metals yield at stresses far below the theoretical strength of a perfect crystal.',
  },
  {
    id: 'dd-006',
    nodeId: 'defects-dislocations',
    type: 'true_false',
    prompt: 'Slip usually happens on the most densely packed planes and along the most densely packed directions.',
    answer: true,
    explanation:
      'Close-packed planes are the most widely spaced and atomically smooth, and close-packed directions give the shortest Burgers vector. Both make dislocation motion easiest. In FCC, this is the {111}<110> system.',
  },
  {
    id: 'dd-007',
    nodeId: 'defects-dislocations',
    type: 'trend',
    prompt: 'A single crystal is pulled in tension, and the angle λ is kept fixed.',
    formula: 'resolved-shear-stress',
    change: 'the angle φ between the tensile axis and the slip-plane normal approaches 90°',
    target: 'the resolved shear stress τ_R on that slip system',
    answer: 'decreases',
    explanation:
      'cos 90° = 0, so τ_R falls toward zero. When the load is parallel to the slip plane, no shear acts on it. Slip starts first on the system where τ_R reaches the critical resolved shear stress.',
  },
  {
    id: 'dd-008',
    nodeId: 'defects-dislocations',
    type: 'multiple_choice',
    prompt: 'Which statement describes a substitutional solid solution?',
    options: [
      'Solute atoms replace host atoms on lattice sites',
      'Solute atoms sit in the spaces between host atoms',
      'Solute atoms form a separate second phase',
      'The crystal becomes amorphous',
    ],
    answer: 0,
    explanation:
      'In a substitutional solid solution (e.g. Ni in Cu), solute atoms take the place of host atoms. In an interstitial solid solution (e.g. C in Fe), small solute atoms squeeze into the gaps between them.',
  },
  {
    id: 'dd-009',
    nodeId: 'defects-dislocations',
    type: 'multiple_choice',
    prompt: 'According to the Hume-Rothery rules, which condition favors extensive substitutional solubility?',
    options: [
      'Atomic radii that differ by less than about 15%',
      'Different crystal structures',
      'Very different electronegativities',
      'Atomic radii that differ by more than 30%',
    ],
    answer: 0,
    explanation:
      'Wide solubility needs similar atomic size (within ~15%), the same crystal structure, similar electronegativity and similar valence. Cu and Ni meet all of these and are completely soluble in each other.',
  },
  {
    id: 'dd-010',
    nodeId: 'defects-dislocations',
    type: 'cause_effect',
    prompt: 'Select every correct statement.',
    scenario: 'Carbon dissolves in iron as an interstitial solute.',
    options: [
      'Carbon atoms are much smaller than iron atoms',
      'Carbon atoms sit in the gaps between iron atoms rather than on lattice sites',
      'FCC iron (austenite) can dissolve much more carbon than BCC iron (ferrite)',
      'Carbon atoms replace iron atoms on lattice sites',
    ],
    answers: [0, 1, 2],
    explanation:
      'Small carbon atoms fit in interstitial sites. The octahedral holes in FCC iron are larger than the interstitial sites in BCC iron, so austenite dissolves up to 2.14 wt% C while ferrite dissolves at most about 0.022 wt%.',
  },
]

const microstructure: Question[] = [
  {
    id: 'mg-001',
    nodeId: 'microstructure-grains',
    type: 'trend',
    prompt: 'Grain size and strength are linked by the Hall–Petch relation.',
    formula: 'hall-petch',
    change: 'the average grain diameter d becomes smaller',
    target: 'the yield strength σ_y',
    answer: 'increases',
    explanation:
      'A smaller d makes 1/√d larger, so σ_y rises. Finer grains mean more grain boundaries blocking dislocation motion.',
  },
  {
    id: 'mg-002',
    nodeId: 'microstructure-grains',
    type: 'trend',
    prompt: 'A metal is held at a high temperature for a long time, and its grains grow.',
    formula: 'hall-petch',
    change: 'the grains grow larger',
    target: 'the room-temperature yield strength σ_y',
    answer: 'decreases',
    explanation:
      'Grain growth increases d, so k_y/√d gets smaller and σ_y falls. This is why overheating during heat treatment can weaken a part.',
  },
  {
    id: 'mg-003',
    nodeId: 'microstructure-grains',
    type: 'multiple_choice',
    prompt: 'Why do grain boundaries strengthen a metal at room temperature?',
    options: [
      'They act as barriers to dislocation motion, because the slip planes change direction across the boundary',
      'They contain no defects',
      'They make the metal amorphous',
      'They increase the elastic modulus',
    ],
    answer: 0,
    explanation:
      'A dislocation cannot simply continue into a neighboring grain with a different orientation, and the disordered boundary region adds resistance. Dislocations pile up at boundaries, so more stress is needed to keep deformation going.',
  },
  {
    id: 'mg-004',
    nodeId: 'microstructure-grains',
    type: 'true_false',
    prompt: 'A phase is a homogeneous portion of a material with uniform physical and chemical characteristics.',
    answer: true,
    explanation:
      'Each phase has its own structure and composition, e.g. ferrite and cementite in steel. A microstructure describes how the phases and grains are arranged: their size, shape and distribution.',
  },
  {
    id: 'mg-005',
    nodeId: 'microstructure-grains',
    type: 'multiple_choice',
    prompt: 'What drives grain growth at high temperature?',
    options: [
      'Reducing the total grain boundary area, and so the boundary energy',
      'Increasing the number of vacancies',
      'Raising the elastic modulus',
      'Absorbing oxygen from the air',
    ],
    answer: 0,
    explanation:
      'Grain boundaries carry extra energy. Large grains grow at the expense of small ones because that lowers the total boundary area. Atoms diffuse across the boundaries, so growth speeds up at higher temperature.',
  },
  {
    id: 'mg-006',
    nodeId: 'microstructure-grains',
    type: 'trend',
    prompt: 'Think about a metal casting solidifying in a mold.',
    change: 'the casting cools faster (for example, a thinner section or a chilled metal mold)',
    target: 'the grain size',
    answer: 'decreases',
    explanation:
      'Faster cooling gives more undercooling, so many more nuclei form, and there is less time for each grain to grow. Thin sections and metal molds therefore give finer grains than thick sections in sand molds.',
  },
  {
    id: 'mg-007',
    nodeId: 'microstructure-grains',
    type: 'multiple_choice',
    prompt: 'How are grain boundaries usually made visible in a polished metal sample for optical microscopy?',
    options: ['Chemical etching', 'X-ray diffraction', 'Measuring density', 'A hardness test'],
    answer: 0,
    explanation:
      'An etchant attacks the higher-energy grain boundary regions faster, forming small grooves that scatter light. Under the microscope, the boundaries then appear as dark lines.',
  },
  {
    id: 'mg-008',
    nodeId: 'microstructure-grains',
    type: 'true_false',
    prompt:
      'Atoms at grain boundaries are less regularly packed and higher in energy, so boundaries are preferred sites for diffusion, precipitation and chemical attack.',
    answer: true,
    explanation:
      'The disordered structure of a boundary gives faster diffusion paths and easier nucleation sites. That is also why some forms of corrosion attack grain boundaries first (intergranular corrosion).',
  },
  {
    id: 'mg-009',
    nodeId: 'microstructure-grains',
    type: 'cause_effect',
    prompt: 'Select every correct statement.',
    scenario: 'A fine-grained steel and a coarse-grained steel of the same composition are compared at room temperature.',
    options: [
      'The fine-grained steel has the higher yield strength',
      'The fine-grained steel usually has the better toughness',
      'The fine-grained steel always has the better creep resistance at high temperature',
      'The coarse-grained steel has the higher yield strength',
    ],
    answers: [0, 1],
    explanation:
      'Grain refinement is the only common strengthening method that also improves toughness and lowers the ductile-to-brittle transition temperature. At high temperatures, though, grain boundaries can slide, so coarse grains or single crystals resist creep better.',
  },
  {
    id: 'mg-010',
    nodeId: 'microstructure-grains',
    type: 'multiple_choice',
    prompt: 'A slowly cooled steel shows a "two-phase microstructure". What does that mean?',
    options: [
      'It contains regions of two different phases, such as ferrite and cementite',
      'It has been heat treated twice',
      'It contains exactly two grains',
      'It is half crystalline and half liquid',
    ],
    answer: 0,
    explanation:
      'Two phases with different structures and compositions are present. In pearlite, for example, thin plates of ferrite (α) alternate with plates of cementite (Fe₃C).',
  },
]

const unitCellQuestions: Question[] = [
  {
    id: 'cs-011',
    nodeId: 'crystal-structures',
    type: 'pick_region',
    prompt: 'Which unit cell has a coordination number of 8, with atoms touching along the body diagonal?',
    diagram: 'unit_cells',
    answer: 'bcc',
    explanation:
      'In BCC, the atom at the center of the cube touches all eight corner atoms, so CN = 8 and atoms touch along the body diagonal. α-iron, chromium and tungsten are BCC.',
  },
  {
    id: 'cs-012',
    nodeId: 'crystal-structures',
    type: 'pick_region',
    prompt: 'Which unit cell is close-packed, with 4 atoms per cell and an APF of about 0.74?',
    diagram: 'unit_cells',
    answer: 'fcc',
    explanation:
      'FCC has atoms at the corners and the centers of all six faces: 8 × 1/8 + 6 × 1/2 = 4 atoms per cell. Atoms touch along the face diagonals, giving the maximum packing of 0.74.',
  },
  {
    id: 'cs-013',
    nodeId: 'crystal-structures',
    type: 'pick_region',
    prompt: 'Which unit cell has the lowest atomic packing factor (about 0.52)?',
    diagram: 'unit_cells',
    answer: 'sc',
    explanation:
      'Simple cubic has atoms only at the corners (1 atom per cell, CN = 6), which leaves a lot of empty space. Very few metals adopt it; polonium is the classic example.',
  },
]

export const structureQuestions: Question[] = [...atomicBonding, ...crystalStructures, ...defects, ...microstructure, ...unitCellQuestions]
