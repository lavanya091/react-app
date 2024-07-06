import React from 'react';
import Homee from './Homee';
import {CartProvider} from './CartComponent'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cart from './Cart';
import RestaurantDetails from './fetchdata/RestaurantDetails';
import RecipeSearch from '../components/RecipeSearch';
import RestaurantsList from './fetchdata/RestaurantsList';
import Apps from './fetchdata/Apps';


function Menupage() {
  return (
    <>
     {/* <CartProvider>  */}
    {/* <Homee /> */}
    <Apps/>
     {/* </CartProvider>   */}
    </>
  );
}

export default Menupage;
