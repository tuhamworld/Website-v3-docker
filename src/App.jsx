import React from "react";
import { Routes, Route } from "react-router-dom";
import AddToCartCustomizer from "./components/pages/AddToCartCustomizer";
import { MainSections } from "./components/pages/MainSections";

const App = () => {
  return (
    <>
     
      <Routes>
        <Route path="/" element={<MainSections />} />
        <Route path="/addtocart-link-customizer" element={<AddToCartCustomizer />} />
      </Routes>
    </>
  );
};

export default App;
