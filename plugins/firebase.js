// plugins/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// import { getAnalytics } from "firebase/analytics"; // Optional, if you need analytics

const firebaseConfig = {
  apiKey: "AIzaSyAKd-T1Vj2fv8TO3PpGT7kfHvfewc-zVcs",
  authDomain: "trademarkia-ae916.firebaseapp.com",
  databaseURL: "https://trademarkia-ae916-default-rtdb.firebaseio.com",
  projectId: "trademarkia-ae916",
  storageBucket: "trademarkia-ae916.appspot.com",
  messagingSenderId: "825059507494",
  appId: "1:825059507494:web:92ee403639c6888ea9d5e7",
  measurementId: "G-C95J8CZND7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app); // Optional
const db = getFirestore(app);

export { db };
