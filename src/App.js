import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Booking from "./pages/Booking";
import Gallery from "./pages/Gallery";
import Reviews from "./pages/Reviews";
import Packages from "./pages/Packages";
import "./index.css";

function App() {
  return (
    <Router>
      <div className="bg-black text-white min-h-screen">
        <Header />
        <div className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/packages" element={<Packages />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
