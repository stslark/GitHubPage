// service-worker.js
self.addEventListener('install', function(e) {
    console.log('[ServiceWorker] Install');
  });
  
  self.addEventListener('activate', function(e) {
    console.log('[ServiceWorker] Activate');
  });
  
  // 监听 fetch 事件
  self.addEventListener('fetch', function(event) {
    console.log('[Service Worker] Fetching something ....');
    event.respondWith(caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    }));
  });