import { motion } from "framer-motion";
import React, { useState, useRef } from "react";
import useScrollSpy from "react-use-scrollspy";

const links = [
  { label: "Home", url: "home" },
  { label: "About", url: "about" },
  { label: "Contact", url: "contact" }
];

const active = {
  color: "white"
};

const inactive = {
  color: "black"
};

const NavBar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = [useRef(null), useRef(null), useRef(null)];

  const activeSection = useScrollSpy({
    sectionElementRefs: sectionRefs,
    offsetPx: -80
  });

  return (
    <>
      <div id="root-home">
        <div id="home">
          <h1 id="intro">Hello!</h1>
          <h1>My name is 
              <motion.h1 whileHover={{ rotate: [0, -2, 0, 2, 0] }}> 
                  Páll [paʊ̯l] 
              </motion.h1>
              but please call me 
              <motion.h1 whileHover={{ rotate: [0, 2, 0, -2, 0] }}> 
                  Palli [ˈpalɪ]
              </motion.h1>
            </h1>
        </div>
      </div>
      <div className="App">
        <nav>
          <motion.ul 
          transition={{ 
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 1
            }}>
            {links.map(({ label, url }, index) => {
              const isActive = index === activeIndex;

              return (
                <motion.li key={index} onClick={() => setActiveIndex(index)}>
                  <motion.a href={"#" + url}
                  whileHover={{ rotate: [0, 2, 0, -2, 0], scale: 1.2 }}
                  transition={{ duration: 0.5 }}>
                    {isActive ? (
                      <motion.span layoutId="shadow" className="shadow" />
                    ) : null}
                    <span style={isActive ? active : inactive}>{label}</span>
                  </motion.a>
                </motion.li>
              );
            })}
          </motion.ul>
        </nav>
    </div>
    </>
  );
};

export default NavBar;
