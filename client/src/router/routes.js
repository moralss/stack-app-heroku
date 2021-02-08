import store from '../store'

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    meta: {
      requiresAuth: true
    },
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/setup', component: () => import('pages/SetUpPage.vue') },
      { path: '/viewer', component: () => import('pages/ObjectiveViewer.vue') }
    ]
  },
  {
    component: () => import('layouts/AuthLayout.vue'),
    path: '/',
    children: [{
      path: '/login',
      name: 'login',
      component: () => import('pages/auth/login.vue'),
      beforeEnter (to, from, next) {
        if (store.getters.isAuthenticated) {
          next('')
        } else {
          next()
        }
      }
    }],
  },
  // Always leave this as last one,
  // but you can also remove it
]

if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
