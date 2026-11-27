// Acronym glossary. Any of these appearing in content text (also as a plural,
// e.g. "MMCs") is shown with a tooltip giving its full name.
// The content tests fail if an all-caps acronym in the content is missing here.
export const glossary: Record<string, string> = {
  // Crystal structure
  SC: 'Simple Cubic',
  BCC: 'Body-Centered Cubic',
  FCC: 'Face-Centered Cubic',
  HCP: 'Hexagonal Close-Packed',
  APF: 'Atomic Packing Factor',
  CN: 'Coordination Number',

  // Characterization
  SEM: 'Scanning Electron Microscope',
  TEM: 'Transmission Electron Microscope',
  XRD: 'X-Ray Diffraction',
  EDS: 'Energy-Dispersive X-ray Spectroscopy',
  DSC: 'Differential Scanning Calorimetry',

  // Properties and failure
  UTS: 'Ultimate Tensile Strength',
  DBTT: 'Ductile-to-Brittle Transition Temperature',
  SCC: 'Stress Corrosion Cracking',

  // Kinetics and heat treatment
  TTT: 'Time–Temperature–Transformation',
  CCT: 'Continuous Cooling Transformation',

  // Processing
  HAZ: 'Heat-Affected Zone',
  BOF: 'Basic Oxygen Furnace',
  EAF: 'Electric Arc Furnace',
  HIP: 'Hot Isostatic Pressing',
  LPBF: 'Laser Powder Bed Fusion',
  CVD: 'Chemical Vapor Deposition',
  PVD: 'Physical Vapor Deposition',

  // Composites
  CFRP: 'Carbon-Fiber Reinforced Polymer',
  GFRP: 'Glass-Fiber Reinforced Polymer',
  MMC: 'Metal Matrix Composite',
  CMC: 'Ceramic Matrix Composite',

  // Polymers and biomaterials
  PE: 'Polyethylene',
  PP: 'Polypropylene',
  PVC: 'Polyvinyl Chloride',
  PET: 'Polyethylene Terephthalate',
  PMMA: 'Poly(methyl methacrylate)',
  PEEK: 'Polyether Ether Ketone',
  PLA: 'Polylactic Acid',
  PGA: 'Polyglycolic Acid',
  HA: 'Hydroxyapatite',

  // Aerospace and energy
  TBC: 'Thermal Barrier Coating',
  EBC: 'Environmental Barrier Coating',
  YSZ: 'Yttria-Stabilized Zirconia',
  SOFC: 'Solid Oxide Fuel Cell',
  PEMFC: 'Proton-Exchange Membrane Fuel Cell',
  PV: 'Photovoltaic',
}

export interface TextSegment {
  text: string
  /** The glossary key, when this segment is an acronym. */
  acronym?: string
}

const keys = Object.keys(glossary).sort((a, b) => b.length - a.length)
const acronymRe = new RegExp(`(?<![A-Za-z0-9])(${keys.join('|')})(s?)(?![A-Za-z0-9])`, 'g')

/** Splits text into plain segments and acronym segments. */
export function splitAcronyms(text: string): TextSegment[] {
  const out: TextSegment[] = []
  let last = 0
  for (const m of text.matchAll(acronymRe)) {
    if (m.index > last) out.push({ text: text.slice(last, m.index) })
    out.push({ text: m[0], acronym: m[1] })
    last = m.index + m[0].length
  }
  if (last < text.length) out.push({ text: text.slice(last) })
  return out
}

/** Finds every all-caps token (2+ letters, optional plural "s") — used by the content tests. */
export function findCapsTokens(text: string): string[] {
  return [...text.matchAll(/(?<![A-Za-z0-9])([A-Z]{2,})s?(?![A-Za-z0-9])/g)].map((m) => m[1])
}
