import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    videoInfo: [],
    videoId: '',
    nextPageToken: [],
    likeDatas: []

  },
  getters: {
    getVideosDatas(state) {
      return state.videoInfo

    },
    getNextPageToken(state) {
      return state.nextPageToken

    },
    getlikeDatas(state) {
      return state.likeDatas
    }

  },
  mutations: {
    setVideosDatas(state, videoInfo) {
      state.videoInfo = videoInfo
      console.log(videoInfo)
    },
    setNextPageToken(state, nextPageToken) {
      state.nextPageToken.push(nextPageToken);
    },
    setlikeDatas(state, item) {
      state.likeDatas.push(item);
      console.log(state.likeDatas)
    },
    removeLikeDatas(state, item) {
      let index = state.likeDatas.indexOf(item)
      state.likeDatas.splice(index, 1)
      console.log(state.likeDatas)



    },
  },
  actions: {
    async getVideosAPI({ commit }) {
      const url = 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails,status&key=AIzaSyCvT1lbu7vXB2PNHK2vIpadBU4Zkiz-CeU&maxResults=12&playlistId=PLi0ZZWlxtL4GXi4SnOR1ndNuRM_zZKJw1'
      const response = await axios
        .get(url, {
          headers: {

          }
        })
      console.log(response.data.nextPageToken);
      commit('setVideosDatas', response.data.items)
      commit('setNextPageToken', response.data.nextPageToken)

    },
  },
  modules: {
  }
})
