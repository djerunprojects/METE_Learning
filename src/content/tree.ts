import type { Branch, SkillNode, UnlockRule } from './types'

// The METE skill tree.
// Layer 1 (core) is built on the four ABET elements of materials engineering:
// structure, properties, processing and performance. Layer 2 branches each need
// specific core nodes; Layer 3 (application) branches combine several disciplines.

export const branches: Branch[] = [
  // Root
  { id: 'root', name: 'Foundations', layer: 'root', description: 'Where every materials engineer starts.' },

  // Layer 1 — Core trunk
  { id: 'structure', name: 'Structure', layer: 'core', description: 'From atoms and bonds to crystals, defects and microstructure.' },
  { id: 'thermo', name: 'Thermodynamics', layer: 'core', description: 'Why phases form: Gibbs energy, equilibrium and phase diagrams.' },
  { id: 'kinetics', name: 'Kinetics', layer: 'core', description: 'How fast things change: diffusion, nucleation and transformation.' },
  { id: 'properties', name: 'Mechanical Properties', layer: 'core', description: 'How materials respond to load, from elasticity to failure.' },
  { id: 'characterization', name: 'Characterization', layer: 'core', description: 'How we look inside materials and measure them.' },

  // Layer 2 — Disciplines
  { id: 'physmet', name: 'Physical Metallurgy', layer: 'discipline', description: 'Controlling metal properties through microstructure.' },
  { id: 'extractive', name: 'Extractive Metallurgy', layer: 'discipline', description: 'Getting metals out of ores and refining them.' },
  { id: 'processing', name: 'Processing & Manufacturing', layer: 'discipline', description: 'Shaping and joining materials into parts.' },
  { id: 'ceramics', name: 'Ceramics & Glasses', layer: 'discipline', description: 'Ionic and covalent solids, sintering and glass.' },
  { id: 'polymers', name: 'Polymers', layer: 'discipline', description: 'Long-chain molecules and their unique behavior.' },
  { id: 'composites', name: 'Composites', layer: 'discipline', description: 'Combining materials to get the best of each.' },
  { id: 'corrosion', name: 'Corrosion & Degradation', layer: 'discipline', description: 'How materials are attacked by their environment, and how to protect them.' },
  { id: 'functional', name: 'Functional Materials', layer: 'discipline', description: 'Electrical, magnetic, optical and thermal properties.' },

  // Layer 3 — Applications (endgame)
  { id: 'bio', name: 'Biomaterials', layer: 'application', description: 'Materials that work inside the human body.' },
  { id: 'aero', name: 'Aerospace Materials', layer: 'application', description: 'Light, strong and heat-resistant materials for flight and space.' },
  { id: 'energy', name: 'Energy Materials', layer: 'application', description: 'Batteries, fuel cells, solar and nuclear materials.' },
  { id: 'failure', name: 'Failure Analysis', layer: 'application', description: 'Reading broken parts to find out why they failed.' },
  { id: 'selection', name: 'Materials Selection', layer: 'application', description: 'Choosing the right material for the job.' },
]

interface NodeSpec {
  id: string
  title: string
  summary: string
  /** Extra requirements besides the previous node in the branch. */
  also?: string[]
}

/**
 * Builds a branch as a chain: node 1 needs `entry`, each later node needs the
 * previous node plus any `also` requirements.
 */
function chain(branch: string, entry: UnlockRule | undefined, specs: NodeSpec[]): SkillNode[] {
  return specs.map((spec, i) => {
    let unlock: UnlockRule | undefined
    if (i === 0) {
      unlock = entry
        ? { ...entry, allOf: [...(entry.allOf ?? []), ...(spec.also ?? [])] }
        : spec.also ? { allOf: spec.also } : undefined
    } else {
      unlock = { allOf: [specs[i - 1].id, ...(spec.also ?? [])] }
    }
    return { id: spec.id, title: spec.title, branch, tier: i + 1, summary: spec.summary, unlock }
  })
}

const ROOT = 'classes-of-materials'
const fromRoot: UnlockRule = { allOf: [ROOT] }

