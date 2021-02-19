
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

  export const createUserProfileDocument=async(userAuth,aditionalData)=>{
    if (! userAuth) return;
    const userRef=firestore.doc(`users/${userAuth.uid}`)
    const snapShot=await userRef.get()
    console.log(snapShot)
    if(!snapShot.exists){
      const {displayName,email}=userAuth
      const createdAt=new Date();
      try{
          await userRef.set({
            displayName,
            email,
            createdAt,
            ...aditionalData
          })
      }
      catch(error){
        console.log('error created user',error.message)
      }
    }
    return userRef
  }
  // Initialize Firebase
  const fire=firebase.initializeApp(config);

  export const auth=firebase.auth();
  export const firestore=firebase.firestore();
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'})
  export const signInWithGoogle=()=>auth.signInWithPopup(provider)
export default fire;
