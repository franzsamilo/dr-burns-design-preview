---
client: Jeffrey S. Burns DDS
tags: [client, jeffrey-burns, validation-harness, design-direction]
---

# Design Direction Validation Harness

Purpose: test whether the multi-agent design direction is actually supported by the Jeffrey Burns knowledge base, client complaints, current site source, and downloaded assets.

## Verdict

- Criteria tested: **10**
- Pass / pass-with-nuance: **10**
- Partial: **0**
- Weak: **0**
- Average evidence score: **84.3/100**

**Harness result: direction is supported.** The main correction is not to flatten the nuance: the client does want grey depth in places, but not black-led/dark-luxury design.

## Current source / asset checks

- Current website source files found: **188**
- Source contains teal `#74bdc2`: **True**
- Source contains grey `#3e3e3e`: **True**
- Source contains black tokens: **True**
- Source MP4 count: **18**
- Source image count: **23**
- Downloaded media files found: **344**
- Downloaded media size: **21.37 GB**
- Testimonial-named media count: **39**
- DreamSmile-named media count: **7**

### DreamSmile logo candidates

- `Media/Website Images - Dr. Jeff Burns/wp-content/uploads/2026/01/DREAM-SMILE-LOGO-1-copy.png`

## Criteria results

| Verdict | Score | Claim |
|---|---:|---|
| PASS_WITH_GREY_NUANCE | 84 | Use bright white/light-grey/teal with #3e3e3e as deepest brand neutral; avoid black-led design. |
| PASS | 87 | Design for older patients with larger text and high contrast. |
| PASS | 87 | Reduce vertical gaps/section bloat; use compact bullet layouts so persuasion happens faster. |
| PASS | 87 | Use full-face smiling patients, Dr. Burns smiling, diagrams/illustrations; avoid drills/scary clinical images. |
| PASS_WITH_NAMING_NUANCE | 84 | Make DreamSmile™ the hero product and use exact naming/logo consistently. |
| PASS | 81 | Lead with substantiated proof: 30+ years, 98%+, personal cell, teaches dentists, warranty, same-day teeth. |
| PASS_WITH_SCOPE_NUANCE | 81 | Every major page should behave like a landing page with phone/CTA/proof. |
| PASS | 87 | DreamSmile™ vs Traditional Dental Implants comparison should be compact and make DreamSmile visually win. |
| PASS | 87 | Rebuild the patient journey: larger title, shorter margin, fewer CTAs, compact steps. |
| PASS | 78 | Use actual DreamSmile/TIE/patient media assets, not generic placeholders. |

## Evidence by criterion

### color_light_grey_teal: PASS_WITH_GREY_NUANCE (84/100)

**Claim tested:** Use bright white/light-grey/teal with #3e3e3e as deepest brand neutral; avoid black-led design.

Evidence found:
- `Dr Burns Feedback` line 1: “(1) Too Much Black”
- `Dr Burns Feedback` line 2: “There's a LOT of black in the Mockup, their current website doesn't seem to have any black apart from their drop-down menus:”
- `Dr Burns Feedback` line 5: “The black is too dull and drags the design down and doesn't "feel" like them or their brand.”
- `Dr Burns Feedback` line 7: “If you take a look at their website, their colors are grey, white, and teal: https://www.jeffreyburns.com/about-us/”
- `Dr Burns Feedback` line 11: “Let's make this middle CTA have a white background, and then grey on the other two (1st variation).”
- `Comments April 20` line 143: “The layout on this is very clean and pretty, however let’s do the background in the dark color originally selected for this section as Dr. Burns wanted more greys on his website and not all light colors:”

Nuance / possible contradiction:
- `Comments April 20` line 143: “The layout on this is very clean and pretty, however let’s do the background in the dark color originally selected for this section as Dr. Burns wanted more greys on his website and not all light colors:”

### older_reader_legibility: PASS (87/100)

**Claim tested:** Design for older patients with larger text and high contrast.

