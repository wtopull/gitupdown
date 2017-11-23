<template>
  <div class="indexfour">
    <h1>{{ msg }}</h1>
    <banner></banner>
    <ul class="fournav">
			<router-link to="/fcula" tag="li">彩票游戏</router-link>
			<router-link to="/fculb" tag="li">真人视频</router-link>
			<router-link to="/fculc" tag="li">电子游戏</router-link>
			<router-link to="/fculd" tag="li">体育赛事</router-link>
		</ul>
		<div class="fourcontent">
			<ul class="fcul">
				<!--<router-link name="fcula" :to="{name: 'indexfour', params: {userID: 4}}" tag="li">-->
				<li><fcula></fcula></li>
				<li><fculb></fculb></li>
				<li><fculc></fculc></li>
				<li><fculd></fculd></li>
			</ul>
		</div>
  </div>
</template>

<script>
import banner from './banner/banner.vue';
import fcula	from './pageindexfour/fcula.vue';
import fculb	from './pageindexfour/fculb.vue';
import fculc	from './pageindexfour/fculc.vue';
import fculd	from './pageindexfour/fculd.vue';
export default {
  name: 'indexfour',
  data () {
    return {
      msg: 'Welcome to indexfour'
    }
  },
  computed: {
	  swiper() {
	    return this.$refs.mySwiper.swiper
	  }
	},
  components:{
		banner,fcula,fculb,fculc,fculd
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

.fournav{
	width:100%;
	height:.9rem;
	background:#272822;
}
.fournav li{
	float:left;
	width:25%;
	height:.9rem;
	line-height:.9rem;
	color:#fff;
}
.fourcontent{
	width:100%;
	height:61.8%;
	background:red;
	overflow:hidden;
}
.fcul{
	width:400%;
	height:100%;
	background:green;
}
.fcul li{
	float:left;
	width:7.5rem;
	height:100%;
}
</style>
