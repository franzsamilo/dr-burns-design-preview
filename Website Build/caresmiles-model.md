---
client: Jeffrey S. Burns DDS
tags: [client, jeffrey-burns, caresmiles, model, feel-reference, homepage]
purpose: The "feel" reference Cris named from the start. Ordered structure of the caresmiles.com homepage, to model a SECOND Burns homepage that reads genuinely different from the Figma T1 build.
sources:
  - caresmiles-reference.json (direct capture, 2026-07-10) — primary structural evidence
  - Task known-signature brief (hero bullets, cost-truth, "feel heard" copy)
  - Figma Template Reference.md (T1 Main Page, 14 sections) — the contrast target
fetch_note: Live re-fetch on 2026-07-11 (r.jina.ai/caresmiles.com and /www.caresmiles.com) returned a CAPTCHA "Robot Challenge Screen." Bot-detection was NOT bypassed. This model is built from the 2026-07-10 capture + known signature, which are consistent.
---

# caresmiles.com — Homepage Model (Feel Reference)

**Business modeled:** Care Dental Implant and Cosmetic Center — Dr. Drew Phillips, Meridian/Boise ID. One doctor, one location, ~8,000 implants placed.

**Why this file exists:** The project rule is "structure follows Figma, feel follows caresmiles." The current `index.html` was built on the caresmiles skeleton; T1 is the brand-system homepage. Cris wants a SECOND Burns homepage modeled on caresmiles so the two homepages read as two genuinely different designs, not reskins. This is the caresmiles blueprint plus an explicit contrast against T1.

**The one-line character of caresmiles:** a warm, reassurance-first, doctor-and-patient homepage that leads with emotion, makes cost-honesty a headline promise, and proves everything with real patient video. It is a *relationship* page, not a *product* page.

---

## Ordered Section List

Order is the caresmiles homepage top-to-bottom. Per section: **Role · Layout · Copy pattern · Media**.

### 1. Sticky nav + Emotional hero
- **Role:** Reassure and locate the visitor ("you're in the right place"), establish authority through a track-record stat, open two ways to act (call now / schedule).
- **Layout:** Full-width warm hero. Real doctor-with-patient photo as the emotional anchor (not a contained brand frame, not a dark operatory). Headline + proof bullets over/beside the photo. Sticky top nav with a "Call Us" phone number always visible. An engagement card overlaps the bottom of the hero (see reconciliation note below).
- **Copy pattern:** Reassurance headline + four short proof bullets, each a different reason to trust.
  - Headline: **"Need a New Smile? You're in the Right Place."**
  - Proof bullets: "8,000+ implants placed" · "One doctor. One location. One solution." · "New teeth in one day" · "Honest answers, real results"
  - CTA: "Schedule My Free Consultation" + persistent "Call Us" phone (New Patients +1 208-607-3234).
- **Media:** Emotional documentary-style PHOTO (doctor with a real patient, human eye contact). Overlapping engagement CARD (interactive tool / quiz — see note).

> **Quiz-in-hero reconciliation (read this).** Cris named caresmiles as "quiz-in-hero." The live-captured caresmiles homepage leads its early interactive engagement with **SmileReveal™** (an AI "see your new smile" photo tool, section 4) and an overlapping hero engagement card, not a literal multiple-choice quiz. The literal **"Candidate for Dental Implants" checklist quiz card** is a *Figma T1* element (T1 §2). For the Burns caresmiles-modeled variant, honor the intent: put a **low-threshold, feelings-first interactive card overlapping the hero** — either a short "Are you a candidate?" quiz OR a "See your new smile" upload. Keep it warm and self-serve, not a formal lead-capture form. The point is emotional engagement in the first screen, however it's skinned.

### 2. Before/after transformation gallery
- **Role:** Immediate visual proof; let the outcome sell before any copy argument.
- **Layout:** Row/grid of four before-and-after photo pairs.
- **Copy pattern:** Minimal. Let the images carry it; short label per pair at most.
- **Media:** Four real patient before/after PHOTO pairs.

