import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-fksoUPb6kOpJ771AvsCKyrG9W-c6LVg",
  authDomain: "medico-app-b859b.firebaseapp.com",
  projectId: "medico-app-b859b",
  storageBucket: "medico-app-b859b.appspot.com",
  messagingSenderId: "740759949099",
  appId: "1:740759949099:web:d422b7bdee3f02198b3f6e",
  measurementId: "G-MZ8G8WDGCR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Firestore
const auth = getAuth(app);
const db = getFirestore(app);

// Export authentication and database instances
export { auth, db };
