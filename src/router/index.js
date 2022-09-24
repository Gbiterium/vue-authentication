import { createRouter, createWebHashHistory } from 'vue-router'
import SignupPage from '../views/SignUp.vue'
import LoginPage from '../views/Login.vue'

const routes = [
  {
    path: '/',
    name: 'register',
    component: SignupPage
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
