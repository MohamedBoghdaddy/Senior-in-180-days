#!/usr/bin/env node
/**
 * validate-tracker-data.js - Senior-in-180-days
 * Validates tracker/data catalogs plus exported progress maps.
 */

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const DATA_DIR = path.join(ROOT, 'tracker', 'data');
const ROADMAP_DIR = path.join(ROOT, '180-days-fullstack-engineer');

let errorCount = 0;
let warningCount = 0;

const fail = msg => { console.error(`  x ${msg}`); errorCount++; };
const warn = msg => { console.warn(`  ! ${msg}`); warningCount++; };
const ok = msg => { console.log(`  ok ${msg}`); };

function loadJSON(file) {
  const p = path.join(DATA_DIR, file);
  if (!fs.existsSync(p)) {
    fail(`Missing file: tracker/data/${file}`);
    return null;
  }
  try {
    return JSON.parse(fs.readFileSync(p, 'utf8'));
  } catch (error) {
    fail(`Invalid JSON in tracker/data/${file}: ${error.message}`);
    return null;
  }
}

function isObject(value) {
  return value && typeof value === 'object' && !Array.isArray(value);
}

function isMetaKey(key) {
  return String(key).startsWith('_');
}

function weekId(week) {
  return `week-${String(week).padStart(2, '0')}`;
}

function uniqueIdCheck(items, label, idSelector = item => item.id) {
  const ids = new Set();
  (items || []).forEach((item, index) => {
    const id = idSelector(item);
    if (!id) fail(`${label} entry ${index}: missing id`);
    else if (ids.has(id)) fail(`${label}: duplicate id '${id}'`);
    else ids.add(id);
  });
  return ids;
}

function pathInsideRoadmap(relPath) {
  if (typeof relPath !== 'string' || relPath.trim() === '') return null;
  const resolved = path.resolve(ROADMAP_DIR, relPath);
  return resolved.startsWith(ROADMAP_DIR + path.sep) || resolved === ROADMAP_DIR ? resolved : null;
}

function validateRoadmapPath(relPath, label, status = 'current') {
  const allowedStatus = new Set(['current', 'existing', 'planned']);
  if (status && !allowedStatus.has(status)) fail(`${label}: invalid status '${status}'`);
  const resolved = pathInsideRoadmap(relPath);
  if (!resolved) {
    fail(`${label}: path must resolve inside 180-days-fullstack-engineer (${relPath})`);
    return;
  }
  if (status === 'planned') {
    ok(`${label}: planned path recorded`);
    return;
  }
  if (!fs.existsSync(resolved)) fail(`${label}: missing file ${relPath}`);
}

function validateProgressMap(name, raw, validIds, validateValue, aliases = new Map()) {
  if (!isObject(raw)) {
    fail(`progress.${name} must be an object map`);
    return;
  }

  let realKeys = 0;
  Object.entries(raw).forEach(([key, value]) => {
    if (isMetaKey(key)) return;
    realKeys++;

    const canonical = aliases.get(String(key)) || String(key);
    if (!validIds.has(canonical)) {
      fail(`progress.${name}: invalid id '${key}'`);
      return;
    }
    if (aliases.has(String(key)) && String(key) !== canonical) {
      warn(`progress.${name}: legacy key '${key}' maps to '${canonical}'; export again from tracker UI`);
    }
    validateValue(value, canonical, key);
  });
  ok(`progress.${name}: ${realKeys} real key(s), metadata ignored`);
}

function numberInRange(value, min, max) {
  return typeof value === 'number' && Number.isFinite(value) && value >= min && value <= max;
}

const FILES = [
  'days.json',
  'courses.json',
  'leetcode.json',
  'skills.json',
  'artifacts.json',
  'ai-engineering.json',
  'system-design.json',
  'readiness.json',
  'progress.json',
  'journal.json',
  'interviews.json',
  'portfolio.json'
];

const loaded = {};
FILES.forEach(file => {
  loaded[file.replace('.json', '')] = loadJSON(file);
});

