import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Moviepreview from '../views/MoviePreview.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/movie-preview/:id',
    name: 'MoviePreview',
    component: Moviepreview,
    props: true
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
