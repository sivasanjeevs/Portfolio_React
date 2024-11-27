import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

import { MdLibraryMusic } from "react-icons/md";
import { GiLaptop } from "react-icons/gi";
import { FaClapperboard } from "react-icons/fa6";
import { FaGlobe } from "react-icons/fa";


export const HERO_CONTENT = `I am passionate about web development, software development, and UI/UX design. I aspire to become a skilled full-stack developer and strive to create comprehensive and efficient solutions. My focus is on building user-centric applications that combine robust functionality with intuitive design.`;

export const ABOUT_TEXT = `Hi, I'm Sivasanjeev, a Theoretical Computer Science student at PSG College of Technology with a passion for software development, full-stack web development, and UI/UX design. I work with technologies like C, C++, Python, R, Java, HTML, CSS, JavaScript, React, and MySQL to build efficient applications and user-friendly web solutions.

I also have a creative side, using Figma and Adobe tools like Photoshop and Illustrator to design posters, logos, and other visual assets. My designs have been featured in various college events, showcasing a blend of creativity and functionality.\n

In addition to my technical and design skills, I enjoy singing and exploring ways to combine innovation and artistry, aiming to create impactful and aesthetically pleasing projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "Remote Desktop",
    image: GiLaptop,
    description:
      "Developed a simple remote desktop application using socket programming, allowing users to access and control one laptop's desktop from another. The application provides basic remote connectivity functionality.",
    technologies: ["Python", "Socket Programing", "Tkinter"],
  },
  {
    title: "Cinepix",
    image: FaClapperboard,
    description:
      "Developed a movie recommendation system using a trie data structure for efficient storage and retrieval of movie titles. Designed to deliver fast and accurate suggestions based on user input.",
    technologies: ["HTML", "CSS", "JavaScript", "Trie Datastructure"],
  },
  {
    title: "Portfolio Website",
    image: FaGlobe,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React", "TailwindCSS"],
  },
  {
    title: "Scubify",
    image: MdLibraryMusic,
    description:
      "Developed a music player in Java with a user-friendly GUI built using AWT and Swing. Integrated file handling to efficiently store and manage songs.",
    technologies: ["Java", "Java awt", "Java swing"],
  },
];

export const CONTACT = {
  phoneNo: "+91 8248701239",
  email: "sivasanjeevs66@gmail.com",
};
