import {takeLatest,put,all,call} from 'redux-saga/effects'
import userActionType from './user-action-type'
import {auth,googleProvider,createUserProfileDocument} from '../../firebase/firebase.utils'
import {googleSignInSuccess,googleSignInFailure,emailSignInFailure,emailSignInSuccess} from './user.action'

export function* signInWithGoogle(){
      try{
          const {user}=yield auth.signInWithPopup (googleProvider)   //sign in 
          const userRef=yield call(createUserProfileDocument,user)//create profile
          const userSnapshot=yield userRef.get()   //get user info
          yield put(
            googleSignInSuccess({id:userSnapshot.id,...userSnapshot.data()})   //put user in googleSignInSuccess
            
          )
        
      }
      catch(error){
        yield put(googleSignInFailure(error))
      }
}


export function* signInWithEmail({payload:{email,password}}){
   try{
     const {user}=yield auth.signInWithEmailAndPassword(email,password)
     const userRef=yield call(createUserProfileDocument,user)//create profile
     const userSnapshot=yield userRef.get()   //get user info
     yield put(
      emailSignInSuccess({id:userSnapshot.id,...userSnapshot.data()})   //put user in googleSignInSuccess
       
     )
   }
   catch(error){
      yield put(emailSignInFailure(error))
   }
}
export function* onGoogleSignInStart(){
    yield takeLatest(userActionType.GOOGLE_SIGN_IN_START,signInWithGoogle)
}

export function* onEmailSignInStart(){
  yield takeLatest(userActionType.EMAIL_SIGN_IN_START,signInWithEmail)
}
export function* userSaga(){
    yield all([call(onGoogleSignInStart),call(onEmailSignInStart)])
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