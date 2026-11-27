import type { DiagramId, Question, TrendDirection } from '../types'

// Compact helpers for writing many questions for one skill node.
// Usage: const q = forNode('crystal-structures'); q.mc('cs-014', 'Prompt?', ['A', 'B'], 0, 'Explanation.')

export function forNode(nodeId: string) {
  return {
    /** Multiple choice: `answer` is the index of the correct option. */
    mc: (id: string, prompt: string, options: string[], answer: number, explanation: string, formula?: string): Question => ({
      id, nodeId, type: 'multiple_choice', prompt, options, answer, explanation, ...(formula ? { formula } : {}),
    }),
    tf: (id: string, prompt: string, answer: boolean, explanation: string, formula?: string): Question => ({
      id, nodeId, type: 'true_false', prompt, answer, explanation, ...(formula ? { formula } : {}),
    }),
    /** Trend: "If <change>, what happens to <target>?" */
    tr: (
      id: string, prompt: string, change: string, target: string, answer: TrendDirection, explanation: string, formula?: string,
    ): Question => ({
      id, nodeId, type: 'trend', prompt, change, target, answer, explanation, ...(formula ? { formula } : {}),
    }),
    /** Cause → effect, select all that apply: `answers` are the indices of correct options. */
    ce: (id: string, prompt: string, scenario: string, options: string[], answers: number[], explanation: string): Question => ({
      id, nodeId, type: 'cause_effect', prompt, scenario, options, answers, explanation,
    }),
    /** Matching: pairs of [left, right], stored in the correct order. */
    mt: (id: string, prompt: string, pairs: [string, string][], explanation: string): Question => ({
      id, nodeId, type: 'matching', prompt, pairs: pairs.map(([left, right]) => ({ left, right })), explanation,
    }),
    /** Pick the region on a diagram. */
    pr: (id: string, prompt: string, diagram: DiagramId, answer: string, explanation: string): Question => ({
      id, nodeId, type: 'pick_region', prompt, diagram, answer, explanation,
    }),
  }
}
