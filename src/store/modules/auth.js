import firebase from 'firebase'
import router from '@/router/index'
import localforage from 'localforage'

export default {
    state: {
        auth: null,
    },
    mutations: {
        setDataAuth: (state, auth) => {
            console.log('logado sucesso', auth)
            localStorage.setItem('access_token', auth.refreshToken)
            localforage.setItem('auth', auth)

            state.auth = auth
        },

        toNothing: () => console.log('mutation inutil'),
    },
    actions: {
        login({ commit }, credentials) {
            new Promise((resolve, reject) => {
                firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password).then((data) => {
                    resolve(data)

                    commit('setDataAuth', data.user);
                    router.push('/')

                }).catch(function(error) {
                    reject(error)
                    console.log(error.code)
                    console.log(error.message)
                });
            })
        },

        logOff({ commit }) {
            console.log('action loggOff')
            commit('setDataAuth', null)
        },

        storeUser() {
            firebase.auth.createUserWithEmailAndPassword()
        },
        updateUser() {},
        deleteUser() {},
    },
    getters: {
        auth: (state) => state.auth
    },
}