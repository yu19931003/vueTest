<template>
	<div class='select'>
		<div class='selectBox' @click='selectClick'>
			<span class='selectedData'>{{selectData[selectedDataIndex].name}}</span>
			<span class='selectBtn'></span>
		</div>
		<div class='selectOption' v-show='selectOption'>
			<ul>
				<li v-for='(item,index) in select' :key='index' @click='selectedOption(index)'>{{item.name}}</li>
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
				select:this.selectData,
				selectedDataIndex:0//被选中的值
			}
		},
		created(){
			console.log(this.selectData)
		},
		methods:{
			selectClick(){
				this.selectOption=!this.selectOption;
			},
			//被选中的方法
			selectedOption(index){
				this.selectedDataIndex=index;
				this.selectOption=false;
				this.$emit('on-change',index);
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
		width:80px;
		height:28px;
		border:1px solid #ccc;
		position:relative;

	}
	.selectBox .selectBtn{
		border-right:5px solid transparent;
		border-left:5px solid transparent;
		border-top:5px solid #999;
		position:absolute;
		right:10px;
		top:12px;
	}
	.selectOption{
		border:1px solid #ccc;
		width:80px;
		position:absolute;
		left:0;
		top:27px;
		background:#ffff;
	}
	.selectOption li{
		line-height:20px;
		border-bottom:1px solid #ccc;
		text-indent:10px;
	}
	.selectOption li:last-child{
		border:0;
	}
	.selectedData{
		display:block;
		margin-top:-5px;
		margin-left:10px;
	}
</style>