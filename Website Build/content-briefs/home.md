# Content Brief: Home (/)

**Source of truth:** Wayback Machine capture of the live page, 2025-07-12
`https://web.archive.org/web/20250712200700/https://www.jeffreyburns.com/`
Verified: not a Cloudflare challenge, not a Wayback 404. Canonical and og:url confirm this is the homepage. All copy below is verbatim from the capture unless marked otherwise.

---

## Page Identity

- **`<title>`:** Cosmetic Dentistry New Market VA, Jeffrey S. Burns DDS
- **Meta description:** "Jeffrey S. Burns DDS & Dentist Jeffrey S. Burns in New Market VA offers Cosmetic Dentistry, 540-740-8937"
- **H1:** The page has NO `<h1>`–`<h6>` tags at all. The visual headline (de facto H1) is the hero tagline rendered as a two-line styled div:
  - Line 1: **"Beautiful smiles"**
  - Line 2: **"through exceptional dentistry"**

## Page Anatomy (what the live homepage actually is)

This is a thin, video-hero homepage. There are no welcome paragraphs, no "about the practice" body copy, no testimonial blocks, and no service descriptions on this page. The entire page-specific content is:

1. Full-screen autoplaying, muted, looping background video banner (`Web Banner V6-cvyesk4svu.mp4`, 500px tall on desktop)
2. Hero tagline overlay (two lines, above)
3. Three hero buttons (below tagline)
4. A row of four quick-action tiles
5. A breadcrumb component (see quirk note below)
6. Footer (practice info, service area, nav, featured pages)

## Section-by-Section Content (verbatim)

### 1. Hero (video banner overlay)

Tagline: "Beautiful smiles" / "through exceptional dentistry"

Hero buttons (exact labels and destinations):

| Button label | Destination |
|---|---|
| Our Services (aria: "Learn more about Our Services") | `/restorative-dentistry/` |
| Schedule an appointment | Opens modal contact form (`?gform=1&modal`) — not a separate page |
| Watch Video | Plays `Burns_DDS_-_About_Dr_Burns_V2-amsidehh0q.mp4` (About Dr. Burns video) in a modal |

### 2. Quick-action tile row (below hero)

Four tiles, exact labels and destinations:

| Tile | Destination |
|---|---|
| Download Patient Forms | `/patient-information/patient-registration/` |
| Read Patient Reviews | `/patient-information/testimonials/` |
| Write a Review | `/patient-information/patient-review-form/` |
| Map to Our office | `/contact-us/` |

### 3. Breadcrumb component (live-site quirk)

The captured homepage renders a breadcrumb reading `Home / Preventative Care / Dental Exams and Check-Ups`. This is a template glitch on the live site (canonical + title confirm the page is the homepage). **Do not reproduce this breadcrumb in the rebuild.** Documented here so the rebuild team knows it was seen and intentionally dropped.

### 4. Header (persistent, but carries practice identity copy)

- Practice name: **Jeffrey S. Burns DDS**
- Address: **9626 South Congress St, New Market, VA 22844**
- Phone CTA, verbatim: **"Call Us Today! 540-740-8937"** (tel:15407408937)
- Utility links: Map to Our office, Scheduling (`/patient-information/scheduling/`), Download Patient Forms, **Register Online** (`/patient-information/patient-registration/`)
- Social: Facebook `facebook.com/JeffreySBurnsDDS/`, Instagram `instagram.com/jeffreys.burnsdds/`

### 5. Footer (practice info — verbatim)

**Address**
Jeffrey S. Burns DDS
9626 South Congress St
New Market, VA 22844

**Contact**
Phone: 540-740-8937
Fax: 540-740-9227
Email: info@jburnsdds.com
"Send Message" button (opens the same modal contact form)

**Service area, verbatim:**
"Proudly serving Shenandoah County, Page County, Rockingham County and the communities of: Timberville VA, Broadway VA, Mount Jackson VA, Stanley VA, Luray VA, Harrisonburg VA, Quicksburg VA, Woodstock VA, Basye VA, Edinburg VA, Elkton VA, Bridgewater VA"

