import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

var store = new Vuex.Store({
    state: {
        smdata: []
    },
    mutations: {
        main_arr(state, data) {
            state.smdata = data
        }
    }
})

export default store