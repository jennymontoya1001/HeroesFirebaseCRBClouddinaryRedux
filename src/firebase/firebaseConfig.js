import firebase from 'firebase/app';
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBV0Z0YRPMaYa1qcXaS62nP9m1oBoW6Q-Q",
    authDomain: "heroes-crud-ed206.firebaseapp.com",
    projectId: "heroes-crud-ed206",
    storageBucket: "heroes-crud-ed206.appspot.com",
    messagingSenderId: "524915193164",
    appId: "1:524915193164:web:c72b86a759f9a466138be9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  export{
      db,
      firebase
  }