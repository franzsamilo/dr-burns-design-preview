#!/usr/bin/env node
/**
 * Burns Website Build — PROMPT CONFORMANCE HARNESS
 *
 * Verifies EVERY instruction from the master prompt
 * (Build Prompt - Landing Page Standard v2.md), not just brand rules.
 *
 * Node ESM, no external deps.
 *
 * Usage:
 *   node prompt-harness.mjs --all          # all 15 rebuilt pages
 *   node prompt-harness.mjs <file.html>    # one page (global checks still run site-wide)
 *
 * Check groups:
 *   A. CREATIVE UNIQUENESS   (cross-page, parsed from the actual asset references)
 *      a:hero-unique              no non-logo image is the hero on >1 page
 *      a:sibling-image-overlap    no two sibling pages share >40% of their non-logo <img> sets
 *      a:testimonial-video-spread no testimonial video appears on >3 pages
 *      a:faces-row-duplicate      WARN if a page's faces row is identical to another page's
 *   B. PLACEMENT MATCH vs creative-plan.json (hero / protocol / bio / testimonials)
 *   C. CONVERSION-UX (12 machine-checkable patterns from the conversion-ux skill)
 *   D. CARRY-OVER: harness.mjs checkPage() imported + merged (slug check recomputed
 *      for directory-index layout; the old harness assumed flat files)
 *   E. FIGMA CONFORMANCE: home carries the 10 exact T1 headings;
 *      T2 pages carry their 9 section roles
 *
 * Output: console report + prompt-harness-report.json next to this file.
 * Exit 0 only when zero FAILs.
 */

