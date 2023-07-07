// Import the functions you need from the SDKs you need
import { FirebaseError, initializeApp } from "firebase/app";
//  import { getAnalytics } from "firebase/analytics";
 import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  signInWithPopup,
  
  getAuth,
  GoogleAuthProvider,
  signOut,
  User
} from 'firebase/auth'
import {
  getFirestore,doc,getDoc,setDoc, updateDoc, collection, addDoc , getDocs, DocumentData} from "firebase/firestore";
import { PostProps } from "../../components/post-item/post-item";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtPjfCriJ0p8CpYFmLRFPmDFMZYyAI9GE",
  authDomain: "rasine-chatter.firebaseapp.com",
  projectId: "rasine-chatter",
  storageBucket: "rasine-chatter.appspot.com",
  messagingSenderId: "652293126672",
  appId: "1:652293126672:web:c17bdba94ba0e0eeaae895"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage=getStorage(app)
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});
export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
const db =getFirestore()

export const createUserDocFromAuth = async (userAuth:User) => {
    if (!userAuth) return;
    const userDocRef = doc(db, "users", userAuth.uid);
     console.log(userDocRef);
    const userSnapshot = await getDoc(userDocRef);
    //console.log(userSnapshot);
    if (!userSnapshot.exists()) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      const notes:string[] = [];
      const currentPost=''
      const currentTitle=''
      try {
        await setDoc(userDocRef, {
          displayName,
          email,
          createdAt,
          notes,
          currentPost,
          currentTitle
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
  export const signOutUser = async () => {
    await signOut(auth);
  };
  export const getGlobalPosts=async ():Promise<DocumentData[]>=>{
    const docsReferenceGlobal=collection( db, 'globalPosts', )
    const allPostsSnapshot= await getDocs(docsReferenceGlobal)
    const posts:DocumentData[]=[]
    allPostsSnapshot.docs.forEach(doc=>{
      // console.log(doc.data())
     posts.push(doc.data())
    })
    console.log(posts)
    return posts
  }
  
  export const editField= async (user:string|null, field:string, newValue:string)=>{
    if (user){
    const docRef= doc(db, 'users', user )
    await updateDoc(docRef, {
      [field]: newValue
    })
  }
  }
  export const addPost= async (data:PostProps)=>{
    const col=  collection(db,'globalPosts')
  
    await addDoc(col,data)
    
  }