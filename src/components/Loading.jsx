// Loading.js

import React from 'react';
import '../styles.css';
import { motion } from "framer-motion";

const Loading = () => {
  return <div className="loading">
    <motion.div
      className="box"
      animate={{
        scale: [1, 2, 2, 1, 10, 50, 100],
        rotate: [0, 0, 180, 180, 0, 0, 0],
        borderRadius: ["10%", "10%", "50%", "50%", "10%"]
      }}
      transition={{
        duration: 3,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        repeatDelay: 1
      }}
    />
    
  </div>;
};

export default Loading;
