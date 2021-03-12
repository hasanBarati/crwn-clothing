export const AddItemToCart=(cartItems,cartitrmToAdd)=>{
    const existingCartItem=cartItems.find(
        cartitem=>cartitem.id==cartitrmToAdd.id
    );

    if(existingCartItem){
        return cartItems.map(cartitem=>
            cartitem.id ==cartitrmToAdd.id?{...cartitem,quantity:cartitem.quantity+1}
            :
            cartitem
            )
    }
    return [...cartItems,{...cartitrmToAdd,quantity:1}]
}