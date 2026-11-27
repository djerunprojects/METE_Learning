import { questions } from '../content'
import type { Question, TrendDirection } from '../content'

export const LESSON_LENGTH = 10

export function shuffle<T>(items: readonly T[], rng: () => number = Math.random): T[] {
  const a = [...items]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

/** Picks up to LESSON_LENGTH questions for a node, in random order. */
export function buildLesson(nodeId: string, rng: () => number = Math.random): Question[] {
  return shuffle(
    questions.filter((q) => q.nodeId === nodeId),
    rng,
  ).slice(0, LESSON_LENGTH)
}

export const REVIEW_LENGTH = 10

/** A review session: up to REVIEW_LENGTH of the most recent mistakes, in random order. */
export function buildReview(mistakes: string[], rng: () => number = Math.random): Question[] {
  const byId = new Map(questions.map((q) => [q.id, q]))
  const recent = [...mistakes].reverse().slice(0, REVIEW_LENGTH)
  return shuffle(
    recent.flatMap((id) => (byId.has(id) ? [byId.get(id)!] : [])),
    rng,
  )
}

/** Node ids that have at least one question. */
export function nodesWithQuestions(): Set<string> {
  return new Set(questions.map((q) => q.nodeId))
}

/** A learner's answer. Indices always refer to the question's original (unshuffled) order. */
export type Response =
  | { kind: 'single'; index: number }
  | { kind: 'bool'; value: boolean }
  | { kind: 'trend'; value: TrendDirection }
  | { kind: 'multi'; indices: number[] }
  /** `matches[i]` = index of the right-hand item paired with left item i. */
  | { kind: 'matching'; matches: number[] }
  | { kind: 'region'; id: string }

export function grade(q: Question, r: Response): boolean {
  switch (q.type) {
    case 'multiple_choice':
      return r.kind === 'single' && r.index === q.answer
    case 'true_false':
      return r.kind === 'bool' && r.value === q.answer
    case 'trend':
      return r.kind === 'trend' && r.value === q.answer
    case 'cause_effect': {
      if (r.kind !== 'multi') return false
      const want = [...q.answers].sort()
      const got = [...new Set(r.indices)].sort()
      return want.length === got.length && want.every((v, i) => v === got[i])
    }
    case 'matching':
      return r.kind === 'matching' && r.matches.length === q.pairs.length && r.matches.every((m, i) => m === i)
    case 'pick_region':
      return r.kind === 'region' && r.id === q.answer
  }
}
