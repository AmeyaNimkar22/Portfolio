import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaRocket } from "react-icons/fa";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import p4 from "../assets/p4.png";
import p5 from "../assets/p5.png";
import p6 from "../assets/p6.png";


const projects = [
  {
    title: "Heritage Headlines",
    subtitle: "AI-Powered News Intelligence",
    description: "Ranked 100+ heritage articles using AI. Features dual backend, UNESCO dataset integration, and an interactive map.",
    techStack: ["React.js", "Node.js", "Python", "MongoDB", "OpenAI", "Leaflet"],
    liveLink: "https://share.vidyard.com/watch/MhrFEwAtdhfKq5fbHnKB2C",
    image: p1,
    highlight: "AI Intelligence"
  },
  {
    title: "My Kanban Board",
    subtitle: "Real-Time Task Management",
    description: "Full-featured drag-and-drop board with Google authentication via Clerk and secure session handling.",
    techStack: ["Next.js", "TypeScript", "Tailwind", "dnd-kit", "Clerk"],
    liveLink: "https://landing-kanban.vercel.app/",
    image: p2,
    highlight: "Productivity"
  },
  {
    title: "Quizo",
    subtitle: "Story-Based Quiz Platform",
    description: "TriviaDB integration with a custom builder. Based on a published research paper on engagement systems.",
    techStack: ["React.js", "JavaScript", "Tailwind CSS"],
    liveLink: "https://ameyanimkar22.github.io/Quizo/",
    image: p5,
    highlight: "Research Project"
  },

  {
    title: "MovieBot",
    subtitle: "AI Recommendation Chatbot",
    description: "NLP-powered chatbot utilizing Dialogflow and TMDB API for intelligent, real-time movie suggestions.",
    techStack: ["Dialogflow", "Node.js", "Express", "TMDB API"],
    liveLink: "https://github.com/AmeyaNimkar22/moviebot",
    image: p4,
    highlight: "NLP Bot"
  },
  {
    title: "Pokemon Clash of Cards",
    subtitle: "Strategy Card Game",
    description: "A thrilling Pokémon card game with user-vs-computer gameplay featuring interactive animations.",
    techStack: ["HTML", "CSS", "JavaScript", "Game Dev"],
    liveLink: "https://ameyanimkar22.github.io/PokemonClash-Of-Cards/",
    image: p3,
    highlight: "Gaming"
  },
  {
    title: "ChefMate",
    subtitle: "Recipe Search Engine",
    description: "An intuitive recipe search engine that integrates external APIs for quick and accurate culinary results.",
    techStack: ["HTML", "JavaScript", "CSS", "API"],
    liveLink: "https://ameyanimkar22.github.io/ChefMate/",
    image: p6,
    highlight: "API Search"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-[#050505] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center mb-20">
  <div className="space-y-4 text-center">
    <h2 className="text-4xl md:text-5xl font-semibold text-white">
      My{" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-400">
        Projects
      </span>
    </h2>
  </div>
</div>

        {/* Project Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -12 }}
              className="group flex flex-col bg-[#0d0d0d] border border-white/5 rounded-[2rem] overflow-hidden transition-all duration-500 hover:border-purple-500/40 hover:shadow-[0_20px_60px_rgba(168,85,247,0.15)]"
            >
              {/* Image Section - Colorful by Default */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent opacity-60" />
                <div className="absolute top-5 left-5">
                  <span className="px-4 py-1.5 bg-black/40 backdrop-blur-xl border border-white/10 text-[10px] font-bold rounded-full uppercase tracking-widest text-white shadow-xl">
                    {project.highlight}
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 pt-6 flex flex-col flex-grow">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold tracking-tight text-white mb-1">
                    {project.title}
                  </h3>
                  <p className="text-purple-400 text-[11px] font-bold uppercase tracking-[0.2em]">
                    {project.subtitle}
                  </p>
                </div>
                
                <p className="text-slate-400 text-[15px] leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.techStack.map((tech, i) => (
                    <span 
                      key={i} 
                      className="text-[10px] font-bold px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-slate-300 group-hover:bg-purple-500/10 group-hover:text-purple-300 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Live Link Button */}
                <a 
                  href={project.liveLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center  gap-2 w-full py-4  text-white font-bold rounded-2xl  hover:text-white transition-all duration-300 group/btn"
                >
                 
                  <FaExternalLinkAlt size={14} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Global CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-24 text-center"
        >
          
        </motion.div>
      </div>
    </section>
  );
}