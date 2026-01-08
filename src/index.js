import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import HomePage from "./landing_page/home/HomePage";
import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";
import Signup from "./landing_page/signup/Signup";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<Signup />} />
      {/* <Route path="/" element={<About />} />
      <Route path="/" element={<Pricing />} />
      <Route path="/" element={<Products />} />
      <Route path="/" element={<Support />} />
      <Footer /> */}
    </Routes>
    <Footer />
  </BrowserRouter>
);
