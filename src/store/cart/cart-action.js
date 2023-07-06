import { CART_ACTIONS } from "./cart-types";
import { createAction } from "../../utils/reducer/reducer";


const addCartItem = (cartItems, shoeToAdd) =>{
    const existingShoe = cartItems.find((cartItem) => cartItem.id === shoeToAdd.id)

    if (existingShoe) {
    return cartItems.map((cartItem) =>
      cartItem.id === shoeToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }


    return [...cartItems, { ...shoeToAdd, quantity:1 }];
}

const removeCartItem = (cartItems, shoeToRemove) =>{
    const existingShoe = cartItems.find((cartItem) => cartItem.id === shoeToRemove.id)
    
    //if item number is equal to 1
    if (existingShoe.quantity ===1) {
    return cartItems.filter(cartItem => cartItem.id !== shoeToRemove.id);
  }

   return cartItems.map((cartItem) =>
      cartItem.id === shoeToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );

}

const clearCartItem = (cartItems, shoeToClear) =>{
    return cartItems.filter(cartItem => cartItem.id !== shoeToClear.id);

}


export const setIsCartOpen = (boolean) => createAction(CART_ACTIONS.SET_CART_OPEN, boolean);                


export const addItemToCart = (cartItems, shoeToAdd) =>{
    const newCartItems = addCartItem(cartItems, shoeToAdd);
    return createAction(CART_ACTIONS.SET_CART_ITEMS ,newCartItems);
}

export const removeItemFromCart = (cartItems,shoeToRemove) =>{
    const newCartItems = removeCartItem(cartItems, shoeToRemove);
    return createAction(CART_ACTIONS.SET_CART_ITEMS ,newCartItems);
}
export const clearItemFromCart = (cartItems,shoeToClear) =>{
    const newCartItems = clearCartItem(cartItems, shoeToClear);
    return createAction(CART_ACTIONS.SET_CART_ITEMS ,newCartItems);
}

