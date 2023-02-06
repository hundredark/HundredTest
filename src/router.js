import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: import('./pages/Home.vue'),
  },
  {
    path: '/auth',
    component: import('./pages/Auth.vue'),
  },
  {
    path: '/test',
    component: import('./pages/Test.vue'),
  },
  {
    path: '/multisig',
    component: import('./pages/Multisig.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes, // short for `routes: routes`
})

export default router
