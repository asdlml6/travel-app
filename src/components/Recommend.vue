<template>
    <div>
       <div class='title'>热销推荐</div>
       <ul> 
           <router-link
           tag='li' 
           class='item' 
           v-for='item in rlist' 
           :key='item.id'
           :to="'/detail/'+item.id">
                <div class='item-img-wrapper'>
                   <img :src="item.imgURL" alt="" class='item-img'>
                </div>   
               <div class='item-info'>
                   <p class='item-title'>{{item.title}}</p>
                   <p class='item-desc'>{{item.desc}}</p>
                   <button class='item-button'>查看详情</button>
               </div>
           </router-link>
       </ul>
    </div>
</template>

<style lang="">
    .title{
        line-height: 30px;
        background:#eee;
        text-indent: 5px
    }
    .item{
        overflow: hidden;
        display:flex;
        height:90px;
        border-bottom: 1px solid #eee
    }
    .item-img{
        width:50px;
        height:80px;
        padding:5px
    }
    .item-info{
        flex:1;
        padding:10px
    }    
    .item-title{
        line-height: 25px;
        font-size:15px
    }
    .item-desc{
        line-height:15px;
        color:#ccc
    }
    .item-button{
        line-height:20px;
        margin-top:10px;
        background:#ff9300;
        padding:0 10px;
        border-radius: 3px;
        color:#fff
    }
</style>

<script>
export default {
    name:'HomeRecommend',
//    data(){
//        return {
//            recommendList:[
//                {id:'0001',imgURL:'../../static/16.jpg',title:'大连圣亚海洋世界',desc:'浪漫大连首站,浪漫的海洋主题乐园'},
//                {id:'0002',imgURL:'../../static/16.jpg',title:'大连圣亚海洋世界',desc:'浪漫大连首站,浪漫的海洋主题乐园'},
//                {id:'0003',imgURL:'../../static/16.jpg',title:'大连圣亚海洋世界',desc:'浪漫大连首站,浪漫的海洋主题乐园'}
//            ]
//        }
//    }
     props:{
         rlist:Array
     }
}
</script>