#!/usr/bin/env node
/**
 * Save a browser tracker export into tracker/data without touching catalogs.
 *
 * Usage:
 *   node scripts/save-tracker-export.js path/to/progress.json
 */

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const DATA = path.join(ROOT, 'tracker', 'data');

function isObject(value) {
  return value && typeof value === 'object' && !Array.isArray(value);
}

function loadJson(filePath) {
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch (error) {
    throw new Error(`Cannot read JSON from ${filePath}: ${error.message}`);
  }
}

function writeJson(relPath, data) {
  const outPath = path.join(ROOT, relPath);
  fs.writeFileSync(outPath, `${JSON.stringify(data, null, 2)}\n`, 'utf8');
  console.log(`wrote ${relPath}`);
}

function progressFromExport(source) {
  if (!isObject(source) || !isObject(source.days)) {
    throw new Error('Export must be a tracker progress JSON object with a days map.');
  }

  const meta = isObject(source.meta) ? {...source.meta} : {};
  if (!meta.startDate && typeof source.startDate === 'string') meta.startDate = source.startDate;
  if (!Object.prototype.hasOwnProperty.call(meta, 'startDate')) meta.startDate = null;
  meta.lastExported = meta.lastExported || new Date().toISOString().slice(0, 10);
  meta.repo = 'Senior-in-180-days';

  return {
    _schema: source._schema || 'Senior-in-180-days progress export v1',
    _version: source._version || '1.0.0',
    meta,
    days: source.days || {},
    courses: source.courses || {},
    patterns: source.patterns || {},
    portfolio: source.portfolio || {},
    miniProjects: source.miniProjects || {},
    aiArtifacts: source.aiArtifacts || {},
    aiReadiness: source.aiReadiness || {},
    systemDesign: source.systemDesign || {}
  };
}

function journalFrom(source, inputDir) {
  if (Array.isArray(source.entries)) {
    return {_schema: 'Senior-in-180-days journal export v1', entries: source.entries};
  }
  if (Array.isArray(source.journal)) {
    return {_schema: 'Senior-in-180-days journal export v1', entries: source.journal};
  }

  const sibling = path.join(inputDir, 'journal.json');
  if (fs.existsSync(sibling)) {
    const data = loadJson(sibling);
    if (!Array.isArray(data.entries)) throw new Error('Sibling journal.json must contain an entries array.');
    return {_schema: data._schema || 'Senior-in-180-days journal export v1', entries: data.entries};
  }
  return null;
}

function interviewsFrom(source, inputDir) {
  const candidate = isObject(source.interviews) ? source.interviews : source;
  if (Array.isArray(candidate.coding) && Array.isArray(candidate.systemDesign) && Array.isArray(candidate.behavioral)) {
    return {
      _schema: 'Senior-in-180-days interviews export v1',
      coding: candidate.coding,
      systemDesign: candidate.systemDesign,
      behavioral: candidate.behavioral
    };
  }

  const sibling = path.join(inputDir, 'interviews.json');
  if (fs.existsSync(sibling)) {
    const data = loadJson(sibling);
    if (!Array.isArray(data.coding) || !Array.isArray(data.systemDesign) || !Array.isArray(data.behavioral)) {
      throw new Error('Sibling interviews.json must contain coding, systemDesign, and behavioral arrays.');
    }
    return {
      _schema: data._schema || 'Senior-in-180-days interviews export v1',
      coding: data.coding,
      systemDesign: data.systemDesign,
      behavioral: data.behavioral
    };
  }
  return null;
}

function main() {
  const input = process.argv[2];
  if (!input) {
    console.error('Usage: node scripts/save-tracker-export.js path/to/exported-progress.json');
    return 1;
  }

  const inputPath = path.resolve(process.cwd(), input);
  const inputDir = path.dirname(inputPath);
  const source = loadJson(inputPath);

  writeJson(path.join('tracker', 'data', 'progress.json'), progressFromExport(source));

  const journal = journalFrom(source, inputDir);
  if (journal) writeJson(path.join('tracker', 'data', 'journal.json'), journal);
  else console.log('left tracker/data/journal.json unchanged; no journal data found in export or sibling journal.json');

  const interviews = interviewsFrom(source, inputDir);
  if (interviews) writeJson(path.join('tracker', 'data', 'interviews.json'), interviews);
  else console.log('left tracker/data/interviews.json unchanged; no interview data found in export or sibling interviews.json');

  console.log('\nNext commands:');
  console.log('  npm run tracker:validate');
  console.log('  npm run tracker:sync');
  return 0;
}

process.exit(main());
