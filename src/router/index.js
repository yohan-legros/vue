import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import challenge from '../components/challenge.vue'






Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'Acceuille',
    component: Home
  },
  {
    path: '/challenge',
    name: 'challenge',
    component: challenge
  },

]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
