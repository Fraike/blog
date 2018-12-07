const state = () => ({
  fullPage: 0,
  fullPageNum: false,
  isArticleShow: false
})

const mutations = {
  setfullPage(state, val) {
    state.fullPage = val

  },
  setfullPageNum(state, val) {
    state.fullPageNum = val
  },
  setisArticleShow(state, val) {
    state.isArticleShow = val
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
  }, fullPageNum) => {
    commit('setfullPageNum', fullPageNum)
  },
  setisArticleShow: ({
    commit
  }, isArticleShow) => {
    commit('setisArticleShow', isArticleShow)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
