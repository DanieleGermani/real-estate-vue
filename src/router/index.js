import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/admin/AdminLayout.vue'),
      children: [
        {
          path: '/admin/propiedades',
          name: 'admin-propiedades',
          component: () =>import('../views/admin/AdminView.vue')
        },
        {
          path: '/admin/nueva',
          name: 'nueva-propiedad',
          component: () => import('../views/admin/NuevaPropiedadView.vue')
        },
        {
          path: '/admin/editar/:id',
          name: 'editar-propiedad',
          component: () => import('../views/admin/EditPropiedadView.vue')
        },
      ]
    },
  ]
})

export default router
