import React from 'react'
import ReactDOM from 'react-dom/client'
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import App from './App.jsx'
import './index.css'

const firebaseConfig = {
  apiKey: "AIzaSyDJzWLcIIBTZu6jLUNL7G1clVHtEqJm4TI",
  authDomain: "e-commerce-f897c.firebaseapp.com",
  projectId: "e-commerce-f897c",
  storageBucket: "e-commerce-f897c.appspot.com",
  messagingSenderId: "360275483335",
  appId: "1:360275483335:web:bd061e59e944480f9c7ce2",
  measurementId: "G-KEERJG9GCE"
};

const appFirestore = initializeApp(firebaseConfig);
export const db = getFirestore(appFirestore);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
