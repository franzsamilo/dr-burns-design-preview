---
client: Jeffrey S. Burns DDS
tags: [client, jeffrey-burns, website-redesign, reference, page-template-map]
status: active
updated: 2026-07-10
referenced_by: Build Prompt - Landing Page Standard v2.md
sources:
  - Figma Template Reference.md (templates, captured 2026-07-10 from live Figma Sites)
  - Website Link Crawl.md (slugs)
  - Site-map agent 2026-07-10 (Jina live fetch + Wayback CDX 522 URLs + live Google index)
  - Spencer Feedback - 2026-07-10 Meeting.md + meeting recording frames (build state)
---

# Page + Template Map: Dr. Burns Website Rebuild

The single reference the build prompt reads before rebuilding any page.

## How to use this file

For any page you are about to build:

1. Find its row in the master table.
2. Build to the section list of the **template** named in that row (catalog below).
3. Keep the **exact slug** shown, trailing slash included. Never change it.
4. Apply the **DreamSmile** flag: if No, the word DreamSmile and its logo do not appear anywhere on that page.
5. Follow the priority column for build order.

Canonical host: `https://www.jeffreyburns.com/`. Non-www redirects to www, HTTP upgrades to HTTPS, every URL ends in a trailing slash. Platform: WordPress behind Cloudflare.

---

## Template catalog

Three templates cover the whole site. Structure follows Figma, feel follows caresmiles.com. Section lists are the approved skeletons from `Figma Template Reference.md`.

### T1. Main Page (homepage only), 14 sections
1. Hero, dark split: headline left ("A Dream Smile You Never Have to Hide"), doctor + patient photo right in a contained rounded frame, teal CTA in nav.
2. Dual lead-capture cards overlapping the hero: implant candidate quiz (left) + implant guide ebook (right). The low-threshold peek row.
3. "Introducing The DreamSmile" logo lockup + row of 4 full-face real patient photos.
4. "The DreamSmile is..." alternating checklist rows with small photos (pain relief / eating / speaking / confident smiling).
5. Teal band: "Can You See Yourself with Your DreamSmile?"
6. Dark authority section: video, Dr. Burns, Google 5.0, stat trio (30+ years, AACD, 100+ smiles).
7. "Our Primary Services" 3 photo cards: implants, general, cosmetic.
8. "The DreamSmile vs. Dental Chains" comparison card pair.
9. Dark "The Burns Protocol": photo left, numbered steps right.
10. "The DreamSmile Warranty": Silver / Platinum (center) / Gold tier cards.
11. "The Patient Promise": checklist card + patient photo (exact copy in Master Synthesis section 5).
12. "You Deserve Better Than Another Band-Aid Solution" on light bg: 6 pain cards + teal CTA.
13. "Real Results. Real Patients." 3 testimonial video cards + 5-star rows.
14. Dark bio closer: "Dr. Jeffrey S. Burns" (never "Specialist"), photo + bio + patient quote.

### T2. Subpage (all service, treatment, local, about, contact pages), 9 sections
1. Hero, light, local SEO: ink headline "[Service] Near [City], VA" + italic teal subhead + checkmark bullets + teal CTA, doctor + patient photo right in a rounded frame. Not a dark full-bleed hero.
2. Split conversion band: teal heading + outcome image left, "What best describes your current condition?" quiz card right.
3. Dark patient story: quote left, patient photo right.
4. Row of 4 smiling patient faces + teal CTA.
5. "Your DreamSmile Journey": 8 teal capsule steps (implant pages). See the DreamSmile flag.
6. Dark "The Burns Protocol": photo left, 6 numbered steps right.
7. Editorial SEO block: ~6 teal-serif h2 subsections with alternating inline images and teal CTA bars. This is where education lives, compressed.
8. Dark "Meet the Doctor": bio + photo + teal buttons + quote card. Distinct bio variation per page (duplicate-content protection).
9. "Real Results. Real Patients." 3 testimonial cards + stars + teal CTA.

### T3. Post-light (blog posts, admin, utility), landing-exempt
Simpler template. Still gets: practice logo + phone number top (tel: linked), readable large type, one clear CTA, and a short "Meet the Doctor" / book-a-visit block at the foot. No pain/possibility/path arc required. Used for editorial blog posts and administrative patient-info pages.

---

## Template assignment rules

