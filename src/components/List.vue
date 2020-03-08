<template>
    <div>
        <city-header></city-header>
        <city-search :citys='cities'></city-search>
        <city-list :cities='cities' :hot='hotCities' :letters='letter'></city-list>
       <city-alphabet :city='cities' @change='handleLetterClick'></city-alphabet>
    </div>
</template>

<script>
import CityHeader from './Headerc.vue'
import CitySearch from './Searchc.vue'
import CityList from './Listc'
import CityAlphabet from './Alphabet.vue'
import axios from 'axios'
export default {
    name:'City',
    components:{
        CityHeader,
        CitySearch,
        CityList,
        CityAlphabet
    },
    data(){
        return {
            cities:{},
            hotCities:[],
            letter:''
        }
    },
    methods:{
        getCityInfo(){
            axios.get('/api/city.json').then(this.handleGetCityInfoSucc)
        },
        handleGetCityInfoSucc(res){
          console.log(res)
          if(res.data.ret&&res.data.data){
                this.hotCities=res.data.data.hotCities
                this.cities=res.data.data.cities
          }
        },
        handleLetterClick(letter){
           console.log(letter)       //验证父组件是否接收了子组件传递过来的数据,下一步就是分发数据了
           this.letter=letter
        }
    },
    mounted(){
        this.getCityInfo()
    }
}
</script>

<style lang="">
    
</style>