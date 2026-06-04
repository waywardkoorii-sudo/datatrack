/* DataTrack Pro — Service Worker v0.9
   Caches the app shell for full offline use.
   Update CACHE_NAME when deploying a new version to force cache refresh. */

const CACHE_NAME = 'datatrack-pro-v0.9';

const ASSETS_TO_CACHE = [
  './datatrack_pro-0_9.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  /* Google Fonts — cached on first visit so the app works offline after that */
  'https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&family=Share+Tech+Mono&family=Barlow:wght@300;400;500;600&display=swap'
];

/* ── Install: pre-cache the app shell ── */
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      /* Cache core assets; font CSS may fail on first offline install — that's OK */
      return cache.addAll(ASSETS_TO_CACHE).catch(err => {
        console.warn('[SW] Some assets failed to pre-cache:', err);
        /* Cache what we can without failing the whole install */
        return Promise.allSettled(
          ASSETS_TO_CACHE.map(url => cache.add(url).catch(() => {}))
        );
      });
    })
  );
  /* Take control immediately without waiting for old SW to expire */
  self.skipWaiting();
});

/* ── Activate: delete stale caches ── */
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

/* ── Fetch: cache-first strategy ── */
self.addEventListener('fetch', event => {
  /* Only handle GET requests */
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;

      /* Not in cache — fetch from network and cache the response */
      return fetch(event.request).then(response => {
        /* Only cache valid responses */
        if (!response || response.status !== 200 || response.type === 'error') {
          return response;
        }
        const toCache = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, toCache));
        return response;
      }).catch(() => {
        /* Network failed and not in cache — nothing we can do for this request */
        console.warn('[SW] Fetch failed for:', event.request.url);
      });
    })
  );
});
