import React from "react";
import image from "../../../assets/images/webp/tuham.webp";

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={image} alt="Tunde  Sanusi" />
          </div>
        </div>
      </div>
    </section>
  );
};
