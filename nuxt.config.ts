// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: 'Sketchub.eu',
      meta: [
        { name: 'description', content: 'Platforma pro studentské projekty historických bitevních lodí, vytištěných pomocí 3D tisku. To vše uloženo na realistické podložky.' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#fff' },

      ]
    }
  },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-gtag',
  ],

  gtag: {
    id: 'G-FXGDW39ZEV'
  },
  css: ['~/assets/scss/main.scss'],
})
