// Service Worker for AlFaris Business Website
// Provides basic caching for static assets to improve performance

const CACHE_NAME = 'alfaris-cache-v1';
const STATIC_ASSETS = [
    '/',
    '/index.html',
    '/our-services-page.html',
    '/legal-services-page.html',
    '/government-transactions-page.html',
    '/packages-page.html',
    '/faq-page.html',
    '/vision-page.html',
    '/licenses-page.html',
    '/zakat-tax-page.html',
    '/privacy-policy-page.html',
    '/terms-of-service-page.html',
    '/css/common.css',
    '/js/common.js',
    // External CDN resources that are frequently used
    'https://cdn.tailwindcss.com/3.3.0',
    'https://fonts.googleapis.com/css2?family=Noto+Kufi+Arabic:wght@400;500;600;700&display=swap',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css'
];

// Install event - cache static assets
self.addEventListener('install', event => {
    console.log('Service Worker: Installing...');
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Service Worker: Caching files');
                return cache.addAll(STATIC_ASSETS);
            })
            .catch(err => {
                console.log('Service Worker: Cache failed', err);
            })
    );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
    console.log('Service Worker: Activating...');
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if (cache !== CACHE_NAME) {
                        console.log('Service Worker: Clearing old cache', cache);
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', event => {
    // Only handle GET requests
    if (event.request.method !== 'GET') {
        return;
    }

    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Return cached version or fetch from network
                return response || fetch(event.request)
                    .then(fetchResponse => {
                        // Clone the response because it can only be used once
                        const responseClone = fetchResponse.clone();
                        
                        // Cache the new response for static assets
                        if (event.request.url.includes('.html') || 
                            event.request.url.includes('.css') || 
                            event.request.url.includes('.js')) {
                            caches.open(CACHE_NAME)
                                .then(cache => {
                                    cache.put(event.request, responseClone);
                                });
                        }
                        
                        return fetchResponse;
                    });
            })
            .catch(err => {
                console.log('Service Worker: Fetch failed', err);
                // Could return a custom offline page here
                throw err;
            })
    );
});

// Handle service worker updates
self.addEventListener('message', event => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});