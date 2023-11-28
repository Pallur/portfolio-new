import "./styles.css";
import { motion } from "framer-motion";

export default function App() {
  return (
    <motion.div
      animate={{
        scale: [10, 20, 20, 10, 10],
        rotate: [0, 0, 270, 270, 0],
        borderRadius: ["20%", "20%", "50%", "50%", "20%"]
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        repeat: Infinity,
        repeatDelay: 1
      }}
    />
  );
}
