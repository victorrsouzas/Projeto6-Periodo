// Import the functions you need from the SDKs you need
import firebase from 'firebase';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
let firebaseConfig = {
  apiKey: "AIzaSyCjSqfayJVx9waPa-gsMFlrgRrgsxWJhfo",
  authDomain: "artesan-gestao.firebaseapp.com",
  projectId: "artesan-gestao",
  storageBucket: "artesan-gestao.appspot.com",
  messagingSenderId: "588410442579",
  appId: "1:588410442579:web:d92e2b24fcc52517b2c7a6",
  measurementId: "G-JGPH9VGMXH"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export default app
