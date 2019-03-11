<template>
	<div>
		<div class='analysis'>
			<h1>产品参数</h1>
			<p>这里是对产品的介绍这里是对产,品的介绍这里是对产品的介绍这里是对产品的介绍这里是对产品的介绍这里是对。产品的介绍这里是对产品的介绍这里是对产品的介绍这里是对产品的介绍这里是对产品的介绍这里是对产品的介绍这里是对产品的介绍。</p>
			<div class='projectAnalysis payCount'>
				<span>购买数量:</span>
				
			</div>
			<div class='projectAnalysis projectClass'>
				<span>产品类型:</span>
				<v-select :select-data='payCount'></v-select>
			</div>
			<div class='projectAnalysis time'>
				<span>有效时间:</span>半年
			</div>
			<div class='projectAnalysis count'>
				<span>总价:</span>5000元
			</div>
			<button class='btn'>立即购买</button>
		</div>
		<div></div>
	</div>
</template>
<script>
	import vSelect from '../../components/select'
	export default{
		components:{
			vSelect
		},
		data(){
			return{
				payCount:[
					{name:'类型1',id:1},
					{name:'类型2',id:2}
				]
			}
		}
	}
</script>
<style scoped>
	.analysis{
		height:350px;
		background:#fff;
		padding:20px 30px;
	}
	.analysis h1{
		line-height: 50px;
		font-size: 20px;
	}
	.analysis p{
		font-size: 16px;
		color:#666;
		line-height:28px;
	}
	.analysis .projectAnalysis{
		line-height: 40px
	}
	.analysis .projectAnalysis span{
		display:inline-block;
		width:100px;
		font-size: 16px;
	}
	.btn{
		width:80px;
		height:30px;
		margin-left:100px;
		background: #41b883;
		border:1px solid #41b883;
		color:#fff;
		border-radius:2px;
	}
</style>