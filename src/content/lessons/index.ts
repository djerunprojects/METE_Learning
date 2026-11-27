import type { SkillLesson } from '../types'
import { foundationsLessons } from './foundations'
import { structureLessons } from './structure'
import { thermodynamicsLessons } from './thermodynamics'
import { kineticsLessons } from './kinetics'
import { propertiesLessons } from './properties'
import { characterizationLessons } from './characterization'

const all: SkillLesson[] = [
  ...foundationsLessons,
  ...structureLessons,
  ...thermodynamicsLessons,
  ...kineticsLessons,
  ...propertiesLessons,
  ...characterizationLessons,
]

/** Lessons by skill node id. Add new lesson files above. */
export const lessons: Record<string, SkillLesson> = Object.fromEntries(all.map((l) => [l.nodeId, l]))
export const lessonList = all
