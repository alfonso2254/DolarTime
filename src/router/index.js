import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '../views/Venezuela/Calendario.vue')
  },
  {
    path: '/chile',
    name: 'DolarCl',
    component: () => import(/* webpackChunkName: "DolarCl" */ '../views/Chile/Calendario.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
