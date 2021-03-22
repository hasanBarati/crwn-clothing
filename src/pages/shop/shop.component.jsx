import React from 'react'
import Collectionoverviews from '../../components/collectionoverview/collectionoverview.component'
import {Route} from 'react-router-dom'
import CollectionPage from '../collection/collection.component'
const  ShopPage=({match}) =>{
  
  return (
    <div className='shop-page'>
    <Route exact path={`${match.path}`} component={Collectionoverviews}/>
    <Route exact path={`${match.path}/:collectionId`} component={CollectionPage}/>
  </div>   
  )
         
}

export default ShopPage
