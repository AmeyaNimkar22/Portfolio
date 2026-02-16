import React from 'react';
import Navbar from './components/Navbar';
import HomeSection from './components/HomeSection';
import SkillGrid from './components/SkillGrid';
import Projects from './components/Projects';
import About from './pages/About';
import Contact from './pages/Contact';


function App() {
  return (
    // This div ensures the entire vertical flow is dark
    <div className="bg-[#050505] min-h-screen selection:bg-purple-500/30">
      <Navbar />
      <main>
        <HomeSection />
        <About />
        <SkillGrid />
        <Projects />
        <Contact />

      </main>
    </div>
  );
}

export default App;