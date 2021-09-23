import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyD2O22JW0aL2bvVG2aL5kZ0-SNEqJqN0Y4",
  authDomain: "crud-react-c4132.firebaseapp.com",
  projectId: "crud-react-c4132",
  storageBucket: "crud-react-c4132.appspot.com",
  messagingSenderId: "1030884035870",
  appId: "1:1030884035870:web:1fc1463a4bc865f5d94d0f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;