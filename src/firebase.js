

import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    
    
    apiKey: "AIzaSyDd2c-gDucfKyQEjBgRT-EeMtmiTGvf_sc",
    authDomain: "todo-app-89e35.firebaseapp.com",
    projectId: "todo-app-89e35",
    storageBucket: "todo-app-89e35.appspot.com",
    messagingSenderId: "166270172407",
    appId: "1:166270172407:web:ff9a38339db782d0bca7f2",
    measurementId: "G-B7PMQZC096"
   
      

});

const db = firebaseApp.firestore();
export default db;