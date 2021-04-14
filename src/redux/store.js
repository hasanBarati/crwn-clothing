import {createStore,applyMiddleware} from 'redux'
import logger from 'redux-logger'
import {persistStore} from 'redux-persist'
import rootReducer from './root-reducer'
import createSagaMiddleware from 'redux-saga'
//import {fetchCollectionsStart} from './shop/shop.saga'
import rootSaga from './rootSaga'
//import thunk from 'redux-thunk'

const sagaMiddleware=createSagaMiddleware()
//const middleWare=[thunk]
const middleWare=[sagaMiddleware]

export const store=createStore(rootReducer,applyMiddleware(...middleWare))
sagaMiddleware.run(rootSaga)
export const persistor=persistStore(store)
export default {store,persistor}