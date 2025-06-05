import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaDocker, FaFigma, FaDatabase, FaJava } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiTailwindcss, SiBootstrap, SiPostman, SiCanva } from 'react-icons/si';

const skills = {
  frontend: [
    { name: 'HTML', icon: <FaHtml5 className='text-orange-600' /> },
    { name: 'CSS', icon: <FaCss3Alt className='text-blue-600' /> },
    { name: 'JavaScript', icon: <FaJs className='text-yellow-500' /> },
    { name: 'React', icon: <FaReact className='text-blue-400' /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className='text-teal-500' /> },
    { name: 'Bootstrap', icon: <SiBootstrap className='text-purple-600' /> },
  ],
  backend: [
    { name: 'Node.js', icon: <FaNodeJs className='text-green-600' /> },
    { name: 'Express.js', icon: <SiExpress className='text-gray-800' /> },
    { name: 'MongoDB', icon: <SiMongodb className='text-green-700' /> },
    { name: 'SQL', icon: <FaDatabase className='text-gray-700' /> },
    { name: 'Java', icon: <FaJava className='text-red-600' /> },
  ],
  tools: [
    { name: 'Git', icon: <FaGitAlt className='text-red-500' /> },
    { name: 'GitHub', icon: <FaGithub className='text-black' /> },
    { name: 'Postman', icon: <SiPostman className='text-orange-500' /> },
    { name: 'Docker', icon: <FaDocker className='text-blue-500' /> },
    { name: 'Figma', icon: <FaFigma className='text-purple-500' /> },
    { name: 'Canva', icon: <SiCanva className='text-blue-400' /> },
  ]
};

export default function SkillGrid() {
  return (
    <section className="py-16 px-4 bg-white  dark:bg-gray-900 dark:text-gray-300 ">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:bg-gray-900 dark:text-gray-300 dark:text-purple-500">My Skills</h2>
      

      {/* Staggered Skill Category Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto  dark:bg-gray-900 dark:text-gray-300  ">
        {Object.keys(skills).map((category, index) => (
          <div key={index} className="border-2 border-purple-300 dark:border-purple-600 dark:bg-gray-900 dark:text-gray-300  bg-gray-100 rounded-2xl p-8  shadow-md hover:scale-105 transition-transform">
            <h3 className="text-3xl font-semibold  text-gray-700 mb-6 capitalize text-center  dark:bg-gray-900 dark:text-gray-300 ">{category}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {skills[category].map((skill, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 shadow-sm rounded-lg p-4 hover:bg-gray-200 dark:hover:bg-gray-1000 transition-colors duration-300"
                >
                  <div className="text-4xl mb-2 dark:text-gray-300">{skill.icon}</div>
                  <p className="text-lg font-semibold text-gray-800 dark:text-gray-300">{skill.name}</p>
                </div>
              ))}
            </div> 
          </div>
        ))}
      </div>
    </section>
  );
}
