---
client: Jeffrey S. Burns DDS
tags: [client, jeffrey-burns, prompt, harness, website-redesign]
status: draft-pending-cris-approval
---

# Burns Site Build Prompt — Landing Page Standard (v1)

Instructional prompt for the build agent. Pair with the harness loop below. Assembled from Spencer's Jul 10 feedback, the Design Direction Brief, and the caresmiles.com reference.

---

## REFERENCES (load these before you build)

**Model site (structure + feel benchmark)**
- Live: https://www.caresmiles.com/ — study hero, "Honest Answers to Your Biggest Questions" video grid, "We Believe in Telling You the Truth About Cost" section
- Captured spec: `caresmiles-reference.json` (nav, services, sections, differentiators, contact)
- Secondary model (low-threshold peek pattern only): https://nuviasmiles.com/

**Approved skeleton (structure wins here)**
- Figma Wireframe: https://www.figma.com/design/jNmYR2vZlKmm2oX1r7xIhF/Wireframe?node-id=0-1
- Figma Main Page: https://www.figma.com/site/2niOGGjMOcm9cWaLK3wHd1/Main-Page?node-id=0-1
- Figma Subpage: https://www.figma.com/site/FdukEmN0E1kbsXkxf2U5aF/Subpage?node-id=0-1

**Locked design direction + section-by-section homepage spec**
- `Design Direction Brief - Multi-Agent Synthesis.md` (palette, typography, 13-section homepage architecture, page-level rules)

**Client assets (real media only, paths relative to client folder)**
- Homepage hero (Cris-approved Jul 10): `Website Build/assets/img/burns-hero-v2.jpg` — doctor supportive behind smiling patient, Spencer's favorite composition. AI-generated; real photoshoot replacement is on the ASSET-GAPS list
- DreamSmile™ logo, official: `Media/Website Images - Dr. Jeff Burns/wp-content/uploads/2026/01/DREAM-SMILE-LOGO-1-copy.png`
- Dr. Burns hero alternate: `Media/Website Images - Dr. Jeff Burns/Gemini Dr Burns Hero Image.jpg`
- Patient/review photos: `Media/Website Images - Dr. Jeff Burns/review1.jpg` … `review5.jpg` (+ `-1` crops)
- Office / team / spa / map: same folder (`office.jpg`, `medspa1.jpg`, `map.jpg`)
- Testimonial videos: `Media/Videos and Thumbnails from TTG/` — Jill Bush, Tammy, Danny, Patient Testimonial #1–5 (1080x1920 / 2160x3840)
- DreamSmile journey graphic (rebuild, do not reuse as-is): `Media/Website Images - Dr. Jeff Burns/wp-content/uploads/2026/01/Your-Dream-Smile-Journey-jeffreyburns.png`
- Lead-magnet cover: `Website Build/assets/img/ebook.png`
- Live Drive (source of truth for anything missing locally): GMJ/FAA shared drive → "Jeffrey S Burns DDS" → Content Library, Dream Smile Logo, Website Images, TV Ads, Patient Journey
- TikTok testimonials: https://www.tiktok.com/@jeffrey.burns.dds — on-brand teal DreamSmile covers only, skip the pastel off-brand batch

**Slugs to preserve (SEO)**
- `Website Link Crawl.md` — 31 existing jeffreyburns.com page URLs. Every rebuilt page keeps its exact slug.

**Harness**
- `Website Build/harness.mjs` (current), extended with Group E below

**Do-not-reuse list**
- Old PBHS theme code, dark nav/footer, dated carousels, empty-operatory photos, stock/watermarked patients, TikTok-caption-style proof blocks, the old journey graphic unrebuilt (all enumerated in the Design Direction Brief)

---

## THE PROMPT

You are the lead conversion designer rebuilding the Dr. Jeffrey Burns dental website. Your job today: bring every page up to landing-page standard so Spencer Walker can show it to Dr. Burns and say yes. You do not invent a new creative direction. You apply the locked one. Read every item in the References block above before you write a line of markup.

**The one rule that governs everything:** every page is a landing page. Before you touch any section, ask: does this page have a UVP, an emotional-connection image, a primary CTA, a low-threshold CTA visible above the fold, and social proof with both emotional and logical weight? If any answer is no, that page is not done.

**Model:** caresmiles.com is the structural and emotional benchmark. Study its hero (real doctor with real patient, warm, quiz form above the fold), its "honest answers" video grid, and its pricing-truth section. The Figma frames are the approved skeleton: Wireframe (figma.com/design/jNmYR2vZlKmm2oX1r7xIhF), Main Page (figma.com/site/2niOGGjMOcm9cWaLK3wHd1), Subpage (figma.com/site/FdukEmN0E1kbsXkxf2U5aF). Where Figma and caresmiles disagree, Figma wins on structure, caresmiles wins on feel.

**Above the fold, every page:**
- Benefit-led headline (UVP), not a category label
- Emotional image: full-face smiling patient or Dr. Burns with a patient. Never drills, surgery, or empty operatories
- Primary CTA: Schedule My Free Consultation, phone 540-740-8937 beside it with tel: link
- Low-threshold offer peeking above the fold, Nuvia-style: "Find Out If You're a Candidate" 30-second quiz or "Get the Pricing & Information Guide." The visitor must see the next step without scrolling

