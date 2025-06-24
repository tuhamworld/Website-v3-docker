import React from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./components/molecules/Topbar";
import Header from "./components/organisms/Header";
import Intro from "./components/organisms/Intro";
import Experience from "./components/organisms/Experience";
import Portfolio from "./components/organisms/Portfolio";
import Testimonials from "./components/organisms/Testimonials";
import Contact from "./components/organisms/Contact";
import Footer from "./components/organisms/Footer";
import AddToCartCustomizer from "./components/pages/AddToCartCustomizer";

const MainSections = () => (
  <>
    <Header />
    <Intro />
    <Experience />
    <Portfolio />
    <Testimonials />
    <Contact />
    <Footer />
  </>
);

const App = () => {
  return (
    <>
      <Topbar />
      <Routes>
        <Route path="/" element={<MainSections />} />
        <Route path="/addtocart-link-customizer" element={<AddToCartCustomizer />} />
      </Routes>
    </>
  );
};

export default App;
