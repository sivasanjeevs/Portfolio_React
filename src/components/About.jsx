import aboutImg from "../assets/rb.png";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-800 pb-40">
        <motion.h1 
        whileInView={{opacity: 1, y:0}}
        initial={{opacity:0, y:-100}}
        transition={{duration:1.5}}
        className="my-20 text-center text-4xl">About<span className="text-neutral-500"> me!</span></motion.h1>
        <div className="flex flex-wrap">
            <motion.div 
            whileInView={{opacity: 1, x: -50}}
            initial={{ opacity: 0, x: -100}}
            transition={{duration: 1}}
            className="w-full mx-0 lg:w-1/2">
               <div className="flex items-center justify-center">
                    <img  className="" src={aboutImg} alt="about" />
                </div>
            </motion.div>
            <motion.div 
            whileInView={{opacity: 1, x: 0}}
            initial={{opacity:0, x:100}}
            transition={{duration:1}}
            className="w-full lg:w-1/2">
                <div className=" justify-center lg:justify-start">
                    <p className="my-2 max-w-xl py-6">Hi, I'm Sivasanjeev, a Theoretical Computer Science student at PSG College of Technology with a passion for crafting seamless digital experiences and innovative solutions. I specialize in full-stack web development and UI/UX design, blending technical expertise with a keen eye for aesthetics to create impactful and user-centric projects.</p>
                    <p className="my-2 max-w-xl py-6">Beyond coding, I express my creativity through visual design, crafting posters, logos, and event assets that have been proudly featured in various college initiatives. My designs aim to tell stories that resonate, combining functionality with artistic flair.</p>
                    <p className="my-2 max-w-xl py-6">A singer at heart, I love exploring the harmony between technology and creativity, striving to develop projects that inspire and leave a lasting impression.</p>
                </div>
            </motion.div>
        </div>

    </div>
  );
};

export default About;