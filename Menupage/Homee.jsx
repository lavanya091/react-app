// import React, { useRef, useState } from 'react';
// import items from './data.jsx';
// import './Homee.css';
// import { Link } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { addToCart } from '../actions/index.jsx';
// import 'bootstrap/dist/css/bootstrap.min.css'

// function Homee() {
//   const [category, setCategory] = useState('veg');
//   const filteredItems = items[category];//items[veg],Here Items is imported so complete object is imported it means initially we want assume instead og taking directly veg we are going manage state by giving a name category,so items[category] will be veg once , non veg once, desserts once

// //   const dispatch=useDispatch(addToCart);//Initialize dispatch hoo
//   const filterItems = (category) => {
//     setCategory(category);
//   };
//   const dispatch=useDispatch()
//   const cartItems=useSelector((state)=>{//useSelector receives cart items from redux store
//     console.log(state.cart.cartItems);
//     return state.cart.cartItems;
//   })

// const handleFunction=(item)=>{
//     dispatch(addToCart(item))
// }
//   return (
//     <div className="container">
//       <h2>Menu</h2>
//       <div className="category-buttons">
//         <button onClick={() => filterItems('veg')}>Vegeterian</button>
//         <button onClick={() => filterItems('nonVeg')}>Non-Veg</button>
//         <button onClick={() => filterItems('desserts')}>Desserts</button>
//         <button onClick={() => filterItems('coolDrinks')}>Cool Drinks</button>
//       </div>

//       <div className="row">
//         {filteredItems.map((item) => (
//           <div key={item.id} className="col-md-4 mb-4">
//             <div className="card">
//               <img src={item.image} className="card-img-top" alt={item.name} />
//               <div className="card-body">
//                 <h5 className="card-title">{item.name}</h5>
//                 <p className="card-text">${item.price}</p>
//                 <button className="CartBtn" onClick={()=>handleFunction(item)}>
//                   <span className="IconContainer">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       height="1em"
//                       viewBox="0 0 576 512"
//                       fill="rgb(17, 17, 17)"
//                       className="cart"
//                     >
//                       <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path>
//                     </svg>
//                   </span>
//                   <p className="text">Add to Cart</p>
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//       <Link to="/cart" className="btn btn-primary mt-4">
//         View Cart
//       </Link>
      
//     </div>
//   );
// }

// export default Homee;
