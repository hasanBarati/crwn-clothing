import React from 'react'
import CollectionItem from '../../components/collection-item/collection-item.component'
import './collection.component.scss'
import {connect} from 'react-redux'
import {selectCollection} from '../../redux/shop/shop.selector'
const CollectionPage=({ collection})=>{
   
   const {title,items}=collection
    return (
        <div className="collection-page">
        <h2 className='title'>{title}</h2>
        <div className='items'>
            {
                items.map(item=><CollectionItem  key={item.id} item={item}/>)
            }
        </div>
    </div>
    )
  
}
const mapStateToProps=(state,ownProps)=>({
    collection:selectCollection(ownProps.match.params.collectionId)(state)
    //نام دسته را به سلکتور ارجاع میدهد مثلا:hats
})
export default connect(mapStateToProps)(CollectionPage)