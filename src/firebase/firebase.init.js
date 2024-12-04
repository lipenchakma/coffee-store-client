// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpuwNtW-jMGdG6yP1-xePHdhladDrvUpI",
  authDomain: "coffee-store-b1e51.firebaseapp.com",
  projectId: "coffee-store-b1e51",
  storageBucket: "coffee-store-b1e51.firebasestorage.app",
  messagingSenderId: "793738370546",
  appId: "1:793738370546:web:901e9d6994980015381f6b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);