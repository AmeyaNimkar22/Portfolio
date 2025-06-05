import React from "react";

const About = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 md:px-20 py-12 bg-white dark:bg-gray-900 dark:text-gray-300">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:text-purple-500 ">About Me</h2>
      <div className="bg-purple-100 shadow-lg rounded-2xl p-8 md:p-12 text-gray-700 w-full max-w-4xl text-base leading-relaxed dark:bg-gray-700 dark:text-gray-300">
        <p className="mb-6 text-grey-800 text-xl font-semibold ">
          Hey! I'm Ameya, a full-stack developer with a passion for creating visually captivating and interactive web applications. With a strong foundation in HTML, CSS, JavaScript, and React, I bring ideas to life, blending sleek design with seamless functionality.
        </p>
        <p className="text-grey-800 text-xl font-semibold">
          When I'm not coding, you'll find me sketching, reading books, or experimenting with new tech. I'm always pushing the boundaries of what's possible, constantly learning and building projects that inspire.
        </p>
      </div>
    </section>
  );
};

export default About;
