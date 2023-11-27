import "./styles.css";
import { motion } from "framer-motion";
import React from 'react'

export default function App() {
  return (
    <motion.div
      className="box"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    />
  );
}
