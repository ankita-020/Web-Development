// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBKsjIyx8fBIA8Vqj3crFbz6nCth860Og",
  authDomain: "netflix-gpt-8e69f.firebaseapp.com",
  projectId: "netflix-gpt-8e69f",
  storageBucket: "netflix-gpt-8e69f.firebasestorage.app",
  messagingSenderId: "472464977401",
  appId: "1:472464977401:web:89d1ea4e17d5151bc16128",
  measurementId: "G-G8N3DG6MWW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
