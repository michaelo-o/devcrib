// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCdu2oPDJ1beGr0t_SEVASmMenX2DeUJf0",
    authDomain: "devcrib-6d640.firebaseapp.com",
    projectId: "devcrib-6d640",
    storageBucket: "devcrib-6d640.appspot.com",
    messagingSenderId: "343663994840",
    appId: "1:343663994840:web:5a5c4db3922fadf2b434ad",
    measurementId: "G-3DLT4DSH70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);