import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer';
import Donations from './pages/Donations';
import Navbar from './components/Navbar';
import Accomplishments from './components/WhoAreWe';
import Carousel from './components/LandingPage';
import WhatDoWeDo from './components/WhatDoWeDo';
import AboutKibera from './components/AboutKibera';
import Sidebar from './components/AdminDashboard';
import IntroductionPart from './components/IntroductionPage';
import GalleryPart from './components/GalleryPage';
import OurChallengesPart from './components/OurChallenges';



function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <Routes>
                <Route path="/introduction" element={<IntroductionPart/>}/>
                <Route path="/facts" element={<OurChallengesPart/>}/>
                <Route path="/photogallery" element={<GalleryPart/>}/>
                <Route path="/aboutkibera" element={<AboutKibera/>}/>
                <Route path="/admin" element={<Sidebar/>}/>
                <Route path="/whatwedo" element={<WhatDoWeDo/>}/>
                <Route path="/aboutus" element={<Accomplishments/>}/>
                <Route path="/landingpage" element={<Carousel/>}/>
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

