import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

axios.defaults.baseURL = window.api_url

const store = new Vuex.Store({
    state: {
        /**
         * 1. AUTH STATE
         */
        token: localStorage.getItem('lavueshop_access_token') || null,

        /**
         * 2. TEMPLATE STATE
         */
        toggleSidebar: false,
    },
    getters: {
        /**
         * 1. AUTH GETTERS
         */
        loggedIn(state) {
            return state.token != null;
        },

        /**
         * 2. TEMPLATE MUTATIONS
         */
        isToggledSidebar(state) {
            return state.toggleSidebar;
        },
    },
    mutations: {
        /**
         * 1. AUTH MUTATIONS
         */
        retriveToken(state, token) {
            state.token = token;
        },
        destroyToken(state) {
            state.token = null;
        },

        /**
         * 2. TEMPLATE MUTATIONS
         */
        toggleSidebar(state) {
            state.toggleSidebar = !state.toggleSidebar;
        },
    },
    actions: {
        /**
         * 1. AUTH ACTIONS
         */
        retriveToken(context, credentials) {
            return new Promise((resolve, reject) => {
                axios.post('/login', {
                        email: credentials.email,
                        password: credentials.password,
                    })
                    .then(response => {
                        if (response.data.access_token != null) {
                            const token = response.data.access_token;
                            localStorage.setItem('lavueshop_access_token', token);
                            context.commit('retriveToken', token);
                            resolve('resolved');
                        } else {
                            reject('rejected');
                        }
                    })
                    .catch(error => {
                        reject('rejected');
                    });
            });
        },
        destroyToken(context) {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token;

            if (context.getters.loggedIn) {
                return new Promise((resolve, reject) => {
                    axios.post('/logout')
                        .then(response => {
                            localStorage.removeItem('lavueshop_access_token');
                            context.commit('destroyToken');
                            resolve(response);
                        })
                        .catch(error => {
                            localStorage.removeItem('lavueshop_access_token');
                            context.commit('destroyToken');
                            reject(error);
                        });
                });
            }
        },

        /**
         * 2. TEMPLATE ACTIONS
         */
        toggleSidebar(context) {
            context.commit('toggleSidebar');
        },
    },
})

export default store