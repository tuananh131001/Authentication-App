// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  FacebookAuthProvider,
  getAuth,
  getRedirectResult,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  TwitterAuthProvider,
} from "firebase/auth";
import { doc, getDoc, getFirestore, setDoc } from "@firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4OBewuyPXCc41bTnCYAm5S8cnYj7UE6A",
  authDomain: "simple-user-authenticati-7f92c.firebaseapp.com",
  projectId: "simple-user-authenticati-7f92c",
  storageBucket: "simple-user-authenticati-7f92c.appspot.com",
  messagingSenderId: "897096998603",
  appId: "1:897096998603:web:d54573a2fcf8e543ec454e",
  measurementId: "G-FZWWS3X1CG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);
const GoogleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const twitterProvider = new TwitterAuthProvider();

export const signInWithGoogle = () => {
  signInWithRedirect(auth, GoogleProvider).catch((error) => {
    console.log(error);
  });
  
};
export const signInWithGithub = () => {
  signInWithRedirect(auth, githubProvider).catch((error) => {
    console.log(error);
  });
};
export const signInWithFacebook = () => {
  signInWithRedirect(auth, facebookProvider).catch((error) => {
    console.log(error);
  });
};
export const signInWithTwitter = () => {
  signInWithRedirect(auth, twitterProvider).catch((error) => {
    console.log(error);
  });
};