console.log('\ndays.json');
const days = loaded.days;
let dayIds = new Set();
if (days) {
  if (!Array.isArray(days)) fail('days.json must be an array');
  else {
    if (days.length === 180) ok('180 days present');
    else fail(`Expected 180 days, found ${days.length}`);

    dayIds = uniqueIdCheck(days, 'days', day => String(day.num));
    let totalDSA = 0;
    for (let day = 1; day <= 180; day++) {
      if (!dayIds.has(String(day))) fail(`Day ${day} not found`);
    }
    days.forEach((day, index) => {
      if (typeof day.num !== 'number') fail(`days entry ${index}: num must be a number`);
      if (day.week !== Math.ceil(day.num / 10)) fail(`Day ${day.num}: week ${day.week} != expected ${Math.ceil(day.num / 10)}`);
      if (day.month !== Math.ceil(day.num / 30)) fail(`Day ${day.num}: month ${day.month} != expected ${Math.ceil(day.num / 30)}`);
      if (!day.focus) warn(`Day ${day.num}: missing focus`);
      if (!day.artifact) warn(`Day ${day.num}: missing artifact`);
      if (!isObject(day.dsa) || typeof day.dsa.target !== 'number') fail(`Day ${day.num}: invalid dsa object`);
      else {
        totalDSA += day.dsa.target;
        if ((day.dsa.easy || 0) + (day.dsa.medium || 0) + (day.dsa.hard || 0) !== day.dsa.target) {
          fail(`Day ${day.num}: dsa easy+medium+hard must equal target`);
        }
      }

      const dayReadme = path.join(
        ROADMAP_DIR,
        `week-${String(day.week).padStart(2, '0')}`,
        `day-${String(day.num).padStart(2, '0')}`,
        'README.md'
      );
      if (!fs.existsSync(dayReadme)) fail(`Day ${day.num}: missing day README`);
    });
    if (totalDSA === 500) ok('DSA totals exactly 500');
    else fail(`DSA totals ${totalDSA}, expected 500`);
  }
}

console.log('\ncourses.json');
const courses = loaded.courses;
let courseIds = new Set();
if (courses) {
  if (!Array.isArray(courses)) fail('courses.json must be an array');
  else {
    courseIds = uniqueIdCheck(courses, 'courses');
    const validCert = new Set(['free', 'aid', 'none', 'paid']);
    const validType = new Set(['primary', 'tier-a', 'tier-b', 'supplementary']);
    courses.forEach(course => {
      if (!course.name) warn(`Course ${course.id}: missing name`);
      if (!course.link) warn(`Course ${course.id}: missing link`);
      if (!validCert.has(course.cert)) fail(`Course ${course.id}: invalid cert '${course.cert}'`);
      if (!validType.has(course.type)) fail(`Course ${course.id}: invalid type '${course.type}'`);
      if (!numberInRange(course.month, 1, 6)) fail(`Course ${course.id}: month must be 1-6`);
      if (!Array.isArray(course.weeks) || course.weeks.some(week => !numberInRange(week, 1, 18))) {
        fail(`Course ${course.id}: weeks must be 1-18`);
      }
      if (course.overlap && !courseIds.has(course.overlap)) fail(`Course ${course.id}: unknown overlap '${course.overlap}'`);
    });
    ok(`${courses.length} courses`);
  }
}

