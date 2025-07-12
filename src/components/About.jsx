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
                                className="my-2 max-w-xl py-6">Hi, I’m Sivasanjeev, a Theoretical Computer Science student at PSG College of Technology, passionate about building seamless digital experiences. With a strong focus on full-stack web development, I enjoy turning ideas into intuitive, user-focused products by combining solid programming skills with creative problem-solving. I’m currently working as an R&D intern, where I explore Multi-Agent Path Finding (MAPF) algorithms and dive deep into the design and analysis of algorithms to solve complex coordination challenges efficiently.</motion.p>
                    <motion.p 
                                whileInView={{opacity: 1, x: 0}}
                                initial={{opacity:0, x:100}}
                                transition={{duration:1}}
                                className="my-2 max-w-xl py-6">Beyond software development, I express my creativity through design, having created logos, posters, and event branding materials featured in various college initiatives. My design work focuses on blending functionality with visual appeal to communicate ideas effectively. Whether I’m working with algorithms or visual elements, I strive to deliver thoughtful, high-impact solutions that resonate with users.</motion.p>
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
