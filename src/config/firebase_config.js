import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyAsDZ-_3e-Ib3ToL5T3dZq7mczo4UpJGCQ",
    authDomain: "pet-pulse-21313.firebaseapp.com",
    projectId: "pet-pulse-21313",
    storageBucket: "pet-pulse-21313.appspot.com",
    messagingSenderId: "728018843641",
    appId: "1:728018843641:web:93f23fdf2b88271e1bef28",
    measurementId: "G-T7CZM9LZ0N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const GoogleProvider = new GoogleAuthProvider();