"use client";

import { useState } from "react";

/**
 * Multi-step qualification survey — feels like a conversation, not a form.
 * Two quick tap-to-answer questions qualify the lead and build commitment
 * before the (short) contact step, which is the tested pattern for lifting
 * high-ticket service conversions over a bare contact form. Posts every
 * answer to /api/lead.
 */
const Q1 = [
  ["one", "One missing or failing tooth"],
  ["several", "Several teeth"],
  ["full", "A full arch / all my teeth"],
  ["unsure", "I'm not sure yet"],
] as const;

const Q2 = [
  ["asap", "As soon as I can"],
  ["soon", "In the next 1–3 months"],
  ["explore", "Just exploring for now"],
] as const;

export function SurveyForm({ source = "implants-survey" }: { source?: string }) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<{ replace?: string; timing?: string }>({});
  const [busy, setBusy] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const pick = (key: "replace" | "timing", value: string) => {
    setAnswers((a) => ({ ...a, [key]: value }));
    setStep((s) => s + 1);
  };

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!e.currentTarget.checkValidity()) {
      e.currentTarget.reportValidity();
      return;
    }
    setBusy(true);
    setError("");
    const contact = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...answers, ...contact, source }),
      });
      if (!res.ok) throw new Error("request failed");
      setSent(true);
    } catch {
      setError(
        "Something went wrong sending that. Please call 540-740-8937 and we'll help right away."
      );
    } finally {
      setBusy(false);
    }
  }

  if (sent) {
    return (
      <div className="survey is-sent">
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

  const pct = (step / 3) * 100;

  return (
    <div className="survey">
      <div className="survey-top">
        <span className="eyebrow">Free consultation · 60-second check</span>
        <div className="survey-bar" aria-hidden="true">
          <span style={{ width: `${Math.max(8, pct)}%` }} />
        </div>
        <span className="survey-step">Step {Math.min(step + 1, 3)} of 3</span>
      </div>

      {step === 0 && (
        <div className="survey-q">
          <h3>What are you looking to replace?</h3>
          <div className="survey-opts">
            {Q1.map(([v, label]) => (
              <button
                type="button"
                key={v}
                className={"survey-opt" + (answers.replace === v ? " is-on" : "")}
                onClick={() => pick("replace", v)}
              >
                {label}
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M9 6l6 6-6 6" />
                </svg>
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 1 && (
        <div className="survey-q">
          <button type="button" className="survey-back" onClick={() => setStep(0)}>
            ← Back
          </button>
          <h3>When would you like to start?</h3>
          <div className="survey-opts">
            {Q2.map(([v, label]) => (
              <button
                type="button"
                key={v}
                className={"survey-opt" + (answers.timing === v ? " is-on" : "")}
                onClick={() => pick("timing", v)}
              >
                {label}
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M9 6l6 6-6 6" />
                </svg>
              </button>
            ))}
          </div>
        </div>
      )}

      {step >= 2 && (
        <form className="survey-q survey-contact" onSubmit={onSubmit} noValidate>
          <button type="button" className="survey-back" onClick={() => setStep(1)}>
            ← Back
          </button>
          <h3>Where should Dr. Burns&apos;s team reach you?</h3>
          <p className="survey-sub">
            You&apos;ll get a straight answer on your options, timeline, and cost
            — plus the pricing &amp; information guide.
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
            {busy ? "Sending…" : "Get My Free Consult"}
          </button>
          {error && (
            <p className="lf-error" role="alert">
              {error}
            </p>
          )}
          <div className="lf-trust">
            <span className="stars">★★★★★</span> Rated 5.0 by patients ·{" "}
            <a href="tel:5407408937">or call 540-740-8937</a>
          </div>
        </form>
      )}
    </div>
  );
}
