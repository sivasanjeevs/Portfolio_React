import { motion } from "framer-motion";
import remoteDesktopImg from "../assets/remote desktop.png";
import ai2048Img from "../assets/2048.png";
import healthcareImg from "../assets/drug.png";
import roboImg from "../assets/robo.png";
import xcloneImg from "../assets/xclone.png";
import spotifyImg from "../assets/spotifyclone.png";
import SectionHeader from "./SectionHeader";

const PROJECTS = [
  {
    title: "Remote Desktop",
    description:
      "A remote desktop application built with Python socket programming and Tkinter, allowing users to access and control a remote system effortlessly.",
    image: remoteDesktopImg,
    url: "https://github.com/sivasanjeevs/remote-Desktop",
  },
  {
    title: "Implicit Dehazing in Feature Space",
    description:
      "A research project proposing a novel single-stage semantic segmentation architecture that performs implicit dehazing in latent feature space, enabling faster and more accurate autonomous vehicle perception under foggy conditions.",
    image: remoteDesktopImg,
    url: "https://github.com/sivasanjeevs/Implicit-Dehazing-in-Feature-Space",
  },
  {
    title: "CORES",
    description:
      "Anomaly detection framework leveraging recursive kernel backtracking to extract extreme convolutional responses and synthetic noise calibration to evaluate deep neural network safety across image datasets via AUROC and FPR96 metrics.",
    image: healthcareImg,
    url: "https://github.com/sivasanjeevs/CORES",
  },
  {
    title: "ThreadNet",
    description:
      "A multi-threaded, load-balanced real-time chat platform featuring a C++ TCP backend, a Node.js WebSocket bridge, and web user/admin interfaces. It uses a custom load balancer to distribute users across multiple chat servers via a round-robin approach based on server load.",
    image: xcloneImg,
    url: "https://github.com/sivasanjeevs/ThreadNet",
  },
  {
    title: "HealthCare Diagnostics",
    description:
      "Healthcare project using Python for disease prediction via decision trees, image segmentation with k-means, and drug efficiency prediction.",
    image: healthcareImg,
    url: "https://github.com/sivasanjeevs/HealthCare-Diagnostics-and-Drug-discovery",
  },
  {
    title: "RoboRoute",
    description:
      "Fleet Management System coordinating multiple robots with real-time visualization, traffic negotiation, and A* path planning via Python and Pygame.",
    image: roboImg,
    url: "https://github.com/sivasanjeevs/RoboRoute",
  },
  {
    title: "X Clone",
    description:
      "Feature-rich Twitter clone using the MERN stack with real-time updates via Socket.io, authentication, and responsive design.",
    image: xcloneImg,
    url: "https://github.com/sivasanjeevs/X_Clone",
  },
  {
    title: "Spotify Clone",
    description:
      "Spotify clone using the MERN stack with music streaming, playlist management, and user authentication.",
    image: spotifyImg,
    url: "https://github.com/sivasanjeevs/Spotify_Clone_Frontend",
  },
];

const Pro = () => {
  return (
    <section className="section-padding border-t border-apple-border">
      <div className="section-container">
        <SectionHeader
          eyebrow="Projects"
          title="Things I've built."
          subtitle="From algorithms to full-stack apps — selected work across robotics, AI, and web development."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              onClick={() => window.open(project.url, "_blank")}
              className="apple-card group cursor-pointer overflow-hidden"
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-48 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-apple-text">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-apple-muted line-clamp-3">
                  {project.description}
                </p>
                <span className="mt-4 inline-block text-sm font-medium text-apple-blue opacity-0 transition-opacity group-hover:opacity-100">
                  View on GitHub →
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 flex justify-center"
        >
          <button
            onClick={() => window.open("https://github.com/sivasanjeevs", "_blank")}
            className="rounded-full border border-apple-border px-8 py-3 text-sm font-medium text-apple-text transition-all hover:border-white/20 hover:bg-apple-surface active:scale-[0.98]"
          >
            View all on GitHub
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Pro;
