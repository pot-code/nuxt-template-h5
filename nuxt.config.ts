// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@unocss/nuxt', '@vant/nuxt'],
  srcDir: 'src/',
  typescript: {
    typeCheck: true,
  },
})
