// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  build: {
    transpile: ['alpinejs'], // Přidat Alpine.js do transpilace
  },
  app: {
    head: {
      title: 'Sketchub.eu',
      meta: [
        { name: 'description', content: 'Portál studentských projektů,3D modely, 3D tisk, plastické modely, diorámata' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#000000' },
  
      ]
    }
  },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  css: ["~/assets/css/main.css"],
})
