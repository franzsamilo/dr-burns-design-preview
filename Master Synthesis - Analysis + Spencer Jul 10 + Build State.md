---
client: Jeffrey S. Burns DDS
tags: [client, jeffrey-burns, synthesis, website-redesign, master-plan]
status: active
updated: 2026-07-10
---

# Master Synthesis — Analysis + Spencer's Jul 10 Feedback + Current Build State

Combines: `Design Direction Analysis.md`, `Design Direction Brief - Multi-Agent Synthesis.md`, `Project Documentation Summary.md`, `Design Direction Validation Harness.md`, `Spencer Feedback - 2026-07-10 Meeting.md`, `Figma Template Reference.md`, and the live state of `Website Build/`.

## Where the three analyses agree (locked, no debate)

1. **Every page is a landing page** except blog/resource posts. UVP + emotional image + CTA + low-threshold CTA above the fold + social proof.
2. **Palette:** white/off-white/light grey base, `#3e3e3e` deepest neutral, `#74bdc2` teal accent. No heavy black as the premium signal.
3. **Imagery:** full-face smiling patients, Dr. Burns smiling in doctor attire, no drills/surgery/scary clinical shots.
4. **DreamSmile™** is the branded outcome, spelled one word + ™, official logo required, scoped to implant pages only.
5. **Proof density:** 30+ years, 98%+ success rate, personal cell number, Same Day Teeth, DreamSmile™ Lifetime Warranty, teaches other dentists nationwide — surfaced early and often, not buried.
6. **Compress the scroll.** Bullets over paragraphs, proof/CTA every 1-2 sections, no ceremonial oversized sections.
7. **Doctor bio at the bottom of every service page** (highest-traffic page pattern), 15-30 unique variations to avoid duplicate-content penalty.
8. **Keep every existing URL/slug.** Content changes, addresses don't.

## New from Project Documentation Summary — not yet in the build

This doc adds specifics the other two didn't carry. These are real gaps against the current build.

### 1. Site-wide header nav (mandated, no "Home" item)
> Dental Implants · General Dentistry · Cosmetic Dentistry · Our Team · Resources · Contact

**Status: fixed today.** Both `index.html` and `implant-tooth.html` header nav updated to this exact set, linking to `implant-tooth.html`, `restorative-dentistry.html`, `cosmetic-dentistry.html`, `about-us.html`, `patient-information.html`, `contact-us.html`. The last four don't exist as files yet — they'll 404 until built. That's expected at this stage, not a bug.

### 2. Full page map (the actual site architecture)

**A. Dental Implants**
- Dental Implants (main landing, overview + deep-links) — slug `implant-tooth` or similar, built ✅ as `implant-tooth.html`
- Full Mouth Dental Implants / DreamSmile™ / All-on-X — not built
- Implant-Supported Dentures — not built

**B. General Dentistry**
- General Dentistry overview — maps to `restorative-dentistry` slug — not built
- Pediatric Dental Care — not built, not in live crawl list (new page)
- Dental Bridges (contrast traditional vs implant-supported) — not built
- Dental Crowns — not built (Design Direction Brief showed a Playground mockup of this)
- Wisdom Teeth Removal, Tooth Extraction, Root Canal — not built
- Bone Grafting — slug `bone-grafting-for-implants` exists live — not built
- Dentures (full + partial) — not built

**C. Cosmetic Dentistry**
- Porcelain Veneers, Teeth Whitening, Clear Braces — not built. Overview slug `cosmetic-dentistry` exists live.

**D. Resources**
- New Patient Forms, Financing/Insurance, Patient Education blog (Anesthesia, Exams, Oral Hygiene, Teeth Cleaning, Sealants, Gum Disease, Restorative Care, Fillings) — none built. These are the "except resources/blog pages" exemption from the landing-page rule — simpler template, still needs phone number top and single CTA.

**Homepage + About Us + Contact Us:** homepage ✅ built. About Us and Contact Us not built.

