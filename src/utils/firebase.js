// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5e-2hyfvvVk-xfLC8ujBTUsJPSh4UnS8",
  authDomain: "streamgpt-9290e.firebaseapp.com",
  projectId: "streamgpt-9290e",
  storageBucket: "streamgpt-9290e.appspot.com",
  messagingSenderId: "277319963475",
  appId: "1:277319963475:web:0a3a65f06634a498e2c7a6",
  measurementId: "G-CR4PR6S8BV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();