// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

export const getFirebaseApp = () => {
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCjL-AX6TIbRXpoUXoc0chQN9mhRASa5yA",
    authDomain: "whatsapp-5f24c.firebaseapp.com",
    projectId: "whatsapp-5f24c",
    storageBucket: "whatsapp-5f24c.appspot.com",
    messagingSenderId: "1085581034428",
    appId: "1:1085581034428:web:93fe8030ce5fb28b4761b9",
    measurementId: "G-DFDL6G93BN",
  };

  // Initialize Firebase
  return initializeApp(firebaseConfig);
};
