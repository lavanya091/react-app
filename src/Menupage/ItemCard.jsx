import React from 'react';
import { useCart } from 'react-use-cart';

function ItemCard(props) {
  const { addItem } = useCart();

  return (
    <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
      <div className="card p-0 overflow-hidden n-100 shadow">
        <img src={props.image} className="card-img-top img-fluid" alt="noimage" />
        <div className="card-body text-center">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">${props.price}</p>
          <p className='card-review'>{props.review}</p>
          <button className="btn btn-success" onClick={() => addItem(props.item)}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
