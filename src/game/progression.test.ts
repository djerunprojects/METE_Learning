import { describe, expect, it } from 'vitest'
import { nodes } from '../content'
import { levelInfo, totalXpForLevel } from './levels'
import { applyLesson, currentStreak, emptyProgress, parseProgress, RECENT_LIMIT } from './progress'
import { lessonOutcome } from './scoring'
import { isUnlocked, nodeById, nodeStatus, requirements } from './unlock'

describe('unlocking', () => {
  it('starts with only the root available', () => {
    const available = nodes.filter((n) => nodeStatus(n, {}) === 'available').map((n) => n.id)
    expect(available).toEqual(['classes-of-materials'])
  })

  it('opens the first node of every core branch after the root', () => {
    const ranks = { 'classes-of-materials': 1 as const }
    for (const id of ['atomic-bonding', 'gibbs-energy', 'diffusion', 'stress-strain', 'microscopy']) {
      expect(isUnlocked(nodeById(id), ranks), id).toBe(true)
    }
    expect(isUnlocked(nodeById('crystal-structures'), ranks)).toBe(false)
  })

  it('needs every allOf requirement', () => {
    const node = nodeById('plasticity-hardness') // needs stress-strain + defects-dislocations
    expect(isUnlocked(node, { 'stress-strain': 1 })).toBe(false)
    expect(isUnlocked(node, { 'stress-strain': 1, 'defects-dislocations': 1 })).toBe(true)
    const req = requirements(node, { 'stress-strain': 1 })
    expect(req.all.map((r) => [r.node.id, r.met])).toEqual([
      ['stress-strain', true],
      ['defects-dislocations', false],
    ])
  })

  it('needs `count` of the anyOf options for Materials Selection', () => {
    const node = nodeById('ashby-charts')
    expect(isUnlocked(node, { forming: 1, sintering: 1 })).toBe(false)
    expect(isUnlocked(node, { forming: 1, sintering: 1, semiconductors: 2 })).toBe(true)
    expect(requirements(node, { forming: 1 }).any?.have).toBe(1)
  })

  it('reports learned and mastered', () => {
    const root = nodeById('classes-of-materials')
    expect(nodeStatus(root, { 'classes-of-materials': 1 })).toBe('learned')
    expect(nodeStatus(root, { 'classes-of-materials': 2 })).toBe('mastered')
  })
})

describe('levels', () => {
  it('needs more XP for each level', () => {
    expect(totalXpForLevel(1)).toBe(0)
    expect(totalXpForLevel(2)).toBe(100)
    expect(totalXpForLevel(3)).toBe(250)
    expect(totalXpForLevel(4)).toBe(450)
  })

  it('computes level and progress inside it', () => {
    expect(levelInfo(0)).toEqual({ level: 1, current: 0, needed: 100 })
    expect(levelInfo(99)).toEqual({ level: 1, current: 99, needed: 100 })
    expect(levelInfo(100)).toEqual({ level: 2, current: 0, needed: 150 })
    expect(levelInfo(260)).toEqual({ level: 3, current: 10, needed: 200 })
  })
})

describe('progress', () => {
  const day = (s: string) => new Date(`${s}T12:00:00`)

  it('records XP, rank, recent answers and play time', () => {
    const p = applyLesson(emptyProgress(), 'classes-of-materials', lessonOutcome(5, 6, 0), [true, true, false], day('2026-11-27'))
    expect(p.xp).toBe(50)
    expect(p.ranks['classes-of-materials']).toBe(1)
    expect(p.recent['classes-of-materials']).toEqual([true, true, false])
    expect(p.lastPlayed['classes-of-materials']).toBeDefined()
  })

  it('keeps only the latest answers', () => {
    let p = emptyProgress()
    for (let i = 0; i < 5; i++) p = applyLesson(p, 'stress-strain', lessonOutcome(0, 8, 0), Array(8).fill(i % 2 === 0))
    expect(p.recent['stress-strain'].length).toBe(RECENT_LIMIT)
  })

  it('counts a daily streak and resets it after a missed day', () => {
    const o = lessonOutcome(6, 6, 0)
    let p = applyLesson(emptyProgress(), 'stress-strain', o, [], day('2026-11-25'))
    p = applyLesson(p, 'stress-strain', o, [], day('2026-11-25'))
    expect(p.streak.count).toBe(1)
    p = applyLesson(p, 'stress-strain', o, [], day('2026-11-26'))
    expect(p.streak.count).toBe(2)
    expect(currentStreak(p, day('2026-11-27'))).toBe(2)
    expect(currentStreak(p, day('2026-11-28'))).toBe(0)
    p = applyLesson(p, 'stress-strain', o, [], day('2026-11-29'))
    expect(p.streak.count).toBe(1)
  })

  it('round-trips through JSON and drops invalid data', () => {
    const p = applyLesson(emptyProgress(), 'stress-strain', lessonOutcome(2, 2, 0), [true, true], day('2026-11-27'))
    expect(parseProgress(JSON.stringify(p))).toEqual(p)
    const messy = JSON.stringify({ ...p, xp: -5, ranks: { 'stress-strain': 7, 'no-such-node': 1, diffusion: 2 } })
    const clean = parseProgress(messy)
    expect(clean.xp).toBe(0)
    expect(clean.ranks).toEqual({ diffusion: 2 })
  })

  it('rejects files that are not progress', () => {
    expect(() => parseProgress('{"hello":1}')).toThrow()
    expect(() => parseProgress('not json')).toThrow()
  })
})
