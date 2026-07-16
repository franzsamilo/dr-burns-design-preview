"use client";

import { useEffect, useRef, useState } from "react";

/**
 * The DreamSmile journey as a connected flowchart: a vertical spine whose fill
 * grows as you scroll through the section, lighting up each step in sequence.
 * Replaces the flat grid of cards ("boring" per feedback) with a process you
 * can watch unfold. Reduced-motion shows every step already lit.
 */
export function JourneyFlow({
  steps,
}: {
  steps: [string, string, React.ReactNode][];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setProgress(1);
      return;
    }
    const onScroll = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // 0 when the top reaches ~70% down the viewport, 1 when the bottom passes ~40%
      const start = vh * 0.7;
      const p = (start - rect.top) / (rect.height - vh * 0.3);
      setProgress(Math.max(0, Math.min(1, p)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const lit = Math.round(progress * steps.length + 0.4);

  return (
    <div className="jflow" ref={ref}>
      <div className="jflow-spine" aria-hidden="true">
        <span className="jflow-fill" style={{ height: `${progress * 100}%` }} />
      </div>
      {steps.map(([title, sub, icon], i) => (
        <div className={"jnode" + (i < lit ? " is-on" : "")} key={title}>
          <div className="jnode-dot">
            <span>{i + 1}</span>
          </div>
          <div className="jnode-card">
            <div className="jnode-ic">
              <svg viewBox="0 0 24 24">{icon}</svg>
            </div>
            <div>
              <h3>{title}</h3>
              <p>{sub}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
