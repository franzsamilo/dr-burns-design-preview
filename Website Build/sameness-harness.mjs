#!/usr/bin/env node
// Cross-page sameness audit for the 14 rebuilt T2 pages + homepage T1 heading check.
import fs from 'node:fs';
import path from 'node:path';

const ROOT = '/Users/j/Library/Mobile Documents/iCloud~md~obsidian/Documents/Knowledge Base/3. Clients/Jeffrey Burns/Website Build';

const T2_PAGES = {
  'burns-protocol':          'theburnsprotocol/index.html',
  'confident':               'confidentdreamsmile/index.html',
  'wall-of-fame':            'dreamsmilewalloffame/index.html',
  'dental-implants':         'restorative-dentistry/dental-implants/index.html',
  'after-placement':         'restorative-dentistry/dental-implants/after-implant-placement/index.html',
  'bone-grafting':           'restorative-dentistry/dental-implants/bone-grafting-for-implants/index.html',
  'cost':                    'restorative-dentistry/dental-implants/cost-of-dental-implants/index.html',
  'faqs':                    'restorative-dentistry/dental-implants/dental-implants-faqs/index.html',
  'missing-all-teeth':       'restorative-dentistry/dental-implants/missing-all-upper-or-lower-teeth/index.html',
  'implant-placement':       'restorative-dentistry/dental-implants/overview-of-implant-placement/index.html',
  'replacing-missing-teeth': 'restorative-dentistry/dental-implants/replacing-missing-teeth/index.html',
  'teeth-in-a-day':          'restorative-dentistry/dental-implants/teeth-in-a-day/index.html',
  'implant-dentures':        'restorative-dentistry/dentures/implant-retained-dentures/index.html',
  'full-mouth':              'restorative-dentistry/full-mouth-reconstruction/index.html',
};

const HOME = 'index.html';

