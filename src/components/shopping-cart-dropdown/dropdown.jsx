import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


import React from 'react';

import Button from '../button/button';
import ShoeItem from '../shoe-item/shoe-item';
import { selectCartItems } from '../../store/cart/cart-selector';
import './dropdown.scss'; 


const Dropdown = () =>{

    const cartItems = useSelector(selectCartItems);
    const navigate = useNavigate();

    const CheckoutHandler = () => {
        navigate('/checkout');
    }

    return(
        <div className="dropdown">
            <div className="items">
                {cartItems.map((item) => (<ShoeItem key = {item.id} cartItem={item}/>))}
            </div>
            <Button buttonType='inverted' onClick ={CheckoutHandler}> CHECKOUT</Button>
        </div>
    )

}

export default Dropdown;