 
 import firebase from 'firebase/app'
 import 'firebase/firestore'
 import 'firebase/auth'
 
 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyCBh5YWfb6dMCB_hdTJ5PSCKJdvlLTZyfw",
    authDomain: "food-7279d.firebaseapp.com",
    databaseURL: "https://food-7279d.firebaseio.com",
    projectId: "food-7279d",
    storageBucket: "food-7279d.appspot.com",
    messagingSenderId: "724111229212"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true })
  
  export default firebase;