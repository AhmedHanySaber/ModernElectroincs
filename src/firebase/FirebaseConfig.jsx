// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// Import the functions you need from the SDKs you need
const firebaseConfig = {
  apiKey: "AIzaSyDtvuazlrNhgsHs2bI-6Pop_p2QjsNtkWE",
  authDomain: "modernelcctroincs.firebaseapp.com",
  projectId: "modernelcctroincs",
  storageBucket: "modernelcctroincs.appspot.com",
  messagingSenderId: "814326765605",
  appId: "1:814326765605:web:6a76d38c5698a680b0c7cc",
  measurementId: "G-179K60ZJCC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);
export { fireDB, auth }