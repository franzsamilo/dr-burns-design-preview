# Current Website Teardown, jeffreyburns.com

*Source: the live theme export `JeffreyBurns.zip` (216 files), analyzed at code level. Companion to `MEDIA-CATALOG.md`.*

---

## 1. Platform identification

**This is a PBHS dental-industry WordPress theme, originally built in 2019 and lightly bolted onto in 2025.**

- **Vendor:** PBHS (pbhs.com), a dental/medical website template and hosting vendor. Confirmed in `style.css` (`Author: PBHS`), the footer (`Dental Website Design by PBHS © 2019 - 2025`), the `pbhs-options/` loader, and the `pbhscore\Options` / `pbhs-common-plugin` namespace.
- **Staging origin:** `staging.pbhshosting.com/www-jeffreyburns-com`, hardcoded in modal-form URLs. Production is `jeffreyburns.com`.
- **Build era:** media in `wp-content/uploads/2019/10/`, videos dated June 2019, banner videos Jan 2021. A 2019 template.
- **2025 modifications grafted on:** GoHighLevel funnel pieces added Sept 2025, a survey iframe in the hero, an ebook CTA band, a custom accessibility modal, a rebuilt blog. These point at `schedule.jeffrey-burns.implant-services.com` and `jeffrey-burns.implant-services.com/get-e-book`.
- **Front-end stack, all dated:** jQuery, Bootstrap 3, Flickity carousels, Superfish menus, Modernizr, ScrollReveal, a custom PBHS slider, FontAwesome 5 Pro. `header.php` still ships IE6 to IE9 conditional comments.

---

## 2. Homepage, section by section

Order defined in `layouts/frontpage.php` (19 parts, top to bottom):

| # | Section | What it shows |
|---|---|---|
| 1 | Teal utility bar (mobile) | "Register Online" |
| 2 | White top bar | Logo, address (9626 South Congress St, New Market VA), "Call Us Today! 540-740-8937", Facebook + Instagram, "Register Online" |
| 3 | Charcoal nav bar | Superfish dropdown menu, sticky on scroll |
| 4 | **HERO** | Full-bleed autoplay video (`Web Banner V6`), tagline "Transform Your Smile with Expert Care", "Meet the Doctor" + "Watch Video" buttons, an **embedded GHL survey iframe**, and a map tile. This is the 2025 funnel-modified hero. |
| 5 | Welcome + **Ebook CTA** | "Welcome to the practice of Jeffrey S. Burns DDS" (photo-left), followed by a bolted-on "FREE Dental Implant Guide" band linking to the ebook funnel |
| 6 | Teal schedule bar | "Schedule an Appointment Today! Call 540-740-8937" |
| 7 | **Meet Dr. Burns** | Parallax bg, bio text, video play button |
| 8 | Our Services | List of 10 treatments (crowns, implants, root canals, veneers, full-mouth reconstruction, Teeth In A Day, aligners, extractions, wisdom teeth, 2nd opinions) |
| 9 | **13 Things That Set Us Apart** | Flickity carousel of 13 cards: Spa Services, Life Support, Multi-Specialty (names oral surgeon Dr. James Whitney, 40 yrs), Radiologist, BP Screening, Infection Control, Anesthesiologist + Nurse Anesthetist, Ortho Aligner Lab, High-End Labs, 3D Imaging, EFDAs, Financing, Dental Implants |
| 10 | Sleep Dentistry | "Anesthesia Options / Sleep Dentistry" over bg image |
| 11 | **Dental Implants** | Video-left, copy, "Dental Implants" button |
| 12 | Teal CTA bar (2025 rebuild) | "Request an Appointment", opens a custom `tr-modal` with the GHL survey iframe |
| 13 | Cosmetic Dentistry | Photo-right block |
| 14 | **Teeth In A Day** | Photo-left block. The highest-value implant offer, buried this far down. |
| 15 | **Patient Testimonials** | Flickity video carousel, 5 video reviews |
| 16 | Our Offices | "Care and Commitment" 3-image collage |
| 17 | **Spa 122 / MedSpa** | 3-image collage, "Visit our MedSpa", **"More About Spa 122" button with an empty href (broken link)** |
| 18 | Meet Our Staff | Charcoal bg, "Professional and Friendly", "Schedule an Appointment" |
| 19 | Footer | Google map strip, logo, NAP, nearby-cities SEO list, office photo, PBHS grid footer |

