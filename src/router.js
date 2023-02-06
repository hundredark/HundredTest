import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue';
import Auth from './pages/Auth.vue';
import Multisig from './pages/Multisig.vue';

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/auth',
    component: Auth
  },
  {
    path: '/multisig',
    component: Multisig
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes, // short for `routes: routes`
})

export default router
