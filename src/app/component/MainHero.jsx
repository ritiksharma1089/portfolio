'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function MainHero() {
  const [typingKey, setTypingKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTypingKey(prev => prev + 1);
    }, 4000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="d-flex flex-column justify-content-center align-items-center text-center bg-black text-white min-vh-100 px-3">

      <motion.h1
        className="display-1 fw-bold mb-3"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hii, I'm <span className="text-primary">Rijik</span>
      </motion.h1>

      <motion.p
        key={typingKey} 
        className="fs-4 text-secondary typewriter mb-5"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      >
        <span className="typing">Computer Science Student</span>
      </motion.p>

      <motion.div
        className="d-flex flex-wrap justify-content-center gap-3 mb-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <a
          href="#projects"
          className="btn btn-lg btn-primary rounded-pill px-4 shadow-sm"
        >
          🚀 View Projects
        </a>
        <a
          href="#contact"
          className="btn btn-lg btn-light text-dark rounded-pill px-4 shadow-sm"
        >
          ✉️ Contact
        </a>
      </motion.div>

      <motion.div
        className="d-flex gap-3"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
      >
        <a
          href="https://github.com/ritiksharma1089"
          target="_blank"
          className="btn btn-outline-light btn-lg rounded-pill d-flex align-items-center gap-2 px-4"
        >
          <FaGithub size={20} />
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/rijik-sharma-a0965a256/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          className="btn btn-outline-primary btn-lg rounded-pill d-flex align-items-center gap-2 px-4"
        >
          <FaLinkedin size={20} />
          LinkedIn
        </a>
      </motion.div>
      <style jsx>{`
        .typewriter .typing {
          display: inline-block;
          border-right: 2px solid rgba(255, 255, 255, 0.75);
          white-space: nowrap;
          overflow: hidden;
          animation: typing 3s steps(30, end), blink 0.75s step-end infinite;
        }

        @keyframes typing {
          from {
            width: 0;
          }
          to {
            width: 21ch;
          }
        }

        @keyframes blink {
          50% {
            border-color: transparent;
          }
        }
      `}</style>
    </section>
  );
}
