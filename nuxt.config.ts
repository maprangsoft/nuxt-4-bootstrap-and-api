// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ["bootstrap/dist/css/bootstrap.min.css"],
  modules: ['@nuxt/fonts', '@nuxt/icon', '@nuxt/image'],
  plugins: ['~/plugins/bootstrap.client']
})