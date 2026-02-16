import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center px-6 md:px-24 py-24 bg-black text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-4xl"
      >
        {/* SECTION TITLE */}
        <h2 className="text-4xl md:text-5xl font-semibold text-center mb-12">
          About{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-400">
            Me
          </span>
        </h2>

        {/* GLASS CARD */}
        <div className="relative rounded-2xl p-8 md:p-12 bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(160,90,180,0.15)]">
          <p className="mb-6 text-slate-300 text-lg md:text-xl leading-relaxed">
            Hey! I’m <span className="text-purple-400 font-medium">Ameya</span>,
            a T.E. Information Technology student at Savitribai Phule Pune University.
            I’m passionate about building AI-driven applications, designing scalable backend systems and crafting responsive and interactive frontends.
          </p>

          <p className="text-slate-300 text-lg md:text-xl leading-relaxed">
            From developing an ML-based schizophrenia detection system during my IEEE EMBS Internship to building AI-powered heritage intelligence platforms, I love solving real-world problems through technology.
Beyond tech, I enjoy sketching, reading, anchoring events, and leading student initiatives as President of ITECH’SA.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
