import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCmZsMmNePEU-5F7M7M012jL17Ez937V5g",
    authDomain: "easychat-219f4.firebaseapp.com",
    projectId: "easychat-219f4",
    storageBucket: "easychat-219f4.appspot.com",
    messagingSenderId: "585595961129",
    appId: "1:585595961129:web:8bfdd4cedc972b6108c138",
    measurementId: "G-9W0V1KHSHF"
  };
  
let app;

if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth }