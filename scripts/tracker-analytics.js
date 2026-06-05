#!/usr/bin/env node
/**
 * Print progress analytics from tracker/data/progress.json.
 */

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const DATA = path.join(ROOT, 'tracker', 'data');

function load(file) {
  return JSON.parse(fs.readFileSync(path.join(DATA, file), 'utf8'));
}

function pct(done, total) {
  return total ? Math.round((done / total) * 100) : 0;
}

function addDays(date, offset) {
  const d = new Date(`${date}T00:00:00Z`);
  d.setUTCDate(d.getUTCDate() + offset);
  return d.toISOString().slice(0, 10);
}

const progress = load('progress.json');
const days = load('days.json');
const leetcode = load('leetcode.json');
const artifacts = load('artifacts.json');

const dayState = progress.days || {};
const doneDays = Object.entries(dayState).filter(([, value]) => value?.status === 'done');
const doneCount = doneDays.length;
const lastLoggedDay = doneDays.reduce((max, [day]) => Math.max(max, Number(day)), 0);
const totalHours = Object.values(dayState).reduce((sum, value) => sum + (value?.hours || 0), 0);
const lcSolved = Object.values(dayState).reduce((sum, value) => {
  if (!value) return sum;
  return sum + (value.dsaEasy || 0) + (value.dsaMedium || 0) + (value.dsaHard || 0);
}, 0);

const elapsed = progress.meta?.startDate
  ? Math.max(1, Math.min(180, Math.floor((Date.now() - new Date(`${progress.meta.startDate}T00:00:00Z`)) / 86400000) + 1))
  : lastLoggedDay;
const dayPace = elapsed ? doneCount / elapsed : 0;
const lcPace = elapsed ? lcSolved / elapsed : 0;
const projectedFinishDay = dayPace ? Math.ceil(180 / dayPace) : null;
const projectedLcDay = lcPace ? Math.ceil((leetcode.target || 500) / lcPace) : null;
const proofLinks = Object.values(progress.proofLinks || {}).filter(link => link && (link.url || link.issue || link.pr)).length;

const analytics = {
  generatedAt: new Date().toISOString(),
  startDate: progress.meta?.startDate || null,
  doneDays: doneCount,
  roadmapCompletionPct: pct(doneCount, days.length),
  focusHours: Number(totalHours.toFixed(1)),
  averageHoursPerDoneDay: doneCount ? Number((totalHours / doneCount).toFixed(2)) : 0,
  leetcodeSolved: lcSolved,
  leetcodeTarget: leetcode.target || 500,
  leetcodeCompletionPct: pct(lcSolved, leetcode.target || 500),
  problemLogEntries: (progress.problemLog || []).length,
  proofLinks,
  proofLinkCoveragePct: pct(proofLinks, artifacts.proofChecklist?.length || 0),
  projectedFinishDate: progress.meta?.startDate && projectedFinishDay ? addDays(progress.meta.startDate, projectedFinishDay - 1) : null,
  projectedLeetCodeTargetDay: projectedLcDay,
  pace: {
    doneDaysPerElapsedDay: Number(dayPace.toFixed(3)),
    leetcodePerElapsedDay: Number(lcPace.toFixed(3))
  }
};

if (process.argv.includes('--json')) {
  console.log(JSON.stringify(analytics, null, 2));
} else {
  console.log('\nTracker Analytics');
  console.log('-----------------');
  console.log(`Days completed: ${analytics.doneDays}/${days.length} (${analytics.roadmapCompletionPct}%)`);
  console.log(`Focus hours: ${analytics.focusHours} (${analytics.averageHoursPerDoneDay}h / done day)`);
  console.log(`LeetCode: ${analytics.leetcodeSolved}/${analytics.leetcodeTarget} (${analytics.leetcodeCompletionPct}%)`);
  console.log(`Problem log entries: ${analytics.problemLogEntries}`);
  console.log(`Proof links: ${analytics.proofLinks}/${artifacts.proofChecklist?.length || 0} (${analytics.proofLinkCoveragePct}%)`);
  console.log(`Projected finish: ${analytics.projectedFinishDate || 'not enough data'}`);
  console.log(`Projected LeetCode target day: ${analytics.projectedLeetCodeTargetDay || 'not enough data'}\n`);
}
