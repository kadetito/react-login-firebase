import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAhxeeVOxvc6cu-5Xoj-yYnot4Ugi2OWqc",
  authDomain: "react-adc8b.firebaseapp.com",
  projectId: "react-adc8b",
  storageBucket: "react-adc8b.appspot.com",
  messagingSenderId: "367388551674",
  appId: "1:367388551674:web:5bb6d8fce1cf5b03589c43",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