- Homepage → **T1**.
- Every treatment / service / local-SEO / about / contact page → **T2**.
- Blog posts (flat root slugs) and administrative patient-info + utility pages → **T3**.
- **DreamSmile flag = Yes only on implant-related pages.** Implant treatment pages, implant-retained dentures, full-arch / grafting pages, the branded DreamSmile funnels, implant-focused local landers, and implant blog posts. Everywhere else the flag is No: general dentistry, cosmetic, preventative, non-implant dentures, about, and admin pages carry no DreamSmile branding.

---

## Master page table

Priority: **P0** homepage, **P1** implant pages, **P2** other core service pages, **P3** cosmetic + preventative, **P4** about + contact + local landers, **P5** blog + admin. Status as of 2026-07-10.

### Homepage
| Page | Slug | Template | DreamSmile | Status | Priority |
|---|---|---|---|---|---|
| Home | `/` | T1 | Yes | Built (`index.html`) on caresmiles skeleton, rebuild onto T1. Variants: `index-control.html`, `index-v1-premium.html` | P0 |

### Dental implants (T2, DreamSmile Yes)
| Page | Slug | Template | DreamSmile | Status | Priority |
|---|---|---|---|---|---|
| Dental Implants (overview) | `/restorative-dentistry/dental-implants/` | T2 | Yes | Not built | P1 |
| Replacing Missing Teeth | `/restorative-dentistry/dental-implants/replacing-missing-teeth/` | T2 | Yes | Not built | P1 |
| Missing All Upper or Lower Teeth | `/restorative-dentistry/dental-implants/missing-all-upper-or-lower-teeth/` | T2 | Yes | Not built | P1 |
| Overview of Implant Placement | `/restorative-dentistry/dental-implants/overview-of-implant-placement/` | T2 | Yes | Not built | P1 |
| After Implant Placement | `/restorative-dentistry/dental-implants/after-implant-placement/` | T2 | Yes | Not built | P1 |
| Bone Grafting for Implants | `/restorative-dentistry/dental-implants/bone-grafting-for-implants/` | T2 | Yes | Built (`bone-grafting-for-implants.html`) | P1 |
| Cost of Dental Implants | `/restorative-dentistry/dental-implants/cost-of-dental-implants/` | T2 | Yes | Not built | P1 |
| Dental Implants FAQs | `/restorative-dentistry/dental-implants/dental-implants-faqs/` | T2 | Yes | Not built | P1 |
| Teeth in a Day | `/restorative-dentistry/dental-implants/teeth-in-a-day/` | T2 | Yes | Not built | P1 |
| Implant landing (proven build) | `/implant-tooth/` | T2 | Yes | Built, harness-green (proven T2) | P1 |

### General restorative (T2, DreamSmile No unless implant-focused)
| Page | Slug | Template | DreamSmile | Status | Priority |
|---|---|---|---|---|---|
| Restorative Dentistry (overview) | `/restorative-dentistry/` | T2 | No | Built (`restorative-dentistry.html`) | P2 |
| Dental Fillings | `/restorative-dentistry/dental-fillings/` | T2 | No | Built (`dental-fillings.html`) | P2 |
| Dental Crowns | `/restorative-dentistry/dental-crowns/` | T2 | No | Built (`dental-crowns.html`) | P2 |
| Dental Bridges | `/restorative-dentistry/dental-bridges/` | T2 | No | Built (`dental-bridges.html`) | P2 |
| Root Canal | `/restorative-dentistry/root-canal/` | T2 | No | Built (`root-canal.html`) | P2 |
| CEREC | `/restorative-dentistry/cerec/` | T2 | No | Not built | P2 |
| Full Mouth Reconstruction | `/restorative-dentistry/full-mouth-reconstruction/` | T2 | Yes | Not built | P2 |
| L-PRF Grafting & Osstell IDX | `/restorative-dentistry/l-prf-grafting-and-osstell-idx/` | T2 | Yes | Not built | P2 |

### Dentures (T2)
| Page | Slug | Template | DreamSmile | Status | Priority |
|---|---|---|---|---|---|
| Dentures (overview) | `/restorative-dentistry/dentures/` | T2 | No | Built (`dentures.html`) | P2 |
| Partial Dentures | `/restorative-dentistry/dentures/partial-dentures/` | T2 | No | Not built | P3 |
| Immediate Dentures | `/restorative-dentistry/dentures/immediate-dentures/` | T2 | No | Not built | P3 |
| Implant-Retained Dentures | `/restorative-dentistry/dentures/implant-retained-dentures/` | T2 | Yes | Built (`implant-retained-dentures.html`) | P2 |
| Denture Care | `/restorative-dentistry/dentures/denture-care/` | T3 | No | Not built | P5 |
| Denture Relines | `/restorative-dentistry/dentures/denture-relines/` | T3 | No | Not built | P5 |
| Rebase & Repairs | `/restorative-dentistry/dentures/rebase-repairs/` | T3 | No | Not built | P5 |
| Soft Liners | `/restorative-dentistry/dentures/soft-liners/` | T3 | No | Not built | P5 |
| Exams & Maintenance | `/restorative-dentistry/dentures/exams-maintenance/` | T3 | No | Not built | P5 |

### Preventative care (T2 / T3)
| Page | Slug | Template | DreamSmile | Status | Priority |
|---|---|---|---|---|---|
| Preventative Care (overview) | `/preventative-care/` | T2 | No | Not built | P3 |
| Dental Exams & Check-Ups | `/preventative-care/dental-exams-and-check-ups/` | T2 | No | Not built | P3 |
| Teeth Cleaning | `/preventative-care/teeth-cleaning/` | T2 | No | Not built | P3 |
| Oral Hygiene | `/preventative-care/oral-hygiene/` | T3 | No | Not built | P5 |
| Dental Sealants | `/preventative-care/dental-sealants/` | T3 | No | Not built | P5 |
| Child Dentistry | `/preventative-care/child-dentistry/` | T2 | No | Built (`child-dentistry.html`) | P3 |
| Gum Disease Treatment | `/preventative-care/gum-disease-treatment/` | T2 | No | Not built | P3 |
| Deep Teeth Cleaning | `/preventative-care/gum-disease-treatment/deep-teeth-cleaning/` | T3 | No | Not built | P5 |
| Periodontal Maintenance | `/preventative-care/gum-disease-treatment/periodontal-maintenance/` | T3 | No | Not built | P5 |
| Tooth Extractions | `/preventative-care/tooth-extractions/` | T2 | No | Built (`tooth-extractions.html`) | P3 |
| Wisdom Teeth Removal | `/preventative-care/wisdom-teeth-removal/` | T2 | No | Built (`wisdom-teeth-removal.html`) | P3 |

### Cosmetic dentistry (T2). See SEO landmine below, TWO live trees
| Page | Slug | Template | DreamSmile | Status | Priority |
|---|---|---|---|---|---|
| Cosmetic Dentistry (Tree A, New Market) | `/cosmetic-dentistry/` | T2 | No | Built (`cosmetic-dentistry.html`), confirm tree | P3 |
| Teeth Whitening (A) | `/cosmetic-dentistry/teeth-whitening/` | T2 | No | Built (`teeth-whitening.html`), confirm tree | P3 |
| Porcelain Veneers (A) | `/cosmetic-dentistry/porcelain-veneers/` | T2 | No | Built (`porcelain-veneers.html`), confirm tree | P3 |
| Dental Bonding (A) | `/cosmetic-dentistry/dental-bonding/` | T2 | No | Not built | P3 |
| Clear Braces (A) | `/cosmetic-dentistry/clear-braces/` | T2 | No | Built (`clear-braces.html`), confirm tree | P3 |
| Inlays & Onlays (A) | `/cosmetic-dentistry/inlays-onlays/` | T2 | No | Not built | P3 |
| Cosmetic Dentistry (Tree B, Harrisonburg, current nav) | `/cosmetic-dentistry-4/` | T2 | No | Not built | P3 |
| Teeth Whitening (B) | `/cosmetic-dentistry-4/teeth-whitening/` | T2 | No | Not built | P3 |
| Porcelain Veneers (B) | `/cosmetic-dentistry-4/porcelain-veneers/` | T2 | No | Not built | P3 |
| Dental Bonding (B) | `/cosmetic-dentistry-4/dental-bonding/` | T2 | No | Not built | P3 |
| Clear Braces (B) | `/cosmetic-dentistry-4/clear-braces/` | T2 | No | Not built | P3 |
| Inlays & Onlays (B) | `/cosmetic-dentistry-4/inlays-onlays/` | T2 | No | Not built | P3 |

### About us (T2 / T3)
| Page | Slug | Template | DreamSmile | Status | Priority |
|---|---|---|---|---|---|
| About Us | `/about-us/` | T2 | No | Built (`about-us.html`) | P4 |
| Dr. Jeffrey Burns | `/about-us/dr-jeffrey-burns/` | T2 | No | Not built | P4 |
| Meet the Staff | `/about-us/meet-the-staff/` | T2 | No | Not built | P4 |
| Advanced Technology | `/about-us/advanced-technology/` | T3 | No | Not built | P5 |
| 3D Imaging | `/about-us/3d-imaging/` | T3 | No | Not built | P5 |
| Whitney Oral Surgery | `/about-us/whitney-oral-surgery/` | T2 | No | Not built | P4 |
| Dr. James Whitney | `/about-us/whitney-oral-surgery/dr-james-whitney/` | T3 | No | Not built | P5 |
| Whitney Oral Surgery Info | `/about-us/whitney-oral-surgery/information/` | T3 | No | Not built | P5 |
| Oral Surgery Hours | `/about-us/whitney-oral-surgery/oral-surgery-hours/` | T3 | No | Not built | P5 |

