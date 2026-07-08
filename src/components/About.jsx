import aboutImg from "../assets/WhatsApp Image 2026-07-04 at 7.21.07 PM.jpeg";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const ABOUT_PARAGRAPHS = [
  <>
    Hi, I'm <span className="font-medium text-apple-text">Sivasanjeev</span>, a Theoretical Computer Science student at PSG College of Technology. I'm passionate about building clean, user-focused digital experiences that bridge complex algorithms with practical full-stack web development.
  </>,
  "I recently completed a two-month summer internship as an AI Engineer at Ashtayah Labs, where I focused on developing intelligent invoice processing systems and automation tools. Prior to that, I spent six months as an R&D Intern at GOAT Robotics, contributing to robotics map editing tools, visualization dashboards, and multi-agent pathfinding systems for coordinated robot fleets.",
  "Outside of software engineering, I have a strong interest in visual design. I frequently create logos, posters, and event branding for college initiatives, focusing on functional aesthetics. I also enjoy singing and drawing, which help me maintain a balanced and creative perspective in my technical work.",
];

const About = () => {
  return (
    <section className="section-padding border-t border-apple-border">
      <div className="section-container">
        <SectionHeader
          eyebrow="About"
          title="Building with purpose."
          subtitle="Algorithms, full-stack development, and thoughtful design — combined into work that feels simple and intentional."
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
