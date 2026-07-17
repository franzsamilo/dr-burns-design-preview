"use client";

/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState } from "react";

/**
 * A video that plays (muted) the moment it scrolls into view and pauses when
 * it leaves — the "it just comes alive" moment a static photo can't give. A
 * caption sits over it, and a tap unmutes. Respects reduced-motion (stays a
 * poster the user plays on click).
 */
export function ScrollVideo({
  src,
  poster,
  caption,
  sub,
  alt,
  ratio = "4/5",
}: {
  src: string;
  poster: string;
  caption: string;
  sub?: string;
  alt: string;
  ratio?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setReduce(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.play().catch(() => {});
        } else {
          el.pause();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div className="scrollvid" style={{ aspectRatio: ratio }}>
      <video
        ref={ref}
        src={src}
        poster={poster}
        muted={muted}
        loop
        playsInline
        controls={reduce}
        preload="metadata"
        aria-label={alt}
      />
      <div className="sv-cap" aria-hidden="true">
        <span className="stars">★★★★★</span>
        <b>{caption}</b>
        {sub && <small>{sub}</small>}
      </div>
      {!reduce && (
        <button
          type="button"
          className={"sv-sound" + (muted ? "" : " is-on")}
          onClick={() => {
            const v = ref.current;
            if (!v) return;
            v.muted = !v.muted;
            setMuted(v.muted);
            if (!v.muted) v.play().catch(() => {});
          }}
          aria-label={muted ? "Unmute video" : "Mute video"}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            {muted ? (
              <path d="M11 5L6 9H3v6h3l5 4V5zM19 9l-4 4m0-4l4 4" />
            ) : (
              <path d="M11 5L6 9H3v6h3l5 4V5zM16 9a4 4 0 0 1 0 6M18.5 7a7 7 0 0 1 0 10" />
            )}
          </svg>
          {muted ? "Tap for sound" : "Sound on"}
        </button>
      )}
    </div>
  );
}
