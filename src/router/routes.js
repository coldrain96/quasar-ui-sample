const routes = [
  { path: '/', redirect: '/home' },
  {
    path: '/home',
    component: () => import('layouts/HomeLayout.vue'),
    children: [
      { path: '/documents', component: () => import('pages/Documents.vue') },
      { path: '/chat', component: () => import('pages/Chat.vue') },
      { path: '/profile', component: () => import('pages/Profile.vue') },
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
