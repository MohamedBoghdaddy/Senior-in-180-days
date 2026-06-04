#!/usr/bin/env node
/**
 * sync-tracker-to-roadmap.js — Senior-in-180-days
 *
 * Reads tracker/data/ JSON files plus an optional user progress export,
 * then writes generated sections back into roadmap markdown files.
 *
 * Generated sections are delimited with:
 *   <!-- TRACKER:START -->   ...   <!-- TRACKER:END -->
 *
 * Manual content outside those markers is NEVER touched.
 *
 * WORKFLOW (browser cannot write files directly):
 *   1. Run: npm run tracker:serve
 *   2. Open http://localhost:3456 in your browser
 *   2. Log daily progress, LeetCode, courses, AI artifacts, etc.
 *   3. Click "Export JSON" → save as tracker/data/progress.json
 *      (optionally save journal export as tracker/data/journal.json,
 *       and interview export as tracker/data/interviews.json)
 *   4. Run:  npm run tracker:validate
 *   5. Run:  npm run tracker:sync    (or npm run tracker:sync:with-progress)
 *   6. Commit tracker/data/*.json plus the generated markdown targets printed by the sync command, then push.
 *
 * Usage:
 *   node scripts/sync-tracker-to-roadmap.js
 *   node scripts/sync-tracker-to-roadmap.js --progress path/to/progress.json
 */

'use strict';

const fs   = require('fs');
const path = require('path');

const ROOT   = path.join(__dirname, '..');
const DATA   = path.join(ROOT, 'tracker', 'data');
const ENG    = path.join(ROOT, '180-days-fullstack-engineer');

// ── CLI args ──────────────────────────────────────────────────────────────────
const args = process.argv.slice(2);
const DRY_RUN = args.includes('--dry-run');
const progressIdx  = args.indexOf('--progress');
const progressFile = progressIdx !== -1 ? args[progressIdx + 1] : path.join(DATA, 'progress.json');
const dryRunChanges = [];

// ── Load JSON helpers ─────────────────────────────────────────────────────────
function load(file) {
  const p = path.join(DATA, file);
  if (!fs.existsSync(p)) return null;
  try { return JSON.parse(fs.readFileSync(p, 'utf8')); } catch { return null; }
}

function loadFile(filePath) {
  if (!fs.existsSync(filePath)) return null;
  try { return JSON.parse(fs.readFileSync(filePath, 'utf8')); } catch { return null; }
}

// ── Update a TRACKER section in a markdown file ───────────────────────────────
function updateSection(mdPath, content) {
  const rel = path.relative(ROOT, mdPath);
  if (!fs.existsSync(mdPath)) { console.log(`  skip (not found): ${rel}`); return; }

  const START = '<!-- TRACKER:START -->';
  const END   = '<!-- TRACKER:END -->';
  let src = fs.readFileSync(mdPath, 'utf8');
  const si = src.indexOf(START);
  const ei = src.indexOf(END);

  let updated;
  if (si === -1) {
    updated = src.trimEnd() + `\n\n${START}\n${content}\n${END}\n`;
  } else if (ei !== -1 && ei > si) {
    updated = src.slice(0, si + START.length) + '\n' + content + '\n' + src.slice(ei);
  } else {
    console.warn(`  warn: mismatched TRACKER markers in ${rel}`);
    return;
  }

  if (DRY_RUN) {
    if (updated !== src) {
      dryRunChanges.push(rel);
      console.log(`  would update: ${rel}`);
    } else {
      console.log(`  unchanged: ${rel}`);
    }
    return;
  }

  fs.writeFileSync(mdPath, updated, 'utf8');
  console.log(`  updated: ${rel}`);
}

function pct(done, total) { return total ? `${Math.round((done / total) * 100)}%` : '0%'; }
function pad(n) { return String(n).padStart(3, '0'); }
const TODAY = new Date().toISOString().split('T')[0];

// ── Load all source data ───────────────────────────────────────────────────────
const days          = load('days.json')           || [];
const courses       = load('courses.json')        || [];
const leetcode      = load('leetcode.json');
const artifacts     = load('artifacts.json');
const aiEng         = load('ai-engineering.json');
const systemDesign  = load('system-design.json');
const readiness     = load('readiness.json');
const journal       = load('journal.json');
const interviews    = load('interviews.json');
const progress      = loadFile(progressFile);
const startDate     = typeof progress?.meta?.startDate === 'string' && progress.meta.startDate.trim()
  ? progress.meta.startDate.trim()
  : null;

function weekId(week) {
  return `week-${String(week).padStart(2, '0')}`;
}

function isMetaKey(key) {
  return String(key).startsWith('_');
}

function mapByValidIds(raw, validIds, aliases = new Map()) {
  const clean = {};
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) return clean;
  Object.entries(raw).forEach(([key, value]) => {
    if (isMetaKey(key)) return;
    const id = aliases.get(String(key)) || String(key);
    if (validIds.has(id)) clean[id] = value;
  });
  return clean;
}

function trueCountByIds(map, validIds) {
  return [...validIds].filter(id => map[id] === true).length;
}

function numericScore(value) {
  const n = Number(value);
  return Number.isFinite(n) ? Math.max(0, Math.min(5, n)) : 0;
}

function systemDesignDone(value) {
  return value === true || value === 'drilled' || value === 'mock-ready';
}

const dayIds          = new Set(days.map(d => String(d.num)));
const courseIds       = new Set(courses.map(c => c.id));
const patternIds      = new Set((leetcode?.patterns || []).map(p => p.id));
const proofIds        = new Set((artifacts?.proofChecklist || []).map(p => p.id));
const miniProjectIds  = new Set((artifacts?.miniProjects || []).map(mp => mp.id || weekId(mp.week)));
const aiArtifactIds   = new Set((aiEng?.weeklyArtifacts || []).map(wa => wa.id || weekId(wa.week)));
const readinessIds    = new Set(Object.keys(readiness?.dimensions || {}));
const systemDesignIds = new Set((systemDesign?.topics || []).map(t => t.id));

const miniProjectAliases = new Map();
(artifacts?.miniProjects || []).forEach(mp => {
  const id = mp.id || weekId(mp.week);
  miniProjectAliases.set(String(mp.week), id);
});

const aiArtifactAliases = new Map();
(aiEng?.weeklyArtifacts || []).forEach(wa => {
  const id = wa.id || weekId(wa.week);
  aiArtifactAliases.set(String(wa.week), id);
});

const daysState      = mapByValidIds(progress?.days, dayIds);
const courseState    = mapByValidIds(progress?.courses, courseIds);
const patternState   = mapByValidIds(progress?.patterns, patternIds);
const portfolioState = mapByValidIds(progress?.portfolio, proofIds);
const mpState        = mapByValidIds(progress?.miniProjects, miniProjectIds, miniProjectAliases);
const aiArtState     = mapByValidIds(progress?.aiArtifacts, aiArtifactIds, aiArtifactAliases);
const aiReadState    = mapByValidIds(progress?.aiReadiness, readinessIds);
const sdState        = mapByValidIds(progress?.systemDesign, systemDesignIds);

// ── Computed helpers ──────────────────────────────────────────────────────────
function countDone(start, end) {
  let n = 0;
  for (let d = start; d <= end; d++) { const e = daysState[d]; if (e?.status === 'done') n++; }
  return n;
}

function lcSolved() {
  return Object.values(daysState).reduce((s, d) => {
    if (!d) return s;
    return s + (d.dsaEasy||0) + (d.dsaMedium||0) + (d.dsaHard||0);
  }, 0);
}

function lcByDiff() {
  let easy=0,medium=0,hard=0;
  Object.values(daysState).forEach(d => { if(!d) return; easy+=d.dsaEasy||0; medium+=d.dsaMedium||0; hard+=d.dsaHard||0; });
  return {easy,medium,hard};
}

// ── 1. progress.md — master tracker summary ───────────────────────────────────
console.log('\n📋 Syncing tracking/progress.md ...');
{
  const totalDone   = Object.values(daysState).filter(d => d?.status === 'done').length;
  const totalHours  = Object.values(daysState).reduce((s,d) => s + (d?.hours||0), 0);
  const lc          = lcSolved();
  const {easy,medium,hard} = lcByDiff();
  const artDone     = Object.values(daysState).filter(d => d?.artifactDone).length;
  const aiArtDone   = trueCountByIds(aiArtState, aiArtifactIds);

  const weekRows = Array.from({length:18}, (_,i) => {
    const w = i+1, s = (w-1)*10+1, e = w*10;
    const done = countDone(s, e);
    let dsa = 0;
    for (let d = s; d <= e; d++) { const en = daysState[d]; if(en) dsa += (en.dsaEasy||0)+(en.dsaMedium||0)+(en.dsaHard||0); }
    const aiId = aiArtifactAliases.get(String(w)) || weekId(w);
    const aiDone = aiArtState[aiId] === true ? '✅' : '⬜';
    const weekData = days.find(d => d.num === s);
    const focus = weekData?.focus?.substring(0,35) || '';
    return `| W${String(w).padStart(2,'0')} | ${done}/10 | ${pct(done,10)} | ${dsa} | ${aiDone} | ${focus} |`;
  }).join('\n');

  const content = `## Tracker Summary
> Generated: ${TODAY}  |  Repo: Senior-in-180-days

| Metric | Value |
|--------|-------|
| Days completed | **${totalDone}** / 180 |
| Start date | **${startDate || 'not set'}** |
| Progress | **${pct(totalDone,180)}** |
| Focus hours | **${totalHours.toFixed(1)}** |
| LeetCode | **${lc}** / 500 (E:${easy} M:${medium} H:${hard}) |
| Artifacts committed | **${artDone}** |
| AI artifacts done | **${aiArtDone}** / 18 |

### Weekly Breakdown

| Week | Done | Pct | DSA | AI Art | First Task |
|------|------|-----|-----|--------|------------|
${weekRows}`;

  updateSection(path.join(ENG, 'tracking', 'progress.md'), content);
}

// ── 2. resources / courses ────────────────────────────────────────────────────
console.log('\n📚 Syncing tracking/topic-priority-map.md (courses) ...');
if (courses.length) {
  const rows = courses.map(c => {
    const s  = courseState[c.id] || 'todo';
    const ic = s==='done'?'✅':s==='in-progress'?'🔄':'⬜';
    return `| ${c.name} | ${c.provider} | M${c.month} | ${c.cert} | ${ic} ${s} |`;
  }).join('\n');
  const done  = courses.filter(c => courseState[c.id]==='done').length;
  const inprog = courses.filter(c => courseState[c.id]==='in-progress').length;

  const content = `## Course Status
> Generated: ${TODAY}  |  ${done} done · ${inprog} in progress · ${courses.length - done - inprog} todo

| Course | Provider | Month | Cert | Status |
|--------|----------|-------|------|--------|
${rows}`;

  updateSection(path.join(ENG, 'tracking', 'topic-priority-map.md'), content);
}

// ── 3. LeetCode / interview prep ──────────────────────────────────────────────
console.log('\n🔢 Syncing interview-prep/leetcode-plan.md (progress section) ...');
if (leetcode) {
  const lc = lcSolved();
  const {easy,medium,hard} = lcByDiff();

  const weekRows = leetcode.weeks.map(w => {
    let solved=0;
    for(let d=(w.week-1)*10+1; d<=w.week*10; d++){
      const en=daysState[d]; if(en) solved+=(en.dsaEasy||0)+(en.dsaMedium||0)+(en.dsaHard||0);
    }
    const pctW = pct(solved, w.target);
    const bar  = '█'.repeat(Math.floor(solved/w.target*10)).padEnd(10,'░');
    return `| W${String(w.week).padStart(2,'0')} | ${w.focus.substring(0,35)} | ${solved}/${w.target} | ${pctW} | ${bar} |`;
  }).join('\n');

  const patRows = leetcode.patterns?.map(p => {
    const m  = Math.max(0, Math.min(4, Number(patternState[p.id]) || 0));
    const stars = '★'.repeat(m) + '☆'.repeat(4-m);
    return `| ${p.name} | ${stars} | ${m}/4 |`;
  }).join('\n') || '';

  const content = `## Progress Snapshot
> Generated: ${TODAY}

**${lc} / 500** solved  ·  Easy: ${easy}  ·  Medium: ${medium}  ·  Hard: ${hard}  ·  ${pct(lc,500)}

### Weekly Progress

| Week | Focus | Solved | Pct | Bar |
|------|-------|--------|-----|-----|
${weekRows}

### Pattern Mastery (0-4 stars)

| Pattern | Mastery | Level |
|---------|---------|-------|
${patRows}`;

  updateSection(path.join(ENG, 'interview-prep', 'leetcode-plan.md'), content);
}

// ── 4. Mock interviews ────────────────────────────────────────────────────────
console.log('\n🎤 Syncing interview-prep/mock-interview-rubric.md ...');
if (interviews) {
  const fmt = (arr, type) => arr.length === 0
    ? `*No ${type} sessions logged yet.*`
    : arr.map(m => `- **${m.date||'?'}** | ${m.topic||'?'} | ${m.result||'?'}${m.notes ? ' | '+m.notes : ''}`).join('\n');

  const content = `## Mock Interview Log
> Generated: ${TODAY}

### Coding Mocks (${(interviews.coding||[]).length})
${fmt(interviews.coding||[], 'coding')}

### System Design Mocks (${(interviews.systemDesign||[]).length})
${fmt(interviews.systemDesign||[], 'system design')}

### Behavioral Mocks (${(interviews.behavioral||[]).length})
${fmt(interviews.behavioral||[], 'behavioral')}`;

  updateSection(path.join(ENG, 'interview-prep', 'mock-interview-rubric.md'), content);
}

// ── 5. AI engineering tracking ────────────────────────────────────────────────
console.log('\n🤖 Syncing ai-engineering/README.md ...');
if (aiEng) {
  const rows = aiEng.weeklyArtifacts.map(wa => {
    const id = wa.id || weekId(wa.week);
    const done = aiArtState[id] === true ? '✅' : '⬜';
    return `| W${String(wa.week).padStart(2,'0')} | ${wa.aiLayer.substring(0,45)} | ${done} |`;
  }).join('\n');
  const done = trueCountByIds(aiArtState, aiArtifactIds);

  const content = `## Weekly AI Artifacts
> Generated: ${TODAY}  |  ${done} / 18 complete

| Week | AI Layer | Done |
|------|----------|------|
${rows}`;

  updateSection(path.join(ENG, 'ai-engineering', 'README.md'), content);
}

// ── 6. Portfolio proof checklist ──────────────────────────────────────────────
console.log('\n🏗  Syncing portfolio/proof-checklist.md ...');
if (artifacts?.proofChecklist) {
  const proofDone = artifacts.proofChecklist.filter(p => portfolioState[p.id]).length;
  const rows = artifacts.proofChecklist.map(p => {
    const done = portfolioState[p.id] ? '- [x]' : '- [ ]';
    return `| ${p.label} | \`path-or-url\` | ${done} |`;
  }).join('\n');

  const mpRows = artifacts.miniProjects?.map(mp => {
    const id = mp.id || weekId(mp.week);
    const done = mpState[id] === true ? '- [x]' : '- [ ]';
    return `| Week ${mp.week} | ${mp.title} | ${done} |`;
  }).join('\n') || '';

  const content = `## Portfolio Proof Checklist
> Generated: ${TODAY}  |  ${proofDone} / ${artifacts.proofChecklist.length} complete

| Proof | Evidence | Complete |
|-------|----------|----------|
${rows}

## Mini-Projects (${trueCountByIds(mpState, miniProjectIds)} / 18)

| Week | Project | Complete |
|------|---------|----------|
${mpRows}`;

  updateSection(path.join(ENG, 'portfolio', 'proof-checklist.md'), content);
}

