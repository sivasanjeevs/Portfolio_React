import React from 'react'
import { Card, CardBody, CardFooter, Typography, Button } from "@material-tailwind/react";
import { motion } from "framer-motion";

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
        className="my-20 text-center text-4xl text-white"
      >
       Academic Projects
      </motion.h1>
      <motion.div
             whileInView={{opacity: 1, x: 0}}
             initial={{opacity: 0, x: -100}}
             transition={{duration: 1}}
          className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10">

        <div className="relative mt-6 w-full rounded-2xl p-6 bg-gradient-to-br from-black to-gray-800 shadow-lg text-white overflow-hidden transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-none">
          <CardBody>
            <Typography variant="h5" color="white" className="mb-2">
              Simple Remote Desktop
            </Typography>
            <Typography>
            A remote desktop application created with Python’s socket programming and Tkinter for GUI, allowing users to access and control a remote system effortlessly.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0 text-center">
            <Button
              className="mt-4 bg-gradient-to-r from-blue-700 to-purple-600 text-white rounded-md px-4 py-2 hover:from-blue-800 hover:to-purple-700 focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 active:shadow-md active:shadow-blue-500/50"
            >
              Link!
            </Button>
          </CardFooter>
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

        <div className="relative mt-6 w-full rounded-2xl p-6 bg-gradient-to-br from-black to-gray-800 shadow-lg text-white overflow-hidden transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-none">
          <CardBody>
            <Typography variant="h5" color="white" className="mb-2">
              Car Rental System
            </Typography>
            <Typography>
            A console-based car rental system built in C++, featuring separate authentication for admin and users. It allows admins to manage car listings, while users can rent cars and view available options.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0 text-center">
            <Button
              className="mt-4 bg-gradient-to-r from-blue-700 to-purple-600 text-white rounded-md px-4 py-2 hover:from-blue-800 hover:to-purple-700 focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 active:shadow-md active:shadow-blue-500/50"
            >
              Link!
            </Button>
          </CardFooter>
        </div>
        <div className="relative mt-6 w-full rounded-2xl p-6 bg-gradient-to-br from-black to-gray-800 shadow-lg text-white overflow-hidden transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-none">
          <CardBody>
            <Typography variant="h5" color="white" className="mb-2">
              HealthCare Diagnostics and Drug discovery
            </Typography>
            <Typography>
            Developed a healthcare project using Python for disease prediction via decision trees, image segmentation with k-means clustering, and drug efficiency prediction using logistic regression.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0 text-center">
            <Button
              className="mt-4 bg-gradient-to-r from-blue-700 to-purple-600 text-white rounded-md px-4 py-2 hover:from-blue-800 hover:to-purple-700 focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 active:shadow-md active:shadow-blue-500/50"
            >
              Link!
            </Button>
          </CardFooter>
        </div>
        </motion.div>
        <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl text-white"
      >
       Non - Academic Projects
      </motion.h1>
        <motion.div
            whileInView={{opacity: 1, x: 0}}
            initial={{opacity: 0, x: 100}}
            transition={{duration: 1}}
            className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10'>
        <div className="relative mt-6 w-full rounded-2xl p-6 bg-gradient-to-br from-black to-gray-800 shadow-lg text-white overflow-hidden transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-none">
          <CardBody>
            <Typography variant="h5" color="white" className="mb-2">
              Twitter Clone
            </Typography>
            <Typography>
            A Twitter clone built using the MERN stack, replicating core features like user authentication, real-time tweets, and social interactions. Users can post, like, and comment on tweets..
            </Typography>
          </CardBody>
          <CardFooter className="pt-0 text-center">
            <Button
              className="mt-4 bg-gradient-to-r from-blue-700 to-purple-600 text-white rounded-md px-4 py-2 hover:from-blue-800 hover:to-purple-700 focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 active:shadow-md active:shadow-blue-500/50"
            >
              Link!
            </Button>
          </CardFooter>
        </div>

        <div className="relative mt-6 w-full rounded-2xl p-6 bg-gradient-to-br from-black to-gray-800 shadow-lg text-white overflow-hidden transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-none">
          <CardBody>
            <Typography variant="h5" color="white" className="mb-2">
              Spotify Clone
            </Typography>
            <Typography>
            A Spotify clone using the MERN stack ,replicating core features like music streaming, playlist management , and user authentication. It mimics the main functionalities of Spotify’s platform.         
            </Typography>
          </CardBody>
          <CardFooter className="pt-0 text-center">
            <Button
              className="mt-4 bg-gradient-to-r from-blue-700 to-purple-600 text-white rounded-md px-4 py-2 hover:from-blue-800 hover:to-purple-700 focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 active:shadow-md active:shadow-blue-500/50"
            >
             Link!
            </Button>
          </CardFooter>
        </div>

        <div className="relative mt-6 w-full rounded-2xl p-6 bg-gradient-to-br from-black to-gray-800 shadow-lg text-white overflow-hidden transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-none">
          <CardBody>
            <Typography variant="h5" color="white" className="mb-2">
              Portfolio
            </Typography>
            <Typography>
            A personal portfolio built using React and styled with Tailwind CSS, showcasing my skills, projects, and accomplishments in web development.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0 text-center">
            <Button
              className="mt-4 bg-gradient-to-r from-blue-700 to-purple-600 text-white rounded-md px-4 py-2 hover:from-blue-800 hover:to-purple-700 focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 active:shadow-md active:shadow-blue-500/50"
            >
             Link!
            </Button>
          </CardFooter>
        </div>
      </motion.div>
    </div>
  );
};

export default Pro;
