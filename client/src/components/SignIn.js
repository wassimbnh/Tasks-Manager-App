import React from 'react';
import '../App.css';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/analytics';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';


firebase.initializeApp({
    apiKey: "AIzaSyAND-1PUMhLj4ev41Aohf9KMynDWAq1dgE",
    authDomain: "mychat-172b8.firebaseapp.com",
    projectId: "mychat-172b8",
    storageBucket: "mychat-172b8.appspot.com",
    messagingSenderId: "411820925743",
    appId: "1:411820925743:web:8f746746b2aad5e3dc37da",
    measurementId: "G-Z0ZRYP5JCS"
});

const auth = firebase.auth();
const firestore = firebase.firestore();
const analytics = firebase.analytics();

function SignIn() {
    const navigate = useNavigate();

    const signInWithGoogle = () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider)
        .then(() => {
            navigate('/tasks');

        });
    }
  
    return (
      <>
<Button
  onClick={signInWithGoogle}
  style={{
    backgroundColor: "#4285f4", // Google's blue
    color: "#fff", // White text
    border: "none", // Remove border
    padding: "10px 20px", // Add padding
    fontSize: "16px", // Increase font size
    borderRadius: "4px", // Round the corners
    cursor: "pointer", // Change cursor to pointer on hover
  }}
>
  Sign in with Google
</Button>

      </>
    )
}

export default SignIn;
