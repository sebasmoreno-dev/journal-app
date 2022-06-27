// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAD6K1gBEYsde4isKLUhcVEKNtYShKP88w",
  authDomain: "react-cursos-34a21.firebaseapp.com",
  projectId: "react-cursos-34a21",
  storageBucket: "react-cursos-34a21.appspot.com",
  messagingSenderId: "763519765619",
  appId: "1:763519765619:web:f6cfec5baa3e0c88d8ae06",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);

export const FirebaseDB = getFirestore(FirebaseApp);
