import Vue from 'vue'
import VueRouter from 'vue-router'
import firebase from 'firebase'

import Home from '../views/Home.vue'
import Login from '../views/login/Login'
import UsersIndex from '../views/users/Users'
import UsersCreate from '../views/users/UserCreate'

Vue.use(VueRouter)

// { path: '/', redirect: '/home' },
const routes = [{
        path: '/login',
        name: 'login',
        component: Login,
    },
    {
        path: '/',
        name: 'Home',
        component: Home,
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
    const currentUser = firebase.auth().currentUser
        // console.log('currentUser in route', currentUser)

    if (requiresAuth && !currentUser) next({ path: '/login', query: { redirect: to.fullPath } })
    else if (requiresAuth && currentUser == null) next('/login')
        // else if (!requiresAuth && !currentUser) next()
    else next()
        // if (requiresAuth) {
        //     firebase.auth().onAuthStateChanged((user) => {
        //         console.log(user)
        //         if (!user) {
        //             next('/login')
        //         } else {
        //             next()
        //         }
        //     })
        // }

});


export default router