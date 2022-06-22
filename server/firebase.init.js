// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyBoKnOAxU2BrHisrMV_eaRIUnGh4Eb246Y",
    authDomain: "cdac-9f9c9.firebaseapp.com",
    projectId: "cdac-9f9c9",
    storageBucket: "cdac-9f9c9.appspot.com",
    messagingSenderId: "320594232531",
    appId: "1:320594232531:web:cc7eff41edcc5addcec026",
    measurementId: "G-3BT900F96T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);