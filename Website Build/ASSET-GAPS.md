# ASSET GAPS — for Spencer's Friday call with Dr. Burns

One line per gap: page / section / what we need. Updated as pages are built.

## Home (two variations: index.html = Figma Main Page skeleton, index-control.html = caresmiles control skeleton)
- Hero (both variations): current image is AI-generated (burns-hero-v2). Works for review, but we want a real photoshoot version: Dr. Burns in doctor attire smiling behind a seated, smiling 55+ patient, warm office light, patient emphasized.
- Before/after gallery: no true before/after photo pairs anywhere in Drive or local media. Need patient before/afters with consent (any DreamSmile case). index-control.html ships 4 dashed placeholder tiles labeled "pending patient consent" where the pairs go.
- Testimonial wall: have Jill Bush, Tammy, Danny, Patient Testimonials 1-5 video files. Need names/consent confirmation for Curtis Cloude and Angela Burker clips referenced on the Playground build.
- index-control.html testimonial wall: Mike, Ron, Kelly, and Angela filmed full stories in the 2026 shoot; videos still need extraction before they can drop into the wall (HTML comment marks the spot).
- index-control.html video FAQ: 6 question cards use the qa-*.png poster frames but the actual answer videos are not wired (links are dead until video files are extracted/hosted).

## Site-wide
- **Mislabeled assets found and corrected in the build (2026-07-10):** `dr-burns-portrait.jpg` in the shared Drive folder is actually a team member (name badge reads "Laurie"), not Dr. Burns. `dr-burns-alt.jpg` is an unrelated young woman, not a practice photo at all. Both filenames were used across multiple pages as if they were Dr. Burns. Swapped every instance to the one verified real Dr. Burns photo (`dr-burns.jpg`, the Under Armour polo headshot) so nothing wrong shipped, but that's only one usable Dr. Burns photo for the entire site. Need: 2-3 more real, correctly labeled photos of Dr. Burns (doctor attire, smiling, different crops for hero vs. bio vs. authority sections) and a pass to relabel or remove the mislabeled files in the source Drive folder so this doesn't recur.
- Official DreamSmile logo as SVG or high-res transparent PNG (current best: DREAM-SMILE-LOGO-1-copy.png, raster).
- Practice logo source file (vector). Current logo was scraped from the old site and degrades when scaled.
- "As Seen On" media logos: need confirmation Dr. Burns has clearance to use WHSV / WSIG marks.
- Approved professional photo of Dr. Burns smiling in clinical attire (portrait orientation for bio blocks).
- Before/afters per service page: implants, full-mouth, crowns, veneers. Ask which cases have signed media releases.
- Google Place ID found in old-site source (ChIJtyjtDWH4tIkRGbGJIczs1Hg) — still need consented, named review quotes or screenshots for on-page embeds, and confirmation "5.0 on Google" is current.
- Fresh patient photos: PARTIALLY RESOLVED 2026-07-10. Clean frames were extracted from the 2026 long-form testimonial shoot (Mike, Kelly, Angela x2, Ron, Danny: mike-2026.jpg, kelly-2026.jpg, angela-2026.jpg, angela-2026b.jpg, ron-2026.jpg, danny-2026.jpg) plus burns-consult.jpg (Dr. Burns at consult desk), burns-team-coat.jpg (Dr. Burns + team, white coat), team-2026.jpg (2026 team photo), bts-patient.jpg, lounge-fireplace.jpg. Every page now has its own hero image. Still needed: consent confirmation to use Mike/Kelly/Angela/Ron/Danny stills on the website, and a real Dr. Burns hero photoshoot (doctor + patient facing camera) to replace the AI composite on the homepages.
- The 21 "Jeff Burns DDS_Headshot" files in 2026_Photos.zip are STAFF headshots (the prefix is the practice name, not the subject). None are Dr. Burns. Useful for about-us team cards once names are confirmed.

