const DYNAMIC_CACHE = "dynamic-v1";

self.addEventListener("install", (e) => {
  console.log(e);
});

self.addEventListener("activate", (e) => {
  console.log("activated", e);
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => {
      return (
        res ||
        fetch(e.request).then((fetchRes) => {
          return caches.open(DYNAMIC_CACHE).then((cache) => {
            cache.put(e.request, fetchRes.clone());
            return fetchRes;
          });
        })
      );
    })
  );
});
