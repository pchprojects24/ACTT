const CACHE_NAME = 'actt-reference-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './data/chapters-1-2.js',
  './data/domains.js',
  './data/algorithms.js',
  './data/procedures.js',
  './data/medications.js',
  './data/prolonged-holding.js',
  './data/thresholds.js',
  './data/pitfalls.js',
  './data/shipboard.js',
  './data/team.js',
  './data/study.js',
  './data/appendices.js',
  './data/tools.js',
  './data/cross-links.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(response => {
        if (response && response.status === 200 && response.type === 'basic') {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, responseClone));
        }
        return response;
      }).catch(() => {
        if (event.request.destination === 'document') {
          return caches.match('./index.html');
        }
      });
    })
  );
});
