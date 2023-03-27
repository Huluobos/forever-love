import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'layout',
      component:()=>import('@/views/layout/layout'),
      children:[
        {
          path: '/',
          name: 'index',
          component:()=>import('@/views/index/index'),
        },
        {
          path: 'draw',
          name: 'draw',
          component:()=>import('@/views/draw/draw'),
        },
        {
          path: 'list',
          name: 'list',
          component:()=>import('@/views/list/list'),
        }
      ]
    },
   

  ]
})
