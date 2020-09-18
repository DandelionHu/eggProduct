import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/article-add',
    name: 'ArticleAdd',
    component: () => import(/* webpackChunkName: "about" */ '../views/ArticleAdd.vue')
  },
  {
    path: '/article-detail',
    name: 'ArticleDetail',
    component: () => import(/* webpackChunkName: "about" */ '../views/ArticleDetail.vue')
  },
  {
    path: '/user',
    name: 'User',
    component: () => import(/* webpackChunkName: "about" */ '../views/User.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