export const nodes: SkillNode[] = [
  // ---- Root ----
  ...chain('root', undefined, [
    { id: ROOT, title: 'Classes of Materials', summary: 'Metals, ceramics, polymers and composites — and what sets them apart.' },
  ]),

  // ---- Layer 1: Core ----
  ...chain('structure', fromRoot, [
    { id: 'atomic-bonding', title: 'Atomic Bonding', summary: 'Ionic, covalent, metallic and secondary bonds, and the properties they cause.' },
    { id: 'crystal-structures', title: 'Crystal Structures', summary: 'SC, BCC, FCC and HCP lattices, coordination number and packing.' },
    { id: 'defects-dislocations', title: 'Defects & Dislocations', summary: 'Vacancies, interstitials, dislocations and grain boundaries.' },
    { id: 'microstructure-grains', title: 'Microstructure & Grains', summary: 'Grains, phases and how microstructure controls properties.' },
  ]),
  ...chain('thermo', fromRoot, [
    { id: 'gibbs-energy', title: 'Gibbs Energy & Equilibrium', summary: 'G = H − T·S and why systems move toward lower free energy.' },
    { id: 'phase-diagrams', title: 'Phase Diagrams', summary: 'Binary diagrams, phase fields, tie lines and the lever rule.' },
    { id: 'fe-c-diagram', title: 'The Fe–C Diagram', summary: 'Ferrite, austenite, cementite, pearlite and the eutectoid.' },
  ]),
  ...chain('kinetics', fromRoot, [
    { id: 'diffusion', title: 'Diffusion', summary: "Fick's laws, diffusion mechanisms and temperature dependence." },
    { id: 'nucleation-growth', title: 'Nucleation & Growth', summary: 'Homogeneous vs heterogeneous nucleation, undercooling and growth.', also: ['phase-diagrams'] },
    { id: 'ttt-cct', title: 'TTT & CCT Diagrams', summary: 'Transformation timing in steels: pearlite, bainite and martensite.', also: ['fe-c-diagram'] },
  ]),
  ...chain('properties', fromRoot, [
    { id: 'stress-strain', title: 'Stress, Strain & Elasticity', summary: "Engineering stress and strain, Hooke's law and elastic modulus." },
    { id: 'plasticity-hardness', title: 'Plasticity & Hardness', summary: 'Yielding, strain hardening, ductility and hardness.', also: ['defects-dislocations'] },
    { id: 'fracture-toughness', title: 'Fracture & Toughness', summary: 'Ductile vs brittle fracture, cracks and fracture toughness.' },
    { id: 'fatigue-creep', title: 'Fatigue & Creep', summary: 'Failure under cyclic loads and slow deformation at high temperature.', also: ['diffusion'] },
  ]),
  ...chain('characterization', fromRoot, [
    { id: 'microscopy', title: 'Optical & Electron Microscopy', summary: 'Light microscopy, SEM and what each can reveal.' },
    { id: 'xrd', title: 'X-ray Diffraction', summary: "Bragg's law and identifying crystal structures and phases.", also: ['crystal-structures'] },
    { id: 'mechanical-testing', title: 'Mechanical Testing', summary: 'Tensile, hardness and impact tests and what they measure.', also: ['stress-strain'] },
  ]),

  // ---- Layer 2: Disciplines ----
  ...chain('physmet', { allOf: ['defects-dislocations', 'plasticity-hardness'] }, [
    { id: 'strengthening-mechanisms', title: 'Strengthening Mechanisms', summary: 'Grain refinement, solid solution, strain hardening and precipitates.' },
    { id: 'heat-treatment-steels', title: 'Heat Treatment of Steels', summary: 'Annealing, normalizing, quenching and tempering.', also: ['ttt-cct'] },
    { id: 'nonferrous-alloys', title: 'Non-ferrous Alloys', summary: 'Aluminum, copper and titanium alloys and their uses.' },
    { id: 'precipitation-hardening', title: 'Precipitation Hardening', summary: 'Solution treatment, aging and why over-aging softens.' },
  ]),
  ...chain('extractive', { allOf: ['gibbs-energy'] }, [
    { id: 'mineral-processing', title: 'Mineral Processing', summary: 'Comminution, separation and flotation of ores.' },
    { id: 'pyrometallurgy', title: 'Pyrometallurgy', summary: 'High-temperature extraction and reading Ellingham diagrams.' },
    { id: 'hydro-electrometallurgy', title: 'Hydro- & Electrometallurgy', summary: 'Leaching, solvent extraction and electrowinning.' },
    { id: 'iron-steelmaking', title: 'Iron & Steelmaking', summary: 'Blast furnace, BOF and electric arc furnace routes.' },
  ]),
  ...chain('processing', { allOf: ['phase-diagrams', 'nucleation-growth'] }, [
    { id: 'solidification-casting', title: 'Solidification & Casting', summary: 'Cooling rate, grain structure, segregation and casting defects.' },
    { id: 'forming', title: 'Metal Forming', summary: 'Rolling, forging, extrusion; hot vs cold working.', also: ['plasticity-hardness'] },
    { id: 'welding-joining', title: 'Welding & Joining', summary: 'Fusion welding, the heat-affected zone and other joining methods.' },
    { id: 'powder-metallurgy', title: 'Powder Metallurgy', summary: 'Powder production, compaction and sintering of metals.', also: ['diffusion'] },
    { id: 'additive-manufacturing', title: 'Additive Manufacturing', summary: 'Metal 3D printing, its microstructures and defects.' },
  ]),
  ...chain('ceramics', { allOf: ['atomic-bonding'] }, [
    { id: 'ceramic-structures', title: 'Ceramic Structures', summary: 'Ionic and covalent ceramic crystals and why ceramics are brittle.' },
    { id: 'sintering', title: 'Sintering', summary: 'Densifying powders by diffusion; porosity and grain growth.', also: ['diffusion'] },
    { id: 'glass-ceramics', title: 'Glasses & Glass-Ceramics', summary: 'Amorphous structure, the glass transition and controlled crystallization.' },
    { id: 'refractories', title: 'Refractories', summary: 'Materials that survive extreme furnace temperatures.' },
  ]),
  ...chain('polymers', { allOf: ['atomic-bonding'] }, [
    { id: 'polymer-structure', title: 'Polymer Structure', summary: 'Chains, molecular weight, branching, crosslinking and crystallinity.' },
    { id: 'polymer-thermal', title: 'Thermal Behavior of Polymers', summary: 'Glass transition (Tg), melting (Tm), thermoplastics vs thermosets.' },
    { id: 'viscoelasticity', title: 'Viscoelasticity', summary: 'Time- and temperature-dependent behavior: creep and stress relaxation.', also: ['stress-strain'] },
    { id: 'polymer-processing', title: 'Polymer Processing', summary: 'Extrusion, injection molding and their effect on properties.' },
  ]),
  ...chain('composites', { allOf: ['polymer-structure', 'ceramic-structures'] }, [
    { id: 'matrix-reinforcement', title: 'Matrix & Reinforcement', summary: 'The roles of the matrix, the reinforcement and the interface.' },
    { id: 'rule-of-mixtures', title: 'Rule of Mixtures', summary: 'How fiber fraction and direction set composite properties (concept only).' },
    { id: 'fiber-composites', title: 'Fiber Composites', summary: 'CFRP and GFRP, fiber orientation and laminates.' },
    { id: 'mmc-cmc', title: 'Metal & Ceramic Matrix Composites', summary: 'MMCs and CMCs for stiffness and high-temperature use.' },
  ]),
  ...chain('corrosion', { allOf: ['gibbs-energy'] }, [
    { id: 'electrochemistry', title: 'Electrochemistry Basics', summary: 'Anodes, cathodes, galvanic series and why metals corrode.' },
    { id: 'forms-of-corrosion', title: 'Forms of Corrosion', summary: 'Uniform, galvanic, pitting, crevice, intergranular and stress corrosion cracking.', also: ['microstructure-grains'] },
    { id: 'high-temp-oxidation', title: 'High-Temperature Oxidation', summary: 'Oxide scale growth and protective vs non-protective oxides.', also: ['diffusion'] },
    { id: 'protection-coatings', title: 'Protection & Coatings', summary: 'Passivation, cathodic protection, inhibitors and coatings.' },
  ]),
  ...chain('functional', { allOf: ['atomic-bonding', 'crystal-structures'] }, [
    { id: 'electrical-properties', title: 'Electrical Properties', summary: 'Conductors, insulators and band structure.' },
    { id: 'semiconductors', title: 'Semiconductors', summary: 'Intrinsic vs extrinsic, doping and p–n junctions.' },
    { id: 'magnetic-materials', title: 'Magnetic Materials', summary: 'Ferromagnetism, domains, soft vs hard magnets.' },
    { id: 'optical-thermal', title: 'Optical & Thermal Properties', summary: 'Absorption, transparency, thermal expansion and conductivity.' },
  ]),

  // ---- Layer 3: Applications ----
  ...chain('bio', { allOf: ['forms-of-corrosion', 'ceramic-structures', 'polymer-thermal'] }, [
    { id: 'biocompatibility', title: 'Biocompatibility & Host Response', summary: 'How the body reacts to implants: inflammation and the foreign body response.' },
    { id: 'metallic-implants', title: 'Metallic Implants', summary: 'Ti-6Al-4V, CoCr and 316L stainless steel; stress shielding.' },
    { id: 'bioceramics', title: 'Bioceramics', summary: 'Hydroxyapatite, bioactive glass and alumina/zirconia.' },
    { id: 'biodegradable-materials', title: 'Biodegradable Materials', summary: 'Mg alloys and PLA/PGA that dissolve as tissue heals.' },
    { id: 'tissue-scaffolds', title: 'Tissue Scaffolds', summary: 'Porous structures that guide tissue regrowth.' },
  ]),
  ...chain('aero', { allOf: ['precipitation-hardening'] }, [
    { id: 'lightweight-alloys', title: 'Lightweight Alloys', summary: 'Al-Li and titanium alloys for airframes.' },
    { id: 'superalloys', title: 'Ni-Based Superalloys', summary: "γ/γ′ microstructure, single crystals and creep resistance in turbines.", also: ['fatigue-creep'] },
    { id: 'thermal-barrier-coatings', title: 'Thermal Barrier Coatings', summary: 'Ceramic topcoats and bond coats that protect hot turbine parts.', also: ['high-temp-oxidation'] },
    { id: 'aerospace-composites', title: 'Aerospace Composites', summary: 'CFRP structures and their damage tolerance.', also: ['fiber-composites'] },
    { id: 'thermal-protection', title: 'Thermal Protection Systems', summary: 'Heat shields, ablatives and materials for re-entry and hypersonics.' },
  ]),
  ...chain('energy', { allOf: ['semiconductors', 'diffusion'] }, [
    { id: 'battery-materials', title: 'Battery Materials', summary: 'Li-ion electrodes, electrolytes and degradation.' },
    { id: 'fuel-cells-hydrogen', title: 'Fuel Cells & Hydrogen', summary: 'Fuel cell materials, hydrogen storage and embrittlement.', also: ['electrochemistry'] },
    { id: 'photovoltaics', title: 'Photovoltaics', summary: 'Silicon and thin-film solar cells.' },
    { id: 'nuclear-materials', title: 'Nuclear Materials', summary: 'Radiation damage, swelling and embrittlement in reactor materials.', also: ['defects-dislocations'] },
  ]),
  ...chain('failure', { allOf: ['fracture-toughness', 'microscopy'] }, [
    { id: 'fractography', title: 'Fractography', summary: 'Reading fracture surfaces: dimples, cleavage and beach marks.' },
    { id: 'root-cause-analysis', title: 'Root Cause Analysis', summary: 'A systematic method to find why a part failed.', also: ['fatigue-creep', 'forms-of-corrosion'] },
    { id: 'failure-case-studies', title: 'Failure Case Studies', summary: 'Famous real-world failures and their lessons.' },
  ]),
  ...chain(
    'selection',
    {
      // Needs real breadth: at least 3 discipline branches started past their first node.
      anyOf: {
        count: 3,
        nodes: ['heat-treatment-steels', 'pyrometallurgy', 'forming', 'sintering', 'polymer-thermal', 'rule-of-mixtures', 'forms-of-corrosion', 'semiconductors'],
      },
    },
    [
      { id: 'ashby-charts', title: 'Ashby Charts', summary: 'Property maps and performance indices (concept only).' },
      { id: 'selection-tradeoffs', title: 'Selection Trade-offs', summary: 'Balancing performance, cost, processing and availability.' },
      { id: 'sustainability-recycling', title: 'Sustainability & Recycling', summary: 'Embodied energy, life-cycle thinking and recyclability.' },
    ],
  ),
]
