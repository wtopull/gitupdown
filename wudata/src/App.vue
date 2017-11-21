<template>
  <div id="app">
  	<div class="head">
  		<ul class="headNav">
  			<li v-for="(nav,index) in navs" class="navTab">{{nav.text}}</li>
  		</ul>
  	</div>
    <router-view/>
    <div class="footer">
  		<ul class="headNav">
  			<li v-for="(nav,index) in navs" class="navTab">{{nav.text}}</li>
  		</ul>
  	</div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data (){
  	return {
  		navs:[{
				text:"所有优惠",
				toggle:true
			},{
				text:"首存优惠",
				toggle:false
			},{
				text:"VIP优惠",
				toggle:false
			},{
				text:"其它优惠",
				toggle:false
			}]
  	}
  }
}
</script>

<style>
@import url("../src/assets/css/reset.css");
.headNav, .footer .headNav{
	height:0.6rem;
	line-height:0.6rem;
	width:100%;
}
.navTab, .footer .navTab{
	color:#333;
	font-size:0.20rem;
	float:left;
	width:25%;
	text-align:center;
}
.footer{
	background:#000;
	position:fixed;
	bottom:0;
	width:100%;
}
.footer .navTab{
	color:#fff;
}
</style>
