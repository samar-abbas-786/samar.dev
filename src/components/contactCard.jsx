import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useScroll } from "../context/ScrollContext";

export const ContactCard = () => {
  const { dark } = useScroll();

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <div
      className={`py-16 px-4 transition-all duration-500 ${
        dark
          ? "bg-gradient-to-br from-[#000000] via-[#0f0f1e] to-[#1a0033]"
          : "bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50"
      }`}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className={`max-w-2xl mx-auto p-8 md:p-12 rounded-2xl backdrop-blur-xl transition-all duration-300 hover:shadow-2xl ${
          dark
            ? "bg-gradient-to-br from-zinc-900/90 via-zinc-900/80 to-purple-900/60 border border-purple-500/30 hover:border-purple-400/60 shadow-2xl shadow-purple-900/30"
            : "bg-gradient-to-br from-white/90 via-blue-50/80 to-purple-50/80 border border-gray-200 hover:border-blue-400 shadow-lg"
        }`}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center mb-12"
        >
          <h2
            className={`text-4xl md:text-5xl font-bold mb-3 ${
              dark
                ? "text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text"
                : "text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text"
            }`}
          >
            Get in Touch
          </h2>
          <p className={`text-lg ${dark ? "text-gray-300" : "text-gray-600"}`}>
            Let's connect and create something amazing together!
          </p>
        </motion.div>

        {/* Contact Items */}
        <div className="space-y-4 mb-8">
          {/* Email */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            whileHover={{ x: 8 }}
            className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-300 ${
              dark
                ? "bg-blue-900/20 border border-blue-500/30 hover:border-blue-400/60 hover:bg-blue-900/30"
                : "bg-blue-100/40 border border-blue-300/30 hover:border-blue-400 hover:bg-blue-100/60 shadow-sm"
            }`}
          >
            <div
              className={`p-3 rounded-lg ${
                dark
                  ? "bg-blue-500/20 text-blue-400"
                  : "bg-blue-200 text-blue-700"
              }`}
            >
              <FaEnvelope className="text-xl" />
            </div>
            <div className="flex-1">
              <p
                className={`text-sm font-medium ${dark ? "text-gray-400" : "text-gray-600"}`}
              >
                Email
              </p>
              <a
                href="mailto:gn2500@myamu.ac.in"
                className={`font-semibold hover:underline underline-offset-2 transition ${
                  dark
                    ? "text-blue-300 hover:text-blue-200"
                    : "text-blue-700 hover:text-blue-900"
                }`}
              >
                gn2500@myamu.ac.in
              </a>
            </div>
          </motion.div>

          {/* Phone */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
            whileHover={{ x: 8 }}
            className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-300 ${
              dark
                ? "bg-green-900/20 border border-green-500/30 hover:border-green-400/60 hover:bg-green-900/30"
                : "bg-green-100/40 border border-green-300/30 hover:border-green-400 hover:bg-green-100/60 shadow-sm"
            }`}
          >
            <div
              className={`p-3 rounded-lg ${
                dark
                  ? "bg-green-500/20 text-green-400"
                  : "bg-green-200 text-green-700"
              }`}
            >
              <FaPhone className="text-xl" />
            </div>
            <div className="flex-1">
              <p
                className={`text-sm font-medium ${dark ? "text-gray-400" : "text-gray-600"}`}
              >
                Phone
              </p>
              <a
                href="tel:+919997405528"
                className={`font-semibold hover:underline underline-offset-2 transition ${
                  dark
                    ? "text-green-300 hover:text-green-200"
                    : "text-green-700 hover:text-green-900"
                }`}
              >
                +91 9997405528
              </a>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className={`h-px my-8 ${dark ? "bg-white/10" : "bg-gray-300"}`} />

        {/* Social Media Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p
            className={`text-center mb-6 font-medium ${dark ? "text-gray-300" : "text-gray-700"}`}
          >
            Connect with me on social media
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <motion.a
              href="https://linkedin.com/in/samar-abbas-a1ab4625a"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.95 }}
              className={`p-4 rounded-full transition-all duration-300 ${
                dark
                  ? "text-blue-400 bg-blue-900/20 border border-blue-500/30 hover:bg-blue-900/40 hover:border-blue-400/60 hover:shadow-lg hover:shadow-blue-500/30"
                  : "text-blue-700 bg-blue-100/40 border border-blue-300/30 hover:bg-blue-100/60 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-400/30 shadow-sm"
              }`}
              title="LinkedIn"
            >
              <FaLinkedin className="text-2xl" />
            </motion.a>
            <motion.a
              href="https://github.com/samar-abbas-786"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.95 }}
              className={`p-4 rounded-full transition-all duration-300 ${
                dark
                  ? "text-white bg-gray-900/20 border border-gray-500/30 hover:bg-gray-900/40 hover:border-gray-400/60 hover:shadow-lg hover:shadow-gray-500/30"
                  : "text-gray-900 bg-gray-100/40 border border-gray-300/30 hover:bg-gray-100/60 hover:border-gray-400 hover:shadow-lg hover:shadow-gray-400/30 shadow-sm"
              }`}
              title="GitHub"
            >
              <FaGithub className="text-2xl" />
            </motion.a>
            <motion.a
              href="https://twitter.com/SamarAb65178114"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.95 }}
              className={`p-4 rounded-full transition-all duration-300 ${
                dark
                  ? "text-sky-400 bg-sky-900/20 border border-sky-500/30 hover:bg-sky-900/40 hover:border-sky-400/60 hover:shadow-lg hover:shadow-sky-500/30"
                  : "text-blue-500 bg-blue-100/40 border border-blue-300/30 hover:bg-blue-100/60 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-400/30 shadow-sm"
              }`}
              title="Twitter"
            >
              <FaTwitter className="text-2xl" />
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};
