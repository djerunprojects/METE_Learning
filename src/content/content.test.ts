import { describe, expect, it } from 'vitest'
import { branches, diagrams, nodes, questions } from './index'
import type { SkillNode } from './types'

// Integrity checks for the content data. Run with `npm test`.

const nodeIds = new Set(nodes.map((n) => n.id))
const branchIds = new Set(branches.map((b) => b.id))

function requirements(n: SkillNode): string[] {
  return [...(n.unlock?.allOf ?? []), ...(n.unlock?.anyOf?.nodes ?? [])]
}

describe('skill tree', () => {
  it('has unique node ids', () => {
    expect(nodeIds.size).toBe(nodes.length)
  })

  it('assigns every node to an existing branch', () => {
    for (const n of nodes) expect(branchIds, n.id).toContain(n.branch)
  })

  it('only references existing nodes in unlock rules', () => {
    for (const n of nodes) for (const r of requirements(n)) expect(nodeIds, `${n.id} → ${r}`).toContain(r)
  })

  it('has satisfiable anyOf counts', () => {
    for (const n of nodes) {
      const any = n.unlock?.anyOf
      if (any) expect(any.count).toBeLessThanOrEqual(any.nodes.length)
    }
  })

  it('has exactly one always-available root node', () => {
    expect(nodes.filter((n) => !n.unlock).map((n) => n.id)).toEqual(['classes-of-materials'])
  })

  it('has no prerequisite cycles (every node is reachable)', () => {
    const learned = new Set<string>()
    let progress = true
    while (progress) {
      progress = false
      for (const n of nodes) {
        if (learned.has(n.id)) continue
        const all = (n.unlock?.allOf ?? []).every((id) => learned.has(id))
        const any = n.unlock?.anyOf
        const anyOk = !any || any.nodes.filter((id) => learned.has(id)).length >= any.count
        if (all && anyOk) {
          learned.add(n.id)
          progress = true
        }
      }
    }
    expect([...nodeIds].filter((id) => !learned.has(id))).toEqual([])
  })
})

describe('questions', () => {
  it('has unique question ids', () => {
    expect(new Set(questions.map((q) => q.id)).size).toBe(questions.length)
  })

  it('belongs to existing nodes and has an explanation', () => {
    for (const q of questions) {
      expect(nodeIds, q.id).toContain(q.nodeId)
      expect(q.explanation.trim().length, q.id).toBeGreaterThan(0)
    }
  })

  it('has valid answers for each type', () => {
    for (const q of questions) {
      switch (q.type) {
        case 'multiple_choice':
          expect(q.options.length, q.id).toBeGreaterThanOrEqual(2)
          expect(q.answer, q.id).toBeGreaterThanOrEqual(0)
          expect(q.answer, q.id).toBeLessThan(q.options.length)
          break
        case 'cause_effect':
          expect(q.answers.length, q.id).toBeGreaterThan(0)
          for (const a of q.answers) expect(a, q.id).toBeLessThan(q.options.length)
          break
        case 'matching':
          expect(q.pairs.length, q.id).toBeGreaterThanOrEqual(2)
          expect(new Set(q.pairs.map((p) => p.right)).size, q.id).toBe(q.pairs.length)
          break
        case 'pick_region':
          expect(diagrams[q.diagram].regions.map((r) => r.id), q.id).toContain(q.answer)
          break
        case 'true_false':
        case 'trend':
          break
      }
    }
  })
})
