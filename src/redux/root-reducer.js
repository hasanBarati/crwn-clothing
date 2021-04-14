import {combineReducers} from 'redux'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import CardReducer from './car/cart.reducer'
import userReducer from './user/user-reducer'
import directoryReducer from '../redux/directory/directory.reducer'
import shopReducer from './shop/shop.reduce'
import { persistor } from './store'


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
  };

const rootReducer= combineReducers({
    user:userReducer,
    cart:CardReducer,
    directory:directoryReducer,
    shop:shopReducer
})

export default persistReducer(persistConfig,rootReducer)