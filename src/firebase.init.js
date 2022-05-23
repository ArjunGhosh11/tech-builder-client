// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC6C3nuO10WuoFvfeobLlQ7DfArKYerXew",
    authDomain: "tech-builder-49d52.firebaseapp.com",
    projectId: "tech-builder-49d52",
    storageBucket: "tech-builder-49d52.appspot.com",
    messagingSenderId: "841860750926",
    appId: "1:841860750926:web:5b5b68db366e0c3655ed1f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;