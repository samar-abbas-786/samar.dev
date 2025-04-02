import React, { useContext, useState } from "react";
import logo from "../assets/images/samf.jpg";
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
      <motion.div
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="fixed left-0 top-0 w-full md:w-[20vw] h-screen bg-gray-100 shadow-lg flex flex-col items-center py-8"
      >
        {/* Profile Image */}
        <img
          className="rounded-full h-[150px] w-[150px] object-cover hover:scale-110 transition duration-500"
          src={logo}
          alt="Profile"
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
                className={`p-1 text-md w-full transition-all duration-300 cursor-pointer ${
                  selectedMenu === item.name
                    ? "text-blue-500 rounded-lg font-semibold"
                    : "hover:bg-gray-200 text-black"
                }`}
              >
                {item.name}
              </li>
            ))}

            {/* CV Link */}
            <li className="p-3 text-lg w-full transition-all duration-300 cursor-pointer hover:bg-gray-200">
              <a
                href="/Samar Abbas resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-700 underline"
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
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/samarabbas"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 text-2xl hover:scale-125 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://twitter.com/samarabbas"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 text-2xl hover:scale-125 transition"
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com/samarabbas"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 text-2xl hover:scale-125 transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://facebook.com/samarabbas"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 text-2xl hover:scale-125 transition"
          >
            <FaFacebook />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default SideSection;
