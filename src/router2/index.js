import Vue from 'vue'
import Router from 'vue-router'
import twopage from '@/components/twopage'
import twopagechild from '@/components/twopagechild'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/twopage',
      name: 'twopage',
      component: twopage
    },
    {
      path: '/twopage/twopagechild',
      name: 'twopagechild',
      component: twopagechild
    },
  ]
})
