import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import HomePage from "./landing_page/home/HomePage";
import Navbar from "./landing_page/Navbar";
import Signup from "./landing_page/signup/Signup";
import AboutPage from "./landing_page/about/AboutPage";
import Products from "./landing_page/products/Products";
import Pricing from "./landing_page/pricing/PricingPage";
// import Support from "./landing_page/support/SupportPage";
import Footer from "./landing_page/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/products" element={<Products />} />
      <Route path="/pricing" element={<Pricing />} />
      {/* <Route path="/support" element={<Support />} /> */}
    </Routes>
    <Footer />
  </BrowserRouter>
);
