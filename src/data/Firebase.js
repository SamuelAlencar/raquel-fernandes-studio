
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
  apiKey: "AIzaSyDkmMdOTH6cJlaSeL6P4AnHyxwKxuKHUm4",
  authDomain: "login-teste-3fb9b.firebaseapp.com",
  projectId: "login-teste-3fb9b",
  storageBucket: "login-teste-3fb9b.appspot.com",
  messagingSenderId: "598248057879",
  appId: "1:598248057879:web:727daf407152e9aab74052",
  measurementId: "G-THK2GXR6ER"
};

firebase.initializeApp(config);
export default firebase;