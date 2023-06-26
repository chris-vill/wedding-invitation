// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["styles/reset.sass", "styles/main.sass"],
  srcDir: "src/",
  typescript: {
    strict: true,
    typeCheck: true,
  },
});
