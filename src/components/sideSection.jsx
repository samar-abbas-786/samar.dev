import React, { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaDownload,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/images/samred.jpg";
import pdf from "../assets/images/samar-resume-3.pdf";

import { useScroll } from "../context/ScrollContext";

const TopNav = () => {
  const {
    dark,
    setDark,
    scrollToSection,
    homeRef,
    projectRef,
    skillRef,
    expRef,
    contactRef,
    eduRef,
  } = useScroll();

  const [selectedMenu, setSelectedMenu] = useState("Home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    const newMode = !dark;
    setDark(newMode);
    localStorage.setItem("mode", newMode ? "dark" : "light");
    document.documentElement.classList.toggle("dark", newMode);
  };

  const navItems = [
    { name: "Home", ref: homeRef },
    { name: "Education", ref: eduRef },
    { name: "Experience", ref: expRef },
    { name: "Projects", ref: projectRef },
    { name: "Skills", ref: skillRef },
    { name: "Get in Touch", ref: contactRef },
  ];

  const socialLinks = [
    {
      href: "https://linkedin.com/in/samar-abbas-a1ab4625a",
      icon: FaLinkedin,
      color: "text-blue-700",
      label: "LinkedIn",
    },
    {
      href: "https://github.com/samar-abbas-786",
      icon: FaGithub,
      color: dark ? "text-white" : "text-gray-900",
      label: "GitHub",
    },
    {
      href: "https://leetcode.com/u/samar_abbas_786/",
      icon: SiLeetcode,
      color: dark ? "text-yellow-500" : "text-yellow-500",
      label: "Leetcode",
    },
    {
      href: "https://x.com/SamarAb65178114",
      icon: FaTwitter,
      color: "text-blue-500",
      label: "Twitter",
    },
    {
      href: "https://instagram.com/samar_abbas_786",
      icon: FaInstagram,
      color: "text-pink-600",
      label: "Instagram",
    },
    {
      href: "https://www.facebook.com/samar.naqvi.568/",
      icon: FaFacebook,
      color: "text-blue-600",
      label: "Facebook",
    },
  ];

  const handleNavClick = (item) => {
    setSelectedMenu(item.name);
    scrollToSection(item.ref);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-4 left-4 right-4 z-50 backdrop-blur-xl border transition-all duration-500 ${
          dark
            ? "bg-black/30 border-white/20 text-white shadow-2xl shadow-black/30"
            : "bg-white/40 border-gray-300/30 text-black shadow-md shadow-gray-200"
        } rounded-2xl`}
      >
        <div className="flex items-center justify-between px-4 py-3 md:px-6">
          {/* Profile */}
          <motion.div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Samar Abbas"
              className="h-12 w-12 rounded-full object-cover ring-2 ring-blue-500/50"
            />
            <div className="hidden md:block">
              <h2 className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Samar Abbas
              </h2>
              <p
                className={`text-xs ${
                  dark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Full Stack Developer
              </p>
            </div>
          </motion.div>

          {/* Navigation */}
          <nav className="hidden lg:flex gap-2 items-center">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => handleNavClick(item)}
                className={`px-3 py-2 text-sm rounded-lg font-medium transition-all ${
                  selectedMenu === item.name
                    ? dark
                      ? "bg-blue-600/30 text-blue-200 shadow shadow-blue-500/30"
                      : "bg-blue-100 text-blue-700 shadow shadow-blue-200"
                    : dark
                    ? "hover:bg-white/10"
                    : "hover:bg-gray-100"
                }`}
                whileHover={{ scale: 1.05 }}
              >
                {item.name}
              </motion.button>
            ))}
            <a
              href={pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 px-4 py-2 text-xs flex items-center gap-1 rounded-xl bg-gradient-to-r from-red-500 to-red-600 text-white font-medium hover:from-red-600 hover:to-red-700 transition shadow-md"
            >
              <FaDownload />
              Resume
            </a>
          </nav>

          {/* Social Icons */}
          <div className="hidden md:flex gap-2 items-center">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-full ${link.color} text-xl hover:scale-125 transition`}
                  whileHover={{ rotate: 360 }}
                >
                  <Icon />
                </motion.a>
              );
            })}
          </div>

          {/* Dark Mode Toggle */}
          <motion.button
            onClick={toggleDarkMode}
            className={`ml-2 p-3 rounded-xl transition ${
              dark ? "bg-white/10 text-yellow-400" : "bg-black/10 text-gray-800"
            } hover:scale-110`}
            whileHover={{ rotate: 180 }}
            aria-label="Toggle Dark Mode"
          >
            {dark ? <MdOutlineDarkMode /> : <MdOutlineLightMode />}
          </motion.button>

          {/* Mobile Menu */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              className={`absolute right-0 top-0 h-full w-64 pt-24 px-5 ${
                dark ? "bg-gray-900 text-white" : "bg-white text-black"
              }`}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-xl font-semibold mb-4"></h3>
              <div className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item)}
                    className={`px-4 py-2 rounded-md text-left ${
                      selectedMenu === item.name
                        ? dark
                          ? "bg-purple-700 text-white"
                          : "bg-blue-100 text-purple-800"
                        : dark
                        ? "hover:bg-white/10"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
                <a
                  href={pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 mt-4 rounded-md bg-red-600 text-white font-medium"
                >
                  <FaDownload />
                  Download Resume
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer to prevent content hiding behind header */}
      <div className="h-24"></div>
    </>
  );
};

export default TopNav;
