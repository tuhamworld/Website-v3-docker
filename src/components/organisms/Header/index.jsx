import React from "react";
import CTA from "../../molecules/CTA";
import Socials from "../../atoms/Socials";
import ScrollDown from "../../atoms/ScrollDown";
import "./index.scss";

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello, I'm</h5>
        <h1>Tunde Abdulhamid Sanusi</h1>

        <h5 className="text-light">Front-end Engineer x Web Creator</h5>

        <CTA />

        <ScrollDown />

        <Socials />
      </div>
    </header>
  );
};

export default Header;
