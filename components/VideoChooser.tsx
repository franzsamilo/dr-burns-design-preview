"use client";

/* eslint-disable @next/next/no-img-element */
import { useState } from "react";

type Clip = {
  src: string;
  poster: string;
  name: string;
  caption: string;
};

/**
 * A featured player with a rail of choosable patients — pick whose story to
 * watch. One big video at a time (not a wall of competing thumbnails), each
 * with a short caption of what changed for them.
 */
export function VideoChooser({ clips }: { clips: Clip[] }) {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(false);
  const clip = clips[active];

  const select = (i: number) => {
    setActive(i);
    setPlaying(false);
  };

  return (
    <div className="vchooser">
      <div className="vc-stage">
        {playing ? (
          <video
            key={clip.src}
            className="vc-video"
            src={clip.src}
            poster={clip.poster}
            autoPlay
            controls
            playsInline
            preload="metadata"
            aria-label={`${clip.name}: ${clip.caption}`}
          />
        ) : (
          <button
            type="button"
            className="vc-play"
            onClick={() => setPlaying(true)}
            aria-label={`Play ${clip.name}'s story`}
          >
            <img src={clip.poster} alt={`${clip.name}, a dental implant patient of Dr. Burns`} />
            <span className="vc-playbtn" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
            <span className="vc-stagecap">
              <span className="stars">★★★★★</span>
              <b>{clip.name}</b>
              <small>{clip.caption}</small>
            </span>
          </button>
        )}
      </div>
      <div className="vc-rail" role="tablist" aria-label="Choose a patient story">
        {clips.map((c, i) => (
          <button
            type="button"
            key={c.src}
            role="tab"
            aria-selected={i === active}
            className={"vc-thumb" + (i === active ? " is-on" : "")}
            onClick={() => select(i)}
          >
            <img src={c.poster} alt={c.name} />
            <span>
              <b>{c.name}</b>
              <small>{c.caption}</small>
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