console.log('\nleetcode.json');
const leetcode = loaded.leetcode;
let patternIds = new Set();
if (leetcode) {
  if (leetcode.target === 500) ok('target = 500');
  else fail(`target must be 500, got ${leetcode.target}`);
  if (!Array.isArray(leetcode.patterns)) fail('patterns must be an array');
  else {
    patternIds = uniqueIdCheck(leetcode.patterns, 'leetcode.patterns');
    leetcode.patterns.forEach(pattern => {
      if (!pattern.name) warn(`Pattern ${pattern.id}: missing name`);
      if (!Array.isArray(pattern.weeks) || pattern.weeks.some(week => !numberInRange(week, 1, 18))) {
        fail(`Pattern ${pattern.id}: weeks must be 1-18`);
      }
    });
    ok(`${leetcode.patterns.length} DSA patterns`);
  }
  if (!Array.isArray(leetcode.weeks)) fail('weeks must be an array');
  else {
    if (leetcode.weeks.length === 18) ok('18 LeetCode week entries');
    else fail(`Expected 18 LeetCode weeks, found ${leetcode.weeks.length}`);
    const weekIds = uniqueIdCheck(leetcode.weeks, 'leetcode.weeks', week => String(week.week));
    for (let week = 1; week <= 18; week++) if (!weekIds.has(String(week))) fail(`leetcode.weeks: missing week ${week}`);
    const total = leetcode.weeks.reduce((sum, week) => sum + (week.target || 0), 0);
    if (total === 500) ok('Week targets sum to 500');
    else fail(`Week targets sum to ${total}, expected 500`);
    leetcode.weeks.forEach(week => {
      if ((week.easy || 0) + (week.medium || 0) + (week.hard || 0) !== week.target) {
        fail(`LeetCode week ${week.week}: easy+medium+hard must equal target`);
      }
    });
  }
}

console.log('\nskills.json');
const skills = loaded.skills;
if (skills) {
  if (!skills.fullStack || !Array.isArray(skills.fullStack.phases)) fail('skills.fullStack.phases must exist');
  else ok(`${skills.fullStack.phases.length} full-stack phases`);
  if (!skills.aiEngineering || !Array.isArray(skills.aiEngineering.stages)) fail('skills.aiEngineering.stages must exist');
  else ok(`${skills.aiEngineering.stages.length} AI engineering stages`);
}

console.log('\nartifacts.json');
const artifacts = loaded.artifacts;
let proofIds = new Set();
let miniProjectIds = new Set();
if (artifacts) {
  if (!Array.isArray(artifacts.proofChecklist)) fail('proofChecklist must be an array');
  else {
    proofIds = uniqueIdCheck(artifacts.proofChecklist, 'artifacts.proofChecklist');
    if (artifacts.proofChecklist.length === 30) ok('30 proof items');
    else fail(`Expected 30 proof items, found ${artifacts.proofChecklist.length}`);
  }

  if (!Array.isArray(artifacts.miniProjects)) fail('miniProjects must be an array');
  else {
    miniProjectIds = uniqueIdCheck(artifacts.miniProjects, 'artifacts.miniProjects');
    if (artifacts.miniProjects.length === 18) ok('18 mini-projects');
    else fail(`Expected 18 mini-projects, found ${artifacts.miniProjects.length}`);
    artifacts.miniProjects.forEach(project => {
      if (!numberInRange(project.week, 1, 18)) fail(`Mini-project ${project.id}: week must be 1-18`);
      if (project.id !== weekId(project.week)) fail(`Mini-project week ${project.week}: id must be ${weekId(project.week)}`);
      validateRoadmapPath(project.artifact, `Mini-project ${project.id} artifact`, project.status || 'current');
    });
  }

  if (!Array.isArray(artifacts.templates)) fail('templates must be an array');
  else {
    uniqueIdCheck(artifacts.templates, 'artifacts.templates');
    artifacts.templates.forEach(template => validateRoadmapPath(template.path, `Template ${template.id}`, template.status || 'current'));
    ok(`${artifacts.templates.length} templates catalogued`);
  }

  if (Array.isArray(artifacts.adrs)) {
    uniqueIdCheck(artifacts.adrs, 'artifacts.adrs');
    artifacts.adrs.forEach(adr => validateRoadmapPath(adr.path, `ADR ${adr.id}`, adr.status || 'current'));
  }
}