### Contact + local-SEO landers (T2)
| Page | Slug | Template | DreamSmile | Status | Priority |
|---|---|---|---|---|---|
| Contact Us | `/contact-us/` | T2 | No | Built (`contact-us.html`) | P4 |
| Dental Implants Near Harrisonburg | `/contact-us/dental-implants-harrisonburg-area/` | T2 | Yes | Not built | P4 |
| Dental Implants Near Winchester | `/contact-us/winchester-dentist-dental-implants/` | T2 | Yes | Not built | P4 |
| Dental Implants Near Timberville | `/contact-us/dental-implants-timberville-va/` | T2 | Yes | Not built | P4 |
| Dentist Near Woodstock (cosmetic + implants) | `/contact-us/dentist-near-woodstock-cosmetic-implants/` | T2 | Yes | Not built | P4 |
| Cosmetic Dentist Near Broadway | `/contact-us/cosmetic-dentist-near-broadway/` | T2 | No | Not built | P4 |
| Cosmetic Dentist Near Luray | `/contact-us/cosmetic-dentist-near-luray/` | T2 | No | Not built | P4 |
| Cosmetic Dentist Near Elkton | `/contact-us/cosmetic-dentist-elkton-area/` | T2 | No | Not built | P4 |
| Dentist Near Bridgewater | `/contact-us/dental-implants-dentist-near-bridgewater/` | T2 | Yes | Not built | P4 |

### Branded DreamSmile funnels (T2, DreamSmile Yes)
| Page | Slug | Template | DreamSmile | Status | Priority |
|---|---|---|---|---|---|
| The Burns Protocol | `/theburnsprotocol/` | T2 | Yes | Not built | P1 |
| Confident DreamSmile | `/confidentdreamsmile/` | T2 | Yes | Not built | P1 |
| DreamSmile Wall of Fame | `/dreamsmilewalloffame/` | T2 | Yes | Not built | P2 |
| Thinking About Dental Implants | `/areyouthinkingaboutdentalimplants/` | T2 | Yes | Not built | P2 |
| Implants and Gum Disease | `/implantsandgumdisease/` | T2 | Yes | Not built | P2 |

### Administrative + utility (T3)
| Page | Slug | Template | DreamSmile | Status | Priority |
|---|---|---|---|---|---|
| Patient Information | `/patient-information/` | T3 | No | Built (`patient-information.html`) | P5 |
| Why Choose Us | `/patient-information/why-choose-us/` | T2 | No | Not built | P4 |
| Your First Visit | `/patient-information/first-visit/` | T3 | No | Not built | P5 |
| New Patients | `/patient-information/new-patients/` | T3 | No | Not built | P5 |
| Scheduling | `/patient-information/scheduling/` | T3 | No | Not built | P5 |
| Patient Registration | `/patient-information/patient-registration/` | T3 | No | Not built | P5 |
| Patient Review Form | `/patient-information/patient-review-form/` | T3 | No | Not built | P5 |
| Patient Education | `/patient-information/patient-education/` | T3 | No | Not built | P5 |
| Anesthesia | `/patient-information/anesthesia/` | T3 | No | Not built | P5 |
| Insurance | `/patient-information/insurance/` | T3 | No | Not built | P5 |
| Cherry Credit | `/patient-information/insurance/cherry-credit/` | T3 | No | Not built | P5 |
| CareCredit | `/patient-information/care-credit/` | T3 | No | Not built | P5 |
| Testimonials | `/patient-information/testimonials/` | T2 | No | Not built | P4 |
| Dental Testimonials | `/patient-information/dental-testimonials/` | T2 | No | Not built | P4 |
| COVID-19 Office Re-Opening | `/patient-information/covid-19-office-re-opening/` | T3 | No | Not built, consider retiring | P5 |
| Spa 122 MedSpa | `/patient-information/spa-122-medspa/` | T3 | No | Verify still live before migrating | P5 |
| Disclaimer | `/disclaimer/` | T3 | No | Not built | P5 |
| Sitemap (HTML) | `/sitemap/` | T3 | No | Keep as-is | P5 |

