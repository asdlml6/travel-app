<template>
    <div class='header'>
        城市选择
        <a href="/" class='headerc-left'>返回</a>
    </div>
</template>

<script>
export default {
    name:'CityHeader'
}
</script>

<style lang="">
    .header{
        position: relative;
        overflow: hidden;
        height:43px;
        line-height:43px;
        text-align: center;
        color:#fff;
         background-color:#00bcd4
    }
    .headerc-left{
        text-decoration: none;
        color:#fff;
        width:32px;
        font-size:16px;
        position:absolute;
        left:0
    }
</style>