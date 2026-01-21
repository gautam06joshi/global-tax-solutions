import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBh9L4Cyruia6ARlh7i1cWRa6GcoHhXKhU",
  authDomain: "global-tax-solutions.firebaseapp.com",
  projectId: "global-tax-solutions",
  storageBucket: "global-tax-solutions.firebasestorage.app",
  messagingSenderId: "400499435445",
  appId: "1:400499435445:web:1d455c8fdcf427e6c15bfc"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