// ── 7. System design topics ───────────────────────────────────────────────────
console.log('\n🏗  Syncing interview-prep/system-design-question-bank.md ...');
if (systemDesign?.topics) {
  const rows = systemDesign.topics.map(t => {
    const status = sdState[t.id] || 'not-started';
    const label = status === true ? 'drilled' : status;
    return `| ${t.name} | ${t.category} | ${t.difficulty||'?'} | ${label} |`;
  }).join('\n');
  const drillDone = [...systemDesignIds].filter(id => systemDesignDone(sdState[id])).length;

  const content = `## System Design Topics
> Generated: ${TODAY}  |  ${drillDone} drilled

| Topic | Category | Difficulty | Status |
|-------|----------|------------|--------|
${rows}`;

  updateSection(path.join(ENG, 'interview-prep', 'system-design-question-bank.md'), content);
}

// ── 8. Journal / proof logs ───────────────────────────────────────────────────
console.log('\n📓 Syncing tracking/reminders.md (journal summary) ...');
if (journal?.entries && journal.entries.length > 0) {
  const grouped = {};
  journal.entries.forEach(e => {
    const t = e.type || 'general';
    if (!grouped[t]) grouped[t] = [];
    grouped[t].push(e);
  });

  const sections = Object.entries(grouped).map(([type, entries]) => {
    const rows = entries.slice(-5).map(e =>
      `- **Day ${e.day||'?'}** (${e.date||'?'}): ${(e.text||'').substring(0,80)}${(e.text||'').length>80?'…':''}`
    ).join('\n');
    return `### ${type.charAt(0).toUpperCase()+type.slice(1)} (last ${Math.min(5,entries.length)} of ${entries.length})\n${rows}`;
  }).join('\n\n');

  const content = `## Journal Summary
> Generated: ${TODAY}  |  ${journal.entries.length} total entries

${sections}`;

  updateSection(path.join(ENG, 'tracking', 'reminders.md'), content);
}

// ── 9. Readiness scorecard ────────────────────────────────────────────────────
console.log('\n📊 Syncing career-prep/applied-ai-readiness-scorecard.md ...');
if (readiness?.dimensions) {
  const rows = Object.entries(readiness.dimensions).map(([key, dim]) => {
    const score = numericScore(aiReadState[key]);
    const stars = '★'.repeat(score) + '☆'.repeat(5-score);
    return `| ${dim.label || key} | ${stars} | ${score}/5 |`;
  }).join('\n');

  const content = `## Readiness Scores
> Generated: ${TODAY}

| Dimension | Mastery | Score |
|-----------|---------|-------|
${rows}

> **Ready threshold:** RAG, Evals, AI product judgment, and AI ops at 4 or higher.`;

  updateSection(path.join(ENG, 'career-prep', 'applied-ai-readiness-scorecard.md'), content);
}

if (DRY_RUN) {
  console.log('\nDry run complete.\n');
  if (dryRunChanges.length) {
    console.error('Generated tracker markdown is out of date. Run npm run tracker:sync and commit the results.');
    console.error('Files that would change:');
    dryRunChanges.forEach(file => console.error(`  ${file}`));
    process.exit(1);
  }
  console.log('Generated tracker markdown is up to date.\n');
  process.exit(0);
}

// ── Done ──────────────────────────────────────────────────────────────────────
console.log('\n✅ Sync complete.\n');
console.log('Next steps:');
console.log('  git add tracker/data/*.json');
console.log('  git add 180-days-fullstack-engineer/tracking/progress.md');
console.log('  git add 180-days-fullstack-engineer/tracking/topic-priority-map.md');
console.log('  git add 180-days-fullstack-engineer/interview-prep/leetcode-plan.md');
console.log('  git add 180-days-fullstack-engineer/interview-prep/mock-interview-rubric.md');
console.log('  git add 180-days-fullstack-engineer/interview-prep/system-design-question-bank.md');
console.log('  git add 180-days-fullstack-engineer/ai-engineering/README.md');
console.log('  git add 180-days-fullstack-engineer/portfolio/proof-checklist.md');
console.log('  git add 180-days-fullstack-engineer/career-prep/applied-ai-readiness-scorecard.md');
console.log('  git commit -m "chore(tracker): sync progress"');
console.log('  git push\n');
