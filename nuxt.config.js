export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '周光的个人博客，程序员周光，夏日里的一把阳光',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '周光，夏日里的一把阳光，周光的个人博客，技术光，阿光，光哥，小光光，前端周光' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '~assets/css/global.css',
    {src: '~assets/scss/global.scss', lang: 'scss'}
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: '~plugins/element-ui',
      ssr: true,
    }    
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],
  router: {
    base: '/',
    extendRoutes(routes, resolve) { // 路由扩展
      routes.push({
        name: '404',
        path: '*',
        component: resolve(__dirname, 'pages/404.vue')
      })
    }
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    vendor: ['element-ui']
  }
}