### Blog + resource posts (T3, flat root slugs)
Roughly 45 posts and campaign pages live at the site root (not under `/blog/`). All T3, DreamSmile Yes on implant/DreamSmile-topic posts, No otherwise. Priority P5 unless promoted. The `/blog/` index and `/blog/page/2-5/` pagination stay. Full enumerated list lives in the site-map agent output; representative implant-topic slugs (DreamSmile Yes): `/what-is-a-dreamsmile/`, `/full-mouth-implants-step-by-step/`, `/all-on-4-implants-low-bone-density/`, `/types-of-dental-implants-guide/`, `/dental-implants-cost-basics/`, `/single-vs-multiple-tooth-implants/`, `/what-are-tooth-implants/`. Non-implant topics (DreamSmile No): `/importance-of-dental-crowns/`, `/root-canal-benefits/`, `/dental-bonding-benefits/`, `/safe-teeth-whitening-options/`, `/early-gum-disease-signs/`, `/healthy-teeth-at-every-age/`.

---

## SEO preservation landmines (do not trip these)

1. **Trailing slashes are mandatory.** Every slug ends in `/`. Match it exactly or WordPress 301s and internal links break.
2. **Cosmetic Dentistry has two live indexed trees.** `/cosmetic-dentistry/` (5 children, "New Market" titles) and `/cosmetic-dentistry-4/` (5 children, "Harrisonburg" titles, the tree the current nav links to). This is the single biggest migration risk. Do not silently drop either. Decide deliberately: keep both, or consolidate one into the other with 301s. Dropping `-4` 404s five currently-ranking pages; dropping the clean slug 404s the other five.
3. **Blog posts use flat root slugs, not `/blog/<slug>/`.** Keep each post at the root. Tidying ~45 posts under `/blog/` would 301 or 404 the entire content library.
4. **Local landers live under `/contact-us/`.** Eight town-targeted pages. High-value local ranking assets. Preserve every slug.
5. **"Dentures" nav label maps to a nested URL** `/restorative-dentistry/dentures/`. Keep the URL, not the flattened label.
6. **Branded funnels** (`/theburnsprotocol/`, `/confidentdreamsmile/`, etc.) may have conversion / tracking wiring behind them. Treat as landing pages, not generic content.

## Legacy URLs (301 only, do not rebuild)
Pre-2020 captures from an old `.asp` site and an earlier WordPress IA. Almost certainly already dead or redirected. Map 301s only if any still hold backlinks: `/about-our-practice/`, `/about-our-practice/our-services/`, `/about-our-practice/our-team/`, `/treatments/`, `/treatments/restorative-photos/`, `/treatments/periodontal-disease-photos/`, `/common-problems/`, `/emergency-information/`, `/office-information/`, `/office-information/make-an-appointment/`, `/patient-forms/`, `/contact-us/how-to-find-us/`, `/jeffreyburns/HomePage.asp`, `/Keywords.asp`, `/default.asp`.

---

## Provenance and open items

- Templates: authoritative source is the Figma Wireframe design file, confirmed in-browser on 2026-07-10: `https://www.figma.com/design/jNmYR2vZlKmm2oX1r7xIhF/Wireframe?node-id=0-1`. It holds the Home and Subpage hi-fi comps, lo-fi page wireframes, and the design system (Color Palette; HERO / CONTAINER / BANNER-SECTION / SUB HEADER type styles; TAGLINE; cta-button-1 and cta-button-2). Section-level skeletons (Main 14, Subpage 9) are in `Figma Template Reference.md`. Figma MCP re-verification was blocked by the Starter-plan tool-call limit, so the file was read via the browser instead.
- Slugs: verified by the site-map agent against live Jina-proxy fetches, Wayback CDX (522 URLs, freshest 2026-03-13), and the July 2026 Google index. The site sits behind Cloudflare, so XML sitemaps could not be pulled directly. Before freezing the redirect map, export the authoritative Yoast/WP sitemap from inside WP admin, or run a whitelisted Screaming Frog crawl.
- One page to confirm still resolves: `/patient-information/spa-122-medspa/`.
- Build state: `Website Build/` holds 27 built HTML pages as of 2026-07-10 (a static rebuild served locally, distinct from the WordPress Playground build on GitHub that Spencer reviewed), not just homepage and implant-tooth. The master-table Status column reflects the actual files. `/implant-tooth/` passes the harness and is the proven T2 reference. Whether every other built page passes the harness or is Spencer-approved is a separate check; `Website Build/harness-report.json` has the latest run. The remaining "Not built" rows are pages with no HTML file yet.
