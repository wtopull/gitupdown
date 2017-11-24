<template>
  <div class="indexthree">
    <h1>{{ msg }}</h1> 
    <div class="banner">
    	<img src="../assets/image/banner-3.jpg" />
    </div>
    <div class="threecontent">
    	<swiper :options="swiperOptionnav">
	    	<swiper-slide><threea></threea></swiper-slide>
	    	<swiper-slide><threeb></threeb></swiper-slide>
	    	<swiper-slide><threec></threec></swiper-slide>
	    	<swiper-slide><threed></threed></swiper-slide>
	  	</swiper>
	  	<div class="swiper-pagination" slot="pagination"></div>
    </div>
  </div>
</template>
<script>
	import threea	from './pageindexthree/threea.vue';
import threeb	from './pageindexthree/threeb.vue';
import threec	from './pageindexthree/threec.vue';
import threed	from './pageindexthree/threed.vue';
  export default {
    name: 'indexthree',
    data() {
      return {
        msg: 'Welcome to 优惠中心',
        swiperOptionnav: {
          setWrapperSize: true, //Wrapper上添加等于slides相加的宽高
          pagination: '.swiper-pagination', //
          paginationHide: true,
          paginationClickable: true, //圆点的点击事件
          paginationBulletRender: function(swiper, index, className) {
            return '<span class="' + className + '" >' + (index + 1) + '</span>';
          },
          observeParents: true //将observe应用于Swiper的父元素
        },
        swiperSlides: ['所有优惠', '首存优惠', 'VIP优惠', '其它优惠']
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    components:{
			threea,threeb,threec,threed
		}
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.indexthree{
	width:100%;
	overflow:hidden;
	height:100%;
	background:#222;
}
.threecontent{
	height:5rem;
	padding-top:0.93rem;
}
.threecontent .swiper-wrapper{
	height:2rem;
}
.threecontent .swiper-wrapper div.swiper-slide {
	float:left;
}
.threecontent .swiper-pagination-bullets{
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
.threecontent .swiper-pagination-bullets span.swiper-pagination-bullet{
	width:25%;
	height:.9rem;
	line-height:.9rem;
	color:#c3ab6d;
	background:#0C0E0E;
	display: inline-block;
}
.threecontent{
	position:relative;
}
.indexthree .swiperOptionnav{
	width:400%;
}

</style>