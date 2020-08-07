import firebase from 'firebase'

export default {
    state: {
        auth: null,
    },
    mutations: {
        setAuth: (state, auth) => state.auth = auth,

        toNothing: () => console.log('mutation inutil'),
    },
    actions: {
        loadUserAuth({ commit }) {
            firebase.auth().onAuthStateChanged(user => {
                if (user) {
                    // commit('setAuth', user)
                    // User is signed in.
                    commit('setAuth', {
                        displayName: user.displayName,
                        email: user.email,
                        emailVerified: user.emailVerified,
                        photoURL: user.photoURL,
                        isAnonymous: user.isAnonymous,
                        uid: user.uid,
                        providerData: user.providerData,
                    });
                }
            })
        },

        login({ commit, dispatch }, credentials) {
            firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password).then(() => {
                console.log('logado sucesso')
                commit('toNothing');
                dispatch('loadUserAuth')
            }).catch(function(error) {
                // Handle Errors here.
                console.log(error.code)
                console.log(error.message)
                    // ...
            });
        },

        storeUser() {
            firebase.auth.createUserWithEmailAndPassword()
        },
        updateUser() {},
        deleteUser() {},
    },
    getters: {
        getAuth: (state) => state.auth
    },
}