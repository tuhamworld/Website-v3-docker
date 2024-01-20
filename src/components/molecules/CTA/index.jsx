import React from "react";
import Button from "../../atoms/Button";
import "./index.scss";

const CTA = () => {
  return (
    <div className="cta">
      {/* <a href="#" className="btn">
        Resume
      </a>

      <a href="#contact" className="btn btn-primary">
        Let's talk
      </a> */}

          <Button
              text="Resume"
              link="#" className="btn"
          />
          
      <Button text="Let's talk" link="#contact" className="btn btn-primary" />
    </div>
  );
};

export default CTA;
