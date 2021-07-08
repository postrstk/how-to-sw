self.addEventListener("install", (event) => {
  console.log("installed");
});

self.addEventListener("push", (event) => {
  console.log(event.data.text());
});
