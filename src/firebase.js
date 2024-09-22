// src/firebase.js
import { initializeApp } from "firebase/app";

import { getDatabase } from "firebase/database"; // Import Firebase Realtime Database

// Twoja konfiguracja Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDKVRrWF6M-OsLogku4lpgEoUO-kzPa068",
  authDomain: "negocjacje-a1e67.firebaseapp.com",
  projectId: "negocjacje-a1e67",
  storageBucket: "negocjacje-a1e67.appspot.com",
  messagingSenderId: "260411617112",
  appId: "1:260411617112:web:d71c622c602df643edff2d",
  measurementId: "G-4M23GJZH6N",
  databaseURL: "https://negocjacje-a1e67-default-rtdb.europe-west1.firebasedatabase.app/" // URL do Twojej bazy danych
};

// Inicjalizacja Firebase
const app = initializeApp(firebaseConfig);


// Inicjalizacja bazy danych
const database = getDatabase(app); // Poprawna inicjalizacja bazy danych

// Eksportowanie instancji bazy danych
export { database };  // Eksport bazy danych
