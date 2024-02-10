import React from "react";
import Button from "../../atoms/Button";
import "./index.scss";

const CTA = () => {
  return (
    <div className="cta">
      <Button text="Download Resume" link="https://drive.google.com/file/d/15RubH_ahf8FQ3epeaCY6DW8kuR2zYRmC/view?usp=sharing" className="btn" />

      <Button text="Work with Me" link="https://selar.co/booking-session" className="btn btn-primary"/>
    </div>
  );
};

export default CTA;
