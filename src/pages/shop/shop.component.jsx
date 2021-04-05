import React from 'react'
import Collectionoverviews from '../../components/collectionoverview/collectionoverview.component'
import {Route} from 'react-router-dom'
import CollectionPage from '../collection/collection.component'

import {connect} from 'react-redux'
import {fetchCollectionsStartAsync} from '../../redux/shop/shop.action'
import {createStructuredSelector} from 'reselect'
import {selectIsCollectionFetching,selectIsCollectionsLoaded} from '../../redux/shop/shop.selector'
import  WithSpinner from '../../components/with-spinner/with-spinner.component'

const Collectionoverviewswithspinner= WithSpinner(Collectionoverviews)
const CollectionPagewithspinner=WithSpinner(CollectionPage)
class  ShopPage extends React.Component {


  componentDidMount(){
    const {fetchCollectionsStartAsync}=this.props
    fetchCollectionsStartAsync()
    // const collectionRef=firestore.collection('collections')/*==>read collections data from database */
    // const {updateColletions}=this.props  /***listen for update data from backend */   
    // collectionRef.onSnapshot(async snapshot=>{
  
   
    //   /**داده ها ر از پایگاه دادهمبخواند و  */
    //  const collectionMap=convertCollectionsSnapshotToMap(snapshot)/*====>داده ها را به map تبذیل کرده و مبخواند*/
    //  updateColletions(collectionMap)
    
    // })


  }
  render(){
    const {match,isCollectionsFetching,isCollectionsLoaded}=this.props
    return (
      <div className='shop-page'>
      <Route exact path={`${match.path}`} render={(props)=><Collectionoverviewswithspinner isLoading={isCollectionsFetching} {...props} />}/>
      <Route exact path={`${match.path}/:collectionId`}  render={(props)=><CollectionPagewithspinner isLoading={!isCollectionsLoaded} {...props} />}/>
    </div>   
    )
  }

         
}
const mapStateToProps=createStructuredSelector({
  isCollectionsFetching:selectIsCollectionFetching,
  isCollectionsLoaded:selectIsCollectionsLoaded
})
const mapDispatchToProps=(dispatch)=>({
  fetchCollectionsStartAsync:()=>dispatch(fetchCollectionsStartAsync())
})

// const mapDispatchToProps=(dispatch)=>({
//   updateColletions:(collectionMap)=>dispatch(updateColletions(collectionMap))
// })


export default connect (mapStateToProps,mapDispatchToProps)(ShopPage)
