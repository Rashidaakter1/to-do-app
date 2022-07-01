// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBK2cEIyqNU8jaTaUpWlc10BWjZbvoaK44",
  authDomain: "to-do-app-187ba.firebaseapp.com",
  projectId: "to-do-app-187ba",
  storageBucket: "to-do-app-187ba.appspot.com",
  messagingSenderId: "390802417421",
  appId: "1:390802417421:web:c41f44ae3f95828e0b7244"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app);

export default auth;