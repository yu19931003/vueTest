<template>
	<div>
		<div class='modal-shadow'></div>
		<div class='modal-info'>
			<span class='close' @click='close'>X</span>
			<slot>no message</slot>
		</div>
	</div>
</template>
<script>
	export default{
		methods:{
			close(){
				this.$emit('usrClose')
			}
		}
	}
</script>
<style scoped>
	.modal-shadow{
		position: absolute;
		left:0;
		top:0;
		right:0;
		bottom:0;
		background: rgba(0,0,0,0.5);
	}
	.modal-info{
		width:500px;
		height:300px;
		background:#fff;
		position: absolute;;
		left:50%;
		top:50%;
		margin-left:-250px;
		margin-top:-150px;
		z-index:999999;
	}
	.close{
		display: block;
		position: absolute;
		right:10px;
		top: 10px;
		cursor:pointer;
	}
</style>