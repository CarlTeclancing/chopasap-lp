// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtFfRV6oOU8RJH6AqgIBtxF2vkXkYpzJE",
  authDomain: "authentication-36d13.firebaseapp.com",
  projectId: "authentication-36d13",
  storageBucket: "authentication-36d13.appspot.com",
  messagingSenderId: "285847604697",
  appId: "1:285847604697:web:8e171dddb640e7f7b81dc8",
  measurementId: "G-VR9Y4B13YD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db, collection, addDoc };