<template>
    <div>
       <home-header :city='city'></home-header>
        <!--<home-header></home-header>-->    <!--使用vuex来进行共有数据的管理-->  
        <home-swiper></home-swiper>
        <home-icons :list='iconList'></home-icons>
        <home-recommend :rlist='recommendList'></home-recommend>
        <home-weekend :list='weekendList'></home-weekend>
        <!--<router-link to='/list'>list列表</router-link>-->
    </div>
</template>


<script>
import HomeHeader from './Header.vue'
import HomeSwiper from './Swiper.vue'
import HomeIcons from './icons.vue'
import HomeRecommend from './Recommend.vue'
import HomeWeekend from './Weekend.vue'
import axios from 'axios'

export default {
    name:'Home',
    components:{
        HomeHeader,
        HomeSwiper,
        HomeIcons,
        HomeRecommend,
        HomeWeekend
    },
    data(){
        return {
            city:'',
            iconList:[],
            recommendList:[],
            weekendList:[]
        }
    },
    mounted(){
        this.getHomeInfo()
    },
    methods:{
        getHomeInfo(){
            axios.get('/api/index.json').then(this.getHomeInfoSucc)
        },
        getHomeInfoSucc(res){
            res=res.data
            if(res.ret&&res.data){
                 this.city=res.data.city
                 this.iconList=res.data.iconList
                 this.recommendList=res.data.recommendList
                 this.weekendList=res.data.weekendList
            }
            console.log(res)
        }
    }
}
</script>