import Vue from 'vue'
import VueRouter from 'vue-router'
// import firebase from 'firebase'

import Home from '../views/Home.vue'
import Login from '../views/login/Login'
import UsersIndex from '../views/users/Users'
import UsersCreate from '../views/users/UserCreate'
import Cadastros from '../views/cadastro/Cadastros'

Vue.use(VueRouter)

const routes = [{
        path: '/login',
        name: 'login',
        component: Login,
    },
    {
        path: '/home',
        name: 'Home',
        component: Home,
        meta: {
            requiresAuth: true,
        },
    },
    { path: '/', redirect: '/home' },
    {
        path: '/cadastros',
        name: 'cadastros',
        component: Cadastros,
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: '/users',
        name: 'users',
        component: UsersIndex,
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: '/users/create',
        name: 'usersCreate',
        component: UsersCreate,
        meta: {
            requiresAuth: true,
        },
    },

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    const currentUser = window.uid ? window.uid : null

    if (to.name !== 'login' && !currentUser) {
        next('/login')
    } else {
        next()
    }

    // console.log(requiresAuth)
    // if (requiresAuth && to.path !== '/login') {
    if (requiresAuth) {

        if (currentUser && to.path === '/login') next('/home')

        if (!currentUser) {
            next('/login')
        } else next()


    } else next()




});


export default router