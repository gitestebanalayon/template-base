import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UsersView from '../views/UsersView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/users',
      name: 'users',
      component: UsersView
    },
    {
      path: '/cajas',
      name: 'cajas',
      component: UsersView
    },
    {
      path: '/categorias',
      name: 'categorias',
      component: UsersView
    },
    {
      path: '/correos',
      name: 'correos',
      component: UsersView
    },
    {
      path: '/archivos',
      name: 'archivos',
      component: UsersView
    },
    {
      path: '/mensajes',
      name: 'mensajes',
      component: UsersView
    },
    {
      path: '/facebook',
      name: 'facebook',
      component: UsersView
    },
    {
      path: '/correos',
      name: 'correos',
      component: UsersView
    },
    {
      path: '/a',
      name: 'a',
      component: UsersView
    },
    {
      path: '/b',
      name: 'b',
      component: UsersView
    },
    {
      path: '/c',
      name: 'c',
      component: UsersView
    },
    {
      path: '/d',
      name: 'd',
      component: UsersView
    },
    {
      path: '/e',
      name: 'e',
      component: UsersView
    },
    {
      path: '/f',
      name: 'f',
      component: UsersView
    },
  ]
})

export default router
