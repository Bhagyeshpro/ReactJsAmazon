// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAaouPutH6x18P4Uf9jAknJAXUy7Hti5cc",
  authDomain: "clone-f2b4b.firebaseapp.com",
  projectId: "clone-f2b4b",
  storageBucket: "clone-f2b4b.appspot.com",
  messagingSenderId: "1081488784240",
  appId: "1:1081488784240:web:9529f0683b87d2d18aadb5",
  measurementId: "G-FH1YXTZ1YN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);