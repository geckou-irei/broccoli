export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",
  ssr: false,

  router: {
    base: "/broccoli/",
  },
  generate: {
    dir: "docs",
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Broccoli",
    htmlAttrs: {
      lang: "ja",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/broccoli/favicon.ico",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/node_modules/ress/dist/ress.min.css", "~/assets/scss/base.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: "@/plugins/inview.js",
      ssr: false,
      mode: "client",
    },
    {
      src: "@/plugins/locomotiveScroll.js",
      ssr: false,
      mode: "client",
    },
    // {
    //   src: "~/plugins/swiper",
    //   ssr: false,
    //   mode: "client",
    // },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    "@nuxtjs/eslint-module",
    "nuxt-gsap-module",
  ],
  gsap: {
    extraPlugins: {
      scrollTo: true,
      scrollTrigger: true,
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ["gsap"],
  },
};
