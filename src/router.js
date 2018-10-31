import Vue from 'vue'
import Router from 'vue-router'
import axios from './components/axios.vue'
import about from './components/about.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'axios',
      component: axios
    },
    {
      path: '/about',
      name: 'about',
      component: about
    }
  ]
})
