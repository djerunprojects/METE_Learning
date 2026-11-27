import { useCallback, useId, useMemo, useState } from 'react'
import { formulas, parseExpression } from '../content'
import type { FormulaSymbol } from '../content'
import { Popup } from './Popup'
import { useDismiss, usePointerKind } from './tooltipHooks'

/** Renders a symbol, turning `σ_y` into σ with subscript y. */
export function Sym({ symbol }: { symbol: string }) {
  const i = symbol.indexOf('_')
  if (i < 0) return <span className="sym">{symbol}</span>
  return (
    <span className="sym">
      {symbol.slice(0, i)}
      <sub>{symbol.slice(i + 1)}</sub>
    </span>
  )
}

function SymbolLine({ s }: { s: FormulaSymbol }) {
  return (
    <>
      <Sym symbol={s.symbol} /> = {s.name}
      {s.unit && <span className="unit"> ({s.unit})</span>}
    </>
  )
}

type Active = null | { kind: 'all' } | { kind: 'symbol'; symbol: string; el: HTMLElement }

/**
 * A formula card. Hover (or tap) the formula to see its name and all symbols;
 * hover (or tap) a single symbol to see just that symbol.
 */
export function Formula({ id }: { id: string }) {
  const f = formulas[id]
  const tokens = useMemo(() => parseExpression(f.expression), [f])
  const [card, setCard] = useState<HTMLDivElement | null>(null)
  const [active, setActive] = useState<Active>(null)
  const close = useCallback(() => setActive(null), [])
  const pointer = usePointerKind()
  const popupId = useId()
  useDismiss(active !== null, close, [card])

  const symbolDef = (sym: string) => f.symbols.find((s) => s.symbol === sym)!

  return (
    <div
      ref={setCard}
      className={`formula${active ? ' is-active' : ''}`}
      tabIndex={0}
      aria-label={`Formula: ${f.name}`}
      aria-describedby={active ? popupId : undefined}
      onPointerDown={pointer.onPointerDown}
      onPointerEnter={(e) => e.pointerType === 'mouse' && setActive({ kind: 'all' })}
      onPointerLeave={(e) => e.pointerType === 'mouse' && setActive(null)}
      onFocus={() => !pointer.fromPointer() && setActive({ kind: 'all' })}
      onBlur={close}
      onClick={() => {
        pointer.release()
        if (!pointer.isMouse()) setActive((a) => (a?.kind === 'all' ? null : { kind: 'all' }))
      }}
    >
      <div className="formula-expr">
        {tokens.map((t, i) =>
          t.symbol ? (
            <span
              key={i}
              className={`formula-sym${active?.kind === 'symbol' && active.symbol === t.symbol ? ' is-active' : ''}`}
              onPointerEnter={(e) => {
                if (e.pointerType === 'mouse') setActive({ kind: 'symbol', symbol: t.symbol!, el: e.currentTarget })
              }}
              onPointerLeave={(e) => e.pointerType === 'mouse' && setActive({ kind: 'all' })}
              onClick={(e) => {
                pointer.release()
                if (pointer.isMouse()) return
                e.stopPropagation()
                const el = e.currentTarget
                setActive((a) => (a?.kind === 'symbol' && a.symbol === t.symbol ? null : { kind: 'symbol', symbol: t.symbol!, el }))
              }}
            >
              <Sym symbol={t.symbol} />
            </span>
          ) : (
            <span key={i}>{t.text}</span>
          ),
        )}
      </div>
      <div className="formula-hint">Hover or tap for details</div>

      {active?.kind === 'symbol' && (
        <Popup anchor={active.el} id={popupId}>
          <SymbolLine s={symbolDef(active.symbol)} />
        </Popup>
      )}
      {active?.kind === 'all' && card && (
        <Popup anchor={card} id={popupId}>
          <div className="popup-title">{f.name}</div>
          <ul className="popup-symbols">
            {f.symbols.map((s) => (
              <li key={s.symbol}>
                <SymbolLine s={s} />
              </li>
            ))}
          </ul>
        </Popup>
      )}
    </div>
  )
}
