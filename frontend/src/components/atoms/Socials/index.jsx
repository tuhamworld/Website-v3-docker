import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaSquareYoutube } from "react-icons/fa6";
import { SiUdemy } from "react-icons/si";
import "./index.scss";

const Socials = () => {
  return (
    <div className="socials">
      <a
        href="https://www.linkedin.com/in/tuhamworld"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>

      <a href="https://github.com/tuhamworld" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>

      <a
        href="https://udemy.com/user/tunde-sanusi/"
        target="_blank"
        rel="noreferrer"
      >
        <SiUdemy />
      </a>

      <a
        href="https://youtube.com/@tuhamworld"
        target="_blank"
        rel="noreferrer"
      >
        <FaSquareYoutube />
      </a>
    </div>
  );
};

export default Socials;
