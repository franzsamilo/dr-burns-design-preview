"use client";

import { useEffect, useRef, useState } from "react";

/**
 * The 4-step journey as a stepper whose nodes light up in sequence when the
 * section scrolls into view — the "scrolling effect that shows the process"
 * from client feedback, without the tall vertical flowchart it replaced.
 * Reduced-motion shows every step already lit.
 */
export function StepFlow({
  steps,
}: {
  steps: [string, string, React.ReactNode][];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [live, setLive] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setLive(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLive(true);
          io.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div className={"stepflow" + (live ? " is-live" : "")} ref={ref}>
      {steps.map(([title, sub, icon], i) => (
        <div
          className="stepflow-item"
          key={title}
          style={{ ["--d" as string]: `${i * 0.28}s` }}
        >
          <span className="stepflow-num">{i + 1}</span>
          <div className="stepflow-body">
            <div className="stepflow-ic">
              <svg viewBox="0 0 24 24">{icon}</svg>
            </div>
            <h3>{title}</h3>
            <p>{sub}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
