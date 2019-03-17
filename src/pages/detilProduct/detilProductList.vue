<template>
	<div>
		<div class='analysis'>
			<h1>产品参数</h1>
			<p>这里是对产品的介绍这里是对产,品的介绍这里是对产品的介绍这里是对产品的介绍这里是对产品的介绍这里是对。产品的介绍这里是对产品的介绍这里是对产品的介绍这里是对产品的介绍这里是对产品的介绍这里是对产品的介绍这里是对产品的介绍。</p>
			<div class='projectAnalysis payCount'>
				<span>购买数量:</span>
				<v-count class='count'></v-count>
			</div>
			<div class='projectAnalysis projectClass'>
				<span>产品类型:</span>
				<v-select :select-data='payCalss' class='select' @on-change='selectOption'></v-select>
			</div>
			<div class='projectAnalysis time'>
				<span>有效时间:</span>半年
			</div>
			<div class='projectAnalysis count'>
				<span>总价:</span>5000元
			</div>
			<button class='btn'>立即购买</button>
		</div>
		<div class='projectInfo'>
			<h1>产品介绍</h1>
			<p>产品的详细介绍产品的详细介绍产品的详细介绍产品的详细介绍产品的详细介绍产品的详细介绍产品的详细介绍产品的详细介绍产品的详细介绍产品的详细介绍产品的详细介绍产品的详细介绍产品的详细介绍产品的详细介绍产品的详细介绍产品的详细介绍产品的详细介绍产品的详细介绍产品的详细介绍产品的详细介绍产品的详细介绍产品的详细介绍产品的详细介绍产品的详细介绍产品的详细介绍产品的详细介绍产品的详细介绍产品的详细介绍产品的详细介绍产品的详细介绍产品的详细介绍产品的详细介绍产品的详细介绍产品的详细介绍产品的详细介绍。</p>
		</div>
	</div>
</template>
<script>
	import vSelect from '../../components/select'
	import vCount from '../../components/count'
	export default{
		components:{
			vSelect,
			vCount
		},
		data(){
			return{
				payCalss:[
					{name:'产品',id:1},
					{name:'类型2',id:2}
				]
			}
		},
		methods:{
			selectOption(index){
				console.log(index)
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
	h1{
		line-height: 50px;
		font-size: 20px;
	}
	p{
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
	.select{
		display:inline-block;
	}
	.projectInfo{
		height:200px;
		background:#fff;
		margin-top:20px;
		padding:20px 30px;
	}
	.count{
		display:inline-block;
		
	}
</style>