// Service worker lifecycle events

self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('ecard-cache').then((cache) => {
        return cache.addAll([
          '/',
          '/index.html',
          '/favicon-32x32.png',
          '/favicon-16x16.png',
          '/apple-touch-icon.png',
          '/manifest.json',
          '/script.js',
          '/hemera/public/qr.jpg',
          '/hemera/public/bar.jpg'
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });
  