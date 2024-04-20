import React from "react";
import Button from "../../atoms/Button";
import "./index.scss";

const CTA = () => {
  return (
    <div className="cta">
      <Button text="Download Resume" link="https://drive.google.com/file/d/15RubH_ahf8FQ3epeaCY6DW8kuR2zYRmC/view?usp=sharing" className="btn" target={"_blank "} />

      <a href="#contact" className="btn btn-primary">Work with Me</a>
    </div>
  );
};

export default CTA;
