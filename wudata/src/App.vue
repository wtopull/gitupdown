<template>
  <div id="app">
    <div class="content">
      <router-view />
    </div>

    <div class="footerDiv">
      <ul class="footer">
        <!--<router-link v-for="(nav,index) in navs" class="footernav" to="/indexone" tag="li">{{ nav }}</router-link>-->
        <router-link class="footernav" to="/indexone" tag="li">首页</router-link>
        <router-link class="footernav" to="/indextwo" tag="li">彩票游戏</router-link>
        <router-link class="footernav" to="/indexthree" tag="li">优惠活动</router-link>
        <router-link class="footernav" to="/indexfour" tag="li">个人中心</router-link>
      </ul>
    </div>

  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
  	return{
  	  rts:['indexone','indextwo','indexthree','indexfour'],
  		navs:['第一页','第二页','第三页','第四页']
  	}
  }
}
</script>

<style>
*{
	margin:0;
	padding:0;
}
body,html{
	font-size:100px;
	width:100%;
	height:100%;
	background:#f2f2f2;
}
ul{
	list-style: none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size:0.3rem;
  height:100%;
  width:100%;
}
.content{
	height:92%;
}
.footerDiv{
	height:1.0672rem;
}
.footer{
	width:100%;
  height:1.0672rem;
	list-style:none;
	position: fixed;
	bottom:0;
	background:#272822;
}
.footer li.footernav{
	width:25%;
	float:left;
	color:#c3ab6d;
	height:1.0672rem;
	line-height:1.0672rem;
}
.indexone,.indextwo,.indexthree,.indexfour{
  width:100%;
  height:100%;
}

</style>
