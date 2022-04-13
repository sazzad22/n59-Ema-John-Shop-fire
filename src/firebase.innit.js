// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import getAuth from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEk6I61wn-SEJ6RRv2GA-7cKCID7pkhCI",
  authDomain: "ema-john-ab110.firebaseapp.com",
  projectId: "ema-john-ab110",
  storageBucket: "ema-john-ab110.appspot.com",
  messagingSenderId: "957039802642",
  appId: "1:957039802642:web:a0afb989759620508edbcb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;