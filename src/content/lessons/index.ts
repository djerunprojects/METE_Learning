import type { SkillLesson } from '../types'
import { foundationsLessons } from './foundations'
import { structureLessons } from './structure'
import { thermodynamicsLessons } from './thermodynamics'
import { kineticsLessons } from './kinetics'
import { propertiesLessons } from './properties'
import { characterizationLessons } from './characterization'
import { physmetLessons } from './physmet'
import { extractiveLessons } from './extractive'
import { processingLessons } from './processing'
import { ceramicsLessons } from './ceramics'
import { polymersLessons } from './polymers'
import { compositesLessons } from './composites'
import { corrosionLessons } from './corrosion'
import { functionalLessons } from './functional'

const all: SkillLesson[] = [
  ...foundationsLessons,
  ...structureLessons,
  ...thermodynamicsLessons,
  ...kineticsLessons,
  ...propertiesLessons,
  ...characterizationLessons,
  ...physmetLessons,
  ...extractiveLessons,
  ...processingLessons,
  ...ceramicsLessons,
  ...polymersLessons,
  ...compositesLessons,
  ...corrosionLessons,
  ...functionalLessons,
]

/** Lessons by skill node id. Add new lesson files above. */
export const lessons: Record<string, SkillLesson> = Object.fromEntries(all.map((l) => [l.nodeId, l]))
export const lessonList = all
