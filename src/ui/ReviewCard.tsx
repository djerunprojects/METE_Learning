/** Prompt to practice earlier mistakes; hidden when there are none. */
export function ReviewCard({ count, onReview }: { count: number; onReview: () => void }) {
  if (count === 0) return null
  return (
    <div className="review-card">
      <div>
        <div className="review-title">Review mistakes</div>
        <div className="review-text">
          {count} question{count === 1 ? '' : 's'} you got wrong. Answer them correctly to clear them.
        </div>
      </div>
      <button type="button" className="primary" onClick={onReview}>
        Review{count > 10 ? ' 10' : ''}
      </button>
    </div>
  )
}
