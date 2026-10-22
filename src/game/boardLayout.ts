import { useLayoutEffect, useMemo, useRef, useState } from 'react';

/**
 * Measures the available board area and chooses tube dimensions and rows
 * so the complete board fits on screen.
 */
const ASPECT = 2.8;
const FILL = 0.82;
const PAD_X = 8;
const PAD_Y = 6;
const GAP_X = 8;
const GAP_Y = 8;
const ROW_EXTRA = 46 + 8 + 8 + 18;
const MIN_W = 22;
const MAX_W = 72;
const ROW_PENALTY = 1.08;

export interface BoardLayout {
  rows: number;
  cols: number;
  tubeW: number;
  tubeH: number;
  cellW: number;
  gapX: number;
  gapY: number;
  padX: number;
  padY: number;
}

export function computeBoardLayout(count: number, width: number, height: number): BoardLayout {
  const n = Math.max(1, count);
  let best: BoardLayout | null = null;

  for (let rows = 1; rows <= n; rows++) {
    const cols = Math.ceil(n / rows);
    const cellW = (width - 2 * PAD_X - (cols - 1) * GAP_X) / cols;
    const rowH = (height - 2 * PAD_Y - (rows - 1) * GAP_Y) / rows;
    const byWidth = cellW * FILL;
    const byHeight = (rowH - ROW_EXTRA) / ASPECT;
    const tubeW = Math.max(MIN_W, Math.min(byWidth, byHeight, MAX_W));

    if (!best || tubeW > best.tubeW * ROW_PENALTY) {
      best = {
        rows, cols, tubeW, tubeH: tubeW * ASPECT,
        cellW: Math.max(tubeW / FILL, tubeW + 4),
        gapX: GAP_X, gapY: GAP_Y, padX: PAD_X, padY: PAD_Y,
      };
    }
  }

  const b = best as BoardLayout;
  return { ...b, tubeW: Math.floor(b.tubeW), tubeH: Math.floor(b.tubeH), cellW: Math.floor(b.cellW) };
}

/** Splits count items into balanced rows, with larger rows first. */
export function rowSizes(count: number, rows: number): number[] {
  const base = Math.floor(count / rows);
  const extra = count % rows;
  return Array.from({ length: rows }, (_, i) => base + (i < extra ? 1 : 0));
}

export function useBoardLayout<T extends HTMLElement>(count: number) {
  const ref = useRef<T>(null);
  const [size, setSize] = useState<{ w: number; h: number } | null>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => {
      const r = el.getBoundingClientRect();
      setSize((prev) => prev && Math.abs(prev.w - r.width) < 1 && Math.abs(prev.h - r.height) < 1
        ? prev : { w: r.width, h: r.height });
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    window.addEventListener('orientationchange', update);
    return () => {
      ro.disconnect();
      window.removeEventListener('orientationchange', update);
    };
  }, []);

  const layout = useMemo(() => size ? computeBoardLayout(count, size.w, size.h) : null, [count, size]);
  return { ref, layout };
}
