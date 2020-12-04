import Vue from 'vue'
import VueRouter from 'vue-router'
import Container from '../views/Site/Container'

Vue.use(VueRouter)

const routes = [
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/',
    name: 'Home',
    component: Container,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'Landing',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/Home')
      },
      {
        path: '/search',
        name: 'SearchResult',
        component: () => import(/* webpackChunkName: "about" */ '../views/SearchResult')
      },
      {
        path: '/home-detail',
        name: 'HomeDetail',
        component: () => import(/* webpackChunkName: "about" */ '../views/HomeDetail')
      },
      {
        path: '/sale',
        name: 'Sale',
        redirect: '/sale/property',
        component: {
          render (c) {
            return c('router-view')
          }
        },
        children: [
          {
            path: 'property',
            name: 'Property',
            component: () => import(/* webpackChunkName: "about" */ '../views/Sale/Property')
          },
          {
            path: 'giantrealty',
            name: 'giantrealty',
            component: () => import(/* webpackChunkName: "about" */ '../views/Sale/Property')
          },
          {
            path: 'washingtonDC',
            name: 'washingtonDC',
            component: () => import(/* webpackChunkName: "about" */ '../views/Sale/Property')
          },
          {
            path: 'openhouse',
            name: 'openhouse',
            component: () => import(/* webpackChunkName: "about" */ '../views/Sale/Property')
          },
          {
            path: 'school-search',
            name: 'school-search',
            component: () => import(/* webpackChunkName: "about" */ '../views/Sale/Property')
          }
        ]
      },
      {
        path: '*',
        name: 'NoFound',
        component: () => import(/* webpackChunkName: "about" */ '../views/Error')
      }
    ]
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
