# jeffreyburns.com Asset Scrape — Findings

Date: 2026-07-10
Method: render proxy `https://r.jina.ai/` (the site itself is behind Cloudflare; direct fetch and direct asset download both return `HTTP 403 cf-mitigated: challenge`).
Pages fetched: `/` (home), `/about-us/`, `/about-us/dr-jeffrey-burns/`. Blocked even through the proxy: `/restorative-dentistry/dental-implants/`, `/reviews/` (404).
Run did NOT fail on the blocks — findings below are from the pages that rendered.

## Bottom line

The live site is almost entirely 2019–2020 vintage (upload paths + `© 2019 - 2025` footer, design by PBHS). Our local asset library is already NEWER than the live site in the parts that matter: it holds the 2026 pro-shoot team photo, six 2026 patient-testimonial portraits (Mike / Danny / Kelly / Angela / Ron), and BTS frames that the live site does not use. So for photos/people, do not pull from the live site — the library wins.

Only ONE genuinely newer asset exists on the live site, plus two current brand videos of unconfirmable age. All are Cloudflare-blocked for direct download.

## Genuinely newer than the 2019-era zip

| Asset URL | What it is | Newer? | Notes |
|---|---|---|---|
| `https://www.jeffreyburns.com/wp-content/uploads/2025/09/Burns-Mockup-3.webp` | "Ultimate Guide to Dental Implants" ebook / lead-magnet mockup | YES — Sept 2025 upload, only 2025 asset found | Same product as our local `assets/img/ebook.png`. This is a current, likely higher-quality `.webp` render. Worth grabbing IF download can be unblocked. Blocked by Cloudflare on direct request. Not a photo of people — low urgency. |

## Current brand videos — freshness UNCONFIRMED (worth a look)

Served from the theme dir (`/wp-content/themes/JeffreyBurns/_media/exported-videos/`), which carries no date in the path, so age can't be proven. Version suffixes (V6, V2) imply they've been iterated, and they are the videos the live homepage/about page use today. We do NOT have these exact web-optimized MP4s in the library (we only have raw 2026 testimonial MP4s and 2020 TikTok before/afters).

- `https://www.jeffreyburns.com/wp-content/themes/JeffreyBurns/_media/exported-videos/Web%20Banner%20V6-cvyesk4svu.mp4` — homepage hero banner video
- `https://www.jeffreyburns.com/wp-content/themes/JeffreyBurns/_media/exported-videos/Burns_DDS_-_About_Dr_Burns_V2-amsidehh0q.mp4` — "About Dr. Burns" video

Both return `403 cf-mitigated: challenge` on direct fetch — could not download or read Last-Modified.

## Same era or OLDER than the zip — do NOT treat as new

All 2019/2020 uploads. Our library already has equal or better:

- Logo: `2019/10/logo.png` (current live logo — matches our `assets/img/logo.png`, NOT newer) + `2019/10/side-logo.png`
- Dr. Burns portrait: `2019/05/DSC06053.jpg` (2019 era)
- Team: `2019/05/DSC01658-e1582043310592.jpg` (2019; our `team-2026.jpg` is newer)
- Testimonial thumbnails: `2020/04/review1.jpg`…`review5.jpg` (same 2020 series we already hold as `review1-5.jpg`, NOT newer)
- `2020/04/welcome.jpg`, `cosmetic-dentistry.jpg`, `hour-glass.jpg`, `care-1/2/3.jpg`, `medspa1.jpg`, `spa-new.jpg`, `spa-3.jpg`
- `2019/10/office.png`, `2019/10/map.png?resize=1024,253`
- Family/lifestyle: `2020/01/WVU-game-Family…jpg`, `2019/10/dr-burns-and-youth-team…jpg`, `2020/02/IMG_3792-scaled…jpg`

## Constraints hit

- Cloudflare `cf-mitigated: challenge` blocks BOTH page HTML and direct asset URLs (images + videos) on a plain request. The jina render proxy got the HTML of 3 pages but cannot deliver binary assets, and it failed on 2 pages.
- To actually download the 2025 ebook webp or the two theme MP4s, use a real browser session (Chrome MCP) or ask the client for the files. Do not block the build on them.
- No new patient/before-after photos or testimonial videos beyond what the library already has. The build should keep sourcing people-photos from the local practice library, per the real-assets-only rule.
