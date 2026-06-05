const CACHE_NAME = 'senior-180-tracker-v1';
const TRACKER_ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './data/months.json',
  './data/weeks.json',
  './data/days.json',
  './data/courses.json',
  './data/leetcode.json',
  './data/skills.json',
  './data/ai-engineering.json',
  './data/system-design.json',
  './data/artifacts.json',
  './data/readiness.json',
  './data/progress.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(TRACKER_ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    fetch(event.request)
      .then(response => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});
