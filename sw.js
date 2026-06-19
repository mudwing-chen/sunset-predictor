// Service Worker - network-only: clears all caches, then passes through
// This replaces any stale cached version that caused iOS "lost connection" errors
self.addEventListener('install', function() { self.skipWaiting() })
self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.keys().then(function(names) {
      return Promise.all(names.map(function(n) { return caches.delete(n) }))
    }).then(function() {
      return self.clients.claim()
    })
  )
})
self.addEventListener('fetch', function(e) {
  e.respondWith(fetch(e.request))
})
