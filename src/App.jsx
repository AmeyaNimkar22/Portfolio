import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HomeSection from './components/HomeSection';
import About from './pages/About';
import SkillGrid from './components/SkillGrid';
import Contact from './pages/Contact';
import Projects from './components/Projects';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    // Add dark class on root div to apply dark mode styles globally
    <div className={darkMode ? 'dark' : ''}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <HomeSection />
      
      <section id="about" className="min-h-screen flex items-center justify-center py-16 dark:bg-gray-900 dark:text-gray-300">
        <About />
      </section>
      
      <section id="skills" className="min-h-screen py-16 px-6 dark:bg-gray-900 dark:text-gray-300">
        <SkillGrid />
      </section>
      
      <section id="projects" className="min-h-screen flex items-center justify-center py-16 dark:bg-gray-900 dark:text-gray-300">
        <h1 className="text-5xl font-bold"><Projects /></h1>
      </section>
      
      <section id="contact" className="min-h-screen flex items-center justify-center py-16 dark:bg-gray-900 dark:text-gray-300">
        <h1 className="text-5xl font-bold"><Contact /></h1>
      </section>
    </div>
  );
}

export default App;