### 3. "We make it easy" — convenience / one-location benefit
- **Role:** Kill the biggest friction (the runaround of multi-office implant care) by promising everything under one roof.
- **Layout:** Section heading + short benefit list, warm supporting imagery.
- **Copy pattern:** Outcome heading + plain-language benefit bullets.
  - Heading: **"We Make It Easy to a Permanent New Smile."**
  - Benefits: "Consultation, surgery, and new teeth — all in one convenient location" · "No running around or outside referrals" · "Expedited solutions — new teeth in just one visit" · "Go to sleep and wake up with all your dentistry done with IV sedation"
- **Media:** Supporting PHOTO(s); icon-light.

### 4. SmileReveal™ — interactive "see your smile" tool
- **Role:** Emotional, low-commitment engagement. Let people *feel* the result before booking. This is caresmiles' signature interactive moment.
- **Layout:** Feature block with a 3-step "how it works" strip and a single big button.
- **Copy pattern:** Aspirational heading + 3 steps + reassurance line.
  - Heading: **"See Your New Smile Before You Ever Sit In The Chair"**
  - Steps: "Upload Your Photo" → "Results In Under 60 Seconds" → "Share it with your friends and family"
  - Reassurance: "Walk in knowing exactly what's possible. No guesswork, no hesitation."
  - CTA: "GET STARTED"
- **Media:** Interactive TOOL (photo upload → AI preview). This is the "quiz/tool-in-flow" element.

### 5. Free guide — lead magnet
- **Role:** Capture the not-yet-ready researcher; answer the cost/options question in exchange for contact.
- **Layout:** Offer card, cover image of the guide, bulleted "what's inside," one button.
- **Copy pattern:** Question hook + free offer + curiosity bullets.
  - Heading: "Want to learn more about your dental implant options?"
  - Offer: "Grab our FREE Dental Implant Guide"
  - Inside: "Differences between implants, bridges & dentures" · "Why All-on-X is the gold standard" · "What treatment really costs (and how people afford it)" · "How to claim your FREE consultation"
  - CTA: "READ THE GUIDE"
- **Media:** Guide cover IMAGE + form.

### 6. Doctor intro — "the experience you want, the care you deserve"
- **Role:** Put a single, trustworthy human at the center. Authority through experience + warmth, not credentials wall.
- **Layout:** Doctor portrait beside a short, human bio paragraph and one button.
- **Copy pattern:** Benefit heading + plain bio that leads with how you'll be treated.
  - Heading: **"The Experience You Want. The Care You Deserve."**
  - Bio: "Dr. Drew Phillips has placed over 8,000 implants and is Idaho's most experienced All-On-X provider. Known for his calm, no-pressure approach, he takes time to listen, explain, and treat you like a human — not just a number."
  - CTA: "Meet Dr. Phillips"
- **Media:** Warm doctor portrait PHOTO.

### 7. Process explainer — "from pain to peace of mind"
- **Role:** Remove fear of the unknown; make the journey feel simple and low-pressure.
- **Layout:** Four numbered steps in sequence, one CTA below.
- **Copy pattern:** Emotional arc heading + numbered steps, each with a one-line human promise.
  - Heading: **"From Pain to Peace of Mind — Here's How It All Happens"**
  - Steps: 1) **Free Consultation** — "You talk, we listen. No pressure, no sales pitch." · 2) **Your Custom Plan** — "A smile designed for your face, to look as natural as it functions." · 3) **New Smile Day** — "Most patients leave with fixed teeth the same day as surgery." · 4) **Smile Refinement & Support** — "We fine-tune your smile and support you every step after."
  - CTA: "Learn More About the Process"
- **Media:** Numbered STEP icons/illustration; optional step photos.

### 8. Video testimonials — "hear from people who've been where you are"
- **Role:** Peer proof. Real named patients tell their story on camera. This is the heaviest proof block and it's VIDEO, not text quotes.
- **Layout:** Row of video testimonial cards (thumbnail + play), one per person.
- **Copy pattern:** Empathy heading that mirrors the visitor's position; names, not adjectives.
  - Heading: **"Hear From People Who've Been Where You Are"**
  - People: Sam · Kat · Cheryll · Mark (+ a longer patient story film)
- **Media:** Multiple patient testimonial VIDEOS.

