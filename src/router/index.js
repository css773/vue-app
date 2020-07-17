import Vue from 'vue'
import Router from 'vue-router'
// 导入刚才编写的组件
import AdminPage from '@/components/admin/AdminPage'
import ClientPage from '@/components/client/ClientPage'
import DelegantPage from '@/components/delegant/DelegantPage'
import Login from '@/components/Login'
import QueryOrder from '@/components/admin/QueryOrder'
import StorageCheck from '@/components/admin/StorageCheck'

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
          path: 'storageCheck',
          component: StorageCheck
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
      path: '/delegant/:id',
      name: 'DelegantPage',
      component: DelegantPage,
      children: [{
        path: 'validateOrder'
      },
      {
        path: 'queryOrder'
      },
      {
        path: 'storageCheck'
      }]
    }
  ]
})
