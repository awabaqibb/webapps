import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyBy8p_4QV7QjfaUqq9WJutp0sVigRV1p_g",
  authDomain: "house-marketplace-app-cb930.firebaseapp.com",
  projectId: "house-marketplace-app-cb930",
  storageBucket: "house-marketplace-app-cb930.appspot.com",
  messagingSenderId: "586649096664",
  appId: "1:586649096664:web:27f39017555b40f17362ad",
  measurementId: "G-9EJK71G15P"
};

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()