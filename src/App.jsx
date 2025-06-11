import React from "react";
import { motion } from "framer-motion";
import Topbar from "./components/molecules/Topbar";
import Header from "./components/organisms/Header";
import Intro from "./components/organisms/Intro";
import Experience from "./components/organisms/Experience";
import Portfolio from "./components/organisms/Portfolio";
import Testimonials from "./components/organisms/Testimonials";
import Contact from "./components/organisms/Contact";
import Footer from "./components/organisms/Footer";

const App = () => {
  return (
    <>
      <Topbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Header />
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ 
            once: false,
            amount: 0.3,
            margin: "-100px"
          }}
        >
          <Intro />
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ 
            once: false,
            amount: 0.3,
            margin: "-100px"
          }}
        >
          <Experience />
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ 
            once: false,
            amount: 0.3,
            margin: "-100px"
          }}
        >
          <Portfolio />
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ 
            once: false,
            amount: 0.3,
            margin: "-100px"
          }}
        >
          <Testimonials />
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ 
            once: false,
            amount: 0.3,
            margin: "-100px"
          }}
        >
          <Contact />
        </motion.div>
        <Footer />
      </motion.div>
    </>
  );
};

export default App;
