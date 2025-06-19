import React from "react";
import { FaCheck, FaCoffee } from "react-icons/fa";
import "./index.scss";
import eCommerceImage from "../../../assets/images/jpgs/ecommerce-image.jpg";
import OnlineShopping from "../../../assets/images/jpgs/onlineshopping.jpg"

const AddToCartCustomizer = () => {
  return (
    <section className="addtocart-customizer-page">
      <div className="container">
        <div className="hero-section">
          <h1>AddToCart Customizer WordPress Plugin</h1>
          <p className="subtitle">
            Transform your WooCommerce shop page experience with a simple yet powerful plugin that enhances product browsing and improves user engagement.
          </p>
        </div>

        <div className="features-section">
          <div className="feature-image">
            <img 
              src={eCommerceImage} 
              alt="E-commerce shopping experience"
            />
          </div>
          <div className="features-content">
            <h2>Key Features</h2>
            <ul className="features-list">
              <li>
                <FaCheck />
                Redirects "Add to Cart" buttons to product pages
              </li>
              <li>
                <FaCheck />
                Changes button text to "View Product"
              </li>
              <li>
                <FaCheck />
                Compatible with most WooCommerce themes
              </li>
              <li>
                <FaCheck />
                Zero configuration needed
              </li>
              <li>
                <FaCheck />
                Lightweight and performance-optimized
              </li>
              <li>
                <FaCheck />
                Easy installation and activation
              </li>
            </ul>
          </div>
        </div>

        <div className="features-section">
          <div className="features-content">
            <h2>Why Use This Plugin?</h2>
            <ul className="features-list">
              <li>
                <FaCheck />
                Improve user experience by preventing accidental cart additions
              </li>
              <li>
                <FaCheck />
                Encourage product page visits for better information
              </li>
              <li>
                <FaCheck />
                Reduce cart abandonment rates
              </li>
              <li>
                <FaCheck />
                Increase product page engagement
              </li>
            </ul>
          </div>
          <div className="feature-image">
            <img 
              src={OnlineShopping} 
              alt="Online shopping experience"
            />
          </div>
        </div>

        <div className="support-section">
          <h2>Support the Development</h2>
          <p>
            If you find this plugin useful in improving your WooCommerce store&apos;s user experience,
            consider supporting its continued development and maintenance.
          </p>
          <a
            href="https://buymeacofee.com/tuhamworld"
            target="_blank"
            rel="noopener noreferrer"
            className="coffee-btn"
          >
            <FaCoffee />
            Support me on BuyMeACoffee
          </a>
        </div>
      </div>
    </section>
  );
};

export default AddToCartCustomizer;
