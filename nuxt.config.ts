// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  modules: ['@unocss/nuxt', '@vant/nuxt'],
  srcDir: 'src/',
  typescript: {
    typeCheck: true,
  },
  runtimeConfig: {
    public: {
      API_PREFIX: process.env.API_PREFIX,
    },
  },
})
