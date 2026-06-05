#!/usr/bin/env node
/**
 * Generate an iCalendar file from tracker/data/progress.json meta.startDate.
 */

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const DATA = path.join(ROOT, 'tracker', 'data');
const OUT = path.join(ROOT, '180-days-fullstack-engineer', 'tracking', 'tracker-reminders.ics');

function load(file) {
  return JSON.parse(fs.readFileSync(path.join(DATA, file), 'utf8'));
}

function ymd(date) {
  return date.toISOString().slice(0, 10).replace(/-/g, '');
}

function escapeText(value) {
  return String(value || '')
    .replace(/\\/g, '\\\\')
    .replace(/,/g, '\\,')
    .replace(/;/g, '\\;')
    .replace(/\r?\n/g, '\\n');
}

function addDays(startDate, offset) {
  const d = new Date(`${startDate}T00:00:00Z`);
  d.setUTCDate(d.getUTCDate() + offset);
  return d;
}

const progress = load('progress.json');
const days = load('days.json');
const startDate = progress.meta?.startDate;

if (!startDate) {
  console.log('No progress.meta.startDate set; calendar not generated.');
  process.exit(0);
}

const stamp = ymd(new Date());
const events = days.map(day => {
  const start = addDays(startDate, day.num - 1);
  const end = addDays(startDate, day.num);
  const uid = `senior-180-day-${day.num}@local`;
  const summary = `Day ${String(day.num).padStart(3, '0')}: ${day.focus}`;
  const description = [
    `Week ${day.week}`,
    day.csBlock ? `CS: ${day.csBlock}` : '',
    day.aiLayer ? `AI: ${day.aiLayer}` : '',
    day.artifact ? `Artifact: ${day.artifact}` : ''
  ].filter(Boolean).join('\\n');
  return [
    'BEGIN:VEVENT',
    `UID:${uid}`,
    `DTSTAMP:${stamp}T000000Z`,
    `DTSTART;VALUE=DATE:${ymd(start)}`,
    `DTEND;VALUE=DATE:${ymd(end)}`,
    `SUMMARY:${escapeText(summary)}`,
    `DESCRIPTION:${escapeText(description)}`,
    'END:VEVENT'
  ].join('\r\n');
});

const calendar = [
  'BEGIN:VCALENDAR',
  'VERSION:2.0',
  'PRODID:-//Senior in 180 Days//Tracker Calendar//EN',
  'CALSCALE:GREGORIAN',
  'METHOD:PUBLISH',
  ...events,
  'END:VCALENDAR'
].join('\r\n') + '\r\n';

fs.writeFileSync(OUT, calendar, 'utf8');
console.log(`Wrote ${path.relative(ROOT, OUT)}`);
