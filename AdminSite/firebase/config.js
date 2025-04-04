import { initializeApp } from 'firebase/app';


// TODO: Replace the following with your app's Firebase project configuration

const firebaseConfig = {
    apiKey: import.meta.env.VITE_PUBLIC_API_KEY,

    authDomain: "chop-asap.firebaseapp.com",
  
    projectId: "chop-asap",
  
    storageBucket: "chop-asap.appspot.com",
  
    messagingSenderId: "1038486190406",
  
    appId: "1:1038486190406:web:3a506fbe33ffed655e8d47",
  
    measurementId: "G-YCWZK4EV2B"
  
};

export const app = initializeApp(firebaseConfig);