**Interior pages** reuse the nav + a simpler hero (tagline "Beautiful smiles through exceptional dentistry" + 5 circular featured-page icons), then a two-column content + sidebar, then footer. **The blog** is the only 2025-modern piece: a teal `blog-hero` + a responsive grid of rounded, shadowed cards.

---

## 3. Exact palette + typography

### Colors (from `_css/_scss/_config/_colors.scss` + `pbhs-options/designOptions.php`)

| Token | Hex | Role |
|---|---|---|
| `blue` | **`#74bdc2`** | Primary accent (teal). Buttons, eyebrows, CTA bars |
| `gray` | **`#3e3e3e`** | Charcoal. Nav, staff, footer, H1 text |
| `default` | **`#979797`** | Body text gray |
| `white` | `#ffffff` | Testimonials, content bg |
| `black` | `#000000` | |

The PBHS section system alternates three palettes: **teal `#74bdc2`** (CTA bars, primary buttons), **white** (content, testimonials), **charcoal `#3e3e3e`** (nav, staff, footer). The whole site is a three-color scheme on white. No secondary or warm accent, narrow for premium implant positioning.

### Type (`_css/_scss/_config/_fonts.scss`)

- **Body / UI / eyebrows:** Montserrat, sans-serif (400 body, 600 italic eyebrows).
- **Headings:** Amiri, serif (a thin serif). H1 `#3e3e3e` 4rem to 3.3rem, H2 teal `#75bdc2` 2.8rem.
- **Buttons:** also Amiri serif, italic, 700, `border-radius:0` (square), white on teal. A distinctive and dated choice.
- **Ornament:** a `.diamond-lines` decorative PNG rule under most headings, a spa/dental cliche.

---

## 4. Design-language assessment

**Reads as:** a 2018 to 2019 "premium dental/spa" template. Photographic hero of the actual operatory, thin serif display type, teal accent, italic-serif square buttons, diamond-rule ornaments, alternating full-width photo/text blocks, carousels, circle-outline icons. Clean for its era, but unmistakably a stock dental template, not a bespoke brand.

**What is dated or weak:**
- **Legacy framework:** Bootstrap 3 + jQuery + Superfish + Modernizr + ScrollReveal + Flickity + custom PBHS slider. IE6 to IE9 conditional comments still present. 193 `-webkit-` prefixes, no CSS grid, no `clamp()`, only 17 CSS vars. Font sizing leans on a JS "scalefont" script; `body{line-height:1}` is fragile.
- **Ornamental cliches:** the diamond-line dividers and italic-serif square buttons read cheap/2015-spa, not premium-implant.
- **Content overload:** "13 Things That Set Us Apart" as a 13-card carousel buries the message. The genuinely strong implant-credibility items (in-house oral surgeon, anesthesiology, 3D imaging, in-house lab) are lost in the noise.
- **Heavy media:** the site serves 14 to 45 MB MP4s directly from the theme, no streaming, no hero posters. Slow and expensive.
- **2025 funnel bolt-ons do not match the template:** the GHL survey iframe, ebook band, `tr-modal`, and modern blog cards use a different type/shadow/button vocabulary than the PBHS body. Two competing "Request an Appointment" systems are live at once (legacy gform modal vs new `tr-modal`).
- **Positioning mismatch:** the site's specialty is set to generic "Cosmetic Dentistry" and taglines are generic ("Beautiful smiles through exceptional dentistry"). **Neither "The Burns Protocol" nor "DreamSmile" appears anywhere in the theme.** The highest-value offer, Teeth In A Day, sits at block #14.
- **Broken link:** the "More About Spa 122" button has an empty href.

---

## 5. The SPA 122 co-brand situation

- On the homepage, SPA 122 appears exactly once (block #17): a 3-image collage, "Visit our MedSpa... our MedSpa is right next door," with a button that **links nowhere**.
- **The co-brand is massively under-used vs its assets.** `_media/exported-videos/` contains a full SPA 122 video suite that is **not referenced anywhere in the theme**: `SPA_122_-_Overview`, `SPA_122_-_services`, `SPA_122_Dr_Whitney_Bio`, `SPA_122_Office_Tour`.
- **Dr. Whitney identity, confirm before the build.** The "sets-us-apart" copy names a board-certified oral surgeon, **Dr. James Whitney, over 40 years**, as part of the dental multi-specialty practice, while the SPA 122 videos reference a "Dr. Whitney" med-spa bio. It is unclear whether these are the same person or a name collision. In the media, Dr. Whitney reads as an older gray/silver-haired man in a white coat (`DSC06120.jpg`). *Note: one analyst speculated a female headshot might be Dr. Whitney; that is a misread and has been discarded.* Resolve this identity before presenting the co-brand and the implant-surgery authority.

---

## 6. Redesign recommendations

### KEEP (real, owned, valuable)
- **The video library, the crown jewel.** `_media/exported-videos/` holds Practice Overview, Dental Implants, Crowns & Bridges, Office Tour, About Dr. Burns, 6 patient testimonial videos, and the full SPA 122 suite. Reuse heavily, but re-encode/compress, add posters, and serve via CDN/streaming instead of raw MP4.
- **Brand palette anchors:** teal `#74bdc2` + charcoal `#3e3e3e`. Carry forward, expand into a real token system.
- **The 2026 photo + testimonial package** (see MEDIA-CATALOG.md). This is the new visual spine.
- **The GHL conversion engine** (survey, booking, ebook). Keep the intent, integrate natively.
- **Local-SEO footer** (nearby cities, map, NAP) and the accessibility toggle capability.

### KILL
- The entire Bootstrap 3 / jQuery / Superfish / Modernizr / Flickity / ScrollReveal / PBHS-slider stack and the IE conditional comments.
- Diamond-line ornaments and italic-serif square buttons.
- The 13-item "Set Us Apart" carousel as-is.
- The empty/broken "More About Spa 122" link.
- The two competing appointment modals. Collapse to one.
- Generic positioning ("Cosmetic Dentistry", "Beautiful smiles") that ignores the implant/full-arch brand.
- Serving 14 to 45 MB videos directly from the theme.

### MODERNIZE (prioritized)
1. **Reposition around full-arch implants.** Lead with The Burns Protocol / DreamSmile / Teeth-In-A-Day, the highest-value offer, currently buried at block #14. Neither brand name exists on the current site. Make them the spine of the new one.
2. **Rebuild on a modern stack** (design tokens, CSS grid, fluid `clamp()` type, no JS scalefont, responsive without carousels as a crutch).
3. **Distill the differentiators** into a tight implant-credibility section: in-house oral surgeon, anesthesiology/sedation, 3D cone-beam imaging, in-house lab, same-day. Surface 4 to 6, not 13.
4. **Elevate SPA 122 into a proper co-brand** section/page using its unused video suite. Resolve the Dr. Whitney identity first.
5. **Refined type system:** upgrade the thin Amiri to a higher-contrast modern serif for display + a clean sans for body. Kill the italic-square buttons.
6. **Media optimization:** compressed/streamed video with posters, next-gen images, correct lazy-loading.
7. **Unify conversion:** one appointment modal, GHL integrated natively (not iframe-grafted), consistent with the new visual system. Keep the ebook lead magnet, rebuild the band to match.
8. **Clean information architecture:** hero, then primary implant offer, then proof (testimonial videos), then doctor authority, then process (Teeth-In-A-Day), then SPA 122 co-brand, then local-SEO footer.

---

## 7. Open items to confirm with the client (from manager QC)

1. **Dr. James Whitney:** same person as the SPA 122 "Dr. Whitney"? Oral surgeon, med-spa doctor, or both?
2. **Middle initial:** standardize to "Jeffrey S. Burns D.D.S." The old map graphic reads "D." in one place; verify which is correct.
3. **Dr. Burns appearance:** one older frame-grab shows dark hair, the 2026 team photo shows him clean-shaven/short-cropped. Likely an era gap (2019 vs 2026); confirm the current look before selecting portraits.
