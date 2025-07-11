import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import MivaanGeneral from "./pages/MivaanGeneral";
import MivaanEngineering from "./pages/MivaanEngineering";


function App() {
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
           <Route path="/contact" element={<Contact />} />
           <Route path="/projects" element={<Projects />} />
           <Route path="/MivaanGeneral" element={<MivaanGeneral />} />
           <Route path="/MivaanEngineering" element={<MivaanEngineering />} />         
           
        </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
