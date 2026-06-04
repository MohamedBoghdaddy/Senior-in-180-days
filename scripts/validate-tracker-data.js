#!/usr/bin/env node
/**
 * validate-tracker-data.js — Senior-in-180-days
 * Validates every JSON file in tracker/data/ for completeness and referential integrity.
 * Run: node scripts/validate-tracker-data.js
 */

'use strict';

const fs   = require('fs');
const path = require('path');

const ROOT     = path.join(__dirname, '..');
const DATA_DIR = path.join(ROOT, 'tracker', 'data');

let errorCount   = 0;
let warningCount = 0;

const fail = msg => { console.error(`  ✗ ${msg}`); errorCount++; };
const warn = msg  => { console.warn(`  ⚠  ${msg}`); warningCount++; };
const ok   = msg  => { console.log(`  ✓ ${msg}`); };

function loadJSON(file) {
  const p = path.join(DATA_DIR, file);
  if (!fs.existsSync(p)) { fail(`Missing file: tracker/data/${file}`); return null; }
  try   { return JSON.parse(fs.readFileSync(p, 'utf8')); }
  catch (e) { fail(`Invalid JSON in tracker/data/${file}: ${e.message}`); return null; }
}

// ── Load all files ────────────────────────────────────────────────────────────
const FILES = ['days.json','courses.json','leetcode.json','skills.json',
               'artifacts.json','ai-engineering.json','system-design.json',
               'readiness.json','progress.json','journal.json','interviews.json'];

const loaded = {};
FILES.forEach(f => { loaded[f.replace('.json','')] = loadJSON(f); });

// ── 1. days.json ──────────────────────────────────────────────────────────────
console.log('\n📋 days.json');
const days = loaded['days'];
if (days) {
  if (!Array.isArray(days)) { fail('Must be an array'); }
  else {
    if (days.length !== 180) fail(`Expected 180 days, found ${days.length}`); else ok('180 days present');

    const dayNums = new Set();
    let totalDSA = 0;
    days.forEach((d, i) => {
      if (typeof d.num !== 'number') fail(`Entry ${i}: 'num' must be a number`);
      if (dayNums.has(d.num))        fail(`Day ${d.num}: duplicate day number`);
      dayNums.add(d.num);
      if (!d.focus)    warn(`Day ${d.num}: missing 'focus'`);
      if (!d.artifact) warn(`Day ${d.num}: missing 'artifact'`);
      if (!d.dsa || typeof d.dsa.target !== 'number') fail(`Day ${d.num}: invalid dsa object`);
      if (typeof d.week  !== 'number' || d.week  < 1 || d.week  > 18) fail(`Day ${d.num}: week must be 1-18, got ${d.week}`);
      if (typeof d.month !== 'number' || d.month < 1 || d.month > 6 ) fail(`Day ${d.num}: month must be 1-6, got ${d.month}`);
      totalDSA += (d.dsa.target || 0);
    });

    if (totalDSA === 500) ok(`DSA totals exactly 500`);
    else warn(`DSA totals ${totalDSA}, expected 500`);

    // week/month consistency
    for (let d = 1; d <= 180; d++) {
      const entry = days.find(e => e.num === d);
      if (!entry) { fail(`Day ${d} not found`); continue; }
      const expectedWeek  = Math.ceil(d / 10);
      const expectedMonth = Math.ceil(d / 30);
      if (entry.week  !== expectedWeek)  fail(`Day ${d}: week ${entry.week} ≠ expected ${expectedWeek}`);
      if (entry.month !== expectedMonth) fail(`Day ${d}: month ${entry.month} ≠ expected ${expectedMonth}`);
    }
    ok('All week/month mappings valid');
  }
}

