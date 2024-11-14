import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
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
    // Log location to confirm it's working
    console.log("Location changed:", location);

    // Check if there's a hash in the URL
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        // Scroll to the element smoothly
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return null;
}

function App() {
  return (
  // Adding basename to Router for subdirectory path
  <Router basename="/Mandi_Solone_Portfolio">
      <Navbar />
      <Header />
      <ScrollToTop /> {/* Scroll handling */}
      <div className="main-content">
        <Routes>
          {/* Main Route (Homepage) */}
          <Route
            path="/"
            element={
              <div>
                <About />
                <Projects />
                <Skills />
              </div>
            }
          />

          {/* Other Routes */}
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
