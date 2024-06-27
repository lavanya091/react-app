import React from 'react';
import Button from 'react-bootstrap/Button';
import './Homepage.css';
import { Link } from 'react-router-dom';
import Delivery from './Delivery';

const navStyle = {
  fontFamily: 'Georgia, Serif',
};

function Homepage() {
  return (
    <>
      <nav style={navStyle}>
        <ul>
          <li>
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li>
            <Link to="/Menu" className="nav-link">Menu</Link>
          </li>
          <li>
            <Link to="/About" className="nav-link">About Us</Link>
          </li>
          <li>
            <Link to="/Contact" className="nav-link">Contact</Link>
          </li>
          <li>
            <Button variant="success" className="transparent-button">
              <Link to="/Login" className="nav-link1 btn">Login</Link>
            </Button>
          </li>
          <li>
            <Button variant="light" className="transparent-button1">
              <Link to="/Signup" className="nav-link1 btn1">SignUp</Link>
            </Button>
          </li>
        </ul>
      </nav>
      <div className="App">
        <div className="content">
          <h1>FOOD WITH A PURPOSE!</h1>
          <p>
            Welcome to the Berry Fresh Cafe’s web page. We are a cafe in
            Media, PA that serves all organic and GMO-free ingredients and
            are committed to delivering the freshest food to our customers.
            Our menu includes the freshest Smoothies, Sandwiches, Paninis,
            and Acai (ah-sigh-ee) bowls.
          </p>
          <button className="learn-more">LEARN MORE</button>
        </div>
      </div>
      <Delivery />
    </>
  );
}

export default Homepage;
