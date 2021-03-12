import React from 'react'
import CustomButton from '../custom-button/custom-button.component'
import './cart-deropdown.style.scss'
import CartItem from '../cart-item/cart-item'
import {createStructuredSelector} from 'reselect'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {selectCartItems} from '../../redux/car/cart.selector'
import {toggleCartHidden} from '../../redux/car/car.actions'
const CartDropdown=({cartItems,history,dispatch})=>{
    return(
        <div className='cart-dropdown'>
        <div className='cart-items' >
            {cartItems.length?(
                cartItems.map(cartitem=>(
                    <CartItem  key={cartitem.id} item={cartitem} />
                ))
                ):(
                    <span className="empty-message">Your cart is empty</span>
                )}
               
        </div>    
        <CustomButton onClick={()=>{
            history.push('/checkout');
            dispatch(toggleCartHidden())    /*******زمانی که صفحه جابجا شد ایتم داراپ داون مخفی میشه**** */
        }}>go to checkout</CustomButton>
    </div>
    )
  
}
// const mapStateToProps=({cart:{cartItems}})=>({
//     cartItems
// })
// const mapStateToProps=(state)=>({
//     cartItems:selectCartItems(state)
// })
const mapStateToProps=createStructuredSelector({
    cartItems:selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown))