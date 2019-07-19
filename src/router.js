import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      displayOnNav:true,
      leftRoute:true
    },
    {
      path: '/about',
      name: 'About',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
      displayOnNav:true,
      leftRoute:true
    },
    {
      path: '/alerts',
      name: 'Alerts',
      component: () => import(/* webpackChunkName: "about" */ './views/Alert.vue'),
      displayOnNav:true,
      leftRoute:true
    },
    {
      path: '/account',
      name: 'Account',
      component: () => import(/* webpackChunkName: "about" */ './views/Account.vue'),
      displayOnNav:false
    }
  ]
})
