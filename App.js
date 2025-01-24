import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Locations from './pages/Locations';
import Membership from './pages/Membership';
import About from './pages/About';
import Contact from './pages/Contact';
import BookTour from './pages/BookTour';
import BookingConfirmation from './pages/BookingConfirmation';


const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/locations" element={<Locations />} />
      <Route path="/membership" element={<Membership />} />
      <Route path="/about" element={<About />} /> 
      <Route path="/contact" element={<Contact />} />
      <Route path="/book-tour" element={<BookTour />} />;
      <Route path="/book-confirmation" element={<BookingConfirmation />} /> {/* Confirmation page */}
    </Routes>
    <Footer />
  </Router>
);

export default App;
