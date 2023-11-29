import "./styles.css";
import { motion } from "framer-motion";
import { InfoElement } from "./components/Info";

export const MainToggle = ({ toggle }: any) => (
    <button className="mainButton" onClick={toggle}>
        
    </button>
  );

export default function App() {
    return (
      <>
        <InfoElement />
        <MainToggle />
        <motion.div
          className="box"
          animate={{
            opacity: 1,
            scale: [2, 3, 3, 2, 2],
            rotate: [0, 0, 180, 180, 0],
            borderRadius: ["5%", "5%", "50%", "50%", "5%"]
          }}
          transition={{
            duration: 5,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeatDelay: 1
          }}
        />
      </>
    );
  }