### 9. Cost-truth section — "we believe in telling you the truth, especially about cost"
- **Role:** Neutralize the #1 anxiety and the industry's worst reputation (hidden fees, bait-and-switch) by making honesty a promise, with the doctor's face on it. This is a *headline-level* section, not a footnote.
- **Layout:** Truth heading + three financial promises + a doctor video + one action button.
- **Copy pattern:** Values statement + concrete promises + a plan-not-a-price CTA.
  - Heading: **"We Believe in Telling You the Truth — Especially About Cost"**
  - Copy: "You won't find bait-and-switch pricing here. Everything is clear, upfront, and designed to make your life easier — not harder."
  - Promises: "No hidden fees" · "Flexible financing available" · "Help with pre-approval"
  - CTA: "GET MY TREATMENT PLAN"
- **Media:** Doctor VIDEO (cost talk) + three promise cards/icons.

### 10. Doctor Q&A video FAQ — "honest answers to your biggest questions"
- **Role:** Make the visitor feel heard by answering the scary questions directly, on camera, from the doctor. Reduces the need to call before trusting.
- **Layout:** Row of short question-titled video cards.
- **Copy pattern:** Reassurance heading + question-as-title cards.
  - Heading: **"Hear Straight From Dr. Phillips — Honest Answers to Your Biggest Questions"**
  - Video titles: "Are dental implants painful?" · "How much do implants cost?" · "What is a dental implant?" · "How would we describe Dr. Phillips in just 3 words?"
- **Media:** Four short Q&A VIDEOS.

> This block plus the closer (§12) is the "You deserve to feel heard" beat Cris named — the emotional promise that the practice listens. In the caresmiles capture the exact phrase "You Deserve to Feel Heard" headlines the final CTA; the Q&A video row is where that promise is *demonstrated*.

### 11. Clinic photo gallery — place & warmth
- **Role:** Make the practice feel real, clean, and welcoming. Lower the fear of a cold clinical experience.
- **Layout:** Small gallery of interior/exterior photos.
- **Copy pattern:** Minimal or none.
- **Media:** Four clinic PHOTOS.

### 12. Final CTA — "you deserve to feel heard, and to love your smile again"
- **Role:** Warm, low-pressure close. Frame the next step as a conversation, not a commitment.
- **Layout:** Centered emotional heading + one soft-close paragraph + a "Call Us" button (phone-first close).
- **Copy pattern:** Emotional promise heading + no-pressure invitation.
  - Heading: **"You Deserve to Feel Heard. And to Love Your Smile Again."**
  - Copy: "Take the first step today. No pressure. Just a simple conversation to explore what's possible — and whether it's right for you."
  - CTA: "Call Us: +1 208-607-3234"
- **Media:** Warm PHOTO / solid warm band; phone CTA.

### Footer
Standard link columns (About, Meet the Doctor, Services, Pricing & Financing, Patient Stories, FAQs, Blog, Schedule, Contact) + legal row. Social: YouTube / Instagram / TikTok (video-first social presence, consistent with the video-heavy page).

---

## Media mix at a glance

| Media type | Where it appears | Weight |
|---|---|---|
| Emotional doctor+patient PHOTO | Hero, doctor intro, closer | High |
| Before/after PHOTO pairs | §2 | Medium |
| Patient testimonial VIDEO | §8 | **Heaviest proof** |
| Doctor VIDEO (cost, Q&A) | §9, §10 | High |
| Interactive TOOL / quiz | Hero card, §4 SmileReveal | Signature |
| Guide/lead-magnet form | §5 | Medium |
| Numbered step icons | §7 | Low |
| Clinic PHOTOS | §11 | Low |

Roughly: **video and real photography carry the page; icons and brand graphics are minimal.**

---

## How this DIFFERS from Bobby's Figma T1 homepage

T1 (Main Page, 14 sections) and caresmiles solve the same job with opposite architectures. Build the two Burns homepages to these two personalities so they don't read as reskins.

