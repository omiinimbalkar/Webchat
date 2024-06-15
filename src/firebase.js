import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC-4P5e3k8MyRYufnT8m5a7RDYXLTL4ZfA",
  authDomain: "omni212006.firebaseapp.com",
  databaseURL: "https://omni212006-default-rtdb.firebaseio.com",
  projectId: "omni212006",
  storageBucket: "omni212006.appspot.com",
  messagingSenderId: "81727727228",
  appId: "1:81727727228:web:156a7fc083aa3f87d04bf9",
  measurementId: "G-MRC4SQDY45"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
export const googleProvider = new GoogleAuthProvider();
