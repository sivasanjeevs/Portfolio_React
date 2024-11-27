import logo from "../assets/Daco_197393.png";
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"


const Navbar = () => {
  return <nav className=" mb-5 flex itms-center justify-between py-6">
    <div className="flex shrink-1000 items-center"> 
        <img className="object-scale-down h-20 w-12" src={logo} alt="logo" />
    </div>
    <div className="m-8 flex item-center justify-center gap-5 text-3xl">
        <a href="https://www.linkedin.com/in/sivasanjeev-s-02931b282/"><FaLinkedin /></a>
        <a href="https://github.com/sivasanjeevs"><FaGithub /></a>
        <a href="https://www.instagram.com/sivasanjeev_s/"><FaInstagram /></a>
    </div>
  </nav>;
};

export default Navbar;