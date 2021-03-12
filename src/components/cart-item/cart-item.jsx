import React from 'react'

import './cart-item.scss'

// const CartItem=({item:{imageUrl,price,name,quantity}})=>(
//     <div className='cart-item'>
//         <img src={imageUrl} alt='item' />
//         <div className='item-details'>
//             <span className='name'>{name}</span>
//             <span className='price'>{quantity}x ${price}</span>
//         </div>
//     </div>
// )


const CartItem=(props)=>(
    <div className='cart-item'>
        <img src={props.item.imageUrl} alt='item' />
        <div className='item-details'>
            <span className='name'>{props.item.name}</span>
            <span className='price'>{props.item.quantity}x ${props.item.price}</span>
        </div>
    </div>
)

export default CartItem