import { nodes } from '../content'
import type { Rank, SkillNode } from '../content'

export type NodeStatus = 'locked' | 'available' | 'learned' | 'mastered'

export type Ranks = Record<string, Rank>

const learned = (ranks: Ranks, id: string) => (ranks[id] ?? 0) >= 1

export function isUnlocked(node: SkillNode, ranks: Ranks): boolean {
  const rule = node.unlock
  if (!rule) return true
  const allOk = (rule.allOf ?? []).every((id) => learned(ranks, id))
  const anyOk = !rule.anyOf || rule.anyOf.nodes.filter((id) => learned(ranks, id)).length >= rule.anyOf.count
  return allOk && anyOk
}

export function nodeStatus(node: SkillNode, ranks: Ranks): NodeStatus {
  const rank = ranks[node.id] ?? 0
  if (rank >= 2) return 'mastered'
  if (rank === 1) return 'learned'
  return isUnlocked(node, ranks) ? 'available' : 'locked'
}

const byId = new Map(nodes.map((n) => [n.id, n]))
export const nodeById = (id: string): SkillNode => byId.get(id)!

export interface Requirements {
  /** Every one of these must be learned. */
  all: { node: SkillNode; met: boolean }[]
  /** At least `count` of these must be learned. */
  any?: { count: number; have: number; options: { node: SkillNode; met: boolean }[] }
}

export function requirements(node: SkillNode, ranks: Ranks): Requirements {
  const all = (node.unlock?.allOf ?? []).map((id) => ({ node: nodeById(id), met: learned(ranks, id) }))
  const anyRule = node.unlock?.anyOf
  if (!anyRule) return { all }
  const options = anyRule.nodes.map((id) => ({ node: nodeById(id), met: learned(ranks, id) }))
  return { all, any: { count: anyRule.count, have: options.filter((o) => o.met).length, options } }
}
