import React, { createContext, useContext, useRef } from "react";

const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const homeRef = useRef(null);
  const projectRef = useRef(null);
  const skillRef = useRef(null);
  const expRef = useRef(null);
  const contactRef = useRef(null);
  const eduRef = useRef(null);



  const scrollToSection = (sectionRef) => {
    if (sectionRef && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <ScrollContext.Provider
      value={{ homeRef, projectRef, skillRef, expRef,contactRef,eduRef, scrollToSection }}
    >
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => useContext(ScrollContext);
