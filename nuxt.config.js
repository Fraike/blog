const pkg = require('./package');
const webpack=require('webpack'); 

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      
      { rel: 'stylesheet', type: 'text/css', href: 'http://cdn.webfont.youziku.com/webfonts/nomal/125046/46908/5c2c2d7bf629d90c54a4514b.css'}
    ],
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js' }
    ]

  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/public/reset.css',
    '@/assets/css/public/border.css',
    'swiper/dist/css/swiper.css',
    '@/assets/main.css',
    '@/assets/iconfont/iconfont.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: "~/plugins/swiper.js", ssr: false },
    { src: "~/plugins/lazyload.js", ssr: false },
    { src: "~/plugins/markdown.js", ssr: false }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios'
  ],
    // proxy: [
    //   [
    //     '/api',
    //     {
    //       target: 'http://localhost:3000', // api主机
    //       pathRewrite: {
    //         '^/api': '/'
    //       }
    //     }
    //   ]
    // ],
  /*
  ** Axios module configuration
  */
  axios: {
    proxy: true
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // console.log('webpack config:', config)
      // if (ctx.isClient) {
      //   // 添加 alias 配置
      //   Object.assign(config.resolve.alias, {
      //     'assets': path.resolve(__dirname, 'assets')
      //   })
      // }
    }
  },
  cache: true
}
