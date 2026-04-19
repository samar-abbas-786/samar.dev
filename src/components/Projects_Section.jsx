import React, { useRef, useState } from "react";
import { project } from "../Projects_Container/allProjects";
import { FaExternalLinkAlt, FaCode } from "react-icons/fa";
import { useScroll } from "../context/ScrollContext";
import { AnimatePresence, motion } from "framer-motion";

const Projects_Section = () => {
  const projectsRef = useRef(null);
  const { dark } = useScroll();
  const [visibleDetails, setVisibleDetails] = useState({});

  const toggleDetails = (id) => {
    setVisibleDetails((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className={`w-full py-20 transition-all duration-500 ${
        dark
          ? "bg-gradient-to-br from-[#000000] via-[#0f0f1e] to-[#1a0033]"
          : "bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50"
      }`}
      id="projects"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.button
            onClick={scrollToProjects}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`text-sm font-semibold mb-4 inline-flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 backdrop-blur-sm ${
              dark
                ? "text-blue-400 hover:text-blue-300 bg-blue-900/20 border border-blue-500/30 hover:border-blue-400/60 hover:bg-blue-900/30"
                : "text-blue-600 hover:text-blue-800 bg-blue-100/50 border border-blue-300/50 hover:bg-blue-100 hover:border-blue-400 shadow-sm"
            }`}
          >
            <span>Explore My Work</span>
            <motion.svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </motion.svg>
          </motion.button>

          <motion.h1
            ref={projectsRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`text-4xl sm:text-5xl font-bold mb-4 ${
              dark
                ? "text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text"
                : "text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text"
            }`}
          >
            My Projects
          </motion.h1>
          <div
            className={`w-24 h-1 mx-auto rounded-full mb-4 ${
              dark
                ? "bg-gradient-to-r from-blue-500 to-purple-500"
                : "bg-gradient-to-r from-blue-600 to-purple-600"
            }`}
          />
          <p
            className={`max-w-2xl mx-auto text-lg ${
              dark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            A collection of my recent work showcasing innovative solutions and
            real-world impact
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {project.map((proj, idx) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className={`flex flex-col rounded-2xl overflow-hidden transition-all duration-300 h-full backdrop-blur-xl group ${
                dark
                  ? "bg-gradient-to-br from-zinc-900/80 to-zinc-800/80 border border-white/10 hover:border-purple-500/50 shadow-xl hover:shadow-2xl hover:shadow-purple-900/30"
                  : "bg-gradient-to-br from-white/80 to-gray-100/80 border border-gray-200 hover:border-purple-400 shadow-lg hover:shadow-2xl"
              }`}
            >
              {/* Image Container */}
              <div className="relative h-48 w-full overflow-hidden bg-gray-900/20">
                <motion.img
                  src={proj.img}
                  alt={proj.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  whileHover={{ scale: 1.1 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content Container */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Title and Toggle Button */}
                <div className="flex justify-between items-start mb-3">
                  <h2
                    className={`text-lg font-bold flex-1 ${
                      dark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {proj.title}
                  </h2>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => toggleDetails(proj.id)}
                    className={`text-xs font-semibold ml-2 px-3 py-1 rounded-lg transition-all duration-300 whitespace-nowrap ${
                      dark
                        ? `${visibleDetails[proj.id] ? "text-white bg-purple-600" : "text-blue-400 bg-blue-900/30 border border-blue-500/30 hover:bg-blue-900/50"}`
                        : `${visibleDetails[proj.id] ? "text-white bg-purple-600" : "text-blue-600 bg-blue-100/50 border border-blue-300/50 hover:bg-blue-100"}`
                    }`}
                  >
                    {visibleDetails[proj.id] ? "Less" : "More"}
                  </motion.button>
                </div>

                {/* Expandable Details */}
                <AnimatePresence>
                  {visibleDetails[proj.id] && (
                    <motion.div
                      className="mb-4"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p
                        className={`text-sm mb-4 leading-relaxed ${
                          dark ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        {proj.desc}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {proj.techStack.map((tech, index) => (
                          <motion.span
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.05 }}
                            className={`text-xs font-medium px-3 py-1 rounded-lg transition-all duration-300 ${
                              dark
                                ? "bg-purple-900/40 text-purple-300 border border-purple-500/30 hover:bg-purple-900/60"
                                : "bg-purple-100/50 text-purple-700 border border-purple-300/50 hover:bg-purple-100"
                            }`}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Action Buttons */}
                <div
                  className={`mt-auto pt-4 flex gap-3 border-t transition-colors duration-300 ${
                    dark ? "border-white/10" : "border-gray-300"
                  }`}
                >
                  {proj.live && (
                    <motion.a
                      href={proj.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`text-sm flex-1 text-center px-3 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                        dark
                          ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg shadow-purple-900/30"
                          : "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-md"
                      }`}
                    >
                      <FaExternalLinkAlt size={14} />
                      Live
                    </motion.a>
                  )}
                  {proj.code && (
                    <motion.a
                      href={proj.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`text-sm flex-1 text-center px-3 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                        dark
                          ? "bg-zinc-800/80 text-gray-200 border border-white/10 hover:bg-zinc-700 hover:border-white/20"
                          : "bg-gray-200/60 text-gray-900 border border-gray-400/50 hover:bg-gray-200 hover:border-gray-400"
                      }`}
                    >
                      <FaCode size={14} />
                      Code
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects_Section;
