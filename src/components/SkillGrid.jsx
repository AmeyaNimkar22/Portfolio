import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, 
  FaFigma, FaDatabase, FaJava, FaPython, FaTerminal, FaBug,
  FaCode // We'll use this for VS Code
} from 'react-icons/fa';

import { 
  SiExpress, SiMongodb, SiTailwindcss, SiNextdotjs, 
  SiMysql, 
  // REMOVED SiVisualstudio here to stop the error
  SiOpenai 
} from 'react-icons/si';

import { HiOutlineCode, HiOutlineGlobeAlt, HiOutlineDatabase, HiOutlineCog } from 'react-icons/hi';

const skillGroups = [
  {
    category: "Programming",
    icon: <HiOutlineCode />,
    color: "from-blue-500 to-cyan-400",
    skills: [
      { name: 'Java', icon: <FaJava className='text-red-500' /> },
      { name: 'Python', icon: <FaPython className='text-blue-400' /> },
    ]
  },
  {
    category: "Web Development",
    icon: <HiOutlineGlobeAlt />,
    color: "from-purple-500 to-fuchsia-400",
    skills: [
      { name: 'HTML', icon: <FaHtml5 className='text-orange-500' /> },
      { name: 'CSS', icon: <FaCss3Alt className='text-blue-500' /> },
      { name: 'JavaScript', icon: <FaJs className='text-yellow-400' /> },
      { name: 'React.js', icon: <FaReact className='text-cyan-400' /> },
      { name: 'Next.js', icon: <SiNextdotjs className='text-white' /> },
      { name: 'Node.js', icon: <FaNodeJs className='text-green-500' /> },
      { name: 'Express.js', icon: <SiExpress className='text-gray-400' /> },
    ]
  },
  {
    category: "Databases",
    icon: <HiOutlineDatabase />,
    color: "from-emerald-500 to-teal-400",
    skills: [
      { name: 'MongoDB', icon: <SiMongodb className='text-green-500' /> },
      { name: 'MySQL', icon: <SiMysql className='text-blue-500' /> },
    ]
  },
  {
    category: "Tools & Other",
    icon: <HiOutlineCog />,
    color: "from-orange-500 to-amber-400",
    skills: [
      { name: 'Git', icon: <FaGitAlt className='text-orange-600' /> },
      { name: 'VS Code', icon: <FaCode className='text-blue-400' /> }, // Changed to FaCode
      { name: 'Figma', icon: <FaFigma className='text-purple-400' /> },
      { name: 'Tailwind', icon: <SiTailwindcss className='text-cyan-300' /> },
      { name: 'System Design', icon: <FaTerminal className='text-gray-400' /> },
      { name: 'Prompt Eng.', icon: <SiOpenai className='text-emerald-400' /> },
      { name: 'Debugging', icon: <FaBug className='text-red-400' /> },
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const cardVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

export default function SkillGrid() {
  return (
    <section id="skills" className="relative py-24 px-6 bg-[#050505] overflow-hidden">
      {/* Background Decorative Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-center mb-12 text-white">
          Technical{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-400">
            Skills
          </span>
        </h2>
          
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skillGroups.map((group, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="relative group p-[1px] rounded-3xl overflow-hidden bg-gradient-to-b from-white/10 to-transparent hover:from-purple-500/50 transition-all duration-500"
            >
              <div className="bg-[#0a0a0a] rounded-[calc(1.5rem-1px)] p-8 h-full backdrop-blur-3xl">
                <div className="flex items-center gap-4 mb-8">
                  <div className={`p-3 rounded-2xl bg-gradient-to-br ${group.color} text-black text-2xl`}>
                    {group.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-wide">{group.category}</h3>
                </div>

                <div className="flex flex-wrap gap-4">
                  {group.skills.map((skill, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white/5 border border-white/5 hover:border-purple-500/30 hover:bg-purple-500/5 transition-all duration-300"
                    >
                      <span className="text-2xl">{skill.icon}</span>
                      <span className="text-sm font-medium text-slate-300">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}