import { readFileSync, existsSync, writeFileSync } from 'node:fs';
import { dirname, resolve, relative, basename, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { checkPage as legacyCheckPage } from './harness.mjs';

const ROOT = dirname(fileURLToPath(import.meta.url));

/* ────────────────────────────────────────────────────────────────────────
 * The 15 rebuilt pages (key = creative-plan.json key)
 * ──────────────────────────────────────────────────────────────────────── */
const PAGES = {
  'home':                    { file: 'index.html', slug: '/', type: 'T1', group: 'root' },
  'dental-implants':         { file: 'restorative-dentistry/dental-implants/index.html', slug: '/restorative-dentistry/dental-implants/', type: 'T2', group: 'restorative' },
  'replacing-missing-teeth': { file: 'restorative-dentistry/dental-implants/replacing-missing-teeth/index.html', slug: '/restorative-dentistry/dental-implants/replacing-missing-teeth/', type: 'T2', group: 'implant-children' },
  'missing-all-teeth':       { file: 'restorative-dentistry/dental-implants/missing-all-upper-or-lower-teeth/index.html', slug: '/restorative-dentistry/dental-implants/missing-all-upper-or-lower-teeth/', type: 'T2', group: 'implant-children' },
  'implant-placement':       { file: 'restorative-dentistry/dental-implants/overview-of-implant-placement/index.html', slug: '/restorative-dentistry/dental-implants/overview-of-implant-placement/', type: 'T2', group: 'implant-children' },
  'after-placement':         { file: 'restorative-dentistry/dental-implants/after-implant-placement/index.html', slug: '/restorative-dentistry/dental-implants/after-implant-placement/', type: 'T2', group: 'implant-children' },
  'bone-grafting':           { file: 'restorative-dentistry/dental-implants/bone-grafting-for-implants/index.html', slug: '/restorative-dentistry/dental-implants/bone-grafting-for-implants/', type: 'T2', group: 'implant-children' },
  'cost':                    { file: 'restorative-dentistry/dental-implants/cost-of-dental-implants/index.html', slug: '/restorative-dentistry/dental-implants/cost-of-dental-implants/', type: 'T2', group: 'implant-children' },
  'faqs':                    { file: 'restorative-dentistry/dental-implants/dental-implants-faqs/index.html', slug: '/restorative-dentistry/dental-implants/dental-implants-faqs/', type: 'T2', group: 'implant-children' },
  'teeth-in-a-day':          { file: 'restorative-dentistry/dental-implants/teeth-in-a-day/index.html', slug: '/restorative-dentistry/dental-implants/teeth-in-a-day/', type: 'T2', group: 'implant-children' },
  'full-mouth':              { file: 'restorative-dentistry/full-mouth-reconstruction/index.html', slug: '/restorative-dentistry/full-mouth-reconstruction/', type: 'T2', group: 'restorative' },
  'implant-dentures':        { file: 'restorative-dentistry/dentures/implant-retained-dentures/index.html', slug: '/restorative-dentistry/dentures/implant-retained-dentures/', type: 'T2', group: 'dentures' },
  'burns-protocol':          { file: 'theburnsprotocol/index.html', slug: '/theburnsprotocol/', type: 'T2', group: 'root', funnel: true },
  'confident':               { file: 'confidentdreamsmile/index.html', slug: '/confidentdreamsmile/', type: 'T2', group: 'root', funnel: true },
  'wall-of-fame':            { file: 'dreamsmilewalloffame/index.html', slug: '/dreamsmilewalloffame/', type: 'T2', group: 'root', funnel: true },
};

const FUNNEL_KEYS = new Set(['burns-protocol', 'confident', 'wall-of-fame']);

/* Figma T1 — the 10 exact homepage headings */
const T1_HEADINGS = [
  'Introducing The DreamSmile',
  'The DreamSmile is',
  'Can You See Yourself with Your DreamSmile',
  'Nationally Recognized Expertise you can Trust',
  'Our Primary Services',
  'The Burns Protocol',
  'The DreamSmile Warranty',
  'The Patient Promise',
  'You Deserve Better Than Another Band-Aid Solution',
  'Real Results. Real Patients.',
];

/* ────────────────────────────────────────────────────────────────────────
 * Shared text helpers
 * ──────────────────────────────────────────────────────────────────────── */
const decode = (s) => s
  .replace(/&trade;|&#8482;|™/g, '')
  .replace(/&reg;|&#174;|®/g, '')
  .replace(/&amp;/g, '&')
  .replace(/&nbsp;/g, ' ')
  .replace(/&#39;|&rsquo;|&#8217;|’/g, "'")
  .replace(/&ldquo;|&rdquo;|&#822[01];|[“”]/g, '"')
  .replace(/&hellip;/g, '...')
  .replace(/&[a-z#0-9]+;/gi, ' ');

const stripTags = (s) => decode(s).replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();

const normHeading = (s) => decode(s)
  .replace(/<[^>]*>/g, ' ')
  .toLowerCase()
  .replace(/[^a-z0-9' ]+/g, ' ')
  .replace(/\s+/g, ' ')
  .trim();

function lineOf(html, idx) {
  if (idx == null || idx < 0) return 0;
  let n = 1;
  for (let i = 0; i < idx && i < html.length; i++) if (html.charCodeAt(i) === 10) n++;
  return n;
}

function styleText(html) {
  let s = '';
  for (const m of html.matchAll(/<style\b[^>]*>([\s\S]*?)<\/style>/gi)) s += '\n' + m[1];
  return s;
}

/* ────────────────────────────────────────────────────────────────────────
 * brand-tokens.json → logo basenames (logos are exempt from uniqueness)
 * ──────────────────────────────────────────────────────────────────────── */
function logoBasenames() {
  const set = new Set(['logo.png', 'logo-white.png', 'dreamsmile-logo.png', 'favicon.ico', 'favicon.png']);
  try {
    const raw = JSON.parse(readFileSync(resolve(ROOT, 'brand-tokens.json'), 'utf8'));
    if (raw.logo && typeof raw.logo === 'object') {
      for (const [k, v] of Object.entries(raw.logo)) {
        if (!k.startsWith('_') && typeof v === 'string') set.add(v.split('/').pop().toLowerCase());
      }
    }
  } catch { /* fallbacks above */ }
  return set;
}
const LOGOS = logoBasenames();
const isLogo = (assetRel) => !assetRel || LOGOS.has(assetRel.split('/').pop().toLowerCase());

/* ────────────────────────────────────────────────────────────────────────
 * Page parsing
 * ──────────────────────────────────────────────────────────────────────── */
function normAsset(pageRelFile, src) {
  if (!src || /^(data:|https?:|\/\/)/i.test(src)) return null;
  const clean = src.split(/[?#]/)[0];
  const abs = resolve(ROOT, dirname(pageRelFile), clean);
  return relative(ROOT, abs).split(sep).join('/');
}

function bodyOf(html) {
  const m = html.match(/<body\b[^>]*>([\s\S]*)<\/body>/i);
  return m ? { text: m[1], offset: m.index + m[0].indexOf(m[1]) } : { text: html, offset: 0 };
}

/** Top-level <section> spans. The Burns builds never nest sections. */
function parseSections(html) {
  const out = [];
  for (const m of html.matchAll(/<section\b[^>]*>/gi)) {
    const openEnd = m.index + m[0].length;
    const close = html.indexOf('</section>', openEnd);
    const id = (m[0].match(/\bid\s*=\s*["']([^"']+)["']/i) || [])[1] || '';
    const cls = (m[0].match(/\bclass\s*=\s*["']([^"']+)["']/i) || [])[1] || '';
    out.push({ id, cls, idx: m.index, inner: html.slice(openEnd, close === -1 ? html.length : close) });
  }
  return out;
}

/** All media refs (img + video) in document order, with char index. */
function parseMedia(html, pageRelFile) {
  const out = [];
  for (const m of html.matchAll(/<img\b[^>]*\bsrc\s*=\s*["']([^"']+)["'][^>]*>/gi)) {
    const asset = normAsset(pageRelFile, m[1]);
    if (asset) out.push({ kind: 'img', asset, idx: m.index });
  }
  for (const m of html.matchAll(/<video\b[^>]*>/gi)) {
    let src = (m[0].match(/\bsrc\s*=\s*["']([^"']+)["']/i) || [])[1];
    if (!src) {
      const rest = html.slice(m.index, m.index + 1200);
      src = (rest.match(/<source\b[^>]*\bsrc\s*=\s*["']([^"']+)["']/i) || [])[1];
    }
    const asset = normAsset(pageRelFile, src);
    if (asset) out.push({ kind: 'video', asset, idx: m.index });
  }
  out.sort((a, b) => a.idx - b.idx);
  return out;
}

/** Buttons/anchors with a visible label. */
function parseButtons(html) {
  const out = [];
  for (const m of html.matchAll(/<(a|button)\b([^>]*)>([\s\S]*?)<\/\1>/gi)) {
    const attrs = m[2];
    const cls = (attrs.match(/\bclass\s*=\s*["']([^"']+)["']/i) || [])[1] || '';
    const href = (attrs.match(/\bhref\s*=\s*["']([^"']+)["']/i) || [])[1] || '';
    const label = stripTags(m[3]);
    out.push({ cls, href, label, idx: m.index });
  }
  for (const m of html.matchAll(/<input\b[^>]*type\s*=\s*["']submit["'][^>]*>/gi)) {
    const val = (m[0].match(/\bvalue\s*=\s*["']([^"']+)["']/i) || [])[1] || 'Submit';
    out.push({ cls: 'input-submit', href: '', label: val, idx: m.index });
  }
  return out;
}

const isSolidBtn = (b) => /\bbtn\b/.test(b.cls) && !/ghost|outline|btn-link/i.test(b.cls);
const isTel = (b) => /^tel:/i.test(b.href);
const APPT_RX = /(consult|appointment|schedule|book|meet with)/i;

function loadPage(key) {
  const def = PAGES[key];
  const abs = resolve(ROOT, def.file);
  const html = readFileSync(abs, 'utf8');
  const body = bodyOf(html);
  const sections = parseSections(html);
  const media = parseMedia(html, def.file);
  const bodyMedia = media.filter((m) => m.idx >= body.offset);
  const buttons = parseButtons(html);
  const css = styleText(html);

  const sec = (idOrIds) => {
    const ids = Array.isArray(idOrIds) ? idOrIds : [idOrIds];
    return sections.find((s) => ids.includes(s.id)) || null;
  };
  const mediaIn = (s) => {
    if (!s) return [];
    const start = s.idx, end = s.idx + s.inner.length + 40;
    return media.filter((m) => m.idx >= start && m.idx <= end);
  };

  // hero = first non-logo media in the body (img or video)
  const hero = bodyMedia.find((m) => !isLogo(m.asset)) || null;

  // faces row: T2 = #patients, T1 home = #dreamsmile
  const facesSec = sec(def.type === 'T1' ? 'dreamsmile' : 'patients');
  const faces = mediaIn(facesSec).filter((m) => m.kind === 'img' && !isLogo(m.asset)).map((m) => m.asset);

  const testiSec = sec(def.type === 'T1' ? ['results', 'stories'] : ['stories', 'results']);
  const testiVideos = mediaIn(testiSec).filter((m) => m.kind === 'video').map((m) => m.asset);

  const allVideos = [...new Set(media.filter((m) => m.kind === 'video').map((m) => m.asset))];
  const imgSet = new Set(media.filter((m) => m.kind === 'img' && !isLogo(m.asset)).map((m) => m.asset));

  return {
    key, ...def, abs, html, css, sections, media, buttons, hero,
    faces, facesSec, testiSec, testiVideos, allVideos, imgSet,
    sec, mediaIn,
    protocolMedia: mediaIn(sec('protocol')).filter((m) => !isLogo(m.asset)),
    bioMedia: mediaIn(sec('doctor')).filter((m) => !isLogo(m.asset)),
    heroSec: sec('top') || sections[0] || null,
  };
}

/* ────────────────────────────────────────────────────────────────────────
 * Check result plumbing
 * ──────────────────────────────────────────────────────────────────────── */
function mkAdd(list) {
  return (id, status, evidence) => list.push({ id, status, evidence });
}
const ev = (page, idx, msg) => `${page.file}:${lineOf(page.html, idx)} ${msg}`;

/* ────────────────────────────────────────────────────────────────────────
 * GROUP A — creative uniqueness (cross-page)
 * ──────────────────────────────────────────────────────────────────────── */
function testimonialVideoSet(plan) {
  const set = new Set();
  for (const k of Object.keys(plan)) {
    const p = plan[k];
    if (p && Array.isArray(p.testimonialVideos)) for (const v of p.testimonialVideos) set.add(v.split('/').pop().toLowerCase());
  }
  return set;
}
const TESTIMONIAL_RX = /^(testimonial|ba-|(danny|diane|joe-vile|tammy|kelly|ron|mike|angela|jill)[-.]|.*-(15|30)s\.)/i;

function runGroupA(pages, plan) {
  const global = [];
  const perPage = {}; // key -> checks[]
  for (const k of Object.keys(pages)) perPage[k] = [];
  const attach = (keys, check) => { for (const k of keys) perPage[k].push(check); };

  // a:hero-unique — no non-logo IMAGE heroes the page on more than 1 page
  {
    const byAsset = new Map();
    for (const p of Object.values(pages)) {
      if (p.hero && p.hero.kind === 'img' && !isLogo(p.hero.asset)) {
        if (!byAsset.has(p.hero.asset)) byAsset.set(p.hero.asset, []);
        byAsset.get(p.hero.asset).push(p);
      }
    }
    const dups = [...byAsset.entries()].filter(([, list]) => list.length > 1);
    if (dups.length === 0) {
      global.push({ id: 'a:hero-unique', status: 'PASS', evidence: `all image heroes unique across ${Object.keys(pages).length} pages` });
    } else {
      for (const [asset, list] of dups) {
        const check = {
          id: 'a:hero-unique', status: 'FAIL',
          evidence: `"${asset}" is the hero on ${list.length} pages: ` + list.map((p) => ev(p, p.hero.idx, `(${p.key})`)).join(' | '),
        };
        global.push(check);
        attach(list.map((p) => p.key), check);
      }
    }
  }

  // a:sibling-image-overlap — sibling pages sharing >40% of non-logo <img> sets
  {
    const keys = Object.keys(pages);
    let worst = null; let fails = 0;
    for (let i = 0; i < keys.length; i++) for (let j = i + 1; j < keys.length; j++) {
      const A = pages[keys[i]], B = pages[keys[j]];
      if (A.group !== B.group) continue;
      let inter = 0;
      for (const x of A.imgSet) if (B.imgSet.has(x)) inter++;
      const denom = Math.min(A.imgSet.size, B.imgSet.size) || 1;
      const share = inter / denom;
      if (!worst || share > worst.share) worst = { a: A, b: B, share, inter };
      if (share > 0.40) {
        fails++;
        const shared = [...A.imgSet].filter((x) => B.imgSet.has(x));
        const check = {
          id: 'a:sibling-image-overlap', status: 'FAIL',
          evidence: `${A.file} <> ${B.file} share ${(share * 100).toFixed(0)}% of the smaller image set (${inter}/${denom}): ${shared.slice(0, 6).map((s) => s.split('/').pop()).join(', ')}${shared.length > 6 ? '…' : ''}`,
        };
        global.push(check);
        attach([A.key, B.key], check);
      }
    }
    if (fails === 0) {
      global.push({
        id: 'a:sibling-image-overlap', status: 'PASS',
        evidence: worst ? `max sibling overlap ${(worst.share * 100).toFixed(0)}% (${worst.a.key} <> ${worst.b.key}), threshold 40%` : 'no sibling pairs',
      });
    }
  }

  // a:testimonial-video-spread — no testimonial video on >3 pages
  {
    const planSet = testimonialVideoSet(plan);
    const isTestimonial = (asset) => {
      const b = asset.split('/').pop().toLowerCase();
      return planSet.has(b) || TESTIMONIAL_RX.test(b);
    };
    const byVideo = new Map();
    for (const p of Object.values(pages)) {
      for (const v of p.allVideos) {
        if (!isTestimonial(v)) continue;
        if (!byVideo.has(v)) byVideo.set(v, []);
        byVideo.get(v).push(p);
      }
    }
    const over = [...byVideo.entries()].filter(([, list]) => list.length > 3);
    if (over.length === 0) {
      const max = Math.max(0, ...[...byVideo.values()].map((l) => l.length));
      global.push({ id: 'a:testimonial-video-spread', status: 'PASS', evidence: `${byVideo.size} testimonial videos placed, max spread ${max} page(s), limit 3` });
    } else {
      for (const [asset, list] of over) {
        const check = {
          id: 'a:testimonial-video-spread', status: 'FAIL',
          evidence: `"${asset}" appears on ${list.length} pages (limit 3): ${list.map((p) => p.key).join(', ')}`,
        };
        global.push(check);
        attach(list.map((p) => p.key), check);
      }
    }
  }

  // a:faces-row-duplicate — WARN when two pages carry an identical faces row
  {
    const sig = new Map();
    for (const p of Object.values(pages)) {
      if (!p.faces.length) continue;
      const s = [...p.faces].map((f) => f.split('/').pop()).sort().join('|');
      if (!sig.has(s)) sig.set(s, []);
      sig.get(s).push(p);
    }
    const dups = [...sig.entries()].filter(([, list]) => list.length > 1);
    if (dups.length === 0) {
      global.push({ id: 'a:faces-row-duplicate', status: 'PASS', evidence: 'no two pages share an identical faces row' });
    } else {
      for (const [s, list] of dups) {
        const check = {
          id: 'a:faces-row-duplicate', status: 'WARN',
          evidence: `identical faces row [${s.replace(/\|/g, ', ')}] on: ${list.map((p) => `${p.file}:${lineOf(p.html, p.facesSec ? p.facesSec.idx : -1)}`).join(' | ')}`,
        };
        global.push(check);
        attach(list.map((p) => p.key), check);
      }
    }
  }

  return { global, perPage };
}

/* ────────────────────────────────────────────────────────────────────────
 * GROUP B — placement match vs creative-plan.json
 * ──────────────────────────────────────────────────────────────────────── */
function runGroupB(page, plan) {
  const checks = [];
  const add = mkAdd(checks);
  const planned = plan[page.key];
  if (!planned) {
    add('b:plan-entry', 'FAIL', `creative-plan.json has no entry for page key "${page.key}"`);
    return checks;
  }
  const bn = (s) => (s || '').split('/').pop().toLowerCase();

  // hero
  {
    const want = planned.hero;
    const got = page.hero;
    const ok = got && bn(got.asset) === bn(want);
    add('b:hero-match', ok ? 'PASS' : 'FAIL',
      ok ? ev(page, got.idx, `hero = ${got.asset} (plan: ${want})`)
        : got ? ev(page, got.idx, `hero is ${got.asset}, plan wants ${want}`)
          : `no hero media found in body, plan wants ${want}`);
  }
  // protocol
  {
    const want = planned.protocol;
    const hit = page.protocolMedia.find((m) => bn(m.asset) === bn(want));
    const first = page.protocolMedia[0];
    add('b:protocol-match', hit ? 'PASS' : 'FAIL',
      hit ? ev(page, hit.idx, `protocol slot carries ${hit.asset}`)
        : first ? ev(page, first.idx, `protocol section carries ${first.asset}, plan wants ${want}`)
          : `protocol section has no media, plan wants ${want}`);
  }
  // bio
  {
    const want = planned.bio;
    const hit = page.bioMedia.find((m) => bn(m.asset) === bn(want));
    const first = page.bioMedia[0];
    add('b:bio-match', hit ? 'PASS' : 'FAIL',
      hit ? ev(page, hit.idx, `bio slot carries ${hit.asset}`)
        : first ? ev(page, first.idx, `doctor section carries ${first.asset}, plan wants ${want}`)
          : `doctor section has no media, plan wants ${want}`);
  }
  // testimonial videos (set equality)
  {
    const want = (planned.testimonialVideos || []).map(bn).sort();
    const got = page.testiVideos.map(bn).sort();
    const missing = want.filter((w) => !got.includes(w));
    const extra = got.filter((g) => !want.includes(g));
    const ok = missing.length === 0 && extra.length === 0;
    const where = page.testiSec ? `${page.file}:${lineOf(page.html, page.testiSec.idx)}` : `${page.file}:0`;
    add('b:testimonials-match', ok ? 'PASS' : 'FAIL',
      ok ? `${where} testimonial section carries the planned set [${got.join(', ')}]`
        : `${where} plan wants [${want.join(', ')}] — missing: [${missing.join(', ') || '-'}], off-plan: [${extra.join(', ') || '-'}]`);
  }
  return checks;
}

/* ────────────────────────────────────────────────────────────────────────
 * GROUP C — conversion-ux, 12 machine-checkable patterns
 * ──────────────────────────────────────────────────────────────────────── */
function runGroupC(page) {
  const checks = [];
  const add = mkAdd(checks);
  const { html, css, buttons, sections } = page;

  /* c1: hero headline + sub + CTA in first section */
  {
    const hs = page.heroSec;
    const inner = hs ? hs.inner : '';
    const h1 = /<h1\b/i.test(inner);
    const sub = /class\s*=\s*["'][^"']*\b(sub|lede)\b/i.test(inner) || /<h2\b/i.test(inner) || /<p\b/i.test(inner);
    const cta = /\bclass\s*=\s*["'][^"']*\bbtn\b/i.test(inner) || /href\s*=\s*["']tel:/i.test(inner);
    const ok = hs && h1 && sub && cta;
    add('c:hero-headline-sub-cta', ok ? 'PASS' : 'FAIL',
      hs ? ev(page, hs.idx, ok ? 'hero has h1 + sub + CTA' : `hero missing: ${[!h1 && 'h1', !sub && 'sub', !cta && 'CTA'].filter(Boolean).join(', ')}`)
        : 'no <section> found for hero');
  }

  /* c2: single primary CTA label */
  {
    const primaries = buttons.filter((b) => isSolidBtn(b) && !isTel(b) && APPT_RX.test(b.label));
    const labels = new Map();
    for (const b of primaries) {
      const key = b.label.toLowerCase().replace(/[^a-z ]/g, '').trim();
      if (!labels.has(key)) labels.set(key, { label: b.label, n: 0, idx: b.idx });
      labels.get(key).n++;
    }
    const distinct = [...labels.values()];
    const ok = distinct.length === 1 && primaries.length > 0;
    add('c:single-primary-cta', ok ? 'PASS' : 'FAIL',
      primaries.length === 0 ? 'no primary (appointment-intent) CTA buttons found'
        : ok ? ev(page, distinct[0].idx, `"${distinct[0].label}" used ${distinct[0].n}x, no competing primary labels`)
          : `${distinct.length} competing primary labels: ` + distinct.map((d) => `"${d.label}" (${d.n}x, line ${lineOf(html, d.idx)})`).join(', '));
  }

  /* c3: CTA at least every 3 sections */
  {
    const hasCTA = sections.map((s) => /\bclass\s*=\s*["'][^"']*\bbtn\b/i.test(s.inner) || /href\s*=\s*["']tel:/i.test(s.inner));
    let gapStart = -1, worst = null;
    for (let i = 0; i <= sections.length - 3; i++) {
      if (!hasCTA[i] && !hasCTA[i + 1] && !hasCTA[i + 2]) { gapStart = i; worst = sections[i]; break; }
    }
    add('c:cta-every-3-sections', gapStart === -1 ? 'PASS' : 'FAIL',
      gapStart === -1 ? `no run of 3 CTA-less sections (${sections.length} sections scanned)`
        : ev(page, worst.idx, `sections ${gapStart + 1}-${gapStart + 3} (#${sections[gapStart].id || '?'} → #${sections[gapStart + 2].id || '?'}) have no CTA`));
  }

  /* c4: mobile sticky CTA bar (fixed/sticky bottom element with tel or CTA) */
  {
    let found = null;
    for (const m of css.matchAll(/([^{}]+)\{([^}]*)\}/g)) {
      const sel = m[1].trim(), body = m[2];
      if (!/position\s*:\s*(fixed|sticky)/i.test(body)) continue;
      if (!/(?<![a-z-])bottom\s*:\s*-?[\d.]/i.test(body)) continue; // real bottom:, not border-bottom:
      // locate an element matching the selector's last class/id
      const tok = (sel.match(/[.#][\w-]+(?![^{]*[.#])/g) || sel.match(/[.#][\w-]+/g) || []).pop();
      if (!tok) continue;
      const name = tok.slice(1);
      const rx = tok[0] === '.' ? new RegExp(`class\\s*=\\s*["'][^"']*\\b${name}\\b`, 'i') : new RegExp(`id\\s*=\\s*["']${name}["']`, 'i');
      const em = rx.exec(html);
      if (!em) continue;
      const region = html.slice(em.index, em.index + 2000);
      if (/href\s*=\s*["']tel:/i.test(region) || /\bbtn\b/.test(region)) { found = { sel, idx: em.index }; break; }
    }
    add('c:mobile-sticky-cta', found ? 'PASS' : 'FAIL',
      found ? ev(page, found.idx, `sticky bottom CTA bar via "${found.sel}"`)
        : 'no fixed/sticky bottom element carrying a tel: link or CTA button');
  }

  /* c5: testimonial card with name + photo */
  {
    const s = page.testiSec;
    let ok = false, at = s ? s.idx : -1, note = 'no testimonial section (#stories/#results)';
    if (s) {
      const hasMedia = page.mediaIn(s).length > 0;
      // full caption text of every card caption in the section
      const caps = [];
      for (const m of s.inner.matchAll(/<(\w+)[^>]*class\s*=\s*["'][^"']*\b(vcap|tcap|name|caption)\b[^"']*["'][^>]*>([\s\S]*?)<\/\1>/gi)) caps.push(stripTags(m[3]));
      for (const m of s.inner.matchAll(/<figcaption[^>]*>([\s\S]*?)<\/figcaption>/gi)) caps.push(stripTags(m[1]));
      const NAME_RX = /\b(mike|kelly|angela|ron|danny|tammy|diane|joe|fran|carol|jill|christa|bush|vile)\b/i;
      const named = caps.find((t) => NAME_RX.test(t));
      ok = hasMedia && !!named;
      note = ok ? `testimonial card with media + patient name ("${named.slice(0, 50)}")`
        : !hasMedia ? 'testimonial section has no photo/video'
          : caps.length === 0 ? 'testimonial cards have no captions'
            : `testimonial captions carry no patient name (e.g. "${(caps[0] || '').slice(0, 50)}")`;
    }
    add('c:testimonial-name-photo', ok ? 'PASS' : 'FAIL', at >= 0 ? ev(page, at, note) : note);
  }

  /* c6: numeric proof row (>=3 numeric stats close together) */
  {
    const rx = /\b\d[\d,.]*\s*(\+|%|percent|yrs?\b|years|smiles|patients|stars)|\b5\.0\b|★/gi;
    const idxs = [];
    let m;
    while ((m = rx.exec(html))) idxs.push(m.index);
    let hit = -1;
    for (let i = 0; i + 2 < idxs.length; i++) if (idxs[i + 2] - idxs[i] < 1200) { hit = idxs[i]; break; }
    add('c:numeric-proof-row', hit >= 0 ? 'PASS' : 'FAIL',
      hit >= 0 ? ev(page, hit, '3+ numeric proof stats within one row/region')
        : 'no cluster of 3+ numeric stats (30+ years / 98% / 5.0 stars style) found');
  }

  /* c7: FAQ block present */
  {
    const m = /<details\b/i.exec(html) || /(?:id|class)\s*=\s*["'][^"']*\bfaq/i.exec(html) || /frequently asked/i.exec(html);
    add('c:faq-block', m ? 'PASS' : 'FAIL', m ? ev(page, m.index, 'FAQ block present') : 'no FAQ block (details/faq id-class/"Frequently Asked")');
  }

  /* c8: button text never "Submit" */
  {
    const bad = page.buttons.find((b) => /^submit$/i.test(b.label.trim()));
    add('c:no-submit-label', bad ? 'FAIL' : 'PASS',
      bad ? ev(page, bad.idx, `button labeled "Submit"`) : 'no "Submit" button labels');
  }

  /* c9: first-person copy on primary buttons ("my", never "your") */
  {
    const primaries = page.buttons.filter((b) => isSolidBtn(b) && !isTel(b) && APPT_RX.test(b.label));
    const your = primaries.find((b) => /\byour\b/i.test(b.label));
    const my = primaries.find((b) => /\b(my|me|i)\b/i.test(b.label));
    const ok = primaries.length > 0 && !your && !!my;
    add('c:first-person-cta', ok ? 'PASS' : 'FAIL',
      primaries.length === 0 ? 'no primary CTA buttons found'
        : your ? ev(page, your.idx, `second-person primary CTA: "${your.label}"`)
          : !my ? `no first-person primary CTA (labels: ${primaries.slice(0, 3).map((b) => `"${b.label}"`).join(', ')})`
            : ev(page, my.idx, `first-person primary CTA: "${my.label}"`));
  }

  /* c10: form fields single-column */
  {
    const forms = [...html.matchAll(/<form\b[\s\S]*?<\/form>/gi)];
    if (forms.length === 0) {
      add('c:form-single-column', 'PASS', 'no <form> markup on page (nothing to violate)');
    } else {
      let bad = null;
      for (const f of forms) {
        const inner = f[0];
        if (/grid-template-columns\s*:\s*[^;}"']*((1fr\s+1fr)|repeat\(\s*2)/i.test(inner)
          || /class\s*=\s*["'][^"']*\b(row|cols?-2|half|split|two-col)\b[^"']*["'][^>]*>(?:(?!<\/)[\s\S]){0,400}<input[\s\S]{0,400}<input/i.test(inner)) {
          bad = f; break;
        }
      }
      add('c:form-single-column', bad ? 'FAIL' : 'PASS',
        bad ? ev(page, bad.index, 'form has side-by-side input columns')
          : `${forms.length} form(s), all single-column`);
    }
  }

  /* c11: no top nav on the 3 funnel pages */
  {
    if (!FUNNEL_KEYS.has(page.key)) {
      add('c:funnel-no-nav', 'PASS', 'domain-mapped site page, top nav allowed');
    } else {
      let bad = null;
      for (const m of html.matchAll(/<nav\b[^>]*>/gi)) {
        const tag = m[0];
        if (/breadcrumb/i.test(tag) || /\bcrumbs?\b/i.test(tag)) continue;
        bad = m; break;
      }
      add('c:funnel-no-nav', bad ? 'FAIL' : 'PASS',
        bad ? ev(page, bad.index, `funnel page has a top nav (${bad[0].slice(0, 60)}) — funnels must be nav-free`)
          : 'funnel page is nav-free (breadcrumbs exempt)');
    }
  }

  /* c12: body font-size >= 16px */
  {
    let size = 16, at = -1, decl = 'no explicit html/body font-size (browser default 16px)';
    for (const m of css.matchAll(/(?:^|[}\s,])(html|body)\s*(?:,[^{]*)?\{([^}]*)\}/gi)) {
      const fm = m[2].match(/font-size\s*:\s*([\d.]+)(px|rem|%|em)/i);
      if (fm) {
        const v = parseFloat(fm[1]);
        size = fm[2].toLowerCase() === 'px' ? v : fm[2] === '%' ? 16 * (v / 100) : 16 * v;
        at = css.indexOf(m[0]);
        decl = `${m[1]} font-size: ${fm[1]}${fm[2]} (=${size}px)`;
      }
    }
    add('c:body-font-16px', size >= 16 ? 'PASS' : 'FAIL', at >= 0 ? `${page.file} ${decl}` : decl);
  }

  return checks;
}

/* ────────────────────────────────────────────────────────────────────────
 * GROUP D — carry-over rules from harness.mjs
 * ──────────────────────────────────────────────────────────────────────── */
function runGroupD(page) {
  const legacy = legacyCheckPage(page.abs);
  const checks = legacy.checks.map((c) => ({ id: `d:${c.id}`, status: c.status, evidence: `${page.file} ${c.detail}` }));

  // The old harness assumed flat files (dental-implants.html); every directory-index
  // page would false-fail its slug check. Recompute: canonical must equal the exact
  // live slug with trailing slash.
  const canon = (page.html.match(/<link\b[^>]*rel\s*=\s*["']canonical["'][^>]*href\s*=\s*["']([^"']+)["']/i)
    || page.html.match(/<link\b[^>]*href\s*=\s*["']([^"']+)["'][^>]*rel\s*=\s*["']canonical["']/i) || [])[1] || null;
  const path = canon ? (canon.replace(/^https?:\/\/[^/]+/i, '') || '/') : null;
  const slugOk = path === page.slug;
  const slugIdx = canon ? page.html.indexOf(canon) : -1;
  const slugCheck = {
    id: 'd:slug', status: slugOk ? 'PASS' : 'FAIL',
    evidence: !canon ? `${page.file} no <link rel="canonical">`
      : ev(page, slugIdx, slugOk ? `canonical "${path}" (recomputed for directory-index layout)`
        : `canonical "${path}" != required slug "${page.slug}"`),
  };
  const i = checks.findIndex((c) => c.id === 'd:slug');
  if (i >= 0) checks[i] = slugCheck; else checks.push(slugCheck);
  return checks;
}

/* ────────────────────────────────────────────────────────────────────────
 * GROUP E — Figma conformance
 * ──────────────────────────────────────────────────────────────────────── */
function runGroupE(page) {
  const checks = [];
  const add = mkAdd(checks);

  if (page.type === 'T1') {
    const clean = page.html.replace(/<script[\s\S]*?<\/script>/gi, ' ').replace(/<style[\s\S]*?<\/style>/gi, ' ');
    const norm = normHeading(clean);
    const missing = T1_HEADINGS.filter((t) => !norm.includes(normHeading(t)));
    add('e:t1-headings', missing.length === 0 ? 'PASS' : 'FAIL',
      missing.length === 0 ? `${page.file} all 10 exact T1 headings present`
        : `${page.file} missing ${missing.length}/10 T1 headings: ${missing.map((m) => `"${m}"`).join(', ')}`);
    return checks;
  }

  // T2 — 9 section roles
  const S = page.sec;
  const roleEv = (s, ok, name, extra = '') => s
    ? ev(page, s.idx, `${ok ? '' : 'present but incomplete: '}${name}${extra}`)
    : `section for role "${name}" not found`;

  { const s = page.heroSec; const ok = !!s && /<h1\b/i.test(s.inner);
    add('e:role-hero', ok ? 'PASS' : 'FAIL', roleEv(s, ok, 'hero with H1')); }
  { const m = /(?:id\s*=\s*["']quiz["']|class\s*=\s*["'][^"']*\bquiz)/i.exec(page.html);
    add('e:role-conversion-quiz', m ? 'PASS' : 'FAIL', m ? ev(page, m.index, 'quiz/conversion card') : 'no quiz card (id="quiz" / quiz class)'); }
  { const s = S('story'); add('e:role-patient-story', s ? 'PASS' : 'FAIL', roleEv(s, !!s, 'patient story (#story)')); }
  { const s = page.facesSec; const n = page.faces.length; const ok = !!s && n >= 4;
    add('e:role-faces-row', ok ? 'PASS' : 'FAIL', roleEv(s, ok, `4-face patient row`, s ? ` (${n} faces)` : '')); }
  { const s = S('journey'); const steps = s ? (s.inner.match(/<h3\b/gi) || []).length : 0; const ok = !!s && steps >= 6;
    add('e:role-journey', ok ? 'PASS' : 'FAIL', roleEv(s, ok, 'DreamSmile Journey steps', s ? ` (${steps} steps)` : '')); }
  { const s = S('protocol'); const ok = !!s && /burns protocol/i.test(decode(s.inner));
    add('e:role-protocol', ok ? 'PASS' : 'FAIL', roleEv(s, ok, 'The Burns Protocol')); }
  { const s = S('learn'); const h2s = s ? (s.inner.match(/<h2\b/gi) || []).length : 0; const ok = !!s && h2s >= 3;
    add('e:role-editorial-seo', ok ? 'PASS' : 'FAIL', roleEv(s, ok, 'editorial SEO block', s ? ` (${h2s} h2 subsections)` : '')); }
  { const s = S('doctor'); const ok = !!s && /meet the doctor/i.test(decode(page.html));
    add('e:role-meet-doctor', ok ? 'PASS' : 'FAIL', roleEv(s, ok, 'Meet the Doctor (dark bio)')); }
  { const s = page.testiSec; const ok = !!s && /real results/i.test(decode(page.html));
    add('e:role-real-results', ok ? 'PASS' : 'FAIL', roleEv(s, ok, 'Real Results. Real Patients.')); }

  return checks;
}

/* ────────────────────────────────────────────────────────────────────────
 * Runner + report
 * ──────────────────────────────────────────────────────────────────────── */
function run(targetKeys) {
  const plan = JSON.parse(readFileSync(resolve(ROOT, 'creative-plan.json'), 'utf8'));
  const pages = {};
  const loadErrors = [];
  for (const key of Object.keys(PAGES)) {
    try { pages[key] = loadPage(key); }
    catch (e) { loadErrors.push({ key, file: PAGES[key].file, error: e.message }); }
  }

  const { global: groupA, perPage: aPerPage } = runGroupA(pages, plan);

  const report = { generated: new Date().toISOString(), global: groupA, pages: [], loadErrors };

  for (const key of targetKeys) {
    const page = pages[key];
    if (!page) continue;
    const checks = [
      ...aPerPage[key],
      ...runGroupB(page, plan),
      ...runGroupC(page),
      ...runGroupD(page),
      ...runGroupE(page),
    ];
    const fails = checks.filter((c) => c.status === 'FAIL').length;
    const warns = checks.filter((c) => c.status === 'WARN').length;
    const scored = checks.filter((c) => c.status !== 'WARN').length;
    const score = scored ? Math.round(((scored - fails) / scored) * 1000) / 10 : 0;
    report.pages.push({ key, file: page.file, slug: page.slug, type: page.type, score, fails, warns, checks });
  }
  return report;
}

function print(report, { failingOnly = false } = {}) {
  const icon = { PASS: '✓', FAIL: '✗', WARN: '!' };
  console.log('\n══ GLOBAL — GROUP A: CREATIVE UNIQUENESS ══');
  for (const c of report.global) console.log(` ${icon[c.status]} ${c.id.padEnd(28)} ${c.evidence}`);

  for (const p of report.pages) {
    console.log('\n' + '─'.repeat(78));
    console.log(`${p.key}  (${p.file})  [${p.type}]  slug ${p.slug}`);
    console.log(`SCORE ${p.score.toFixed(1)}/100   ${p.fails === 0 ? 'PASS' : 'FAIL'}   (${p.fails} fail, ${p.warns} warn, ${p.checks.length} checks)`);
    for (const c of p.checks) {
      if (failingOnly && c.status === 'PASS') continue;
      console.log(` ${icon[c.status]} ${c.id.padEnd(28)} ${c.evidence}`);
    }
  }

  console.log('\n' + '═'.repeat(78));
  console.log('SUMMARY');
  for (const p of report.pages) {
    console.log(` ${p.fails === 0 ? '✓' : '✗'} ${p.key.padEnd(26)} ${String(p.score.toFixed(1)).padStart(5)}/100  ${p.fails} fail  ${p.warns} warn`);
  }
  const passing = report.pages.filter((p) => p.fails === 0).length;
  console.log(`${passing}/${report.pages.length} pages fully conform`);
  for (const e of report.loadErrors) console.log(` ✗ LOAD ERROR ${e.key} (${e.file}): ${e.error}`);
}

/* CLI */
const args = process.argv.slice(2);
if (process.argv[1] && resolve(process.argv[1]) === resolve(fileURLToPath(import.meta.url))) {
  let keys;
  if (args.length === 0 || args[0] === '--all') {
    keys = Object.keys(PAGES);
  } else {
    const abs = resolve(args[0]);
    const key = Object.keys(PAGES).find((k) => resolve(ROOT, PAGES[k].file) === abs);
    if (!key) {
      console.error(`Not one of the 15 tracked pages: ${args[0]}\nTracked: ${Object.values(PAGES).map((p) => p.file).join(', ')}`);
      process.exit(2);
    }
    keys = [key];
  }
  const report = run(keys);
  print(report, { failingOnly: args.includes('--failing') });
  writeFileSync(resolve(ROOT, 'prompt-harness-report.json'), JSON.stringify(report, null, 2));
  console.log(`\nJSON: prompt-harness-report.json`);
  const anyFail = report.pages.some((p) => p.fails > 0) || report.loadErrors.length > 0;
  process.exit(anyFail ? 1 : 0);
}

export { run, PAGES };
