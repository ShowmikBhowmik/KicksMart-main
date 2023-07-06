import { useDispatch, useSelector } from 'react-redux';

import { addItemToCart } from '../../store/cart/cart-action';
import { selectCartItems  } from '../../store/cart/cart-selector';
import Button from '../button/button';



import './shoe-card.scss';


const ShoeCard = ({ shoe }) =>{

    const{name, price, imageUrl} = shoe;

    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems); 


    const addShoeToCart = () => dispatch(addItemToCart(cartItems,shoe));

    return (<div className = "shoe-card-container">
        <img src = {imageUrl} alt={`${name}`}/>
        <div className="content">
            <span className="name">{name}</span>
            <span className="cost">{price}</span>
        </div>
        <Button buttonType='inverted' onClick = {addShoeToCart} > Add to cart</Button>
    </div>)
}

export default ShoeCard;

