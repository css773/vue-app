import Vue from 'vue'
import Router from 'vue-router'
// 导入刚才编写的组件
import AdminPage from '@/components/admin/AdminPage'
import ClientPage from '@/components/client/ClientPage'
import DelegantPage from '@/components/delegant/DelegantPage'
import Login from '@/components/Login'
import QueryOrder from '@/components/delegant/QueryOrder'
import ValidateOrder from '@/components/delegant/validateOrder'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    // 下面都是固定的写法
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/admin',
      name: 'AdminPage',
      component: AdminPage,
      children: [
        {
          path: 'modifyOrder'
        },
        {
          path: 'validateOrder'
        },
        {
          path: 'queryOrder',
          component: QueryOrder
        }
      ]
    },
    {
      path: '/client/:id',
      name: 'ClientPage',
      component: ClientPage,
      children: [{
        path: 'addOrder'
      },
      {
        path: 'modifyOrder'
      },
      {
        path: 'queryOrder'
      }
      ]
    },
    {
      path: '/daibiao/:id',
      // name: 'DelegantPage',
      component: DelegantPage,
      children: [{
        path: 'queryOrder',
        component: QueryOrder
      },
      {
        path: 'validateOrder',
        component: ValidateOrder
      }]
    },
    {
      path: '/queryOrder',
      component: QueryOrder
    }
  ]
})
