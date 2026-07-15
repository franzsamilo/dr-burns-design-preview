/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { StickyCta } from "@/components/StickyCta";
import { VideoWell } from "@/components/VideoWell";
import { Reveal } from "@/components/Reveal";
import { LeadForm } from "@/components/LeadForm";
import { StatCounter } from "@/components/StatCounter";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";

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

const JOURNEY: [string, string, React.ReactNode][] = [
  ["DreamSmile™ Assessment", "Meet the team, talk options", <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M8 3v4M16 3v4M3 10h18" /></>],
  ["3D Image Scan", "See exactly what's possible", <><circle cx="12" cy="12" r="8" /><path d="M12 4v16M4 12h16" /></>],
  ["Smile Design Day", "A smile shaped to your face", <><rect x="3" y="4" width="18" height="13" rx="2" /><path d="M8 21h8M12 17v4" /></>],
  ["Smile Creation Day", "Surgery and same-day teeth", <path d="M7 3h10l2 7c0 6-4 11-7 11S5 16 5 10l2-7z" />],
  ["Smile Refinement", "Fine-tuned fit and bite", <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>],
  ["DreamSmile™ Reveal", "Your final smile goes in", <path d="M12 21s-7-5.686-7-11a7 7 0 1114 0c0 5.314-7 11-7 11z" />],
  ["Lifetime Care", "Maintenance and check-ins", <path d="M20 6L9 17l-5-5" />],
  ["Warranty Protection", "Covered for the long run", <path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z" />],
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
        <section className="hero" id="top">
          <div className="wrap hero-grid">
            <div>
              <span className="eyebrow">
                Serving New Market, Harrisonburg &amp; the Shenandoah Valley
              </span>
              <h1>Dental Implants Near Harrisonburg, VA</h1>
              <div className="sub">
                Your DreamSmile<sup className="tm">&trade;</sup> is here.
              </div>
              <p className="lede">
                Replace one tooth, several teeth, or a whole smile, close to
                home, with a doctor who does this every day.
              </p>
              <ul className="hero-ticks">
                <li>
                  <Check />
                  30+ years of implant experience, 98%+ success rate
                </li>
                <li>
                  <Check />
                  Same Day Teeth: walk out with a temporary smile the day of
                  surgery
                </li>
                <li>
                  <Check />
                  Backed by the DreamSmile&trade; Lifetime Warranty
                </li>
              </ul>
              <div className="hero-actions">
                <a className="btn btn-tan" href="#quiz">
                  Schedule My Free Consultation
                </a>
                <a className="btn btn-ghost-dark" href="tel:5407408937">
                  Call Him
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
                  <b>Rated 5.0</b> by patients across the Shenandoah Valley
                </p>
              </div>
            </div>
            <div className="hero-media">
              <img
                src="/assets/img/hero-burns.jpg"
                alt="Dr. Jeffrey Burns welcoming a dental implant patient at his New Market office"
              />
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
                <img src="/assets/img/kelly-2026b.jpg" alt="A DreamSmile patient smiling after treatment" />
              </div>
            </div>
            <LeadForm />
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
              <span className="stat-lbl">Rated by patients</span>
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
                <span className="stars">★★★★★</span> Rated 5.0 by patients on
                Google
              </div>
            </div>
            <div className="story-media">
              <img src="/assets/img/wall-jill.jpg" alt="Jill Bush, a dental implant patient of Dr. Burns, smiling" />
            </div>
          </div>
        </section>

        {/* REAL PATIENT FACES */}
        <section id="patients">
          <div className="wrap">
            <div className="sec-head">
              <span className="eyebrow">His patients. His work.</span>
              <h2>Real people from right here in the Valley</h2>
            </div>
            <div className="faces-grid">
              {["review1.jpg", "review2.jpg", "review3.jpg", "review4.jpg"].map((f) => (
                <figure key={f}>
                  <img src={`/assets/img/${f}`} alt="A smiling dental implant patient of Dr. Burns" />
                </figure>
              ))}
            </div>
            <div style={{ textAlign: "center" }}>
              <a className="btn btn-teal" href="#quiz">
                See If You Qualify
              </a>
            </div>
          </div>
        </section>

        {/* SEE THE DIFFERENCE — before/after reveal */}
        <section id="transformation">
          <div className="wrap">
            <div className="sec-head">
              <span className="eyebrow">Drag to see the difference</span>
              <h2>One day can change everything</h2>
            </div>
            <div className="ba-frame">
              <BeforeAfterSlider
                before="/assets/img/kelly-2026.jpg"
                after="/assets/img/kelly-2026b.jpg"
                beforeAlt="A DreamSmile patient before treatment"
                afterAlt="The same patient after their DreamSmile"
              />
              <p className="ba-note">
                Sample slider — real before/after photos from Dr. Burns&apos;s
                patients drop in here before launch.
              </p>
            </div>
          </div>
        </section>

        {/* DREAMSMILE JOURNEY */}
        <section id="journey" style={{ background: "var(--bg2)" }}>
          <div className="wrap">
            <div className="sec-head">
              <span className="eyebrow">Your DreamSmile&trade; Journey</span>
              <h2>Eight simple steps, one team, zero guesswork</h2>
            </div>
            <div className="journey-grid">
              {JOURNEY.map(([h, p, icon], i) => (
                <div className="jcap" key={h}>
                  <div className="jn">{i + 1}</div>
                  <div className="jic">
                    <svg viewBox="0 0 24 24">{icon}</svg>
                  </div>
                  <h3>{h}</h3>
                  <p>{p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BURNS PROTOCOL — dark */}
        <section className="protocol" id="protocol">
          <div className="wrap protocol-grid">
            <div className="protocol-media">
              <img src="/assets/img/bts.jpg" alt="Dr. Burns at work during a dental implant procedure" />
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
                <h2>Missing teeth affect more than your smile</h2>
                <p>
                  A gap in your smile changes how you eat, how you speak, and how
                  often you let people take your picture. Left alone, missing
                  teeth also let your jawbone shrink, which ages your face years
                  ahead of schedule. An implant stops that process because it
                  works like a natural tooth root.
                </p>
              </div>
              <div className="edit-media">
                <img src="/assets/img/topic-implant-explainer.jpg" alt="Dr. Burns explaining what a dental implant is" />
              </div>
            </div>

            <div className="edit-block flip">
              <div>
                <h2>Implant solutions tailored to your mouth</h2>
                <p>
                  One tooth, several teeth, or a full arch: there&apos;s no
                  single answer for everyone. That&apos;s why every case starts
                  with a 3D scan and an honest conversation. If a bridge or
                  another option serves you better, Dr. Burns will tell you. After
                  30+ years, he has nothing to prove and no quota to hit.
                </p>
              </div>
              <div className="edit-media">
                <img src="/assets/img/burns-protocol-craft-2.jpg" alt="The Burns Protocol treatment planning" />
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
                <img src="/assets/img/topic-implant-xray.jpg" alt="Advanced implant technology at Jeffrey S. Burns DDS" />
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
                <img src="/assets/img/clinic-op.jpg" alt="Comfort-focused sedation dentistry" />
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
                <img src="/assets/img/burns-consult.jpg" alt="Dr. Burns talking honestly about implant cost" />
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
                to learn, and earned an AACD award along the way. What patients
                mention most, though, isn&apos;t the resume. It&apos;s that he
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

        {/* REAL RESULTS */}
        <section id="stories">
          <div className="wrap">
            <div className="sec-head">
              <span className="eyebrow">Real Results. Real Patients.</span>
              <h2>Filmed the day their new smiles went in</h2>
            </div>
            <div className="test-grid">
              {[
                ["testimonial-1.mp4", "wall-jill.jpg", "Jill Bush", "DreamSmile™ Patient"],
                ["testimonial-2.mp4", "wall-joe.jpg", "Joe Vile", "DreamSmile™ Patient"],
                ["testimonial-3.mp4", "wall-tammy.jpg", "Tammy", "DreamSmile™ Patient"],
              ].map(([vid, img, name, cap]) => (
                <div className="test-card" key={name}>
                  <VideoWell
                    src={`/assets/video/${vid}`}
                    poster={`/assets/img/${img}`}
                    alt={`${name}, dental implant patient testimonial`}
                    ratio="9/13"
                    overlay={
                      <div className="ov">
                        <span className="stars">★★★★★</span>
                        <b>{name}</b>
                        <small>{cap}</small>
                      </div>
                    }
                  />
                </div>
              ))}
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
      <StickyCta />
      <Reveal />
    </>
  );
}
