// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration


  const firebaseConfig = {
    apiKey: "AIzaSyCcypiqlCMtw3L101xIkJtF5KnqeJfg7b0",
    authDomain: "mern-blog-93251.firebaseapp.com",
    projectId: "mern-blog-93251",
    storageBucket: "mern-blog-93251.appspot.com",
    messagingSenderId: "465795421831",
    appId: "1:465795421831:web:a751766a06ec734dc1ca22",
    measurementId: "G-97LNNPNB2Y"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
