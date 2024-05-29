// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { Database, getDatabase, ref } from "firebase/database";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8luykHS-IqqV35jf8Xp2Q3dRRh2uz9Sg",
  authDomain: "wnp-chess.firebaseapp.com",
  databaseURL: "https://wnp-chess-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "wnp-chess",
  storageBucket: "wnp-chess.appspot.com",
  messagingSenderId: "1038794382748",
  appId: "1:1038794382748:web:d8ccfea7da58255b75fc59",
  measurementId: "G-SPLVBNT9BV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const db = getDatabase();
export default db as Database;
