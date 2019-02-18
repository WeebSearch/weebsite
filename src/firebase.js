import firebase from "firebase/app";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBrWZYsyOIXv44x4_G618e0Sc3hO4JYroc",
  authDomain: "weebsearch.firebaseapp.com",
  databaseURL: "https://weebsearch.firebaseio.com",
  projectId: "weebsearch",
  storageBucket: "weebsearch.appspot.com",
  messagingSenderId: "577095199766"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
