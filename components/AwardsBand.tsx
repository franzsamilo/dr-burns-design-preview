/**
 * Awards & recognition band — the "three decades of trusted care" proof block
 * from the client's WordPress playground, rendered in our design language.
 */
const AWARDS: [string, string][] = [
  ["30+ Years", "Of experience"],
  ["People's Choice", "Award winner"],
  ["AACD", "Award recipient"],
  ["Nationally", "Recognized"],
];

export function AwardsBand() {
  return (
    <section className="awards" id="awards">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">Awards &amp; recognition</span>
          <h2>Three decades of trusted care</h2>
          <p>
            Dr. Burns has spent his career turning dental implants into an art
            form &mdash; and teaching it to dentists across the country.
          </p>
        </div>
        <div className="aw-grid">
          {AWARDS.map(([big, small]) => (
            <div className="aw-card" key={big}>
              <b>{big}</b>
              <small>{small}</small>
            </div>
          ))}
        </div>
        <div className="aw-rating">
          <span className="stars">★★★★★</span>
          <b>5.0</b> from 260+ Google reviews
        </div>
      </div>
    </section>
  );
}
