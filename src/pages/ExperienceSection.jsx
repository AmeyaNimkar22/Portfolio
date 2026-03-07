import React from "react";
import { motion } from "framer-motion";
import { Calendar, ChevronRight, ExternalLink } from "lucide-react";

const experiences = [
  {
    title: "Research Intern",
    company: "IEEE EMBS Summer Internship",
    date: "June 2025 - July 2025",
    description:
      "Developed MindTrack — a machine learning system that detects schizophrenia tendencies using behavioral and linguistic patterns.",
    tech: ["Python", "Machine Learning", "React", "Tailwind"],
    link: "https://github.com/AmeyaNimkar22/MindTrack",
  },
  {
    title: "Software Development Intern",
    company: "Passion Infotech",
    date: "Dec 2025 - Feb 2026",
    description:
      "Built Heritage Headlines — an AI-powered heritage news intelligence platform with automated ranking and cultural impact insights.",
    tech: ["React", "Node.js", "Python", "MongoDB", "OpenAI"],
    link: "https://github.com/AmeyaNimkar22",
  },
  {
    title: "Web Development Volunteer",
    company: "Bonaventure Systems (SheInspires 2.0)",
    date: "Feb 2026 - Mar 2026",
    description:
      "Developed and maintained the official SheInspires 2.0 website in collaboration with Zensar and RPG Group.",
    tech: ["React", "Tailwind", "UI Development"],
    link: "https://sheinspires2.com/",
  },
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

const ExperienceSection = () => {
  return (
    <section className="relative min-h-screen bg-[#050505] text-white py-24 px-4 sm:px-6 overflow-hidden" id="experience">
      {/* Subdued Background Glow */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-900/5 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-indigo-900/5 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header - Same gap as Projects section */}
        <div className="flex flex-col items-center justify-center mb-20">
          <div className="space-y-4 text-center">
            <h2 className="text-4xl md:text-5xl font-semibold text-white">
              Work{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-400">
                Experience
              </span>
            </h2>
          </div>
        </div>

        {/* Mobile View: Stacked Cards with Timeline Dots */}
        <div className="block lg:hidden">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -5 }}
                className="group relative"
              >
                {/* Mobile Timeline Indicator */}
                <div className="absolute -left-2 top-8 w-0.5 h-[calc(100%+2rem)] bg-gradient-to-b from-purple-500/30 via-fuchsia-500/30 to-transparent" />
                
                {/* Mobile Node */}
                <div className="absolute -left-[9px] top-8 z-20">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-purple-500/20 animate-ping" />
                    <div className="w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-500 shadow-[0_0_20px_rgba(168,85,247,0.5)] relative z-10" />
                  </div>
                </div>

                {/* Mobile Year */}
                <div className="absolute left-4 top-2">
                  <span className="text-[10px] font-bold text-purple-400/60 tracking-wider bg-black/20 px-2 py-1 rounded-full backdrop-blur-sm">
                    {exp.date.split(" - ")[0]}
                  </span>
                </div>

                {/* Mobile Card */}
                <div className="ml-6 p-6 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-xl hover:border-purple-500/20 transition-all duration-500">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="p-2 rounded-lg bg-white/5 text-purple-400">
                      <Calendar className="w-3 h-3" />
                    </div>
                    <span className="text-[8px] font-medium text-slate-500 tracking-[0.2em] uppercase">
                      {exp.date}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold mb-1 text-slate-100">{exp.title}</h3>
                  <p className="text-purple-400/80 font-medium text-xs mb-4">{exp.company}</p>
                  
                  <p className="text-slate-400 text-xs leading-relaxed mb-5">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[7px] px-2 py-1 rounded-full bg-white/5 border border-white/5 text-slate-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between border-t border-white/5 pt-4">
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-[10px] font-bold text-slate-300 hover:text-white transition-colors group/btn"
                    >
                      <ExternalLink className="w-3.5 h-3.5 text-slate-400 opacity-40 group-hover:opacity-100 transition-opacity" />
                      <ChevronRight className="w-2.5 h-2.5 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                    
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Desktop View: Horizontal Timeline */}
        <div className="relative hidden lg:block">
          {/* Main Timeline Line */}
          <div className="absolute top-[120px] left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          
          {/* Animated Progress Line (static decorative element) */}
          <div className="absolute top-[120px] left-0 w-3/4 h-[2px] bg-gradient-to-r from-purple-500/30 via-fuchsia-500/30 to-transparent" />

          {/* Horizontal Cards Container */}
          <div className="flex flex-row justify-center items-start gap-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex-1 max-w-[380px]">
                {/* Timeline Node */}
                <div className="absolute top-[112px] left-1/2 -translate-x-1/2 z-20">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-purple-500/20 animate-ping" />
                    <div className="w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-500 shadow-[0_0_20px_rgba(168,85,247,0.5)] relative z-10" />
                  </div>
                </div>

                {/* Year Label */}
                <div className="absolute top-[140px] left-1/2 -translate-x-1/2 text-center mt-4">
                  <span className="text-xs font-bold text-purple-400/60 tracking-wider whitespace-nowrap">
                    {exp.date.split(" - ")[0]}
                  </span>
                </div>

                {/* Content Card */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  whileHover={{ y: -5 }}
                  className="group relative mt-32 p-8 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-xl hover:border-purple-500/20 hover:bg-white/[0.03] transition-all duration-500 shadow-2xl"
                >
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-purple-500/5 to-fuchsia-500/5 blur-xl" />

                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-6">
                      <div className="p-2 rounded-lg bg-white/5 text-purple-400">
                        <Calendar className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-medium text-slate-500 tracking-[0.2em] uppercase">
                        {exp.date}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold mb-2 text-slate-100 group-hover:text-white transition-colors">
                      {exp.title}
                    </h3>
                    <p className="text-purple-400/80 font-medium text-sm mb-6">
                      {exp.company}
                    </p>

                    <p className="text-slate-400 text-sm leading-relaxed mb-8 line-clamp-3">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[8px] px-2.5 py-1 rounded-full bg-white/5 border border-white/5 text-slate-400 group-hover:border-purple-500/20 transition-colors"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between border-t border-white/5 pt-6">
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-bold text-slate-300 hover:text-white transition-colors group/btn"
                      >
                        <ExternalLink className="w-4 h-4 text-slate-400 opacity-40 group-hover:opacity-100 transition-opacity" />
                        <ChevronRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                      </a>
                      
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>

          {/* Timeline End Marker */}
          <div className="absolute -right-4 top-[112px]">
            <div className="relative">
              <div className="w-3 h-3 rounded-full bg-white/20" />
              <div className="absolute inset-0 rounded-full bg-white/5 animate-ping" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;