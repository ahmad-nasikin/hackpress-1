import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Articles from '@/components/Article'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/articles',
      name: 'Articles',
      component: Articles
    }
  ]
})
