import React, { useEffect } from "react";
import { useScroll } from "../context/ScrollContext";
import Projects_Section from "./Projects_Section";
import Skill from "./skills";
import { motion } from "framer-motion";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import Footer from "./footer";
import { ExperiencePage } from "./experiencePage";
import { ContactCard } from "./contactCard";
import EducationPage from "./education";

const Right = () => {
  const {
    homeRef,
    projectRef,
    skillRef,
    expRef,
    contactRef,
    eduRef,
    dark,
    setDark,
  } = useScroll();

  function toggleDarkMode() {
    const newMode = !dark;
    setDark(newMode);
    localStorage.setItem("mode", newMode ? "dark" : "light");
  }

  useEffect(() => {
    const storedMode = localStorage.getItem("mode");
    if (storedMode === "dark") {
      setDark(true);
    } else {
      setDark(false);
    }
  }, []);

  return (
    <div
      className={`main md:w-[80vw] w-full flex flex-col transition-all duration-300 pt-5 ${
        dark
          ? "bg-gradient-to-tr from-[#000000] via-[#101010] to-[#1a1a1a] text-white"
          : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* Theme Toggle */}
      <div className="flex justify-end items-center px-6 mb-2">
        <button
          onClick={toggleDarkMode}
          className="text-2xl transition-transform duration-300 hover:scale-110"
        >
          {dark ? <MdOutlineDarkMode /> : <MdOutlineLightMode />}
        </button>
      </div>

      {/* Intro */}
      <h1 className="text-3xl ml-8 md:ml-20 animate-fade-in" ref={homeRef}>
        👋 Hey there!
      </h1>

      <h1 className="md:text-5xl mt-2 text-4xl font-extrabold ml-8 md:ml-20">
        I'm <span className="text-blue-500">Samar Abbas</span>
      </h1>

      {/* Description */}
      <motion.p
        initial={{ x: 50 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, delay: 0.16 }}
        className="mt-6 ml-4 md:ml-16 leading-relaxed px-3 md:px-8 text-sm md:text-lg"
      >
        As a{" "}
        <b className={dark ? "text-white" : "text-stone-700"}>
          Software Engineer
        </b>
        , my goal is to design and develop efficient, scalable, and
        high-performance applications by leveraging my expertise in{" "}
        <b className={dark ? "text-white" : "text-stone-700"}>
          Data Structures & Algorithms (DSA)
        </b>{" "}
        and modern{" "}
        <b className={dark ? "text-white" : "text-stone-700"}>
          software development
        </b>
        . I strive to build robust, optimized solutions, enhance user
        experiences, and contribute to innovation in technology. Let's create
        impactful software together.
      </motion.p>

      {/* Sections */}
      <div ref={eduRef} className="ml-4 md:ml-16">
        <EducationPage />
      </div>
      <div ref={expRef} className="ml-4 md:ml-16">
        <ExperiencePage />
      </div>
      <div ref={projectRef} className="ml-4 md:ml-16">
        <Projects_Section />
      </div>
      <div ref={skillRef} className="ml-4 md:ml-16">
        <Skill />
      </div>

      {/* Contact */}
      <div ref={contactRef} className="mt-12 ml-4 md:ml-16">
        <ContactCard />
      </div>

      {/* Footer */}
      <div className="mt-12">
        <Footer />
      </div>
    </div>
  );
};

export default Right;
