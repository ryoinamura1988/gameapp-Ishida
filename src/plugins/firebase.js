import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

if(!firebase.apps.length){
    const config = {
        apiKey: "AIzaSyDQIzccqwhpPtgd4AswJINVHnc4ETBpv98",
        authDomain: "gameapp-alive.firebaseapp.com",
        databaseURL: "https://gameapp-alive.firebaseio.com",
        projectId: "gameapp-alive",
        storageBucket: "gameapp-alive.appspot.com",
        messagingSenderId: "184451273275",
        appId: "1:184451273275:web:6cfb9405a329879fdac21e",
        measurementId: "G-Q8WHJF1QRV"
    }
    firebase.initializeApp(config)
}

const db = firebase.firestore()
export {
    firebase,
    db
}