Evidence found:
- `Dr Burns Feedback` line 17: “(2) Low Contrast”
- `Dr Burns Feedback` line 18: “This section has very low contrast with grey boxes on a grey background. Additionally the “red” icons also have low contrast. The intent seems to look like the icons are glowing, however it looks dull. It may look brighter with a white icon base color under th”
- `Dr Burns Feedback` line 34: “(3) Very Low Contrast”
- `Dr Burns Feedback` line 43: “(5) Very Low Contrast - Black”
- `Dr Burns Feedback` line 63: “It’s pretty hard to see the numbers against the dark background. It’s also not that easy to read this section as the text is pretty small.”
- `Comments June 23` line 36: “Find actual videos to go here. There’s a bunch in this folder (that’s linked to our drive): https://drive.google.com/drive/folders/1eY0NbJDYGTY9GislN8iYArmjrr2WVTdW?usp=drive_link”
- `Comments June 23` line 75: “Make “YOUR JOURNEY” bigger so older people with bad eyesight can read it”
- `Comments June 23` line 90: “The text is too small”

### compact_scroll: PASS (87/100)

**Claim tested:** Reduce vertical gaps/section bloat; use compact bullet layouts so persuasion happens faster.

Evidence found:
- `Comments April 20` line 1: “This is way too large. Based on the mockup and the references from https://www.nuviasmiles.com and https://www.caresmiles.com/, this takes up the whole screen, when it should take up half or less than half.”
- `Comments April 20` line 75: “The gaps are too large….we don’t want the leads to have to scroll down too much. And making this section too long is prolonging the time to show them more information and convince them that this is the practice they should visit.”
- `Comments June 23` line 10: “Bullet Points:”
- `Comments June 23` line 41: “I like this section but I don’t like that we have to scroll so much. Can you do this as bullet points and let’s select one image of an actual patient smiling (ideally let’s put the Dream Smile logo as a watermark in the image)”
- `Comments June 23` line 73: “Feels like a big margin between the top and “YOUR JOURNEY”...shorten it”

### outcome_not_clinical_imagery: PASS (87/100)

**Claim tested:** Use full-face smiling patients, Dr. Burns smiling, diagrams/illustrations; avoid drills/scary clinical images.

Evidence found:
- `Comments June 23` line 12: “Proprietary procedure with a 98%+ success rate”
- `Comments June 23` line 23: “Use the stuff that TIE already created…this is not his patient nor is it what the guide looks like. The right stuff is on his website:”
- `Comments June 23` line 41: “I like this section but I don’t like that we have to scroll so much. Can you do this as bullet points and let’s select one image of an actual patient smiling (ideally let’s put the Dream Smile logo as a watermark in the image)”
- `Comments June 23` line 78: “Change photo to picture of him smiling, in his doctor attire.”
- `Comments June 23` line 269: “Change this background image to perhaps a photo of someone smiling or a close up of their teeth, this image with the drill, is too cold and clinical and kind of scary. We want the photos to show the patients what they could achieve, focusing more on the result”

### dreamsmile_brand: PASS_WITH_NAMING_NUANCE (84/100)

**Claim tested:** Make DreamSmile™ the hero product and use exact naming/logo consistently.

Evidence found:
- `Comments June 23` line 2: “Anywhere Dream Smile shows up combine the words like this: DreamSmile and add the ™ symbol.”
- `Comments June 23` line 8: “Logo isn’t right. Here’s the accurate one:”
- `Comments June 23` line 9: “Change “A Dream Smile You Never Have to Hide” to “A DreamSmile™ You’ll Never Have to Hide””
- `Comments June 23` line 14: “Backed by the DreamSmile™ Lifetime Warranty*”
- `Comments June 23` line 32: “Use the actual “Dream Smile” logo here (maybe center ‘Introducing’ and put the logo below? Or keep the same but just use the Dream Smile logo)”
- `UVP Document` line 15: “The Dream Smile (The Dream Smile by Dr. Jeffrey S. Burns)”
- `UVP Document` line 18: “Created using the Burns Protocol, Dr. Burns’s proprietary process for consistently and safely creating beautiful Dream Smiles”
- `UVP Document` line 20: “Backed up with a Dream Smile Warranty”

Nuance / possible contradiction:
- `Comments June 23` line 55: “Add a space between Dream and Smile and add ™”

### proof_substantiated: PASS (81/100)

**Claim tested:** Lead with substantiated proof: 30+ years, 98%+, personal cell, teaches dentists, warranty, same-day teeth.

