<template>
	<div class='content'>
		<div class='sider-bar'>
			<div v-for='(item,index) in productList' :key='index'>
				<img :src="item.img">
				<ul>
					<router-link class='list' tag='li' v-for='(item,index) in item.list' :to='item.url' :key='index'>{{item.title}}</router-link>
				</ul>
			</div>
		</div>
		<div class='content-info'>
			<router-view></router-view>
		</div>
		
	</div>
</template>
<script>
	export default{
		data(){
			return{
				productList:{
					pc:{
						title:'pc产品',
						img:require('../../static/p1.gif'),
						list:[
							{
								title:'产品一',
								url:'www.baidu.com',
							},
							{
								title:'产品二',
								url:'www',
							},
							{
								title:'产品三',
								url:'www',
							}
						]
					}
				}
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
	.sider-bar{
		text-align:center;
	}
	.sider-bar img{
		width:150px;
		height:150px;
		margin:20px 0px;
	}
	.sider-bar .list{
		line-height:30px;
		text-indent:30px;
		text-align:left;
		border-bottom:1px solid #efefef;
	}
	.sider-bar .list:hover{
		background:#41b883;
		color:#fff;
	}
</style>