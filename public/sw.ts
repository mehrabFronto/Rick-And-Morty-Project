const staticItems = [
  "/",
  "/@react-refresh",
  "/@vite/client",
  "/images/icons/android/android-launchericon-192-192.png",
  "/images/icons/ios/144.png",
  "/manifest.json",
  "/src/App.css",
  "/src/App.tsx",
  "/src/SwDev.tsx",
  "/src/components/CharacterDetail.tsx",
  "/src/components/CharactersList.tsx",
  "/src/components/Loader.tsx",
  "/src/components/Modal.tsx",
  "/src/components/Navbar.tsx",
  "/src/hooks/useCharacters.ts",
  "/src/hooks/useLocalStorage.ts",
  "/src/index.css",
  "/src/main.tsx",
  "/node_modules/vite/dist/client/env.mjs",
];

const STATIC_CACHE = "static-v1";
const DYNAMIC_CACHE = "dynamic-v1";

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => {
      cache.addAll(staticItems);
    })
  );
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
