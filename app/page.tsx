/* eslint-disable @next/next/no-img-element */
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { StickyCta } from "@/components/StickyCta";
import { VideoWell } from "@/components/VideoWell";
import { Reveal } from "@/components/Reveal";
import { LeadForm } from "@/components/LeadForm";
import { StatCounter } from "@/components/StatCounter";
import { SmileMarquee } from "@/components/SmileMarquee";
import { CostSection } from "@/components/CostSection";
import { ReviewsBand } from "@/components/ReviewsBand";

function Check() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}
function Cross() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}
const CRED_ICONS: Record<string, React.ReactNode> = {
  medal: (
    <>
      <circle cx="12" cy="8" r="5" />
      <path d="M8.5 12.5L7 21l5-3 5 3-1.5-8.5" />
    </>
  ),
  cert: (
    <>
      <path d="M12 3l7 3v5c0 4-3 7-7 8-4-1-7-4-7-8V6l7-3z" />
      <path d="M9 11l2 2 4-4" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c3 3.5 3 14.5 0 18M12 3c-3 3.5-3 14.5 0 18" />
    </>
  ),
  trophy: (
    <>
      <path d="M7 4h10v4a5 5 0 01-10 0V4z" />
      <path d="M7 6H4a3 3 0 003 3M17 6h3a3 3 0 01-3 3" />
      <path d="M12 13v4M9 20h6M10 20l.5-3h3l.5 3" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </>
  ),
};

const LOCAL_BUSINESS = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: "Jeffrey S. Burns, DDS",
  alternateName: "DreamSmile by Dr. Jeffrey Burns",
  image: "https://www.jeffreyburns.com/assets/img/dr-burns-smile.jpg",
  url: "https://www.jeffreyburns.com/",
  telephone: "+1-540-740-8937",
  priceRange: "$$",
  description:
    "Full-arch dental implants, same-day teeth, and complete general and cosmetic dentistry in New Market, VA, serving Harrisonburg, Winchester and the Shenandoah Valley.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "9626 South Congress St",
    addressLocality: "New Market",
    addressRegion: "VA",
    postalCode: "22844",
    addressCountry: "US",
  },
  geo: { "@type": "GeoCoordinates", latitude: 38.6476, longitude: -78.6739 },
  areaServed: [
    "New Market VA",
    "Harrisonburg VA",
    "Winchester VA",
    "Shenandoah Valley",
  ],
  aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", bestRating: "5" },
  sameAs: [
    "https://www.facebook.com/JeffreySBurnsDDS/",
    "https://www.instagram.com/jeffreys.burnsdds/",
  ],
};

