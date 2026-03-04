import React from "react";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import "./index.scss";

const AboutCard = () => {
  return (
    <div className="about__cards">
      <article className="about__card">
        <FaAward className="about__icon" />
        <h5>Experience</h5>
        <small>2+ years</small>
      </article>
      <article className="about__card">
        <VscFolderLibrary className="about__icon" />
        <h5>Projects</h5>
        <small>30+ Completed Projects</small>
      </article>
    </div>
  );
};

export default AboutCard;
