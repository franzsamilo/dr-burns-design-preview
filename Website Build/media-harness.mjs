#!/usr/bin/env node
/**
 * Burns Website Build — MEDIA Harness
 * Validates that the RIGHT media is used in the RIGHT slot, using ground-truth
 * from media-manifest.json (established by visually inspecting each file).
 *
 * Catches what the structural harness cannot:
 *   - Identity: a staff member shown/labelled as "Dr. Burns"
 *   - Before/After semantics: an "after" smile sitting under a "Before" pill
 *   - Web-readiness: baked-in TikTok-caption media used as premium web imagery
 *   - Hero identity: a non-Burns face leading a page about The Burns Protocol
 *
 * Pure Node, no deps.  Run:  node media-harness.mjs
 * Writes media-report.json + media-report.md
 */
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const DIR = dirname(fileURLToPath(import.meta.url));
const HTML = readFileSync(resolve(DIR, 'index.html'), 'utf8');
const MAN = JSON.parse(readFileSync(resolve(DIR, 'media-manifest.json'), 'utf8')).assets;

const findings = [];
const add = (status, slot, asset, msg) => findings.push({ status, slot, asset, msg });
// status: PASS | WARN | FAIL

// section id at a given HTML index = nearest preceding id="..."
const idAt = (idx) => {
  const before = HTML.slice(0, idx);
  const m = [...before.matchAll(/id="([^"]+)"/g)];
  return m.length ? m[m.length - 1][1] : '(top)';
};
// nearest pill label within a small window around the element
const pillNear = (idx) => {
  const win = HTML.slice(Math.max(0, idx - 400), idx + 400);
  if (/pill before/i.test(win) && /pill after/i.test(win)) return 'before+after';
  if (/pill before/i.test(win)) return 'before';
  if (/pill after/i.test(win)) return 'after';
  return null;
};

// collect every media element (img + video), with src, poster, alt, section, pill
const media = [];
for (const m of HTML.matchAll(/<(img|video)\b[^>]*>/gi)) {
  const tag = m[0];
  const src = (tag.match(/\bsrc="([^"]+)"/i) || [])[1];
  const poster = (tag.match(/\bposter="([^"]+)"/i) || [])[1];
  const alt = (tag.match(/\balt="([^"]*)"/i) || [])[1] || '';
  const sec = idAt(m.index);
  const pill = pillNear(m.index);
  media.push({ el: m[1].toLowerCase(), src, poster, alt, sec, pill, idx: m.index });
}

// helper: manifest lookup
const info = (p) => (p && MAN[p]) || null;
const drBurnsContext = (mm) =>
  /dr\.?\s*(jeffrey\s*)?burns/i.test(mm.alt) || mm.sec === 'doctor';

let checked = 0;
for (const mm of media) {
  for (const p of [mm.src, mm.poster]) {
    if (!p || /^https?:|^data:|^#/.test(p)) continue;
    checked++;
    const meta = info(p);
    const slot = `#${mm.sec}`;

    // resolve
    if (!existsSync(resolve(DIR, p))) { add('FAIL', slot, p, 'file does not exist on disk'); continue; }
    if (!meta) { add('WARN', slot, p, 'no manifest entry — provenance unverified'); continue; }

    // RULE 1: identity in a Dr. Burns context.
    // Skip product/brand assets — an "…by Dr. Burns" ebook/logo doesn't claim to depict him.
    if (drBurnsContext(mm) && meta.kind !== 'product' && meta.kind !== 'brand') {
      if (meta.isDrBurns === false)
        add('FAIL', slot, p, `shown as Dr. Burns but is ${meta.subject}`);
      else if (meta.isDrBurns === null)
        add('WARN', slot, p, `used in a Dr. Burns context but identity unverified (${meta.subject})`);
      else
        add('PASS', slot, p, `confirmed Dr. Burns (${meta.kind})`);
    }

    // RULE 2: hero must lead with Dr. Burns (or an intentional non-person scene)
    if (mm.sec === 'top' || /hero-bg/.test(HTML.slice(mm.idx - 120, mm.idx))) {
      if (meta.isDrBurns === true) add('PASS', slot, p, 'hero shows confirmed Dr. Burns');
      else if (meta.isDrBurns === false && meta.kind !== 'editorial')
        add('FAIL', slot, p, `hero face is not Dr. Burns (${meta.subject})`);
      else if (meta.isDrBurns === false)
        add('WARN', slot, p, `hero uses a non-Burns editorial shot (${meta.subject}) under "The Burns Protocol"`);
    }

    // RULE 3: before/after semantics
    if (mm.pill === 'before+after' || mm.pill === 'before') {
      if (meta.kind === 'after')
        add('FAIL', slot, p, 'labelled "Before" but the image is an AFTER-state smile');
      else if (meta.kind === 'before-after')
        add('PASS', slot, p, 'before/after pills on a genuine transformation clip');
    }

    // RULE 4: web-readiness (captioned / soft media) outside the FAQ grid
    if (meta.webReady === false && mm.sec !== 'questions') {
      add('WARN', slot, p, `not web-ready (${meta.note || 'baked-in captions'}) — re-export clean from source`);
    }
  }
}

// dedupe identical findings (same asset can appear as src+poster)
const seen = new Set();
const uniq = findings.filter(f => { const k = f.status + f.slot + f.asset + f.msg; if (seen.has(k)) return false; seen.add(k); return true; });

const tally = uniq.reduce((a, f) => ((a[f.status] = (a[f.status] || 0) + 1), a), {});
const w = { PASS: 1, WARN: 0.5, FAIL: 0 };
const scored = uniq.filter(f => f.status !== 'PASS' || true);
const score = Math.round((uniq.reduce((s, f) => s + w[f.status], 0) / uniq.length) * 1000) / 10;

const icon = { PASS: '✅', WARN: '⚠️ ', FAIL: '❌' };
console.log('\n  BURNS WEBSITE — MEDIA HARNESS');
console.log('  ' + '─'.repeat(60));
const order = { FAIL: 0, WARN: 1, PASS: 2 };
uniq.sort((a, b) => order[a.status] - order[b.status]);
for (const f of uniq) console.log(`  ${icon[f.status]} ${f.slot}  ${f.asset.split('/').pop()}\n        ${f.msg}`);
console.log('  ' + '─'.repeat(60));
console.log(`  media refs checked: ${checked}`);
console.log(`  PASS ${tally.PASS || 0}   WARN ${tally.WARN || 0}   FAIL ${tally.FAIL || 0}`);
console.log(`  MEDIA SCORE  ${score} / 100\n`);

writeFileSync(resolve(DIR, 'media-report.json'), JSON.stringify({ score, tally, checked, findings: uniq }, null, 2));
let md = `# Burns Website — Media Report\n\n**Score:** ${score}/100  \n**Refs checked:** ${checked}  \n**Tally:** ${tally.PASS || 0} pass · ${tally.WARN || 0} warn · ${tally.FAIL || 0} fail\n\n| | Slot | Asset | Issue |\n|---|---|---|---|\n`;
for (const f of uniq) md += `| ${icon[f.status]} | ${f.slot} | \`${f.asset.split('/').pop()}\` | ${f.msg} |\n`;
const fails = uniq.filter(f => f.status === 'FAIL');
md += `\n### Must-fix\n\n` + (fails.length ? fails.map(f => `- **${f.slot} \`${f.asset.split('/').pop()}\`** — ${f.msg}`).join('\n') + '\n' : '_None._\n');
writeFileSync(resolve(DIR, 'media-report.md'), md);
console.log('  Wrote media-report.json + media-report.md');
process.exit(fails.length ? 1 : 0);
