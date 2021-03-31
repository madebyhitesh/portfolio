import firebase from "firebase/app";
import "firebase/storage"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAvWgSQhlz8M5JEEKS7ATYmeR_6g50JgUg",
    authDomain: "portfolio-96cc2.firebaseapp.com",
    projectId: "portfolio-96cc2",
    storageBucket: "portfolio-96cc2.appspot.com",
    messagingSenderId: "856137328709",
    appId: "1:856137328709:web:46935f604857a71102db2c",
    measurementId: "G-22K6KVK2WY"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore()

export { projectFirestore, projectStorage };
