#!/usr/bin/env node
/**
 * Fails if stale repository naming references are present in tracked content.
 */

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const staleShort = '60' + '-days';
const staleRepo = 'Senior-in-' + staleShort;
const PATTERN = new RegExp(`${staleRepo}|${staleShort}`, 'g');
const SKIP_DIRS = new Set(['.git', 'node_modules']);

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, {withFileTypes: true})) {
    if (entry.isDirectory()) {
      if (!SKIP_DIRS.has(entry.name)) walk(path.join(dir, entry.name), files);
    } else if (entry.isFile()) {
      files.push(path.join(dir, entry.name));
    }
  }
  return files;
}

function isText(buffer) {
  return !buffer.includes(0);
}

const matches = [];
for (const file of walk(ROOT)) {
  const buffer = fs.readFileSync(file);
  if (!isText(buffer)) continue;
  const text = buffer.toString('utf8');
  const rel = path.relative(ROOT, file);
  text.split(/\r?\n/).forEach((line, index) => {
    if (PATTERN.test(line)) matches.push(`${rel}:${index + 1}:${line}`);
    PATTERN.lastIndex = 0;
  });
}

if (matches.length) {
  console.error(`Found stale ${staleRepo}/${staleShort} references:`);
  matches.forEach(match => console.error(match));
  process.exit(1);
}

console.log(`No stale ${staleRepo}/${staleShort} references found.`);
