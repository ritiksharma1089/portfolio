'use client'; 

import { motion } from 'framer-motion';

export default function RijikHeader() {
  return (
    <header className="">
      <div className="d-flex flex-column align-items-center text-center">
        <motion.h3
          className=" fw-bold text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="text-primary">RIJIK</span>{' '}
          <span className="text-light">SHARMA</span>
        </motion.h3>

       
      </div>
    </header>
  );
}