**Footer featured-pages links (exact list, in order):**
Dental Implants, Cosmetic Dentistry, Teeth Cleaning, Dental Crowns, Root Canal, Porcelain Veneers, Restorative Dentistry, Clear Braces, Tooth Extractions, Inlays & Onlays

**Credit line:** "Dental Website Design by PBHS © 2019 - 2025"

## Pricing / Protocols / FAQs on this page

None. The homepage contains no pricing, no protocol steps, and no FAQ content. (Cost language lives on `/restorative-dentistry/dental-implants/cost-of-dental-implants/`; FAQs on `/restorative-dentistry/dental-implants/dental-implants-faqs/` — separate briefs.)

## Internal Links Made From This Page

Page-specific (hero + tiles): `/restorative-dentistry/`, `/patient-information/patient-registration/`, `/patient-information/testimonials/`, `/patient-information/patient-review-form/`, `/contact-us/`, `/patient-information/scheduling/`

Full site nav exposed on this page (mega-menu — this IS the site architecture the homepage presents):

- **Patient Information:** Why Choose Us · New Patients (Scheduling, Patient Registration, First Visit) · Insurance and Financial Information (Cherry Credit) · COVID-19 Office Re-Opening · Patient Education · Patient Reviews (Dental Testimonials, Write a Review) · Anesthesia · CareCredit
- **Preventative Care:** Dental Exams and Check-Ups · Oral Hygiene · Child Dentistry · Teeth Cleaning · Dental Sealants · Tooth Extractions · Wisdom Teeth Removal · Gum Disease Treatment (Periodontal Maintenance, Deep Teeth Cleaning)
- **Restorative Dentistry:** Dental Fillings · Dental Implants (Replacing Missing Teeth, Overview of Implant Placement, Missing All Upper or Lower Teeth, Bone Grafting for Implants, Teeth-in-a-Day, After Implant Placement, Cost of Dental Implants, Dental Implants FAQs) · Dental Bridges · Dental Crowns · CEREC · Full Mouth Reconstruction · Root Canal · Dentures (Immediate Dentures, Implant Retained Dentures, Partial Dentures, Denture Care, Exams & Maintenance, Denture Relines, Rebase & Repairs, Soft Liners) · L-PRF grafting and Osstell IDX
- **Cosmetic Dentistry** (lives at `/cosmetic-dentistry-4/`): Dental Bonding · Porcelain Veneers · Inlays & Onlays · Teeth Whitening · Clear Braces
- **About Us:** Dr. Jeffrey Burns · Meet The Staff · Advanced Technology · 3D Imaging · Whitney Oral Surgery (Information, Oral Surgery Hours, Dr. James Whitney)
- **Contact Us**, Disclaimer, Sitemap

## 5 Unique Terms/Topics That MUST Survive Into the Rebuild

1. **"Beautiful smiles through exceptional dentistry"** — the exact two-line hero tagline; it is the only headline on the page and the practice's brand line.
2. **"Call Us Today! 540-740-8937"** plus the full practice identity block: Jeffrey S. Burns DDS, 9626 South Congress St, New Market, VA 22844, Fax 540-740-9227, info@jburnsdds.com.
3. **The verbatim service-area sentence** — "Proudly serving Shenandoah County, Page County, Rockingham County and the communities of:" followed by the 12 named towns (Timberville, Broadway, Mount Jackson, Stanley, Luray, Harrisonburg, Quicksburg, Woodstock, Basye, Edinburg, Elkton, Bridgewater — all VA).
4. **The four quick actions as a distinct tile row** — Download Patient Forms, Read Patient Reviews, Write a Review, Map to Our office — plus header "Register Online" and "Schedule an appointment" opening a contact form modal (not a page).
5. **Video-first hero pattern with the distinctive service vocabulary the homepage surfaces** — background practice video + "Watch Video" (About Dr. Burns), and the footer featured-services list including practice-specific offerings: Teeth-in-a-Day, L-PRF grafting and Osstell IDX, CEREC, Bone Grafting for Implants, Whitney Oral Surgery (Dr. James Whitney).
