import {createStore,applyMiddleware} from 'redux'
import logger from 'redux-logger'
import {persistStore} from 'redux-persist'
import rootReducer from './root-reducer'
import thunk from 'redux-thunk'
const middleWare=[thunk]

export const store=createStore(rootReducer,applyMiddleware(...middleWare))
export const persistor=persistStore(store)
export default {store,persistor}