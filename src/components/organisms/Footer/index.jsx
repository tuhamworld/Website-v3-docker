import React from "react";
import "./index.scss";




const Footer = () => {
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
          <a href="#skills">Skills</a>
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
              <small>&copy; 2023. All rights reserved. </small>
          </div>
    </footer>
  );
};
export default Footer;
