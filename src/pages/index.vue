<template>
	<div class='content'>
		<div class='sider-bar'>
			<div v-for='(item,index) in productList' :key='index'>
				<h3  class='sider-bar-titie'>{{item.title}}</h3>
				<ul>
					<li v-for='(item,index) in item.list' :to='item.url' :key='index'>{{item.title}}</li>
				</ul>
			</div>
		</div>
		<div class='content-info'>
			<silder-show :silder='silderList' @change='dosomething'></silder-show>
			<router-view></router-view>
		</div>
		
	</div>
</template>
<script>
	import silderShow from '../components/silderShow'
	export default{
		components:{
			silderShow
		},
		data(){
			return{
				silderList:[
					{
						src:require('../../static/TX.jpg'),
						title:'风景'

					},
					{
						src:require('../../static/gou.jpg'),
						title:'动物'

					}
				],
				productList:{
					pc:{
						title:'pc产品',
						list:[
							{
								title:'产品一',
								url:'www'
							},
							{
								title:'产品二',
								url:'www'
							},
							{
								title:'产品三',
								url:'www'
							}
						]
					},
					app:{
						title:'应用类',
						list:[
							{
								title:'产品一',
								url:'www'
							},
							{
								title:'产品二',
								url:'www'
							},
							{
								title:'产品三',
								url:'www'
							}
						]
					}
				}
			}
		},
		methods:{
			dosomething(){
				//console.log('run')
			}
		}
	}
</script>
<style scoped>
	.content{
		width:1200px;
		margin:0 auto;
		overflow:hidden;
	}
	.sider-bar{
		width:250px;
		background:#fff;
		height:500px;
		float:left;
	}
	.content-info{
		width:940px;
		float:right;
	}
	.sider-bar-titie{
		line-height:37px;
		background:#41b883;
		color:#fff;
		text-indent:20px;
	}
	.sider-bar li{
		line-height:30px;
		text-indent:30px;
		margin:0 10px;
		border-bottom:1px solid #efefef;
	}
	
</style>