console.log('\nai-engineering.json');
const aiEng = loaded['ai-engineering'];
let aiArtifactIds = new Set();
if (aiEng) {
  if (!Array.isArray(aiEng.weeklyArtifacts)) fail('weeklyArtifacts must be an array');
  else {
    aiArtifactIds = uniqueIdCheck(aiEng.weeklyArtifacts, 'ai-engineering.weeklyArtifacts');
    if (aiEng.weeklyArtifacts.length === 18) ok('18 weekly AI artifacts');
    else fail(`Expected 18 weekly AI artifacts, found ${aiEng.weeklyArtifacts.length}`);
    const weeks = new Set();
    aiEng.weeklyArtifacts.forEach(item => {
      if (!numberInRange(item.week, 1, 18)) fail(`AI artifact ${item.id}: week must be 1-18`);
      if (item.id !== weekId(item.week)) fail(`AI artifact week ${item.week}: id must be ${weekId(item.week)}`);
      if (weeks.has(item.week)) fail(`Duplicate AI artifact week ${item.week}`);
      weeks.add(item.week);
      validateRoadmapPath(item.artifact, `AI artifact ${item.id}`, item.status || 'current');
      validateRoadmapPath(item.mlArtifact, `AI ML artifact ${item.id}`, item.status || 'current');
    });
  }
  if (isObject(aiEng.topicAreas)) ok(`${Object.keys(aiEng.topicAreas).length} AI topic areas`);
  else fail('topicAreas must be an object');
  if (Array.isArray(aiEng.productionChecklist)) ok(`${aiEng.productionChecklist.length} production checklist items`);
  else fail('productionChecklist must be an array');
}

console.log('\nsystem-design.json');
const systemDesign = loaded['system-design'];
let systemDesignIds = new Set();
if (systemDesign) {
  if (!Array.isArray(systemDesign.topics)) fail('topics must be an array');
  else {
    systemDesignIds = uniqueIdCheck(systemDesign.topics, 'system-design.topics');
    systemDesign.topics.forEach(topic => {
      if (!topic.name) warn(`System design topic ${topic.id}: missing name`);
      if (topic.day != null && !dayIds.has(String(topic.day))) fail(`System design topic ${topic.id}: invalid day ${topic.day}`);
    });
    ok(`${systemDesign.topics.length} system design topics`);
  }
}

console.log('\nreadiness.json');
const readiness = loaded.readiness;
let readinessIds = new Set();
if (readiness) {
  const required = ['softwareEngineering', 'aiEngineering', 'interview', 'portfolio'];
  if (!isObject(readiness.dimensions)) fail('dimensions must be an object');
  else {
    readinessIds = new Set(Object.keys(readiness.dimensions));
    required.forEach(id => {
      if (!readinessIds.has(id)) fail(`readiness.dimensions missing '${id}'`);
    });
    Object.entries(readiness.dimensions).forEach(([id, dimension]) => {
      if (!dimension.label) fail(`Readiness dimension ${id}: missing label`);
      if (!Array.isArray(dimension.components)) fail(`Readiness dimension ${id}: components must be an array`);
      else {
        uniqueIdCheck(dimension.components, `readiness.${id}.components`);
        const totalWeight = dimension.components.reduce((sum, component) => sum + (component.weight || 0), 0);
        if (totalWeight !== 100) fail(`Readiness dimension ${id}: component weights sum to ${totalWeight}, expected 100`);
      }
    });
    ok(`${readinessIds.size} readiness dimensions`);
  }
}

