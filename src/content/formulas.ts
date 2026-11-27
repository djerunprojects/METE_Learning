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
