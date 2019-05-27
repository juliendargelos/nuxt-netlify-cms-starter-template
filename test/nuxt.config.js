export default {
  env: {
    BASE_URL: process.env.BASE_URL || 'http://localhost:3000'
  },

  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: "width=device-width, initial-scale=1" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  loading: { color: '#ffffff' },

  css: [
    '~/assets/stylesheets/globals/index.sass'
  ],

  styleResources: {
    sass: '~/assets/stylesheets/resources/index.sass'
  },

  plugins: [
    '~/plugins/global-components',
    '~/plugins/settings'
  ],

  modules: [
    '@nuxtjs/style-resources',
    'nuxtdown'
  ],

  build: {
    extend(config, { isDev }) {
      if (isDev && process.client) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
