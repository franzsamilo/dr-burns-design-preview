/* eslint-disable @next/next/no-img-element */

/**
 * A full-bleed, continuously scrolling "wall of smiles" — real patients from
 * the Valley. A living gallery beats a static grid: it reads as social proof
 * you can feel, and it's the kind of moment a stock template never ships.
 * Pure CSS animation (paused on hover, stilled under reduced-motion).
 */
// Real patients only (testimonial / candid stills) — never staff headshots.
const SMILES = [
  "wall-jill",
  "review1",
  "wall-tammy",
  "kelly-2026",
  "review2",
  "wall-diane",
  "review3",
  "wall-joe",
  "angela-2026",
  "review4",
  "wall-fran",
  "mike-2026",
  "review5",
  "ron-2026",
  "kelly-2026b",
  "danny-2026",
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
