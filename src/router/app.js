/**
 * component page list
 * @type Array
 */
export const componentsList = [
  {
    path: 'alert',
    name: 'alert',
    component: () => import('../views/Alert/index.vue'),
    meta: {
      title: 'Alert'
    }
  },
  {
    path: 'grid',
    name: 'grid',
    component: () => import('../views/Grid/index.vue'),
    meta: {
      title: 'Grid'
    }
  },
  {
    path: 'icon',
    name: 'icon',
    component: () => import('../views/Icon/index.vue'),
    meta: {
      title: 'Icon'
    }
  },
  {
    path: 'cell',
    name: 'cell',
    component: () => import('../views/Cell/index.vue'),
    meta: {
      title: 'Cell'
    }
  }
]
export default [
  {
    path: '/',
    component: () => import('../views/index/index.vue'),
    meta: {
      title: 'Bnb-Mobile'
    }
  },
  {
    path: '/',
    component: () => import('../views/layout.vue'),
    children: [
      ...componentsList
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]
