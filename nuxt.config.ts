// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ["~/assets/main.css"],
  modules: ["@nuxtjs/eslint-module", "@nuxtjs/tailwindcss"],
});
