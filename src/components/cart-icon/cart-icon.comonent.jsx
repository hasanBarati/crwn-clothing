import React from 'react'
import {ReactComponent as ShopingIcon} from '../../assets/shopping-bag.svg'
import './cart-icon.style.scss'
import {createStructuredSelector} from 'reselect'
import {connect} from 'react-redux'
import {toggleCartHidden} from '../../redux/car/car.actions'
import {selectCartItemsCount} from '../../redux/car/cart.selector'
const CartIcon=({toggleCartHidden,itemCount})=>{
    return(

        <div className="cart-icon" onClick={toggleCartHidden}>
        <ShopingIcon  className="shopping-icon"/>
    <span className="item-count">{itemCount}</span>
    </div>
    )
   
}
const mapDispatchToProps=dispatch=>({
    toggleCartHidden:()=>dispatch(toggleCartHidden())
})
/*const mapStateToProps=(state)=>({
    itemCount:selectCartItemsCount(state)
})*/
const mapStateToProps=createStructuredSelector({
    itemCount:selectCartItemsCount
    /*مجموع سبد خرید را نمایش میدهد */
})

export default connect (mapStateToProps,mapDispatchToProps)(CartIcon)




