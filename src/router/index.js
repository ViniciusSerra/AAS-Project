
import { createRouter, createWebHistory } from 'vue-router'
import loginView from '@/views/auth/loginView.vue'
import homeView from '@/views/homeView.vue'
import adminView from '@/views/adminView.vue'
import resposibleView from '@/views/responsaibleView.vue' 

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
  },
  {
    path: '/admin',
    name: 'admin',
    component: adminView
  },{
    path:'/responsaible',
    name:'responsaible',
    component: resposibleView
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
