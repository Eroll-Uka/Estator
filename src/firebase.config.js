import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAQ8vBpsYr74zPEhikd8PiZ0YGPjgJkXMw",
  authDomain: "estator-c0a44.firebaseapp.com",
  projectId: "estator-c0a44",
  storageBucket: "estator-c0a44.appspot.com",
  messagingSenderId: "1012410537346",
  appId: "1:1012410537346:web:d48e8a1109a5b1f1a3ab9b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore ()