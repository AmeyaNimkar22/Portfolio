import React from "react";
import { motion } from "framer-motion";
import VantaTopologyBackground from "./VantaTopologyBackground";
import HomeImage from "../assets/heroImg.jpeg";
import { HashLink } from "react-router-hash-link";



const HomeSection = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#050505] text-white selection:bg-purple-500/30"
    >
      {/* BACKGROUND LAYER */}
      <div className="absolute inset-0 z-0">
        <VantaTopologyBackground />
        {/* Modern Radial Gradient for Depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-[#050505] z-[1]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.1),transparent_50%)] z-[1]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* LEFT CONTENT: TYPOGRAPHY & CTA */}
          <motion.div
            className="lg:col-span-7 space-y-8 text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >


            <motion.div variants={itemVariants} className="space-y-2">

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1]">
                Ameya <br />
                <span className="relative">
                  <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-300 to-indigo-400">
                    Nimkar
                  </span>
                  <motion.span
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute bottom-2 left-0 h-[8px] bg-purple-500/20 -z-10"
                  />
                </span>
              </h1>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-slate-400 text-base md:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed font-light"
            >
              I build intelligent, scalable, and visually engaging web applications powered by AI and modern web technologies.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-5 pt-4"
            >
              <HashLink
                smooth
                to="/#projects"
                className="group relative px-8 py-4 bg-white text-black font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <span className="relative z-10">View Portfolio</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-fuchsia-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </HashLink>

              <HashLink
                smooth
                to="/#contact"
                className="px-8 py-4 bg-transparent border border-white/10 hover:border-white/40 hover:bg-white/5 text-white font-medium rounded-full backdrop-blur-sm transition-all duration-300"
              >
                Let's Talk
              </HashLink>

            </motion.div>
          </motion.div>

          {/* RIGHT CONTENT: HERO IMAGE */}
          <motion.div
            className="lg:col-span-5 relative flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Decorative Glow Elements */}
            <div className="absolute w-64 h-64 bg-purple-600/20 rounded-full blur-[80px] animate-pulse" />
            <div className="absolute w-48 h-48 bg-blue-600/10 rounded-full blur-[60px] translate-x-12 -translate-y-12" />

            <div className="relative z-10 group">
              {/* Image Frame */}
              <motion.div
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 1, 0]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative flex justify-center items-center"
              >
                <img
                  src={HomeImage}
                  alt="Ameya Nimkar"
                  className="w-48 md:w-80 object-contain drop-shadow-[0_20px_50px_rgba(168,85,247,0.25)] filter brightness-110 contrast-105"
                />

                {/* Floating Badge Animation */}
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-4 right-0 md:right-4 bg-[#1a1a1a]/80 border border-white/10 backdrop-blur-xl p-3 rounded-2xl shadow-2xl"
                >
                  <p className="text-[9px] uppercase tracking-tighter text-slate-500 font-bold">Tech Stack</p>
                  <div className="flex gap-2 mt-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-slate-500">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-purple-500 to-transparent" />
      </motion.div>
    </section>
  );
};

export default HomeSection;