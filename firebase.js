import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBd_GEiCO0-WUZq8Qyf2pJ_l9Gv6I2i3Vc",
    authDomain: "disneyplus-clone-2b0cb.firebaseapp.com",
    projectId: "disneyplus-clone-2b0cb",
    storageBucket: "disneyplus-clone-2b0cb.appspot.com",
    messagingSenderId: "267874921336",
    appId: "1:267874921336:web:05af49a50e94e031c9768d",
    measurementId: "G-QWK8D3SVYG",
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export { auth, provider, storage };
  export default db;