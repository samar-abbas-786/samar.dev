import React from "react";
import { motion } from "framer-motion";
import { useScroll } from "../context/ScrollContext";

const Footer = () => {
  const { dark } = useScroll();

  return (
    <footer
      className={`w-full transition-all duration-500 ${
        dark
          ? "bg-gradient-to-r from-[#000000] via-[#0a0a0a] to-[#1a0033] text-gray-300"
          : "bg-gradient-to-r from-gray-100 via-gray-50 to-purple-50 text-gray-800"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="py-12 md:py-16 border-t border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-start"
            >
              <h3
                className={`text-2xl font-bold mb-2 ${
                  dark
                    ? "text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text"
                    : "text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text"
                }`}
              >
                Samar Abbas
              </h3>
              <p
                className={`text-sm ${dark ? "text-gray-400" : "text-gray-600"}`}
              >
                Full Stack Developer & Problem Solver
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h4
                className={`font-semibold mb-4 ${dark ? "text-white" : "text-gray-900"}`}
              >
                Quick Links
              </h4>
              <ul className="space-y-2 text-sm">
                {["Portfolio", "Projects", "Skills", "Experience"].map(
                  (link) => (
                    <li key={link}>
                      <a
                        href={`#${link.toLowerCase()}`}
                        className={`transition-colors duration-300 ${
                          dark
                            ? "text-gray-400 hover:text-blue-400"
                            : "text-gray-600 hover:text-blue-600"
                        }`}
                      >
                        {link}
                      </a>
                    </li>
                  ),
                )}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4
                className={`font-semibold mb-4 ${dark ? "text-white" : "text-gray-900"}`}
              >
                Contact
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="mailto:gn2500@myamu.ac.in"
                    className={`transition-colors duration-300 ${
                      dark
                        ? "text-gray-400 hover:text-blue-400"
                        : "text-gray-600 hover:text-blue-600"
                    }`}
                  >
                    gn2500@myamu.ac.in
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+919997405528"
                    className={`transition-colors duration-300 ${
                      dark
                        ? "text-gray-400 hover:text-blue-400"
                        : "text-gray-600 hover:text-blue-600"
                    }`}
                  >
                    +91 9997405528
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Divider */}
          <div
            className={`h-px mb-8 ${dark ? "bg-white/10" : "bg-gray-300"}`}
          />

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col md:flex-row justify-between items-center gap-4"
          >
            <p
              className={`text-sm ${dark ? "text-gray-400" : "text-gray-600"}`}
            >
              Made with <span className="text-red-500">❤️</span> by Samar Abbas
              © {new Date().getFullYear()}
            </p>
            <p
              className={`text-xs ${dark ? "text-gray-500" : "text-gray-500"}`}
            >
              Designed & Built with React, Tailwind CSS & Framer Motion
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
