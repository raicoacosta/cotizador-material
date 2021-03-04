import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyCqYGe3e6dzGEAAir11uChcOD64M_Y3moI",
    authDomain: "cotizador-52c88.firebaseapp.com",
    projectId: "cotizador-52c88",
    storageBucket: "cotizador-52c88.appspot.com",
    messagingSenderId: "247209943864",
    appId: "1:247209943864:web:888620a6b5ecfc0b3b57cd",
    measurementId: "G-82MFMLG3KC"
  };

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}