// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDzZab9y9biGSyWkQiBK0r3ByW8doH_dwU",
    authDomain: "gym-trainer-services.firebaseapp.com",
    projectId: "gym-trainer-services",
    storageBucket: "gym-trainer-services.appspot.com",
    messagingSenderId: "598152818049",
    appId: "1:598152818049:web:d9adc28be5ea52b935cc80"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;