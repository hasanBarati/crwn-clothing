import shopActionType from './shop.type'
import {firestore,convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils'
// export const updateColletions=(collectionsMap)=>({
//     type:shopActionType.UPDATE_COLLECTION,
//     payload:collectionsMap
// })

export const fetchCollectionsStart=()=>({
    type:shopActionType.FETCH_COLLECTION_START,
 
})

export const fetchCollectionsSucsses=collectionsMap=>({
    type:shopActionType.FETCH_COLLECTION_SUCCSESS,
    payload:collectionsMap
})


export const fetchCollectionFailur=errorMessage=>({
    type:shopActionType.FEATCH_COLLECTION_FAILUR,
    payload:errorMessage
})
export const fetchCollectionsStartAsync=()=>{
    return dispatch =>{
        const collectionRef=firestore.collection('collections')/*==>read collections data from database */
         dispatch(fetchCollectionsStart())
        collectionRef.get().then( snapshot=>{
         const collectionsMap=convertCollectionsSnapshotToMap(snapshot)/*====>داده ها را به map تبذیل کرده و مبخواند*/
            dispatch(fetchCollectionsSucsses(collectionsMap))
        
        }).catch(error=>dispatch(fetchCollectionFailur(error.message)))

    }
 


}
