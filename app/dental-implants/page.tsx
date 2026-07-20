/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SurveyForm } from "@/components/SurveyForm";
import { ScrollVideo } from "@/components/ScrollVideo";
import { VideoWell } from "@/components/VideoWell";
import { StatCounter } from "@/components/StatCounter";
import { CostSection } from "@/components/CostSection";
import { ReviewsBand } from "@/components/ReviewsBand";

export const metadata: Metadata = {
  title: "Dental Implants Near New Market, VA | DreamSmile by Dr. Jeffrey Burns",
  description:
    "Dental implants near New Market and Harrisonburg, VA. The Burns Protocol: one surgical team, one location, new teeth in one day. 30+ years, 98%+ success rate. Free consultation.",
  alternates: { canonical: "https://www.jeffreyburns.com/implant-tooth/" },
};

function Check() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}
function Phone() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.4-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" />
    </svg>
  );
}

const JOURNEY: [string, string, React.ReactNode][] = [
  ["Assessment & 3D Scan", "Meet the team and see exactly what's possible", <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M8 3v4M16 3v4M3 10h18" /></>],
  ["Smile Design", "A new smile, shaped to your face", <><rect x="3" y="4" width="18" height="13" rx="2" /><path d="M8 21h8M12 17v4" /></>],
  ["Smile Creation Day", "Implants placed and new teeth — often the same day", <path d="M7 3h10l2 7c0 6-4 11-7 11S5 16 5 10l2-7z" />],
  ["Lifetime Care & Warranty", "Fine-tuning, check-ins, and coverage for the long run", <path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z" />],
];

const PROTOCOL: [string, string][] = [
  ["One doctor, start to finish", "Dr. Burns personally handles your case. You're never passed around."],
  ["Everything under one roof", "Surgery, sedation, and lab work in one place. No referrals across town."],
  ["Sleep through your procedure", "IV sedation options with an anesthesiologist, so fear never gets a vote."],
  ["Teeth the same day", "Most patients leave surgery with a fixed temporary smile in place."],
  ["His personal cell number", "Every DreamSmile™ patient can reach Dr. Burns directly. Try getting that at a chain."],
];

const FAQ: [string, string][] = [
  ["How much do dental implants cost near Harrisonburg?", "Individual implants start at $1,500 per item, and Dr. Burns shows you the full number before anything begins. No hidden fees, no surprise add-ons. Flexible financing is available, and your free consultation includes an honest quote for your case."],
  ["Does getting a dental implant hurt?", "Most patients are surprised by how comfortable it is. You can be fully sedated with a board-certified physician anesthesiologist watching over you, so you go to sleep, wake up, and it's done. Many patients say they don't remember a thing."],
  ["Can I really get teeth the same day?", "Yes. With The Burns Protocol, most patients leave surgery the same day with a fixed temporary smile in place. Your final smile goes in once everything has healed and settled."],
  ["Am I a candidate if I've been told I don't have enough bone?", "Often, yes. Bone grafting and full-arch options mean low bone density rarely rules you out. The only way to know is a 3D scan and a conversation. Dr. Burns will tell you honestly if an implant is right for you, or if another option serves you better."],
];

export default function DentalImplantsPage() {
  return (
    <>
      <SiteHeader />
      <main className="implants">
        {/* HERO — light split, local SEO */}
        <section className="hero hero-bleed" id="top">
          <img
            className="hero-bg"
            src="/assets/img/di-hero-consult.jpg"
            alt="Dr. Jeffrey Burns sitting with a dental implant patient, talking through her scan"
          />
          <span className="hero-scrim" aria-hidden="true" />
          <div className="wrap hero-bleed-in">
            <div className="hero-copy">
              <div className="hero-doc">
                <img src="/assets/img/dr-burns.jpg" alt="Dr. Jeffrey Burns" />
                <span>
                  Every case personally by
                  <b>Dr. Jeffrey Burns</b>
                  <i>One doctor &middot; 30+ years</i>
                </span>
              </div>
              <h1>Dental Implants Near Harrisonburg, VA</h1>
              <svg className="smile-mark" viewBox="0 0 120 22" aria-hidden="true">
                <path d="M5,5 Q60,27 115,5" />
              </svg>
              <p className="hero-oneline">
                A whole new smile &mdash; often in a single day.
              </p>
              <div className="hero-actions">
                <a className="btn btn-tan" href="#quiz">
                  Schedule My Free Consultation
                </a>
              </div>
              <div className="hero-trust">
                <div className="ht-avatars">
                  {["review1", "review2", "review3"].map((f) => (
                    <img key={f} src={`/assets/img/${f}.jpg`} alt="" aria-hidden="true" />
                  ))}
                </div>
                <p>
                  <span className="stars">★★★★★</span>
                  <b>Rated 5.0</b> from 260+ patient reviews
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* QUALIFICATION QUIZ */}
        <span id="consult" aria-hidden />
        <div className="wrap quizwrap" id="quiz">
          <div className="quiz">
            <div className="qhead">
              <span className="eyebrow">Free consultation</span>
              <h2>Talk to the doctor who does this every day</h2>
              <p>
                No call center, no pressure. You&apos;ll get a straight answer
                from the team that&apos;s placed implants across the Valley for
                30+ years — plus our pricing &amp; information guide.
              </p>
              <div className="qoutcome">
                <img src="/assets/img/dr-burns-warm.jpg" alt="Dr. Jeffrey Burns, who personally handles every case" />
                <span className="qoutcome-tag">
                  <b>Dr. Jeffrey Burns</b>
                  <small>Answers you personally</small>
                </span>
              </div>
            </div>
            <SurveyForm />
          </div>
        </div>

        {/* PROOF BAND */}
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

        {/* PATIENT STORY — dark, with video */}
        <section className="story" id="story">
          <div className="wrap story-grid">
            <div>
              <span className="eyebrow">A real patient&apos;s story</span>
              <blockquote>
                <span className="mark">&ldquo;</span>
                <p>
                  My smile was fading. I stopped eating the foods I love and
                  started hiding in photos. Dr. Burns changed that in one day.
                </p>
                <cite>Jill Bush &middot; DreamSmile&trade; patient</cite>
              </blockquote>
              <div className="gbadge">
                <span className="stars">★★★★★</span> Rated 5.0 on Google, 260+ reviews
              </div>
            </div>
            <div className="story-media">
              <ScrollVideo
                src="/assets/video/testimonial-1.mp4"
                poster="/assets/img/wall-jill.jpg"
                caption="Jill Bush"
                sub="Full-arch implants, in one day"
                alt="Jill Bush tells her DreamSmile story"
                ratio="4/5"
              />
            </div>
          </div>
        </section>

        {/* REAL PATIENTS — video proof */}
        <section id="patients">
          <div className="wrap">
            <div className="sec-head">
              <span className="eyebrow">His patients. His work.</span>
              <h2>Real people from right here in the Valley</h2>
              <p>
                No actors, no stock footage &mdash; neighbors telling their own
                story, filmed the day their new teeth went in.
              </p>
            </div>
            <div className="pv-grid">
              {[
                ["testimonial-2.mp4", "wall-joe.jpg", "Joe Vile", "Eating everything again — no more soft foods"],
                ["testimonial-3.mp4", "wall-tammy.jpg", "Tammy", "Confident to smile in photos again"],
                ["testimonial-4.mp4", "wall-christa.jpg", "Christa", "From 3D scan to a brand-new smile"],
                ["testimonial-6.mp4", "wall-steve.jpg", "Steve", "His DreamSmile™, in his own words"],
              ].map(([vid, img, name, cap]) => (
                <div className="pv-card" key={name}>
                  <VideoWell
                    src={`/assets/video/${vid}`}
                    poster={`/assets/img/${img}`}
                    alt={`${name}, dental implant patient of Dr. Burns`}
                    ratio="5/6"
                    overlay={
                      <div className="pv-ov">
                        <span className="stars">★★★★★</span>
                        <b>{name}</b>
                        <small>{cap}</small>
                      </div>
                    }
                  />
                </div>
              ))}
            </div>
            <div className="pv-cta">
              <div className="pv-rating">
                <span className="stars">★★★★★</span>
                <b>5.0</b> from 260+ Google reviews
              </div>
              <a className="btn btn-teal" href="#quiz">
                Book My Free Consultation
              </a>
            </div>
          </div>
        </section>

        {/* ONE DAY — emotional outcome + prompt */}
        <section className="oneday" id="transformation">
          <img
            className="oneday-bg"
            src="/assets/img/topic-whitening-mirror.jpg"
            alt="A DreamSmile patient lighting up at her new smile in the mirror"
          />
          <span className="oneday-scrim" aria-hidden="true" />
          <div className="wrap oneday-in">
            <div className="oneday-copy">
              <span className="eyebrow">The DreamSmile&trade; difference</span>
              <h2>One day can change everything</h2>
              <p>
                Walk in hiding your smile. Walk out with new teeth that look,
                feel, and work like your own &mdash; steady enough to bite into
                anything, often the very same day.
              </p>
              <a className="btn btn-tan" href="#quiz">
                Start My One Day
              </a>
              <span className="oneday-prompt">
                Free consultation &middot; honest quote &middot; no pressure
              </span>
            </div>
          </div>
        </section>

        {/* DREAMSMILE JOURNEY */}
        <section id="journey" style={{ background: "var(--bg2)" }}>
          <div className="wrap">
            <div className="sec-head">
              <span className="eyebrow">Your DreamSmile&trade; Journey</span>
              <h2>Four simple steps, one team, zero guesswork</h2>
            </div>
            <div className="stepflow">
              {JOURNEY.map(([title, sub, icon], i) => (
                <div className="stepflow-item" key={title}>
                  <span className="stepflow-num">{i + 1}</span>
                  <div className="stepflow-body">
                    <div className="stepflow-ic">
                      <svg viewBox="0 0 24 24">{icon}</svg>
                    </div>
                    <h3>{title}</h3>
                    <p>{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BURNS PROTOCOL — dark */}
        <section className="protocol" id="protocol">
          <div className="wrap protocol-grid">
            <div className="protocol-media">
              <img src="/assets/img/di-surgery.jpg" alt="Dr. Burns placing implants with his surgical team, in his own operatory" />
            </div>
            <div>
              <span className="eyebrow">The Burns Protocol</span>
              <h2 style={{ margin: "10px 0 22px" }}>
                Why patients drive hours to see one doctor
              </h2>
              {PROTOCOL.map(([h, p], i) => (
                <div className="pstep" key={h}>
                  <b>{i + 1}</b>
                  <div>
                    <h3>{h}</h3>
                    <p>{p}</p>
                  </div>
                </div>
              ))}
              <a className="btn btn-tan" href="#quiz" style={{ marginTop: 26 }}>
                Schedule My Free Consultation
              </a>
            </div>
          </div>
        </section>

        {/* EDITORIAL / SEO */}
        <section id="learn">
          <div className="wrap">
            <div className="edit-block">
              <div>
                <h2>Missing teeth take more than a tooth</h2>
                <p>
                  It&apos;s the photos you dodge. The steak you don&apos;t order.
                  The laugh you cover with your hand. Missing or failing teeth
                  quietly chip away at your confidence, your comfort, and the
                  food you love — and left alone, the jawbone shrinks, aging your
                  face years ahead of schedule.
                </p>
                <p>
                  A DreamSmile&trade; gives it back: teeth that look natural,
                  chew like your own, and finally let you stop thinking about
                  your mouth.
                </p>
              </div>
              <div className="edit-media">
                <img src="/assets/img/topic-extraction.jpg" alt="A woman holding a tooth she has lost, her hand to her cheek" />
              </div>
            </div>

            <div className="edit-block flip">
              <div>
                <h2>Implant solutions tailored to your mouth</h2>
                <p>
                  One tooth, several teeth, or a full arch: there&apos;s no
                  single answer for everyone. For a whole jaw, <b>All-on-4</b>{" "}
                  anchors a full set of fixed teeth on just four implants — often
                  the same day. Every case starts with a 3D scan and an honest
                  conversation. If a bridge or another option serves you better,
                  Dr. Burns will tell you. After 30+ years, he has nothing to
                  prove and no quota to hit.
                </p>
              </div>
              <div className="edit-media">
                <img src="/assets/img/di-model.jpg" alt="Dr. Burns's hands holding a full-arch implant model, showing how four implants carry a whole row of teeth" />
              </div>
            </div>

            <div className="cta-bar">
              <b>Not sure which option fits you? Find out in 30 seconds.</b>
              <a className="btn btn-teal" href="#quiz">
                Take the Quiz
              </a>
            </div>

            <div className="edit-block">
              <div>
                <h2>Technology that removes the guesswork</h2>
                <p>
                  3D imaging, digital smile design, and an in-house lab mean your
                  implant is planned to a fraction of a millimeter before anyone
                  touches your mouth. That planning is a big part of the 98%+
                  success rate, and it&apos;s why most patients are surprised by
                  how uneventful surgery day feels.
                </p>
              </div>
              <div className="edit-media">
                <img src="/assets/img/di-scan.jpg" alt="A patient in the practice's 3D cone-beam scanner in New Market" />
              </div>
            </div>

            <div className="edit-block flip">
              <div>
                <h2>Comfort-focused care at every visit</h2>
                <p>
                  Fear keeps more people in dentures than money does. Here you can
                  be fully sedated, with a dedicated anesthesia provider watching
                  over you. You go to sleep, you wake up, it&apos;s done. Many
                  patients say they don&apos;t remember a thing.
                </p>
              </div>
              <div className="edit-media">
                <img src="/assets/img/topic-rootcanal-senior.jpg" alt="A relaxed, comfortable patient resting in the chair" />
              </div>
            </div>

            <div className="edit-block">
              <div>
                <h2>A long-term answer, protected in writing</h2>
                <p>
                  Dentures get relined. Bridges get replaced. A well-placed
                  implant is designed to last decades, and yours is backed by the
                  DreamSmile&trade; Lifetime Warranty, in writing. Clear pricing
                  up front, flexible financing, and no surprise fees. Ever.
                </p>
              </div>
              <div className="edit-media">
                <img src="/assets/img/topic-implant-model.jpg" alt="A dental implant, engineered to last for decades" />
              </div>
            </div>

            <div className="cta-bar">
              <b>Get the full picture, including cost, in our free guide.</b>
              <a className="btn btn-teal" href="#quiz">
                Get the Pricing &amp; Information Guide
              </a>
            </div>
          </div>
        </section>

        {/* COST / FINANCING */}
        <CostSection />

        {/* MEET THE DOCTOR — dark */}
        <section className="biosec" id="doctor">
          <div className="wrap bio-grid">
            <div className="bio-media">
              <img src="/assets/img/dr-burns.jpg" alt="Dr. Jeffrey S. Burns, DDS" />
            </div>
            <div>
              <span className="eyebrow" style={{ color: "var(--teal-brand)" }}>
                Meet the Doctor
              </span>
              <h2 style={{ margin: "10px 0 16px" }}>Dr. Jeffrey S. Burns, DDS</h2>
              <p>
                Before you trust anyone with your smile, you want to know
                who&apos;s holding the instruments. Dr. Burns has placed and
                restored implants in the Shenandoah Valley for more than three
                decades, developed The Burns Protocol that other doctors travel
                to learn, trained at the Midwest Implant Institute, and took home
                two golds, a silver, and the People&apos;s Choice Award at the
                American Academy of Cosmetic Dentistry&apos;s 2006 conference.
                What patients mention most, though, isn&apos;t the resume.
                It&apos;s that he
                listens first, explains everything in plain English, and hands
                every DreamSmile&trade; patient his personal cell number.
              </p>
              <div className="quote-strip">
                &ldquo;Dr. Burns listened to what I had been through and
                understood what I wanted. I never felt rushed, not once.&rdquo;
                <cite>A DreamSmile&trade; patient</cite>
              </div>
              <a className="btn btn-tan" href="#quiz" style={{ marginTop: 26 }}>
                Meet With Dr. Burns
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="faq" id="faq">
          <div className="wrap">
            <div className="sec-head">
              <span className="eyebrow">Frequently Asked Questions</span>
              <h2>Implant questions, answered straight</h2>
            </div>
            <div className="faq-wrap">
              {FAQ.map(([q, a], i) => (
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

        {/* PATIENT REVIEWS */}
        <ReviewsBand />

        {/* FINAL CTA */}
        <section className="final" id="final">
          <div className="wrap">
            <h2>Ready to stop hiding your smile?</h2>
            <p>
              Start with a free consultation. No pressure, no obligation. Just
              honest answers about your options, your timeline, and your cost.
            </p>
            <div className="final-actions">
              <a className="btn btn-tan" href="#quiz">
                Schedule My Free Consultation
              </a>
              <a className="btn btn-ghost" href="tel:5407408937">
                Call Him: 540-740-8937
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
