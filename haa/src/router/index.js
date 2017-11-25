import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import aaa from '@/components/aaa'
import bbb from '@/components/bbb'
import ccc from '@/components/ccc'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/aaa',
      name: 'aaa',
      component: aaa
    },
    {
      path: '/bbb',
      name: 'bbb',
      component: bbb
    },
    {
      path: '/ccc',
      name: 'ccc',
      component: ccc
    }
  ]
})
