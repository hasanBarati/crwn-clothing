import {take,takeLatest,put,call,all} from 'redux-saga/effects'
import userActionType from '../user/user-action-type'
import {clearCart} from '../car/car.actions'
  

export function* clearCartOnSignOut(){
    yield put(clearCart())
}


export function* onSignOutSuccess(){
    yield takeLatest(userActionType.SIGN_OUT_SUCCESS,clearCartOnSignOut)
}
export function* cartSaga(){
    yield(all([call(onSignOutSuccess)]))
}