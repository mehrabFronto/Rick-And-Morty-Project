const staticItems = [
  "/",
  "/index.html",
  "/manifest.json",
  "/src/index.css",
  "/src/App.css",
  "/images/icons/ios/144.png",
  "/images/icons/android/android-launchericon-192-192.png",
];

const STATIC_CACHE = "static-v1";
const DYNAMIC_CACHE = "dynamic-v1";

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => {
      return cache.addAll(staticItems);
    })
  );
});

self.addEventListener("fetch", (event: FetchEvent) => {
  const url = new URL(event.request.url);

  // Ignore requests for Vite's development tools
  if (
    url.pathname.startsWith("/@vite/") ||
    url.pathname.startsWith("/@react-refresh")
  ) {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((response) => {
      // Return cached response if available
      if (response) return response;

      // Fetch request and dynamically cache the response
      return fetch(event.request).then((fetchResponse) => {
        return caches.open(DYNAMIC_CACHE).then((cache) => {
          cache.put(event.request, fetchResponse.clone());
          return fetchResponse;
        });
      });
    })
  );
});
