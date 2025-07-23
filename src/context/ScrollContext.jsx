import { createContext, useContext, useState, useRef } from "react";

const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const homeRef = useRef(null);
  const projectRef = useRef(null);
  const skillRef = useRef(null);
  const expRef = useRef(null);
  const contactRef = useRef(null);
  const eduRef = useRef(null);

  const [dark, setDark] = useState(false);

  const scrollToSection = (sectionRef) => {
    if (sectionRef && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <ScrollContext.Provider
      value={{
        homeRef,
        projectRef,
        skillRef,
        expRef,
        contactRef,
        eduRef,
        scrollToSection,
        dark,
        setDark,
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => useContext(ScrollContext);
