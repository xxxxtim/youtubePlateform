import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    videoInfo: [],
    videoInfo2: [],
    videoInfo3: [],
    videoId: '',

    likeDatas: [],
    totalLikePage: 0,
    nowLikePage: 0,
    totalPage: 0,
    totalPages: 0,
    nowPage: 0,

  },
  getters: {
    getVideosDatas(state) {
      console.log(typeof state.videoInfo)
      let specData = state.nowPage * 12;
      return state.videoInfo.filter((item, index) =>
        ((0 + specData) <= index) && (index <= (11 + specData)))

    },
    getlikeDatas(state) {
      let specData = state.nowLikePage * 12;
      return state.likeDatas.filter((item, index) =>
        ((0 + specData) <= index) && (index <= (11 + specData)))
    },

    getTotalPages(state) {
      console.log(state)
      console.log(state.totalPages);
      return state.totalPages
    },
    getTotalLikePage(state) {
      console.log(state.totalLikePage)
      return state.totalLikePage
    }

  },
  mutations: {
    setNowPage(state, nowPage) {
      state.nowPage = nowPage - 1
      console.log(state.nowPage)

    },

    setNowLikePage(state, nowLikePage) {
      state.nowLikePage = nowLikePage - 1
    },

    setVideosDatas3(state, videoInfo3) {
      state.videoInfo3 = videoInfo3
    },

    setVideosDatas2(state, videoInfo2) {
      state.videoInfo2 = videoInfo2

    },

    combineDatas(state) {
      state.videoInfo = state.videoInfo2.concat(state.videoInfo3)
      state.totalPages = Math.ceil(state.videoInfo.length / 12)
    },

    setlikeDatas(state, item) {
      state.likeDatas.push(item);
      // console.log(state.likeDatas)
    },
    removeLikeDatas(state, item) {
      let index = state.likeDatas.indexOf(item)
      state.likeDatas.splice(index, 1)
      // console.log(state.likeDatas)
    },
    saveDatas2Sotrage(state) {
      localStorage.clear()
      localStorage.setItem("likeDatas", JSON.stringify(state.likeDatas));
      // state.likeDatas = JSON.parse(localStorage.getItem('likeDatas'))
    },
    upDateLikeDatas(state) {
      state.likeDatas = JSON.parse(localStorage.getItem('likeDatas'));

      state.totalLikePage = Math.ceil(state.likeDatas.length / 12);
      // console.log('喜歡總頁數', state.totalLikePage)
    },

  },
  actions: {


    async getAllDatas({ commit }) {
      const url1 = 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails,status&key=AIzaSyCvT1lbu7vXB2PNHK2vIpadBU4Zkiz-CeU&maxResults=50&playlistId=PLTh6nRYwToU_B5pV29Fmm-1IHKBaPuOEP'
      const response1 = await axios
        .get(url1, {
          headers: {

          }
        })
      commit('setVideosDatas2', response1.data.items);

      const url2 = 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails,status&key=AIzaSyCvT1lbu7vXB2PNHK2vIpadBU4Zkiz-CeU&maxResults=50&pageToken=CDIQAA&playlistId=PLTh6nRYwToU_B5pV29Fmm-1IHKBaPuOEP'
      const response2 = await axios
        .get(url2, {
          headers: {

          }
        })
      commit('setVideosDatas3', response2.data.items)

      commit('combineDatas');

    },
  },
  modules: {
  }
})
