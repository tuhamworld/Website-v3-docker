import React from "react";
import { motion } from "framer-motion";
import CTA from "../../molecules/CTA";
import Socials from "../../atoms/Socials";
import ScrollDown from "../../atoms/ScrollDown";
import "./index.scss";

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <motion.h5
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Hello, I'm
        </motion.h5>
        <motion.h1
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          Tunde Abdulhamid Sanusi
        </motion.h1>

        <motion.h5
          className="text-light"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Front-end Engineer x Web Creator
        </motion.h5>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <CTA />
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <ScrollDown />
        </motion.div>

        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <Socials />
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
