
import { REGISTER } from 'redux-persist/es/constants'
import userActionType from './user-action-type'
const initial_state={
    currentUser:null,
    error:null
}
const userReducer=(state=initial_state,action)=>{
    switch (action.type){
        case userActionType.GOOGLE_SIGN_IN_START:
        case userActionType.EMAIL_SIGN_IN_START:    
            return{
                ...state,
                currentUser:action.payload,
                error:null
            }
        case userActionType.GOOGLE_SIGN_IN_FAILURE:
        case userActionType.EMAIL_SIGN_IN_FAILURE:
            return{
               ...state,
               error:action.payload
            }        
            default:
        return state
    }
    
}
export default userReducer