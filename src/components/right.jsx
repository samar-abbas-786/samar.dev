import React from "react";
import { useScroll } from "../context/ScrollContext";
import Projects_Section from "./Projects_Section";
import Contact from "./contact";
import Skill from "./skills";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone } from "react-icons/fa"; // Importing icons
import Footer from "./footer";
import { ExperiencePage } from "./experiencePage";
import { ContactCard } from "./contactCard";
import EducationPage from "./education";

const Right = () => {
  const { homeRef, projectRef, skillRef, expRef, contactRef, eduRef } =
    useScroll();

  return (
    <div className="main md:w-[80vw] w-full flex flex-col bg-gray-100 pt-5">
      <h1 className="text-3xl ml-8 md:ml-20" ref={homeRef}>
        Hello Everyone!👋
      </h1>
      <h1 className="md:text-4xl   mt-3 text-3xl font-bold ml-8 md:ml-20">
        I'm SAMAR ABBAS
      </h1>
      <motion.p
        initial={{ x: 50 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, delay: 0.16 }}
        className="mt-6 ml-4 md:ml-16 leading-relaxed px-3 md:px-8 text-lg"
      >
        As a <b className="text-stone-700">Software Engineer</b>, my goal is to
        design and develop efficient, scalable, and high-performance
        applications by leveraging my expertise in{" "}
        <b className="text-stone-700">Data Structures & Algorithms (DSA)</b> and
        modern software development. I strive to build robust, optimized
        solutions, enhance user experiences, and contribute to innovation in
        technology. Let's create impactful software together.
      </motion.p>
      {/* <div className="flex gap-6 mt-6 ml-4 md:ml-16">
        {/* Resume Download Button */}
      {/* <a
          href="/Samar_Abbas_Resume.pdf" // Update with actual resume link
          download
          className="px-6 py-3  bg-slate-950 text-white font-semibold rounded-lg shadow-md hover:bg-slate-700 transition duration-300"
        >
          📄 Resume Download
        </a>

        {/* Let's Connect Button */}
      {/* <a
        href="#contact" // Update with actual section or link
        className="px-6 py-3 bg-slate-900 text-white font-semibold rounded-lg shadow-md hover:bg-slate-700 transition duration-300"
      >
        🔗 Let's Connect
      </a> */}
      {/* </div> */}

      {/* Contact Information */}
      {/* <div className="flex flex-col sm:flex-row items-start gap-6 ml-8 md:ml-16 mt-1 rounded-lg  w-fit">
        <div className="flex items-center gap-3">
          <FaEnvelope className="text-blue-600 text-xl" />
          <a
            href="mailto:samarabbas@example.com"
            className="text-gray-800 font-medium hover:underline"
          >
            samarabbas@example.com
          </a>
        </div>
        <div className="flex items-center gap-3">
          <FaPhone className="text-green-600 text-xl" />
          <a
            href="tel:+1234567890"
            className="text-gray-800 font-medium hover:underline"
          >
            +123 456 7890
          </a>
        </div>
      </div> */}

      <div ref={eduRef} className=" ml-4 md:ml-16">
        <EducationPage />
      </div>
      <div ref={expRef} className="  ml-4 md:ml-16">
        <ExperiencePage />
      </div>
      <div ref={projectRef} className="  ml-4 md:ml-16">
        <Projects_Section />
      </div>

      <div ref={skillRef} className="  ml-4 md:ml-16">
        <Skill />
      </div>

      <div ref={contactRef} className="mt-12 ml-4 md:ml-16">
        <ContactCard />
      </div>

      <div className="mt-12">
        <Footer />
      </div>
    </div>
  );
};

export default Right;
