import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home.vue'
import City from '@/components/List.vue'
import Detail from '@/components/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path:'/city',
      name:'City',
      component:City
    },
    {
      path:'/detail/:id',
      name:'Detail',
      component:Detail
    }
  ]
})
