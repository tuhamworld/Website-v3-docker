import React from "react";
import { MdOutlineEmail, MdOutlinePhone } from "react-icons/md";
import { AiOutlineGithub } from "react-icons/ai";
import "./index.scss";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <div className="contact__option-children">
              <MdOutlineEmail className="contact__option-icon" />
              <MdOutlinePhone className="contact__option-icon" />
              <AiOutlineGithub className="contact__option-icon" />
            </div>

            <div className="contact__option-children">
              <h5>tuhamworld(@)gmail.com</h5>
              <h5>
                <a href="tel:2347030783384">(+234) 703 078 3384</a>
              </h5>
              <h5>@tuhamworld</h5>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Contact;