export default function HomePage() {
  return (
    <>
      <SiteHeader />

      {/* 1. HERO */}
      <section className="hero" id="top">
        <div className="wrap hero-grid">
          <div>
            <span className="eyebrow">
              Dental implants in New Market &amp; the Shenandoah Valley
            </span>
            <h1>
              A Dream Smile You Never Have to <em>Hide</em>
            </h1>
            <div className="sub">
              DreamSmile<sup className="tm">&trade;</sup> by Dr. Jeffrey Burns.
            </div>
            <p className="lede">
              Replace one tooth, several teeth, or a whole smile close to home,
              with one doctor who&apos;s done this for more than 30 years. New
              teeth, often in a single day.
            </p>
            <ul className="hero-ticks">
              <li>
                <Check />
                30+ years placing implants, 98%+ success rate
              </li>
              <li>
                <Check />
                Sedation with a physician anesthesiologist, so fear never gets a
                vote
              </li>
              <li>
                <Check />
                Backed by the DreamSmile&trade; Lifetime Warranty
              </li>
            </ul>
            <div className="hero-actions">
              <a className="btn btn-tan" href="#consult">
                Schedule My Free Consultation
              </a>
              <a className="btn btn-ghost" href="tel:5407408937">
                Call: 540-740-8937
              </a>
            </div>
            <div className="hero-trust">
              <div className="ht-avatars">
                {["wall-tammy", "wall-diane", "wall-jill"].map(
                  (f) => (
                    <img key={f} src={`/assets/img/${f}.jpg`} alt="" aria-hidden="true" />
                  )
                )}
              </div>
              <p>
                <span className="stars">★★★★★</span>
                <b>Rated 5.0</b> from 260+ patient reviews
              </p>
            </div>
          </div>
          <div className="hero-figure">
            <span className="hero-arch-deco" aria-hidden="true" />
            <div className="hero-media">
              <img
                src="/assets/img/burns-hero-v2.jpg"
                alt="Dr. Jeffrey Burns standing beside a smiling patient with her new DreamSmile at his New Market, VA practice"
                style={{ objectPosition: "60% center" }}
              />
            </div>
            <div className="hero-seal" aria-hidden="true">
              <span className="hs-num">30+</span>
              <span className="hs-lbl">Years of new smiles</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DUAL LEAD-CAPTURE CARDS */}
      <div className="wrap leadwrap" id="consult">
        <div className="leadgrid">
          <LeadForm />
          <div className="lc">
            <span className="eyebrow">Free download</span>
            <h3>The Complete Guide to Dental Implants</h3>
            <div className="lc-ebook">
              <img
                src="/assets/img/ebook.png"
                alt="The Complete Guide to Dental Implants, free download"
              />
              <ul className="lc-ticks">
                <li>
                  <Check />
                  Why All-on-X is the gold standard for a full arch
                </li>
                <li>
                  <Check />
                  What implants really cost, in plain numbers
                </li>
                <li>
                  <Check />
                  How to claim your free consultation
                </li>
              </ul>
            </div>
            <div className="lc-foot">
              <a className="btn btn-teal" href="#consult">
                Get the Free Guide
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 2b. PROOF BAND */}
      <div className="wrap">
        <div className="statband">
          <div className="stat">
            <span className="stat-num">
              <StatCounter to={30} suffix="+" />
            </span>
            <span className="stat-lbl">Years placing implants</span>
          </div>
          <div className="stat">
            <span className="stat-num">
              <StatCounter to={98} suffix="%" />
            </span>
            <span className="stat-lbl">Implant success rate</span>
          </div>
          <div className="stat">
            <span className="stat-num">
              <StatCounter to={5} decimals={1} />
              <span className="stat-star">★</span>
            </span>
            <span className="stat-lbl">From 260+ reviews</span>
          </div>
          <div className="stat">
            <span className="stat-num">1&#8209;Day</span>
            <span className="stat-lbl">New teeth, often</span>
          </div>
        </div>
      </div>

      {/* 3. INTRODUCING THE DREAMSMILE */}
      <section id="dreamsmile">
        <div className="wrap introds">
          <div>
            <img
              className="dslogo"
              src="/assets/img/dreamsmile-banner.png"
              alt="DreamSmile by Jeffrey S. Burns DDS"
            />
            <h2 style={{ margin: "8px 0 10px" }}>
              Introducing The DreamSmile<sup className="tm">&trade;</sup>
            </h2>
            <p style={{ margin: "0 auto", color: "var(--body)" }}>
              A smile rebuilt with dental implants: fixed teeth that look
              natural, chew like they&apos;re yours, and stay put. These are real
              patients from right here in the Valley.
            </p>
          </div>
          <div className="faces-strip">
            <figure>
              <img src="/assets/img/wall-tammy.jpg" alt="A smiling DreamSmile patient of Dr. Burns" />
            </figure>
            <figure>
              <img src="/assets/img/wall-jill.jpg" alt="A smiling DreamSmile patient of Dr. Burns" />
            </figure>
            <figure>
              <img src="/assets/img/wall-diane.jpg" alt="A smiling DreamSmile patient of Dr. Burns" />
            </figure>
            <figure>
              <img src="/assets/img/wall-fran.jpg" alt="A smiling DreamSmile patient of Dr. Burns" />
            </figure>
          </div>
        </div>
      </section>

      {/* 4. THE DREAMSMILE IS... */}
      <section className="dsis" id="what">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">More than teeth</span>
            <h2>The DreamSmile is...</h2>
          </div>
          <div className="dsis-list">
            <div className="dsis-item">
              <img src="/assets/img/review4.jpg" alt="A Dr. Burns patient living without daily tooth pain" />
              <div className="dsis-tx">
                <h3>Getting Rid of Pain</h3>
                <p>
                  No more aching, loose, or infected teeth deciding how your day
                  goes. Fixed implants settle the problem for good.
                </p>
              </div>
              <span className="dsis-ck">
                <Check />
              </span>
            </div>
            <div className="dsis-item flip">
              <img src="/assets/img/mike-2026.jpg" alt="Patient eating the foods he loves again" />
              <div className="dsis-tx">
                <h3>Eating the Foods That You Love</h3>
                <p>
                  Steak, corn on the cob, an apple you just bite into. Implants
                  bring back most of your natural chewing strength.
                </p>
              </div>
              <span className="dsis-ck">
                <Check />
              </span>
            </div>
            <div className="dsis-item">
              <img src="/assets/img/kelly-2026.jpg" alt="Patient speaking clearly and naturally" />
              <div className="dsis-tx">
                <h3>Speaking Naturally</h3>
                <p>
                  No clicking, no slipping, no covering your mouth mid-sentence.
                  Your teeth stay where they belong.
                </p>
              </div>
              <span className="dsis-ck">
                <Check />
              </span>
            </div>
            <div className="dsis-item flip">
              <img src="/assets/img/angela-2026.jpg" alt="Patient smiling with confidence again" />
              <div className="dsis-tx">
                <h3>Confidently Smiling Again</h3>
                <p>
                  The moment you stop editing yourself out of photos. That&apos;s
                  the one patients talk about most.
                </p>
              </div>
              <span className="dsis-ck">
                <Check />
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TEAL BAND */}
      <section className="tealband" id="see">
        <div className="wrap">
          <h2>Can You See Yourself with Your DreamSmile?</h2>
          <p>
            Picture one year from now: eating what you want, laughing without a
            second thought. It starts with an honest conversation and a free
            consultation.
          </p>
          <div className="final-actions">
            <a className="btn btn-tan" href="#consult">
              Schedule My Free Consultation
            </a>
            <a className="btn btn-ghost" href="tel:5407408937">
              Call: 540-740-8937
            </a>
          </div>
        </div>
      </section>

      {/* 6. AUTHORITY */}
      <section className="authority" id="authority">
        <div className="wrap">
          <div className="authority-grid">
            <div className="vidwell">
              <VideoWell
                src="/assets/video/practice-film.mp4"
                poster="/assets/img/burns-consult.jpg"
                alt="A short film tour of the Burns dental practice"
                ratio="16/10"
              />
            </div>
            <div>
              <span className="eyebrow">Dr. Jeffrey S. Burns DDS</span>
              <h2 style={{ margin: "10px 0 16px" }}>
                Nationally Recognized Expertise you can Trust
              </h2>
              <p>
                Dr. Jeffrey S. Burns DDS has cared for the Shenandoah Valley for
                more than three decades. He&apos;s earned national recognition
                for cosmetic and reconstructive dentistry, and doctors from
                around the country travel to learn the methods he uses every week
                in New Market. He plans every case around your health, not a
                quota.
              </p>
              <div className="gbadge">
                <span className="stars">★★★★★</span> Rated 5.0 on Google, 260+ reviews
              </div>
            </div>
          </div>
          <div className="cred-row">
            {[
              { t: "AACD Cosmetic Dentistry Award Winner", i: "medal", award: true },
              { t: "Advanced Implant Certification", i: "cert" },
              { t: "Trained with the World's Top Implant Teams", i: "globe" },
              { t: "People's Choice Award Winner", i: "trophy", award: true },
              { t: "30+ Years Clinical Experience", i: "clock" },
            ].map((c) => (
              <div className={"cred" + (c.award ? " is-award" : "")} key={c.t}>
                <span className="cred-ic">
                  <svg viewBox="0 0 24 24">{CRED_ICONS[c.i]}</svg>
                </span>
                <span className="cred-lbl">{c.t}</span>
              </div>
            ))}
          </div>
          <div className="auth-team">
            <img
              src="/assets/img/burns-team-coat.jpg"
              alt="Dr. Jeffrey Burns in a white coat with five members of his clinical team"
            />
            <div className="auth-cap">
              The team who will take care of you
              <small>Dr. Burns and the clinicians you&apos;ll meet in New Market</small>
            </div>
          </div>
        </div>
      </section>

      {/* 7. OUR PRIMARY SERVICES */}
      <section id="services">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">Complete care under one roof</span>
            <h2>Our Primary Services</h2>
            <p>
              From a single tooth solution to a full-arch DreamSmile&trade;,
              serving New Market, Harrisonburg, Winchester, and the surrounding
              communities.
            </p>
          </div>
          <div className="svc-grid">
            <article className="svc-card">
              <div className="svc-img">
                <img src="/assets/img/topic-implant-model.jpg" alt="Dental implant treatment planned with a 3D scan" />
              </div>
              <div className="svc-body">
                <h3>Dental Implants</h3>
                <p>
                  The best long-term answer for missing or failing teeth. Planned
                  with 3D cone beam imaging and placed by one doctor, start to
                  finish.
                </p>
                <a href="/dental-implants">Explore Implants &rarr;</a>
              </div>
            </article>
            <article className="svc-card">
              <div className="svc-img">
                <img src="/assets/img/team-2026-full.jpg" alt="Dr. Burns seated with his full 2026 team" />
              </div>
              <div className="svc-body">
                <h3>General Dentistry</h3>
                <p>
                  Cleanings, fillings, crowns, bridges, and root canals. Steady,
                  gentle care that keeps the teeth you have healthy for the long
                  run.
                </p>
                <a href="/general-dentistry">Explore General Care &rarr;</a>
              </div>
            </article>
            <article className="svc-card">
              <div className="svc-img">
                <img src="/assets/img/kelly-2026.jpg" alt="A patient with a bright cosmetic smile" />
              </div>
              <div className="svc-body">
                <h3>Cosmetic Dentistry</h3>
                <p>
                  Whitening, porcelain veneers, and smile makeovers. Small
                  changes that give people their confidence back.
                </p>
                <a href="/cosmetic-dentistry">Explore Cosmetic &rarr;</a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* 8. COMPARISON */}
      <section id="compare" style={{ background: "var(--bg2)" }}>
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">The honest comparison</span>
            <h2>
              The DreamSmile<sup className="tm">&trade;</sup> vs. Traditional
              Dental Implants
            </h2>
          </div>
          <div className="cmp-grid">
            <div className="cmp good">
              <span className="cmp-tag">The DreamSmile&trade;</span>
              <h3>One doctor who knows your name</h3>
              <ul>
                {[
                  "Dr. Burns handles your case start to finish",
                  "Surgery, sedation, and lab work in one location",
                  "One clear price in writing before anything begins",
                  "The DreamSmile™ Lifetime Warranty, in writing",
                  "His personal cell number for every patient",
                ].map((t) => (
                  <li key={t}>
                    <Check />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="cmp bad">
              <span className="cmp-tag">Traditional Dental Implants</span>
              <h3>A different face every visit</h3>
              <ul>
                {[
                  "Passed between rotating providers and referral offices",
                  "Separate bills from the surgeon, the lab, and the dentist",
                  "Hidden Fees and Limited or No warranty",
                  "Surprise additional costs and uncertainty if you need additional support",
                  "A call center instead of a doctor's cell number",
                ].map((t) => (
                  <li key={t}>
                    <Cross />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="ba-cta" style={{ marginTop: 34 }}>
            <a className="btn btn-tan" href="#consult">
              Schedule My Free Consultation
            </a>
            <a
              className="btn btn-ghost-dark"
              href="tel:5407408937"
              style={{ marginLeft: 10 }}
            >
              Call: 540-740-8937
            </a>
          </div>
        </div>
      </section>

      {/* 9. THE BURNS PROTOCOL */}
      <section className="dark-feature" id="protocol">
        <div className="wrap dark-grid">
          <div className="dark-media">
            <VideoWell
              src="/assets/video/about-dr-burns.mp4"
              poster="/assets/img/dr-burns-smile.jpg"
              alt="Meet Dr. Burns: the story behind the Burns Protocol"
              ratio="4/5"
            />
          </div>
          <div>
            <span className="eyebrow" style={{ color: "var(--teal-brand)" }}>
              Six steps, one doctor
            </span>
            <h2 style={{ margin: "10px 0 12px" }}>The Burns Protocol</h2>
            <p>
              Most offices split your care across strangers and buildings. The
              Burns Protocol keeps every step in one place, with one team, in a
              set order that leaves nothing to chance.
            </p>
            <ol className="steps">
              {[
                ["Discovery Consultation", "A real conversation about your health, your goals, and whether implants even make sense for you."],
                ["Custom Treatment Plan", "Your case mapped tooth by tooth, with the full cost in writing before anything starts."],
                ["3D Smile Preview", "See your new smile on a 3D scan of your own mouth before the day ever arrives."],
                ["Precision Placement", "Guided surgery planned to a fraction of a millimeter, with sedation if you'd rather sleep through it."],
                ["Artistry-Level Restoration", "Teeth shaped, shaded, and finished to look like they've always been yours."],
                ["Lifetime Care Partnership", "Regular check-ins, warranty coverage, and Dr. Burns' cell number if anything ever feels off."],
              ].map(([h, p], i) => (
                <li key={h}>
                  <span className="n">{i + 1}</span>
                  <div>
                    <h3>{h}</h3>
                    <p>{p}</p>
                  </div>
                </li>
              ))}
            </ol>
            <a className="btn btn-tan" href="#consult" style={{ marginTop: 26 }}>
              Schedule My Free Consultation
            </a>
          </div>
        </div>
      </section>

      {/* 10. WARRANTY */}
      <section className="warranty" id="warranty">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">Protected in writing, not just promised</span>
            <h2>The DreamSmile Warranty</h2>
            <p>
              Dentures get relined and bridges get replaced. A well-placed
              implant is built to last, and yours is covered.
            </p>
          </div>
          <div className="war-grid">
            <div className="war">
              <div className="war-name">Silver</div>
              <div className="war-yr">3 Years</div>
              <p>Coverage on your implant work with routine maintenance visits.</p>
            </div>
            <div className="war center">
              <div className="war-name">Platinum</div>
              <div className="war-yr">5 Years to Lifetime</div>
              <p>
                Our highest tier: protection on your DreamSmile&trade; for
                qualifying full-arch cases, for life.
              </p>
            </div>
            <div className="war">
              <div className="war-name">Gold</div>
              <div className="war-yr">5 Years</div>
              <p>Extended coverage with regular check-ins and hygiene visits.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 11. PATIENT PROMISE */}
      <section id="promise">
        <div className="wrap promise-grid">
          <div>
            <span className="eyebrow">Your assurance, in writing</span>
            <h2 style={{ margin: "10px 0 8px" }}>The Patient Promise</h2>
            <div className="promise-card">
              <p className="lead">
                We stand behind every smile we create. That&apos;s why every
                DreamSmile&trade; comes with our exclusive warranty, your
                assurance that you&apos;re making a risk-free investment in
                yourself.
              </p>
              <div className="pillars">
                {[
                  ["Premium-Grade Implant Materials", "Titanium and ceramics from the manufacturers Dr. Burns trusts in his own family's mouths."],
                  ["Personalized Aftercare Support", "Check-ins scheduled around your healing, not a generic calendar."],
                  ["Dedicated Care Team", "The same faces at every visit, from your first scan to your final smile."],
                ].map(([h, p]) => (
                  <div className="pillar" key={h}>
                    <Check />
                    <div>
                      <h3>{h}</h3>
                      <p>{p}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="promise-media">
            <img src="/assets/img/dreamsmile-commercial.jpg" alt="A smiling DreamSmile patient, at home and confident" />
          </div>
        </div>
      </section>

      {/* 12. BAND-AID PAIN GRID */}
      <section className="bandaid" id="bandaid">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">Sound familiar?</span>
            <h2>You Deserve Better Than Another Band-Aid Solution</h2>
            <p>
              If any of these sound like your last few years, you&apos;re exactly
              who Dr. Burns built the DreamSmile&trade; for.
            </p>
          </div>
          <div className="ba-grid">
            {[
              ["Dentures That Slip", "Adhesive, clicking, and a diet built around what won't fall out."],
              ["Missing Teeth", "Gaps that change how you eat, speak, and let people take your photo."],
              ["Bridges That Fail", "Replaced every several years, and hard on the healthy teeth beside them."],
              ["A New Face Each Visit", "Corporate offices with a quota you can feel in the room."],
              ["Fear of Being Awake", "Dread that has kept you in dentures far longer than the cost ever did."],
              ["Hidden Fees", "Surprise add-ons and uncertainty about what the final number really is."],
            ].map(([h, p]) => (
              <div className="ba" key={h}>
                <div className="ba-ic">
                  <Check />
                </div>
                <h3>{h}</h3>
                <p>{p}</p>
              </div>
            ))}
          </div>
          <div className="ba-cta">
            <a className="btn btn-teal" href="#consult">
              See If You&apos;re a Candidate
            </a>
          </div>
        </div>
      </section>

      {/* 13. REAL RESULTS */}
      <section id="results">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">No actors, no stock footage</span>
            <h2>Real Results. Real Patients.</h2>
            <p>
              Valley neighbors telling their own story, in their own words,
              filmed the day their new smiles went in.
            </p>
          </div>
          <div className="rr-grid">
            {[
              ["testimonial-1.mp4", "mike-2026.jpg", "Mike, DreamSmile™ Patient", "Full-arch implants"],
              ["testimonial-2.mp4", "kelly-2026.jpg", "Kelly, DreamSmile™ Patient", "A new smile in one day"],
              ["testimonial-3.mp4", "angela-2026.jpg", "Angela, DreamSmile™ Patient", "Same-day teeth"],
            ].map(([vid, img, name, cap]) => (
              <div className="rr-card" key={name}>
                <VideoWell
                  src={`/assets/video/${vid}`}
                  poster={`/assets/img/${img}`}
                  alt={`${name} tells their DreamSmile story`}
                  ratio="4/5"
                />
                <div className="rr-meta">
                  <span className="stars">★★★★★</span>
                  <b>{name}</b>
                  <small>{cap}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13b. WALL OF SMILES */}
      <SmileMarquee />

      {/* 13c. PATIENT REVIEWS */}
      <ReviewsBand />

      {/* 14. MEET THE DOCTOR */}
      <section className="dark-feature bio" id="doctor">
        <div className="wrap dark-grid">
          <div className="dark-media">
            <img src="/assets/img/dr-burns.jpg" alt="Dr. Jeffrey S. Burns, DDS" />
          </div>
          <div>
            <span className="eyebrow" style={{ color: "var(--teal-brand)" }}>
              Meet the Doctor
            </span>
            <h2 style={{ margin: "10px 0 16px" }}>Dr. Jeffrey S. Burns</h2>
            <p>
              Dr. Burns has practiced in New Market for more than 30 years, with
              a passion for restoring smiles and the patience to explain every
              step in plain English. He trained at the Midwest Implant Institute
              and won two golds, a silver, and the People&apos;s Choice Award at
              the American Academy of Cosmetic Dentistry&apos;s 2006 conference,
              and developed The Burns Protocol that other doctors travel to learn.
              What patients mention most, though, isn&apos;t the resume. It&apos;s
              that he listens first, tells you the truth about your options, and
              hands every DreamSmile&trade; patient his personal cell number.
            </p>
            <div className="quote-strip">
              &ldquo;Dr. Burns listened to what I&apos;d been through and
              understood what I wanted. I never felt rushed, not once.&rdquo;
              <cite>A DreamSmile&trade; patient</cite>
            </div>
            <a className="btn btn-tan" href="#consult" style={{ marginTop: 26 }}>
              Schedule My Free Consultation
            </a>
          </div>
        </div>
      </section>

      {/* 14b. MEET THE TEAM */}
      <section id="team">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">The people behind your smile</span>
            <h2>Meet the DreamSmile team</h2>
            <p>
              The faces you&apos;ll see at every visit — a steady team that
              knows your name, not a rotating cast of strangers.
            </p>
          </div>
          <div className="team-grid">
            {Array.from({ length: 11 }, (_, i) =>
              `staff-2026-gray-${String(i + 1).padStart(2, "0")}`
            ).map((f) => (
              <figure className="team-face" key={f}>
                <img
                  src={`/assets/img/${f}.jpg`}
                  alt="A member of Dr. Burns's clinical team"
                  loading="lazy"
                />
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <CostSection />

      {/* FAQ */}
      <section className="faq" id="faq">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">Frequently asked questions</span>
            <h2>Implant questions, answered straight</h2>
          </div>
          <div className="faq-wrap">
            {[
              ["How much do dental implants cost near Harrisonburg?", "Individual implants start at $1,500 per item, and Dr. Burns shows you the full number before anything begins. No hidden fees, no surprise add-ons. Flexible financing is available, and your free consultation includes an honest quote for your case."],
              ["Does getting a dental implant hurt?", "Most patients are surprised by how comfortable it is. You can be fully sedated with a physician anesthesiologist watching over you, so you go to sleep, wake up, and it's done. Many patients say they don't remember a thing."],
              ["Can I really get new teeth in one day?", "Yes. With The Burns Protocol, most full-arch patients leave surgery the same day with a fixed temporary smile in place. Your final smile goes in once everything has healed and settled."],
              ["Where is Dr. Burns' office and what areas do you serve?", "The practice is at 9626 South Congress St in New Market, VA, in the heart of the Shenandoah Valley. Patients come from Harrisonburg, Winchester, Woodstock, Luray, Timberville, Broadway, Bridgewater, Elkton, and the surrounding communities."],
              ["What if I've been told I don't have enough bone for implants?", "Often that isn't the end of the road. Bone grafting and full-arch options mean low bone density rarely rules you out. The only way to know is a 3D scan and a conversation. Dr. Burns will tell you honestly if an implant is right for you, or if another option serves you better."],
            ].map(([q, a], i) => (
              <details className="faq-item" key={q} open={i === 0}>
                <summary>{q}</summary>
                <div className="faq-a">
                  <p>{a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final" id="final">
        <div className="wrap">
          <h2>Ready to stop hiding your smile?</h2>
          <p>
            Start with a free consultation. No pressure, no obligation. Just
            honest answers about your options, your timeline, and your cost.
          </p>
          <div className="final-actions">
            <a className="btn btn-tan" href="#consult">
              Schedule My Free Consultation
            </a>
            <a className="btn btn-ghost" href="tel:5407408937">
              Call: 540-740-8937
            </a>
          </div>
          <div className="final-media">
            <img src="/assets/img/lounge-fireplace.jpg" alt="The quiet patient lounge with a fireplace at Jeffrey S. Burns DDS" />
          </div>
        </div>
      </section>

      <SiteFooter />
      <StickyCta />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS) }}
      />
      <Reveal />
    </>
  );
}
