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
          meta:{
            showHeader:true,
            headerName:"首页",
          },
          component:()=>import('@/views/index/index'),
        },
        {
          path: 'draw',
          name: 'draw',
          meta:{
            showHeader:false,
            headerName:"抽奖",
          },
          component:()=>import('@/views/draw/draw'),
        },
        {
          path: 'dream',
          name: 'dream',
          meta:{
            showHeader:false,
            headerName:"愿望",
          },
          component:()=>import('@/views/dream/dream'),
        }
      ]
    },

    {
      path: '/login',
      name: 'login',
      meta:{
        showHeader:false,
        headerName:"登录",
      },
      component:()=>import('@/views/login/login'),
    },

  ]
})
