#!/usr/bin/env node
/**
 * Burns Website Build — Quality Harness (v3, SEO/AEO/GEO gate)
 *
 * Pure Node ESM, no external deps. Uses node:fs + a small HTML string scan.
 *
 * Usage:
 *   import { checkPage } from './harness.mjs';
 *   const result = checkPage('/abs/path/to/page.html');
 *
 *   node harness.mjs <file-or-glob> [more files/globs...]
 *   node harness.mjs implant-tooth.html
 *   node harness.mjs "*.html"
 *
 * Per-page checks (each equal weight, 0-100 score, pass threshold 90):
 *   brand            only hexes from brand-tokens.json allowedHex in styles
 *   fonts            only approved font-family stacks used
 *   logo             <img> to the real logo asset present in the header
 *   specialist       the word "specialist" is absent (board rule)
 *   dreamsmile-scope DreamSmile present iff slug is DreamSmile-Yes
 *   slug             <link rel="canonical"> with the exact slug (trailing slash)
 *   phone            tel:5407408937 link above the fold (first 40% of body)
 *   no-em-dash       no U+2014 anywhere
 *   no-stock         no stock/shutterstock/unsplash/ai-generated filenames
 *   seo              <title> + meta description + meta viewport present
 *   aeo              an FAQ block AND FAQPage or Dentist JSON-LD
 *   geo              LocalBusiness/Dentist JSON-LD (New Market VA + geo) + city names
 *
 * Sources of truth:
 *   brand-tokens.json      allowedHex, fonts, logo files (read at runtime)
 *   PAGE-TEMPLATE-MAP.md   slug list + DreamSmile-Yes set (hardcoded below)
 */

