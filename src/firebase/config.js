// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {  getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgP3LWgyIlRoDev7IES1sfN4Fhiqi6HHw",
  authDomain: "proyecto-probandofirebase.firebaseapp.com",
  projectId: "proyecto-probandofirebase",
  storageBucket: "proyecto-probandofirebase.appspot.com",
  messagingSenderId: "476254908671",
  appId: "1:476254908671:web:ca326ca0e003fa6d5ddcca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);