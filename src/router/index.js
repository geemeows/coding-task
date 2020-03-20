import Vue from 'vue'
import VueRouter from 'vue-router'
import DashboardLayout from '@/layouts/DashboardLayout'
import AuthLayout from '@/layouts/AuthLayout'
import Login from '@/views/Login'
import Cookies from 'vue-cookies'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Auth',
    component: AuthLayout,
    children: [
      {
        path: '/',
        name: 'Login',
        component: Login,
        beforeEnter: (to, from, next) => {
          if (Cookies.isKey('token')) {
            next('/dashboard')
          } else {
            next()
          }
        }
      }
    ]
  },
  {
    path: '/',
    name: 'Dashboard',
    component: DashboardLayout,
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import(/* webpackChunkName: "dashboard" */ '../views/Dashboard.vue'),
        beforeEnter: (to, from, next) => {
          if (Cookies.isKey('token')) {
            next()
          } else {
            next('/')
          }
        }
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
