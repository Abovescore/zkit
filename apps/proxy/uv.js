importScripts('/apps/proxy/uv/uv.bundle.js');
importScripts('/apps/proxy/uv/uv.config.js');
importScripts('/apps/proxy/uv/uv.sw.js');
importScripts('https://arc.io/arc-sw-core.js');

const sw = new UVServiceWorker();

self.addEventListener('fetch', (event) => event.respondWith(sw.fetch(event)));
