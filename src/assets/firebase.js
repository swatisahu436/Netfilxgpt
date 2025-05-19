// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC19VMOPXHe4d92CujKR7DRAMA92_7nMNY",
  authDomain: "netflix-gpt-7fd32.firebaseapp.com",
  projectId: "netflix-gpt-7fd32",
  storageBucket: "netflix-gpt-7fd32.firebasestorage.app",
  messagingSenderId: "33948093298",
  appId: "1:33948093298:web:38d4862a027287b4da2beb",
  measurementId: "G-SBMH0QC9LF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);