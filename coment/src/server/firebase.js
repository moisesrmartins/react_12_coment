import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDV5v1juHKPWeh_6NS3CI7Be9wQHa__wRU",
  authDomain: "coment-b5982.firebaseapp.com",
  projectId: "coment-b5982",
  storageBucket: "coment-b5982.appspot.com",
  messagingSenderId: "591752607648",
  appId: "1:591752607648:web:ab5af9a001bb920aee96c5",
};
firebase.initializeApp(firebaseConfig);

export default firebase;
