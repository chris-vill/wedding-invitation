// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "journeyTOPHEReverwithMJ",
      meta: [
        { name: "og:title", content: "journeyTOPHEReverwithMJ" },
        { name: "og:image", content: "/images/logo.png" },
        { name: "og:image:height", content: "137" },
        { name: "og:image:width", content: "203" },
      ],
    },
  },
  css: ["@/styles/reset.sass", "@/styles/main.sass"],
  srcDir: "src/",
  typescript: {
    strict: true,
    typeCheck: true,
  },
});

// <meta property="og:title" content="your website title"/>
// <meta property="og:image" content="the image link"/>
// <meta property="og:description" content="3 words describe your website"/>
// <meta property="og:url" content="your website link"/>
// <meta property="og:image:width" content="1200" />
// <meta property="og:image:height" content="627"/>
// <meta property="og:type" content="website"/>
