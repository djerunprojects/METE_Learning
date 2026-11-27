import { MAX_RANK, nodes, questions } from '../content'
import type { Rank } from '../content'
import type { LessonOutcome } from './scoring'

/** Everything the app remembers about the learner. Saved in the browser. */
export interface Progress {
  version: 1
  xp: number
  ranks: Record<string, Rank>
  /** Latest answers per node (true = correct), newest last. Feeds proficiency. */
  recent: Record<string, boolean[]>
  /** ISO timestamp of the last lesson per node. */
  lastPlayed: Record<string, string>
  streak: { count: number; lastDay: string | null }
  /** Ids of questions answered wrong and not yet answered right since, oldest first. */
  mistakes: string[]
}

/** One answered question. */
export interface AnswerRecord {
  questionId: string
  nodeId: string
  correct: boolean
}

export const RECENT_LIMIT = 20
export const STORAGE_KEY = 'mete-learning-progress'

export const emptyProgress = (): Progress => ({
  version: 1,
  xp: 0,
  ranks: {},
  recent: {},
  lastPlayed: {},
  streak: { count: 0, lastDay: null },
  mistakes: [],
})

export const MISTAKE_LIMIT = 200

/** Local calendar day, e.g. "2026-11-27". */
export function dayKey(d: Date): string {
  const pad = (n: number) => String(n).padStart(2, '0')
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`
}

function previousDay(d: Date): string {
  const y = new Date(d)
  y.setDate(y.getDate() - 1)
  return dayKey(y)
}

/** The streak as it stands today: it drops to 0 once a whole day is missed. */
export function currentStreak(p: Progress, now: Date = new Date()): number {
  const { count, lastDay } = p.streak
  return lastDay === dayKey(now) || lastDay === previousDay(now) ? count : 0
}

function bumpStreak(p: Progress, now: Date): Progress['streak'] {
  const today = dayKey(now)
  if (p.streak.lastDay === today) return p.streak
  return { count: p.streak.lastDay === previousDay(now) ? p.streak.count + 1 : 1, lastDay: today }
}

/** Wrong answers are added to the mistake list; right answers remove them. */
export function updateMistakes(mistakes: string[], answers: AnswerRecord[]): string[] {
  let list = [...mistakes]
  for (const a of answers) {
    list = list.filter((id) => id !== a.questionId)
    if (!a.correct) list.push(a.questionId)
  }
  return list.slice(-MISTAKE_LIMIT)
}

/** Records a finished skill lesson (questions of one node). */
export function applyLesson(
  p: Progress,
  nodeId: string,
  outcome: LessonOutcome,
  answers: boolean[],
  now: Date = new Date(),
  records: AnswerRecord[] = [],
): Progress {
  return {
    ...p,
    xp: p.xp + outcome.xp,
    ranks: { ...p.ranks, [nodeId]: outcome.newRank },
    recent: { ...p.recent, [nodeId]: [...(p.recent[nodeId] ?? []), ...answers].slice(-RECENT_LIMIT) },
    lastPlayed: { ...p.lastPlayed, [nodeId]: now.toISOString() },
    streak: bumpStreak(p, now),
    mistakes: updateMistakes(p.mistakes, records),
  }
}

/**
 * Records a finished mistake review: questions from several skills. Adds XP, updates each
 * skill's recent answers (proficiency) and the mistake list, but never changes ranks.
 */
export function applyReview(p: Progress, records: AnswerRecord[], xp: number, now: Date = new Date()): Progress {
  const recent = { ...p.recent }
  const lastPlayed = { ...p.lastPlayed }
  for (const r of records) {
    recent[r.nodeId] = [...(recent[r.nodeId] ?? []), r.correct].slice(-RECENT_LIMIT)
    lastPlayed[r.nodeId] = now.toISOString()
  }
  return {
    ...p,
    xp: p.xp + xp,
    recent,
    lastPlayed,
    streak: bumpStreak(p, now),
    mistakes: updateMistakes(p.mistakes, records),
  }
}

// ---------------------------------------------------------------------------
// Saving, export and import
// ---------------------------------------------------------------------------

const nodeIds = new Set(nodes.map((n) => n.id))
const questionIds = new Set(questions.map((q) => q.id))
const isObj = (v: unknown): v is Record<string, unknown> => typeof v === 'object' && v !== null && !Array.isArray(v)

/** Validates and cleans saved data. Throws if it is not METE Learning progress. */
export function parseProgress(json: string): Progress {
  const raw: unknown = JSON.parse(json)
  if (!isObj(raw) || raw.version !== 1) throw new Error('This file is not METE Learning progress.')
  const p = emptyProgress()
  if (typeof raw.xp === 'number' && Number.isFinite(raw.xp) && raw.xp >= 0) p.xp = Math.floor(raw.xp)
  if (isObj(raw.ranks)) {
    for (const [id, r] of Object.entries(raw.ranks)) {
      if (nodeIds.has(id) && Number.isInteger(r) && (r as number) >= 0 && (r as number) <= MAX_RANK) p.ranks[id] = r as Rank
    }
  }
  if (isObj(raw.recent)) {
    for (const [id, list] of Object.entries(raw.recent)) {
      if (nodeIds.has(id) && Array.isArray(list)) p.recent[id] = list.filter((v) => typeof v === 'boolean').slice(-RECENT_LIMIT)
    }
  }
  if (isObj(raw.lastPlayed)) {
    for (const [id, t] of Object.entries(raw.lastPlayed)) {
      if (nodeIds.has(id) && typeof t === 'string' && !Number.isNaN(Date.parse(t))) p.lastPlayed[id] = t
    }
  }
  if (isObj(raw.streak) && typeof raw.streak.count === 'number' && raw.streak.count >= 0) {
    const lastDay = raw.streak.lastDay
    p.streak = {
      count: Math.floor(raw.streak.count),
      lastDay: typeof lastDay === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(lastDay) ? lastDay : null,
    }
  }
  if (Array.isArray(raw.mistakes)) {
    p.mistakes = [...new Set(raw.mistakes.filter((id): id is string => typeof id === 'string' && questionIds.has(id)))].slice(
      -MISTAKE_LIMIT,
    )
  }
  return p
}

export function loadProgress(): Progress {
  try {
    const json = localStorage.getItem(STORAGE_KEY)
    return json ? parseProgress(json) : emptyProgress()
  } catch {
    return emptyProgress()
  }
}

/** Returns false if the browser refused to save (e.g. private mode or storage blocked). */
export function saveProgress(p: Progress): boolean {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(p))
    return true
  } catch {
    return false
  }
}
