/* eslint-disable @next/next/no-img-element */

/**
 * Flipper vs. Bridge vs. Implant, side by side — the "what are my options
 * really" question, answered honestly (each option gets its genuine pros and
 * cons, not a straw man). Content ported from the client's WordPress
 * playground; rendered in the DreamSmile design language.
 */
const COLS: {
  title: string;
  tagline: string;
  best?: boolean;
  points: [("pro" | "con"), string][];
}[] = [
  {
    title: "Removable Flipper",
    tagline: "A temporary plastic tooth on a removable retainer.",
    points: [
      ["con", "Sits on the gums — can slip while eating or speaking"],
      ["con", "Does nothing to stop the jawbone from shrinking"],
      ["con", "A short-term stopgap, not a lasting fix"],
    ],
  },
  {
    title: "Traditional Bridge",
    tagline: "A fixed row anchored to the teeth on either side.",
    points: [
      ["pro", "Fixed in place — nothing to remove at night"],
      ["con", "Requires grinding down healthy neighboring teeth"],
      ["con", "Bone still shrinks beneath the gap over time"],
    ],
  },
  {
    title: "Dental Implant",
    tagline: "A titanium root that becomes part of your jaw.",
    best: true,
    points: [
      ["pro", "Acts as the tooth's root — preserves bone and facial structure"],
      ["pro", "Never touches the healthy teeth beside it"],
      ["pro", "Designed to last a lifetime, backed by the DreamSmile™ Warranty"],
    ],
  },
];

export function OptionsCompare() {
  return (
    <section id="options">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">Your options, side by side</span>
          <h2>What else could you do about a missing tooth?</h2>
          <p>
            There are three honest options. Here&apos;s how they actually
            compare — including what each one costs you long-term.
          </p>
        </div>
        <div className="optc-grid">
          {COLS.map((c) => (
            <div className={"optc" + (c.best ? " is-best" : "")} key={c.title}>
              {c.best && <span className="optc-flag">Best long-term</span>}
              <h3>{c.title}</h3>
              <p className="optc-tag">{c.tagline}</p>
              <ul>
                {c.points.map(([kind, text]) => (
                  <li className={kind} key={text}>
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      {kind === "pro" ? (
                        <path d="M20 6L9 17l-5-5" />
                      ) : (
                        <path d="M6 6l12 12M18 6L6 18" />
                      )}
                    </svg>
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
