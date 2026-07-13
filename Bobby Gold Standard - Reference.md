---
client: Jeffrey S. Burns DDS
project: Website Redesign (Dream Smile)
doc_type: design-reference
status: draft-from-evidence
source_meeting: Spencer Walker review call, 2026-07-10
prepared: 2026-07-10
tags:
  - client/jeffrey-burns
  - website-redesign
  - design-reference
  - bobby-gold-standard
  - dreamsmile
---

# Bobby Gold Standard - Reference

## Reconciliation correction (2026-07-10, main thread)

This doc was researched from the git worktree checkout, which does not carry the
`3. Clients/Jeffrey Burns/` folder, so it under-reports what is available locally.
Two corrections to the "not in vault" claims below:

1. The client folder and all its docs DO exist in the main vault. The design
   source files (Figma, Canva) are genuinely external, that part stands.
2. A local static rebuild of the site DOES exist in the vault at
   `3. Clients/Jeffrey Burns/Website Build/`: 27 built HTML pages plus `harness.mjs`.
   This is the team's conversion-designer rebuild (served locally, seen at
   localhost in the meeting recording), distinct from the WordPress Playground
   build hosted on GitHub that Spencer actually reviewed. Bobby's benchmark
   sections are implemented in it. File-level references for the dev:

   - Meet the Doctor bio: present in 22 of the built pages (systematized site-wide),
     including `index.html`, `implant-tooth.html`, `restorative-dentistry.html`,
     `about-us.html`. Zero pages use "Meet the Specialist" (the banned term is
     already clean in the build).
   - Doctor authority section ("Nationally Recognized Expertise"): `index.html`.
   - Stat trio (30+ years / AACD / 100+): nearly every built page.
   - Google 5.0 / star-rating social proof: nearly every built page.
   - Dream Smile hero headline ("...never have to hide"): `index.html`,
     `index-control.html`, `index-v1-premium.html`, `implant-retained-dentures.html`.
   - "Band-Aid" pain-point grid (the overhauled section Spencer disliked):
     `index.html`, `spencer-review.html`.

The transcript analysis, identity disambiguation, and restore-list below are
unaffected and stand as researched.

---

## Summary

In the July 10 review call, referral partner Spencer Walker (GMJ Strategies) drew one clear line through the whole homepage: the sections that look professional are the ones the designer "Bobby" built and handed over, and everything that looks off is what the build team overhauled after her handoff. In his words, "all these spots where I'm like, Oh, I love this. I love this [are] things that Bobby actually created. She designed and handed over and the team just replicated" [~858-865s], and later, pointing at a broken section, "this is not how Bobby originally [designed] it and then somehow it's getting adjusted and it looks weird. It doesn't look professional" [~1363-1376s]. So Bobby's original design is the benchmark: her hero (the emotional doctor-plus-patient Dream Smile hero), the clean professional-looking blocks, and the Meet the Doctor bio at the foot of the page are the quality bar every page must match. The rejected sections (the pain-point "Band-Aid" grid with oversized bullets, the mismatched service headers, the clunky logo and trademark, generic stock imagery) are places the team departed from her design and must be pulled back to it.

Important scope note verified during research: **Bobby's actual design files are NOT in this vault, and neither is the built site.** The built homepage Spencer reviewed is "hosted on GitHub" in "your guys' playground" [227s]. The design source of truth lives in external Figma and Canva files (see Annex in the project brief). What exists locally is the project brief plus two exported assets and the old WordPress theme. Every "where it lives" cell below reflects that reality. Do not read a file:line as if the code were in the vault. It is not.

---

## Who is "Bobby" (identity note, read before using this doc)

