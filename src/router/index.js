import Vue from 'vue'
import VueRouter from 'vue-router'
// 引入頁面component
import Video from '../views/Video.vue'
import Play from '../views/Play.vue'
import Like from '../views/Like.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Video',
    component: Video
  },
  {
    path: '/play',
    name: 'Play',
    component: Play
  },
  {
    path: '/like',
    name: 'Like',
    component: Like
  },

]

const router = new VueRouter({
  routes
})

export default router
