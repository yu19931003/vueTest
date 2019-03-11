<template>
	<div>
		<ul>
			<router-link tag='li' class='product' to='/' v-for='(item,index) in productList' :key='index'>
				<img :src="item.img" class='img'>
				<div class='info'>
					<h1>{{item.name}}</h1>
					<p>{{item.info}}</p>

				</div>
			</router-link>
		</ul>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				productList:[
					{
						name:'产品名称',
						img:require('../../../static/p1.gif'),
						info:'产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍',
						href:'/'
					},
					{
						name:'产品名称',
						img:require('../../../static/p2.jpg'),
						info:'产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍',
						href:'/'
					},
					{
						name:'产品名称',
						img:require('../../../static/p3.jpg'),
						info:'产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍',
						href:'/'
					},
					{
						name:'产品名称',
						img:require('../../../static/p4.jpg'),
						info:'产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍',
						href:'/'
					}
				]
			}
		}
	}
</script>
<style scoped>
	.product{
		width:418px;
		float:left;
		background:#fff;
		margin:10px;
		height:150px;
		padding:10px 16px;
		position:relative;
		cursor:pointer;
	}
	.product .img{
		position:absolute;
		left:10px;
		top:25px;
		width:100px;
		height:100px;
	}
	.product .info{
		position:absolute;
		top:25px;
		width:300px;
		right:10px;
	}
	.product .info h1{
		font-size:20px;
		line-height:40px;
	}
	.product .info:after{
		content:'';
		display:block;
		clear:both;
	}
</style>