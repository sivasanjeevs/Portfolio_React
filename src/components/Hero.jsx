import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";

const Hero = () => {
  const handleScroll = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-24 text-center md:px-12">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.1 }}
        className="max-w-4xl text-5xl font-semibold tracking-tight text-apple-text md:text-7xl lg:text-8xl"
      >
        Sivasanjeev
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.25 }}
        className="mt-6 max-w-3xl text-xl font-medium leading-relaxed text-apple-muted md:text-2xl lg:text-3xl"
      >
        Software developer focused on AI & backend systems.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-6 max-w-xl text-base leading-relaxed text-apple-muted md:text-lg"
      >
        Bridging algorithms with practical engineering to build simple, intentional tools.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.55 }}
        className="mt-12 flex flex-wrap items-center justify-center gap-6"
      >
        <button
          onClick={() => handleScroll("projects")}
          className="btn-glass"
        >
          View Projects
        </button>
        <button
          onClick={() => handleScroll("about")}
          className="text-sm font-medium text-apple-blue transition-opacity hover:opacity-70"
        >
          Learn more →
        </button>
      </motion.div>


    </section>
  );
};

export default Hero;
