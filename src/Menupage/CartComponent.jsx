import React from 'react';
import { useSelector } from 'react-redux';

const CartComponent=()=>{
    const cartItems=useSelector((state)=>state.cart.cartItems);
    return(
       <div>
        <h2>Cart</h2>
        <ul>
            {cartItems.map((item)=>(
                <li key={item.id}>
                    {item.name} - ${item.price}
                </li>
            ))}
        </ul>
       </div>
    );
};
export default CartComponent