- The transcript designer "Bobby" maps to **"Bobbie,"** credited in the project brief as the author of the **Figma Wireframe** (Annex A-4, created Nov 19 2025). Same person, two spellings.
- Spencer uses both pronouns for Bobby in the same call: "she designed and handed over" and "she's kind of handed it over" [~130s, ~861s], but once "this stuff that **he** designed" [~1352s]. Treat this as Spencer misspeaking, not two people. The dominant usage and the brief both point to one designer, Bobbie.
- **RJ is a different person and a different workstream.** RJ did the on-brand social media content (not the website). Dr. Burns later took RJ off it and had an in-office staffer redo it, which changed the colors and broke the branding. Spencer wants that reverted to RJ's original branded style [~1870-1896s]. Do not fold RJ's social work into the website "Bobby" standard.
- Open attribution gap: the polished Canva mockups (V1/V2/V3) are credited in the brief to **Allady Nica Alinsod**, not Bobbie. So "the design Bobby handed over and the team replicated" may itself be built from Allady's mockups plus Bobbie's wireframe. The local evidence does not let me split which polished section is whose. Flagged in Open / Unverified.

---

## Bobby-designed sections (the gold standard)

| Bobby-designed section | Where it lives (source of truth) | Spencer's verbatim praise + timestamp | The spec to replicate |
|---|---|---|---|
| **Dream Smile hero** (emotional doctor-plus-patient image, UVP headline, warm/aspirational tone) | Not in vault. Design source: Figma Sites "Main Page" (brief Annex A-7, Feb 23 2026) and Canva Mockup V2 (A-2). Built version is on GitHub ("playground") [227s]. Hero background asset present locally: `/Users/j/Desktop/Wireframe jeffrey burns.zip` > `Group 2.png` (darkened dental-operatory photo). | "look how you can connect with this doctor and this patient... I love this... So you emotionally like, oh, this looks nice, you know, makes you feel warm. That's a beautiful smile. Look at that. I want that. UVP medium." [~985-1003s] | Full-width hero, real doctor-with-patient image (emotional connection, warm), Dream Smile UVP headline ("A Dream Smile you never hide" / "You're One Decision Away From Never Hiding Your Smile Again"). Add the one thing Spencer says is missing: a low-threshold CTA poking above the fold ("Schedule your free consultation" plus the quiz / free guide), which he explicitly wished for here [~1003-1018s]. |
| **Clean, professional content blocks** (the general quality bar Spencer keeps pointing at) | Not in vault. Design source: Figma Sites A-7 / Canva Mockup V2 (A-2). | "this looks nice and professional clean, you know, look at this, like how like quality that looks" [~807s]; "Love this. This is awesome. I think this is great" [~844-853s]; "when you look at this stuff that [Bobby] designed... this is really professional looking. This looks really nice" [~1352-1360s] | Match the spacing, type hierarchy, and restraint of Bobby's original blocks. This is the reference for "does this look professional." When a new or overhauled section is in doubt, it must sit next to these blocks and look like the same designer made it. |
| **Meet the Doctor / Dr. Burns bio block** (placed at the foot of the page) | Not in vault. Design source: Figma Sites A-7 / Canva Mockup V1-V2 ("Dr. Burns Bio"). Brief bio copy in `/Users/j/Dr_Burns_Website_Project_Brief.md` (section 7). Analogous old-site part: `JeffreyBurns.zip` > `layouts/frontpage/part-doctor-1.php` (old WordPress, for contrast only). | "we started making every services page like this. We would put at the bottom of it... meet the doctor... this is fantastic. Looks like it may already be there" [~1516-1545s] | Keep the doctor bio at the bottom of every page (highest-intent visitors check the doctor before booking). Label it "Meet the Doctor," NOT "specialist": Dr. Burns is a general dentist, and Spencer notes the board will not allow "specialist" [~1494-1508s]. Watch duplicate-content risk if the same bio text repeats on every page (spin 15-30 variations of the copy) [~1552-1609s]. |
| **Doctor authority / social-proof stat row** (trust badges: AACD award, 30+ years, Advanced Implant Certification, People's Choice, "100+ smiles") | DESIGNED but NOT confirmed praised in this call. Design source: Canva Mockups V1/V2 "Social Proof Stats" and the 5-badge trust row (brief sections 3, 5, 8). See caveat at right. | No verbatim praise of a shipped stat row in the transcript. Spencer instead says social proof is MISSING on some pages and asks to add Google reviews / "5 star rated doctor on Google" [~1132-1169s, ~2449-2467s]. | Build the trust-badge row and stats from the brief (AACD Cosmetic Dentistry Award, 30+ Years, Advanced Implant Certification, People's Choice Award, "Over 100+ Renewed Confidence"), and ADD real social proof: Google reviews widget or a "5-star rated on Google" line, plus real before-and-after photos. Treat this as a to-build-to-spec section, not a "replicate Bobby's shipped block" section. |
| **The doctor-plus-patient authority image** (Spencer's favorite reference image) | Not a shipped section. An AI-generated reference image made "to create a base folder." Provenance ambiguous (Spencer or Bobby generated it via AI) [~2090-2099s]. | "This is my favorite image ever. Cause they build authority in the doctor, but emphasize the patient... Shows the doctor's supportive, but not the main thing. So good" [~2105-2120s] | Use this as the art-direction principle for imagery site-wide: doctor present and credible, but the patient and their result are the emotional focus. It encodes the same feeling as the hero. Use it to brief the real photo shoot, do not ship the AI placeholder as-is. |

---

## Sections overhauled away from Bobby's design (restore these)

These are the places Spencer says the team changed Bobby's original and degraded it. Each needs to be pulled back toward her design and polish.

1. **Logo treatment.** Pulled off the old website and dropped in badly. "look how terrible [it] looks... I couldn't show Dr. Burns this and have him [approve it]" [~574-592s]. Also, the correct Dream Smile logo is still not on the page [~644-646s].
2. **Trademark size.** The trademark mark is oversized and clunky. "this trademark is huge... looks kind of clunky and big... this feels weird" [~600-613s]; "this trademark looks so big here... it looks ginormous" [~773-786s]. Make it smaller, or remove it if it cannot be made to look right.
3. **Hero headline swapped away from Dream Smile.** It used to read Dream Smile, then changed. "Introducing the [J] Burns. I don't know what happened. It used to say dream smile and then it changed... This logo is still not there" [~624-646s]. Restore the Dream Smile branding and logo in the hero.
4. **"Band-Aid" pain-point section (big bullets, too much space).** The pain-point grid was overhauled and reads as poorly designed. "this whole section feels off to me" [~786-791s]; "really big bullet points with a lot of space... I don't like this. This section is not designed well" [~819-828s]. Restore Bobby's tighter, designed pain-point treatment.
5. **Service section headers (mismatched fonts and colors).** Dental Implants and General Dentistry have one header style, but Cosmetic and Restorative use a different font and color, with reiterated links below. "cosmetic and restorative have different font. And different color... like the AI did something wonky here" [~1180-1201s]; "this looks wonky... it's cut off, something's weird" [~1277-1286s]. Normalize all service headers to one system per Bobby's design and the sent outline.
6. **Generic stock imagery / no before-and-afters / not his patients.** "These are all generic... these should be images from him... There's no before and afters on here" [~708-760s]. Replace with Dr. Burns' real people and real before-and-after cases (source from Drive media folders or a new shoot).
7. **Nav scroll-state color bug.** On scroll the header turns white, then loses the white background and shifts oddly on scroll-up. "See when you scroll how this turns white... it loses the white background... Somebody should be on here making that happen" [~739-757s]. Fix the sticky-nav background states.
8. **General regression note.** Spencer's summary of the pattern: work "is getting passed off and then handed back to us... this is not how Bobby originally [designed] it and then somehow it's getting adjusted and it looks weird. It doesn't look professional" [~1337-1376s]. The fix for every item above is the same test: does it look like the same designer made it as the hero and the clean blocks.

### Related but separate: RJ's social branding (not the website)
Not part of the website build, but captured so it is not confused with Bobby's work. RJ originally produced on-brand social content. Dr. Burns took RJ off it and had an in-office staffer redo it, who "came up with all these different new colors" and broke the brand. Spencer: "circle back. More of this type of branding" [~1870-1896s], meaning revert to RJ's original branded look. Track this under social content, not under the Bobby website standard.

---

## Where the sources actually are (local vs external)

**Local, usable now:**
- `/Users/j/Dr_Burns_Website_Project_Brief.md`: the most authoritative local document. Contains brand positioning, page structure, the 6-step Burns Protocol, copy, CTAs, and the full Annex of design-file links. This is the practical spec source for the "replicate" column above.
- `/Users/j/Desktop/Wireframe jeffrey burns.zip`: two exported assets only. `Group 2.png` (1440x856 darkened dental-operatory hero background) and `Frame 3.svg` (a small logo mark). Not a full wireframe.
- `/Users/j/Desktop/JeffreyBurns.zip`: the OLD WordPress / PBHS theme for jeffreyburns.com (PHP parts dated Jul-Sep 2025: `part-banner-1.php`, `part-doctor-1.php`, `part-sets-us-apart-1.php`, `part-testimonials-1.php`, `part-footer-1.php`). This is the outdated site being replaced, useful only as before-state contrast. It is NOT Bobby's redesign.

**External, referenced in the brief Annex, NOT fetched (per task constraint):**
- Figma Wireframe by Bobbie, A-4 (node-id 148-427), Nov 19 2025.
- Figma Sites "Main Page" A-7 and "Subpage" A-8, both Feb 23 2026. Most likely the design behind the GitHub build.
- Canva Mockups V1 (A-1), V2 (A-2, most complete), V3 (A-3, permission restricted), by Allady Nica Alinsod.
- UVP document (A-5) and Dr. Burns' feedback doc (A-6), Google Docs, access restricted.
- Google Doc "Client: Jeffrey Burns" referenced in the Primof HR thread (Drive).
- The built homepage itself: a GitHub-hosted "playground" [227s]. No local checkout found.

---

## Open / unverified

1. **Bobby's original design files are not in this vault or anywhere local.** Only the brief, two exported assets, and the old WordPress theme are here. To lock the true gold standard you need the Figma Sites files (A-7 / A-8) and Canva V2 (A-2). Request access before treating any single section as final.
2. **He/she pronoun on Bobby.** Spencer says "she" twice and "he" once for the same designer in one call. Resolved here as one person (Bobbie), but the source is genuinely inconsistent. Confirm with Spencer.
3. **Bobbie vs Allady attribution.** The brief credits Bobbie with the wireframe and Allady Nica Alinsod with the polished Canva mockups. Spencer credits "Bobby" with the design the team replicated. Which polished sections are Bobbie's own design versus Allady's mockup built out by Bobbie is not resolvable from local evidence. Confirm before crediting specific sections.
4. **Doctor authority stat row (5.0 stars / 30+ years / AACD / 100+ smiles) is documented in the brief but NOT praised in the transcript.** In fact Spencer says social proof is missing on some pages and asks to add Google reviews. So this row is a build-to-brief item, not a verified "replicate Bobby's shipped block" item. Do not present it as something Spencer praised.
5. **The "favorite image" is an AI-generated reference, not a shipped asset,** and its maker (Spencer or Bobby) is stated ambiguously in the call. Use it as art direction, not as a final asset.
6. **No timestamps are frame-exact.** Spencer narrates while screen-sharing and says "this" / "this section" deictically. Timestamps are from `spencer-meeting-segments.txt` and are accurate to the spoken line, but the exact on-screen section for a given "this" cannot be 100 percent pinned without the screen recording.
7. **The GitHub "playground" repo was not located locally** and, per project hard rules, is not to be pulled without explicit approval. The built code Spencer reviewed could not be inspected line by line.
