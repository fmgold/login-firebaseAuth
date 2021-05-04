import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyDZGRM615T_08rmZoKINTdJiS9bFRx0ktI",
    authDomain: "login-25978.firebaseapp.com",
    projectId: "login-25978",
    storageBucket: "login-25978.appspot.com",
    messagingSenderId: "636696242119",
    appId: "1:636696242119:web:822a34a10e62f8f70adbe2"
  };
  // Initialize Firebase
  const firebaseDb=firebase.initializeApp(firebaseConfig);

  export default firebaseDb;
