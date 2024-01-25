import React from "react";
import Button from "../../atoms/Button";
import "./index.scss";

const CTA = () => {
  return (
    <div className="cta">
      <Button text="Download Resume" link="#" className="btn" />

      <Button text="Let's talk" link="#contact" className="btn btn-primary" />
    </div>
  );
};

export default CTA;
