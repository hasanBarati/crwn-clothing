import {all,call} from 'redux-saga/effects'
import {fetchCollectionsStart} from './shop/shop.saga'
import {userSaga} from '../redux/user/user-saga'
export default function* rootSaga(){
   yield all([call(fetchCollectionsStart),call(userSaga)])
}