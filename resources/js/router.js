import Vue from 'vue'
import store from './store'
import VueRouter from 'vue-router'
import HomePage from './components/pages/HomePage'
import Login from './components/pages/auth/Login'

Vue.use(VueRouter)

const routes = [
    { path: '/', name: 'home', component: HomePage },
    { path: '/login', name: 'login', component: Login, meta: { layout: 'Auth_Layout' } },
]

const router = new VueRouter({
    mode: 'history',
    routes: routes
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!store.getters.loggedIn) {
            next({
                name: 'login',
            })
        } else {
            next()
        }
    } else if (to.matched.some(record => record.meta.requiresVisitor)) {
        if (store.getters.loggedIn) {
            next({
                name: 'dashboard',
            })
        } else {
            next()
        }
    } else {
        next()
    }
})

export default router