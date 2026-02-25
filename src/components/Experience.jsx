import { motion } from "framer-motion";

const descriptionVariants = {
  rest: { opacity: 0, maxHeight: 0, y: -8, transition: { duration: 0.3 } },
  hover: { opacity: 1, maxHeight: 400, y: 0, transition: { duration: 0.35 } },
};

const Experience = () => {
  return (
    <div className="border-b border-neutral-800 pb-40">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl text-white"
      >
        Experience
      </motion.h1>

      <div className="flex justify-center">
        <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -80 }}
            transition={{ duration: 1 }}
            className="w-full max-w-2xl rounded-2xl border border-neutral-800 bg-gradient-to-br from-neutral-900/80 via-neutral-900/60 to-neutral-800/80 p-6 shadow-[0_0_40px_rgba(24,24,27,0.9)] cursor-pointer"
            initial="rest"
            whileHover="hover"
            animate="rest"
          >
            <div>
              <h2 className="text-2xl font-semibold text-cyan-300">
                GOAT Robotics - R&D Intern
              </h2>
              <p className="mt-1 text-sm text-neutral-400">
                May 2025 – December 2025
              </p>
            </div>

            <motion.div
              variants={descriptionVariants}
              className="overflow-hidden"
            >
              <p className="mt-4 text-sm md:text-base text-neutral-300 leading-relaxed">
                Worked as a R&amp;D intern on{" "}
                <span className="text-cyan-300">multi-agent path finding (MAPF)</span>, 
                robotics toolchains, and navigation for coordinated robot fleets.
              </p>

              <ul className="mt-4 list-disc list-outside space-y-2 pl-5 text-sm md:text-base text-neutral-300 leading-relaxed pb-2">
                <li>
                  Built the GT‑Studio robotics toolchain (PGM map editor, 3D polygon editor, and Grafana dashboard) to support fleet‑level mapping and analytics.
                </li>
                <li>
                  Implemented a LaCAM2‑based MAPF engine in C++ and contributed to navigation and localization experiments using the Stanley Controller and Cartographer.
                </li>
              </ul>
            </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;

