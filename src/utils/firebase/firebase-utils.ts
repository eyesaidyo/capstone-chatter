// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  signInWithPopup,
  GoogleAuthProvider,
  getAuth
} from 'firebase/auth'
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvfs6PF8TfyOclGYMXNhHQQiSDwuisl2Y",
  authDomain: "chatter-capstone.firebaseapp.com",
  projectId: "chatter-capstone",
  storageBucket: "chatter-capstone.appspot.com",
  messagingSenderId: "718377893836",
  appId: "1:718377893836:web:91b6072fba20c6f05da769",
  measurementId: "G-Z67HQJMXVT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const googleProvider = new GoogleAuthProvider()
export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);