import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        token: null,
    },
    getters: {
        loggedIn(state) {
            return state.token != null;
        }
    }
})

export default store