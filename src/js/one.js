import Vue from 'vue'
import one from './one.vue'
import router from '../router1'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#one',
  router,
  render: h => h(one)
})
