import VuetifyLoaderPlugin from 'vuetify-loader/lib/plugin'
import pkg from './package'

export default {
  mode: 'spa',

  // ** Headers of the page
  head: {
    title: 'Placas do condomínio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nós queremos faciliatar a vida do seu porteiro. Para isso traremos praticidade e agilidade na hora de reconhecer os carros dos moradores. Assim, criamos este painel online para organizar e acessar as placas dos moradores do seu condomínio.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      }
    ]
  },

  // ** Customize the progress-bar color
  loading: { color: '#fff' },

  // ** Global CSS
  css: [
    '~/assets/style/app.styl'
  ],

  // ** Plugins to load before mounting the App
  plugins: [
    '@/plugins/vuetify',
    '~/plugins/confirm/confirm.js',
    // Environment variables configuration file (export object Env with configs)
    'envSettings.js'
  ],

  // ** Nuxt.js modules
  modules: [
  ],

  // ** Build configuration
  build: {
    transpile: ['vuetify/lib'],
    plugins: [new VuetifyLoaderPlugin()],
    loaders: {
      stylus: {
        import: ['~assets/style/variables.styl']
      }
    },
    // ** You can extend webpack config here
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
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
