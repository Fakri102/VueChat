import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCI9Uztt3E39z-KB8F8MZQq3sn9qluIH5c",
    authDomain: "vuebase-4e199.firebaseapp.com",
    projectId: "vuebase-4e199",
    storageBucket: "vuebase-4e199.appspot.com",
    messagingSenderId: "372653632933",
    appId: "1:372653632933:web:93cafec8163f9c152bcc4c",
    measurementId: "G-DJH6J7PQKZ"
};

firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectAuth, projectFirestore, timestamp }

