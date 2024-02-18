import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import "./Scss/index.scss";


import Home from "../src/pages/Homepage2";
import About from "../src/pages/AboutPage";
import Skills from "../src/pages/SkillsPage";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/skills" element={<Skills />} />
      {/* <Route path="/work" element={<Work />} /> */}
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
