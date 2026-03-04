import React from "react";
import Button from "../../atoms/Button";
import "./index.scss";

const CTA = () => {
  return (
    <div className="cta">
      <Button text="Download CV" link="https://docs.google.com/document/d/17e9ASKpuAB1pbVLTvzbjdkbXAPim9NlMqcAip8xkHIY/edit?usp=sharing" className="btn" target={"_blank "} />

      <a href="#contact" className="btn btn-primary">Work with Me</a>
    </div>
  );
};

export default CTA;
