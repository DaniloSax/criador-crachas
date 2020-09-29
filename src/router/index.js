import Vue from 'vue'
import VueRouter from 'vue-router'
// import firebase from 'firebase'

import Home from '../views/Home.vue'
import Login from '../views/login/Login'
import UsersIndex from '../views/users/Users'
import UsersCreate from '../views/users/UserCreate'
import Registers from '../views/registers/Registers'
import RegisterCreate from '../views/registers/RegisterCreate'
import RegisterEdit from '../views/registers/RegisterEdit'

import BadgePrint from '../views/registers/BadgePrint'
import BadgesPrints from '../views/registers/BadgesPrints'

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
        path: '/registers',
        name: 'registers',
        component: Registers,
        meta: {
            requiresAuth: true,
        },
        children: [{
                name: "registersCreate",
                path: "/registers/create",
                component: RegisterCreate
            },
            {
                name: "registersEdit",
                path: "/registers/:id/edit",
                component: RegisterEdit,
                props: true,
            },
        ]
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
    {
        path: '/:id/badge/print',
        name: 'BadgePrint',
        component: BadgePrint,
        props: true,
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: '/badges/prints',
        name: 'BadgesPrints',
        component: BadgesPrints,
        props: true,
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

    if (to.name !== 'login' && !requiresAuth && !currentUser) {
        next('/login')
    } else {
        if (currentUser && to.name === 'login') next('/')
        else next()
    }


    if (requiresAuth) {
        // tratar permissions
    }

});


export default router