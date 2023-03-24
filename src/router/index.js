import { createRouter, createWebHistory } from 'vue-router'
import TestComp from '@/components/TestComp.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: TestComp
    }
  ]
})

export default router
