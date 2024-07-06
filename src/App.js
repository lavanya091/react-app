import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './HomepageComponents/Homepage';
import Menupages from './Menupage/Menupage';
import Delivery from './HomepageComponents/Delivery';
import About from './About/About';
import Cart from './Menupage/Cart';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import ContactForm from './Contact/ContactForm';


// import logo from './logo.jpg'

function App() {
  return (
   <>
   <Router>
    <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/Menu" element={<Menupages/>} />
        <Route path="/About" element={<About/>}/>
        <Route path="/Cart" element={<Cart/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="/Contact" element={<ContactForm/>}/>
      </Routes>
      </Router>
   </>
  );
}

export default App;
