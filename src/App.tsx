import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Navbar } from './components/Navbar';
import { AboutSection } from './components/AboutSection';
import RewardSlider from './components/RewardSlider';
import MixtapeSection from './components/MixtapeSection';
import UpdatesSection from './components/UpdatesSection';
import FAQSection from './components/FAQSection';
import CommentsSection from './components/CommentsSection';
import VideoSection from './components/VideoSection';
import Footer from './components/Footer';
import ProgressBar from './components/ProgressBar';
import ThankYouPage from './components/ThankYouPage';
import TourGuide from './components/TourGuide';

function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-gray-100">
      <Header />
      <Navbar />
      <main className="container mx-auto px-4">
        <AboutSection />
        
        <section className="py-16" id="rewards">
          <h2 className="text-3xl font-bold mb-8">Support The Project</h2>
          <ProgressBar current={75000} goal={100000} />
          <div className="mt-12">
            <RewardSlider />
          </div>
        </section>

        <VideoSection />
        <MixtapeSection />
        <UpdatesSection />
        <FAQSection />
        <CommentsSection />
      </main>
      <Footer />
      <TourGuide />
    </div>
  );
}

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
      </Routes>
    </Router>
  );
}