<template>
    <div class='banner'>
        <img src="../../static/20.jpg" alt="" class='banner-img'>
        <div class='banner-info'>
            <div class='banner-title'>大连圣亚海洋世界（AAAA景区）</div>
            <div class='banner-number'>
                <span class='iconfont'>&#xe60e;</span>
               39    
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'DetailBanner'
}
</script>

<style lang="">
    .banner{
        position:relative;
        overflow: hidden;
        height:0px;
        padding-bottom:55%;
        width:100%;
    }
    .banner-img{
        width:100%
    }
    .banner-info{
        position:absolute;
        left:0;
        right:0;
        bottom:0;
        line-height: 30px;
        display:flex;
        color:#fff
    }
    .banner-title{
        flex:1;
        padding:0 10px

    }
    .banner-number{
      padding:0 20px;
      line-height:20px;
      height:20px;
      border-radius:10px;
      background:rgba(0,0,0,.8);
      margin-top:5px
    }
</style>