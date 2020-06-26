import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initalize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyD7ALtQkUrUt7sFlbIE_EZvT-l7zJejfIY",
    authDomain: "reactreduxapp-136b6.firebaseapp.com",
    databaseURL: "https://reactreduxapp-136b6.firebaseio.com",
    projectId: "reactreduxapp-136b6",
    storageBucket: "reactreduxapp-136b6.appspot.com",
    messagingSenderId: "101234774216",
    appId: "1:101234774216:web:f77b9779e473ee2b2795fd"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true })

  export default firebase;