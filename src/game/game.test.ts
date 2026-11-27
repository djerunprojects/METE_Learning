import { describe, expect, it } from 'vitest'
import { questions } from '../content'
import type { Question } from '../content'
import { buildLesson, grade, LESSON_LENGTH } from './lesson'
import { lessonOutcome, PERFECT_BONUS, XP_PER_CORRECT } from './scoring'

const byType = <T extends Question['type']>(t: T) => questions.find((q) => q.type === t) as Extract<Question, { type: T }>

describe('grade', () => {
  it('grades multiple choice', () => {
    const q = byType('multiple_choice')
    expect(grade(q, { kind: 'single', index: q.answer })).toBe(true)
    expect(grade(q, { kind: 'single', index: (q.answer + 1) % q.options.length })).toBe(false)
  })

  it('grades cause → effect only on the exact set', () => {
    const q = byType('cause_effect')
    expect(grade(q, { kind: 'multi', indices: [...q.answers].reverse() })).toBe(true)
    expect(grade(q, { kind: 'multi', indices: q.answers.slice(1) })).toBe(false)
    expect(grade(q, { kind: 'multi', indices: q.options.map((_, i) => i) })).toBe(false)
  })

  it('grades matching only when every pair is right', () => {
    const q = byType('matching')
    const right = q.pairs.map((_, i) => i)
    expect(grade(q, { kind: 'matching', matches: right })).toBe(true)
    expect(grade(q, { kind: 'matching', matches: [right[1], right[0], ...right.slice(2)] })).toBe(false)
  })

  it('grades trend, true/false and region', () => {
    const t = byType('trend')
    expect(grade(t, { kind: 'trend', value: t.answer })).toBe(true)
    expect(grade(t, { kind: 'trend', value: t.answer === 'depends' ? 'increases' : 'depends' })).toBe(false)
    const tf = byType('true_false')
    expect(grade(tf, { kind: 'bool', value: tf.answer })).toBe(true)
    expect(grade(tf, { kind: 'bool', value: !tf.answer })).toBe(false)
    const pr = byType('pick_region')
    expect(grade(pr, { kind: 'region', id: pr.answer })).toBe(true)
    expect(grade(pr, { kind: 'region', id: 'elsewhere' })).toBe(false)
  })

  it('rejects a response of the wrong kind', () => {
    const q = byType('multiple_choice')
    expect(grade(q, { kind: 'bool', value: true })).toBe(false)
  })
})

describe('buildLesson', () => {
  it('only uses the node’s questions and caps the length', () => {
    const lesson = buildLesson('classes-of-materials')
    expect(lesson.length).toBeGreaterThan(0)
    expect(lesson.length).toBeLessThanOrEqual(LESSON_LENGTH)
    expect(lesson.every((q) => q.nodeId === 'classes-of-materials')).toBe(true)
  })
})

describe('lessonOutcome', () => {
  it('awards XP with a perfect bonus', () => {
    expect(lessonOutcome(5, 8, 0).xp).toBe(5 * XP_PER_CORRECT)
    expect(lessonOutcome(8, 8, 0).xp).toBe(8 * XP_PER_CORRECT + PERFECT_BONUS)
  })

  it('learns at the pass threshold, masters only on a replay', () => {
    expect(lessonOutcome(5, 10, 0).newRank).toBe(0)
    expect(lessonOutcome(6, 10, 0).newRank).toBe(1)
    expect(lessonOutcome(10, 10, 0).newRank).toBe(1)
    expect(lessonOutcome(7, 10, 1).newRank).toBe(1)
    expect(lessonOutcome(8, 10, 1).newRank).toBe(2)
  })

  it('never lowers a rank', () => {
    expect(lessonOutcome(0, 10, 2).newRank).toBe(2)
    expect(lessonOutcome(0, 10, 1).newRank).toBe(1)
  })
})
