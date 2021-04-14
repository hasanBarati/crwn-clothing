
import CartActionTypes from './cart.type'
import {AddItemToCart,removeItemFromCart} from './cart.utiles'
const INITIAL_STATE={
    hidden:true,
    cartItems:[]
}

const CardReducer=(state=INITIAL_STATE,action)=>{
    switch (action.type){
        case CartActionTypes.TOOGLE_CART_HIDDEN:
            return{
                ...state,
                hidden:!state.hidden
            }
        case CartActionTypes.ADD_ITEM:
            return{
                ...state,
                cartItems:AddItemToCart(state.cartItems,action.payload)
            }
        case CartActionTypes.REMOVE_ITEM:
            return{
                ...state,
                cartItems:removeItemFromCart(state.cartItems,action.payload)
            }    
        case   CartActionTypes.CLEAR_ITEM_FROM_CART:
            return{
                ...state,
                cartItems:state.cartItems.filter(
                    cartitem=>cartitem.id != action.payload.id

                )
            }
            default:return state
    }
}
export default CardReducer