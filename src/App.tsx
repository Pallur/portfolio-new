import "./styles.css";
import { motion } from "framer-motion";

export default function App() {
    return (
      <>
        <motion.div
          className="box"
          animate={{
            scale: [2, 3, 3, 2, 2],
            rotate: [0, 0, 180, 180, 0],
            borderRadius: ["5%", "5%", "50%", "50%", "5%"]
          }}
          transition={{
            duration: 5,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 1
          }}
        />
      </>
    );
  }