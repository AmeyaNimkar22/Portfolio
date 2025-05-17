import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

import contactImg from "../assets/contactImg.png";

export default function Contact() {
  return (
    <section className="flex flex-col lg:flex-row min-h-screen">
      {/* Text Section */}
      <div className="flex flex-col justify-center p-8 lg:w-1/2">
        <h2 className="text-5xl font-bold text-gray-700 mb-6">Contact Me</h2>
        <p className="text-lg font-normal text-gray-700 mb-8 leading-relaxed">
          If you have any inquiries or would like to discuss a potential project, feel free to reach out to me through the contact email provided below. 
          I'm always open to collaboration and love working with new clients. Additionally, if you simply want to connect or have any questions about my work, 
          don't hesitate to drop me a message. Looking forward to hearing from you soon!
        </p>
        <div className="flex gap-6">
          <a href="mailto:ameyanimkar22@gmail.com" className="text-purple-700 text-4xl hover:text-purple-500">
            <FaEnvelope />
          </a>
          <a href="https://github.com/AmeyaNimkar22" target="_blank" className="text-purple-700 text-4xl hover:text-purple-500">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/ameya-nimkar-57b987339/" target="_blank" className="text-purple-700 text-4xl hover:text-purple-500">
            <FaLinkedin />
          </a>
          <a href="https://leetcode.com/u/Ameya2204/" target="_blank" className="text-purple-700 text-4xl hover:text-purple-500">
            <SiLeetcode />
          </a>
        </div>
        <p className="text-lg font-semibold text-purple-800 mt-8">ameyanimkar22@gmail.com</p>
      </div>

      {/* Image Section */}
      <div className="lg:w-1/2 flex items-center justify-center p-8 bg-purple-50">
        <img src={contactImg} alt="Contact" className="w-full max-w-md " />
      </div>
    </section>
  );
}