### 3. Two taglines on record
- V1: "You're One Decision Away From Never Hiding Your Smile Again."
- V2 (in use): "A DreamSmile™ You'll Never Have to Hide."

Current build uses V2 consistently. No action needed unless Spencer flags a change.

### 4. Trust badge row — missing from build
Spec calls for: AACD Cosmetic Dentistry Award Winner, Advanced Implant Certification, Trained with World's Top Specialists, People's Choice Award Winner, 30+ Years Clinical Experience.

Current build only has the 3-stat trio (30+ Years, AACD, 100+ Smiles) inside the authority section — narrower than the 5-badge spec. **Gap: need a dedicated trust-badge row**, matching the Figma Main Page's "Nationally Recognized Expertise" section pattern but with all 5 badges, not 3.

### 5. Patient Promise — exact copy on record, not yet placed verbatim
> "We stand behind every smile we create. That's why every DreamSmile™ comes with our exclusive warranty, your assurance that you're making a risk-free investment in yourself."

Pillars: Premium-Grade Implant Materials, Personalized Aftercare Support, Dedicated Care Team.

Figma Main Page has a "Patient Promise" section (section 11) — build it with this exact copy when the homepage gets its next pass.

### 6. Burns Protocol step count — conflicting sources, needs one decision
Three different step counts exist across sources:
- **Project Documentation Summary (6 steps):** Discovery Consultation → Custom Treatment Plan → 3D Smile Preview → Precision Placement → Artistry-Level Restoration → Lifetime Care Partnership
- **Design Direction Brief (7 steps):** DreamSmile Assessment → 3D Image Scan → Smile Design Day → Smile Creation Day → Smile Refinement → DreamSmile Reveal Day → Lifetime Care & Maintenance
- **Figma Subpage (built today, 8 steps):** same as Design Direction Brief's 7, plus a "Warranty Protection" 8th capsule

**Read:** the 6-step version is "The Burns Protocol" (the clinical methodology, sold as authority/mechanism). The 7-8 step version is "Your DreamSmile™ Journey" (the patient-facing step-by-step experience). These are two different sections, not one section with disputed step count — `implant-tooth.html` already has both, correctly separated: Journey (8 capsules) then Protocol (5 dark steps, condensed from the source's 6 for scannability). No fix needed, but **flag for Spencer to confirm the Protocol section content matches his 6-step canon** — the built version paraphrases rather than quoting Discovery Consultation/Custom Treatment Plan/etc. verbatim.

### 7. Page-specific copy directives, not yet applied anywhere

**Single Implant page** (not yet built):
- CTA button text: "Call Him" (not the generic "Schedule My Free Consultation")
- Copy: "with local or sedation anesthesia"
- "a board-certified physician anesthesiologist" present if sedation selected
- Replace "resorb" with "shrink"
- Remove "For further reading" title, paraphrase external refs inline
- Before/after single-implant photos + explanatory root diagram

**Dental Fillings page** (not yet built):
- Educational copy: what a filling is, why patients choose it, health benefits
- Before/after filling photos

**Comparison table label changes** (relevant once homepage's comparison section is rebuilt):
- Competitor column: "Traditional Dental Implants" not "Dental Chains" — **harness already checks for this correctly** (`comparison_table` check looks for "traditional dental implants")
- "Hidden Fees & Upsells" → "Hidden Fees and Limited or No warranty"
- "The price you're quoted is rarely the price you pay" → "Surprise additional costs and uncertainty if you need additional support"

### 8. "As Seen On" reference layout
Spec references **texassedationdental.com** as the layout model for the trust-bar. Not yet reviewed — add to research queue before building that section.

## Spencer's Jul 10 feedback — status against current build

| Spencer's defect | Status |
|---|---|
| Degraded logo | Open — need supplied logo file at correct res, not yet swapped in |
| Oversized ™ | Harness checks entity-rendered small ™, both built pages pass |
| Missing DreamSmile logo | Open on homepage "Introducing" section — verify actual logo file is wired, not placeholder |
| Generic stock faces | Fixed — real review1-4.jpg patient photos used, harness bans stock filenames |
| No before/afters | Still genuinely missing (no signed-release before/afters found anywhere) — on ASSET-GAPS.md, Spencer asks Dr. Burns Friday |
| Scroll background bug | Not reproduced in new build (rebuilt from scratch, bug was in old Playground version) |
| Pain-grid design | Not yet rebuilt on new pages — homepage still needs "Band-Aid Solution" section per Figma Main Page section 12 |
| No low-threshold peek above fold | Fixed — quiz band overlaps hero on both pages, harness confirms |
| No social proof per page | Fixed — Google 5.0 badge / testimonial cards on both pages |
| Inconsistent fonts/colors | Fixed — single Montserrat/Amiri system, harness confirms |
| Doctor bio not at bottom | Fixed on subpage (bio at 47%... **actually still a WARN, see below**) |
| "Specialist" language | Harness bans it, both pages clean |
| Duplicate content risk | Harness shingle-checks bio uniqueness, currently 1 sibling page, unique |
| DreamSmile scope creep | Harness enforces implant-page-only, both pages correct |

**Open harness WARN carried over:** doctor bio position sits at 47-49% of page height on both pages, not in the "last 25%" the check wants. This is because both pages follow the Figma-approved section order (bio before Real Results, not after). **Read:** Figma's approved skeleton puts bio second-to-last, not truly last. The harness rule should probably relax to "bio in back half of page" rather than "last 25%" — recommend updating the check rather than moving bio after testimonials, since Figma is the authorized structure. Flagging as a harness tuning task, not a content task.

## What needs to happen — priority order

1. **Nav fix** — done this session.
2. **Homepage rebuild pass** to close remaining gaps against the Figma Main Page 14-section skeleton: trust-badge row (5 badges, not 3), Patient Promise section with exact copy, DreamSmile vs Traditional comparison table, Band-Aid pain-point card grid, warranty tier cards (Silver/Platinum/Gold). Current `index.html` is a caresmiles-structure page with Burns content — it does not yet match the Figma Main Page section-for-section. Decide: does homepage rebuild onto the Figma Main Page skeleton (like `implant-tooth.html` rebuilt onto Figma Subpage), or stay on the caresmiles skeleton? **This is a real open decision — Figma is supposed to win on structure per the build prompt, so homepage likely needs the same treatment implant-tooth.html got.**
3. **Build remaining service pages** on the now-proven Subpage template, in this order (highest traffic / clearest asset availability first): `full-mouth-implants`-family, `cost-of-dental-implants-basics`, `bone-grafting-for-implants`, `restorative-dentistry` (general dentistry overview), `cosmetic-dentistry`, `about-us`, `contact-us`.
4. **Apply page-specific micro-copy** (Call Him CTA, resorb→shrink, anesthesiologist language) when the Single Implant and Dental Fillings pages get built.
5. **Source the "As Seen On" reference** (texassedationdental.com) before building that section.
6. **Reconcile harness bio-position threshold** — loosen from "last 25%" to "back half" to match the Figma-approved order, or explicitly move bio after Real Results if Spencer wants strict last-section placement. Needs Spencer's call, not ours.
7. **Send Spencer the ASSET-GAPS.md list** before his Friday 12:30 call with Dr. Burns — still the hard deadline.

## Bottom line

Nothing in the new document contradicts the locked direction — it adds resolution: a real nav, a real page map, exact trust-badge and Patient Promise copy, and per-page micro-copy rules. The build is on-track and harness-green on the two pages built so far. The single open strategic question is whether the homepage gets rebuilt onto the Figma Main Page skeleton the same way the implant page was rebuilt onto Figma Subpage — recommend yes, for consistency, before building more service pages off a homepage that doesn't match its own site's approved structure.
