// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import './index.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./Components/Navbar";
import Portfolio from "./Components/Portfolio";
import Hero from "./Components/Hero";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";

function App() {
  return (
  <>
    <BrowserRouter>

      <Navbar />
      
      <Hero />

      <Routes>
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>

      <Skills />

      <Portfolio />

      <Contact />

      </BrowserRouter>
    </>
  )
}

export default App;
