<template>
    <div>
       <ul class='listc' ref='wrappers'>
           <li class="itemc" v-for='ittem in letterc' :key='ittem' @click='handleLetterClick'
           @touchstart='handleTouchStart'
           @touchmove='handleTouchMove'
           @touchend='handleTouchEnd'
           :ref='ittem'>{{ittem}}</li>
       </ul>    
    </div>
</template>

<script>

export default {
    name:'CityAlphabet',
    props:{
        city:Object
    },
    computed:{    //计算属性,通过其他属性计算得来的
       letterc(){
           const letterc=[]
           for(let i in this.city){
                 letterc.push(i)
           }
           return letterc           //返回的结果大致是这样 ['A','B']
       }
    },
    data(){
        return {
            touchStatus:false
        }
    },
    methods:{
        handleLetterClick(e){
            console.log(e)      //点击右侧导航栏中任意一个，获取相关信息
            this.$emit('change',e.target.innerText)     //非父子组件用this.$emit()进行通信,每次点击Alphabet.vue就会向外触发一个change事件
        },
        handleTouchStart(){
            this.touchStatus=true
        },
        handleTouchMove(e){
            if(this.touchStatus){
                 const startY=this.$refs['A'][0].offsetTop   //offsetTop->元素距顶部的高度,前提是一个DOM元素
                 console.log(startY)
                 const touchY=e.touches[0].clientY-89
                 const index=Math.floor((touchY-startY)/22)    //floor向下取整
                 //console.log(touchY)       //手指距最顶部的高度
                 console.log(index)
                if(index>=0&&index<this.letterc.length){
                    this.$emit('change',this.letterc[index])
                }
            }
        },
        handleTouchEnd(){
            this.touchStatus=false
        }
    }
}
</script>

<style lang="">
.listc{
    position:absolute;
    width:20px;
    display:flex;
    flex-direction: column;
    justify-content: center;
    right:0px;
    bottom:0px;
    top:75px;
}
  .itemc{
      text-align: center;
      line-height: 22px;
      color:gray
  }
</style>