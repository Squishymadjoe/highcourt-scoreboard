const CACHE_NAME = "highcourt-v1";
const ASSETS = [
  "./",
  "./index.html",
  "./manifest.json"
];

// Install the app and save files
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Serve files from memory (offline mode)
self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});