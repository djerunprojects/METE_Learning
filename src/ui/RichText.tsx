import { createContext, Fragment, useCallback, useContext, useId, useState } from 'react'
import type { ReactNode } from 'react'
import { glossary, splitAcronyms } from '../content'
import { Popup } from './Popup'
import { useDismiss, usePointerKind } from './tooltipHooks'

/** Set inside buttons, where acronyms must not be separate focus stops. */
const NestedContext = createContext(false)

export function InsideControl({ children }: { children: ReactNode }) {
  return <NestedContext.Provider value={true}>{children}</NestedContext.Provider>
}

/** Renders text, turning glossary acronyms into tooltips. */
export function RichText({ text }: { text: string }) {
  return (
    <>
      {splitAcronyms(text).map((s, i) =>
        s.acronym ? <Acronym key={i} text={s.text} acronym={s.acronym} /> : <Fragment key={i}>{s.text}</Fragment>,
      )}
    </>
  )
}

function Acronym({ text, acronym }: { text: string; acronym: string }) {
  const nested = useContext(NestedContext)
  const [el, setEl] = useState<HTMLSpanElement | null>(null)
  const [open, setOpen] = useState(false)
  const close = useCallback(() => setOpen(false), [])
  const pointer = usePointerKind()
  const id = useId()
  const full = glossary[acronym]
  useDismiss(open, close, [el])

  return (
    <span
      ref={setEl}
      className="acronym"
      tabIndex={nested ? undefined : 0}
      aria-describedby={open ? id : undefined}
      onPointerDown={pointer.onPointerDown}
      onPointerEnter={(e) => e.pointerType === 'mouse' && setOpen(true)}
      onPointerLeave={(e) => e.pointerType === 'mouse' && setOpen(false)}
      onFocus={() => !pointer.fromPointer() && setOpen(true)}
      onBlur={close}
      onClick={(e) => {
        pointer.release()
        if (pointer.isMouse()) return
        // Touch: show the tooltip instead of activating a surrounding button.
        e.stopPropagation()
        e.preventDefault()
        setOpen((o) => !o)
      }}
    >
      {text}
      <span className="sr-only"> ({full})</span>
      {open && el && (
        <Popup anchor={el} id={id}>
          <span className="popup-term">{acronym}</span> {full}
        </Popup>
      )}
    </span>
  )
}
