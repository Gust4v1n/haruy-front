const CACHE_NAME = 'Restaurante-mexicano-cache-v8';
const ASSETS = [
    '/',
    '/index.html',
    'manifest.json',
    '/assets/images/logoPizza.png',
    '/assets/images/pizzaBanner_PNG.png',
    '/assets/images/whatsapp.png',
]
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('Preparando');
            return cache.addAll(ASSETS);
        })
    );
})
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});