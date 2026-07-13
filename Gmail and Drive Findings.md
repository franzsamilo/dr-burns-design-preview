---
client: Jeffrey S. Burns DDS
tags: [client, jeffrey-burns, dental, website-redesign]
---

# Gmail and Drive Findings

## Website crawl

Direct browser/HTTP access to `https://www.jeffreyburns.com/` hit Cloudflare security verification, so I used sitemap + Jina Reader text snapshots. Internal links in the full table are links found on the live/cached site; many could not be independently status-checked because verification was blocked/rate-limited.

- Website link rows found: **224**
- By type: {'external': 10, 'file': 77, 'internal': 129, 'map': 2, 'social': 4, 'tel': 2}
- Full link table: `/tmp/jeffrey_burns_links_clean.csv` and `/tmp/jeffrey_burns_links_clean.md`

### High-value / CTA / contact links

| Type | Link Text | URL | Status / verification | Notes |
|---|---|---|---|---|
| external | Download Now | https://jeffrey-burns.implant-services.com/get-e-book | 200 / yes |  |
| external | Learn more about Register Online | https://staging.pbhshosting.com/www-jeffreyburns-com/patient-information/patient-registration/ | 403 / needs review | Staging PBHS registration link appears in at least one page crawl; returned 403 to verifier. |
| external | Cherry (opens in new tab) | https://withcherry.com/ | 200 / yes |  |
| external | withcherry.com/accessibility (opens in new tab) | https://withcherry.com/accessibility | 200 / yes |  |
| external | withcherry.com/lending-partners (opens in new tab) | https://withcherry.com/lending-partners | 200 / yes | redirects |
| external | withcherry.com/terms (opens in new tab) | https://withcherry.com/terms | 200 / yes |  |
| file | Image 1: profile picture of Bryana | https://master-cherry-storage.s3.us-west-2.amazonaws.com/static/widgets/images/1.png | 200 / yes |  |
| file | Image 2: profile picture of Alex | https://master-cherry-storage.s3.us-west-2.amazonaws.com/static/widgets/images/2.png | 200 / yes |  |
| file | Image 3: profile picture of Marie | https://master-cherry-storage.s3.us-west-2.amazonaws.com/static/widgets/images/3.png | 200 / yes |  |
| file | Image 6: profile picture of Cassie | https://master-cherry-storage.s3.us-west-2.amazonaws.com/static/widgets/images/4.png | 200 / yes |  |
| file | Image 5: profile picture of Alyssa | https://master-cherry-storage.s3.us-west-2.amazonaws.com/static/widgets/images/5.png | 200 / yes |  |
| file | Image 4: profile picture of Gabriel | https://master-cherry-storage.s3.us-west-2.amazonaws.com/static/widgets/images/6.png | 200 / yes |  |
| file | Image 2: a patient history form | https://www.jeffreyburns.com/wp-content/uploads/2019/10/patient-registration-1.jpg | 403 / no/check | HEAD failed; GET failed: <HTTPError 403: 'Forbidden'> |
| internal | Cosmetic Dentistry \| Skip to main content | http://www.jeffreyburns.com/patient-information/care-credit/ | 200 / yes | checked via Jina Reader (direct browser hit shows Cloudflare challenge) |
| internal | Cosmetic Dentistry \| Skip to main content | http://www.jeffreyburns.com/patient-information/patient-registration/ | blocked/rate-limited / present-on-site / verify-blocked | URL was extracted from sitemap/live rendered text; independent HTTP verification blocked by Cloudflare/Jina rate limiting. |
| internal | Map to Our office | https://jeffreyburns.com/contact-us/ | blocked/rate-limited / present-on-site / verify-blocked | URL was extracted from sitemap/live rendered text; independent HTTP verification blocked by Cloudflare/Jina rate limiting. |
| internal | Download Patient Forms | https://jeffreyburns.com/patient-information/patient-registration/ | blocked/rate-limited / present-on-site / verify-blocked | URL was extracted from sitemap/live rendered text; independent HTTP verification blocked by Cloudflare/Jina rate limiting. |
| internal | Contact Dr. Burns’ \| Contact Us \| Map to Our office \| Schedule your visit today \| a consultation \| contact Jeffrey S. Burns, DDS \| schedule a consultation \| scheduling a consultation \| scheduling a personalized consultation | https://www.jeffreyburns.com/contact-us/ | blocked/rate-limited / present-on-site / verify-blocked | URL was extracted from sitemap/live rendered text; independent HTTP verification blocked by Cloudflare/Jina rate limiting. |
| internal | Elkton | https://www.jeffreyburns.com/contact-us/cosmetic-dentist-elkton-area/ | blocked/rate-limited / present-on-site / verify-blocked | URL was extracted from sitemap/live rendered text; independent HTTP verification blocked by Cloudflare/Jina rate limiting. |
| internal | Broadway | https://www.jeffreyburns.com/contact-us/cosmetic-dentist-near-broadway/ | blocked/rate-limited / present-on-site / verify-blocked | URL was extracted from sitemap/live rendered text; independent HTTP verification blocked by Cloudflare/Jina rate limiting. |
| internal | Luray | https://www.jeffreyburns.com/contact-us/cosmetic-dentist-near-luray/ | 200 / yes | checked via Jina Reader (direct browser hit shows Cloudflare challenge) |
| internal | Bridgewater | https://www.jeffreyburns.com/contact-us/dental-implants-dentist-near-bridgewater/ | blocked/rate-limited / present-on-site / verify-blocked | URL was extracted from sitemap/live rendered text; independent HTTP verification blocked by Cloudflare/Jina rate limiting. |
| internal | Harrisonburg | https://www.jeffreyburns.com/contact-us/dental-implants-harrisonburg-area/ | blocked/rate-limited / present-on-site / verify-blocked | URL was extracted from sitemap/live rendered text; independent HTTP verification blocked by Cloudflare/Jina rate limiting. |
| internal | Timberville | https://www.jeffreyburns.com/contact-us/dental-implants-timberville-va/ | blocked/rate-limited / present-on-site / verify-blocked | URL was extracted from sitemap/live rendered text; independent HTTP verification blocked by Cloudflare/Jina rate limiting. |
| internal | Woodstock | https://www.jeffreyburns.com/contact-us/dentist-near-woodstock-cosmetic-implants/ | blocked/rate-limited / present-on-site / verify-blocked | URL was extracted from sitemap/live rendered text; independent HTTP verification blocked by Cloudflare/Jina rate limiting. |
| internal | Winchester | https://www.jeffreyburns.com/contact-us/winchester-dentist-dental-implants/ | blocked/rate-limited / present-on-site / verify-blocked | URL was extracted from sitemap/live rendered text; independent HTTP verification blocked by Cloudflare/Jina rate limiting. |
| internal | CareCredit | https://www.jeffreyburns.com/patient-information/care-credit/ | 200 / yes | checked via Jina Reader (direct browser hit shows Cloudflare challenge) |
| internal | Cherry Credit | https://www.jeffreyburns.com/patient-information/insurance/cherry-credit/ | blocked/rate-limited / present-on-site / verify-blocked | URL was extracted from sitemap/live rendered text; independent HTTP verification blocked by Cloudflare/Jina rate limiting. |
| internal | Learn more about Register Online \| Patient Registration | https://www.jeffreyburns.com/patient-information/patient-registration/ | blocked/rate-limited / present-on-site / verify-blocked | URL was extracted from sitemap/live rendered text; independent HTTP verification blocked by Cloudflare/Jina rate limiting. |
| map | 9626 South Congress St | https://maps.app.goo.gl/F2e2swXCUEK6M6GN6 | 200 / yes | redirects |
| map | Jeffrey S. Burns DDS 9626 South Congress St New Market, VA 22844 | https://maps.app.goo.gl/KK9iVVres1ChEAps6 | 200 / yes | redirects |
| social | Jeffrey S. Burns DDS Facebook page | https://www.facebook.com/JeffreySBurnsDDS/ | 200 / yes | redirects |
| social | Jeffrey S. Burns DDS Instagram page | https://www.instagram.com/jeffreys.burnsdds/ | 200 / yes |  |
| social | Video 5 | https://www.youtube.com/watch?v=iZmzadfLiec | 200 / yes |  |
| social | Video 5 | https://www.youtube.com/watch?v=m2SW1gb-fr0 | 200 / yes |  |
| tel | (540) 740-8937 | tel:(540 | active format / yes |  |
| tel | Call New Market, VA Office Phone Number \| Call us: 540-740-8937 \| Jeffrey S. Burns DDS Office Phone Number 540-740-8937 \| Jeffrey S. Burns DDS Office Phone Number Call Us Today!540-740-8937 \| Jeffrey S. Burns DDS Office Phone Number Schedule an Appointment Today! Call 540-740-8937 | tel:15407408937 | active format / yes |  |

### Website flags

- `https://staging.pbhshosting.com/www-jeffreyburns-com/patient-information/patient-registration/` appeared as a registration link on one crawled page and returned **403**; this looks like a staging URL to review.
- One malformed tel-style extraction appeared as `tel:(540`; the valid phone link is `tel:15407408937`.
- Many WordPress image/file URLs returned 403 to the verifier because of site protection; treat those as “needs browser/manual check,” not confirmed broken.

## Gmail findings

Found **13** relevant Gmail messages across **7** threads. I did not expose password-reset/login links in this report. Redacted CSV: `/tmp/jeffrey_burns_google/gmail_results_redacted.csv`.

| Date | Subject | From / participants | Messages in thread | Snippet |
|---|---|---|---:|---|
| Wed, 14 Jan 2026 16:47:40 +0000 | Updated invitation: Dr. Burns Website Review - Cris x Paul x Spencer @ Thu Jan 15 11pm - Fri Jan 16, 2026 12:30am (GMT+8) (cvinson@primof.ph) | Bobbie H <bobbie@freedompatient.com> | 1 | This event has been updated Changed: time Join with Google Meet Meeting link meet.google.com/zho-hnfj-hst Test your setup any time before your appointment. New to Google Meet? Learn more about getting |
| Wed, 14 Jan 2026 15:27:47 +0000 | Appointment booked: Dr. Burns Website Review - Cris x Paul x Spencer @ Thu Jan 15 11:30pm - Fri Jan 16, 2026 12:30am (GMT+8) (cvinson@primof.ph) | Bobbie H <bobbie@freedompatient.com> | 1 | Booked by Paul Andre Morales paymorales9@gmail.com I&#39;m looking forward to meeting with you Join with Google Meet Meeting link meet.google.com/zho-hnfj-hst Test your setup any time before your |
| Wed, 01 Apr 2026 23:29:55 +0000 (UTC) | [Jeffrey Burns] Login Details | WordPress <wordpress@jeffreyburns.com> | 1 | WordPress login details email found; password/reset link intentionally redacted. |
| Tue, 25 Nov 2025 06:20:57 +0000 | Re: Primof x Jeffrey Burns | projects@primof.kitchen-mail.com | 3 | (jezel@primof.ph) posted message: Hi @drjeff We now have the log in credentials in wordpress. Our team will log in today and navigate your website. We already started creating mock up designs for these |
| Tue, 23 Dec 2025 12:00:58 +0800 | Re: Dr. Burns TV Ad | "Cris E. Vinson" <cvinson@primof.ph> | 5 | Got it On Tue, Dec 23, 2025 at 11:54 AM Spencer Walker &lt;spencer@gmjstrategies.com&gt; wrote: Hey everyone, I accessed the Dropbox link and saved this to my Google Drive so click here to access the |
| Tue, 17 Mar 2026 05:20:07 +0000 | Jeffrey Burns | Primof <notifications@tasks.clickup.com> | 1 | ClickUp Assigned to You by Leah May Sacmar Executive Assistant / Internal / Project Brief Project Brief Jeffrey Burns in progress View task Replies to this email will be added as comments © 2026 |
| Thu, 15 Jan 2026 15:15:37 +0000 (UTC) | Unable to record Dr. Burns Website Review - Cris x Paul x Spencer | "Otter.ai" <no-reply@otter.ai> | 1 | Dr. Burns Website Review - Cris x Paul x Spencer Otter.ai logo The host has not admitted your Notetaker Notetaker tried to join your meeting, Dr. Burns Website Review - Cris x Paul x Spencer on Thu 1/ |

## Drive findings

Primary relevant Drive docs/assets found:

| Name | Type | Modified | Link |
|---|---|---|---|
| Project Brief: Jeffrey S | application/vnd.google-apps.document | 2026-04-01T23:52:33.822Z | https://docs.google.com/document/d/1H0eST43cnVDNMkuBmiA1sV91ARLYkD-KESWyKfuCm_c/edit?usp=drivesdk |
| Dr jeffrey | application/vnd.google-apps.document | 2026-01-05T10:36:22.550Z | https://docs.google.com/document/d/1J0GVqJRg_9LtX65FIm1_GKOqVZrN3L02ENuLJ-oBWp4/edit?usp=drivesdk |
| Implementation Plan: Jeffrey Burns Website | application/vnd.google-apps.document | 2026-04-08T18:54:52.608Z | https://docs.google.com/document/d/1a9t8nQnNmGZAPB0Wa4wS3nwgT5ZkEGxyn-7XkFQOqAk/edit?usp=drivesdk |
| Dr. Burn Links | application/vnd.google-apps.document | 2026-04-01T23:12:48.101Z | https://docs.google.com/document/d/1rLB-kFDqnJBaUvGB-pXR-IdHb96iU-GuukMG66hGL7o/edit?usp=drivesdk |
| Meeting Minutes: 11/19/2025 | application/vnd.google-apps.document | 2025-12-28T00:23:51.370Z | https://docs.google.com/document/d/19XoSin-bNDSCcvhO2gDjJbQwz1O8puqF-Q3TSVqfAMA/edit?usp=drivesdk |
| Dr. Burns Lecture (10-25-25) TikTok.mov | video/quicktime | 2025-10-27T18:55:29.819Z | https://drive.google.com/file/d/1K9wr9xKJpGMs8ny5AwSNw3RvXyeV1AtP/view?usp=drivesdk |

`Dr. Burn Links` contains these project URLs:

| Type | URL |
|---|---|
| docs | https://docs.google.com/document/d/141cUdQHNm9PhYX_7lQX4OZ4FSY2eQwRzlfBnUKzmKbs/edit?usp=sharing&fbclid=IwZXh0bgNhZW0CMTAAYnJpZBExTld5aXExT1BHTzNyYjBwSXNydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR7iS2pgZWf_RqDDwvun0OFs7Ce4FkaUe-HNO6jkud-ovs0jBC3gOG0ATT0Azw_aem_5i1wHobgC8nXBkkPgua1mQ |
| docs | https://docs.google.com/document/d/1Fc_qKGL-ImXufc4DTfR9fphTpFZ6IiP2Q0EYiYA_n3Q/edit?tab=t.0 |
| docs | https://docs.google.com/document/d/1Uxo3PJCRjh_mgt93AIIlaPYLUq9nAzziPRwg29td0aw/edit?tab=t.0 |
| drive | https://drive.google.com/drive/folders/12WdRl7kOSAb-ukZwgIyI2VikxMW2Srbz |
| drive | https://drive.google.com/drive/folders/1Z2wli_JAJMRkr_-0mER8JkmpUjNcHk6M |
| drive | https://drive.google.com/drive/folders/1bJFDGgxnR581tuaPEh4eSVd0FwbwqNu8 |
| drive | https://drive.google.com/file/d/12zhi_VUOhXBpgFOsGLmj8UXoNPHhBDIZ/view?ts=69a86a64 |
| drive | https://drive.google.com/file/d/161juydGVHoAEzP9rwZkm2VUyQOKQkAsj/view?ts=69a86856 |
| drive | https://drive.google.com/file/d/1OHpVQNeqfqRX3_GPZQUxQvkGGDlPQcX-/view?ts=69a86868 |
| drive | https://drive.google.com/file/d/1diJH3huzsnEegABJ4Cfkx7Z8RPXF-DV5/view?ts=69a86986 |
| canva | https://www.canva.com/design/DAG9QY8VjXM/CJZQ5kCiwxuNUWTF-LkZXQ/edit |
| canva | https://www.canva.com/design/DAG9jzAOIxw/fC3VqyXM-wWps1rasWwsrA/edit |
| canva | https://www.canva.com/design/DAG_IOW6SIU/mukLzudAxqd1aUthsaGAgg/edit |
| figma | https://www.figma.com/design/jNmYR2vZlKmm2oX1r7xIhF/Wireframe?node-id=0-1&p=f |
| figma | https://www.figma.com/site/2niOGGjMOcm9cWaLK3wHd1/Main-Page?node-id=0-1&p=f |
| figma | https://www.figma.com/site/FdukEmN0E1kbsXkxf2U5aF/Subpage?node-id=0-1&p=f |
| site/social | https://www.jeffreyburns.com/? |
| site/social | https://www.tiktok.com/@jeffrey.burns.dds? |

Notes from docs reviewed:

- Project brief says redesign is for **Jeffrey S. Burns DDS**, New Market VA, focused on **Dream Smile**, the **Burns Protocol**, implants, locations, service subpages, quiz/free guide/free consultation funnels, and website redesign.
- Implementation plan proposes a headless architecture: WordPress backend + Next.js frontend.
- `Dr. Burn Links` includes website/TikTok, Canva mockups, Figma links, feedback/UVP docs, and Drive media folders/files. Some linked Google files/folders were not accessible to this account.

