import React from "react";

const projects = [
  {
    title: "Quizo",
    description:
      "A fun and interactive quiz platform with engaging storylines and customizable quiz creation options.",
    techStack: ["React", "JavaScript", "Tailwind CSS"],
    liveLink: "https://github.com/AmeyaNimkar22/Quizo",
    githubLink: "https://github.com/AmeyaNimkar22/Quizo",
  },
  {
    title: "ChefMate",
    description:
      "An intuitive recipe search engine that integrates APIs for quick and accurate results.",
    techStack: ["HTML", "JavaScript", "CSS"],
    liveLink: "https://ameyanimkar22.github.io/ChefMate/",
    githubLink: "https://github.com/AmeyaNimkar22/ChefMate",
  },
  {
    title: "Pokemon Clash of Cards",
    description:
      "A thrilling Pokémon card game with user-vs-computer gameplay.",
    techStack: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://ameyanimkar22.github.io/PokemonClash-Of-Cards/",
    githubLink: "https://github.com/AmeyaNimkar22/PokemonClash-Of-Cards",
  },
];

export default function Projects() {
  return (
    <section className="min-h-screen py-16 px-6 md:px-20 bg-white flex flex-col items-center">
      <h2 className="text-4xl text-center mb-12 text-gray-700">My Projects</h2>
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-purple-100 shadow-lg rounded-2xl p-8 text-gray-700 text-base leading-relaxed"
          >
            <h3 className="text-2xl text-purple-800 mb-4">{project.title}</h3>
            <p className="mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="text-sm bg-purple-200 text-purple-800 px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-600 text-white px-4 py-2 rounded-xl hover:bg-purple-700 transition-colors"
              >
                View Live
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 text-white px-4 py-2 rounded-xl hover:bg-gray-800 transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
