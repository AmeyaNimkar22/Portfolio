import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import contactImg from '../assets/contactImg-removebg-preview.png';

export default function Contact() {
  return (
    <section className="flex flex-col lg:flex-row min-h-screen items-center bg-white px-8 md:px-20 py-12">
      {/* Text Section */}
      <div className="flex flex-col justify-center lg:w-1/2 mb-12 lg:mb-0">
        <h2 className="text-4xl font-bold text-center  text-gray-700  md:text-5xl  text-grey-700 mb-6 lg:text-left">
          Contact Me
        </h2>
        <p className="text-xl font-semibold text-gray-700 mb-8 leading-relaxed">
          If you have any inquiries or would like to discuss a potential project, feel free to reach out to me through the contact email provided below. 
          I'm always open to collaboration and love working with new clients. Additionally, if you simply want to connect or have any questions about my work, 
          don't hesitate to drop me a message. Looking forward to hearing from you soon!
        </p>
        <div className="flex gap-6 text-3xl md:text-4xl text-purple-700">
          <a href="mailto:ameyanimkar22@gmail.com" className="hover:text-gray-500">
            <FaEnvelope />
          </a>
          <a href="https://github.com/AmeyaNimkar22" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/ameya-nimkar-57b987339/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500">
            <FaLinkedin />
          </a>
          <a href="https://leetcode.com/u/Ameya2204/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500">
            <SiLeetcode />
          </a>
        </div>
        <p className="text-xl font-semibold text-purple-800 mt-8">ameyanimkar22@gmail.com</p>
      </div>

      {/* Image Section - Proper Central Alignment */}
      <div className="lg:w-1/2 flex items-center justify-center p-8 hidden lg:flex">
        <img src={contactImg} alt="Contact" className="w-full max-w-xs md:max-w-sm lg:max-w-lg mx-auto" />
      </div>
    </section>
  );
}
