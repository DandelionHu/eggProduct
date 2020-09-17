import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './core/vantUse' // 按需引入
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
