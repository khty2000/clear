import Vue from 'vue'
import Router from 'vue-router'
import FList from '@/views/FList'
import Config from '@/views/Config'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      component: FList
    },
    {
      path: '/config',
      component: Config
    }
  ]
})
