// rooter的配制
import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Index from '../view/index/index.vue'
import Manage from '../view/manage/manage.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
    	path:'/manage',
    	name:'Manage',
    	component:Manage
    }
  ]
})
