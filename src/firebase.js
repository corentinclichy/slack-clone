import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAjGMyCgH6tKYNFt4MtcLA5JH-g88yaXhg",
  authDomain: "slack-clone-d85e0.firebaseapp.com",
  projectId: "slack-clone-d85e0",
  storageBucket: "slack-clone-d85e0.appspot.com",
  messagingSenderId: "127725965808",
  appId: "1:127725965808:web:1f620cd29bada1cfbb4d35",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

//Firestore
const db = firebaseApp.firestore();

//Authentification
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
