import React from 'react';
import Homee from './Homee';
import {CartProvider} from './CartComponent'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cart from './Cart';


function Menupage() {
  return (
    <>
     {/* <CartProvider>  */}
    <Homee />
    
     {/* </CartProvider>   */}
    </>
  );
}

export default Menupage;
