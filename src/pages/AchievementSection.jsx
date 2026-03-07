import React from "react";
import { motion } from "framer-motion";
import { Trophy, Award, Star, Zap, GraduationCap, Crown, FileText, ExternalLink } from "lucide-react";

const achievements = [
  {
    title: "Best PPT Award",
    subtitle: "ICRTSTM 2025",
    icon: <Award className="w-8 h-8 text-blue-400" />,
    gridClass: "md:col-span-2 md:row-span-1",
    bg: "bg-blue-500/5",
    description: "Published research paper: 'Design and Implementation of a Secure, Interactive, and Customizable Web-Based Trivia System'",
    fullDescription: "Presented at ICRTSTM 2025; received Best PPT Award (UG Category)"
  },
  {
    title: "NPTEL Java Elite",
    subtitle: "Top 5% India",
    icon: <Trophy className="w-8 h-8 text-purple-400" />,
    gridClass: "md:col-span-1 md:row-span-2",
    bg: "bg-purple-500/5",
  },
  {
    title: "SQL Gold Badge",
    subtitle: "HackerRank",
    icon: <Star className="w-8 h-8 text-amber-400" />,
    gridClass: "md:col-span-1 md:row-span-1",
    bg: "bg-amber-500/5",
  },
  {
    title: "5-Star Proficient",
    subtitle: "Problem Solving",
    icon: <Crown className="w-8 h-8 text-fuchsia-400" />,
    gridClass: "md:col-span-1 md:row-span-1",
    bg: "bg-fuchsia-500/5",
  },
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="relative py-32 bg-[#050505] text-white overflow-hidden">
      {/* Abstract Background Noise */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" 
           >
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center justify-center mb-20">
          <div className="space-y-4 text-center">
            <h2 className="text-4xl md:text-5xl font-semibold text-white">
              My{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-400">
                Achievements
              </span>
            </h2>
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[180px]">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 0.98 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-3xl border border-white/5 p-8 flex flex-col justify-between transition-all duration-500 hover:border-white/20 ${item.gridClass} ${item.bg}`}
            >
              {/* Animated Corner Icon */}
              <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-100 group-hover:rotate-12 transition-all duration-500">
                {item.icon}
              </div>

              {/* Research Paper Highlight - Only for first card */}
              {index === 0 && (
                <div className="absolute top-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <FileText className="w-4 h-4 text-purple-400" />
                </div>
              )}

              <div className="mt-auto">
                <p className="text-xs font-bold text-slate-500 tracking-widest uppercase mb-1">
                  {item.subtitle}
                </p>
                <h3 className="text-2xl font-bold tracking-tight group-hover:text-purple-400 transition-colors mb-2">
                  {item.title}
                </h3>
                
                {/* Research Paper Description - Only for first card */}
                {index === 0 && item.description && (
                  <div className="space-y-1">
                    <p className="text-xs text-slate-400 leading-relaxed max-w-[80%]">
                      {item.description}
                    </p>
                    <p className="text-[10px] text-purple-400/80 font-medium">
                      {item.fullDescription}
                    </p>
                  </div>
                )}
              </div>

              {/* Glass Streak Effect */}
              <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover:animate-shine" />
            </motion.div>
          ))}
          
          {/* Static Decorative Block */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="hidden md:flex md:col-span-1 rounded-3xl border border-dashed border-white/10 items-center justify-center p-8 text-center flex-col gap-2"
          >
            <GraduationCap className="w-6 h-6 text-slate-600 mb-2" />
            <p className="text-[10px] text-slate-600 uppercase tracking-[0.5em] leading-relaxed">
              Research & <br /> Innovation
            </p>
            <p className="text-[8px] text-slate-700 mt-2 max-w-[150px]">
              Published at ICRTSTM 2025
            </p>
          </motion.div>
        </div>

        {/* Mobile Research Highlight */}
        <div className="mt-8 block md:hidden">
          <div className="p-6 rounded-2xl border border-purple-500/20 bg-purple-500/5">
            <div className="flex items-start gap-3">
              <FileText className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-sm font-bold text-white mb-1">Published Research Paper</h4>
                <p className="text-xs text-slate-400 mb-2">
                  "Design and Implementation of a Secure, Interactive, and Customizable Web-Based Trivia System"
                </p>
                <p className="text-[10px] text-purple-400">
                  Presented at ICRTSTM 2025 • Best PPT Award (UG Category)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .text-outline-white {
          -webkit-text-stroke: 1px rgba(255,255,255,0.3);
        }
        @keyframes shine {
          100% { left: 200%; }
        }
        .animate-shine {
          animation: shine 0.8s forwards;
        }
      `}</style>
    </section>
  );
};

export default AchievementsSection;