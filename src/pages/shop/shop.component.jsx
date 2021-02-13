import React, { Component } from 'react'
import SHOP_DATA from './shop-data.js'
import CollectionPreview from '../../components/preview-collection/preview-collection'
export class ShopPage extends Component {
    constructor(){
        super()
        this.state={
            collections:SHOP_DATA 
              
        }
    }
   
    render() {
        const {collections}=this.state
        return (
            <div className='shop-page'>
               {
                    collections.map(({id,...othercollection})=>(
                        <CollectionPreview key={id} {...othercollection} />
                    ))
               }
            </div>
        )
    }
}

export default ShopPage
