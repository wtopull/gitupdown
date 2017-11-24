import Vue from 'vue'
import Router from 'vue-router'
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
  	{path: '/',redirect: 'indexone'},
    {path: '/indexone',name: 'indexone',component: indexone},
    {path: '/indextwo',name: 'indextwo',component: indextwo},
    {path: '/indexthree',name: 'indexthree',component: indexthree},
    {path:'/indexfour',name:'indexfour',component: indexfour},
    {path:'/indexfour/fcula', name:'fcula', component:fcula},
    {path:'/indexfour/fculb', name:'fculb', component:fculb},
		{path:'/indexfour/fculc', name:'fculc', component:fculc},
		{path:'/indexfour/fculd', name:'fculd', component:fculd}
]
});