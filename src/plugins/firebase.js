import firebase from 'firebase/app'
import 'firebase/firebase-analytics'
import 'firebase/firebase-auth'
import 'firebase/firebase-database'
import 'firebase/firebase-storage'

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


export default firebase;