import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";

const Hero = () => {
  const handleScroll = (sectionId) => {
    if (sectionId === "Blog") {
      window.open("https://example.com/your-Blog.pdf", "_blank");
      return;
    }
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return ( 
    <section className="min-h-screen flex flex-col items-center justify-center text-center">
      <motion.h1 
        whileInView={{opacity: 1, y: 0}}
        initial={{ opacity: 0, y: -40}}
        transition={{duration: 1}}
        className="mb-4 text-4xl font-extralight tracking-tight lg:text-6xl"
      >
        Sivasanjeev S
      </motion.h1>

      <motion.span 
        whileInView={{opacity: 1, y: 0}}
        initial={{ opacity: 0, y: -20}}
        transition={{duration: 1}}
        className="mb-6 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl lg:text-3xl tracking-tight text-transparent"
      >
        Student at PSG
      </motion.span>

      <motion.p
        whileInView={{opacity: 1, y: 0}}
        initial={{ opacity: 0, y: 20}}
        transition={{duration: 1}}
        className="max-w-2xl px-4 mb-10 text-sm md:text-base font-light text-neutral-300"
      >
        {HERO_CONTENT}
      </motion.p>

      <motion.div
        whileInView={{opacity: 1, y: 0}}
        initial={{ opacity: 0, y: 30}}
        transition={{duration: 1.1}}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        {[
          { id: "about", label: "About" },
          { id: "experience", label: "Experience" },
          { id: "Blog", label: "Blog" },
          { id: "projects", label: "Projects" },
          // { id: "designs", label: "Designs" },
        ].map(({ id, label }) => (
          <button
            key={id}
            onClick={() => handleScroll(id)}
            className="px-6 py-2 rounded-full border border-cyan-400/60 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 text-sm md:text-base font-medium text-neutral-100 hover:bg-cyan-500/20 hover:border-cyan-400 hover:-translate-y-0.5 transition-all duration-200 shadow-[0_0_20px_rgba(56,189,248,0.15)]"
          >
            {label}
          </button>
        ))}
      </motion.div>
    </section>
  );
};

export default Hero;
