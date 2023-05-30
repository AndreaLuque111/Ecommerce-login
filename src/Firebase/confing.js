
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcLkwZ7RKcLbjoyvc9smHSI1dB_Us4mwc",
  authDomain: "vinimaker-24184.firebaseapp.com",
  projectId: "vinimaker-24184",
  storageBucket: "vinimaker-24184.appspot.com",
  messagingSenderId: "503766663772",
  appId: "1:503766663772:web:71742eeeb2402d26fb5c99",
  measurementId: "G-V1WEN27X3V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(initializeApp)

