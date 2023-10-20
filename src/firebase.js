// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAPHZc5HDu5drjBobskXhIlRIOglHW1Dlc',
  authDomain: 'react-auth-eab40.firebaseapp.com',
  projectId: 'react-auth-eab40',
  storageBucket: 'react-auth-eab40.appspot.com',
  messagingSenderId: '619883994720',
  appId: '1:619883994720:web:634ebf57ca13f1cd842d05',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app)
