import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// 引入頁面component
import Video from '../views/Video.vue'
import Play from '../views/Play.vue'
import Like from '../views/Like.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/video',
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



  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
