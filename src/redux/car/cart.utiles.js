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


export const removeItemFromCart=(cartItems,cartItemToRemove)=>{
        const existingCartItem=cartItems.find(cartitem=>cartitem.id ==cartItemToRemove.id)



if (existingCartItem.quantity==1){
    return cartItems.filter(cartitem=>cartitem.id !=cartItemToRemove.id)
}

return cartItems.map(cartItem =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};