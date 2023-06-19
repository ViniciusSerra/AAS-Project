
import { createRouter, createWebHistory } from 'vue-router'
import loginView from '@/views/auth/loginView.vue'
import homeView from '@/views/homeView.vue'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: loginView,
  },
  {
    path: '/home',
    name: 'home',
    component: homeView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
