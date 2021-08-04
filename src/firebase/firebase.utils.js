import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDlrRPZWNGamaYg-N7gCwIJGBUnLdmljPU",
  authDomain: "crown-db-1be3f.firebaseapp.com",
  projectId: "crown-db-1be3f",
  storageBucket: "crown-db-1be3f.appspot.com",
  messagingSenderId: "951367225715",
  appId: "1:951367225715:web:ce4dc2d3b16c38588c7506",
  measurementId: "G-0V7BK7ESQR",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
