// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyC58WAuu4J8nmfBFGjaLeMEKlvGuBZ1xGg",
    authDomain: "campuseats-431d3.firebaseapp.com",
    databaseURL: "https://campuseats-431d3.firebaseio.com",
    projectId: "campuseats-431d3",
    storageBucket: "campuseats-431d3.appspot.com",
    messagingSenderId: "94074607384",
    appId: "1:94074607384:web:594dbcadcdb444e47bf06d",
    measurementId: "G-KDJMVEZ6TZ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var defaultStorage = firebase.storage();
var db = firebase.firestore();


db.collection("cafes").add({
    name: "Triple O's",
})
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });


// // Initialize the FirebaseUI Widget using Firebase.
// var ui = new firebaseui.auth.AuthUI(firebase.auth());
//
// ui.start('#firebaseui-auth-container', {
//     signInOptions: [
//         firebase.auth.EmailAuthProvider.PROVIDER_ID,
//         firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//         firebase.auth.FacebookAuthProvider.PROVIDER_ID
//     ],
//     // Other config options...
// });
//

// Use the shorthand notation to access the default project's Firebase services