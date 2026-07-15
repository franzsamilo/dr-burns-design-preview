/* eslint-disable @next/next/no-img-element */

function Check() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

/**
 * Cost / financing reassurance — answers the #1 implant objection (price)
 * using the practice's real position: flexible financing, every cost in
 * writing up front, and help using insurance.
 */
export function CostSection() {
  return (
    <section id="cost">
      <div className="wrap cost-grid">
        <div className="cost-media">
          <img
            src="/assets/img/burns-consult.jpg"
            alt="Dr. Burns talking a patient through implant cost and financing"
          />
        </div>
        <div>
          <span className="eyebrow">The cost conversation, handled</span>
          <h2>Care that fits your budget, in writing</h2>
          <p>
            The price of implants shouldn&apos;t be a mystery. Dr. Burns shows
            you the whole number before anything begins — then helps you make it
            work.
          </p>
          <ul className="cost-list">
            <li>
              <span className="ck">
                <Check />
              </span>
              <div>
                <b>Flexible financing.</b> Monthly plans so you can start now and
                pay over time.
              </div>
            </li>
            <li>
              <span className="ck">
                <Check />
              </span>
              <div>
                <b>Every cost up front.</b> A clear written quote at your free
                consult — no hidden fees, no surprise add-ons.
              </div>
            </li>
            <li>
              <span className="ck">
                <Check />
              </span>
              <div>
                <b>Insurance, decoded.</b> We help you get the most from the
                benefits you already have.
              </div>
            </li>
          </ul>
          <div className="cost-note">
            Individual implants from <b>$1,500</b> — your exact quote comes at
            your free consultation.
          </div>
          <a className="btn btn-tan" href="#consult">
            Get My Written Quote
          </a>
        </div>
      </div>
    </section>
  );
}
