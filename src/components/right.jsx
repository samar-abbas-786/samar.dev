import React from "react";
import { useScroll } from "../context/ScrollContext";
import Projects_Section from "./Projects_Section";
import Contact from "./contact";
import Skill from "./skills";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import Footer from "./footer";
import { ExperiencePage } from "./experiencePage";
import { ContactCard } from "./contactCard";
import EducationPage from "./education";
import logo from "../assets/images/samred.jpg";

const Right = () => {
  const { homeRef, projectRef, skillRef, expRef, contactRef, eduRef } =
    useScroll();

  return (
    <div className="main md:w-[80vw] w-full flex flex-col bg-gray-100 pt-5">
      {/* Intro Section */}
      <h1 className="text-3xl ml-8 md:ml-20 animate-fade-in" ref={homeRef}>
        👋 Hey there!
      </h1>

      <h1 className="md:text-5xl mt-2 text-4xl font-extrabold ml-8 md:ml-20">
        I'm <span className="text-blue-500">Samar Abbas</span>
      </h1>

      {/* Profile Image - Responsive & Animated
      <motion.img
        src={logo} // 🔁 Replace with your actual image path
        alt="Samar Abbas"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover mt-6 mx-auto md:mx-20"
      /> */}

      {/* Description */}
      <motion.p
        initial={{ x: 50 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, delay: 0.16 }}
        className="mt-6 ml-4 md:ml-16 leading-relaxed px-3 md:px-8 text-sm md:text-lg"
      >
        As a <b className="text-stone-700">Software Engineer</b>, my goal is to
        design and develop efficient, scalable, and high-performance
        applications by leveraging my expertise in{" "}
        <b className="text-stone-700">Data Structures & Algorithms (DSA)</b> and
        modern <b className="text-stone-700">software development</b>. I strive
        to build robust, optimized solutions, enhance user experiences, and
        contribute to innovation in technology. Let's create impactful software
        together.
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
