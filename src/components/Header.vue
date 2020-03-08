<template>
    <div class='header'>
        <div class='header-left'>返回</div>
        <div class='header-input'>输入城市/景点/游玩主题</div>
        <router-link to='/city'>
        <div class='header-right'>{{this.$store.state.city}}</div>
        </router-link>
    </div>
</template>

<script>
export default {
    name:'HomeHeader',
    props:{
        city:String
    }
}
</script>

<style  scoped>
  .header{
     display:flex;
     height:55px;
     background-color:#00bcd4;
     color:#fff;
     line-height:86px;
  }            
  .header-left{
      width:64px;
      float:left;
      line-height:55px;
  } 
  .header-input{
      flex:1;
      height:45px;
      background-color:#fff;
      border-radius:3px;
      margin-top:5px;
      line-height:45px;
      margin-left:2px;
      color:#ccc;
      padding-left: 5px
  }
  .header-right{
      min-width:54px;
      padding:5px;
      float:right;
      text-align:center;
      line-height:54px;
      color:#fff
  }
</style>