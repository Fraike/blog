import Vue from 'vue'
import Vuex from 'vuex'
import index from './modules/index'

Vue.use(Vuex)

const store = () => new Vuex.Store({
    modules: {
        index
    },
    actions: {
        async nuxtServerInit({commit},{req,app}){
            const {status,data:{code,result}} = await app.$axios.get('/link/getLinks')
            // console.log('status1'+ status)
            commit('index/setlinkList',status === 200 ? result:[])
        }
    }
})

export default store