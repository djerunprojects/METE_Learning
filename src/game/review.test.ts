import { describe, expect, it } from 'vitest'
import { questions } from '../content'
import { buildReview, REVIEW_LENGTH } from './lesson'
import { applyLesson, applyReview, emptyProgress, MISTAKE_LIMIT, parseProgress, updateMistakes } from './progress'
import type { AnswerRecord } from './progress'
import { lessonOutcome } from './scoring'

const rec = (questionId: string, correct: boolean, nodeId = 'classes-of-materials'): AnswerRecord => ({ questionId, nodeId, correct })

describe('mistakes', () => {
  it('adds wrong answers and removes right ones', () => {
    let m = updateMistakes([], [rec('com-001', false), rec('com-002', false), rec('com-003', true)])
    expect(m).toEqual(['com-001', 'com-002'])
    m = updateMistakes(m, [rec('com-001', true)])
    expect(m).toEqual(['com-002'])
  })

  it('does not duplicate and moves a repeated mistake to the end', () => {
    expect(updateMistakes(['com-001', 'com-002'], [rec('com-001', false)])).toEqual(['com-002', 'com-001'])
  })

  it('keeps at most MISTAKE_LIMIT entries', () => {
    const ids = questions.slice(0, MISTAKE_LIMIT + 20).map((q) => rec(q.id, false, q.nodeId))
    expect(updateMistakes([], ids).length).toBe(MISTAKE_LIMIT)
  })

  it('records mistakes from a skill lesson', () => {
    const p = applyLesson(emptyProgress(), 'classes-of-materials', lessonOutcome(1, 2, 0), [true, false], new Date(), [
      rec('com-001', true),
      rec('com-002', false),
    ])
    expect(p.mistakes).toEqual(['com-002'])
  })

  it('reviews add XP and proficiency data but never change ranks', () => {
    const start = { ...emptyProgress(), ranks: { 'classes-of-materials': 1 as const }, mistakes: ['com-002', 'ss-001'] }
    const p = applyReview(start, [rec('com-002', true), rec('ss-001', false, 'stress-strain')], 10)
    expect(p.xp).toBe(10)
    expect(p.ranks).toEqual(start.ranks)
    expect(p.mistakes).toEqual(['ss-001'])
    expect(p.recent['classes-of-materials']).toEqual([true])
    expect(p.recent['stress-strain']).toEqual([false])
  })

  it('builds a review from the most recent mistakes', () => {
    const ids = questions.slice(0, 15).map((q) => q.id)
    const review = buildReview(ids)
    expect(review.length).toBe(REVIEW_LENGTH)
    expect(new Set(review.map((q) => q.id))).toEqual(new Set(ids.slice(-REVIEW_LENGTH)))
  })

  it('saves and loads mistakes, dropping unknown ids', () => {
    const p = { ...emptyProgress(), mistakes: ['com-001', 'gone-999'] }
    expect(parseProgress(JSON.stringify(p)).mistakes).toEqual(['com-001'])
    const old = JSON.parse(JSON.stringify(emptyProgress()))
    delete old.mistakes
    expect(parseProgress(JSON.stringify(old)).mistakes).toEqual([])
  })
})
