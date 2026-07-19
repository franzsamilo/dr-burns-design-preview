"use client";

import { useEffect } from "react";

/**
 * One reveal system for both pages: watches the site's section headers and
 * card families and rises them in with a small per-sibling stagger as they
 * scroll into view. Opt-in via the selector list — elements with their own
 * choreography (hero, stepper, marquee) are not included.
 *
 * Safety: nothing is hidden until JS adds `js-anim` to <html>, so SSR/no-JS
 * renders everything visible. After each element finishes animating its
 * classes are removed, handing transforms back to the stylesheet so hover
 * effects behave exactly as before. Reduced-motion opts out entirely.
 */
const TARGETS = [
  ".sec-head",
  ".statband .stat",
  ".dsis-card",
  ".svc-card",
  ".cred",
  ".auth-team",
  ".cmp",
  ".war",
  ".promise-card",
  ".pillar",
  ".ba",
  ".faq-item",
  ".rr-card",
  ".pv-card",
  ".lc",
  ".survey",
  ".qhead",
  ".edit-block",
  ".cost-grid > div",
  ".story-grid > div",
  ".dark-grid > div",
  ".protocol-grid > div",
  ".bio-grid > div",
  ".oneday-copy",
  ".tooth",
].join(",");

export function AutoReveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const els = Array.from(document.querySelectorAll<HTMLElement>(TARGETS));
    if (!els.length) return;

    // Stagger index = position among matched siblings sharing a parent.
    const byParent = new Map<Element, number>();
    for (const el of els) {
      const parent = el.parentElement ?? document.body;
      const i = byParent.get(parent) ?? 0;
      byParent.set(parent, i + 1);
      el.style.setProperty("--ari", String(i));
      el.classList.add("ar");
    }
    document.documentElement.classList.add("js-anim");

    const release = (el: HTMLElement) => {
      const delay = parseFloat(el.style.getPropertyValue("--ari") || "0") * 90;
      window.setTimeout(() => {
        el.classList.remove("ar", "ar-in");
        el.style.removeProperty("--ari");
      }, delay + 850);
    };

    const pending = new Set(els);
    const show = (el: HTMLElement) => {
      el.classList.add("ar-in");
      release(el);
      io.unobserve(el);
      pending.delete(el);
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) show(entry.target as HTMLElement);
        }
      },
      { threshold: 0.16, rootMargin: "0px 0px -4% 0px" }
    );
    els.forEach((el) => io.observe(el));

    // Guard: fast scrolls can outrun the observer; periodically reveal
    // anything sitting at or above the viewport so nothing stays hidden.
    const sweep = window.setInterval(() => {
      if (!pending.size) {
        window.clearInterval(sweep);
        return;
      }
      const limit = window.innerHeight * 0.96;
      for (const el of Array.from(pending)) {
        if (el.getBoundingClientRect().top < limit) show(el);
      }
    }, 500);

    return () => {
      io.disconnect();
      window.clearInterval(sweep);
    };
  }, []);

  return null;
}
