// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhZfFHLtaMLB85fKYzQM2Dp45u4gJtn4g",
  authDomain: "fbla2023-ba805.firebaseapp.com",
  projectId: "fbla2023-ba805",
  storageBucket: "fbla2023-ba805.appspot.com",
  messagingSenderId: "285350827513",
  appId: "1:285350827513:web:7be3e208c77b9844cb1928",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
