import {createSelector} from 'reselect'

const selectShop=state=>state.shop
export const selectShopItems=createSelector(
    [selectShop],
    shop=>shop.collections
)

export const selectCollectionForOverview=createSelector(
    [selectShopItems],
    collections=>collections? Object.keys(collections).map(key=>collections[key]):[]
)

export const selectCollection=collectionUrlParams=>createSelector(
    [selectShopItems],
    collections=>(collections? collections[collectionUrlParams]:null)
    //collection[hats]  یا  collection[sneakres]
)

export const selectIsCollectionFetching=createSelector(
    [selectShop],
    shop=>shop.isFetching
    
)

export const selectIsCollectionsLoaded=createSelector(
    [selectShop],
    shop=>!!shop.collections
)