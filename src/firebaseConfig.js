// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGi2ZZC849LFY3viA6fsjWhCUxs7WbY88",
  authDomain: "nutriquest-website.firebaseapp.com",
  projectId: "nutriquest-website",
  storageBucket: "nutriquest-website.appspot.com",
  messagingSenderId: "33505663167",
  appId: "1:33505663167:web:59648cf6373d2db82fce0a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, app };
