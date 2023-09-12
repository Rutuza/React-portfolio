import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { Routes,Route } from 'react-router';
import Home from './Assets/components/Home';
import About from './Assets/pages/AboutPage';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Routes>
      <Route path='/home' element={<Home/>} />
      <Route index element={<About/>} />
    </Routes>
  </React.StrictMode>
);

reportWebVitals();
