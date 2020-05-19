import 'bootstrap'
import Vue from 'vue'
import router from './router'
import store from './store'
import Master from './components/layout/Master'

Vue.config.productionTip = false

new Vue({
    render: h => h(Master),
    router: router,
    store: store,
}).$mount('#app')