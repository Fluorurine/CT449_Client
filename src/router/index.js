import { createRouter, createWebHistory } from 'vue-router'

// import TestComp from '@/components/TestComp.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/FormDangNhap.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/FormDangKy.vue')
    },
    {
      path: '/',
      name: 'homepage',
      component: () => import('@/views/HomePage.vue')
    },
    {
      path: '/product',
      name: 'product',
      component: () => import('@/views/ProductCategory.vue')
    },
    {
      path: '/product/detail',
      name: 'producdetail',
      component: () => import('@/views/ProductDetailPage.vue')
    },
    {
      path: '/cart',
      name: 'shoppingcart',
      component: () => import('@/views/ShoppingCart.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('@/views/DashboardComp.vue'),
      children: [
        { path: '/dashboard/', component: () => import('@/components/ProfilePageComp.vue') },
        {
          path: '/dashboard/product',
          component: () => import('@/components/DashBoardProduct.vue')
        },
        {
          path: '/dashboard/transaction',
          component: () => import('@/components/DashBoardTransaction.vue')
        }
      ]
    },
    {
      path: '/admin',
      name: 'admindashboard',
      component: () => import('@/views/AdminDashboardComp.vue'),
      children: [
        { path: '/admin/', component: () => import('@/components/AdminComp/AdminUser.vue') },
        {
          path: '/admin/product',
          component: () => import('@/components/AdminComp/AdminProduct.vue')
        },
        {
          path: '/admin/transaction',
          component: () => import('@/components/DashBoardTransaction.vue')
        }
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/views/NotFound.vue')
    }
  ]
})

export default router
