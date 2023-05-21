// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBMKEtjHKd2tkuZlUrvL8wFdXHc759GZmM",
    authDomain: "curso-reactjs-35097.firebaseapp.com",
    projectId: "curso-reactjs-35097",
    storageBucket: "curso-reactjs-35097.appspot.com",
    messagingSenderId: "209948999792",
    appId: "1:209948999792:web:9280e45fafd69bc66ef4b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)