/**
 * component page list
 * @type Array
 */
export const componentsList = [
  {
    name: '基本组件',
    routes: [
      {
        path: '/button',
        name: 'button',
        component: () => import('../views/Button/index.vue'),
        meta: {
          title: 'Button'
        }
      },
      {
        path: '/alert',
        name: 'alert',
        component: () => import('../views/Alert/index.vue'),
        meta: {
          title: 'Alert'
        }
      },
      {
        path: '/grid',
        name: 'grid',
        component: () => import('../views/Grid/index.vue'),
        meta: {
          title: 'Grid'
        }
      },
      {
        path: '/icon',
        name: 'icon',
        component: () => import('../views/Icon/index.vue'),
        meta: {
          title: 'Icon'
        }
      },
      {
        path: '/cell',
        name: 'cell',
        component: () => import('../views/Cell/index.vue'),
        meta: {
          title: 'Cell'
        }
      },
      {
        path: '/layout',
        name: 'layout',
        component: () => import('../views/Layout/index.vue'),
        meta: {
          title: 'Layout'
        }
      },
      {
        path: '/tabs',
        name: 'tabs',
        component: () => import('../views/Tabs/index.vue'),
        meta: {
          title: 'Tabs'
        }
      }
    ]
  },
  {
    name: '表单',
    routes: [
      {
        path: '/tabs',
        name: 'tabs',
        component: () => import('../views/Tabs/index.vue'),
        meta: {
          title: 'Tabs'
        }
      }
    ]
  }
]

let componentsRoutes = []
componentsList.map(item => {
  componentsRoutes = componentsRoutes.concat(item.routes)
})

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
      ...componentsRoutes
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]
