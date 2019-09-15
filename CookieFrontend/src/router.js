import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Registracija from './views/Registracija.vue'
import Izbornik from './views/Izbornik.vue'
import Novi from './views/Novi.vue'
import Recept from './views/Recept.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/Registracija',
      name: 'Registracija',
      component: Registracija
    },
    {
      path: '/Izbornik',
      name: 'Izbornik',
      component: Izbornik
    },
    {
      path: '/Novi',
      name: 'Novi',
      component: Novi
    },
    {
      path: '/Recept',
      name: 'recept',
      component: Recept
    }
  ]
})
