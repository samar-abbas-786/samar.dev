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
import pdf from "../assets/images/samar_resume.pdf";

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
    { name: "Projects", ref: projectRef },
    { name: "Education", ref: eduRef },
    { name: "Experience", ref: expRef },
    { name: "Skills", ref: skillRef },
    { name: "Get in Touch", ref: contactRef },
  ];

  const handleNavClick = (item) => {
    setSelectedMenu(item.name);
    scrollToSection(item.ref);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-4 left-4 right-4 z-50 backdrop-blur-xl border transition-all duration-500 group ${
          dark
            ? "bg-gradient-to-r from-zinc-900/80 to-zinc-900/60 border-purple-500/30 hover:border-purple-400/60 text-white shadow-2xl shadow-purple-900/30"
            : "bg-gradient-to-r from-white/80 to-white/60 border-gray-300/40 hover:border-blue-400/40 text-black shadow-lg shadow-blue-200/20"
        } rounded-2xl`}
      >
        <div className="flex items-center justify-between px-4 py-3 md:px-6">
          {/* Profile */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 cursor-pointer"
          >
            <motion.img
              src={logo}
              alt="Samar Abbas"
              className="h-12 w-12 rounded-full object-cover ring-2 ring-blue-500/50 hover:ring-purple-500/80 transition-all"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.8 }}
            />
            <div className="hidden md:block">
              <h2
                className={`text-lg font-bold bg-gradient-to-r ${
                  dark
                    ? "from-blue-400 to-purple-400"
                    : "from-blue-600 to-purple-600"
                } bg-clip-text text-transparent`}
              >
                Samar Abbas
              </h2>
              <p
                className={`text-xs font-medium ${
                  dark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Full Stack Developer
              </p>
            </div>
          </motion.div>

          {/* Navigation */}
          <nav className="hidden lg:flex gap-1 items-center">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => handleNavClick(item)}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 text-sm rounded-lg font-semibold transition-all duration-300 ${
                  selectedMenu === item.name
                    ? dark
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-purple-500/50"
                      : "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-400/50"
                    : dark
                      ? "text-gray-300 hover:bg-white/10 hover:text-white"
                      : "text-gray-700 hover:bg-gray-200/50 hover:text-gray-900"
                }`}
              >
                {item.name}
              </motion.button>
            ))}
            <motion.a
              href={pdf}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="ml-4 px-4 py-2 text-xs flex items-center gap-2 rounded-xl bg-gradient-to-r from-red-500 via-red-600 to-red-700 text-white font-bold hover:from-red-600 hover:via-red-700 hover:to-red-800 transition-all shadow-lg shadow-red-500/40 hover:shadow-red-500/60"
            >
              <FaDownload size={14} />
              Resume
            </motion.a>
          </nav>

          {/* Dark Mode Toggle */}
          <motion.button
            onClick={toggleDarkMode}
            className={`ml-4 p-3 rounded-xl transition-all duration-300 ${
              dark
                ? "bg-gradient-to-br from-zinc-800 to-zinc-900 text-yellow-400 hover:from-yellow-600/20 hover:to-yellow-600/10 border border-yellow-500/20"
                : "bg-gradient-to-br from-blue-100 to-purple-100 text-blue-600 hover:from-blue-200 hover:to-purple-200 border border-blue-300/50"
            } hover:scale-110 shadow-md`}
            whileHover={{ rotate: 180 }}
            aria-label="Toggle Dark Mode"
          >
            {dark ? (
              <MdOutlineDarkMode size={20} />
            ) : (
              <MdOutlineLightMode size={20} />
            )}
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
            className={`fixed inset-0 z-40 backdrop-blur-sm ${
              dark ? "bg-black/60" : "bg-black/40"
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              className={`absolute right-0 top-0 h-full w-64 pt-24 px-5 ${
                dark
                  ? "bg-gradient-to-b from-gray-900 to-zinc-900 text-white border-l border-white/10"
                  : "bg-gradient-to-b from-white to-gray-50 text-black border-l border-gray-200"
              }`}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col gap-3">
                {navItems.map((item, idx) => (
                  <motion.button
                    key={item.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    onClick={() => handleNavClick(item)}
                    className={`px-4 py-3 rounded-lg font-semibold transition-all text-left ${
                      selectedMenu === item.name
                        ? dark
                          ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                          : "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                        : dark
                          ? "hover:bg-white/10 text-gray-300 hover:text-white"
                          : "hover:bg-gray-100 text-gray-700 hover:text-gray-900"
                    }`}
                  >
                    {item.name}
                  </motion.button>
                ))}
                <motion.a
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.05 }}
                  href={pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-3 mt-4 rounded-lg bg-gradient-to-r from-red-500 to-red-600 text-white font-bold hover:from-red-600 hover:to-red-700 transition-all shadow-lg"
                >
                  <FaDownload size={14} />
                  Download Resume
                </motion.a>
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
