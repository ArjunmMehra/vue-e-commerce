import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        selectedCategory: 'Men'
    },
    mutations:{
        setCategory(state,category){
            state.selectedCategory=category
        }
    },
    actions:{

    }
})

export default store