<template>
    <div class='list' ref='wrapper'>
        <div>
        <div class='area'>
          <div class='title'>当前城市</div>
           <div class='button-list'>
               <div class='button-wrapper'>
                   <div class="button">{{this.$store.state.city}}</div>
               </div>
           </div>
        </div>

        <div class='area'>
           <div class='title'>热门城市</div>
           <div class='button-list'>
               <div class='button-wrapper' v-for='item in hot' :key='item.id' @click='handleCityClick(item.name)'>
                   <div class="button">{{item.name}}</div>
               </div>
           </div>
        </div>

        <div class='area' v-for='(items,key) in cities' :key='key' :ref='key'>  <!--v-for也可以循环对象的，只不过索引不是index，而是key-->
           <div class='title'>{{key}}</div>
           <div class="item-list">
               <div class='item' v-for='inneritem in items' :key='inneritem.id'
                @click='handleCityClick(inneritem.name)'>{{inneritem.name}}</div>
           </div>
        </div>

      </div>
    </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
    name:'CityList',
    props:{
        hot:Array,
        cities:Object,
        letters:String     //这个时候作为兄弟组件的list.vue就监听到了change事件
    },
    methods:{
        handleCityClick(city){
             this.$store.dispatch('changeCity',city)
             //alert(city)          //点击热门城市里的任意一项将会出现警示框
             this.$router.push('/')
        }
    },
    watch:{   //监听模式
      letters(){
        if(this.letters){
             const element=this.$refs[this.letters][0]
             console.log(element)
             new Bscroll(this.$refs['wrapper']).scrollToElement(element)        //这个是better-scroll提供的方法
        }
      }
    },
    mounted(){
        new Bscroll(this.$refs['wrapper'])     //github上写错了
    }
}
</script>

<style lang="">
    .title{
        line-height: 22px;
        background:#eee;
        padding-left:10px;
        color:#666;
        font-size:13px;
        border-bottom:1px solid #ccc
    }
    .button-list{
        padding:5px 8px 5px 5px;
        overflow: hidden;
    }
    .button-wrapper{
        width:110px;
        float:left
    }
    .button{
        text-align: center;
        margin:5px;
        border:1px solid #ccc;
        padding:5px 0;
        border-radius: 3px
    }
    .item{
        line-height: 27px;
        color:#666;
        padding-left:10px;
        border-bottom:1px solid #ccc
    }
    .list{
        overflow: hidden;
        position:absolute;
        top:87px;
        left:0;
        right:0;
        bottom:0;
    }
</style>