
import { createRouter, createWebHistory } from 'vue-router'
import loginView from '@/views/auth/loginView.vue'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import( '@/views/Home.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: loginView,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
