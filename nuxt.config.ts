export default defineNuxtConfig({
  compatibilityDate: '2024-07-29',
  app: {
    head: {
      meta: [
        {
          httpEquiv: 'Content-Security-Policy',
          content: 'upgrade-insecure-requests',
        },
      ],
    },
  },
  css: ['@/assets/css/index.css'],
  devtools: { enabled: false },
  modules: ['@pinia/nuxt', '@nuxtjs/tailwindcss', '@nuxtjs/i18n', 'nuxt-icons'],
  ssr: false,
  components: [
    { path: '~/components', pathPrefix: true },
    { path: '~/single-use', pathPrefix: false },
  ],
  imports: {
    dirs: ['store', 'store/*/*', 'composables', 'api', 'components'],
  },
});
