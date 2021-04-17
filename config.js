import firebase from 'firebase';
require('@firebase/firestore');

var firebaseConfig = {
    apiKey: "AIzaSyCYcY5VTc1g2AX326S0fXz0uB02rvHYx9w",
    authDomain: "barter-system-app-aa7f6.firebaseapp.com",
    databaseURL: "https://barter-system-app-aa7f6-default-rtdb.firebaseio.com",
    projectId: "barter-system-app-aa7f6",
    storageBucket: "barter-system-app-aa7f6.appspot.com",
    messagingSenderId: "388219944348",
    appId: "1:388219944348:web:0edb69845af5c78f9c9c59"
  };

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();