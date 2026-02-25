import logo from "../assets/Daco_197393.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";



const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-3 bg-white/5 backdrop-blur-xl border-b border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.6)]">
      <motion.div 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.8 }}
        className="flex items-center"
      > 
        <img
          className="h-8 w-8 rounded-full object-contain"
          src={logo}
          alt="S logo"
        />
      </motion.div>
      <motion.div 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.8 }}
        className="mr-2 flex items-center justify-center gap-4 text-xl text-neutral-100"
      >
        <a
          href="https://www.linkedin.com/in/sivasanjeev-s-02931b282/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-cyan-300 transition-colors"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/sivasanjeevs"
          target="_blank"
          rel="noreferrer"
          className="hover:text-cyan-300 transition-colors"
        >
          <FaGithub />
        </a>
      </motion.div>
    </nav>
  );
};

export default Navbar;