import aboutImg from "../assets/WhatsApp Image 2026-07-04 at 7.21.07 PM.jpeg";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const ABOUT_PARAGRAPHS = [
  <>
    I'm <span className="font-medium text-apple-text">Sivasanjeev</span>, a Theoretical Computer Science student at PSG College of Technology. I focus on building efficient, user-centric software.
  </>,
  "Previously, I worked as an AI Engineer intern at Ashtayah Labs developing document automation tools, and as an R&D intern at GOAT Robotics building multi-agent pathfinding systems for robot fleets.",
  <>
    I also have a strong interest in research. My work on &quot;Implicit Dehazing in Feature Space: A Single-Stage Architecture for Autonomous Vehicle Perception&quot; was published as a chapter in the book <span className="italic text-apple-text">Generative AI and Cloud Ecosystems for Mobility Application</span>.
  </>,
  "Beyond engineering, I enjoy visual design creating logos and branding. Off-screen, I spend my downtime drawing and singing.",
];

const About = () => {
  return (
    <section className="section-padding border-t border-apple-border">
      <div className="section-container">
        <SectionHeader
          eyebrow="About"
          title="Keep it simple."
          subtitle="Algorithms, Software development, and thoughtful design."
          align="left"
        />

        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="order-2 flex justify-center lg:order-1"
          >
            <div className="about-blob-wrap">
              <div className="about-blob-glow" />
              <img
                src={aboutImg}
                alt="Sivasanjeev"
                className="about-blob-photo"
              />
            </div>
          </motion.div>

          <div className="order-1 space-y-6 lg:order-2">
            {ABOUT_PARAGRAPHS.map((text, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="text-base leading-relaxed text-apple-muted md:text-lg"
              >
                {text}
              </motion.p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
