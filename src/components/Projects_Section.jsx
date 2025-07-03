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
      className={`w-full py-20 transition-colors duration-300 ${
        dark ? "bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a]" : "bg-gray-50"
      }`}
      id="projects"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <button
            onClick={scrollToProjects}
            className={`text-sm font-medium mb-2 flex items-center gap-1 mx-auto px-4 py-2 rounded-full ${
              dark
                ? "text-blue-400 hover:text-blue-300 bg-blue-900/10 hover:bg-blue-900/20"
                : "text-blue-600 hover:text-blue-800 bg-blue-100 hover:bg-blue-200"
            } transition-all`}
          >
            <span>Explore My Work</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </button>

          <motion.h1
            ref={projectsRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`text-4xl sm:text-5xl font-bold mb-4 ${
              dark ? "text-purple-400" : "text-purple-600"
            }`}
          >
            My Projects
          </motion.h1>
          <p
            className={`max-w-2xl mx-auto text-lg ${
              dark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            A collection of my recent work and contributions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {project.map((proj) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              whileHover={{ y: -5 }}
              className={`flex flex-col rounded-2xl overflow-hidden transition-all duration-300 ${
                dark
                  ? "bg-zinc-900/70 hover:bg-zinc-900 border border-zinc-800 hover:border-purple-500/20 shadow-lg shadow-purple-900/10"
                  : "bg-white hover:bg-gray-50 border border-gray-100 hover:border-purple-200 shadow-md"
              }`}
            >
              <div className="relative h-56 overflow-hidden group">
                <img
                  src={proj.img}
                  alt={proj.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <h2 className="text-white text-xl font-bold">{proj.title}</h2>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex-grow">
                  <div className="flex justify-between items-start mb-3">
                    <h2
                      className={`text-xl font-bold ${
                        dark ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {proj.title}
                    </h2>
                    <button
                      onClick={() => toggleDetails(proj.id)}
                      className={`text-xs font-medium px-3 py-1 rounded-full ${
                        dark
                          ? "text-blue-400 hover:text-blue-300 bg-blue-900/20 hover:bg-blue-900/30"
                          : "text-blue-600 hover:text-blue-800 bg-blue-100 hover:bg-blue-200"
                      } transition-colors`}
                    >
                      {visibleDetails[proj.id] ? "Hide" : "Details"}
                    </button>
                  </div>

                  <AnimatePresence>
                    {visibleDetails[proj.id] && (
                      <motion.div
                        className="overflow-hidden"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p
                          className={`text-sm mb-4 ${
                            dark ? "text-gray-300" : "text-gray-600"
                          }`}
                        >
                          {proj.desc}
                        </p>
                        {proj.techStack && (
                          <div>
                            <p
                              className={`text-xs font-semibold mb-2 ${
                                dark ? "text-gray-400" : "text-gray-500"
                              }`}
                            >
                              TECH STACK
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {proj.techStack.map((tech, index) => (
                                <span
                                  key={index}
                                  className={`text-xs px-3 py-1 rounded-full ${
                                    dark
                                      ? "bg-zinc-800 text-gray-300"
                                      : "bg-gray-100 text-gray-700"
                                  }`}
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="flex gap-3 mt-6 pt-4 border-t border-gray-800/30">
                  {proj.live && (
                    <a
                      href={proj.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 text-sm px-4 py-2.5 rounded-lg transition-all flex-1 justify-center ${
                        dark
                          ? "bg-purple-600 hover:bg-purple-700 text-white shadow-lg shadow-purple-500/10"
                          : "bg-purple-500 hover:bg-purple-600 text-white shadow-md"
                      }`}
                    >
                      <FaExternalLinkAlt className="text-xs" />
                      Live Demo
                    </a>
                  )}

                  {proj.code && (
                    <a
                      href={proj.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 text-sm px-4 py-2.5 rounded-lg transition-all flex-1 justify-center ${
                        dark
                          ? "bg-zinc-800 hover:bg-zinc-700 text-white"
                          : "bg-gray-100 hover:bg-gray-200 text-gray-800"
                      }`}
                    >
                      <FaCode className="text-xs" />
                      View Code
                    </a>
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
