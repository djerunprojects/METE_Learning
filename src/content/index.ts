import type { Question } from './types'
import { classesOfMaterialsQuestions } from './questions/foundations'
import { structureQuestions } from './questions/structure'
import { thermodynamicsQuestions } from './questions/thermodynamics'
import { kineticsQuestions } from './questions/kinetics'
import { propertiesQuestions } from './questions/properties'
import { characterizationQuestions } from './questions/characterization'

export { branches, nodes } from './tree'
export { diagrams } from './diagrams'
export { formulas, parseExpression } from './formulas'
export { glossary, splitAcronyms, findCapsTokens } from './glossary'
export * from './types'

/** Every question in the app. Add new question files here. */
export const questions: Question[] = [
  ...classesOfMaterialsQuestions,
  ...structureQuestions,
  ...thermodynamicsQuestions,
  ...kineticsQuestions,
  ...propertiesQuestions,
  ...characterizationQuestions,
]
