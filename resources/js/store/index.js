import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        /**
         * AUTH STATE
         */
        token: null,

        /**
         * TEMPLATE STATE
         */
        toggleSidebar: false,
    },
    getters: {
        /**
         * AUTH GETTERS
         */
        loggedIn(state) {
            return state.token != null;
        },

        /**
         * TEMPLATE MUTATIONS
         */
        isToggledSidebar(state) {
            return state.toggleSidebar;
        },
    },
    mutations: {
        /**
         * TEMPLATE MUTATIONS
         */
        toggleSidebar(state) {
            state.toggleSidebar = !state.toggleSidebar;
        },
    },
    actions: {
        /**
         * TEMPLATE ACTIONS
         */
        toggleSidebar(context) {
            context.commit('toggleSidebar');
        },
    },
})

export default store