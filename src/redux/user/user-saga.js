import {takeLatest,put,all,call} from 'redux-saga/effects'
import userActionType from './user-action-type'
import {auth,googleProvider,createUserProfileDocument,getCurrentUser} from '../../firebase/firebase.utils'
import {signInFailure,signInSuccess,SignOutSuccess,SignOutFailure} from './user.action'




export function* getSnapshotFromUserAuth(userAuth, additionalData) {
  try {
    const userRef = yield call(
      createUserProfileDocument,
      userAuth,
      additionalData
    );
    const userSnapshot = yield userRef.get();
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(signInFailure(error));
  }
}





export function* signInWithGoogle(){
      try{
          const {user}=yield auth.signInWithPopup (googleProvider)   //sign in 
        yield getSnapshotFromUserAuth(user)
      
        
      }
      catch(error){
        yield put(signInFailure(error));
      }
}


export function* signInWithEmail({payload:{email,password}}){
   try{
     const {user}=yield auth.signInWithEmailAndPassword(email,password)
     yield getSnapshotFromUserAuth(user)
  
   }
   catch(error){
    yield put(signInFailure(error));
   }
}

export function* isUserAutentication(){
  try{
     const userAth=yield getCurrentUser()
     if (!userAth) return
     yield getSnapshotFromUserAuth (userAth)
  }
  catch(error){
    yield put(signInFailure(error));
  }
}


export function* signOut(){
  try{
    yield auth.signOut();
    yield put(SignOutSuccess())
  }
  catch (error){
    yield put(SignOutFailure(error))
  }

}


export function* onGoogleSignInStart(){
    yield takeLatest(userActionType.GOOGLE_SIGN_IN_START,signInWithGoogle)
}

export function* onEmailSignInStart(){
  yield takeLatest(userActionType.EMAIL_SIGN_IN_START,signInWithEmail)
}

export function* onCheckUseSession(){
  yield takeLatest(userActionType.CHECK_USER_ACTION,isUserAutentication)
}

export function* onSgnOutStart(){
  yield takeLatest(userActionType.SIGN_OUT_START,signOut)
}

export function* userSaga(){
    yield all([call(onGoogleSignInStart),call(onEmailSignInStart),call(isUserAutentication),call(onSgnOutStart)])
}




//     this.unsubscribeFormAuth=auth.onAuthStateChanged(async userAuth=>{
//       if(userAuth){
//           const userRef=await createUserProfileDocument(userAuth)
//           userRef.onSnapshot(snapshot=>{
//             setCurrentUser({
             
//                 id:snapshot.id,
//                 ...snapshot.data()
              
//             })
//           })
//       }
//      /* this.setState({currentUser:userAuth})*/
//     setCurrentUser(userAuth)