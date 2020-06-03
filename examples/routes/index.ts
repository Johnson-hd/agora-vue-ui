import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('../views/index.vue'),
    },
    {
      path: '/theme',
      name: 'theme',
      component: () => import('../views/theme.vue'),
    },
    {
      path: '/component',
      name: 'component',
      component: () => import('../views/component.vue'),
      children: [
        {
          path: 'button',
          name: 'component-button',
          component: () => import('../views/component/button/index.vue'),
        },
        {
          path: 'menu',
          name: 'component-menu',
          component: () => import('../views/component/menu/index.vue'),
        },
      ],
    },
  ],
})
