skipWaiting()
oninstall=e=>e.waitUntil(caches.open("1").then(c=>c.add(new Request("/",{cache:"no-cache"}))))
onfetch=e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)))
