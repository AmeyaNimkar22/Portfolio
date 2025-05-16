import React from 'react';
import Navbar from './components/Navbar';
import HomeSection from './components/HomeSection';
import About from './pages/About';
import SkillGrid from './components/SkillGrid';

function App() {
  return (
    <div>
      <Navbar />
      <HomeSection />

      <section id="about" className="min-h-screen flex items-center justify-center py-16">
        <About />
      </section>
      
      <section id="skills" className="min-h-screen  py-16 px-6">
        <SkillGrid />
      </section>
      
      <section id="projects" className="min-h-screen bg-pink-50 flex items-center justify-center py-16">
        <h1 className="text-5xl font-bold">My Projects</h1>
      </section>
      
      <section id="contact" className="min-h-screen bg-purple-50 flex items-center justify-center py-16">
        <h1 className="text-5xl font-bold">Contact Me</h1>
      </section>
    </div>
  );
}

export default App;
