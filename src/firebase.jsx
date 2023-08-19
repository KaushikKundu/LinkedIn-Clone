import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyDOCB7whnP4qixidxvI2yJgXN6Z316He7c",
    authDomain: "linkedin-clone-89175.firebaseapp.com",
    projectId: "linkedin-clone-89175",
    storageBucket: "linkedin-clone-89175.appspot.com",
    messagingSenderId: "250241387023",
    appId: "1:250241387023:web:b886b32d8600310d69b17a"
  };
  const firebaseApp = initializeApp(firebaseConfig);
  const db = firebaseApp.getFirestore();
  const auth = firebase.auth();

  export {db,auth};
  