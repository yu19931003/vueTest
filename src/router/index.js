import Vue from 'vue'
import Router from 'vue-router'

import IndexPage from '../pages/index'
import productList1 from '../pages/product/productList'
import detilIndex from '../pages/detilIndex'
import detilProductList from '../pages/detilProduct/detilProductList'



Vue.use(Router)

export default new Router({
    mode:'history',
	routes:[
		{
			path:'/',
			component:IndexPage,
			redirect:'productList1',
			children:[
				{
					path:'productList1',
					component:productList1
				}
				
			]
		},
		{
			path:'/detil',
			component:detilIndex,
			redirect:'/detil/detilProductList',
			children:[
				{
					path:'/detil/detilProductList',
					component:detilProductList
				}
				
			]
		}
	]
})
