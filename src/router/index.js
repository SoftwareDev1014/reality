import Vue from 'vue'
import VueRouter from 'vue-router'
import Container from "../views/Site/Container";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Container,
    redirect: 'home',
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
        component: () => import(/* webpackChunkName: "about" */ '../views/Site/SearchResult')
      },
      {
        path: '/homedetail',
        name: 'HomeDetail',
        component: () => import(/* webpackChunkName: "about" */ '../views/Site/HomeDetail')
      },
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
