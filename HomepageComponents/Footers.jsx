import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>TASTE.IT</h3>
        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
        <div className="social-links">
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
      <div className="footer-section">
        <h3>OPEN HOURS</h3>
        <ul>
          <li>Monday: 9:00 - 24:00</li>
          <li>Tuesday: 9:00 - 24:00</li>
          <li>Wednesday: 9:00 - 24:00</li>
          <li>Thursday: 9:00 - 24:00</li>
          <li>Friday: 9:00 - 02:00</li>
          <li>Saturday: 9:00 - 02:00</li>
          <li>Sunday: Closed</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>INSTAGRAM</h3>
        <div className="instagram-images">
          {/* Add images here */}
        </div>
      </div>
      <div className="footer-section">
        <h3>NEWSLETTER</h3>
        <p>Far far away, behind the word mountains, far from the countries.</p>
        <input type="email" placeholder="Enter email address" />
        <button>Subscribe</button>
      </div>
    </footer>
  );
}

export default Footer;
