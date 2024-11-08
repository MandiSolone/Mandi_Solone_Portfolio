import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Resume from "./components/Resume";
import Contact from "./components/Contact";


// ScrollToTop Component to handle scroll navigation
function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const timeout = setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100); // Delay scroll for 100ms to ensure the DOM has fully updated

      return () => clearTimeout(timeout); // Clean up the timeout
    }
  }, [location]);

  return null;
}

function App() {
  return (
    <Router>
      <Navbar />
      <Header />
      <ScrollToTop /> {/* This will handle smooth scrolling */}
      
      <div className="main-content">
        {/* The homepage route */}
        <Routes>
          <Route path="/" element={
            <div className="homepage-container">
              <About />
              <Projects />
              <Skills />
            </div>
          } />
          
          {/* The other routes for individual pages */}
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      <Footer />
    </Router>
  );
}

export default App;
