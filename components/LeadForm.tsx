"use client";

import { useState } from "react";

/**
 * Inline lead-capture form — the single highest-impact conversion element on
 * the page (short 3-field forms are the biggest tested lift for high-ticket
 * service pages). Kept intentionally short: name, phone, best time to call,
 * mirroring how most dental leads actually convert (a call-back, not a long
 * intake). Wire `submit` to a real endpoint before launch; the client-only
 * success state keeps the flow demonstrable in the design preview.
 */
export function LeadForm() {
  const [busy, setBusy] = useState(false);
  const [sent, setSent] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!e.currentTarget.checkValidity()) {
      e.currentTarget.reportValidity();
      return;
    }
    setBusy(true);
    const payload = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      // TODO(launch): POST `payload` to the practice CRM / Formspree / /api/lead.
      await new Promise((r) => setTimeout(r, 650));
      void payload;
    } finally {
      setBusy(false);
      setSent(true);
    }
  }

  if (sent) {
    return (
      <div className="lc lc-form is-sent">
        <div className="lf-badge" aria-hidden="true">
          <svg viewBox="0 0 24 24">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        <h3>You&apos;re on Dr. Burns&apos;s list.</h3>
        <p>
          A member of the team will call to set up your free consultation —
          usually the same day. No pressure, just honest answers.
        </p>
        <a className="btn btn-teal" href="tel:5407408937">
          Or call now: 540-740-8937
        </a>
      </div>
    );
  }

  return (
    <form className="lc lc-form pale" onSubmit={onSubmit} noValidate>
      <span className="eyebrow">Free consultation · 60-second request</span>
      <h3>See if implants are right for you</h3>
      <p>
        Tell us where to reach you and Dr. Burns&apos;s team will call with an
        honest answer about your options, timeline, and cost.
      </p>
      <div className="lf-fields">
        <label className="lf-field">
          <span>Your name</span>
          <input name="name" required autoComplete="name" placeholder="First and last name" />
        </label>
        <label className="lf-field">
          <span>Phone</span>
          <input name="phone" required type="tel" inputMode="tel" autoComplete="tel" placeholder="(540) 000-0000" />
        </label>
        <label className="lf-field">
          <span>Best time to call</span>
          <select name="time" defaultValue="">
            <option value="" disabled>
              Choose a time…
            </option>
            <option>Morning</option>
            <option>Afternoon</option>
            <option>Evening</option>
          </select>
        </label>
      </div>
      <button className="btn btn-teal lf-submit" type="submit" disabled={busy}>
        {busy ? "Sending…" : "Request My Free Consult"}
      </button>
      <div className="lf-trust">
        <span className="stars">★★★★★</span> Rated 5.0 by patients ·{" "}
        <a href="tel:5407408937">or call 540-740-8937</a>
      </div>
    </form>
  );
}
