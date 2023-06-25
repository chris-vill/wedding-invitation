// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: "src/",
  typescript: {
    strict: true,
    typeCheck: true,
  },
  css: ["~/styles/reset.sass", "~/styles/main.sass"],
});