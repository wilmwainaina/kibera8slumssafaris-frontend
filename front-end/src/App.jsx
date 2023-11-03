import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer';
import Donations from './pages/Donations';
import Navbar from './components/Navbar';


function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/donations" element={<Donations />} />
          <Route path="/donationform" element={<Form />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

