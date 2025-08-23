// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdbgvct_B6wQRQBYJjdeuBYBebboj2EZA",
  authDomain: "netflixgpt-651fc.firebaseapp.com",
  projectId: "netflixgpt-651fc",
  storageBucket: "netflixgpt-651fc.firebasestorage.app",
  messagingSenderId: "193565321060",
  appId: "1:193565321060:web:45b75363e6feb8009c7c71",
  measurementId: "G-XY3T6RSYJ9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();