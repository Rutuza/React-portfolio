import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.css";
// import App from './App';
import "./Scss/index.scss";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Assets/pages/Homepage2";
import About from "./Assets/pages/AboutPage";
import Skills from "./Assets/pages/SkillsPage";
import Work from "./Assets/pages/WorkPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/work" element={<Work />} />
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
