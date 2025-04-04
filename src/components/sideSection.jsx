import React, { useContext, useState } from "react";
import logo from "../assets/images/samred.jpg";
import pdf from "../assets/images/Samr.pdf";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { GlobalContext } from "../context/contextApi";
import { useScroll } from "../context/ScrollContext";

const SideSection = () => {
  const { menu, setMenu, hide } = useContext(GlobalContext);
  const {
    scrollToSection,
    homeRef,
    projectRef,
    skillRef,
    expRef,
    contactRef,
    eduRef,
    dark,
  } = useScroll();

  const [selectedMenu, setSelectedMenu] = useState("Home");

  const navItems = [
    { name: "Home", ref: homeRef },
    { name: "Education", ref: eduRef },
    { name: "Experience", ref: expRef },
    { name: "Projects", ref: projectRef },
    { name: "Skills", ref: skillRef },
    { name: "Get in Touch", ref: contactRef },
  ];

  return (
    <div className={`md:flex ${hide ? "hidden" : "block"} md:block z-50`}>
      <motion.aside
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className={`fixed left-0 top-0 w-full md:w-[20vw] h-screen ${
          dark
            ? "bg-gradient-to-tr from-[#000000] via-[#101010] to-[#1a1a1a] text-white"
            : "bg-gray-100 text-black"
        } shadow-lg flex flex-col items-center py-8`}
      >
        {/* Profile Image */}

        <img
          className="rounded-full h-[150px] w-[150px] object-cover hover:scale-110 transition duration-500"
          src={logo}
          alt="Samar Abbas"
        />

        {/* Navigation Links */}
        <nav className="mt-6 w-full">
          <ul className="flex flex-col w-full text-center space-y-3">
            {navItems.map((item) => (
              <li
                key={item.name}
                onClick={() => {
                  setSelectedMenu(item.name);
                  scrollToSection(item.ref);
                }}
                className={`p-2 text-md w-full cursor-pointer transition-all duration-300 ${
                  selectedMenu === item.name
                    ? "text-blue-500 font-semibold  rounded-md dark:text-blue-800"
                    : "hover:bg-gray-200 dark:hover:bg-blue-100"
                }`}
              >
                {item.name}
              </li>
            ))}

            {/* CV Link */}
            <li className="p-3 text-md w-full transition-all duration-300 cursor-pointer hover:bg-gray-200 dark:hover:bg-slate-800">
              <a
                href={pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 underline dark:text-red-400"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>

        {/* Social Media Links */}
        <div className="flex space-x-5 mt-6">
          <a
            href="https://linkedin.com/in/samarabbas"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 text-2xl hover:scale-125 transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/samarabbas"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 dark:text-white text-2xl hover:scale-125 transition"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://twitter.com/samarabbas"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 text-2xl hover:scale-125 transition"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com/samarabbas"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 text-2xl hover:scale-125 transition"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://facebook.com/samarabbas"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 text-2xl hover:scale-125 transition"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
        </div>
      </motion.aside>
    </div>
  );
};

export default SideSection;
