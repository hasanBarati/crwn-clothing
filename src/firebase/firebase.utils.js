
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

var config = {
    apiKey: "AIzaSyCHMReJLZk1h_T-YgAZbPDUB8Ba96g79zo",
    authDomain: "crwn-db-ffe7c.firebaseapp.com",
    projectId: "crwn-db-ffe7c",
    storageBucket: "crwn-db-ffe7c.appspot.com",
    messagingSenderId: "914367082964",
    appId: "1:914367082964:web:cfa81da6d75423a3c2a641"
  };
  // Initialize Firebase
  const fire=firebase.initializeApp(config);

  export const auth=firebase.auth();
  export const firestore=firebase.firestore();
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'})
  export const signInWithGoogle=()=>auth.signInWithPopup(provider)
export default fire;
