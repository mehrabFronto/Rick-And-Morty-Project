self.addEventListener("install", (e) => {
  console.log(e);
  console.log("service worker installed...!");
});

self.addEventListener("activate", (e) => {
  console.log(e);
  console.log("service worker activated...!");
});

self.addEventListener("fetch", (e: FetchEvent) => {
  console.log(e.request.url);
});
