import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage"

const firebaseConfig = {
  apiKey: "AIzaSyBNyuVXuvebqlIesmzW3FWWsWFgeCaPliM",
  authDomain: "disney-clone-9848f.firebaseapp.com",
  projectId: "disney-clone-9848f",
  storageBucket: "disney-clone-9848f.appspot.com",
  messagingSenderId: "984737334238",
  appId: "1:984737334238:web:60103f08c21ac57901534f"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;