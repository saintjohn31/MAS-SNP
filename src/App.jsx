import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServersSection from './components/ServersSection';
import ProgramsSection from './components/ProgramsSection';
import JoinSection from './components/JoinSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen w-full overflow-x-clip bg-white selection:bg-yellow-600 selection:text-gray-950">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServersSection />
        <ProgramsSection />
        <JoinSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
