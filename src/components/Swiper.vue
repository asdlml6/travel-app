<template>
   <div class='wrapper'>
    <swiper :options='swiperOption'>
       <swiper-slide><img src='../assets/1.jpg' class='swiper-img'></swiper-slide>
       <swiper-slide><img src='../assets/2.jpg' class='swiper-img'></swiper-slide>
       <div class='swiper-pagination' slot='pagination'></div>
    </swiper>
   </div>
</template>

<script>
export default {
    name:'HomeSwiper',
    data(){
      return {
           swiperOption:{
             pagination:'.swiper-pagination',
             loop:true
           }
      }
    }
}
</script>

<style >
    .swiper-img{
      width:100%;
      height:200px
    }

    .wrapper{
      overflow: hidden;
      width:100%;
      height:0;
      padding-bottom:31.25%
    }
</style>