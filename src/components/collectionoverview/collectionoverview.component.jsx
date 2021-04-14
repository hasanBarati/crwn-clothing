import Rect from 'react'

import {connect} from 'react-redux'
import { selectCollectionForOverview} from '../../redux/shop/shop.selector'
import {createStructuredSelector} from 'reselect'
import CollectionPreview from '../preview-collection/preview-collection'
import './collectionoverview.component.scss'

const Collectionoverviews=({collections})=>(
    <div className='collections-overview'>
          {collections.map(({id,...othercollection})=>(
                        <CollectionPreview key={id} {...othercollection} />
                    ))}
    </div>
)

const mapStateToProps=createStructuredSelector({
    collections: selectCollectionForOverview
})
export default connect(mapStateToProps)(Collectionoverviews)