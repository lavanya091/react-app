import React from "react"
import DeliveryImage from './delivery.jpg'
import BookPenImage from './bookpen.jpg'
import Menu from './spoonfork.jpg'
import './Delivery.css'
function Delivery(){
    return(
        <>
        <div className="main">
            <h1>How It Works</h1>
            <div className="childdiv">
                <div className="child1">
                <img src={BookPenImage} alt="noimage"/>
                <p>Sign In & Choose From Our Weekly Menu</p>
                </div>
                <div className="child2">
                <img src={DeliveryImage} alt="noimage"/>
                <p>We Will Deliver Your Purchase</p>
                </div>
                <div className="child3">
                <img src={Menu} alt="noimage"/>
                <p>Enjoy Our Tasty Organic Food!</p>
                </div>
                
            </div>
            <button className="btns">SUBSCRIBE NOW</button>
        </div>
        </>
    )
}
export default Delivery;