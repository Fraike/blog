import Vue from 'vue'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload,{
    preLoad: 1.3,
    error: '~/assets/img/error.jpg',
    loading: require('~/assets/img/load.gif'),
    attempt: 1
})