Evidence found:
- `UVP Document` line 5: “Dr. Burns is a nationally recognized dentist who teaches other doctors across the United States his proprietary protocol”
- `UVP Document` line 6: “Get care from a nationally recognized dentist”
- `UVP Document` line 7: “Over 30 years of implant experience”
- `UVP Document` line 8: “Respected published author in multiple dental journals”
- `UVP Document` line 11: “One Stop Shop - “Smiles Fully Restored in One Location” - Restore your smile without having to go to multiple locations - saves time and money”
- `Comments June 23` line 12: “Proprietary procedure with a 98%+ success rate”
- `Comments June 23` line 13: “A doctor who truly cares—gives you his personal cell number”
- `Comments June 23` line 14: “Backed by the DreamSmile™ Lifetime Warranty*”

Nuance / possible contradiction:
- `UVP Document` line 304: “NOT STRONG”
- `UVP Document` line 305: “Statements or claims that are difficult to measure or describe or that are generic”

### direct_response_pages: PASS_WITH_SCOPE_NUANCE (81/100)

**Claim tested:** Every major page should behave like a landing page with phone/CTA/proof.

Evidence found:
- `Updated Page List` line 1: “Every Page Should Be a Landing Page - (Except the blogs and certain pages)”
- `Updated Page List` line 2: “Every page should be a landing page and they don’t have to have an opt-in, we can just have the phone number at the top, it should be direct response oriented.”
- `Updated Page List` line 44: “Resources *These pages will not be a direct response, they are just extra information for the patients. They will be able to be accessed from the menu drop down.”
- `Comments June 23` line 16: “Add phone number under “Schedule Your Free Consultation””
- `Comments June 23` line 17: “Add phone number in upper right corner”
- `Comments June 23` line 81: “Remove “SCHEDULE YOUR FREE ASSESSMENT” on each of these except for right below the Dream Smile Assessment”
- `Comments June 23` line 110: “Between system and he “a proven multi-step system with a proven 98% success rate that he has taught to dentists”, add beautiful smile/aesthetically pleasing/healthy, long lasting dreamsmile(S).”
- `Comments June 23` line 129: “Schedule to meet with dr Burns….CTA”

Nuance / possible contradiction:
- `Updated Page List` line 1: “Every Page Should Be a Landing Page - (Except the blogs and certain pages)”
- `Updated Page List` line 44: “Resources *These pages will not be a direct response, they are just extra information for the patients. They will be able to be accessed from the menu drop down.”

### comparison_table: PASS (87/100)

**Claim tested:** DreamSmile™ vs Traditional Dental Implants comparison should be compact and make DreamSmile visually win.

Evidence found:
- `Comments April 20` line 170: “Let’s try to copy how the section looks in the mockup, as we want THE DREAM SMILE to stand out more….here it doesn’t look like an obvious comparison. The Dream Smile Text in the comparison is very small and doesn’t stand out.”
- `Comments June 23` line 2: “Anywhere Dream Smile shows up combine the words like this: DreamSmile and add the ™ symbol.”
- `Comments June 23` line 8: “Logo isn’t right. Here’s the accurate one:”
- `Comments June 23` line 9: “Change “A Dream Smile You Never Have to Hide” to “A DreamSmile™ You’ll Never Have to Hide””
- `Comments June 23` line 14: “Backed by the DreamSmile™ Lifetime Warranty*”
- `Comments June 23` line 32: “Use the actual “Dream Smile” logo here (maybe center ‘Introducing’ and put the logo below? Or keep the same but just use the Dream Smile logo)”

### journey_rebuild: PASS (87/100)

**Claim tested:** Rebuild the patient journey: larger title, shorter margin, fewer CTAs, compact steps.

Evidence found:
- `Comments June 23` line 73: “Feels like a big margin between the top and “YOUR JOURNEY”...shorten it”
- `Comments June 23` line 75: “Make “YOUR JOURNEY” bigger so older people with bad eyesight can read it”
- `Comments June 23` line 81: “Remove “SCHEDULE YOUR FREE ASSESSMENT” on each of these except for right below the Dream Smile Assessment”
- `Comments June 23` line 166: “All little titles need to be bigger…..and 95% success, needs to be 98%+”
- `UVP Document` line 59: “PATIENT JOURNEY / PATIENT PATHWAY”
- `UVP Document` line 60: “THE DREAM SMILE PATHWAY”
- `UVP Document` line 61: “Dream Smile Assessment”
- `UVP Document` line 229: “THE DREAM SMILE PATHWAY”

### asset_led_real_media: PASS (78/100)

