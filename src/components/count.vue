<template>
	<div style='width:500px;position:relative;line-height:28px;'>
		<div class='count-tem'>
			<span class='count-dec' @click='countDec'>-</span>
			<div class='input'><input type="text" name="paycount" v-model='paycount' @keyup='fixNumber'></div>
			<span class='count-asc' @click='countAsc'>+</span>
		</div>
		<span class='title'>一次最多只能购买30个</span>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				paycount:5,
				max:30,
				min:1
			}
		},
		methods:{
			countDec(){
				if(this.paycount<=this.min){
					this.paycount=this.min
				}else{
					this.paycount--
				}
			},
			countAsc(){
				if(this.paycount>=this.max){
					this.paycount=this.max
				}else{
					this.paycount++
				}
			},
			//数字的校验
			fixNumber(){
				let value;
				if(typeof this.paycount==='string'){
					value=Number(this.paycount.replace(/[^0-9]/ig, ""));
				}else{
					value=Number(this.paycount);
				}
				if(value>=this.max){
					value=this.max
				}
				this.paycount=value;
			}
		}
	}
</script>
<style scoped>
	.count-tem{
		width:100px;
		height:28px;
		border:1px solid #ccc;
		position: relative;
		line-height: 28px;
		-webkit-touch-callout: none; 
		-webkit-user-select: none; 
		-khtml-user-select: none; 
		-moz-user-select: none; 
		-ms-user-select: none; 
		user-select: none;
	}
	.count-dec{
		position: absolute;
		left:0px;
		top:0px;
		display: block;
		width:20px;
		text-align:center;
		border-right:1px solid #ccc;
		cursor:pointer;
	}
	.count-asc{
		position: absolute;
		right:0px;
		top:0px;
		display: block;
		width:20px;
		text-align:center;
		border-left:1px solid #ccc;
		cursor:pointer;
	}
	.input{
		width:50px;
	}
	.input input{
		width:100%;
		margin-left:21px;
		border:0;
		outline:0;
		padding:3px;
		text-align:center;
	}
	.title{
		position:absolute;
		left:110px;
		top:0;
		font-size:12px;
		color:#f00;
	}
</style>