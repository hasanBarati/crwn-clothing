import {all,call} from 'redux-saga/effects'
import {fetchCollectionsStart} from './shop/shop.saga'
import {userSaga} from '../redux/user/user-saga'
import {cartSaga}  from '../redux/car/cart-saga'
export default function* rootSaga(){
   yield all([call(fetchCollectionsStart),call(userSaga),call(cartSaga)])
}