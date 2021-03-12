import {combineReducers} from 'redux'
import CardReducer from './car/cart.reducer'
import userReducer from './user/user-reducer'

export default combineReducers({
    user:userReducer,
    cart:CardReducer
})