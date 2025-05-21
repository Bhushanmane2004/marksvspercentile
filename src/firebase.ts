// src/firebase.js 
import { initializeApp } from "firebase/app"; 
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCCX4_Vd25dqnn2dnRqFgbHu6fUuvnQIt0",
  authDomain: "rising-education-1296a.firebaseapp.com",
  projectId: "rising-education-1296a",
  storageBucket: "rising-education-1296a.firebasestorage.app",
  messagingSenderId: "441142648120",
  appId: "1:441142648120:web:691eca923410b7436575cd",
  measurementId: "G-SQD7SBLK5E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };