import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let defaultCity='上海'

try{
    if(localStorage.city){
          defaultCity=localStorage.city
    } 
}catch(e){
    
}

export default new Vuex.Store({
    state:{
        //city:localStorage.city||'上海'
        city:defaultCity
    },
    actions:{
        changeCity(ctx,city){   //ctx是actions和mutations的桥梁
            //console.log(city)
           ctx.commit('changeCitys',city)
        }
    },
    mutations:{
        changeCitys(state,city){    //state是指公有数据
           state.city=city
           try{
               localStorage.city=city
            }catch(e){}
           //localStorage.city=city   //本地存储才能好使
        }
    }
})