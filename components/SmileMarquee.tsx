/* eslint-disable @next/next/no-img-element */

/**
 * A full-bleed, continuously scrolling "wall of smiles" — real patients from
 * the Valley. A living gallery beats a static grid: it reads as social proof
 * you can feel, and it's the kind of moment a stock template never ships.
 * Pure CSS animation (paused on hover, stilled under reduced-motion).
 */
// Real patients only, and only clean SMILING frames — no mid-sentence video
// stills, no one looking away. Quality over volume; the loop fills the wall.
const SMILES = [
  "wall-tammy",
  "review3",
  "wall-diane",
  "wall-joe",
  "review4",
  "wall-fran",
];

export function SmileMarquee() {
  // Duplicate the set so the -50% keyframe loops seamlessly.
  const loop = [...SMILES, ...SMILES];
  return (
    <section className="smilewall" aria-label="Real patient smiles">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">Real smiles, real neighbors</span>
          <h2>The Shenandoah Valley is smiling</h2>
        </div>
      </div>
      <div className="smile-viewport">
        <div className="smile-track" aria-hidden="true">
          {loop.map((f, i) => (
            <figure key={i}>
              <img src={`/assets/img/${f}.jpg`} alt="" loading="lazy" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
