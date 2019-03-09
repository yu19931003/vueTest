// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Layout from './components/layout'
import VRouter from 'vue-router'

import IndexPage from './pages/index'
Vue.use(VRouter)
Vue.config.productionTip = false
//实例化vueRouter
const router=new VRouter({
	mode:'history',
	routes:[
		{
			path:'/',
			component:IndexPage
		}
	]
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { Layout },
  template: '<Layout/>'
})
