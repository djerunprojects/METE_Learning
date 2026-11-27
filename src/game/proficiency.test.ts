import { describe, expect, it } from 'vitest'
import { band, proficiency, relativeDay } from './proficiency'

describe('proficiency', () => {
  it('is null with no answers', () => {
    expect(proficiency([])).toBeNull()
  })

  it('is 1 for all correct and 0 for all wrong', () => {
    expect(proficiency([true, true, true])).toBe(1)
    expect(proficiency([false, false])).toBe(0)
  })

  it('weights newer answers more', () => {
    const improving = proficiency([false, false, true, true])!
    const declining = proficiency([true, true, false, false])!
    expect(improving).toBeGreaterThan(0.5)
    expect(declining).toBeLessThan(0.5)
    expect(improving + declining).toBeCloseTo(1)
  })

  it('drops after a mistake and recovers with practice', () => {
    const base = Array(10).fill(true)
    const afterMistake = proficiency([...base, false])!
    expect(afterMistake).toBeLessThan(1)
    expect(proficiency([...base, false, true, true])!).toBeGreaterThan(afterMistake)
  })

  it('bands values', () => {
    expect(band(0.9)).toBe('strong')
    expect(band(0.8)).toBe('strong')
    expect(band(0.6)).toBe('okay')
    expect(band(0.2)).toBe('weak')
  })
})

describe('relativeDay', () => {
  const now = new Date('2026-11-27T10:00:00')
  it('describes calendar days', () => {
    expect(relativeDay(new Date('2026-11-27T01:00:00').toISOString(), now)).toBe('today')
    expect(relativeDay(new Date('2026-11-26T23:00:00').toISOString(), now)).toBe('yesterday')
    expect(relativeDay(new Date('2026-11-24T12:00:00').toISOString(), now)).toBe('3 days ago')
    expect(relativeDay(new Date('2026-11-10T12:00:00').toISOString(), now)).toBe('2 weeks ago')
  })
})
