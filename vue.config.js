module.exports = {
  pwa: {
    // configure the workbox plugin
    workboxPluginMode: "InjectManifest",
    manifestOptions: {
      name: "My First PWA App",
      short_name: "PWA APP",
      theme_color: "#d00a7b",
      background_color: "#8f959a",
      display: "standalone",
      start_url: ".",
    },
    workboxOptions: {
      // swSrc is required in InjectManifest mode.
      swSrc: "sw.js",
      // ...other Workbox options...
    },
  },
};
