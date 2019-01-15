const state = () => ({
  fullPage: 0,
  fullPageNum: false,
  isArticleShow: false,
  imgList: [],
  shareTop: null,
  isShowShare:false,
  linkList: []
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
  },
  setshowShare(state,val){
    state.isShowShare = val
  },
  setlinkList(state,val){
    state.linkList = val
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
  },
  setshowShare: ({
    commit
  }, isShowShare) => {
    commit('setshowShare', isShowShare)
  },
  setlinkList: ({
    commit
  }, linkList) => {
    commit('setlinkList', linkList)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
