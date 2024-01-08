import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBDTQP1Gatwe8uKbKlU1Ywn6rlCgM5sUJg",
  authDomain: "blogsite-c868f.firebaseapp.com",
  projectId: "blogsite-c868f",
  storageBucket: "blogsite-c868f.appspot.com",
  messagingSenderId: "396972404202",
  appId: "1:396972404202:web:cb4a92d65c7f1cbe75d693",
  measurementId: "G-WVV9CN8PXN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Database Setup
export const db = getFirestore(app);

// Authentication Setup
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
