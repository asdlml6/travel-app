<template>
    <div>
       <div class='titles'>周末去哪儿</div>
       <ul> 
           <li class='items' v-for='item in list' :key='item.id'>
                  <div class='items-img-wrappers'> 
                   <img :src="item.imgURL" alt="" class='items-img'>
                  </div>
                <p class='items-title'>{{item.title}}</p>
                <p class='items-desc'>{{item.desc}}</p>
           </li>
       </ul>
    </div>
</template>

<style lang="">
    .titles{
        line-height: 30px;
        background:#eee;
        text-indent: 5px;
        margin-top:0px
    }

    .items{
        overflow: hidden;
        height:150px;
        border-bottom: 1px solid #eee
    }

    .items-img-wrappers{
        height:0;
        padding-bottom:90px;
        width:100%
    }
    .items-img{
        width:360px;
        height:90px
    }
    .items-title{
        line-height: 25px;
        font-size:15px;
    }
    .items-desc{
        line-height:15px;
        color:#ccc
    }
    
</style>

<script>
export default {
    name:'HomeWeekend',
//    data(){
//        return {
//            WeekendList:[
//                {id:'0001',imgURL:'../../static/17.jpg',title:'大连圣亚海洋世界',desc:'浪漫大连首站,浪漫的海洋主题乐园'},
//                {id:'0002',imgURL:'../../static/17.jpg',title:'大连圣亚海洋世界',desc:'浪漫大连首站,浪漫的海洋主题乐园'},
//                {id:'0003',imgURL:'../../static/17.jpg',title:'大连圣亚海洋世界',desc:'浪漫大连首站,浪漫的海洋主题乐园'}   
//            ]
//        }
//    }
       props:{
           list:Array
       }
}
</script>