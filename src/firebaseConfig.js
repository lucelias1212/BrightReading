import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAtypXBeRTO2n2rLH78dv77LUp_btoRuDI",
  authDomain: "learning-app-6f8ff.firebaseapp.com",
  projectId: "learning-app-6f8ff",
  storageBucket: "learning-app-6f8ff.firebasestorage.app",
  messagingSenderId: "497981961771",
  appId: "1:497981961771:web:818f38e41aef2fd9f39c6e",
  measurementId: "G-VNDHLQHZY8"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

// Use standard Firestore initialization instead of initializeFirestore
export const db = getFirestore(app);

export default app;