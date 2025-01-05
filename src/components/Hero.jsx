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
            whileInView={{opacity: 1, x: 0}}
            initial={{ opacity: 0, x: -100}}
            transition={{duration: 1}}
                    className="pb-16 text-4xl font-thin tracking-tight lg:mt-10 lg:text-6xl"
                >
                    Sivasanjeev S
                </motion.h1>
                <motion.span 
            whileInView={{opacity: 1, x: 0}}
            initial={{ opacity: 0, x: -100}}
            transition={{duration: 1}}
                    className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
                >
                    Student at PSG
                </motion.span>
                <motion.p 
            whileInView={{opacity: 1, x: 0}}
            initial={{ opacity: 0, x: -100}}
            transition={{duration: 1}}
                    className="my-2 max-w-xl py-6 font-light tracking tighter"
                >
                    {HERO_CONTENT}
                </motion.p>
            </div>
        </div>
        <div className="w-full flex justify-center lg:justify-end">
            <motion.img 
                                whileInView={{opacity: 1, x: 50}}
                                initial={{opacity:0, x:100}}
                                transition={{duration:1}}
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
