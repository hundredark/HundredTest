export const router = {
  routes: [
    {
      path: '/',
      name: '主页',
      component: import('./pages/Home.vue'),
    },
    {
      path: '/auth',
      component: import('./pages/Auth.vue'),
    },
    {
      path: '/test',
      name: '测试',
      component: import('./pages/Test.vue'),
    },
    // {
    //   path: '/multisig',
    //   component: import('./pages/Multisig.vue'),
    // }
  ],
  base: '/HundredTest/'
}

export default router
