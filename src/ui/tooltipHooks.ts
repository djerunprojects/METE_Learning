import { useEffect, useRef } from 'react'
import type { PointerEvent as ReactPointerEvent } from 'react'

/**
 * Open/close behavior shared by tooltips:
 * mouse → hover; touch/pen → tap to toggle, tap elsewhere to close; keyboard → focus.
 * Escape or scrolling closes.
 */
export function useDismiss(open: boolean, close: () => void, inside: (HTMLElement | null)[]) {
  const insideRef = useRef(inside)
  useEffect(() => {
    insideRef.current = inside
  })
  useEffect(() => {
    if (!open) return
    const onDown = (e: PointerEvent) => {
      if (!insideRef.current.some((el) => el?.contains(e.target as Node))) close()
    }
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && close()
    document.addEventListener('pointerdown', onDown)
    document.addEventListener('keydown', onKey)
    window.addEventListener('scroll', close, true)
    return () => {
      document.removeEventListener('pointerdown', onDown)
      document.removeEventListener('keydown', onKey)
      window.removeEventListener('scroll', close, true)
    }
  }, [open, close])
}

/** Tracks the last pointer type so clicks can tell mouse from touch. */
export function usePointerKind() {
  const kind = useRef<string>('mouse')
  const pressing = useRef(false)
  return {
    onPointerDown: (e: ReactPointerEvent) => {
      kind.current = e.pointerType
      pressing.current = true
    },
    isMouse: () => kind.current === 'mouse',
    /** True while a pointer press is in progress (so focus came from a pointer, not the keyboard). */
    fromPointer: () => pressing.current,
    release: () => {
      pressing.current = false
    },
  }
}
