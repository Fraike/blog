const state = () => ({
  fullPage: 0,
  fullPageNum: false
})

const mutations = {
  setfullPage(state, val) {
    state.fullPage = val

  },
  setfullPageNum(state, val) {
    state.fullPageNum = val
  }
}

const actions = {
  setfullPage: ({
    commit
  }, fullPage) => {
    // console.log(fullPage)
    commit('setfullPage', fullPage)
  },
  setfullPageNum: ({
      commit
  },fullPageNum) => {
      console.log(fullPageNum)
      commit('setfullPageNum', fullPageNum)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
