const CACHE_NAME = 'pizza-cache-v8';
const ASSETS = [
    './',
    './index.html',
    './manifest.json',
    './assets/images/logoPizza.png',
    './assets/images/pizzaBanner_PNG.png',
    './assets/images/whatsapp.png'
]

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) =>{
            console.log('Fatiando a pizza no cache');
            return cache.addAll(ASSETS)
        })
    )
});