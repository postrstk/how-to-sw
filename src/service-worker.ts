self.addEventListener("push", (event: any) => {
  console.log("pushed");
  event.waitUntil(
    (<any>self).registration.showNotification("ServiceWorker Cookbook", {
      body: "Hello, world",
    })
  );
});

self.addEventListener("install", () => {
  console.log("installed");
});

console.log("aaaa");
