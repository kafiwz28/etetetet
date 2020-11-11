import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Profile from '@/components/Profile'
import Contact from '@/components/Contact'
import Register from '@/components/Register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    }
  ]
})
