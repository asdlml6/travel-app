<template>
    <div class='icons'>
      <swiper :options='swiperOption'>
        <swiper-slide v-for='(page,index) in list' :key='index'>    <!--不绑定key值报错-->
        <div class='icon' v-for='item in list' :key='item.id'>
           <div class='icon-img'>
               <img :src="item.imgURL" alt="" class='icon-img-img'/>
           </div>
           <p class='icon-desc'>{{item.desc}}</p>
        </div>
        </swiper-slide>
      </swiper>
    </div>
</template>

<style>
    .icons{
        height:0px;
        padding-bottom:50%;
        overflow: hidden;
        
    }
    .icon{
        position:relative;
        width:25%;
        float:left;
        padding-bottom:25%;
        overflow: hidden;
        height:0
    }
    .icon-img{
        position:absolute;
        top:0;
        left:0;
        right:0;
        bottom:22px;
        box-sizing: border-box;
        padding:5px;
    }
    .icon-img-img{
        height:100%;
        display: block;
        margin:0 auto;
    }
    .icon-desc{
        position:absolute;
        left:0;
        right:0;
        bottom:0px;
        height:22px;
        line-height: 22px;
        text-align: center;
        color:#333
    }
</style>

<script>
export default {
    name:'HomeIcons',
    props:{
        list:Array
    },
    data(){
        return {
            swiperOption:{
                autoplay:false
            }
        }
    },
//    data(){
//        return {
//            iconList:[
//                {id:'0001',imgURL:'../static/3.png',desc:'景点门票'},
//                {id:'0002',imgURL:'../static/5.png',desc:'滑雪季'},
//                {id:'0003',imgURL:'../static/6.png',desc:'泡温泉'},
//                {id:'0004',imgURL:'../static/7.png',desc:'动植物园'},
//                {id:'0005',imgURL:'../static/8.png',desc:'游玩榜单'},
//                {id:'0006',imgURL:'../static/9.png',desc:'自然风光'},
//                {id:'0007',imgURL:'../static/11.png',desc:'热门景点'},
//                {id:'0008',imgURL:'../static/13.png',desc:'全部'},
//                {id:'0009',imgURL:'../static/15.png',desc:'一日游'}
//            ]
//        }
//    },
    computed:{   //计算属性，根据其他的属性通过计算得来,自带缓存
      pages(){
          const pages=[]
          this.list.forEach((item,index)=>{   //index ->索引, item ->具体的循环项
              const page=Math.floor(index/8)      //floor向下取整,假如index=7，则page=0,说明数据展示在第索引为0页，也就是现实世界的第一页
              //上一条语句表示当前轮播项应该展示在页码的第几(page)页
              if(!pages[page]){           //pages[page]不存在
                pages[page]=[]
              }
              pages[page].push(item)
          })
              return pages
      }
    }
}
</script>
