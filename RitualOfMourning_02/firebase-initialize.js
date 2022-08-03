const firebase = require('firebase');
// Required for side-effects
require('firebase/firestore');

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyALYZROIl_hgj9_VyBAmqVU01SowJ2aZ8M",
    authDomain: "process-of-mourning.firebaseapp.com",
    projectId: "process-of-mourning",
    storageBucket: "process-of-mourning.appspot.com",
    messagingSenderId: "715986734523",
    appId: "1:715986734523:web:5962341d4d13a81bf1489e"

};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();

rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read, write: if false;
    }
  }
}