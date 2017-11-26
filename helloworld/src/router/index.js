import Vue from 'vue'
import Router from 'vue-router'
import goods from '@/components/goods/goods'
import goodspagea from '@/components/goods/goodspagea'
import seller from '@/components/seller/seller'
import sellerpagea from '@/components/seller/sellerpagea'
import ratings from '@/components/ratings/ratings'
import ratingspagea from '@/components/ratings/ratingspagea'

Vue.use(Router)
export default new Router({
  routes: [
  	{
      path: '/',
      name: 'goods',
      component: goods
    },
    {
      path: '/goods',
      name: 'goods',
      component: goods,
      children:[
        {
          path: 'goodspagea',
          component: goodspagea
        },
        {
          path: 'sellerpagea',
          component: sellerpagea
        },
        {
          path: 'ratingspagea',
          component: ratingspagea
        }
      ]
    },
    {
      path: '/seller',
      name: 'seller',
      component: seller
    },
    {
      path: '/ratings',
      name: 'ratings',
      component: ratings
    }
  ]
})