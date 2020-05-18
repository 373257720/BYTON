import Vue from 'vue'
import two from './two.vue'
import router from '../router2'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#two',
  router,
  render: h => h(two)
})
