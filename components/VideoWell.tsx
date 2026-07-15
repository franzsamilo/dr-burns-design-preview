"use client";

/* eslint-disable @next/next/no-img-element */
import { useState } from "react";

export function VideoWell({
  src,
  poster,
  alt,
  ratio,
  overlay,
}: {
  src: string;
  poster: string;
  alt: string;
  ratio: string;
  overlay?: React.ReactNode;
}) {
  const [play, setPlay] = useState(false);
  return (
    <div className="vwell-wrap" style={{ aspectRatio: ratio }}>
      {play ? (
        <video
          className="vwell-video"
          src={src}
          poster={poster}
          autoPlay
          controls
          playsInline
          preload="metadata"
        />
      ) : (
        <button
          type="button"
          className="vwell"
          onClick={() => setPlay(true)}
          aria-label={`Play video: ${alt}`}
        >
          <img src={poster} alt={alt} />
          <span className="play" aria-hidden>
            <svg viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </button>
      )}
      {overlay && !play ? <div className="vwell-ov">{overlay}</div> : null}
    </div>
  );
}
