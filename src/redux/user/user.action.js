import userActionType from './user-action-type'

export const setCurrentUser=user=>({
    type:userActionType.SET_CURRENT_USER,
    payload:user
})

export const googleSignInStart=()=>({
    type:userActionType.GOOGLE_SIGN_IN_START
})

/*export const googleSignInSuccess=(user)=>({
    type:userActionType.GOOGLE_SIGN_IN_SUCSSES,
    payload:user
})

export const googleSignInFailure=(error)=>({
    type:userActionType.GOOGLE_SIGN_IN_FAILURE,
    payload:error
})*/



export const signInSuccess = user => ({
    type:userActionType.SIGN_IN_SUCCESS,
    payload: user
  });
  
  export const signInFailure = error => ({
    type:userActionType.SIGN_IN_FAILURE,
    payload: error
  });



export const emailSignInStart=(emailAndPassword)=>({
    type:userActionType.EMAIL_SIGN_IN_START,
    payload:emailAndPassword
})

export const signOutStart=()=>({
    type:userActionType.SIGN_OUT_START
})


export const SignOutSuccess=()=>({
  type:userActionType.SIGN_OUT_SUCCESS
})

export const SignOutFailure=error=>({
  type:userActionType.SIGN_OUT_FAILURE,
  payload:error
})
export const checkUserSession=()=>({
    type:userActionType.CHECK_USER_ACTION
})

export const SignUpStart=()=>({
  type:userActionType.SIGN_UP_START
})

export const SignUpSuccess=items=>({
  type:userActionType.SIGN_UP_SUCCESS,
  payload:items
})


export const SignUpFailure=error=>({
  type:userActionType.SIGN_UP_FAILURE,
  payload:error
})