import { readFileSync, existsSync, statSync, readdirSync } from 'node:fs';
import { dirname, resolve, basename, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const DIR = dirname(fileURLToPath(import.meta.url));
const EM_DASH = '—';
const PASS_THRESHOLD = 90;

/* ─────────────────────────────────────────────────────────────────────────
 * Slug map — hardcoded from PAGE-TEMPLATE-MAP.md (master page table + funnels
 * + representative blog slugs). Every slug keeps its trailing slash.
 * ───────────────────────────────────────────────────────────────────────── */
const FULL_SLUGS = new Set([
  '/',
  // Dental implants (T2)
  '/restorative-dentistry/dental-implants/',
  '/restorative-dentistry/dental-implants/replacing-missing-teeth/',
  '/restorative-dentistry/dental-implants/missing-all-upper-or-lower-teeth/',
  '/restorative-dentistry/dental-implants/overview-of-implant-placement/',
  '/restorative-dentistry/dental-implants/after-implant-placement/',
  '/restorative-dentistry/dental-implants/bone-grafting-for-implants/',
  '/restorative-dentistry/dental-implants/cost-of-dental-implants/',
  '/restorative-dentistry/dental-implants/dental-implants-faqs/',
  '/restorative-dentistry/dental-implants/teeth-in-a-day/',
  '/implant-tooth/',
  // General restorative
  '/restorative-dentistry/',
  '/restorative-dentistry/dental-fillings/',
  '/restorative-dentistry/dental-crowns/',
  '/restorative-dentistry/dental-bridges/',
  '/restorative-dentistry/root-canal/',
  '/restorative-dentistry/cerec/',
  '/restorative-dentistry/full-mouth-reconstruction/',
  '/restorative-dentistry/l-prf-grafting-and-osstell-idx/',
  // Dentures
  '/restorative-dentistry/dentures/',
  '/restorative-dentistry/dentures/partial-dentures/',
  '/restorative-dentistry/dentures/immediate-dentures/',
  '/restorative-dentistry/dentures/implant-retained-dentures/',
  '/restorative-dentistry/dentures/denture-care/',
  '/restorative-dentistry/dentures/denture-relines/',
  '/restorative-dentistry/dentures/rebase-repairs/',
  '/restorative-dentistry/dentures/soft-liners/',
  '/restorative-dentistry/dentures/exams-maintenance/',
  // Preventative care
  '/preventative-care/',
  '/preventative-care/dental-exams-and-check-ups/',
  '/preventative-care/teeth-cleaning/',
  '/preventative-care/oral-hygiene/',
  '/preventative-care/dental-sealants/',
  '/preventative-care/child-dentistry/',
  '/preventative-care/gum-disease-treatment/',
  '/preventative-care/gum-disease-treatment/deep-teeth-cleaning/',
  '/preventative-care/gum-disease-treatment/periodontal-maintenance/',
  '/preventative-care/tooth-extractions/',
  '/preventative-care/wisdom-teeth-removal/',
  // Cosmetic — two live indexed trees (both preserved)
  '/cosmetic-dentistry/',
  '/cosmetic-dentistry/teeth-whitening/',
  '/cosmetic-dentistry/porcelain-veneers/',
  '/cosmetic-dentistry/dental-bonding/',
  '/cosmetic-dentistry/clear-braces/',
  '/cosmetic-dentistry/inlays-onlays/',
  '/cosmetic-dentistry-4/',
  '/cosmetic-dentistry-4/teeth-whitening/',
  '/cosmetic-dentistry-4/porcelain-veneers/',
  '/cosmetic-dentistry-4/dental-bonding/',
  '/cosmetic-dentistry-4/clear-braces/',
  '/cosmetic-dentistry-4/inlays-onlays/',
  // About us
  '/about-us/',
  '/about-us/dr-jeffrey-burns/',
  '/about-us/meet-the-staff/',
  '/about-us/advanced-technology/',
  '/about-us/3d-imaging/',
  '/about-us/whitney-oral-surgery/',
  '/about-us/whitney-oral-surgery/dr-james-whitney/',
  '/about-us/whitney-oral-surgery/information/',
  '/about-us/whitney-oral-surgery/oral-surgery-hours/',
  // Contact + local-SEO landers
  '/contact-us/',
  '/contact-us/dental-implants-harrisonburg-area/',
  '/contact-us/winchester-dentist-dental-implants/',
  '/contact-us/dental-implants-timberville-va/',
  '/contact-us/dentist-near-woodstock-cosmetic-implants/',
  '/contact-us/cosmetic-dentist-near-broadway/',
  '/contact-us/cosmetic-dentist-near-luray/',
  '/contact-us/cosmetic-dentist-elkton-area/',
  '/contact-us/dental-implants-dentist-near-bridgewater/',
  // Branded DreamSmile funnels
  '/theburnsprotocol/',
  '/confidentdreamsmile/',
  '/dreamsmilewalloffame/',
  '/areyouthinkingaboutdentalimplants/',
  '/implantsandgumdisease/',
  // Administrative + utility
  '/patient-information/',
  '/patient-information/why-choose-us/',
  '/patient-information/first-visit/',
  '/patient-information/new-patients/',
  '/patient-information/scheduling/',
  '/patient-information/patient-registration/',
  '/patient-information/patient-review-form/',
  '/patient-information/patient-education/',
  '/patient-information/anesthesia/',
  '/patient-information/insurance/',
  '/patient-information/insurance/cherry-credit/',
  '/patient-information/care-credit/',
  '/patient-information/testimonials/',
  '/patient-information/dental-testimonials/',
  '/patient-information/covid-19-office-re-opening/',
  '/patient-information/spa-122-medspa/',
  '/disclaimer/',
  '/sitemap/',
  '/blog/',
  // Blog / resource posts (flat root slugs) — representative set from the map
  '/what-is-a-dreamsmile/',
  '/full-mouth-implants-step-by-step/',
  '/all-on-4-implants-low-bone-density/',
  '/types-of-dental-implants-guide/',
  '/dental-implants-cost-basics/',
  '/single-vs-multiple-tooth-implants/',
  '/what-are-tooth-implants/',
  '/importance-of-dental-crowns/',
  '/root-canal-benefits/',
  '/dental-bonding-benefits/',
  '/safe-teeth-whitening-options/',
  '/early-gum-disease-signs/',
  '/healthy-teeth-at-every-age/',
]);

// DreamSmile-Yes set, keyed by the file basename (= the slug's last path segment).
// 'index' represents the homepage ('/'). From PAGE-TEMPLATE-MAP.md DreamSmile = Yes rows.
const DREAMSMILE_YES = new Set([
  'index',
  // implant treatment pages
  'dental-implants',
  'replacing-missing-teeth',
  'missing-all-upper-or-lower-teeth',
  'overview-of-implant-placement',
  'after-implant-placement',
  'bone-grafting-for-implants',
  'cost-of-dental-implants',
  'dental-implants-faqs',
  'teeth-in-a-day',
  'implant-tooth',
  // implant-focused restorative + dentures
  'full-mouth-reconstruction',
  'l-prf-grafting-and-osstell-idx',
  'implant-retained-dentures',
  // implant-focused local landers
  'dental-implants-harrisonburg-area',
  'winchester-dentist-dental-implants',
  'dental-implants-timberville-va',
  'dentist-near-woodstock-cosmetic-implants',
  'dental-implants-dentist-near-bridgewater',
  // branded DreamSmile funnels
  'theburnsprotocol',
  'confidentdreamsmile',
  'dreamsmilewalloffame',
  'areyouthinkingaboutdentalimplants',
  'implantsandgumdisease',
  // implant-topic blog posts
  'what-is-a-dreamsmile',
  'full-mouth-implants-step-by-step',
  'all-on-4-implants-low-bone-density',
  'types-of-dental-implants-guide',
  'dental-implants-cost-basics',
  'single-vs-multiple-tooth-implants',
  'what-are-tooth-implants',
]);

/* ─────────────────────────────────────────────────────────────────────────
 * brand-tokens.json loader (with safe fallbacks if the file is absent)
 * ───────────────────────────────────────────────────────────────────────── */
function normHex(h) {
  let x = h.toLowerCase().replace('#', '');
  if (x.length === 3) x = [...x].map((c) => c + c).join('');
  else if (x.length === 4) x = [...x].map((c) => c + c).join(''); // rgba shorthand
  return '#' + x;
}

function loadTokens(dir) {
  let raw = {};
  try {
    raw = JSON.parse(readFileSync(resolve(dir, 'brand-tokens.json'), 'utf8'));
  } catch { /* fall back to defaults */ }

  const allowedHex = new Set(
    (Array.isArray(raw.allowedHex) ? raw.allowedHex : [
      '#ffffff', '#eef3f5', '#e4eef1', '#dfeaea', '#e4f5fa', '#e2ebee', '#dcefef',
      '#cfe8e9', '#b0e0e9', '#74bdc2', '#226d7a', '#22b8d1', '#1a565f', '#164851',
      '#3e3e3e', '#12252c', '#4d5a62', '#7f99a3', '#979797', '#183a44', '#10242b',
      '#0f2126', '#0d1519', '#c6b48d', '#b09b6f', '#f5b942', '#000000',
    ]).map(normHex),
  );

  const fonts = new Set();
  const pushStack = (s) => {
    if (typeof s !== 'string') return;
    for (const tok of s.split(',')) {
      const f = tok.trim().replace(/^["']|["']$/g, '').toLowerCase();
      if (f) fonts.add(f);
    }
  };
  if (Array.isArray(raw.allowedFonts)) raw.allowedFonts.forEach((f) => fonts.add(String(f).trim().replace(/^["']|["']$/g, '').toLowerCase()));
  if (Array.isArray(raw.allowedFontStacks)) raw.allowedFontStacks.forEach(pushStack);
  if (raw.fonts && typeof raw.fonts === 'object') for (const [k, v] of Object.entries(raw.fonts)) if (!k.startsWith('_')) pushStack(v);
  if (fonts.size === 0) ['montserrat', 'amiri', 'arial', 'georgia', 'sans-serif', 'serif'].forEach((f) => fonts.add(f));

  const logoFiles = new Set();
  const addLogo = (v) => { if (typeof v === 'string' && /\.(png|jpe?g|svg|webp)$/i.test(v)) logoFiles.add(v.split('/').pop().toLowerCase()); };
  if (raw.logo && typeof raw.logo === 'object') for (const [k, v] of Object.entries(raw.logo)) if (!k.startsWith('_')) addLogo(v);
  if (logoFiles.size === 0) ['logo.png', 'logo-white.png', 'dreamsmile-logo.png'].forEach((f) => logoFiles.add(f));

  return { allowedHex, fonts, logoFiles };
}

/* ─────────────────────────────────────────────────────────────────────────
 * HTML slicing helpers
 * ───────────────────────────────────────────────────────────────────────── */
function region(html, tag) {
  const re = new RegExp(`<${tag}\\b[^>]*>([\\s\\S]*?)<\\/${tag}>`, 'i');
  const m = html.match(re);
  return m ? m[1] : '';
}
function bodyOf(html) {
  const m = html.match(/<body\b[^>]*>([\s\S]*?)<\/body>/i);
  return m ? m[1] : html;
}
function styleText(html) {
  let s = '';
  for (const m of html.matchAll(/<style\b[^>]*>([\s\S]*?)<\/style>/gi)) s += '\n' + m[1];
  for (const m of html.matchAll(/style\s*=\s*"([^"]*)"/gi)) s += '\n' + m[1];
  for (const m of html.matchAll(/style\s*=\s*'([^']*)'/gi)) s += '\n' + m[1];
  return s;
}
function jsonLdBlocks(html) {
  return [...html.matchAll(/<script[^>]+type\s*=\s*["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)].map((m) => m[1]);
}
function canonicalPath(html) {
  const link = (html.match(/<link\b[^>]*rel\s*=\s*["']canonical["'][^>]*>/i) || [null])[0]
    || (html.match(/<link\b[^>]*>/gi) || []).find((t) => /rel\s*=\s*["']canonical["']/i.test(t));
  if (!link) return null;
  const hm = link.match(/href\s*=\s*["']([^"']+)["']/i);
  if (!hm) return null;
  let href = hm[1].trim().replace(/^https?:\/\/[^/]+/i, '');
  if (!href.startsWith('/')) href = '/' + href;
  return href;
}
function lastSeg(slug) {
  const parts = slug.replace(/\/+$/, '').split('/').filter(Boolean);
  return parts.length ? parts[parts.length - 1] : '';
}

/* ─────────────────────────────────────────────────────────────────────────
 * checkPage — the exported API
 * ───────────────────────────────────────────────────────────────────────── */
export function checkPage(htmlPath) {
  const abs = resolve(htmlPath);
  const html = readFileSync(abs, 'utf8');
  const tokens = loadTokens(DIR);
  const base = basename(abs).replace(/\.html?$/i, '');
  const body = bodyOf(html);
  const head = region(html, 'head') || html;
  const header = region(html, 'header');
  const styles = styleText(html);
  const jsonLd = jsonLdBlocks(html);
  const jsonLdText = jsonLd.join('\n');

  const checks = [];
  const add = (id, ok, detail) => checks.push({ id, status: ok ? 'PASS' : 'FAIL', detail });

  /* 1. brand — only allowedHex in styles */
  {
    const used = [...styles.matchAll(/#[0-9a-fA-F]{3,8}\b/g)].map((m) => normHex(m[0]));
    const strays = [...new Set(used.filter((h) => !tokens.allowedHex.has(h)))];
    add('brand', strays.length === 0,
      strays.length === 0
        ? `${new Set(used).size} unique hex, all in allowedHex`
        : `stray hex not in brand-tokens.json: ${strays.join(', ')}`);
  }

  /* 2. fonts — only approved families */
  {
    const decls = [...styles.matchAll(/font-family\s*:\s*([^;}]+)/gi)].map((m) => m[1]);
    const usedFams = new Set();
    for (const d of decls) for (const t of d.split(',')) {
      const f = t.trim().replace(/^["']|["']$/g, '').replace(/!important/i, '').trim().toLowerCase();
      if (f) usedFams.add(f);
    }
    const strays = [...usedFams].filter((f) => !tokens.fonts.has(f));
    add('fonts', strays.length === 0,
      strays.length === 0
        ? `families used: ${[...usedFams].join(', ') || 'none'}`
        : `unapproved font family: ${strays.join(', ')}`);
  }

  /* 3. logo — real logo <img> in the header */
  {
    const scope = header || body.slice(0, 3000);
    const imgs = [...scope.matchAll(/<img\b[^>]*\bsrc\s*=\s*["']([^"']+)["'][^>]*>/gi)].map((m) => m[1]);
    const hit = imgs.find((src) => tokens.logoFiles.has(src.split('/').pop().toLowerCase()));
    add('logo', !!hit,
      hit ? `header logo: ${hit}`
        : header ? 'no logo <img> from brand-tokens.logo found in <header>'
          : 'no <header> and no logo <img> near top of body');
  }

  /* 4. specialist — must be absent */
  {
    const bad = /specialist/i.test(html);
    add('specialist', !bad, bad ? 'the word "specialist" appears (board rule: use "Meet the Doctor")' : 'absent');
  }

  /* 5. dreamsmile-scope — present iff DreamSmile-Yes */
  {
    const isYes = DREAMSMILE_YES.has(base);
    const hasDS = /dreamsmile/i.test(html);
    const ok = isYes ? hasDS : !hasDS;
    add('dreamsmile-scope', ok,
      isYes
        ? (hasDS ? 'DreamSmile-Yes slug, branding present' : 'DreamSmile-Yes slug but no DreamSmile branding on page')
        : (hasDS ? 'DreamSmile-No slug but "DreamSmile" appears on page' : 'DreamSmile-No slug, branding absent'));
  }

  /* 6. slug — canonical link with the exact slug + trailing slash */
  {
    const canon = canonicalPath(html);
    const expectedLast = base === 'index' ? '' : base;
    const known = canon && FULL_SLUGS.has(canon);
    const trailing = canon && canon.endsWith('/');
    const matchesFile = canon && lastSeg(canon) === expectedLast;
    const ok = !!(canon && known && trailing && matchesFile);
    add('slug', ok,
      !canon ? 'no <link rel="canonical"> found'
        : !trailing ? `canonical "${canon}" missing trailing slash`
          : !known ? `canonical "${canon}" is not a known slug from PAGE-TEMPLATE-MAP.md`
            : !matchesFile ? `canonical "${canon}" does not match this file's slug (expected last segment "${expectedLast}")`
              : `canonical "${canon}"`);
  }

  /* 7. phone — tel:5407408937 link above the fold (first 40% of body) */
  {
    const idx = body.search(/href\s*=\s*["']tel:5407408937["']/i);
    const pct = idx > -1 ? idx / body.length : 1;
    const ok = idx > -1 && pct <= 0.40;
    add('phone', ok,
      idx === -1 ? 'no tel:5407408937 link in body'
        : ok ? `tel: link at ${(pct * 100).toFixed(1)}% of body (above the fold)`
          : `tel: link at ${(pct * 100).toFixed(1)}% of body (below the 40% fold line)`);
  }

  /* 8. no-em-dash — no U+2014 anywhere */
  {
    const n = (html.match(new RegExp(EM_DASH, 'g')) || []).length;
    add('no-em-dash', n === 0, n === 0 ? 'clean' : `${n} em dash(es) (U+2014) found`);
  }

  /* 9. no-stock — no stock/shutterstock/unsplash/ai-generated filenames */
  {
    const refs = new Set();
    for (const m of html.matchAll(/(?:src|poster|href)\s*=\s*["']([^"']+)["']/gi)) refs.add(m[1]);
    for (const m of html.matchAll(/url\(\s*(['"]?)([^'")]+)\1\s*\)/gi)) refs.add(m[2]);
    const bad = [...refs].filter((r) => /(stock|shutterstock|unsplash|ai[-_]?generated)/i.test(r));
    add('no-stock', bad.length === 0, bad.length === 0 ? 'no stock/AI filenames' : `banned asset(s): ${bad.join(', ')}`);
  }

  /* 10. seo — title + meta description + meta viewport */
  {
    const title = /<title\b[^>]*>\s*\S[\s\S]*?<\/title>/i.test(html);
    const desc = /<meta\b[^>]*name\s*=\s*["']description["'][^>]*content\s*=\s*["']\s*\S/i.test(html);
    const viewport = /<meta\b[^>]*name\s*=\s*["']viewport["']/i.test(html);
    const missing = [!title && 'title', !desc && 'meta description', !viewport && 'meta viewport'].filter(Boolean);
    add('seo', missing.length === 0, missing.length === 0 ? 'title + description + viewport present' : `missing: ${missing.join(', ')}`);
  }

  /* 11. aeo — FAQ block AND (FAQPage OR Dentist JSON-LD) */
  {
    const faqBlock = /(?:id|class)\s*=\s*["'][^"']*faq/i.test(html)
      || /frequently asked questions/i.test(html)
      || /<details\b/i.test(html);
    const faqSchema = /"@type"\s*:\s*"FAQPage"/i.test(jsonLdText);
    const dentistSchema = /"@type"\s*:\s*"(Dentist|LocalBusiness|DentalClinic)"/i.test(jsonLdText);
    const ok = faqBlock && (faqSchema || dentistSchema);
    add('aeo', ok,
      ok ? `FAQ block + ${faqSchema ? 'FAQPage' : 'Dentist'} JSON-LD`
        : !faqBlock ? 'no FAQ block (need id/class "faq", a <details> accordion, or "Frequently Asked Questions")'
          : 'FAQ block present but no FAQPage or Dentist JSON-LD');
  }

  /* 12. geo — LocalBusiness/Dentist JSON-LD (New Market VA + geo) + city names in content */
  {
    const geoBlock = jsonLd.find((b) =>
      /"@type"\s*:\s*"(Dentist|LocalBusiness|DentalClinic)"/i.test(b)
      && /new market/i.test(b)
      && /("addressRegion"\s*:\s*"VA"|\bVA\b|22844)/i.test(b)
      && (/"geo"/i.test(b) && /latitude/i.test(b) && /longitude/i.test(b)));
    const cityInContent = /harrisonburg|shenandoah valley/i.test(body);
    const ok = !!geoBlock && cityInContent;
    add('geo', ok,
      ok ? 'Dentist/LocalBusiness JSON-LD (New Market, VA + geo) + Valley city names in content'
        : !geoBlock ? 'no LocalBusiness/Dentist JSON-LD with New Market VA address + geo coordinates'
          : 'geo JSON-LD present but content lacks Harrisonburg / Shenandoah Valley');
  }

  const passCount = checks.filter((c) => c.status === 'PASS').length;
  const score = Math.round((passCount / checks.length) * 1000) / 10;
  const pass = score >= PASS_THRESHOLD;

  return {
    file: abs,
    slug: canonicalPath(html) || (base === 'index' ? '/' : null),
    dreamSmileYes: DREAMSMILE_YES.has(base),
    score,
    pass,
    passCount,
    total: checks.length,
    checks,
  };
}

/* ─────────────────────────────────────────────────────────────────────────
 * CLI
 * ───────────────────────────────────────────────────────────────────────── */
function expandArg(pattern) {
  const p = resolve(pattern);
  if (!/[*?[]/.test(pattern)) {
    if (existsSync(p) && statSync(p).isDirectory()) {
      return readdirSync(p).filter((f) => /\.html?$/i.test(f)).sort().map((f) => join(p, f));
    }
    return [p];
  }
  const dir = dirname(p) || '.';
  const rx = new RegExp('^' + basename(p)
    .replace(/[.+^${}()|[\]\\]/g, '\\$&')
    .replace(/\*/g, '.*')
    .replace(/\?/g, '.') + '$', 'i');
  if (!existsSync(dir)) return [];
  return readdirSync(dir).filter((f) => rx.test(f)).sort().map((f) => join(dir, f));
}

function runCli(args) {
  if (args.length === 0) {
    console.error('Usage: node harness.mjs <file-or-glob> [more...]');
    process.exit(2);
  }
  const files = [...new Set(args.flatMap(expandArg))].filter((f) => existsSync(f));
  if (files.length === 0) {
    console.error('No matching HTML files found.');
    process.exit(2);
  }

  const icon = { PASS: '✓', FAIL: '✗' };
  let allPass = true;
  const summary = [];

  for (const f of files) {
    let r;
    try {
      r = checkPage(f);
    } catch (e) {
      allPass = false;
      console.log(`\n  ${basename(f)}  —  ERROR: ${e.message}`);
      summary.push({ file: basename(f), score: 0, pass: false });
      continue;
    }
    allPass = allPass && r.pass;
    summary.push({ file: basename(f), score: r.score, pass: r.pass });

    console.log('\n  ' + '─'.repeat(64));
    console.log(`  ${basename(f)}`);
    console.log(`  slug ${r.slug || '(none)'}   DreamSmile ${r.dreamSmileYes ? 'Yes' : 'No'}`);
    console.log(`  SCORE ${r.score.toFixed(1)}/100   ${r.pass ? 'PASS' : 'FAIL'}  (${r.passCount}/${r.total}, threshold ${PASS_THRESHOLD})`);
    console.log('  ' + '─'.repeat(64));
    for (const c of r.checks) {
      console.log(`   ${icon[c.status]} ${c.id.padEnd(17)} ${c.detail}`);
    }
  }

  if (files.length > 1) {
    console.log('\n  ' + '═'.repeat(64));
    console.log('  SUMMARY');
    for (const s of summary) {
      console.log(`   ${s.pass ? icon.PASS : icon.FAIL} ${s.file.padEnd(44)} ${s.score.toFixed(1)}/100`);
    }
    const passed = summary.filter((s) => s.pass).length;
    console.log(`  ${passed}/${summary.length} pages pass (threshold ${PASS_THRESHOLD})`);
  }
  console.log('');
  process.exit(allPass ? 0 : 1);
}

// Run the CLI only when invoked directly (not when imported).
if (process.argv[1] && resolve(process.argv[1]) === resolve(fileURLToPath(import.meta.url))) {
  runCli(process.argv.slice(2));
}
