import React, { useState, useEffect } from "react";
import HomeImage from "../assets/DeveloperImage-removebg-preview1.png";

const texts = ["<>","Hi,", "my name is", "Ameya Nimkar","</>"];

export default function HomeSection() {
  const [displayedLines, setDisplayedLines] = useState(["", "", "","",""]);
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (lineIndex < texts.length) {
      if (charIndex < texts[lineIndex].length) {
        const timeout = setTimeout(() => {
          setDisplayedLines((prev) => {
            const newLines = [...prev];
            newLines[lineIndex] += texts[lineIndex][charIndex];
            return newLines;
          });
          setCharIndex(charIndex + 1);
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setLineIndex(lineIndex + 1);
          setCharIndex(0);
        }, 400);
        return () => clearTimeout(timeout);
      }
    }
  }, [charIndex, lineIndex]);

  return (
    <section id="home" className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center px-8 md:px-32 gap-10 bg-white dark:bg-gray-900">
      {/* Text Section */}
      <div className="text-center md:text-left flex flex-col gap-2 z-20 md:w-1/2">
        <p className="text-3xl md:text-4xl font-semibold text-gray-800 dark:text-gray-300">{displayedLines[0]}</p>
        <p className="text-3xl md:text-4xl font-semibold text-gray-800 dark:text-gray-300">{displayedLines[1]}</p>
        <p className="text-3xl md:text-4xl font-semibold text-gray-800 dark:text-gray-300">{displayedLines[2]}</p>
        <p className="text-5xl md:text-7xl font-extrabold text-purple-600 ">{displayedLines[3]}</p>
        <p className="text-3xl md:text-4xl font-semibold text-gray-800 dark:text-gray-300">{displayedLines[4]}</p>
      </div>

      {/* Image Section */}
      <div className="flex-shrink-0 w-64 h-64 md:w-96 md:h-96">
        <img src={HomeImage} alt="Home Illustration" className="w-full h-full object-contain" />
      </div>
    </section>
  );
}