**Claim tested:** Use actual DreamSmile/TIE/patient media assets, not generic placeholders.

Evidence found:
- `Comments June 23` line 23: “Use the stuff that TIE already created…this is not his patient nor is it what the guide looks like. The right stuff is on his website:”
- `Comments June 23` line 32: “Use the actual “Dream Smile” logo here (maybe center ‘Introducing’ and put the logo below? Or keep the same but just use the Dream Smile logo)”
- `Comments June 23` line 36: “Find actual videos to go here. There’s a bunch in this folder (that’s linked to our drive): https://drive.google.com/drive/folders/1eY0NbJDYGTY9GislN8iYArmjrr2WVTdW?usp=drive_link”
- `Comments June 23` line 41: “I like this section but I don’t like that we have to scroll so much. Can you do this as bullet points and let’s select one image of an actual patient smiling (ideally let’s put the Dream Smile logo as a watermark in the image)”
- `Comments June 23` line 269: “Change this background image to perhaps a photo of someone smiling or a close up of their teeth, this image with the drill, is too cold and clinical and kind of scary. We want the photos to show the patients what they could achieve, focusing more on the result”
- `Design Direction Brief` line 8: “Multi-agent synthesis of the Jeffrey Burns knowledge base, client/reviewer complaints, current website source, media library, wireframes, and prior design-direction analysis.”
- `Design Direction Brief` line 16: “> **Bright premium confidence:** warm, readable, grey/white/teal, proof-heavy, locally trustworthy, and built to convert older dental implant patients into calls or consultations.”
- `Design Direction Brief` line 20: “> Dark luxury, generic dental-template polish, clinical procedure imagery, low-contrast grey-on-grey sections, oversized scrolling layouts, or abstract “premium” design that ignores the real DreamSmile™ assets.”

Nuance / possible contradiction:
- `Comments June 23` line 23: “Use the stuff that TIE already created…this is not his patient nor is it what the guide looks like. The right stuff is on his website:”
- `Design Direction Brief` line 20: “> Dark luxury, generic dental-template polish, clinical procedure imagery, low-contrast grey-on-grey sections, oversized scrolling layouts, or abstract “premium” design that ignores the real DreamSmile™ assets.”
- `Design Direction Brief` line 28: “| Imagery | Full-face smiling patients, Dr. Burns smiling in doctor attire, before/after proof, diagrams where needed | Drills, surgery, raw mouth/procedure shots, cold clinical chairs, generic stock |”
- `Design Direction Brief` line 29: “| Brand | DreamSmile™ as named product, official DreamSmile™ logo, Burns Protocol as mechanism | “Dream Smile” inconsistency, generic dental implant language |”

## Brief coverage checks

| Required term | Present in multi-agent synthesis? |
|---|---:|
| `DreamSmile™` | yes |
| `#74bdc2` | yes |
| `#3e3e3e` | yes |
| `98%` | yes |
| `personal cell` | yes |
| `Same Day Teeth` | yes |
| `As Seen On` | yes |
| `540-740-8937` | yes |
| `Traditional Dental Implants` | yes |
| `older` | yes |

## Corrections from the harness

1. **Keep the “no black” rule precise:** do not say “no dark color ever.” The evidence supports “no black-led/dark luxury aesthetic.” Select dark grey may appear sparingly if it improves hierarchy, but `#3e3e3e` should remain the deepest normal brand neutral.
2. **DreamSmile™ naming has one source wrinkle:** one June note says to add a space between Dream and Smile, but later/summary docs standardize `DreamSmile™`. Final brief should treat `DreamSmile™` as default unless the official logo artwork renders it differently.
3. **Every page as landing page has scope limits:** resources/blog/patient education pages can be more informational, but major service pages need direct-response architecture.
4. **Asset pass is mandatory before design:** the direction is right, but a designer still needs approved human imagery, Dr. Burns smiling photo, TV/radio logos, and web-ready testimonial cuts.

## Machine outputs

- JSON: `/Users/j/Library/Mobile Documents/iCloud~md~obsidian/Documents/Knowledge Base/3. Clients/Jeffrey Burns/design_direction_validation_harness.json`
- CSV: `/Users/j/Library/Mobile Documents/iCloud~md~obsidian/Documents/Knowledge Base/3. Clients/Jeffrey Burns/design_direction_validation_harness.csv`