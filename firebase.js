// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhB4LxS8VPS_P_q9kmRDu1z-OGidawrkk",
  authDomain: "interview-d7f3a.firebaseapp.com",
  projectId: "interview-d7f3a",
  storageBucket: "interview-d7f3a.appspot.com",
  messagingSenderId: "478501918096",
  appId: "1:478501918096:web:181120c4dccbfb517fcf15"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db }