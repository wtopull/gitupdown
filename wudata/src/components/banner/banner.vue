<template>
  <div class="banner">
    <swiper :options="swiperOption">
	    <swiper-slide v-for="slide in swiperSlides"><img :src="slide"/></swiper-slide>
	    <div class="swiper-pagination" slot="pagination"></div>
  	</swiper>
  </div>
</template>
<script>
  export default {
    name: 'carrousel',
    data() {
      return {
        swiperOption: {
          autoplay: 3000,
          setWrapperSize :true,
          pagination : '.swiper-pagination',
          paginationClickable :true,
          mousewheelControl : true,
          observeParents:true
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
      }, 3000)
    }
  }
</script>
<style>
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
</style>