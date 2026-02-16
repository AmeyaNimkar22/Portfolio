import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPaperPlane } from 'react-icons/fa';

import contactImg from '../assets/contactImg-removebg-preview1.png';

/**
 * BrightCode Studio - Contact Section
 * Features: Glassmorphism layout, subtle glow effects, and interactive social links.
 */

export default function Contact() {
  const socials = [
    { icon: <FaEnvelope />, link: "mailto:ameyaan22@gmail.com", label: "Email", color: "hover:text-red-400" },
    { icon: <FaGithub />, link: "https://github.com/AmeyaNimkar22", label: "GitHub", color: "hover:text-gray-400" },
    { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/ameya-nimkar-57b987339/", label: "LinkedIn", color: "hover:text-blue-400" },
    
  ];

  return (
    <section id="contact" className="relative min-h-screen flex items-center overflow-hidden bg-[#050505] py-24 px-8 md:px-20">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-purple-600/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[150px] -z-10" />

      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-16">
        
        {/* TEXT CONTENT */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:w-3/5 space-y-8"
        >
          <div className="space-y-4">
            
            <h2 className="text-4xl md:text-5xl font-semibold text-center mb-12 text-white">
          Contact{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-400">
            Me
          </span>
        </h2>
          </div>

          <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl font-light">
            Whether you have a specific project in mind, a question about my work, or just want to connect with a fellow developer, I'm all ears. I specialize in turning complex problems into seamless digital experiences.
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center gap-8 pt-4">
            {/* Direct Email Card */}
            <motion.a 
              href="mailto:ameyaan22@gmail.com"
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-4 bg-white/5 border border-white/10 p-5 rounded-2xl group transition-all hover:border-purple-500/50"
            >
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-all">
                <FaPaperPlane size={20} />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Email Me At</p>
                <p className="text-lg font-semibold text-white group-hover:text-purple-400">ameyaan22@gmail.com</p>
              </div>
            </motion.a>

            {/* Social Icons Row */}
            <div className="flex items-center gap-5 text-3xl text-slate-500">
              {socials.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  className={`${social.color} transition-colors duration-300`}
                  title={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* IMAGE SECTION */}
        
          
          
          <div className="relative z-10 p-4">
             <img 
              src={contactImg} 
              alt="Contact" 
              className="w-full max-w-sm lg:max-w-md drop-shadow-[0_20px_50px_rgba(168,85,247,0.3)] animate-float"
              style={{ animation: 'float 6s ease-in-out infinite' }}
            />
          </div>
        
      </div>

      {/* Inline styles for the float animation */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
    </section>
  );
}