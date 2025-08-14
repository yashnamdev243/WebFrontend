// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getFirestore } from "firebase/firestore";

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBHeZEpPVeKmsQaW3_FS9aQa7RIvmlIENA",
//   authDomain: "namdev-shivling.firebaseapp.com",
//   projectId: "namdev-shivling",
//   storageBucket: "namdev-shivling.firebasestorage.app",
//   messagingSenderId: "901461960279",
//   appId: "1:901461960279:web:9cb3c9c8838d1985cd6512",
//   measurementId: "G-WPPZT897HZ"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// export const db = getFirestore(app);


// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBHeZEpPVeKmsQaW3_FS9aQa7RIvmlIENA",
  authDomain: "namdev-shivling.firebaseapp.com",
  projectId: "namdev-shivling",
//  storageBucket: "namdev-shivling.firebasestorage.app",
 storageBucket: "namdev-shivling.appspot.com",
  messagingSenderId: "901461960279",
  appId: "1:901461960279:web:9cb3c9c8838d1985cd6512",
  measurementId: "G-WPPZT897HZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);
export const storage = getStorage(app); 