// src/firebase.js
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKVRrWF6M-OsLogku4lpgEoUO-kzPa068",
  authDomain: "negocjacje-a1e67.firebaseapp.com",
  projectId: "negocjacje-a1e67",
  storageBucket: "negocjacje-a1e67.appspot.com",
  messagingSenderId: "260411617112",
  appId: "1:260411617112:web:d71c622c602df643edff2d",
  measurementId: "G-4M23GJZH6N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { database };