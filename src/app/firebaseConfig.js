// Import the functions you need from the SDKs you need






import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAgTxp5_9Ymm-DpQoZ45pjMgbkCsL8j1IM",
  authDomain: "hotel-management-1c7fa.firebaseapp.com",
  projectId: "hotel-management-1c7fa",
  storageBucket: "hotel-management-1c7fa.appspot.com",
  messagingSenderId: "476472408958",
  appId: "1:476472408958:web:187597399463ffd9a2112f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const Hotels=collection(db,"Hotels")

module.exports={
Hotels,db
 }