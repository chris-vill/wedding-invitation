// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: "src/",
  typescript: {
    strict: true,
    typeCheck: true
  },
  css: [
    "@/styles/base/reset.andy-bell.sass",
    "@/styles/base/reset.eric-meyer.sass",
    "@/styles/base/main.sass",
  ]
})
