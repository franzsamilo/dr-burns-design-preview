/**
 * Payment partners + the three cost reassurances. Ported from the client's
 * WordPress playground (Cherry / CareCredit / Sunbit are the practice's real
 * financing partners) and rendered in the DreamSmile design language.
 */
const OPTIONS: { name: string; accent: string; desc: string; chip: string }[] = [
  {
    name: "Cherry",
    accent: "#E96B8D",
    desc: "Simple monthly payments for eligible patients, with fast online approval.",
    chip: "Apply in 60 seconds",
  },
  {
    name: "CareCredit",
    accent: "#2D7D9B",
    desc: "Special financing terms, with no interest if paid in full within the promotional period.",
    chip: "0% if paid in full",
  },
  {
    name: "Sunbit",
    accent: "#C9922F",
    desc: "Pay over time with a soft credit check — no impact on your credit score.",
    chip: "Soft credit pull",
  },
];

const ASSURANCES: [string, string][] = [
  ["Turnkey pricing, always", "What we quote is what you pay. No hidden fees, ever."],
  ["Most insurance accepted", "We'll verify coverage and maximize every benefit for you."],
  ["Lifetime Warranty available", "Protect your investment with our Platinum tier."],
];

export function Financing() {
  return (
    <section id="financing" className="finsec">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">Payment options</span>
          <h2>Implants cost less than you think</h2>
          <p>
            Flexible monthly plans through the partners we trust — pick what
            works for you, or mix and match.
          </p>
        </div>
        <div className="fin-grid">
          {OPTIONS.map((o) => (
            <div className="fin-card" key={o.name} style={{ ["--accent" as string]: o.accent }}>
              <span className="fin-name">{o.name}</span>
              <p>{o.desc}</p>
              <span className="fin-chip">{o.chip}</span>
            </div>
          ))}
        </div>
        <div className="fin-assure">
          {ASSURANCES.map(([t, d]) => (
            <div className="fin-as" key={t}>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20 6L9 17l-5-5" />
              </svg>
              <div>
                <b>{t}</b>
                <small>{d}</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
