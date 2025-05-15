// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      
      <section id="home" className="h-screen bg-blue-50 flex items-center justify-center">
        <h1 className="text-5xl font-bold">Hi! I am Ameya</h1>
      </section>
      
      <section id="about" className="h-screen bg-green-50 flex items-center justify-center">
        <h1 className="text-5xl font-bold">About Me</h1>
      </section>
      
      <section id="skills" className="h-screen bg-yellow-50 flex items-center justify-center">
        <h1 className="text-5xl font-bold">My Skills</h1>
      </section>
      
      <section id="projects" className="h-screen bg-pink-50 flex items-center justify-center">
        <h1 className="text-5xl font-bold">My Projects</h1>
      </section>
      
      <section id="contact" className="h-screen bg-purple-50 flex items-center justify-center">
        <h1 className="text-5xl font-bold">Contact Me</h1>
      </section>
    </div>
  );
}

export default App;
