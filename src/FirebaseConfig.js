// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8eVHB-7p9_Mv6EDEIKRsG8Mii5QZ2F2Y",
  authDomain: "authentication-31b55.firebaseapp.com",
  projectId: "authentication-31b55",
  storageBucket: "authentication-31b55.firebasestorage.app",
  messagingSenderId: "655334795421",
  appId: "1:655334795421:web:4a7336ea9985b4d7bdcc74",
  measurementId: "G-DT5NQ7VQ9W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;