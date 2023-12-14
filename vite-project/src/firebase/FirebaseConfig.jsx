// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAu5dKkimJxKZRFzRV_H8YGQUTzu1Mv5PA",
  authDomain: "e-commerce-1537f.firebaseapp.com",
  projectId: "e-commerce-1537f",
  storageBucket: "e-commerce-1537f.appspot.com",
  messagingSenderId: "35016425316",
  appId: "1:35016425316:web:372b40f47959832fc04471"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export {fireDB,auth } ;