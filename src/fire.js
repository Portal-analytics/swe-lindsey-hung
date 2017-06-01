import firebase from 'firebase'
var config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
  apiKey: "AIzaSyAB-Jnd91bMsYjLFCJmJMmvZb9UvgjmVeA",
  authDomain: "ontime-9d01d.firebaseapp.com",
  databaseURL: "https://ontime-9d01d.firebaseio.com",
  projectId: "ontime-9d01d",
  storageBucket: "ontime-9d01d.appspot.com",
  messagingSenderId: "1014608852770"
};
var fire = firebase.initializeApp(config);
export default fire;