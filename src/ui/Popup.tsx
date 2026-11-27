import { useLayoutEffect, useRef } from 'react'
import type { ReactNode } from 'react'
import { createPortal } from 'react-dom'

/** A floating tooltip anchored to an element, kept inside the viewport. */
export function Popup({ anchor, id, children }: { anchor: HTMLElement; id?: string; children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)

  // Measure, then place below the anchor (or above if there is no room), clamped to the viewport.
  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return
    const r = anchor.getBoundingClientRect()
    const margin = 8
    const w = el.offsetWidth
    const h = el.offsetHeight
    let top = r.bottom + margin
    if (top + h > window.innerHeight - margin) top = Math.max(margin, r.top - h - margin)
    const left = Math.min(Math.max(margin, r.left + r.width / 2 - w / 2), window.innerWidth - w - margin)
    el.style.top = `${top}px`
    el.style.left = `${left}px`
    el.style.visibility = 'visible'
  })

  return createPortal(
    <div
      ref={ref}
      id={id}
      role="tooltip"
      className="popup"
      style={{ top: 0, left: 0, visibility: 'hidden' }}
    >
      {children}
    </div>,
    document.body,
  )
}
