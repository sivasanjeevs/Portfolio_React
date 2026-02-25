import React from 'react'
import { CardBody, Typography, Button } from "@material-tailwind/react";
import { motion } from "framer-motion";
import remoteDesktopImg from "../assets/remote desktop.png";
import ai2048Img from "../assets/2048.png";
import healthcareImg from "../assets/drug.png";
import roboImg from "../assets/robo.png";
import xcloneImg from "../assets/xclone.png";
import spotifyImg from "../assets/spotifyclone.png";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Pro = () => {
  return (
    <div className="border-b border-neutral-800 pb-40">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className=" my-20 text-center text-4xl text-white"
      >
       Projects
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10"
      >

        <div
          onClick={() => window.open("https://github.com/sivasanjeevs/remote-Desktop", "_blank")}
          className="relative mt-6 w-full rounded-2xl border border-neutral-800 bg-gradient-to-br from-neutral-900/80 via-neutral-900/60 to-neutral-800/80 p-6 text-white shadow-[0_0_40px_rgba(24,24,27,0.9)] overflow-hidden transform transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[0_0_45px_rgba(34,211,238,0.6)] cursor-pointer"
        >
          <img
            src={remoteDesktopImg}
            alt="Remote Desktop"
            className="w-full h-40 object-cover rounded-2xl mb-4"
          />
          <CardBody className="p-0">
            <Typography variant="h5" color="white" className="mb-4">
              Remote Desktop
            </Typography>
            <Typography>
              A remote desktop application created with Python’s socket programming and Tkinter for GUI, allowing users to access and control a remote system effortlessly.
            </Typography>
          </CardBody>
        </div>

       {/* <div className="relative mt-6 w-full rounded-2xl p-6 bg-gradient-to-br from-black to-gray-800 shadow-lg text-white overflow-hidden transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-none">
          <CardBody>
            <Typography variant="h5" color="white" className="mb-2">
              CinePix
            </Typography>
            <Typography>
            A movie recommendation system built using the Trie data structure in JavaScript, functioning like a dictionary to suggest movies based on user input. The UI is designed using HTML and CSS.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0 text-center">
            <Button
              className="mt-4 bg-gradient-to-r from-blue-700 to-purple-600 text-white rounded-md px-4 py-2 hover:from-blue-800 hover:to-purple-700 focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 active:shadow-md active:shadow-blue-500/50"
            >
             Link!
            </Button>
          </CardFooter>
        </div>*/}

        <div
          onClick={() => window.open("https://github.com/sivasanjeevs/2048-Ai", "_blank")}
          className="relative mt-6 w-full rounded-2xl border border-neutral-800 bg-gradient-to-br from-neutral-900/80 via-neutral-900/60 to-neutral-800/80 p-6 text-white shadow-[0_0_40px_rgba(24,24,27,0.9)] overflow-hidden transform transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[0_0_45px_rgba(34,211,238,0.6)] cursor-pointer"
        >
          <img
            src={ai2048Img}
            alt="2048 AI"
            className="w-full h-40 object-cover rounded-2xl mb-4"
          />
          <CardBody className="p-0">
            <Typography variant="h5" color="white" className="mb-4">
              2048 Ai
            </Typography>
            <Typography>
              Developed a 2048 game using React, Express.js, and Tailwind CSS, allowing both manual play and AI-assisted moves. Implemented the Expectimax algorithm to determine the best possible move.
            </Typography>
          </CardBody>
        </div>
        <div
          onClick={() => window.open("https://github.com/sivasanjeevs/HealthCare-Diagnostics-and-Drug-discovery", "_blank")}
          className="relative mt-6 w-full rounded-2xl border border-neutral-800 bg-gradient-to-br from-neutral-900/80 via-neutral-900/60 to-neutral-800/80 p-6 text-white shadow-[0_0_40px_rgba(24,24,27,0.9)] overflow-hidden transform transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[0_0_45px_rgba(34,211,238,0.6)] cursor-pointer"
        >
          <img
            src={healthcareImg}
            alt="HealthCare Diagnostics and Drug discovery"
            className="w-full h-40 object-cover rounded-2xl mb-4"
          />
          <CardBody className="p-0">
            <Typography variant="h5" color="white" className="mb-4">
              HealthCare Diagnostics and Drug discovery
            </Typography>
            <Typography>
              Developed a healthcare project using Python for disease prediction via decision trees, image segmentation with k-means clustering, and drug efficiency prediction using logistic regression.
            </Typography>
          </CardBody>
        </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10"
        >
        <div
          onClick={() => window.open("https://github.com/sivasanjeevs/RoboRoute", "_blank")}
          className="relative mt-6 w-full rounded-2xl border border-neutral-800 bg-gradient-to-br from-neutral-900/80 via-neutral-900/60 to-neutral-800/80 p-6 text-white shadow-[0_0_40px_rgba(24,24,27,0.9)] overflow-hidden transform transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[0_0_45px_rgba(34,211,238,0.6)] cursor-pointer"
        >
          <img
            src={roboImg}
            alt="RoboRoute Fleet Management System"
            className="w-full h-40 object-cover rounded-2xl mb-4"
          />
          <CardBody className="p-0">
            <Typography variant="h5" color="white" className="mb-4">
              RoboRoute
            </Typography>
            <Typography>
              Developed a Fleet Management System to coordinate multiple robots in a shared environment, featuring real-time visualization, traffic negotiation, and collision avoidance through an interactive GUI built using Python and Pygame, with A* algorithm implemented for efficient path planning.
            </Typography>
          </CardBody>
        </div>

        <div
          onClick={() => window.open("https://github.com/sivasanjeevs/X_Clone", "_blank")}
          className="relative mt-6 w-full rounded-2xl border border-neutral-800 bg-gradient-to-br from-neutral-900/80 via-neutral-900/60 to-neutral-800/80 p-6 text-white shadow-[0_0_40px_rgba(24,24,27,0.9)] overflow-hidden transform transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[0_0_45px_rgba(34,211,238,0.6)] cursor-pointer"
        >
          <img
            src={xcloneImg}
            alt="X Clone"
            className="w-full h-40 object-cover rounded-2xl mb-4"
          />
          <CardBody className="p-0">
            <Typography variant="h5" color="white" className="mb-4">
              X Clone
            </Typography>
            <Typography>
              Developed a feature-rich Twitter clone using the MERN stack with real-time updates via Socket.io, user authentication, social interactions, and responsive design, backed by scalable REST APIs on MongoDB and a dynamic React frontend with live data synchronization.
            </Typography>
          </CardBody>
        </div>

        <div
          onClick={() => window.open("https://github.com/sivasanjeevs/Spotify_Clone_Frontend", "_blank")}
          className="relative mt-6 w-full rounded-2xl border border-neutral-800 bg-gradient-to-br from-neutral-900/80 via-neutral-900/60 to-neutral-800/80 p-6 text-white shadow-[0_0_40px_rgba(24,24,27,0.9)] overflow-hidden transform transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[0_0_45px_rgba(34,211,238,0.6)] cursor-pointer"
        >
          <img
            src={spotifyImg}
            alt="Spotify Clone"
            className="w-full h-40 object-cover rounded-2xl mb-4"
          />
          <CardBody className="p-0">
            <Typography variant="h5" color="white" className="mb-4">
              Spotify Clone
            </Typography>
            <Typography>
              A Spotify clone using the MERN stack, replicating core features like music streaming, playlist management, and user authentication, closely mimicking the main functionalities and experience of Spotify’s platform.
            </Typography>
          </CardBody>
        </div>
      </motion.div>
      <div className="mt-12 flex justify-center">
        <Button
          onClick={() => window.open("https://github.com/sivasanjeevs", "_blank")}
          className="bg-transparent border border-cyan-400 text-cyan-300 px-6 py-2 rounded-full hover:bg-cyan-500 hover:text-black transition-colors"
        >
          More +
        </Button>
      </div>
    </div>
  );
};

export default Pro;
