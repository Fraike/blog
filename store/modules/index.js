const state = () => ({
  fullPage: 0,
  fullPageNum: false,
  isArticleShow: false,
  imgList: [],
  shareTop: null
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
  },
  setimgList(state,val){
    state.imgList = val
  },
  setshareTop(state,val){
    state.shareTop = val
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
  },
  setimgList: ({
    commit
  }, imgList) => {
    commit('setimgList', imgList)
  },
  setshareTop: ({
    commit
  }, shareTop) => {
    commit('setshareTop', shareTop)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
