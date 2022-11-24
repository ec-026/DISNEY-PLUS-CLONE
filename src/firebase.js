import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAsJZsQPtE2-UQkorCF6oMKO8Yh9kSHsQs",
  authDomain: "disney-plus-clone-b9380.firebaseapp.com",
  projectId: "disney-plus-clone-b9380",
  storageBucket: "disney-plus-clone-b9380.appspot.com",
  messagingSenderId: "46007890598",
  appId: "1:46007890598:web:6abb65b9344027dd807a67",
  measurementId: "G-WGE00LQEGM"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export { auth, provider, storage };
  export default db;