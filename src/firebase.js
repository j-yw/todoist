import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyAtfVyPxPk8w6pYwUgBs-MT2azObvOe9Hk",
  authDomain: "todoist-dca51.firebaseapp.com",
  databaseURL: "https://todoist-dca51.firebaseio.com",
  projectId: "todoist-dca51",
  storageBucket: "todoist-dca51.appspot.com",
  messagingSenderId: "326649448162",
  appId: "1:326649448162:web:e5daf1d68287fab81a80bb",
  measurementId: "G-WSWNX9MJHP",
});

export { firebaseConfig as firebase };
