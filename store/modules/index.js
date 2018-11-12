const state = () => ({fullPage: 2})

const mutations = {
    setfullPage(state, val){
        state.fullPage = val
    }
}

const actions = {
    setfullPage:({commit},fullPage)=>{
        console.log(fullPage)
        commit('setfullPage',fullPage)
    }
}

export default {namespaced: true, state, mutations, actions}