// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// global
import extendF from './extend'

// style
import '@/styles/reset.css'
import './packages/fontAwesome/css/font-awesome.min.css'

// add global extend
extendF()

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
