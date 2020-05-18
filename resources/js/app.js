import 'bootstrap'
import Vue from 'vue'
import Master from './components/layout/Master'

Vue.config.productionTip = false

new Vue({
    render: h => h(Master)
}).$mount('#app')