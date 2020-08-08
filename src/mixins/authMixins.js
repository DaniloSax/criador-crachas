import firebase from 'firebase'
import router from '../router/index'

export default {

    methods: {
        login(credentials) {
            new Promise(() => {
                firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
                    .then(() => {
                        firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password);
                        return router.push('/')

                    })
                    .catch(function(error) {
                        // Handle Errors here.
                        console.log(error.code)
                        console.log(error.message)
                    });
            })
        },

        auth() {
            firebase.currentUser()
        }
    }
}