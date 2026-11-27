import type { FormulaDef } from './types'

// Formula library. Questions reference these by id (`formula: 'hookes-law'`).
// Wrap every symbol in braces so the UI can show a tooltip for it.
export const formulas: Record<string, FormulaDef> = {
  'metal-resistivity': {
    id: 'metal-resistivity',
    name: 'Temperature dependence of resistivity (metals)',
    expression: '{ρ} = {ρ₀} [1 + {α} ({T} − {T₀})]',
    symbols: [
      { symbol: 'ρ', name: 'Electrical resistivity at temperature T', unit: 'Ω·m' },
      { symbol: 'ρ₀', name: 'Resistivity at the reference temperature T₀', unit: 'Ω·m' },
      { symbol: 'α', name: 'Temperature coefficient of resistivity', unit: '1/K' },
      { symbol: 'T', name: 'Temperature', unit: 'K' },
      { symbol: 'T₀', name: 'Reference temperature', unit: 'K' },
    ],
  },
  'hookes-law': {
    id: 'hookes-law',
    name: "Hooke's law",
    expression: '{σ} = {E} · {ε}',
    symbols: [
      { symbol: 'σ', name: 'Engineering stress', unit: 'Pa' },
      { symbol: 'E', name: "Elastic (Young's) modulus", unit: 'Pa' },
      { symbol: 'ε', name: 'Engineering strain', unit: 'dimensionless' },
    ],
  },
  'arrhenius-diffusion': {
    id: 'arrhenius-diffusion',
    name: 'Arrhenius equation for diffusion',
    expression: '{D} = {D₀} · exp(−{Q} / {R}{T})',
    symbols: [
      { symbol: 'D', name: 'Diffusion coefficient', unit: 'm²/s' },
      { symbol: 'D₀', name: 'Pre-exponential factor', unit: 'm²/s' },
      { symbol: 'Q', name: 'Activation energy for diffusion', unit: 'J/mol' },
      { symbol: 'R', name: 'Gas constant, 8.314', unit: 'J/(mol·K)' },
      { symbol: 'T', name: 'Absolute temperature', unit: 'K' },
    ],
  },
  'hall-petch': {
    id: 'hall-petch',
    name: 'Hall–Petch relation',
    expression: '{σ_y} = {σ₀} + {k_y} / √{d}',
    symbols: [
      { symbol: 'σ_y', name: 'Yield strength', unit: 'MPa' },
      { symbol: 'σ₀', name: 'Friction stress (lattice resistance to dislocation motion)', unit: 'MPa' },
      { symbol: 'k_y', name: 'Strengthening coefficient', unit: 'MPa·√m' },
      { symbol: 'd', name: 'Average grain diameter', unit: 'm' },
    ],
  },
  'gibbs-free-energy': {
    id: 'gibbs-free-energy',
    name: 'Gibbs free energy change',
    expression: '{ΔG} = {ΔH} − {T}{ΔS}',
    symbols: [
      { symbol: 'ΔG', name: 'Change in Gibbs free energy (negative = spontaneous)', unit: 'J/mol' },
      { symbol: 'ΔH', name: 'Change in enthalpy (heat absorbed at constant pressure)', unit: 'J/mol' },
      { symbol: 'T', name: 'Absolute temperature', unit: 'K' },
      { symbol: 'ΔS', name: 'Change in entropy', unit: 'J/(mol·K)' },
    ],
  },
  'phase-rule': {
    id: 'phase-rule',
    name: 'Gibbs phase rule (constant pressure)',
    expression: '{P} + {F} = {C} + 1',
    symbols: [
      { symbol: 'P', name: 'Number of phases present' },
      { symbol: 'F', name: 'Degrees of freedom (variables that can change independently)' },
      { symbol: 'C', name: 'Number of components' },
    ],
  },
  'lever-rule': {
    id: 'lever-rule',
    name: 'Lever rule (liquid fraction in an α + L field)',
    expression: '{W_L} = ({C_α} − {C₀}) / ({C_α} − {C_L})',
    symbols: [
      { symbol: 'W_L', name: 'Mass fraction of liquid' },
      { symbol: 'C_α', name: 'Composition of the α phase (end of the tie line)', unit: 'wt%' },
      { symbol: 'C₀', name: 'Overall alloy composition', unit: 'wt%' },
      { symbol: 'C_L', name: 'Composition of the liquid (other end of the tie line)', unit: 'wt%' },
    ],
  },
  'theoretical-density': {
    id: 'theoretical-density',
    name: 'Theoretical density of a metal',
    expression: '{ρ} = {n}{A} / ({V_C}{N_A})',
    symbols: [
      { symbol: 'ρ', name: 'Density', unit: 'g/cm³' },
      { symbol: 'n', name: 'Number of atoms per unit cell' },
      { symbol: 'A', name: 'Atomic weight', unit: 'g/mol' },
      { symbol: 'V_C', name: 'Volume of the unit cell (a³ for cubic)', unit: 'cm³' },
      { symbol: 'N_A', name: "Avogadro's number, 6.022 × 10²³", unit: 'atoms/mol' },
    ],
  },
  'vacancy-concentration': {
    id: 'vacancy-concentration',
    name: 'Equilibrium number of vacancies',
    expression: '{N_v} = {N} · exp(−{Q_v} / {k}{T})',
    symbols: [
      { symbol: 'N_v', name: 'Number of vacancies', unit: 'per m³' },
      { symbol: 'N', name: 'Number of atomic sites', unit: 'per m³' },
      { symbol: 'Q_v', name: 'Energy to form one vacancy', unit: 'eV' },
      { symbol: 'k', name: "Boltzmann's constant, 8.62 × 10⁻⁵", unit: 'eV/K' },
      { symbol: 'T', name: 'Absolute temperature', unit: 'K' },
    ],
  },
  'resolved-shear-stress': {
    id: 'resolved-shear-stress',
    name: "Resolved shear stress (Schmid's law)",
    expression: '{τ_R} = {σ} cos {φ} cos {λ}',
    symbols: [
      { symbol: 'τ_R', name: 'Shear stress acting on the slip system', unit: 'MPa' },
      { symbol: 'σ', name: 'Applied tensile stress', unit: 'MPa' },
      { symbol: 'φ', name: 'Angle between the tensile axis and the slip-plane normal' },
      { symbol: 'λ', name: 'Angle between the tensile axis and the slip direction' },
    ],
  },
  'fick-first-law': {
    id: 'fick-first-law',
    name: "Fick's first law (steady-state diffusion)",
    expression: '{J} = −{D} · {dC/dx}',
    symbols: [
      { symbol: 'J', name: 'Diffusion flux (amount crossing unit area per unit time)', unit: 'kg/(m²·s)' },
      { symbol: 'D', name: 'Diffusion coefficient', unit: 'm²/s' },
      { symbol: 'dC/dx', name: 'Concentration gradient', unit: 'kg/m⁴' },
    ],
  },
  'diffusion-distance': {
    id: 'diffusion-distance',
    name: 'Characteristic diffusion distance',
    expression: '{x} ≈ √({D}{t})',
    symbols: [
      { symbol: 'x', name: 'Typical distance atoms diffuse (e.g. case depth)', unit: 'm' },
      { symbol: 'D', name: 'Diffusion coefficient', unit: 'm²/s' },
      { symbol: 't', name: 'Time', unit: 's' },
    ],
  },
  'critical-radius': {
    id: 'critical-radius',
    name: 'Critical nucleus radius (homogeneous nucleation)',
    expression: '{r*} = −2{γ} / {ΔG_v}',
    symbols: [
      { symbol: 'r*', name: 'Critical radius: smaller embryos shrink, larger nuclei grow', unit: 'm' },
      { symbol: 'γ', name: 'Surface (interface) energy', unit: 'J/m²' },
      { symbol: 'ΔG_v', name: 'Volume free energy change (negative below the transformation temperature)', unit: 'J/m³' },
    ],
  },
  'nucleation-barrier': {
    id: 'nucleation-barrier',
    name: 'Activation energy barrier for nucleation',
    expression: '{ΔG*} = 16π{γ}³ / (3 {ΔG_v}²)',
    symbols: [
      { symbol: 'ΔG*', name: 'Energy barrier to form a stable nucleus', unit: 'J' },
      { symbol: 'γ', name: 'Surface (interface) energy', unit: 'J/m²' },
      { symbol: 'ΔG_v', name: 'Volume free energy change (grows with undercooling)', unit: 'J/m³' },
    ],
  },
  avrami: {
    id: 'avrami',
    name: 'Avrami equation (fraction transformed)',
    expression: '{y} = 1 − exp(−{k}{t}^{n})',
    symbols: [
      { symbol: 'y', name: 'Fraction transformed (0 to 1)' },
      { symbol: 'k', name: 'Rate constant (depends on temperature)' },
      { symbol: 't', name: 'Time', unit: 's' },
      { symbol: 'n', name: 'Avrami exponent (depends on the mechanism)' },
    ],
  },
  'poisson-ratio': {
    id: 'poisson-ratio',
    name: "Poisson's ratio",
    expression: '{ν} = −{ε_x} / {ε_z}',
    symbols: [
      { symbol: 'ν', name: "Poisson's ratio (about 0.3 for most metals)" },
      { symbol: 'ε_x', name: 'Lateral (sideways) strain' },
      { symbol: 'ε_z', name: 'Axial strain along the load' },
    ],
  },
  'stress-intensity': {
    id: 'stress-intensity',
    name: 'Fracture toughness (plane strain)',
    expression: '{K_Ic} = {Y}{σ}√(π{a})',
    symbols: [
      { symbol: 'K_Ic', name: 'Plane-strain fracture toughness', unit: 'MPa·√m' },
      { symbol: 'Y', name: 'Geometry factor (about 1)' },
      { symbol: 'σ', name: 'Applied stress at fracture', unit: 'MPa' },
      { symbol: 'a', name: 'Crack length (half-length for an internal crack)', unit: 'm' },
    ],
  },
  'creep-rate': {
    id: 'creep-rate',
    name: 'Steady-state creep rate',
    expression: '{ε̇_s} = {K}{σ}^{n} exp(−{Q_c} / {R}{T})',
    symbols: [
      { symbol: 'ε̇_s', name: 'Steady-state (secondary) creep rate', unit: '1/s' },
      { symbol: 'K', name: 'Material constant' },
      { symbol: 'σ', name: 'Applied stress', unit: 'MPa' },
      { symbol: 'n', name: 'Stress exponent (typically 3 to 8)' },
      { symbol: 'Q_c', name: 'Activation energy for creep', unit: 'J/mol' },
      { symbol: 'R', name: 'Gas constant, 8.314', unit: 'J/(mol·K)' },
      { symbol: 'T', name: 'Absolute temperature', unit: 'K' },
    ],
  },
  'resolution-limit': {
    id: 'resolution-limit',
    name: 'Resolution limit of a microscope (Rayleigh criterion)',
    expression: '{d} = 0.61{λ} / {NA}',
    symbols: [
      { symbol: 'd', name: 'Smallest distance between two points that can be told apart', unit: 'nm' },
      { symbol: 'λ', name: 'Wavelength of the light or electrons', unit: 'nm' },
      { symbol: 'NA', name: 'Numerical aperture of the objective lens' },
    ],
  },
  bragg: {
    id: 'bragg',
    name: "Bragg's law",
    expression: '{n}{λ} = 2{d} sin {θ}',
    symbols: [
      { symbol: 'n', name: 'Order of reflection (a whole number, usually 1)' },
      { symbol: 'λ', name: 'X-ray wavelength', unit: 'nm' },
      { symbol: 'd', name: 'Spacing between the diffracting planes', unit: 'nm' },
      { symbol: 'θ', name: 'Diffraction (Bragg) angle; detectors record 2θ' },
    ],
  },
}

export interface ExprToken {
  text: string
  /** Set when this token is a symbol (it was wrapped in braces). */
  symbol?: string
}

/** Splits `{σ} = {E} · {ε}` into text and symbol tokens. */
export function parseExpression(expression: string): ExprToken[] {
  const tokens: ExprToken[] = []
  const re = /\{([^}]+)\}/g
  let last = 0
  for (let m = re.exec(expression); m; m = re.exec(expression)) {
    if (m.index > last) tokens.push({ text: expression.slice(last, m.index) })
    tokens.push({ text: m[1], symbol: m[1] })
    last = re.lastIndex
  }
  if (last < expression.length) tokens.push({ text: expression.slice(last) })
  return tokens
}
