"use client";

import { useEffect, useState } from "react";

/**
 * Scroll-aware booking bar. A persistent call/book spine is repeatedly cited
 * as the single most impactful structural change on a service landing page:
 * it keeps the phone number and the primary CTA one tap away no matter how far
 * the visitor has scrolled. Appears once the hero is out of the way (so it
 * never competes with the hero CTAs), on desktop as a floating pill and on
 * mobile as a full-width bottom bar.
 */
export function StickyCta() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 640);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={"sticky-cta" + (show ? " is-visible" : "")}>
      <div className="sc-info">
        <strong>DreamSmile by Dr. Jeffrey Burns</strong>
        <span>Free consultation · new teeth often in a day</span>
      </div>
      <a className="btn btn-ghost-dark" href="tel:5407408937">
        Call 540-740-8937
      </a>
      <a className="btn btn-tan" href="#consult">
        Schedule My Free Consult
      </a>
    </div>
  );
}
