// Proficiency: accuracy over a skill's recent answers (up to the last 20),
// weighted so newer answers count more. A mistake lowers it, practice raises it.

/** Returns 0–1, or null when there are no answers yet. `answers` is oldest first. */
export function proficiency(answers: readonly boolean[]): number | null {
  if (answers.length === 0) return null
  let total = 0
  let score = 0
  answers.forEach((correct, i) => {
    const weight = i + 1 // oldest = 1, newest = n
    total += weight
    if (correct) score += weight
  })
  return score / total
}

export type ProficiencyBand = 'strong' | 'okay' | 'weak'

export function band(p: number): ProficiencyBand {
  if (p >= 0.8) return 'strong'
  if (p >= 0.5) return 'okay'
  return 'weak'
}

/** "today", "yesterday", "3 days ago", … based on calendar days. */
export function relativeDay(iso: string, now: Date = new Date()): string {
  const then = new Date(iso)
  const startOf = (d: Date) => new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime()
  const days = Math.round((startOf(now) - startOf(then)) / 86_400_000)
  if (days <= 0) return 'today'
  if (days === 1) return 'yesterday'
  if (days < 7) return `${days} days ago`
  if (days < 14) return '1 week ago'
  if (days < 60) return `${Math.floor(days / 7)} weeks ago`
  return `${Math.floor(days / 30)} months ago`
}
