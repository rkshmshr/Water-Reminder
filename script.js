self.addEventListener("install", function (e) {
    console.log("[ServiceWorker] Installed");
});

self.addEventListener("fetch", function (event) {
    event.respondWith(fetch(event.request));
});