var firebaseConfig = {
        apiKey: "AIzaSyDveXLJQbNgDZPTTcszJ8VdM-2arZLfcj0",
        authDomain: "mourn-2e600.firebaseapp.com",
        projectId: "mourn-2e600",
        storageBucket: "mourn-2e600.appspot.com",
        messagingSenderId: "607191114703",
        appId: "1:607191114703:web:efd8a9bdfbae1e8c7a28ba"
      };
    
      const app = initializeApp(firebaseConfig);
      var firestore = firebase.firestore()
      const db = firestore.collection("Memory")



      let submitbtn = document.getElementById("submit-button")


      submitbtn.addEventListener("click", (e)=> { e.preventDefault()

        let Username = document.getElementById('Username').value
        let Note = document.getElementById('Note').value
        db.doc().set({
                Username: User_Name,
                Note: User_Note,

        }).then(()=> {console.log("data save")}).catch((error) =>{console.log(object)
        })
        })



// import { initializeApp } from "firebase/app";
// import { getDatabase } from "firebase/database";

// // TODO: Replace the following with your app's Firebase project configuration
// // See: https://firebase.google.com/docs/web/learn-more#config-object
// var firebaseConfig = {
//         apiKey: "AIzaSyALYZROIl_hgj9_VyBAmqVU01SowJ2aZ8M",
//         authDomain: "process-of-mourning.firebaseapp.com",
//         projectId: "process-of-mourning",
//         storageBucket: "process-of-mourning.appspot.com",
//         messagingSenderId: "715986734523",
//         appId: "1:715986734523:web:5962341d4d13a81bf1489e",
//         databaseURL: "httgs://process-of-mourning.appspot.com",
// };

// const app = initializeApp(firebaseConfig);
// const database = getDatabase(app);
// firebase.database();





////////////////////////////





// import Firebase from 'firebase';
// var dataRef = new Firebase('firebase url');
// console.log("Firebase : "+Firebase+" -- dataRef :: "+dataRef)
// dataRef.set("Firebase Require");

// //////

// const firebase = require('firebase');
// // Required for side-effects
// require('firebase/firestore');

// // TODO: Replace the following with your app's Firebase project configuration
// // See: https://firebase.google.com/docs/web/learn-more#config-object
// const firebaseConfig = {
//     apiKey: "AIzaSyALYZROIl_hgj9_VyBAmqVU01SowJ2aZ8M",
//     authDomain: "process-of-mourning.firebaseapp.com",
//     projectId: "process-of-mourning",
//     storageBucket: "process-of-mourning.appspot.com",
//     messagingSenderId: "715986734523",
//     appId: "1:715986734523:web:5962341d4d13a81bf1489e"

// };

// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// // Initialize Cloud Firestore and get a reference to the service
// const db = firebase.firestore();






// // rules_version = '2';
// // service firebase.storage {
// //   match /b/{bucket}/o {
// //     match /{allPaths=**} {
// //       allow read, write: if false;
// //     }
// //   }
// // }