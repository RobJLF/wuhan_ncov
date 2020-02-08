import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './util/flexible'

import "./assets/less/index.less" /* 全局css样式 在最下面引入 可以覆盖vant的默认样式*/
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
