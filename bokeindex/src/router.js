import Vue from 'vue'
import Router from 'vue-router'
import MyMain from '@/views/mymain'
import Warehouse from '@/views/warehouse'
import Collection from '@/views/collection'
import Beekeepers from '@/views/beekeepers'
import Integration from '@/views/integration'
import MyEdit from '@/views/myedit'

import MyArticle from '@/views/myarticle'       //文章

import No404 from '@/views/404'

Vue.use(Router)

export default new Router({
    mode:'history',
    // base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'mymain',
      component: MyMain
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: '/integration',
      name: 'integration',
      component: Integration
    },
    {
      path: '/warehouse',
      name: 'warehouse',
      component: Warehouse 
    },
    {
      path: '/collection',
      name: 'collection',
      component: Collection
    },
    {
      path: '/beekeepers',
      name: 'beekeepers',
      component: Beekeepers
    },
    // 文章
    {
      path: '/article/:id',
      name: 'myarticle',
      component: MyArticle
      
    },
    // 编辑
    {
      path: '/edit',
      name: 'myedit',
      component: MyEdit
      
    },



    {
      path: '*',
      name: 'no404',
      component: No404
    },
  ]
})

