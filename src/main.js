import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

import firebase from 'firebase/app'
import 'firebase/firebase-analytics'
import 'firebase/firebase-auth'

Vue.config.productionTip = false

let app = ''

var firebaseConfig = {
    apiKey: "AIzaSyBo6PyMF9oOBuyxEPBTG1UviOpLuqo7CLQ",
    authDomain: "criador-crachas.firebaseapp.com",
    databaseURL: "https://criador-crachas.firebaseio.com",
    projectId: "criador-crachas",
    storageBucket: "criador-crachas.appspot.com",
    messagingSenderId: "770771102509",
    appId: "1:770771102509:web:daa46afb63c577fb7ec1a4",
    measurementId: "G-FTH3J3749P"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// import firebase from '../src/plugins/firebase'


firebase.auth().onAuthStateChanged(() => {
    if (!app) {

        app = new Vue({
            router,
            store,
            vuetify,
            render: h => h(App),
        }).$mount('#app')
    }
})