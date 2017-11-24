<template>
  <div class="indexfour">
    <h1>{{ msg }}</h1>
    <!--<banner></banner>-->
    <div class="banner">
    	<img src="../assets/image/banner-2.jpg" />
    </div>
    <div class="fourcontent">
    	<swiper :options="swiperOptionnav">
	    	<swiper-slide><fcula></fcula></swiper-slide>
	    	<swiper-slide><fculb></fculb></swiper-slide>
	    	<swiper-slide><fculc></fculc></swiper-slide>
	    	<swiper-slide><fculd></fculd></swiper-slide>
	  	</swiper>
	  	<div class="swiper-pagination" slot="pagination"></div>
    </div>
  </div>
</template>
<script>
//import banner from './banner/banner.vue';
import fcula	from './pageindexfour/fcula.vue';
import fculb	from './pageindexfour/fculb.vue';
import fculc	from './pageindexfour/fculc.vue';
import fculd	from './pageindexfour/fculd.vue';
export default {
  name: 'indexfour',
  data () {
    return {
      msg: 'Welcome to 游戏中心',
      swiperOptionnav: {
          setWrapperSize :true,								//Wrapper上添加等于slides相加的宽高
          pagination : '.swiper-pagination',	//
          paginationHide :true,
          paginationClickable :true,					//圆点的点击事件
          paginationBulletRender: function (swiper, index, className) {
				     return '<span class="' + className + '" >' + (index + 1) + '</span>';
				  },
          observeParents:true									//将observe应用于Swiper的父元素
        },
        swiperSlides: ['彩票游戏','真人视频','电子游戏','体育赛事']
    }
  },
  computed: {
	  swiper() {
	    return this.$refs.mySwiper.swiper
	  }
	},
  components:{
		fcula,fculb,fculc,fculd
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.indexfour{
	width:100%;
	overflow:hidden;
	height:100%;
	background:#222;
}
.fourcontent{
	height:5rem;
	padding-top:0.93rem;
}
.fourcontent .swiper-wrapper{
	height:2rem;
}
.fourcontent .swiper-wrapper div.swiper-slide {
	float:left;
}
.fourcontent .swiper-pagination-bullets{
	width:100%;
	background: #999;
	position:absolute;
	top:0;
}
.banner img{
	height:3rem;
	width:7.5rem;
	display:block;
}
.fourcontent .swiper-pagination-bullets span.swiper-pagination-bullet{
	width:25%;
	height:.9rem;
	line-height:.9rem;
	color:#c3ab6d;
	background:#0C0E0E;
	display: inline-block;
}
.fourcontent{
	position:relative;
}
.indexfour .swiperOptionnav{
	width:400%;
}

</style>
