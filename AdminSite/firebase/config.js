import { initializeApp } from 'firebase/app';

// Firebase project configuration
const firebaseConfig = {
    apiKey: process.env.VITE_PUBLIC_API_KEY,  // Corrected the API key reference
    authDomain: "chop-asap.firebaseapp.com",
    projectId: "chop-asap",
    storageBucket: "chop-asap.appspot.com",
    messagingSenderId: "1038486190406",
    appId: "1:1038486190406:web:3a506fbe33ffed655e8d47",
    measurementId: "G-YCWZK4EV2B"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
