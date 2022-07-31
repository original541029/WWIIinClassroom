// install
self.addEventListener('install', (event) => {
  self.skipWaiting();
  console.log('installing…');
});

// activate
self.addEventListener('activate', (event) => {
  console.log('now ready to handle fetches!');
});

self.addEventListener('fetch', (fetchEvent) => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then((res) => {
      return res || fetch(fetchEvent.request);
    }),
  );
});