console.log('\nprogress.json');
const progress = loaded.progress;
if (progress) {
  if (!isObject(progress.meta)) warn('Missing meta block');
  else {
    if (progress.meta.repo !== 'Senior-in-180-days') warn(`meta.repo should be 'Senior-in-180-days', got '${progress.meta.repo}'`);
    ok('meta block present');
  }

  const miniProjectAliases = new Map();
  (artifacts?.miniProjects || []).forEach(project => miniProjectAliases.set(String(project.week), project.id));
  const aiArtifactAliases = new Map();
  (aiEng?.weeklyArtifacts || []).forEach(item => aiArtifactAliases.set(String(item.week), item.id));

  const validDayStatus = new Set(['done', 'skipped', null, undefined]);
  const validCourseStatus = new Set(['todo', 'in-progress', 'done']);
  const validSystemDesignStatus = new Set(['not-started', 'studied', 'drilled', 'mock-ready']);
  const dayFields = new Set([
    'status', 'hours', 'mood', 'note', 'wins', 'dsaEasy', 'dsaMedium', 'dsaHard',
    'artifactDone', 'aiArtifactDone', 'mockInterviewDone', 'failureDrillDone', 'savedAt'
  ]);

  validateProgressMap('days', progress.days, dayIds, value => {
    if (!isObject(value)) return fail('progress.days entry must be an object');
    Object.keys(value).forEach(field => {
      if (!dayFields.has(field)) fail(`progress.days entry: unknown field '${field}'`);
    });
    if (!validDayStatus.has(value.status)) fail(`progress.days entry: invalid status '${value.status}'`);
    ['hours', 'dsaEasy', 'dsaMedium', 'dsaHard'].forEach(field => {
      if (value[field] != null && (!Number.isFinite(Number(value[field])) || Number(value[field]) < 0)) {
        fail(`progress.days entry: ${field} must be a non-negative number`);
      }
    });
    ['artifactDone', 'aiArtifactDone', 'mockInterviewDone', 'failureDrillDone'].forEach(field => {
      if (value[field] != null && typeof value[field] !== 'boolean') fail(`progress.days entry: ${field} must be boolean`);
    });
  });

  validateProgressMap('courses', progress.courses, courseIds, value => {
    if (!validCourseStatus.has(value)) fail(`progress.courses value '${value}' must be todo|in-progress|done`);
  });

  validateProgressMap('patterns', progress.patterns, patternIds, value => {
    if (!Number.isInteger(Number(value)) || Number(value) < 0 || Number(value) > 4) {
      fail(`progress.patterns value '${value}' must be 0-4`);
    }
  });

  validateProgressMap('portfolio', progress.portfolio, proofIds, value => {
    if (typeof value !== 'boolean') fail('progress.portfolio values must be boolean');
  });

  validateProgressMap('miniProjects', progress.miniProjects, miniProjectIds, value => {
    if (typeof value !== 'boolean') fail('progress.miniProjects values must be boolean');
  }, miniProjectAliases);

  validateProgressMap('aiArtifacts', progress.aiArtifacts, aiArtifactIds, value => {
    if (typeof value !== 'boolean') fail('progress.aiArtifacts values must be boolean');
  }, aiArtifactAliases);

  validateProgressMap('aiReadiness', progress.aiReadiness, readinessIds, value => {
    if (!Number.isInteger(Number(value)) || Number(value) < 0 || Number(value) > 5) {
      fail(`progress.aiReadiness value '${value}' must be 0-5`);
    }
  });

  validateProgressMap('systemDesign', progress.systemDesign, systemDesignIds, value => {
    if (typeof value === 'boolean') return;
    if (!validSystemDesignStatus.has(value)) fail(`progress.systemDesign value '${value}' must be not-started|studied|drilled|mock-ready`);
  });
}

console.log('\njournal.json');
const journal = loaded.journal;
if (journal) {
  if (!Array.isArray(journal.entries)) fail('entries must be an array');
  else ok(`${journal.entries.length} journal entries`);
}

console.log('\ninterviews.json');
const interviews = loaded.interviews;
if (interviews) {
  ['coding', 'systemDesign', 'behavioral'].forEach(type => {
    if (!Array.isArray(interviews[type])) fail(`interviews.${type} must be an array`);
    else ok(`${interviews[type].length} ${type} sessions`);
  });
}

console.log('\nportfolio.json');
const portfolio = loaded.portfolio;
if (portfolio) {
  if (!portfolio._redirect) warn('portfolio.json is a legacy alias; expected _redirect');
  else ok('legacy alias present');
}

console.log('\n' + '-'.repeat(55));
if (errorCount === 0 && warningCount === 0) {
  console.log('All checks passed - tracker/data is valid.\n');
  process.exit(0);
}

const e = errorCount > 0 ? `${errorCount} error(s)` : '0 errors';
const w = warningCount > 0 ? `${warningCount} warning(s)` : '0 warnings';
console.log(`\n${e}   ${w}\n`);
process.exit(errorCount > 0 ? 1 : 0);
