import { describe, expect, it } from 'vitest'
import { branches, diagrams, findCapsTokens, formulas, glossary, lessonList, nodes, parseExpression, questions } from './index'
import type { Question, SkillNode } from './types'

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

describe('formulas', () => {
  it('uses matching ids', () => {
    for (const [key, f] of Object.entries(formulas)) expect(f.id).toBe(key)
  })

  it('describes every symbol in each expression, and nothing extra', () => {
    for (const f of Object.values(formulas)) {
      const used = new Set(parseExpression(f.expression).flatMap((t) => (t.symbol ? [t.symbol] : [])))
      const defined = new Set(f.symbols.map((s) => s.symbol))
      expect([...used].filter((s) => !defined.has(s)), `${f.id}: undescribed symbols`).toEqual([])
      expect([...defined].filter((s) => !used.has(s)), `${f.id}: unused symbols`).toEqual([])
      for (const s of f.symbols) expect(s.name.trim().length, `${f.id}: ${s.symbol}`).toBeGreaterThan(0)
    }
  })

  it('is referenced correctly by questions', () => {
    for (const q of questions) if (q.formula) expect(Object.keys(formulas), q.id).toContain(q.formula)
  })
})

function questionTexts(q: Question): string[] {
  const texts = [q.prompt, q.explanation]
  switch (q.type) {
    case 'multiple_choice':
      return [...texts, ...q.options]
    case 'cause_effect':
      return [...texts, q.scenario, ...q.options]
    case 'matching':
      return [...texts, ...q.pairs.flatMap((p) => [p.left, p.right])]
    case 'trend':
      return [...texts, q.change, q.target]
    default:
      return texts
  }
}

describe('glossary', () => {
  it('defines every acronym used in the content', () => {
    const texts = [
      ...branches.flatMap((b) => [b.name, b.description]),
      ...nodes.flatMap((n) => [n.title, n.summary]),
      ...questions.flatMap(questionTexts),
      ...Object.values(diagrams).flatMap((d) => [d.title, ...d.regions.map((r) => r.label)]),
      ...Object.values(formulas).flatMap((f) => [f.name, ...f.symbols.map((s) => s.name)]),
    ]
    const missing = new Set(texts.flatMap(findCapsTokens).filter((t) => !(t in glossary)))
    expect([...missing]).toEqual([])
  })
})

describe('coverage', () => {
  it('gives every skill with content at least 10 questions', () => {
    const counts = new Map<string, number>()
    for (const q of questions) counts.set(q.nodeId, (counts.get(q.nodeId) ?? 0) + 1)
    const short = [...counts].filter(([, n]) => n < 10)
    expect(short).toEqual([])
  })

  it('gives every skill in the tree some questions', () => {
    const withQuestions = new Set(questions.map((q) => q.nodeId))
    const missing = nodes.filter((n) => !withQuestions.has(n.id)).map((n) => n.id)
    expect(missing).toEqual([])
  })
})

describe('lessons', () => {
  it('belong to existing skills, with 3–5 cards and key points', () => {
    for (const l of lessonList) {
      expect(nodeIds, l.nodeId).toContain(l.nodeId)
      expect(l.cards.length, l.nodeId).toBeGreaterThanOrEqual(3)
      expect(l.cards.length, l.nodeId).toBeLessThanOrEqual(5)
      expect(l.keyPoints.length, l.nodeId).toBeGreaterThanOrEqual(3)
    }
    expect(new Set(lessonList.map((l) => l.nodeId)).size).toBe(lessonList.length)
  })

  it('reference existing formulas, diagrams and regions', () => {
    for (const l of lessonList)
      for (const c of l.cards) {
        if (c.formula) expect(Object.keys(formulas), `${l.nodeId}: ${c.title}`).toContain(c.formula)
        if (c.diagram) {
          expect(Object.keys(diagrams), `${l.nodeId}: ${c.title}`).toContain(c.diagram)
          if (c.highlight)
            expect(diagrams[c.diagram].regions.map((r) => r.id), `${l.nodeId}: ${c.title}`).toContain(c.highlight)
        }
        expect(c.highlight && !c.diagram, `${l.nodeId}: highlight without diagram`).toBeFalsy()
      }
  })

  it('has balanced **bold** markers and no empty paragraphs', () => {
    for (const l of lessonList)
      for (const c of l.cards)
        for (const p of c.body) {
          expect((p.match(/\*\*/g) ?? []).length % 2, `${l.nodeId}: ${p}`).toBe(0)
          expect(p.trim().length, `${l.nodeId}: ${c.title}`).toBeGreaterThan(0)
        }
  })

  it('defines every acronym used in lessons', () => {
    const texts = lessonList.flatMap((l) => [...l.keyPoints, ...l.cards.flatMap((c) => [c.title, ...c.body])])
    const missing = new Set(texts.map((t) => t.replace(/\*\*/g, '')).flatMap(findCapsTokens).filter((t) => !(t in glossary)))
    expect([...missing]).toEqual([])
  })

  it('covers the Foundations and Core skills', () => {
    const core = new Set(branches.filter((b) => b.layer === 'root' || b.layer === 'core').map((b) => b.id))
    const have = new Set(lessonList.map((l) => l.nodeId))
    expect(nodes.filter((n) => core.has(n.branch) && !have.has(n.id)).map((n) => n.id)).toEqual([])
  })
})
