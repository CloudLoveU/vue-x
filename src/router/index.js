import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import select from '@/components/select'
import Increment from '@/components/Increment'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/',
      name: 'select',
      component: select
    },
    {
      path: '/Increment',
      name: 'Increment',
      component: Increment
    }
  ]
})
