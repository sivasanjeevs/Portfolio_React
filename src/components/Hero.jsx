import { HERO_CONTENT } from "../constants";
import profilepic from "../assets/rb2.png";
import { motion } from "framer-motion";

const container = (delay) => ({
    hidden: {x: -100, opacity: 0},
    visible: {
        x:10,
        opacity:1,
        transition:{duration:0.5, delay:delay},

    },
})

const Hero = () => {
  return ( 
    <div className="">
    <div className="flex flex-wrap lg:flex-nowrap">
        <div className="w-full lg:w-1/2">
            <div className="flex flex-col  items-center lg:items-start">
                <motion.h1 
                    variants={container(0)}
                    initial="hidden"
                    animate="visible"
                    className="pb-16 text-4xl font-thin tracking-tight lg:mt-10 lg:text-7xl"
                >
                    Sivasanjeev S
                </motion.h1>
                <motion.span 
                    variants={container(0.5)}
                    initial="hidden"
                    animate="visible"
                    className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
                >
                    Student at PSG
                </motion.span>
                <motion.p 
                    variants={container(1)}
                    initial="hidden"
                    animate="visible"
                    className="my-2 max-w-xl py-6 font-light tracking tighter"
                >
                    {HERO_CONTENT}
                </motion.p>
            </div>
        </div>
        <div className="w-full flex justify-center lg:justify-end">
            <motion.img 
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 50, opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
                className="flex items-center justify-center"
                src={profilepic} 
                alt="sivasanjeev"
            />
        </div>
    </div>
</div>

  );
};

export default Hero;