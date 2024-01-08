import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import App from './App';
import './Scss/index.scss'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Assets/pages/Homepage2';
import About from './Assets/pages/AboutPage';
import Skills from './Assets/pages/SkillsPage';
import Work from './Assets/pages/WorkPage';

export default function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path='/About' element={<About />}/>
          <Route path='/Skills' element={<Skills />}/>
          <Route path='/Work' element={<Work />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

reportWebVitals();
