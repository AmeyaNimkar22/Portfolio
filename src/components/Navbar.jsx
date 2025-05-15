// src/components/Navbar.jsx
import React, { useState } from "react";
import LogoPic from "../assets/LogoPic.png";
import "boxicons/css/boxicons.min.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false); // Close the menu on mobile
    }
  };

  return (
    <div className="w-full h-full absolute z-50">
  <header className="flex justify-between items-center text-black py-3 px-5 md:px-32  relative z-50">
    {/* Logo */}
    <a href="#" onClick={() => scrollToSection("home")}>
      <img src={LogoPic} alt="Logo" className="h-12 cursor-pointer" />
    </a>

    {/* Desktop Menu */}
    <ul className="hidden lg:flex items-center gap-12 font-semibold text-base">
      {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
        <li
          key={item}
          onClick={() => scrollToSection(item.toLowerCase())}
          className="relative group cursor-pointer p-3"
        >
          {item}
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500 transition-all group-hover:w-full"></span>
        </li>
      ))}
    </ul>

    {/* Mobile Hamburger Icon */}
    <i
       className="bx bx-menu block text-4xl cursor-pointer lg:hidden z-50"
      onClick={() => setIsMenuOpen(!isMenuOpen)}
      aria-label="Open menu"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") setIsMenuOpen(!isMenuOpen);
      }}
    ></i>

    {/* Mobile Menu */}
    <div
  className={`absolute lg:hidden top-full left-0 w-full 
    flex flex-col items-center font-semibold text-lg shadow-md
    transition-all duration-300 ease-in-out
    ${isMenuOpen ? "block opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}
  style={{ zIndex: 40 }}
>
  {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
    <li
      key={item}
      onClick={() => scrollToSection(item.toLowerCase())}
      className="list-none w-full text-center py-3 hover:bg-purple-200 transition-all cursor-pointer"
    >
      {item}
    </li>
  ))}
</div>
  </header>
</div>

  );
}

export default Navbar;
