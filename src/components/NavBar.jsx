import { motion } from "framer-motion";
import React, { useState, useRef } from "react";
import useScrollSpy from "react-use-scrollspy";

const links = [
  { label: "Home", url: "home" },
  { label: "About", url: "about" },
  { label: "Blog", url: "blog" },
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
      <div id="home" className="App">
        <nav>
          <motion.ul>
            {links.map(({ label, url }, index) => {
              const isActive = index === activeIndex;

              return (
                <motion.li key={index} onClick={() => setActiveIndex(index)}>
                  <a href={"#" + url}>
                    {isActive ? (
                      <motion.span layoutId="shadow" className="shadow" />
                    ) : null}
                    <span style={isActive ? active : inactive}>{label}</span>
                  </a>
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
