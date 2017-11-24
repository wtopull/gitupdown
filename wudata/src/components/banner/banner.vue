<template>
  <div class="banner">
    <swiper :options="swiperOption">
	    <swiper-slide v-for="slide in swiperSlides"><img :src="slide"/></swiper-slide>
	    <!--<div class="swiper-pagination" slot="pagination"></div>-->
  	</swiper>
  </div>
</template>
<script>
  export default {
    name: 'carrousel',
    data() {
      return {
        swiperOption: {
          autoplay:4000,											//时间
					loop:true,													//无限循环轮播
          setWrapperSize :true,								//Wrapper上添加等于slides相加的宽高
          pagination : '.swiper-pagination',	//
          paginationHide :true,
          //paginationClickable :true,					//圆点的点击事件
//        paginationBulletRender: function (swiper, index, className) {
//				     return '<span class="' + className + '">' + (index + 1) + '</span>';
//				  },
          mousewheelControl : true,						//true可以用滑轮
          onlyExternal : false,								//true无法拖动
          observeParents:true									//将observe应用于Swiper的父元素
        },
        swiperSlides: [
        	"./src/assets/image/banner-1.jpg",
        	"./src/assets/image/banner-2.jpg",
        	"./src/assets/image/banner-3.jpg"
        ]
      }
    },
    mounted() {
      setInterval(() => {
//      console.log('simulate async data')
        let swiperSlides = this.swiperSlides
        if (swiperSlides.length < 3) swiperSlides.push(swiperSlides.length + 1)
      }, 500)
    }
  }
</script>
<style scoped>
.banner{
	height:3.09rem;
	width:7.5rem;
	overflow: hidden;
}
.banner.swiper-container {
	width:100%;
	height:3.09rem;
} 
.swiper-container .swiper-wrapper .swiper-slide{
	float:left;
	height:3.09rem;
}
.swiper-container .swiper-wrapper .swiper-slide img{
	height:3.08rem;
	width:100%;
}
span.swiper-pagination-bullet{
	display: inline-block;
	width:0.5rem;
	height:0.5rem;
	border-radius:50%;
	background: #333;
	color:#fff;
}
</style>