import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./Component/Header/Footer";
import Home from "./Component/Home";
import ContactFrom from "./Component/Main/ContactFrom";
import Navbar from "./Component/Header/Navbar";
import Company from "./Component/AboutSection/CompanyOne";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactFrom />} />
        <Route path="/company" element={<Company/>}/>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
