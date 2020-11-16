import Vue from "vue";
import Router from "vue-router"
 
import Login from '@/components/Login'
import Menu from '@/components/Menu'
import PastResult from '@/components/PastResult'
import SelectPage from '@/components/SelectPage'
import Result from '@/components/Result'
 
Vue.use(Router)
 
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/Login',
      component: Login
    },
    {
      path: '/Menu',
      component: Menu
    },
    {
      path: '/PastResult',
      component: PastResult
    },
    {
      path: '/SelectPage',
      component: SelectPage
    },
    {
      path: '/Result',
      component: Result
    },
  ]
})
