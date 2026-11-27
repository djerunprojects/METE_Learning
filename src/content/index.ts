import type { Question } from './types'
import { classesOfMaterialsQuestions } from './questions/classes-of-materials'
import { stressStrainQuestions } from './questions/stress-strain'

export { branches, nodes } from './tree'
export { diagrams } from './diagrams'
export { formulas, parseExpression } from './formulas'
export { glossary, splitAcronyms, findCapsTokens } from './glossary'
export * from './types'

/** Every question in the app. Add new question files here. */
export const questions: Question[] = [...classesOfMaterialsQuestions, ...stressStrainQuestions]
