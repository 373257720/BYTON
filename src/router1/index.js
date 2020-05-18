import Vue from 'vue'
import Router from 'vue-router'
import onepage from '@/components/onepage'
import onepageChild from '@/components/onepageChild'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/onepage',
      name: 'onepage',
      component: onepage
    },
    {
      path: '/onepage/onepagechild',
      name: 'onepage-child',
      component: onepageChild
    },
  ]
})
