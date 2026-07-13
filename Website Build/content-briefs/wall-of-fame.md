# Content Brief: DreamSmile Wall of Fame

**Live URL:** https://www.jeffreyburns.com/dreamsmilewalloffame/
**Source:** Wayback Machine snapshot 20260710131302 (captured today, 2026-07-10, via the Save-Page-Now trigger)
**Page `<title>`:** DreamSmile Wall of Fame – More Than Just Beautiful Smiles – Jeffrey Burns
**Published:** 2026-02-15 (article:published_time 2026-02-15T15:49:19-07:00)
**Status:** Real content, verbatim. This is the source of truth for the rebuild copy. Do not invent copy.

---

## Page type and structure notes

- This is a **blog post**, not a service page. Breadcrumb on the live page: `Home / Blog / DreamSmile Wall of Fame – More Than Just Beautiful Smiles` (Blog crumb links to `/category/blog/`).
- The theme renders the page heading as an `<h2>` inside `#content` — there is **no `<h1>` on the page**. The heading text is the on-page title.
- The post body has **no subheadings** — it is one continuous block of 7 short paragraphs, a contact block, then an embedded YouTube video.
- No pricing, no protocol steps, no FAQs on this page. It is an emotional/brand piece pointing at the Wall of Fame (before-and-after transformations).
- The em dashes below are verbatim from the live page. Preserve or restyle per the rebuild's typography rules, but the wording itself must not change.

## On-page title (rendered as H2)

# DreamSmile Wall of Fame – More Than Just Beautiful Smiles

## Body copy (verbatim, in order, no headings between paragraphs)

> A smile can change everything.

> Our DreamSmile Wall of Fame is not simply a collection of before-and-after photos. Each image represents something far more meaningful — renewed self-confidence, genuine happiness, and a fresh, positive outlook on life. These are real people who made the decision to invest in themselves, and the results speak for themselves.

> At DreamSmile, we have the privilege of witnessing transformations that go well beyond dentistry. Patients often tell us their new smile has changed how they feel in social situations, professional settings, and even in everyday moments like looking in the mirror. Confidence grows. Anxiety fades. Smiles become effortless.

> For more than 30 years, Dr. Jeffrey S. Burns DDS has been dedicated to creating these life-changing results. With extensive experience and a deep passion for his craft, Dr. Burns specializes in dental implants and cosmetic dentistry — combining function, aesthetics, and precision to deliver truly natural-looking smiles.

> Every DreamSmile is designed with the individual in mind. No two patients are alike, and no two smiles should be either. From restoring missing teeth to completely reimagining a smile, our goal is always the same: to help patients look and feel their absolute best.

> If you've ever found yourself hiding your smile, feeling self-conscious, or wishing you could change something about your teeth, you are not alone — and you have options.

> Your DreamSmile may be closer than you think.

## Contact block (final paragraph of the post, verbatim with emoji and line breaks)

> 📍 New Market, VA
> 📞 540-740-8937
> 🌐 www.jeffreyburns.com

- The `www.jeffreyburns.com` text is an anchor styled as a link (`class="decorated-link"`, `target="_new"`) but has **no href** in the live markup — a broken/empty link. Flag for Cris: the rebuild should point it at the homepage rather than reproduce the empty anchor.

## Embedded media (inside the post body, immediately after the contact block)

- YouTube embed: `https://www.youtube.com/embed/0olYAPR3yCk`
- Iframe title (verbatim): `DreamSmile Wall of Fame ⭐ 30+ Years of Changing Smiles #dreamsmile #glowup #smilemakeover #dentist`
- Portrait/Shorts-style dimensions: width 100%, height 732. The rebuild must keep this video on the page.

## Internal links the page makes (post-specific, excluding global nav/footer)

- Breadcrumb: `/` (Home) and `/category/blog/` (Blog)
- Body: only the href-less `www.jeffreyburns.com` anchor noted above — the body copy contains **no other internal links**
- Below the post, the recent-posts/blog widget lists this same post: `/dreamsmilewalloffame/`
- Sidebar CTA (template-level, appears on all pages): "Request an Appointment" → `/?gform=1&modal`

## Unique terms/topics that must survive into the rebuild

1. **"DreamSmile Wall of Fame"** — the exact branded name, plus the exact subtitle "More Than Just Beautiful Smiles". "DreamSmile" is one word, capital D, capital S ("Your DreamSmile may be closer than you think").
2. **"more than 30 years"** — the experience claim tied to "Dr. Jeffrey S. Burns DDS" (echoed by the video title "30+ Years of Changing Smiles").
3. **Before-and-after framing** — "not simply a collection of before-and-after photos"; each image = "renewed self-confidence, genuine happiness, and a fresh, positive outlook on life"; "real people who made the decision to invest in themselves".
4. **Specialization line** — "Dr. Burns specializes in dental implants and cosmetic dentistry — combining function, aesthetics, and precision to deliver truly natural-looking smiles."
5. **YouTube video 0olYAPR3yCk** — the embedded portrait Wall of Fame video with its verbatim title (including hashtags #dreamsmile #glowup #smilemakeover #dentist), placed after the emoji contact block (📍 New Market, VA / 📞 540-740-8937 / 🌐 www.jeffreyburns.com).
