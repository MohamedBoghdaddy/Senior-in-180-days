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
const SCHEMA_DIR = path.join(ROOT, 'tracker', 'schemas');
const EXAMPLE_DIR = path.join(ROOT, 'tracker', 'examples');
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

function monthId(month) {
  return `month-${String(month).padStart(2, '0')}`;
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
    if (isMetaKey(key)) {
      fail(`progress.${name}: metadata key '${key}' belongs in tracker/examples/progress.example.json, not tracker/data/progress.json`);
      return;
    }
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
  ok(`progress.${name}: ${realKeys} real key(s)`);
}

function numberInRange(value, min, max) {
  return typeof value === 'number' && Number.isFinite(value) && value >= min && value <= max;
}

function validDateString(value) {
  if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const parsed = new Date(`${value}T00:00:00Z`);
  return !Number.isNaN(parsed.getTime()) && parsed.toISOString().slice(0, 10) === value;
}

function maybeUrl(value) {
  return typeof value === 'string' && (value === '' || /^https?:\/\/\S+$/i.test(value));
}

function maybeGithubRef(value) {
  return typeof value === 'string' && (
    value === '' ||
    /^https?:\/\/\S+$/i.test(value) ||
    /^#?\d+$/.test(value)
  );
}

const FILES = [
  'months.json',
  'weeks.json',
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

const SCHEMA_FILES = [
  'months.schema.json',
  'weeks.schema.json',
  'days.schema.json',
  'courses.schema.json',
  'leetcode.schema.json',
  'skills.schema.json',
  'artifacts.schema.json',
  'ai-engineering.schema.json',
  'system-design.schema.json',
  'readiness.schema.json',
  'progress.schema.json',
  'journal.schema.json',
  'interviews.schema.json',
  'portfolio.schema.json'
];

const EXAMPLE_FILES = [
  'progress.example.json',
  'journal.example.json',
  'interviews.example.json'
];

function parseJsonFile(baseDir, file, label) {
  const p = path.join(baseDir, file);
  if (!fs.existsSync(p)) {
    fail(`Missing ${label}: ${file}`);
    return null;
  }
  try {
    return JSON.parse(fs.readFileSync(p, 'utf8'));
  } catch (error) {
    fail(`Invalid JSON in ${label} ${file}: ${error.message}`);
    return null;
  }
}

const loaded = {};
FILES.forEach(file => {
  loaded[file.replace('.json', '')] = loadJSON(file);
});

console.log('\nschemas');
SCHEMA_FILES.forEach(file => {
  const schema = parseJsonFile(SCHEMA_DIR, file, 'tracker/schemas');
  if (!schema) return;
  if (!schema.$schema) warn(`${file}: missing $schema declaration`);
  if (!schema.title) warn(`${file}: missing title`);
  ok(`${file} present`);
});

console.log('\nexamples');
EXAMPLE_FILES.forEach(file => {
  const example = parseJsonFile(EXAMPLE_DIR, file, 'tracker/examples');
  if (example) ok(`${file} present`);
});

console.log('\nmonths.json');
const months = loaded.months;
let monthIds = new Set();
let monthNums = new Set();
if (months) {
  if (!Array.isArray(months)) fail('months.json must be an array');
  else {
    monthIds = uniqueIdCheck(months, 'months');
    monthNums = uniqueIdCheck(months, 'months.num', month => String(month.num));
    if (months.length === 6) ok('6 month entries');
    else fail(`Expected 6 month entries, found ${months.length}`);
    months.forEach(month => {
      if (month.id !== monthId(month.num)) fail(`Month ${month.num}: id must be ${monthId(month.num)}`);
      const expectedStart = (month.num - 1) * 30 + 1;
      const expectedEnd = month.num * 30;
      if (month.start !== expectedStart || month.end !== expectedEnd) {
        fail(`Month ${month.num}: expected days ${expectedStart}-${expectedEnd}, got ${month.start}-${month.end}`);
      }
      if (!month.title) fail(`Month ${month.num}: missing title`);
      if (!month.color || !month.dimColor || !month.darkColor) fail(`Month ${month.num}: missing UI color tokens`);
    });
  }
}

console.log('\nweeks.json');
const weeks = loaded.weeks;
let weekIds = new Set();
let weekNums = new Set();
if (weeks) {
  if (!Array.isArray(weeks)) fail('weeks.json must be an array');
  else {
    weekIds = uniqueIdCheck(weeks, 'weeks');
    weekNums = uniqueIdCheck(weeks, 'weeks.num', week => String(week.num));
    if (weeks.length === 18) ok('18 week entries');
    else fail(`Expected 18 week entries, found ${weeks.length}`);
    weeks.forEach(week => {
      if (week.id !== weekId(week.num)) fail(`Week ${week.num}: id must be ${weekId(week.num)}`);
      const expectedStart = (week.num - 1) * 10 + 1;
      const expectedEnd = week.num * 10;
      if (week.start !== expectedStart || week.end !== expectedEnd) {
        fail(`Week ${week.num}: expected days ${expectedStart}-${expectedEnd}, got ${week.start}-${week.end}`);
      }
      if (!monthNums.has(String(week.month))) fail(`Week ${week.num}: invalid month ${week.month}`);
      if (!week.title) fail(`Week ${week.num}: missing title`);
      if (!week.project) warn(`Week ${week.num}: missing project`);
    });
  }
}

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
      if (!weekNums.has(String(day.week))) fail(`Day ${day.num}: unknown week ${day.week}`);
      if (!monthNums.has(String(day.month))) fail(`Day ${day.num}: unknown month ${day.month}`);
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
      if (!Array.isArray(course.weeks) || course.weeks.some(week => !weekNums.has(String(week)))) {
        fail(`Course ${course.id}: weeks must reference weeks.json`);
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
      if (!Array.isArray(pattern.weeks) || pattern.weeks.some(week => !weekNums.has(String(week)))) {
        fail(`Pattern ${pattern.id}: weeks must reference weeks.json`);
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
      if (!weekNums.has(String(week.week))) fail(`LeetCode week ${week.week}: unknown week`);
      const roadmapWeek = Array.isArray(weeks) ? weeks.find(item => item.num === week.week) : null;
      if (roadmapWeek && roadmapWeek.dsaTotal !== week.target) {
        fail(`LeetCode week ${week.week}: target ${week.target} does not match weeks.json dsaTotal ${roadmapWeek.dsaTotal}`);
      }
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
    artifacts.proofChecklist.forEach(item => {
      if (!weekNums.has(String(item.week))) fail(`Proof item ${item.id}: invalid week ${item.week}`);
    });
  }

  if (!Array.isArray(artifacts.miniProjects)) fail('miniProjects must be an array');
  else {
    miniProjectIds = uniqueIdCheck(artifacts.miniProjects, 'artifacts.miniProjects');
    if (artifacts.miniProjects.length === 18) ok('18 mini-projects');
    else fail(`Expected 18 mini-projects, found ${artifacts.miniProjects.length}`);
    artifacts.miniProjects.forEach(project => {
      if (!weekNums.has(String(project.week))) fail(`Mini-project ${project.id}: week must reference weeks.json`);
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
      if (!weekNums.has(String(item.week))) fail(`AI artifact ${item.id}: week must reference weeks.json`);
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
      if (topic.week != null && !weekNums.has(String(topic.week))) fail(`System design topic ${topic.id}: invalid week ${topic.week}`);
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
      if (dimension.id !== id) fail(`Readiness dimension ${id}: id field must equal '${id}'`);
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
  const progressFields = new Set([
    '$schema', '_schema', '_version', 'meta', 'days', 'courses', 'patterns',
    'portfolio', 'proofLinks', 'problemLog', 'miniProjects', 'aiArtifacts', 'aiReadiness', 'systemDesign'
  ]);
  Object.keys(progress).forEach(key => {
    if (!progressFields.has(key)) fail(`progress.json: unexpected top-level field '${key}'`);
  });
  ['_description', '_workflow'].forEach(key => {
    if (Object.prototype.hasOwnProperty.call(progress, key)) {
      fail(`progress.json: ${key} belongs in tracker/examples/progress.example.json`);
    }
  });
  if (!isObject(progress.meta)) warn('Missing meta block');
  else {
    if (progress.meta.repo !== 'Senior-in-180-days') warn(`meta.repo should be 'Senior-in-180-days', got '${progress.meta.repo}'`);
    if (progress.meta.startDate != null && !validDateString(progress.meta.startDate)) {
      fail('progress.meta.startDate must be null or YYYY-MM-DD');
    }
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

  validateProgressMap('proofLinks', progress.proofLinks, proofIds, value => {
    if (!isObject(value)) return fail('progress.proofLinks values must be objects');
    const fields = new Set(['url', 'issue', 'pr', 'notes']);
    Object.keys(value).forEach(field => {
      if (!fields.has(field)) fail(`progress.proofLinks entry: unknown field '${field}'`);
    });
    if (value.url != null && !maybeUrl(value.url)) fail('progress.proofLinks.url must be empty or an http(s) URL');
    if (value.issue != null && !maybeGithubRef(value.issue)) fail('progress.proofLinks.issue must be empty, a number, or an http(s) URL');
    if (value.pr != null && !maybeGithubRef(value.pr)) fail('progress.proofLinks.pr must be empty, a number, or an http(s) URL');
    if (value.notes != null && typeof value.notes !== 'string') fail('progress.proofLinks.notes must be a string');
  });

  if (!Array.isArray(progress.problemLog)) fail('progress.problemLog must be an array');
  else {
    uniqueIdCheck(progress.problemLog, 'progress.problemLog');
    const validDifficulty = new Set(['easy', 'medium', 'hard']);
    const validProblemResult = new Set(['solved', 'redo', 'stuck', 'review']);
    progress.problemLog.forEach(entry => {
      if (entry.day != null && !dayIds.has(String(entry.day))) fail(`Problem log ${entry.id}: invalid day ${entry.day}`);
      if (!entry.title) fail(`Problem log ${entry.id}: missing title`);
      if (!patternIds.has(entry.patternId)) fail(`Problem log ${entry.id}: invalid patternId '${entry.patternId}'`);
      if (!validDifficulty.has(entry.difficulty)) fail(`Problem log ${entry.id}: invalid difficulty '${entry.difficulty}'`);
      if (!validProblemResult.has(entry.result)) fail(`Problem log ${entry.id}: invalid result '${entry.result}'`);
      if (entry.timeMinutes != null && (!Number.isFinite(Number(entry.timeMinutes)) || Number(entry.timeMinutes) < 0)) {
        fail(`Problem log ${entry.id}: timeMinutes must be non-negative`);
      }
      if (entry.url != null && !maybeUrl(entry.url)) fail(`Problem log ${entry.id}: url must be empty or an http(s) URL`);
    });
    ok(`${progress.problemLog.length} LeetCode problem log entries`);
  }

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
  const journalFields = new Set(['$schema', '_schema', 'entries']);
  Object.keys(journal).forEach(key => {
    if (!journalFields.has(key)) fail(`journal.json: unexpected top-level field '${key}'`);
  });
  ['_description', '_entryShape'].forEach(key => {
    if (Object.prototype.hasOwnProperty.call(journal, key)) fail(`journal.json: ${key} belongs in tracker/examples/journal.example.json`);
  });
  if (!Array.isArray(journal.entries)) fail('entries must be an array');
  else {
    uniqueIdCheck(journal.entries, 'journal.entries');
    journal.entries.forEach(entry => {
      if (!entry.type) fail(`Journal entry ${entry.id}: missing type`);
      if (entry.day != null && !dayIds.has(String(entry.day))) fail(`Journal entry ${entry.id}: invalid day ${entry.day}`);
    });
    ok(`${journal.entries.length} journal entries`);
  }
}

console.log('\ninterviews.json');
const interviews = loaded.interviews;
if (interviews) {
  const interviewFields = new Set(['$schema', '_schema', 'coding', 'systemDesign', 'behavioral']);
  Object.keys(interviews).forEach(key => {
    if (!interviewFields.has(key)) fail(`interviews.json: unexpected top-level field '${key}'`);
  });
  ['_description', '_sessionShape'].forEach(key => {
    if (Object.prototype.hasOwnProperty.call(interviews, key)) fail(`interviews.json: ${key} belongs in tracker/examples/interviews.example.json`);
  });
  ['coding', 'systemDesign', 'behavioral'].forEach(type => {
    if (!Array.isArray(interviews[type])) fail(`interviews.${type} must be an array`);
    else {
      uniqueIdCheck(interviews[type], `interviews.${type}`);
      interviews[type].forEach(session => {
        if (session.type && session.type !== type) fail(`Interview session ${session.id}: type must be ${type}`);
        if (!session.date) fail(`Interview session ${session.id}: missing date`);
        if (!session.topic) fail(`Interview session ${session.id}: missing topic`);
        if (session.durationMinutes != null && (!Number.isFinite(Number(session.durationMinutes)) || Number(session.durationMinutes) < 0)) {
          fail(`Interview session ${session.id}: durationMinutes must be non-negative`);
        }
        if (session.score != null && !numberInRange(Number(session.score), 0, 5)) fail(`Interview session ${session.id}: score must be 0-5`);
        if (session.rubric != null && !isObject(session.rubric)) fail(`Interview session ${session.id}: rubric must be an object`);
        if (session.day != null && !dayIds.has(String(session.day))) fail(`Interview session ${session.id}: invalid day ${session.day}`);
      });
      ok(`${interviews[type].length} ${type} sessions`);
    }
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
