/**
 * Real Google-review social proof. Quotes are genuine patient reviews — do not
 * edit them into claims the reviewers didn't make.
 */
const REVIEWS = [
  {
    quote:
      "For me, dental work is a stressful event, but Jeff puts you at ease and makes it easy and painless. Highly recommend.",
    who: "Verified Google review",
  },
  {
    quote:
      "Dr. Burns listened to what I'd been through and understood what I wanted. I never felt rushed, not once.",
    who: "DreamSmile™ patient",
  },
];

export function ReviewsBand() {
  return (
    <section className="reviews" aria-label="Patient reviews">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">What patients say</span>
          <h2>5.0 on Google, from 260+ neighbors</h2>
        </div>
        <div className="rev-grid">
          {REVIEWS.map((r) => (
            <blockquote className="rev-card" key={r.who + r.quote.slice(0, 10)}>
              <span className="stars">★★★★★</span>
              <p>&ldquo;{r.quote}&rdquo;</p>
              <cite>{r.who}</cite>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
