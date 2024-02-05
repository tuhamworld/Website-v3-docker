import React from "react";
import Topbar from "./components/molecules/Topbar";
import Header from "./components/organisms/header";
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
      <Header />
      <Intro />
      <Experience />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
 </>
     
  );
};

export default App;
