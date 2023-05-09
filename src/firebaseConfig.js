// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBzs_iN6vX72yxEyLoo2raCOvslnrO13s",
  authDomain: "todo-ninja-3da20.firebaseapp.com",
  projectId: "todo-ninja-3da20",
  storageBucket: "todo-ninja-3da20.appspot.com",
  messagingSenderId: "639268577352",
  appId: "1:639268577352:web:c5dff9f02b6b44d07c787d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
