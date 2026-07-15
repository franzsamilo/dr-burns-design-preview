"use client";

import { useCallback, useRef, useState } from "react";

/**
 * Draggable before/after reveal. Two stacked images; the "before" is clipped
 * with clip-path (no resize distortion) and the divider is dragged with a
 * pointer or the arrow keys. A genuinely interactive proof-of-work moment.
 *
 * NOTE: wire `before`/`after` to real, matched patient photos before launch —
 * do not present two different people as one transformation.
 */
export function BeforeAfterSlider({
  before,
  after,
  beforeAlt = "Before treatment",
  afterAlt = "After treatment",
}: {
  before: string;
  after: string;
  beforeAlt?: string;
  afterAlt?: string;
}) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const setFromX = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setPos(Math.max(0, Math.min(100, ((clientX - r.left) / r.width) * 100)));
  }, []);

  const onDown = (e: React.PointerEvent) => {
    dragging.current = true;
    (e.currentTarget as HTMLElement).setPointerCapture?.(e.pointerId);
    setFromX(e.clientX);
  };
  const onMove = (e: React.PointerEvent) => {
    if (dragging.current) setFromX(e.clientX);
  };
  const onUp = () => {
    dragging.current = false;
  };
  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 4));
    if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 4));
  };

  return (
    <div
      className="ba-slider"
      ref={ref}
      onPointerMove={onMove}
      onPointerUp={onUp}
      onPointerLeave={onUp}
      style={{ ["--pos" as string]: `${pos}%` }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="ba-img ba-after" src={after} alt={afterAlt} draggable={false} />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="ba-img ba-before" src={before} alt={beforeAlt} draggable={false} />
      <span className="ba-chip ba-chip-l">Before</span>
      <span className="ba-chip ba-chip-r">After</span>
      <button
        type="button"
        className="ba-handle"
        role="slider"
        aria-label="Drag to compare before and after"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(pos)}
        onPointerDown={onDown}
        onKeyDown={onKey}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M9 6l-4 6 4 6M15 6l4 6-4 6" />
        </svg>
      </button>
    </div>
  );
}
