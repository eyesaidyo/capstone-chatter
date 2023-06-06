// Import the functions you need from the SDKs you need
import { FirebaseError, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  signInWithPopup,
  GoogleAuthProvider,
  getAuth,
  
  User
} from 'firebase/auth'
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  
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
import 'firebase/auth'
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db =getFirestore()
const googleProvider = new GoogleAuthProvider()
export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
  export const createUserDocFromAuth = async (userAuth:User) => {
    if (!userAuth) return;
    const userDocRef = doc(db, "users", userAuth.uid);
    // console.log(userDocRef);
    const userSnapshot = await getDoc(userDocRef);
    //console.log(userSnapshot);
    if (!userSnapshot.exists()) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      const notes:string[] = [];
      try {
        await setDoc(userDocRef, {
          displayName,
          email,
          createdAt,
          notes,
        });
      } catch (error) {
        if (error instanceof FirebaseError) {
          // Firebase error
          console.error('Firebase error:', error.message);
        } else {
          // Other error types
          console.error('Error:', error);
        }
      }
    }
    return userDocRef;
  };