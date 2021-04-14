import {takeEvery,call,put,takeLatest} from 'redux-saga/effects'
import shopActionType from './shop.type'
import {firestore,convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils'
import {fetchCollectionFailur,fetchCollectionsSucsses} from './shop.action'
export function* fetchCollectionAsync(){
 yield console.log('started')


 try{
    const collectionRef=firestore.collection('collections')/*==>read collections data from database */
    const snapshot=yield collectionRef.get()
    const collectionsMap=yield call(convertCollectionsSnapshotToMap,snapshot)
    yield put(fetchCollectionsSucsses(collectionsMap))
 }
 catch (error){
     yield put(fetchCollectionFailur(error.message))
 }
    
// collectionRef.get().then( snapshot=>{
//  const collectionsMap=convertCollectionsSnapshotToMap(snapshot)/*====>داده ها را به map تبذیل کرده و مبخواند*/
//     dispatch(fetchCollectionsSucsses(collectionsMap))

// }).catch(error=>dispatch(fetchCollectionFailur(error.message)))



}

export function* fetchCollectionsStart(){
 yield takeLatest(
    shopActionType.FETCH_COLLECTION_START,
    fetchCollectionAsync
 )
}