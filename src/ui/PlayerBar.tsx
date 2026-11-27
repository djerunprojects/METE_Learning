import { levelInfo } from '../game/levels'

export type Tab = 'tree' | 'skills'

/** Sticky header: level, XP bar, streak and the Tree / Skills tabs. */
export function PlayerBar({
  xp,
  streak,
  tab,
  onTab,
}: {
  xp: number
  streak: number
  tab: Tab
  onTab: (t: Tab) => void
}) {
  const lvl = levelInfo(xp)
  return (
    <header className="player-bar">
      <div className="player-bar-inner">
        <div className="level-badge" aria-label={`Level ${lvl.level}`}>
          <span className="level-label">LVL</span>
          {lvl.level}
        </div>
        <div className="xp-block">
          <div className="xp-text">
            <strong>{xp} XP</strong>
            <span>
              {lvl.current}/{lvl.needed} to level {lvl.level + 1}
            </span>
          </div>
          <div
            className="xp-bar"
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={lvl.needed}
            aria-valuenow={lvl.current}
            aria-label="Progress to next level"
          >
            <div className="xp-fill" style={{ width: `${(lvl.current / lvl.needed) * 100}%` }} />
          </div>
        </div>
        <div className={`streak${streak > 0 ? ' is-on' : ''}`} aria-label={`${streak} day streak`}>
          <span aria-hidden="true">▲</span> {streak}
          <span className="streak-label">day{streak === 1 ? '' : 's'}</span>
        </div>
      </div>
      <nav className="tabs" aria-label="Sections">
        <div className="tabs-inner">
          {(
            [
              ['tree', 'Skill tree'],
              ['skills', 'My skills'],
            ] as const
          ).map(([id, label]) => (
            <button
              key={id}
              type="button"
              className={`tab${tab === id ? ' is-active' : ''}`}
              aria-current={tab === id ? 'page' : undefined}
              onClick={() => onTab(id)}
            >
              {label}
            </button>
          ))}
        </div>
      </nav>
    </header>
  )
}
