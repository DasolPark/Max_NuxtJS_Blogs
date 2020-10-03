export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'WD Blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'My cool Web Development Blog' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Open+Sans&display=swap' },
    ]
  },

  /*
  ** Customize the progress-bar color
  */

  // loading: false,
  // loadingIndicator: {
  //   name: 'circle',
  //   color: '#fa923f'
  // },
  loading: { color: '#fa923f', failedColor: 'yellow', height: '4px', duration: 5000 },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    // '~assets/styles/main.css'
    '~assets/styles/main.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },

  // dev: true

  env: {
    baseUrl: process.env.BASE_URL || 'https://nuxt-blog-e7bbf.firebaseio.com'
  },

  // generate: {

  // }

  // rootDir: '/my-app/'

  // router: {
  // base: '/my-app/',

  // extendRoutes(routes, resolve) {
  //   routes.push({
  //     path: '*',
  //     component: resolve(__dirname, 'pages/index.vue')
  //   })
  // },

  // linkActiveClass: 'active'
  // }

  // srcDir: 'client-app/'

  // transition: 'page'
  // or
  transition: {
    name: 'fade',
    mode: 'out-in'
  }
}
