
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBRxrRAZypGqPretmBr7SkBHuQc2uwwjzA",
  authDomain: "react-amberflix.firebaseapp.com",
  projectId: "react-amberflix",
  storageBucket: "react-amberflix.appspot.com",
  messagingSenderId: "308484636103",
  appId: "1:308484636103:web:4dab43a742615c17ddede2",
  measurementId: "G-DQ5WP813E5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app)