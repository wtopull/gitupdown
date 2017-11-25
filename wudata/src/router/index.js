import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import indexone from '@/components/indexone'
import indextwo from '@/components/indextwo'
import indexthree from '@/components/indexthree'
import indexfour from '@/components/indexfour'
import fcula	from '@/components/pageindexfour/fcula'
import fculb	from '@/components/pageindexfour/fculb'
import fculc	from '@/components/pageindexfour/fculc'
import fculd	from '@/components/pageindexfour/fculd'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
  	{path: '/',redirect: 'indexone'},
    {path: '/indexone',name: 'indexone',component: indexone},
    {path: '/indextwo',name: 'indextwo',component: indextwo},
    {path: '/indexthree',name: 'indexthree',component: indexthree},
    {path:'/indexfour',name:'indexfour',component: indexfour},
	]
});
