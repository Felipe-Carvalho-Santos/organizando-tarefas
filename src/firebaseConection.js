import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';



const firebaseConfig = {
    apiKey: "AIzaSyAseGOe2o7WF8sXTXL46frxLozMSUQsyV8",
    authDomain: "curso-3aee9.firebaseapp.com",
    projectId: "curso-3aee9",
    storageBucket: "curso-3aee9.appspot.com",
    messagingSenderId: "626416200954",
    appId: "1:626416200954:web:9a2096e33c4bd14ed4ad43",
    measurementId: "G-45CNN5Q401"
  };

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export{ db, auth };