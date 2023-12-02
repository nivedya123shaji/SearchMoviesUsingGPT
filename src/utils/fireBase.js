// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHzhnQnenW983R8qzV8o0dANVckFX-K4k",
  authDomain: "nextflix-1fdec.firebaseapp.com",
  projectId: "nextflix-1fdec",
  storageBucket: "nextflix-1fdec.appspot.com",
  messagingSenderId: "68784784477",
  appId: "1:68784784477:web:a030e9c72490c00201f9b4",
  measurementId: "G-ZBY7VCS7EK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();