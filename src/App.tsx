import React from 'react';
import Navbar from './components/layout/Navbar';
import WorkInProgressBanner from './components/layout/WorkInProgressBanner';
import Footer from './components/layout/Footer';

import HeroSection from './components/sections/HeroSection';
import OverviewSection from './components/sections/OverviewSection';
import ArchitectureSection from './components/sections/ArchitectureSection';
import StorySection from './components/sections/StorySection';
import RoadmapSection from './components/sections/RoadmapSection';
import LinksSection from './components/sections/LinksSection';

const App: React.FC = () => {
  return (
    <div className="lc-app">
      <Navbar />
      <WorkInProgressBanner />

      <main>
        <section id="top" className="lc-hero">
          <div className="lc-container">
            <HeroSection />
          </div>
        </section>

        <section id="overview" className="lc-section lc-section--muted">
          <div className="lc-container">
            <OverviewSection />
          </div>
        </section>

        <section id="architecture" className="lc-section">
          <div className="lc-container">
            <ArchitectureSection />
          </div>
        </section>

        <section id="story" className="lc-section lc-section--muted">
          <div className="lc-container">
            <StorySection />
          </div>
        </section>

        <section id="roadmap" className="lc-section">
          <div className="lc-container">
            <RoadmapSection />
          </div>
        </section>

        <section id="links" className="lc-section lc-section--muted">
          <div className="lc-container">
            <LinksSection />
          </div>
        </section>
      </main>

      <footer className="lc-footer">
        <div className="lc-container">
          <Footer />
        </div>
      </footer>
    </div>
  );
};

export default App;