**On every page, in order:** hero, low-threshold offer peek, proof near the CTA, pain section (dentures slipping, missing teeth aging the face, fear, confusing pricing), mechanism (DreamSmile™ or the service), differentiators, testimonial or before/after block, FAQ in plain language, final CTA stack, then a Meet the Doctor bio block at the bottom. That bio block is mandatory on every service page because meet-the-doctor is what surgery patients check before they call. Write 15 to 30 distinct variations of it, one per page, same facts, different sentences, so it never trips a duplicate-content penalty.

**Assets, hard rules:**
- Use only real client media. Sources: Drive folder "Jeffrey S Burns DDS" (Content Library, Website Images with office/team/review1-5 photos, Dream Smile Logo folder, TV Ads), the local Media/ library, and TikTok @jeffrey.burns.dds testimonials with on-brand teal covers only. Skip the pastel off-brand batch.
- The generic stock smiling-faces grid goes. All of it. These aren't his people.
- Use the supplied logo file at correct resolution. The current one was scraped off the old site and looks degraded.
- The official DreamSmile™ logo (from the Dream Smile Logo Drive folder / DREAM-SMILE-LOGO-1-copy.png) appears in the "Introducing" section. DreamSmile™ is one word with a small superscript ™. If the ™ draws the eye, it is too big.
- If a section needs an asset that does not exist, do not fake it. Add one line to ASSET-GAPS.md: which page, which section, what is needed. Spencer takes that list to Dr. Burns Friday.

**Social proof on every page:** Google rating badge (5.0) or embedded verified reviews, plus at least one testimonial video or before/after where available. DreamSmile™ pages get patient video testimonials (Curtis Cloude, Jill Bush, Angela Burker exist already).

**Language and compliance:**
- Never the word "specialist." Dr. Burns is a general dentist; the board prohibits it. The section is "Meet the Doctor."
- DreamSmile™ appears only on implant/DreamSmile pages, because a DreamSmile is a smile created with dental implants. General dentistry and cosmetic pages sell their own outcome.
- Plain language for 55+ readers. Larger type. Short sentences. No em dashes anywhere.
- Proof points to weave in: 30+ years, 98%+ success rate, AACD award, Same Day Teeth, DreamSmile™ Lifetime Warranty, personal cell number.

**Pricing:** the pricing-transparency section states à la carte pricing is **$1,500** per item. Show it plainly, caresmiles "truth about cost" style. No hidden fees, the price quoted is the price paid.

**Remove all black text.** No pure `#000` anywhere in copy. `#3e3e3e` is the darkest text and neutral allowed. Black is only permitted on media wells (video posters, before/after cards). Any body copy, heading, or nav currently rendering black gets recolored to `#3e3e3e` or lighter.

**Design consistency:** white/off-white/light-grey base, teal #74bdc2 accents, #3e3e3e as the darkest neutral, no black-led sections. One heading font system across all pages. Fix the known defects: mismatched fonts and colors on service headers, the section that loses its white background on scroll-up, cut-off elements, and the pain-point grid with oversized bullets and dead space. Match the quality bar of the Bobby-designed sections: doctor video, Google 5.0, stat cards.

**SEO:** keep every existing page URL and slug exactly as it is on jeffreyburns.com. Update content, never addresses.

**Do not stop at the homepage.** Work through every page in the site map. After each page, run the harness. A page is done when the harness passes. The site is done when every page passes and ASSET-GAPS.md lists everything you could not source.

---

## THE HARNESS LOOP

Extend `Website Build/harness.mjs` from single-page to per-page scoring, adding a **Group E: Spencer Jul 10** with these checks per page:

| Check | Pass condition |
|---|---|
| uvp_above_fold | First h1 is benefit-led, not a category label |
| low_threshold_peek | Quiz or guide offer markup within first viewport block |
| primary_cta_phone | Consultation CTA + 540-740-8937 tel: link above fold |
| emotional_image | Hero image from approved asset list (manifest check), not stock |
| social_proof_present | Google rating badge OR review embed OR testimonial video |
| doctor_bio_bottom | Meet the Doctor block in last 25% of page |
| bio_unique | Bio text ≥60% unique vs all other pages (shingle diff) |
| no_specialist | Zero matches for /specialist/i |
| dreamsmile_scope | DreamSmile™ only on implant pages; ™ styled superscript small |
| no_stock_faces | No files from the banned stock-image list |
| no_black_text | Zero pure `#000` on text/nav/headings (media wells exempt) |
| pricing_alacarte | Pricing section shows $1,500 à la carte |
| slug_preserved | Page slug exists in Website Link Crawl.md URL list |
| no_em_dash | Zero em dashes |
| consistent_fonts | Single heading font family across page |
| asset_gaps_logged | Any FAIL on assets has matching ASSET-GAPS.md entry |

Loop: build page → `node harness.mjs --page <file>` → fix FAILs → rerun → next page. Ship when all pages PASS or WARN-with-reason.
