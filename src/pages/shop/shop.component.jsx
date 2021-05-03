import React,{useEffect} from 'react'
import Collectionoverviews from '../../components/collectionoverview/collectionoverview.component'
import {Route} from 'react-router-dom'
import CollectionPage from '../collection/collection.component'

import {connect} from 'react-redux'
import {fetchCollectionsStart} from '../../redux/shop/shop.action'
import {createStructuredSelector} from 'reselect'
import {selectIsCollectionFetching,selectIsCollectionsLoaded} from '../../redux/shop/shop.selector'
import  WithSpinner from '../../components/with-spinner/with-spinner.component'

const Collectionoverviewswithspinner= WithSpinner(Collectionoverviews)
const CollectionPagewithspinner=WithSpinner(CollectionPage)
const  ShopPage=({fetchCollectionsStart,match,isCollectionsFetching,isCollectionsLoaded})=> {

   useEffect(()=>{
    fetchCollectionsStart()
   },[fetchCollectionsStart])
  // componentDidMount(){
  //   const {fetchCollectionsStart}=this.props
  //   fetchCollectionsStart()
  // }
 
   
    return (
      <div className='shop-page'>
      <Route exact path={`${match.path}`} render={(props)=><Collectionoverviewswithspinner isLoading={isCollectionsFetching} {...props} />}/>
      <Route exact path={`${match.path}/:collectionId`}  render={(props)=><CollectionPagewithspinner isLoading={!isCollectionsLoaded} {...props} />}/>
    </div>   
    )
  

         
}
const mapStateToProps=createStructuredSelector({
  isCollectionsFetching:selectIsCollectionFetching,
  isCollectionsLoaded:selectIsCollectionsLoaded
})
const mapDispatchToProps=(dispatch)=>({
  fetchCollectionsStart:()=>dispatch(fetchCollectionsStart())
})

// const mapDispatchToProps=(dispatch)=>({
//   updateColletions:(collectionMap)=>dispatch(updateColletions(collectionMap))
// })


export default connect (mapStateToProps,mapDispatchToProps)(ShopPage)