// ── 2. courses.json ───────────────────────────────────────────────────────────
console.log('\n📚 courses.json');
const courses = loaded['courses'];
let courseIds = new Set();
if (courses) {
  if (!Array.isArray(courses)) { fail('Must be an array'); }
  else {
    ok(`${courses.length} courses`);
    courses.forEach(c => {
      if (!c.id)   fail(`Course missing 'id'`);
      if (courseIds.has(c.id)) fail(`Duplicate course id: ${c.id}`);
      courseIds.add(c.id);
      if (!c.name) warn(`Course ${c.id}: missing 'name'`);
      if (!c.link) warn(`Course ${c.id}: missing 'link'`);
      if (!['free','aid','none'].includes(c.cert)) warn(`Course ${c.id}: cert should be free/aid/none`);
    });
    ok('Course IDs unique');
  }
}

// ── 3. leetcode.json ──────────────────────────────────────────────────────────
console.log('\n🔢 leetcode.json');
const lc = loaded['leetcode'];
if (lc) {
  if (lc.target !== 500) fail(`target must be 500, got ${lc.target}`); else ok('target = 500');
  if (!Array.isArray(lc.patterns)) fail('patterns must be an array');
  else { ok(`${lc.patterns.length} patterns defined`); }
  if (!Array.isArray(lc.weeks)) fail('weeks must be an array');
  else {
    if (lc.weeks.length !== 18) fail(`Expected 18 week entries, got ${lc.weeks.length}`); else ok('18 weeks');
    const weekTotal = lc.weeks.reduce((s, w) => s + (w.target || 0), 0);
    if (weekTotal === 500) ok(`Week targets sum to 500`);
    else fail(`Week targets sum to ${weekTotal}, expected 500`);
  }
}

// ── 4. skills.json ────────────────────────────────────────────────────────────
console.log('\n🎯 skills.json');
const skills = loaded['skills'];
if (skills) {
  if (!skills.fullStack || !skills.aiEngineering) fail('Must have fullStack and aiEngineering keys');
  else {
    ok(`${skills.fullStack.phases?.length || 0} full-stack phases`);
    ok(`${skills.aiEngineering.stages?.length || 0} AI engineering stages`);
  }
}

// ── 5. artifacts.json ─────────────────────────────────────────────────────────
console.log('\n📦 artifacts.json');
const artifacts = loaded['artifacts'];
let artifactIds = new Set();
if (artifacts) {
  if (!Array.isArray(artifacts.proofChecklist)) fail('proofChecklist must be an array');
  else {
    if (artifacts.proofChecklist.length !== 30) warn(`Expected 30 proof items, got ${artifacts.proofChecklist.length}`);
    else ok('30 proof items');
    artifacts.proofChecklist.forEach(p => {
      if (!p.id)    fail(`Proof item missing 'id'`);
      if (artifactIds.has(p.id)) fail(`Duplicate proof id: ${p.id}`);
      artifactIds.add(p.id);
      if (!p.label) warn(`Proof ${p.id}: missing 'label'`);
    });
    ok('Proof IDs unique');
  }
  if (!Array.isArray(artifacts.miniProjects)) fail('miniProjects must be an array');
  else {
    if (artifacts.miniProjects.length !== 18) fail(`Expected 18 mini-projects, got ${artifacts.miniProjects.length}`);
    else ok('18 mini-projects');
  }
  if (Array.isArray(artifacts.templates)) ok(`${artifacts.templates.length} templates catalogued`);
}

// ── 6. ai-engineering.json ────────────────────────────────────────────────────
console.log('\n🤖 ai-engineering.json');
const aiEng = loaded['ai-engineering'];
if (aiEng) {
  if (!Array.isArray(aiEng.weeklyArtifacts)) fail('weeklyArtifacts must be an array');
  else {
    if (aiEng.weeklyArtifacts.length !== 18) fail(`Expected 18 weekly artifacts, got ${aiEng.weeklyArtifacts.length}`);
    else ok('18 weekly AI artifacts');
    const weeks = aiEng.weeklyArtifacts.map(w => w.week);
    const uniqueWeeks = new Set(weeks);
    if (uniqueWeeks.size !== 18) fail('Duplicate week numbers in weeklyArtifacts');
    else ok('Weekly artifact week numbers unique');
  }
  if (aiEng.topicAreas) ok(`${Object.keys(aiEng.topicAreas).length} AI topic areas`);
  if (Array.isArray(aiEng.productionChecklist)) ok(`${aiEng.productionChecklist.length} production checklist items`);
}

// ── 7. system-design.json ─────────────────────────────────────────────────────
console.log('\n🏗  system-design.json');
const sd = loaded['system-design'];
if (sd) {
  if (!Array.isArray(sd.topics)) fail('topics must be an array');
  else {
    ok(`${sd.topics.length} system design topics`);
    const sdIds = new Set();
    sd.topics.forEach(t => {
      if (!t.id)   fail(`Topic missing 'id'`);
      if (sdIds.has(t.id)) fail(`Duplicate topic id: ${t.id}`);
      sdIds.add(t.id);
    });
    ok('Topic IDs unique');
  }
}

// ── 8. readiness.json ─────────────────────────────────────────────────────────
console.log('\n📊 readiness.json');
const readiness = loaded['readiness'];
if (readiness) {
  const dims = Object.keys(readiness.dimensions || {});
  if (dims.length === 0) fail('No dimensions defined');
  else ok(`${dims.length} readiness dimensions: ${dims.join(', ')}`);
  if (!readiness.thresholds) warn('Missing thresholds');
}

// ── 9. Cross-file reference checks ────────────────────────────────────────────
console.log('\n🔗 Cross-file reference checks');
if (days && lc && Array.isArray(lc.weeks)) {
  lc.weeks.forEach(w => {
    const dayRange = days.filter(d => d.week === w.week);
    if (dayRange.length !== 10) warn(`Week ${w.week}: expected 10 days, found ${dayRange.length}`);
    const dsaSum = dayRange.reduce((s, d) => s + (d.dsa.target || 0), 0);
    if (dsaSum !== w.target) warn(`Week ${w.week}: days.json DSA sum ${dsaSum} ≠ leetcode.json target ${w.target}`);
  });
  ok('LeetCode week targets validated against days.json');
}

if (days && aiEng && Array.isArray(aiEng.weeklyArtifacts)) {
  aiEng.weeklyArtifacts.forEach(wa => {
    const firstDay = days.find(d => d.week === wa.week && d.num === (wa.week - 1) * 10 + 1);
    if (firstDay && firstDay.aiArtifact !== wa.artifact) {
      warn(`Week ${wa.week}: ai-engineering.json artifact ≠ days.json aiArtifact`);
    }
  });
  ok('AI artifact cross-reference check complete');
}

// ── 10. progress.json schema check ───────────────────────────────────────────
console.log('\n💾 progress.json');
const prog = loaded['progress'];
if (prog) {
  if (!prog.meta) warn('Missing meta block');
  else ok('meta block present');
  if (prog.meta && prog.meta.repo !== 'Senior-in-180-days') warn(`meta.repo should be 'Senior-in-180-days', got '${prog.meta.repo}'`);
  else ok("meta.repo = 'Senior-in-180-days'");
}

// ── 11. journal.json ─────────────────────────────────────────────────────────
console.log('\n📓 journal.json');
const journal = loaded['journal'];
if (journal) {
  if (!Array.isArray(journal.entries)) fail('entries must be an array');
  else ok(`${journal.entries.length} journal entries`);
}

// ── 12. interviews.json ───────────────────────────────────────────────────────
console.log('\n🎤 interviews.json');
const interviews = loaded['interviews'];
if (interviews) {
  ['coding','systemDesign','behavioral'].forEach(t => {
    if (!Array.isArray(interviews[t])) fail(`interviews.${t} must be an array`);
    else ok(`${interviews[t].length} ${t} sessions`);
  });
}

// ── Summary ───────────────────────────────────────────────────────────────────
console.log('\n' + '─'.repeat(55));
if (errorCount === 0 && warningCount === 0) {
  console.log('✅ All checks passed — tracker/data is valid.\n');
  process.exit(0);
} else {
  const e = errorCount   > 0 ? `❌ ${errorCount} error(s)` : '✅ 0 errors';
  const w = warningCount > 0 ? `⚠  ${warningCount} warning(s)` : '0 warnings';
  console.log(`\n${e}   ${w}\n`);
  process.exit(errorCount > 0 ? 1 : 0);
}
