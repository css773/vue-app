import Vue from 'vue'
import Router from 'vue-router'
// 导入刚才编写的组件
import AdminPage from '@/components/admin/AdminPage'
import ClientPage from '@/components/client/ClientPage'
import DelegantPage from '@/components/delegant/DelegantPage'
import Login from '@/components/Login'

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
      component: AdminPage
    },
    {
      path: '/client',
      name: 'ClientPage',
      component: ClientPage
    },
    {
      path: '/delegant',
      name: 'DelegantPage',
      component: DelegantPage
    }
  ]
})
