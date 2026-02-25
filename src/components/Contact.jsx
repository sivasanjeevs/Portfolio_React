import { CONTACT } from '../constants';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className='border-b border-neutral-900 pb-24'>
      <h1 className='my-10 text-center text-4xl'>Get in Touch :)</h1>
      <div className='text-center tracking-tighter'>
        <p className='my-4'>{CONTACT.phoneNo}</p>
        <a 
          href={`mailto:${CONTACT.email}`} 
          className='block my-2 text-blue-400 underline hover:text-blue-300'
        >
          {CONTACT.email}
        </a>

        <div className="mt-8 flex items-center justify-center gap-8 text-3xl">
          <a
            href="https://www.linkedin.com/in/sivasanjeev-s-02931b282/"
            target="_blank"
            rel="noreferrer"
            className="text-neutral-200 hover:text-cyan-300 transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/sivasanjeevs"
            target="_blank"
            rel="noreferrer"
            className="text-neutral-200 hover:text-cyan-300 transition-colors"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
