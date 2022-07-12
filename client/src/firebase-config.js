// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  FacebookAuthProvider,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
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
  signInWithPopup(auth, GoogleProvider)
    .then(async (result) => {
      if (result._tokenResponse.isNewUser) {
        await setDoc(doc(db, "users", result.user.uid), {
          name: result.user.displayName,
          bio: "",
          email: result.user.email,
          image: "https://www.w3schools.com/howto/img_avatar.png",
        });
      }
    })
    .catch((error) => {
      console.log(error);
    });
};
export const signInWithGithub = () => {
  signInWithPopup(auth, githubProvider)
    .then(async (result) => {
      if (result._tokenResponse.isNewUser) {
        await setDoc(doc(db, "users", result.user.uid), {
          name: result.user.displayName,
          bio: "",
          email: result.user.email,
          image: "https://www.w3schools.com/howto/img_avatar.png",
        });
      }
    })
    .catch((error) => {
      console.log(error);
    });
};
export const signInWithFacebook = () => {
  signInWithPopup(auth, facebookProvider)
    .then(async (result) => {
      if (result._tokenResponse.isNewUser) {
        await setDoc(doc(db, "users", result.user.uid), {
          name: result.user.displayName,
          bio: "",
          email: result.user.email,
          image: "https://www.w3schools.com/howto/img_avatar.png",
        });
      }
    })
    .catch((error) => {
      console.log(error);
    });
};
export const signInWithTwitter = () => {
  signInWithPopup(auth, signInWithTwitter)
    .then(async (result) => {
      if (result._tokenResponse.isNewUser) {
        await setDoc(doc(db, "users", result.user.uid), {
          name: result.user.displayName,
          bio: "Lorem, ipsum dolor sarum sit perferendis?",
          phone: "129321031283",
          email: result.user.email,
          image: "https://www.w3schools.com/howto/img_avatar.png",
        });
      }
    })
    .catch((error) => {
      console.log(error);
    });
};
