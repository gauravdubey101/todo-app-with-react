

import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    
    
        apiKey: "AIzaSyBVKqBuhW345LiLpUXd-T8oYnONw4llCcU",
        authDomain: "todo-app-db36c.firebaseapp.com",
        databaseURL: "https://todo-app-db36c.firebaseio.com",
        projectId: "todo-app-db36c",
        storageBucket: "todo-app-db36c.appspot.com",
        messagingSenderId: "988647043667",
        appId: "1:988647043667:web:c3d58588577ddfa21a4ca6",
        measurementId: "G-F2TCNE0HTQ"
   
      

});

const db = firebaseApp.firestore();
export default db;