## Service pages (as built)
- /dental-crowns/ (built 2026-07-10): real crown patient photo (smiling portrait or before/after of an actual crown case). dr-burns.jpg used as stand-in in the patient story section.
- /dental-fillings/ (built 2026-07-10): before/after photos of a real filling case. qa-old.png explainer poster used as stand-in in editorial block 4.
- /root-canal/ (built 2026-07-10): photo or video still of a real root canal patient describing how easy it was. dr-burns.jpg used as stand-in in the patient story section.
- /restorative-dentistry/dentures/implant-retained-dentures/ (built 2026-07-10): implant-supported denture patient photo (story), snap-in attachment diagram (block 1), facial-collapse-reversed before/after (block 2). Stand-ins: dr-burns.jpg, qa-what.png, qa-old.png.
- /restorative-dentistry/dentures/ (built 2026-07-10): smiling denture patient photo (story), completed full denture before/after (block 1), removable partial denture photo (block 2). Stand-ins: dr-burns.jpg, qa-what.png, office.jpg.
- /restorative-dentistry/dental-bridges/ (built 2026-07-10): bridge patient photo (story), traditional 3-unit bridge diagram (block 1), implant-supported bridge diagram (block 2), failing-bridge-replaced before/after (block 4). Stand-ins: dr-burns.jpg, qa-what.png, qa-protocol.png, qa-old.png.
- /preventative-care/tooth-extractions/ (built 2026-07-10): no new gap beyond site-wide reuse (review1-4.jpg repetition).
- /preventative-care/wisdom-teeth-removal/ (built 2026-07-10): verified photo of oral surgeon Dr. James Whitney (block "Oral surgeon in the same building"); office.jpg used meanwhile.
- /preventative-care/child-dentistry/ (built 2026-07-10, NEW page): three-generation family photo with Dr. Burns (hero); consented child/family patient photos (faces grid). NONE exist in library, burns-hero-v2.jpg and adult review1-4.jpg used meanwhile.
- /cosmetic-dentistry/porcelain-veneers/, /cosmetic-dentistry-4/teeth-whitening/, /cosmetic-dentistry/clear-braces/ (built 2026-07-10): true cosmetic case before/afters (veneers, whitening, braces) do not exist; existing implant-patient stills reused with placeholder comments asking for cosmetic-case testimonials.

## Full Mouth Dental Implants (new page, built 2026-07-10)
- Slug decision needed: no live URL exists for this page. Spencer to decide: publish as new URL or nest under an existing address (nearest live: /restorative-dentistry/full-mouth-reconstruction/).
- Hero: real full-arch patient photo (currently reuses burns-hero-v2.jpg, same hero as the implant page).
- Possibility section: signed-release before/after full-arch photos (none exist anywhere in the library).
- Quote strip: verbatim transcript quotes from the 2026 testimonial shoot (only "My health was declining" is on record).

## Cost of Dental Implants (built 2026-07-10)
- Hero: high-res landscape Dr. Burns portrait (dr-burns.jpg is 571x800, soft at full-bleed).
- Pricing section: client confirmation of which treatments count as "$1,500 à la carte items" so the page can name them.
- Testimonials: caption-free version of Tammy's photo (current poster has a baked-in TikTok caption).

## Cosmetic Dentistry (built 2026-07-10)
- Hero: real photoshoot replacement for burns-hero-v2.jpg (AI composite): cosmetic patient 55+ smiling, Dr. Burns supportive behind.
- Treatment cards: one real case photo each for veneers, whitening, clear braces, bonding (cards shipped text-only pending signed releases).
- Before/afters: true cosmetic pairs (none exist in Drive or local media).
- Testimonials: a cosmetic-case patient still or video (currently reuses implant patients with baked-in TikTok captions).

## About Us / Our Team (built 2026-07-10)
- 2-3 more verified Dr. Burns photos in different crops (dr-burns.jpg is the only verified photo and appears 3x on this page).
- Name-to-photo confirmation for the 2026 pro headshots in 2026_Photos.zip so faces can go on the team role cards (several identities unverified).
- Photo of Dr. James Whitney (FAQ thumbnail used as stand-in).

## Bone Grafting (built 2026-07-10)
- Own emotional hero photo (currently shares burns-hero-v2.jpg with two other pages).
- Real 3D-scan or graft-explainer visual, plus a before/after of an actual grafted case.
- Filmed testimonial from an actual bone-graft patient (generic implant testimonials used).

## Contact Us (built 2026-07-10)
- Form endpoint: contact form has no destination (no CRM/webhook, and no practice email address found anywhere in the old-site files). Need where submissions should go.
- Map: current map.jpg is the old site's low-res static map. Need a Google Maps embed or retina static map.
- Hero: a warm front-desk/greeting photo would beat the shared implant hero.

## Patient Information hub (built 2026-07-10)
- The 7 sub-pages it links to are not built yet: patient registration, first visit, insurance, CareCredit, scheduling, patient education, testimonials.
- FAQ video files or links to make the education cards playable.
- Accepted insurance plans list (nothing in the old-site files; copy says "call to check" until Dr. Burns supplies one).
