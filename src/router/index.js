
import { createRouter, createWebHistory } from 'vue-router'
import loginView from '@/views/auth/loginView.vue'
import homeView from '@/views/homeView.vue'
import adminView from '@/views/adminView.vue'
import resposibleView from '@/views/responsaibleView.vue'
import secretaryView from '@/views/secretaryView.vue'
import teacherView from '@/views/teacherView.vue'
import studentyView from '@/views/studentyView.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: loginView,
  },
  {
    path: '/home',
    name: 'home',
    component: () => homeView
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => adminView
  },{
    path:'/responsaible',
    name:'responsaible',
    component: () => resposibleView
  },
  {
    path:'/secretary',
    name:'secretary',
    component: () => secretaryView

  },
  {
    path:'/teacher',
    name:'teacher',
    component: () => teacherView
  },
  {
    path:'/studenty',
    name:'studenty',
    component: () => studentyView
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
