import logo from "../assets/Daco_197393.png";
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { motion } from "framer-motion";



const Navbar = () => {
  return <nav className=" mb-5 flex itms-center justify-between py-6">
    <motion.div 
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -100 }}
      transition={{ duration: 1.5 }}

                className="flex shrink-1000 items-center"> 
        <img className="object-scale-down h-20 w-12" src={logo} alt="logo" />
    </motion.div>
    <motion.div 
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -100 }}
      transition={{ duration: 1.5 }}
      className="m-8 flex item-center justify-center gap-5 text-3xl">
        <a href="https://www.linkedin.com/in/sivasanjeev-s-02931b282/"><FaLinkedin /></a>
        <a href="https://github.com/sivasanjeevs"><FaGithub /></a>
        <a href="https://www.instagram.com/sivasanjeev_s/"><FaInstagram /></a>
    </motion.div>
  </nav>;
};

export default Navbar;