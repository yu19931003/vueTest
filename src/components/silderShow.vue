<template>
	<div class='silder-show' @mouseout='invtval' @mouseover='clearInval'>
		<ul>
			<li>
				<a href="">
					<img :src='silder[newindex].src'>
				</a>
			</li>
		</ul>
		
		<h2>{{silder[newindex].title}}</h2>
		<ul class='silder-page'>
			<li @click='goto(priveIndex)'>&lt;</li>
			<li v-for='(item,index) in silder.length' :key='index' @click='goto(item-1)'>{{item}}</li>
			<li @click='goto(nextIndex)'>&gt;</li>
		</ul>
		
	</div>
</template>
<script>

	export default{
		props:{
			silder:{
				type:Array,
				default:[]
			}
		},
		
		data(){
			return{
				newindex:0,
				invalId:''
			}
		},
		computed:{
			priveIndex(){
				if(this.newindex===0){
					return this.silder.length-1
				}else{
					return this.newindex-1
				}
			},
			nextIndex(){
				if(this.newindex===this.silder.length-1){
					return 0
				}else{
					return this.newindex+1
				}
			}

		},
		created(){
			
		},
		methods:{
			goto(index){
				this.newindex=index;
				this.$emit('change',index)
			},
			invtval(){
				this.invalId=setInterval(()=>{
					this.goto(this.nextIndex)
				},1000)
			},
			clearInval(){
				clearInterval(this.invalId)
			}
		},
		mounted(){
			this.invtval()
		}

	}
</script>
<style scoped>
	.silder-show{
		wdith:100%;
		height:300px;
		position:relative;
	}
	.silder-show li{
		wdith:100%;
		height:300px;
		overflow:hidden;
	}
	h2{
		width:100%;
		line-height:30px;
		background:rgba(0,0,0,0.6);
		position:absolute;
		bottom:0;
		z-index:999;
		color:#fff;
		text-indent:20px;
	}
	.silder-page{
		position:absolute;
		right:20px;
		bottom:0;
		z-index:9999;
	}
	.silder-page li{
		float:left;
		height:20px;
		margin:0 20px;
		color:#fff;
		cursor:pointer
		
	}
	

</style>