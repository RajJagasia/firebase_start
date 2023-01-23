// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHWWaAhq8pd-iV3FBW1xPrBhP7qM3v5UE",
  authDomain: "try1-a0d4b.firebaseapp.com",
  projectId: "try1-a0d4b",
  storageBucket: "try1-a0d4b.appspot.com",
  messagingSenderId: "743305535595",
  appId: "1:743305535595:web:33c27bc5359893f479512e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
