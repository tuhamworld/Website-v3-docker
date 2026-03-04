import React from "react";
import image from "../../../assets/images/pngs/tuham.png";
import tuhamImage from "../../../assets/images/jpgs/Tunde Abdulhamid Sanusi-Tuham.jpg";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import "./index.scss";

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={tuhamImage} alt="Tunde Abdulhamid Sanusi" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Combined Experience</h5>
              <small>6+ years</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Awesome Projects</h5>
              <small>35+ Completed Projects</small>
            </article>
          </div>

          <p>
            Front-end engineer, driven by 2+ years of continous learning and building, and over 5 years in the field of Web Creation.
            <br />
            - Built a portfolio of diverse projects, from single-page apps to interactive web apps.
            <br />
            - Demonstrated strong technical, soft,  and communication skills when working with clients.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>

        </div>
      </div>
    </section>
  );
};

export default Intro;