| Dimension | **Figma T1 (brand-system home)** | **caresmiles model (feel home)** |
|---|---|---|
| Core organizing idea | A **productized system** — DreamSmile™, The Burns Protocol, DreamSmile Warranty, The Patient Promise | A **relationship** — one doctor, one location, "you're in the right place," feel heard |
| Hero | Dark SPLIT panel, "A Dream Smile You Never Have to Hide," doctor+patient in a contained rounded frame, teal CTA | Warm, near-full-bleed emotional doctor+patient photo, "Need a New Smile? You're in the Right Place," phone always visible |
| Early engagement | **Dual formal lead-capture cards** overlapping hero: "Candidate for Dental Implants" quiz + ebook guide (transactional, two forms) | **One warm interactive card** + SmileReveal AI smile preview (emotional, self-serve "feel it first") |
| Cost / money | Cost appears only as **one of six "Band-Aid" pain cards** ("Hidden Fees") | **Its own headline promise section** — "We Believe in Telling You the Truth, Especially About Cost," doctor video, 3 financial promises, "Get My Treatment Plan" |
| Proof style | 3 testimonial video cards **once**, near the bottom | **Two video blocks** — named patient testimonials ("Hear From People Who've Been Where You Are") + doctor Q&A video FAQ. Video-testimonial heavy |
| Branded frameworks | Heavy: DreamSmile™ lockup, DreamSmile is… checklist, DreamSmile vs Dental Chains comparison, Burns Protocol, 3-tier Warranty (Silver/Platinum/Gold), Patient Promise | **None.** No trademarked product, no warranty tiers, no comparison table, no protocol naming. Structure is doctor + patient + process |
| Emotional temperature | Authority, system, "expertise you can trust," alternating dark feature panels | Warmth, reassurance, "no pressure, just a conversation," light and human throughout |
| Color/system feel | Strong teal design system, repeated dark bands, tight brand grid | Warmer, softer, photography-led; **less brand-system**, fewer hard-edged component motifs |
| Comparison / us-vs-them | Explicit "DreamSmile vs Dental Chains" card | None. Positions *for* the patient rather than *against* chains |
| Closer | Dark doctor bio closer | Warm "You Deserve to Feel Heard" phone-first CTA |
| Section count / density | 14 sections, dense, many proprietary modules | ~12 sections, softer, fewer modules, more air |
| Reads as | A confident brand selling a system | A trusted person offering help |

**The three moves that make caresmiles feel different, in priority order:**
1. **Lead with emotion, not brand.** Real doctor-with-patient warmth and a reassurance headline in the first screen, versus T1's dark branded product hero.
2. **Make cost-honesty a headline.** A full trust section with the doctor's face on the money promise, versus burying it as one pain card.
3. **Prove with video, twice.** Named-patient testimonial films + doctor Q&A videos as the spine of proof, versus a single late testimonial row.

Secondary: strip the brand-system (no DreamSmile™ / Warranty / Protocol / comparison table on this variant), keep it warmer and lighter, and close on "feel heard" with a phone-first CTA.

---

## Building the Burns caresmiles-modeled variant (adaptation notes)

Keep the caresmiles *skeleton and feel*; swap in Burns facts. Straight substitutions:
- Dr. Drew Phillips → **Dr. Jeffrey S. Burns, DDS**; Idaho/All-On-X → Burns's market (Harrisonburg, VA) and credentials (30+ years, AACD).
- "8,000+ implants" → Burns's defensible track record; do not import caresmiles' number.
- Keep the phone-first "Call Us" in nav and closer.
- Hero engagement card: use a short "Are you a candidate?" quiz OR a smile-preview upload — warm and self-serve, not a formal double lead-capture like T1.
- Preserve the cost-truth section as a headline block with a Burns cost video.
- Two video blocks: real Burns patient testimonials + a Burns Q&A FAQ ("Is it painful?", "What does it cost?", "What is an implant?").

**Do NOT** bring DreamSmile™ branding, the Warranty tiers, the vs-Chains comparison, or the Burns Protocol module onto this variant — those live on T1. Their absence is what makes this homepage genuinely different rather than a reskin.

Source copy quoted above is caresmiles' own (verbatim, in quotes) and is reference material, not final Burns copy. Final Burns copy is written in Cris's house style (no em dashes) at build time.
