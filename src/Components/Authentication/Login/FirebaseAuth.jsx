    import firebase from "firebase";
    import React from "react";
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional


    const firebaseConfig = {
        apiKey: "AIzaSyAS1X6PvWf9nhy_ulEXI7wB7J3ap6CpX0g",
        authDomain: "tutor-finder-app-94f4d.firebaseapp.com",
        projectId: "tutor-finder-app-94f4d",
        storageBucket: "tutor-finder-app-94f4d.appspot.com",
        messagingSenderId: "292928724946",
        appId: "1:292928724946:web:536ee66307a947f881320b",
        measurementId: "G-PB099MDH0K"

    };

    // Initialize Firebase

    const fireAuth = firebase.initializeApp(firebaseConfig);

    export default fireAuth;