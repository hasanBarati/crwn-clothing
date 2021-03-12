import Rect from 'react' 
import './checkout-item.style.scss'
import {connect} from 'react-redux'
import {clearItemFromCart} from '../../redux/car/car.actions'
const CheckoutItem=({cartItem, clearItem})=>{
    const {name,imageUrl,price,quantity}=cartItem;
    return( 
       <div className='checkout-item'>
        <div className='imagecontainer'>
            <img src={imageUrl} alt='item' />
        </div>
        <span className="name">{name}</span>
        <div className="quantity">
            <span className="arrow">&#10094;</span>
             <span className='value'>{quantity}</span> 
            <span className="arrow">&#10094;</span>
        </div>
        <span className="price">{price}</span>
        <div className="remove-button" onClick={()=>clearItem(cartItem)}>&#10005;</div>
    </div>
    )
}

const mapDispatchToProps=dispatch=>({
    clearItem:item=>dispatch(clearItemFromCart(item))
})
export default connect(null,mapDispatchToProps)(CheckoutItem)