
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
/*
داده ها را به پایگاه داده اضافه کرد
  export const addCollectionAndDocuments=async (collectionKey,objectToAdd)=>{
        const collectionRef=firestore.collection(collectionKey)
    
     const batch=firestore.batch()
        objectToAdd.forEach(obj => {
          const newDocRef=collectionRef.doc()
        
        batch.set(newDocRef,obj)
        });
     return await  batch.commit()

  }
*/
export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
 
    return accumulator;
  }, {});
};


export const getCurrentUser=()=>{
  return new Promise((resolve,reject)=>{
    const unsubscribe=auth.onAuthStateChanged(userAuth=>{
      unsubscribe()
      resolve(userAuth)
    
    },reject)
  })
}
  // Initialize Firebase
  const fire=firebase.initializeApp(config);

  export const auth=firebase.auth();
  export const firestore=firebase.firestore();
 export  const googleProvider = new firebase.auth.GoogleAuthProvider();
 googleProvider.setCustomParameters({prompt:'select_account'})
  export const signInWithGoogle=()=>auth.signInWithPopup(googleProvider)
export default fire;
