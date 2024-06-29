import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2btnsildWPOJFouup5bVKJkWyZVYRDbI",
  authDomain: "lowanx-75133.firebaseapp.com",
  projectId: "lowanx-75133",
  storageBucket: "lowanx-75133.appspot.com",
  messagingSenderId: "437902712600",
  appId: "1:437902712600:web:28e4c7af6cb1165e82486d",
  measurementId: "G-Z67782D6KV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);