"use client";

import { useEffect } from "react";

/**
 * Progressive entrance animations. Elements below the fold start hidden and
 * fade/slide up as they scroll into view (staggered within their group).
 * Above-the-fold content is left untouched (no flash), and everything is
 * disabled under prefers-reduced-motion.
 */
const SELECTOR = [
  ".sec-head",
  ".lc",
  ".svc-card",
  ".cmp",
  ".war",
  ".jcap",
  ".pstep",
  ".ba",
  ".rr-card",
  ".test-card",
  ".dsis-item",
  ".edit-block",
  ".promise-card",
  ".promise-media",
  ".authority-grid > div",
  ".story-grid > div",
  ".bio-grid > div",
  ".dark-grid > div",
  ".faces-strip",
  ".faces-grid",
  ".badge-row",
  ".cta-bar",
  ".auth-team",
  ".final-media",
].join(",");

export function Reveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const els = Array.from(document.querySelectorAll<HTMLElement>(SELECTOR));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    els.forEach((el) => {
      // Only animate elements that start fully below the fold — avoids hiding
      // (and flashing) anything already on screen.
      if (el.getBoundingClientRect().top < window.innerHeight) return;
      const parent = el.parentElement;
      const idx = parent ? Array.prototype.indexOf.call(parent.children, el) : 0;
      el.style.transitionDelay = `${Math.min(idx, 5) * 70}ms`;
      el.classList.add("reveal");
      io.observe(el);
    });

    return () => io.disconnect();
  }, []);

  return null;
}
