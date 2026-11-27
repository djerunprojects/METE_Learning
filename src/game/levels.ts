// Player levels. Going from level n to n + 1 costs 100 + 50·(n − 1) XP,
// so each level needs a bit more than the last (100, 150, 200, …).

export const xpToNextLevel = (level: number) => 100 + 50 * (level - 1)

/** Total XP needed to reach `level` (level 1 = 0 XP). */
export function totalXpForLevel(level: number): number {
  const n = level - 1
  return 100 * n + 25 * n * (n - 1)
}

export interface LevelInfo {
  level: number
  /** XP earned inside the current level. */
  current: number
  /** XP the current level needs in total. */
  needed: number
}

export function levelInfo(xp: number): LevelInfo {
  let level = 1
  while (xp >= totalXpForLevel(level + 1)) level++
  return { level, current: xp - totalXpForLevel(level), needed: xpToNextLevel(level) }
}
