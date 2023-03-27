import { createRouter, createWebHistory } from 'vue-router'
import FormDangNhap from '@/views/FormDangNhap.vue'
import FormDangNhap from '@/views/FormDangKy.vue'
import TestComp from '@/views/TestComp.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: FormDangNhap
    },
    {
      path: '/register',
      name: 'register',
      component: FormDangKy
    },
    {
      path: '/',
      name: 'home',
      component: TestComp
    }
  ]
})

export default router
