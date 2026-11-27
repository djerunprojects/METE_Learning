import { MAX_RANK } from '../content'
import type { Rank } from '../content'

export function RankPips({ rank }: { rank: Rank }) {
  return (
    <span className="pips" role="img" aria-label={`Rank ${rank} of ${MAX_RANK}`}>
      {Array.from({ length: MAX_RANK }, (_, i) => (
        <span key={i} className={`pip${i < rank ? ' is-on' : ''}`} />
      ))}
    </span>
  )
}
