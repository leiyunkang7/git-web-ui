// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [ '@nuxtjs/eslint-module', '@pinia/nuxt', 
    '@nuxt/ui',
    '@nuxtjs/tailwindcss',  '@vueuse/nuxt', 'nuxt-vitest',
    
  ]  ,
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.cjs',
  }
})
