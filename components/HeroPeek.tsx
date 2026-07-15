"use client";

/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";

export function HeroPeek() {
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    const onScroll = () => setHidden(window.scrollY > 220);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <a
      className={"hero-peek" + (hidden ? " is-hidden" : "")}
      href="#dreamsmile"
      aria-label="Scroll down to see real patients"
    >
      <span className="pk-av">
        <img src="/assets/img/mike-2026.jpg" alt="" />
        <img src="/assets/img/kelly-2026.jpg" alt="" />
        <img src="/assets/img/angela-2026.jpg" alt="" />
      </span>
      <span className="pk-tx">
        <b>Real Valley patients</b>
        <small>See their new smiles below</small>
      </span>
      <span className="pk-chev">
        <svg viewBox="0 0 24 24">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </span>
    </a>
  );
}
