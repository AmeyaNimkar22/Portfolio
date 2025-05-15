// src/pages/About.js
import React from "react";

const About = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 md:px-20 py-12 bg-gradient-to-b from-gray-50 to-gray-200">
      <h1 className="text-5xl md:text-6xl font-extrabold text-purple-700 mb-6 text-center">
        About Me
      </h1>
      <div className="bg-purple-100 shadow-lg rounded-2xl p-8 md:p-12 text-gray-700 w-full max-w-4xl text-lg leading-relaxed">
        <p className="mb-6">
          Hey! I'm Ameya, a full-stack developer with a passion for creating visually captivating and interactive web applications. With a strong foundation in HTML, CSS, JavaScript, and React, I bring ideas to life, blending sleek design with seamless functionality.
        </p>
        <p>
          When I'm not coding, you'll find me sketching, reading thrillers, exploring AI, or experimenting with new tech. I'm always pushing the boundaries of what's possible, constantly learning and building projects that inspire.
        </p>
      </div>
    </section>
  );
};

export default About;
