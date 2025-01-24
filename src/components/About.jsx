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
            <div 

            className="w-full lg:w-1/2">
                <div className=" justify-center lg:justify-start">
                    <motion.p 
                                whileInView={{opacity: 1, x: 0}}
                                initial={{opacity:0, x:100}}
                                transition={{duration:1}}
                                className="my-2 max-w-xl py-6">Hi, I’m Sivasanjeev, a Theoretical Computer Science student at PSG College of Technology. I’m passionate about building digital experiences that feel smooth and intuitive. With a focus on full-stack web development and UI/UX design, I love combining technical skills with creativity to bring ideas to life and create projects that truly connect with users.</motion.p>
                    <motion.p 
                                whileInView={{opacity: 1, x: 0}}
                                initial={{opacity:0, x:100}}
                                transition={{duration:1}}
                                className="my-2 max-w-xl py-6">Beyond coding, I express my creativity through visual design, crafting posters, logos, and event assets that have been proudly featured in various college initiatives.My designs focus on creating meaningful experiences by combining functionality with creativity and a keen eye for aesthetics.</motion.p>
                    <motion.p 
                                whileInView={{opacity: 1, x: 0}}
                                initial={{opacity:0, x:100}}
                                transition={{duration:1}}
                                className="my-2 max-w-xl py-6">Hobbies : Singing, Drawing, Designing</motion.p>
                                
                </div>
            </div>
        </div>

    </div>
  );
};

export default About;