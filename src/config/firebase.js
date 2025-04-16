// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, set, ref, onValue } from "firebase/database";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9AG5hgE0NFaklstSJULgctk05pp5O5Po",
  authDomain: "confessionapp-586f0.firebaseapp.com",
  projectId: "confessionapp-586f0",
  storageBucket: "confessionapp-586f0.firebasestorage.app",
  messagingSenderId: "12218681927",
  appId: "1:12218681927:web:2349c9f78ac525f6717f62",
  measurementId: "G-0ZN49YC2NY"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app)