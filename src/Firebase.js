import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDIPgoKIVHqZ_AlhIflKgMFgqEQuqqA8Ls",
  authDomain: "registration-24295.firebaseapp.com",
  projectId: "registration-24295",
  storageBucket: "registration-24295.appspot.com",
  messagingSenderId: "1088149606678",
  appId: "1:1088149606678:web:f34cf114446e72bcc04037",
  measurementId: "G-EM53K53V8S",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };
