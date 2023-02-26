import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import { getStorage } from "firebase/storage";
import { FirebaseStorage } from "firebase/storage";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDT--irTZhd72j9SiNW0w-0WTTxclKIM9Q",
  authDomain: "hakathonproject-edba6.firebaseapp.com",
  projectId: "hakathonproject-edba6",
  storageBucket: "hakathonproject-edba6.appspot.com",
  messagingSenderId: "413367747231",
  appId: "1:413367747231:web:c2d571f0f17f9217f518aa"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db=getFirestore(app)
const storage = getStorage(app);
const auth = getAuth(app);
export {db,storage, auth, createUserWithEmailAndPassword, signInWithEmailAndPassword}
