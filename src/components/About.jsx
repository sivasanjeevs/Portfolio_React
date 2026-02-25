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
            className="hidden mx-0 lg:flex lg:w-1/2 items-center justify-start">
               <div className="flex items-center">
                    <img  className="" src={aboutImg} alt="about" />
                </div>
            </motion.div>
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
              <div className="max-w-xl px-4">
                <motion.p 
                  whileInView={{opacity: 1, x: 0}}
                  initial={{opacity:0, x:100}}
                  transition={{duration:1}}
                  className="my-2 py-2 text-sm md:text-base"
                >
                  Hi, I’m <span className="font-semibold">Sivasanjeev</span>, a Theoretical Computer Science student at PSG College of Technology, interested in designing and building clear, user‑focused digital experiences. I enjoy working at the intersection of algorithms and full‑stack web development, using solid theoretical foundations to solve practical problems.
                </motion.p>

                <motion.p 
                  whileInView={{opacity: 1, x: 0}}
                  initial={{opacity:0, x:100}}
                  transition={{duration:1}}
                  className="my-2 py-2 text-sm md:text-base text-neutral-300"
                >
                  I completed a Research &amp; Development internship at Goat Robotics, where I contributed to tools for robotics map editing, visualization, and performance analysis, and worked with multi‑agent path finding and navigation concepts for coordinated robot fleets.
                </motion.p>

                <motion.p 
                  whileInView={{opacity: 1, x: 0}}
                  initial={{opacity:0, x:100}}
                  transition={{duration:1}}
                  className="my-2 py-2 text-sm md:text-base text-neutral-300"
                >
                  Outside of academics and development, I spend time on visual design, including logos, posters, and event branding for college initiatives, with an emphasis on clean, functional visuals.
                </motion.p>

                <motion.p 
                  whileInView={{opacity: 1, x: 0}}
                  initial={{opacity:0, x:100}}
                  transition={{duration:1}}
                  className="my-2 py-2 text-sm md:text-base text-neutral-300"
                >
                  I also pursue creative interests like singing and drawing, which help me bring a more balanced and thoughtful perspective to the work I do.
                </motion.p>
              </div>
            </div>
        </div>

    </div>
  );
};

export default About;
