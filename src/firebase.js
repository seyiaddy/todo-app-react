import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBGtbMwfHC9BGcmdJgOWdPA3M-dPGYK6rA",
  authDomain: "todo-app-react-de1d7.firebaseapp.com",
  databaseURL: "https://todo-app-react-de1d7-default-rtdb.firebaseio.com",
  projectId: "todo-app-react-de1d7",
  storageBucket: "todo-app-react-de1d7.appspot.com",
  messagingSenderId: "449428835705",
  appId: "1:449428835705:web:c92a0fa7776195b167f3a8",
  measurementId: "G-Q8B3GXW581"
});

const db = firebaseApp.firestore();

export default db;