// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBeyyjyDgOc0J51PvIcqNy-gaYV55WYA00",
  authDomain: "cineai-2f370.firebaseapp.com",
  projectId: "cineai-2f370",
  storageBucket: "cineai-2f370.firebasestorage.app",
  messagingSenderId: "255865807254",
  appId: "1:255865807254:web:6eea88fec9223a720c7db7",
  measurementId: "G-MR8FSF84YR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
