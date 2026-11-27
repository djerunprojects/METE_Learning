// Content data formats for the METE skill tree.
// All lesson content lives in plain data files so it can be edited without touching UI code.

// ---------------------------------------------------------------------------
// Skill tree
// ---------------------------------------------------------------------------

/** Root → Core trunk → Discipline branches → Application branches (endgame). */
export type Layer = 'root' | 'core' | 'discipline' | 'application'

export interface Branch {
  id: string
  name: string
  layer: Layer
  description: string
}

/**
 * Unlock rule for a node.
 * - `allOf`: every listed node must be learned (rank ≥ 1).
 * - `anyOf`: at least `count` of the listed nodes must be learned.
 * A node with no rule (root) is always available.
 */
export interface UnlockRule {
  allOf?: string[]
  anyOf?: { count: number; nodes: string[] }
}

export interface SkillNode {
  id: string
  title: string
  branch: string
  /** Position inside its branch, starting at 1 (used for layout). */
  tier: number
  summary: string
  unlock?: UnlockRule
}

/** Ranks: 0 = not learned, 1 = Learned (passed), 2 = Mastered (passed again at ≥ 80%). */
export type Rank = 0 | 1 | 2
export const MAX_RANK: Rank = 2
/** Minimum accuracy to pass a lesson (earns rank 1). */
export const PASS_THRESHOLD = 0.6
/** Minimum accuracy on a replay to master a learned node (earns rank 2). */
export const MASTERY_THRESHOLD = 0.8

// ---------------------------------------------------------------------------
// Questions — all calculation-free. Formulas may be shown, but questions ask
// for reasoning (trends, causes, identification), never arithmetic.
// ---------------------------------------------------------------------------

interface QuestionBase {
  id: string
  /** The skill node this question belongs to. */
  nodeId: string
  prompt: string
  /** Optional formula shown above the question for context: an id from `formulas.ts`. */
  formula?: string
  /** Shown after answering, right or wrong. Should link back to the concept or formula. */
  explanation: string
}

/** Single correct option. */
export interface MultipleChoiceQuestion extends QuestionBase {
  type: 'multiple_choice'
  options: string[]
  /** Index into `options`. */
  answer: number
}

export interface TrueFalseQuestion extends QuestionBase {
  type: 'true_false'
  answer: boolean
}

/** Match each left item to its right item. Pairs are stored correctly and shuffled in the UI. */
export interface MatchingQuestion extends QuestionBase {
  type: 'matching'
  pairs: { left: string; right: string }[]
}

export type TrendDirection = 'increases' | 'decreases' | 'no_change' | 'depends'

/** "If <change>, what happens to <target>?" — answered with a direction. */
export interface TrendQuestion extends QuestionBase {
  type: 'trend'
  change: string
  target: string
  answer: TrendDirection
}

/** A scenario where one or more of the listed effects are correct (multi-select). */
export interface CauseEffectQuestion extends QuestionBase {
  type: 'cause_effect'
  scenario: string
  options: string[]
  /** Indices into `options` that are correct. Must select exactly these. */
  answers: number[]
}

/** Pick the correct labelled region on a diagram. Diagrams are drawn by the UI from `diagram`. */
export interface PickRegionQuestion extends QuestionBase {
  type: 'pick_region'
  diagram: DiagramId
  /** Region ids, must exist on the referenced diagram. */
  answer: string
}

export type Question =
  | MultipleChoiceQuestion
  | TrueFalseQuestion
  | MatchingQuestion
  | TrendQuestion
  | CauseEffectQuestion
  | PickRegionQuestion

export type QuestionType = Question['type']

// ---------------------------------------------------------------------------
// Diagrams for pick_region questions
// ---------------------------------------------------------------------------

export interface DiagramDef {
  id: string
  title: string
  regions: { id: string; label: string }[]
}

export type DiagramId =
  | 'stress_strain_ductile'
  | 'binary_eutectic'
  | 'fe_c_steel'
  | 'ttt_eutectoid'
  | 'aging_curve'
  | 'polymer_modulus'
  | 'ashby_modulus_density'
  | 'unit_cells'
  | 'cu_ni'
  | 'jominy'
  | 's_n'

// ---------------------------------------------------------------------------
// Formulas — written once in `formulas.ts` and referenced by id from questions
// ---------------------------------------------------------------------------

export interface FormulaSymbol {
  /** Symbol as written in the expression. Use `_` for a subscript, e.g. `σ_y`. */
  symbol: string
  name: string
  unit?: string
}

export interface FormulaDef {
  id: string
  name: string
  /** Expression with every symbol wrapped in braces, e.g. `{σ} = {E} · {ε}`. */
  expression: string
  symbols: FormulaSymbol[]
}

// ---------------------------------------------------------------------------
// Lessons — short reading cards shown before a skill's questions
// ---------------------------------------------------------------------------

export interface LessonCard {
  title: string
  /**
   * Paragraphs, one string each. Wrap key terms in **double asterisks** to highlight them.
   * Consecutive entries starting with "- " are shown as a bullet list.
   */
  body: string[]
  /** Optional formula id from `formulas.ts`, shown with hover/tap tooltips. */
  formula?: string
  /** Optional diagram, shown with all regions labelled. */
  diagram?: DiagramId
  /** Region of `diagram` to highlight. */
  highlight?: string
}

export interface SkillLesson {
  nodeId: string
  /** 3–5 teaching cards. */
  cards: LessonCard[]
  /** Summary shown on the final card. */
  keyPoints: string[]
}
