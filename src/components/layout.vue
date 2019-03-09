<template>
	<div>
		<div class='app-header'>
			<div class='app-header-inner'>
				<img src="../assets/logo.png">
				<div class='app-header-nav'>
					<ul class='nav-list'>
						<li @click='loginBox'>登录</li>
						<li class='nav-pile'>|</li>
						<li @click='registBox'>注册</li>
						<li class='nav-pile'>|</li>
						<li>关于</li>
						
					</ul>
				</div>
			</div>
		</div>
		<div class='app-content'>
			<router-view></router-view>
		</div>
		<div class='app-footer'><p>@2019年 yu</p></div>
		<app-modal v-show='showUsr' @usrClose='closeUsrBox'>
			<div class='usr-name'><span>用户名</span><input type="text" name="usrName"></div>
			<div class='usr-passworld'><span>密码</span><input type="passworld" name="usrpassworld"></div>
		</app-modal>
		<app-modal v-show='showRegist' @usrClose='closeRegistBox'>
			
			注册
		</app-modal>
	</div>
</template>
<script>

	import appModal from '../components/modal'
	export default{
		components:{
			appModal
		},
		data(){
			return {
				showUsr:false,
				showRegist:false,
			}
		},
		methods:{
			loginBox(){
				this.showUsr=true
			},
			closeUsrBox(){
				this.showUsr=false;
			},
			registBox(){
				this.showRegist=true;
			},
			closeRegistBox(){
				this.showRegist=false;
			}
		}
	}
</script>
<style>
	

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
.app-header{
	width:100%;
	height:60px;
	background:#363636;
}
.app-header .app-header-inner{
	width:1200px;
	height:60px;
	margin:0 auto;
}
.app-header .app-header-inner img{
	width:60px;
	float:left
}
.app-header .app-header-inner .app-header-nav{
	float:right;
}
.app-header .app-header-inner .app-header-nav li{
	float:left;
	line-height:30px;
	color:#ccc;
	padding:0 10px;
	margin:15px 0;
	cursor:pointer;
}
.app-content{
	background:#efefef;
	padding:20px 0
}
.app-footer{
	width:100%;
	height:60px;
	background:#cfcfcf;
	text-align:center;
	line-height:60px;
}
.usr-name input,.usr-passworld  input{
		width:300px;
		height:30px;
		border-radius:3px;
		border:1px solid #ccc;
		text-indent:10px;
		margin-left:10px;
	}
	.usr-name span,.usr-passworld span{
		display:inline-block;
		width:60px;
		text-align: justify;
    	text-align-last: justify;
	}
	.usr-name{
		margin:80px 0 10px 50px;
	}
	.usr-passworld{
		margin:0px 0 0px 50px;
	}
</style>