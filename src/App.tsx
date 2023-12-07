import "./styles.css";
import { motion, useScroll } from "framer-motion";
import NavBar from "./components/NavBar";

export default function App() {
    return (
        <>
          <NavBar />
          <div id="about"></div>
          <div id="blog"></div>
          <div id="contact"></div>
      </>
    );
  }