const decode = (s) => s
  .replace(/&trade;|&#8482;|™/g, '')
  .replace(/&reg;|&#174;|®/g, '')
  .replace(/&amp;/g, '&')
  .replace(/&nbsp;/g, ' ')
  .replace(/&#39;|&rsquo;|&#8217;|’/g, "'")
  .replace(/&ldquo;|&rdquo;|&#822[01];|[“”]/g, '"')
  .replace(/&hellip;/g, '...')
  .replace(/&[a-z#0-9]+;/gi, ' ');

const normHeading = (s) => decode(s)
  .replace(/<[^>]*>/g, ' ')
  .toLowerCase()
  .replace(/[^a-z0-9' ]+/g, ' ')
  .replace(/\s+/g, ' ')
  .trim();

// allowed identical headings across pages
const ALLOWED = new Set([
  'meet the doctor',
  'real results real patients',
]);

function extractHeadings(html) {
  const out = [];
  const re = /<h([23])[^>]*>([\s\S]*?)<\/h\1>/gi;
  let m;
  while ((m = re.exec(html))) {
    out.push({ level: +m[1], raw: m[2], norm: normHeading(m[2]), idx: m.index });
  }
  return out;
}

// find quiz-card headings: any h2/h3 inside an element region marked quizwrap/quiz-card/quiz
function quizHeadings(html, headings) {
  const set = new Set();
  // locate quiz region: from id="quiz" or class containing quizwrap to the close of that wrap (approx: next <section or 4000 chars)
  const starts = [];
  const re = /(id="quiz"|class="[^"]*\bquiz(?:wrap|-card)?\b[^"]*")/g;
  let m;
  while ((m = re.exec(html))) starts.push(m.index);
  for (const s of starts) {
    const end = s + 5000;
    for (const h of headings) {
      if (h.idx > s && h.idx < end) set.add(h.norm);
    }
  }
  return set;
}

// headings inside the Meet the Doctor section (the doctor's name H2 lives under the
// "Meet the Doctor" eyebrow; his name is allowed to repeat, per the Meet-the-Doctor allowance)
function doctorHeadings(html, headings) {
  const set = new Set();
  const re = /Meet the Doctor/g;
  let m;
  while ((m = re.exec(html))) {
    for (const h of headings) {
      if (h.idx > m.index && h.idx < m.index + 600) set.add(h.norm);
    }
  }
  return set;
}

function bodyWords(html) {
  let t = html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<!--[\s\S]*?-->/g, ' ')
    .replace(/<[^>]*>/g, ' ');
  t = decode(t).toLowerCase().replace(/[^a-z']+/g, ' ');
  const words = t.split(/\s+/).filter(w => w.length > 2);
  return new Set(words);
}

function jaccard(a, b) {
  let inter = 0;
  for (const w of a) if (b.has(w)) inter++;
  const uni = a.size + b.size - inter;
  return uni === 0 ? 0 : inter / uni;
}

// load pages
const pages = {};
for (const [key, rel] of Object.entries(T2_PAGES)) {
  const html = fs.readFileSync(path.join(ROOT, rel), 'utf8');
  const headings = extractHeadings(html);
  const quiz = quizHeadings(html, headings);
  const doc = doctorHeadings(html, headings);
  pages[key] = { rel, html, headings, quiz, doc, words: bodyWords(html) };
}

// uniqueTerms presence score, from briefs (keyword proxies per brief)
const UNIQUE_TERMS = {
  'burns-protocol': ['burns protocol', 'dreamsmile', 'facial harmony', 'bite alignment', 'predictable'],
  'confident': ['dreamsmile', '30 years', '3d imaging', 'in-house lab', 'real reaction'],
  'wall-of-fame': ['wall of fame', 'more than just beautiful smiles', '30 years', 'before-and-after', 'invest in themselves'],
  'dental-implants': ['titanium', 'abutment', 'single stage', 'extraction', 'implant guide'],
  'after-placement': ['transitional', 'numbness', '95 percent', 'abutment', 'clips'],
  'bone-grafting': ['sinus', 'socket', 'six month', 'graft material', 'inadequate bone'],
  'cost': ['consultation', 'checklist', '5-10 years', 'deteriorat', 'financing'],
  'faqs': ['osseointegration', 'cerec', '2 appointments', 'bone grafting', '3-d'],
  'missing-all-teeth': ['ball attachment', 'bar attachment', 'screw retained', 'individual implants', 'palate'],
  'implant-placement': ['30 to 60 minutes', 'healed bone', 'healing cap', 'soft tissue graft', 'one third'],
  'replacing-missing-teeth': ['25%', 'flipper', 'metal partial', 'ground down', 'radiation'],
  'teeth-in-a-day': ['nobel biocare', 'single procedure', 'flapless', 'cat scan', 'prosthesis'],
  'implant-dentures': ['ball attachment', 'overdenture', 'screw retained', 'palate', 'seeds'],
  'full-mouth': ['necessary series', 'acid-erosion', 'crown lengthening', 'temporary restorations', 'grafting'],
};

function uniqueTermScore(key) {
  const html = pages[key].html.toLowerCase().replace(/&#8209;|&ndash;|–/g, '-');
  const terms = UNIQUE_TERMS[key] || [];
  let n = 0;
  const missing = [];
  for (const t of terms) {
    if (html.includes(t)) n++; else missing.push(t);
  }
  return { score: n, total: terms.length, missing };
}

// pairwise
const keys = Object.keys(pages);
const results = [];
for (let i = 0; i < keys.length; i++) {
  for (let j = i + 1; j < keys.length; j++) {
    const a = keys[i], b = keys[j];
    const A = pages[a], B = pages[b];
    const setA = new Map(A.headings.map(h => [h.norm, h]));
    const shared = [];
    for (const h of B.headings) {
      if (!h.norm) continue;
      if (setA.has(h.norm)) {
        const allowed = ALLOWED.has(h.norm) || (A.quiz.has(h.norm) && B.quiz.has(h.norm)) || (A.doc.has(h.norm) && B.doc.has(h.norm));
        shared.push({ heading: h.norm, allowed });
      }
    }
    const dis = [...new Set(shared.filter(s => !s.allowed).map(s => s.heading))];
    const jac = jaccard(A.words, B.words);
    const fail = dis.length > 0 || jac > 0.40;
    results.push({ a, b, jaccard: +(jac * 100).toFixed(1), disallowedShared: dis, fail });
  }
}

const fails = results.filter(r => r.fail);
results.sort((x, y) => y.jaccard - x.jaccard);

console.log(`Pairs checked: ${results.length}`);
console.log(`Failing pairs: ${fails.length}`);
console.log('\nTop 12 jaccard pairs:');
for (const r of results.slice(0, 12)) {
  console.log(`  ${r.fail ? 'FAIL' : 'ok  '} ${r.a} <> ${r.b}  jaccard=${r.jaccard}%  disallowedShared=${r.disallowedShared.length}`);
}
console.log('\nAll failing pairs detail:');
for (const r of fails) {
  console.log(`\nFAIL ${r.a} <> ${r.b}  jaccard=${r.jaccard}%`);
  for (const h of r.disallowedShared) console.log(`   shared heading: "${h}"`);
  const sa = uniqueTermScore(r.a), sb = uniqueTermScore(r.b);
  console.log(`   uniqueTerms ${r.a}: ${sa.score}/${sa.total} missing=[${sa.missing}]`);
  console.log(`   uniqueTerms ${r.b}: ${sb.score}/${sb.total} missing=[${sb.missing}]`);
}

// homepage T1 heading conformance
const homeHtml = fs.readFileSync(path.join(ROOT, HOME), 'utf8');
const T1 = [
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
const homeNorm = normHeading(homeHtml.replace(/<script[\s\S]*?<\/script>/gi, ' ').replace(/<style[\s\S]*?<\/style>/gi, ' '));
console.log('\nHomepage T1 headings:');
let homeOk = true;
for (const t of T1) {
  const n = normHeading(t);
  const present = homeNorm.includes(n);
  if (!present) homeOk = false;
  console.log(`  ${present ? 'OK  ' : 'MISS'} ${t}`);
}
console.log(`Homepage conformance: ${homeOk ? 'YES' : 'NO'}`);

fs.writeFileSync(path.join(process.env.SCRATCH || '/tmp', 'sameness-results.json'), JSON.stringify({ results, fails, homeOk }, null, 2));
