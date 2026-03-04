import React from "react";
import { Routes, Route } from "react-router-dom";
import AddToCartCustomizer from "./components/pages/AddToCartCustomizer";
import { MainSections } from "./components/pages/MainSections";
import AdminLogin from "./components/pages/AdminLogin";
import AdminDashboard from "./components/pages/AdminDashboard";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <>
     
      <Routes>
        <Route path="/" element={<MainSections />} />
        <Route path="/addtocart-link-customizer" element={<AddToCartCustomizer />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
};

export default App;
