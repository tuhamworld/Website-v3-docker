import React from "react";
import "./index.scss";




const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <a href="#home" className="footer__logo">
        Tunde Abdulhamid Sanusi
      </a>

      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Skills</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
          </ul>
          
          <div className="footer__copyright">
              <small>&copy; {currentYear}. All rights reserved. </small>
          </div>
    </footer>
  );
};
export default Footer;
