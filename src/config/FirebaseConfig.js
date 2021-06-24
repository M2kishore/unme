// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyBfPnXJXLlL-aHA0LgoQ9pHDuLqkS00aus",
    authDomain: "unme-ef9d9.firebaseapp.com",
    projectId: "unme-ef9d9",
    storageBucket: "unme-ef9d9.appspot.com",
    messagingSenderId: "962568289874",
    appId: "1:962568289874:web:7c68ee302d209f8c9e298b"
  };
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampsInSnapshots:true});