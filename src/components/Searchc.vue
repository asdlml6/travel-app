<template>
  <div>
    <div class='search'>   <!--v-model使得编辑框可以编辑-->
        <input type="text" placeholder="请输入城市名或者拼音" class='search-input' v-model="keyword">
    </div>

    <div class="search-content" ref='search' v-show="keyword">
        <ul>  <!--显示list数组里的内容-->  <!--原先是citys，后来改成的list-->
            <li v-for='(ie,key) in list' :key='key' class='search-item'
            @click='handleCityClicks(ie.name)'>{{ie.name}}</li>

            <li  class='search-item' v-show="!list.length">没有找到匹配数据</li>
        </ul>
    </div>
  </div>
</template>

<script>
import Scroll from 'better-scroll'
export default {
    name:'CitySearch',
    props:{
        citys:Object     //接受数据
    },
    mounted(){
        new Scroll(this.$refs.search)
    },
    data(){
        return {
           keyword:'',
           list:[],
           timer:null
        }
    },
    methods:{
         handleCityClicks(city){
             this.$store.dispatch('changeCity',city)
             //alert(city)          //点击热门城市里的任意一项将会出现警示框
             this.$router.push('/')
        }
    },
    watch:{     //监听改变者
        keyword(){
           if(this.timer){   //当你输入后又删除时就会触发
               clearTimeout(this.timer)
               console.log(111)
               console.log(this.timer)    
           }
           if(!this.keyword){    //如果输入的内容不存在
               this.list=[]      //因为输入的内容不存在，而list里的内容是显示的内容，list为空就不显示
               return 
           }
           this.timer=setTimeout(()=>{
               const result=[]
               for(let i in this.citys){
                   console.log(this.citys[i])    //返回形式数组，数组里包含对象    0：Object{}
                    this.citys[i].forEach((value)=>{
                        if(value.spell.indexOf(this.keyword) >-1||value.name.indexOf(this.keyword) >-1){
                               result.push(value)
                        }
                    })
               }
                  this.list=result
           },100)
        }
    }
}
</script>

<style lang="">
    .search-item{
       line-height: 30px;
       padding-left: 9px;
       color:#666;
       background:#fff;
       border-bottom:1px solid #fff;
    }
    .search-content{
        overflow: hidden;
        position:absolute;
        top:80px;
        left:0;
        right:0;
        bottom:0;
        background:#eee;
        z-index:1
    }
    .search{
        height:36px;
        background:#00bcd4;
        padding:5px 5px 5px 0;
    }
    .search-input{
        height:31px;
        line-height: 31px;
        width:100%;
        text-align: center;
        border-radius: 10px;
        border:1px solid #ccc;
        color:#666
    }
</style>