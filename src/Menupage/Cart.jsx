import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, updateQuantity } from '../actions';
import 'bootstrap/dist/css/bootstrap.min.css'

function Cart() {
  const cartItems = useSelector(state => {//useSelector retrieves data from store
    console.log("Cart Items",state.cart.cartItems)
    return state.cart.cartItems;
});
  const dispatch=useDispatch();//useDispatch 

  const handleRemove=(index)=>{
    dispatch(removeFromCart(index));
  }
  const handleQuantityChange=(index,quantity)=>{
    if(quantity>0){
      dispatch(updateQuantity(index,quantity));
    }
  }
  const calculateTotal=()=>{
    if(cartItems && cartItems.length > 0){
    return cartItems.reduce((acc,item)=>acc+item.price* item.quantity,0)
  };
  return 0;
}
console.log("Cart Items",cartItems)
  return (
    <div className="containers">
      <h2>Cart</h2>
      {!cartItems||cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item , index) => (
            <div key={index} className="row mb-4">
              <div className="col-md-8">
                <img src={item.image} className="img-fluid" alt={item.name} />
                </div>
                <div className="col-md-8">
                  <h5>{item.name}</h5>
                  <p>${item.price}</p>
                  <input 
                  type='number'
                  value={item.quantity}
                  onChange={(e)=>handleQuantityChange(index,parseInt(e.target.value))}
                  className='form-control'
                  style={{width:'60px'}}
                  />
                <button className='btn btn-danger mt-2' onClick={()=>handleRemove(index)}>
                  Remove
                </button>
                </div>
              </div>
          ))}
          <div className='row'>
            <div className='col-md-12'>
              <h3>Total: ${calculateTotal()}</h3>
            </div>
        </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
