// Import the functions you need from the SDKs you need
import { FirebaseError, initializeApp } from "firebase/app";
//  import { getAnalytics } from "firebase/analytics";

// https://firebase.google.com/docs/web/setup#available-libraries
import {
  signInWithPopup,
  getAuth,
  GoogleAuthProvider,
  signOut,
  User,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  collection,
  addDoc,
  getDocs,
  DocumentData,
} from "firebase/firestore";
import { Comments, PostProps } from "../../components/post-item/post-item";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtPjfCriJ0p8CpYFmLRFPmDFMZYyAI9GE",
  authDomain: "rasine-chatter.firebaseapp.com",
  projectId: "rasine-chatter",
  storageBucket: "rasine-chatter.appspot.com",
  messagingSenderId: "652293126672",
  appId: "1:652293126672:web:c17bdba94ba0e0eeaae895",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});
export const auth = getAuth();
export const signInWithGooglePopup = async () => {
  const stats: {
    user: any;
    token: string | undefined;
  } = { user: {}, token: "" };
  return signInWithPopup(auth, googleProvider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      stats.token = token;
      stats.user = user;
      return stats;
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      // const email = error.customData.email;
      // // The AuthCredential type that was used.
      // const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
      console.log(errorCode + " " + errorMessage);
    });
};
export const db = getFirestore();

export const createUserDocFromAuth = async (userAuth: User) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);
  const userSnapshot = await getDoc(userDocRef);
  //console.log(userSnapshot);
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    const notes: string[] = [];
    const currentPost = "";
    const currentTitle = "";
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        notes,
        currentPost,
        currentTitle,
      });
    } catch (error) {
      if (error instanceof FirebaseError) {
        // Firebase error
        console.error("Firebase error:", error);
      } else {
        // Other error types
        console.error("Error:", error);
      }
    }
  }
  return userDocRef;
};
export const signOutUser = async () => {
  await signOut(auth);
};
export const getGlobalPosts = async (): Promise<DocumentData[]> => {
  const docsReferenceGlobal = collection(db, "globalPosts");
  const allPostsSnapshot = await getDocs(docsReferenceGlobal);
  const posts: DocumentData[] = [];
  allPostsSnapshot.docs.forEach((doc) => {
    console.log(doc.id);
    posts.push({ ...doc.data(), id: doc.id });
  });
  console.log(posts);
  return posts;
};

export const editField = async (
  user: string | null | undefined,
  field: string,
  newValue: string
) => {
  if (user) {
    const docRef = doc(db, "users", user);
    await updateDoc(docRef, {
      [field]: newValue,
    });
  }
};
export const editPostsField = async (
  postId: string | null | undefined,
  field: string,
  newValue: Comments[]
) => {
  if (postId) {
    const docRef = doc(db, "globalPosts", postId);
    await updateDoc(docRef, {
      [field]: newValue,
    });
  }
};
export const editLikesField = async (
  postId: string,
  field: string,
  newValue: (string | null | undefined)[]
) => {
  if (postId) {
    const docRef = doc(db, "globalPosts", postId);
    await updateDoc(docRef, {
      [field]: newValue,
    });
  }
};
export const addPost = async (data: PostProps) => {
  const col = collection(db, "globalPosts");

  await addDoc(col, data);
};
export const getPost = async (
  postId: string | undefined
): Promise<DocumentData | undefined> => {
  if (postId) {
    const docRef = doc(db, "globalPosts", postId);
    const docSnapshot = await getDoc(docRef).then((res) => res.data());
    //.then(res=> res?.comments)
    console.log(docSnapshot);
    return docSnapshot;
  }
};
