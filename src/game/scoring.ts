import { MASTERY_THRESHOLD, PASS_THRESHOLD } from '../content'
import type { Rank } from '../content'

export const XP_PER_CORRECT = 10
export const PERFECT_BONUS = 20

export interface LessonOutcome {
  correct: number
  total: number
  accuracy: number
  xp: number
  perfect: boolean
  passed: boolean
  previousRank: Rank
  newRank: Rank
}

/**
 * Rank rules: passing (≥ PASS_THRESHOLD) earns rank 1 (Learned).
 * Once learned, a replay at ≥ MASTERY_THRESHOLD earns rank 2 (Mastered).
 * Ranks never go down.
 */
export function lessonOutcome(correct: number, total: number, previousRank: Rank): LessonOutcome {
  const accuracy = total === 0 ? 0 : correct / total
  const perfect = total > 0 && correct === total
  const passed = accuracy >= PASS_THRESHOLD
  let newRank: Rank = previousRank
  if (previousRank === 0 && passed) newRank = 1
  else if (previousRank === 1 && accuracy >= MASTERY_THRESHOLD) newRank = 2
  return {
    correct,
    total,
    accuracy,
    xp: correct * XP_PER_CORRECT + (perfect ? PERFECT_BONUS : 0),
    perfect,
    passed,
    previousRank,
    newRank,
  }
}
