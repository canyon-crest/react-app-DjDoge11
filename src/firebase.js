// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKfRcyS4RYg5ju9WvEIlCoH356DieDa-g",
  authDomain: "react-firebase-app-b9c2e.firebaseapp.com",
  projectId: "react-firebase-app-b9c2e",
  storageBucket: "react-firebase-app-b9c2e.firebasestorage.app",
  messagingSenderId: "487387956779",
  appId: "1:487387956779:web:dc5e7afb5ae96edf700c6e",
  measurementId: "G-8X4G37ZY0S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();