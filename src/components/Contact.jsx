import { CONTACT } from "../constants";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const Contact = () => {
  return (
    <section className="section-padding border-t border-apple-border">
      <div className="section-container">
        <SectionHeader
          eyebrow="Contact"
          title="Let's connect."
          subtitle="Open to collaborations, research discussions, and interesting projects."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto flex max-w-lg flex-col items-center mt-12 w-full"
        >
          <div className="w-full rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden">
            {/* Subtle glow behind the form */}
            <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-blue-500/20 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-purple-500/20 blur-3xl pointer-events-none" />
            
            <form 
              action={`https://formsubmit.co/${CONTACT.email}`} 
              method="POST"
              className="relative z-10 w-full space-y-5"
            >
              {/* Disable captcha for smoother UX */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_subject" value="New submission from your Portfolio!" />
              
              <div className="flex flex-col gap-5 sm:flex-row">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-apple-text outline-none transition-all placeholder:text-apple-muted focus:border-white/30 focus:bg-white/10 focus:ring-4 focus:ring-white/5"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-apple-text outline-none transition-all placeholder:text-apple-muted focus:border-white/30 focus:bg-white/10 focus:ring-4 focus:ring-white/5"
                />
              </div>
              <textarea
                name="message"
                rows="4"
                placeholder="Your Message"
                required
                className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-apple-text outline-none transition-all placeholder:text-apple-muted focus:border-white/30 focus:bg-white/10 focus:ring-4 focus:ring-white/5"
              />
              <button
                type="submit"
                className="btn-glass w-full py-4 text-base tracking-wide"
              >
                Send Message
              </button>
            </form>
          </div>
          
          <p className="mt-8 text-base text-apple-muted font-medium">{CONTACT.phoneNo}</p>

          <div className="mt-8 flex items-center gap-8">
            <a
              href="https://www.linkedin.com/in/sivasanjeev-s-02931b282/"
              target="_blank"
              rel="noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-apple-border text-xl text-apple-muted transition-all hover:border-white/20 hover:text-apple-text"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/sivasanjeevs"
              target="_blank"
              rel="noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-apple-border text-xl text-apple-muted transition-all hover:border-white/20 hover:text-apple-text"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
          </div>
        </motion.div>

        <footer className="mt-24 border-t border-apple-border pt-8 text-center">
          <p className="text-xs text-apple-muted">
            © {new Date().getFullYear()} Sivasanjeev S. All rights reserved.
          </p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
