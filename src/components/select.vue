<template>
	<div class='select'>
		<div class='selectBox' @click='selectClick'>
			<span class='selectBtn'></span>
		</div>
		<div class='selectOption' v-show='selectOption'>
			<ul>
				<li v-for='(item,index) in select' :key='index' >{{item.name}}</li>
			</ul>
		</div>
	</div>
</template>
<script>
	export default{
		props:['selectData'],
		data(){
			return{
				selectOption:false,
				select:this.selectData
			}
		},
		created(){
			console.log(this.selectData)
		},
		methods:{
			selectClick(){
				this.selectOption=!this.selectOption
			}
		}
	}
</script>
<style>
   	.select{
   		position:relative;
   		cursor:pointer;
   		-webkit-touch-callout: none; 
		-webkit-user-select: none; 
		-khtml-user-select: none; 
		-moz-user-select: none; 
		-ms-user-select: none; 
		user-select: none;
   	}
	.selectBox{
		width:60px;
		height:20px;
		border:1px solid #ccc;
		position:relative;

	}
	.selectBox .selectBtn{
		border-right:5px solid transparent;
		border-left:5px solid transparent;
		border-top:5px solid #999;
		position:absolute;
		right:5px;
		top:8px;
	}
	.selectOption{
		border:1px solid #ccc;
		width:60px;
		position:absolute;
		left:0;
		top:20px;
		background:#ffff;
	}
	.selectOption li{
		line-height:20px;
		border-bottom:1px solid #ccc;
		text-align:center;
	}
	.selectOption li:last-child{
		border:0;
	}
</style>