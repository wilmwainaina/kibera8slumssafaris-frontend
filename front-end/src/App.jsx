import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';
import Donations from './pages/Donations';
import Navbar from './components/Navbar';
import Form from './pages/DonationForm';
import Tours from './pages/Tours';
import Gallery from './pages/Gallery';

function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/donations" element={<Donations />} />
          <Route path="/donationform" element={<Form />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/gallery" element={<Gallery />} /> {/* Fixed typo here: "Path" -> "path" */}
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
