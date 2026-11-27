import type { Question } from './types'
import { classesOfMaterialsQuestions } from './questions/foundations'
import { structureQuestions } from './questions/structure'
import { thermodynamicsQuestions } from './questions/thermodynamics'
import { kineticsQuestions } from './questions/kinetics'
import { propertiesQuestions } from './questions/properties'
import { characterizationQuestions } from './questions/characterization'
import { physmetQuestions } from './questions/physmet'
import { extractiveQuestions } from './questions/extractive'
import { processingQuestions } from './questions/processing'
import { ceramicsQuestions } from './questions/ceramics'
import { polymersQuestions } from './questions/polymers'
import { compositesQuestions } from './questions/composites'
import { corrosionQuestions } from './questions/corrosion'
import { functionalQuestions } from './questions/functional'
import { bioQuestions } from './questions/bio'
import { aeroQuestions } from './questions/aero'
import { energyQuestions } from './questions/energy'
import { failureQuestions } from './questions/failure'
import { selectionQuestions } from './questions/selection'
import { corePlusA } from './questions/core-plus-a'
import { corePlusB } from './questions/core-plus-b'
import { discPlusA } from './questions/disc-plus-a'
import { discPlusB } from './questions/disc-plus-b'
import { discPlusC } from './questions/disc-plus-c'
import { discPlusD } from './questions/disc-plus-d'

export { branches, nodes } from './tree'
export { lessons, lessonList } from './lessons'
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
  ...physmetQuestions,
  ...extractiveQuestions,
  ...processingQuestions,
  ...ceramicsQuestions,
  ...polymersQuestions,
  ...compositesQuestions,
  ...corrosionQuestions,
  ...functionalQuestions,
  ...bioQuestions,
  ...aeroQuestions,
  ...energyQuestions,
  ...failureQuestions,
  ...selectionQuestions,
  ...corePlusA,
  ...corePlusB,
  ...discPlusA,
  ...discPlusB,
  ...discPlusC,
  ...discPlusD,
]
