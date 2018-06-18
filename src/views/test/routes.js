export default {
  path: '/test',
  redirect: '/test/index',
  component: () => import('@/views/test/_Layout'),
  children: [
    {
      path: 'index',
      component: () => import('@/views/test/index'),
      meta: { auth: true }
    },
    {
      path: 'button',
      component: () => import('@/views/test/button'),
      meta: { auth: true }
    },
    {
      path: 'select',
      component: () => import('@/views/test/select'),
      meta: { auth: true }
    }
  ]
}