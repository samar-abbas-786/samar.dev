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
      className={`w-full py-16 transition-colors duration-300 ${
        dark
          ? "bg-gradient-to-tr from-[#0a0a0a] via-[#111111] to-[#1a1a1a]"
          : "bg-gray-50"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <button
          onClick={scrollToProjects}
          className={`text-base font-medium mb-12 flex items-center gap-2 mx-auto ${
            dark
              ? "text-blue-400 hover:text-blue-300"
              : "text-blue-600 hover:text-blue-800"
          } transition-colors`}
        >
          <span>View Projects</span>
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
          transition={{ duration: 0.5 }}
          className={`text-3xl sm:text-4xl font-bold mb-12 text-center ${
            dark ? "text-purple-400" : "text-purple-600"
          }`}
        >
          My Projects
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-10">
          {project.map((proj) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.02 }}
              className={`flex flex-col rounded-xl overflow-hidden transition-all duration-300 ${
                dark
                  ? "bg-zinc-900 border border-gray-800 hover:border-purple-500/30"
                  : "bg-white border border-gray-200 hover:border-purple-300 shadow-sm"
              }`}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={proj.img}
                  alt={proj.title}
                  className="w-full h-full object-fit transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <h2 className="text-white text-xl font-bold">{proj.title}</h2>
                </div>
              </div>

              <div className="p-5 flex flex-col flex-grow">
                <div className="flex-grow">
                  <h2
                    className={`text-lg font-bold mb-2 ${
                      dark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {proj.title}
                  </h2>

                  <button
                    onClick={() => toggleDetails(proj.id)}
                    className={`text-xs font-medium mb-3 ${
                      dark
                        ? "text-blue-400 hover:text-blue-300"
                        : "text-blue-600 hover:text-blue-800"
                    } transition-colors`}
                  >
                    {visibleDetails[proj.id] ? "Hide Details" : "Show Details"}
                  </button>

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
                          className={`text-sm mb-3 ${
                            dark ? "text-gray-300" : "text-gray-600"
                          }`}
                        >
                          {proj.desc}
                        </p>
                        {proj.techStack && (
                          <div>
                            <p
                              className={`text-xs font-semibold mb-1 ${
                                dark ? "text-gray-400" : "text-gray-500"
                              }`}
                            >
                              TECH STACK
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {proj.techStack.map((tech, index) => (
                                <span
                                  key={index}
                                  className={`text-xs px-2 py-1 rounded ${
                                    dark
                                      ? "bg-gray-800 text-gray-300"
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

                <div className="flex gap-3 mt-4 pt-3 border-t border-gray-800/50">
                  {proj.live && (
                    <a
                      href={proj.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 text-sm px-4 py-2 rounded-md transition-colors ${
                        dark
                          ? "bg-purple-600 hover:bg-purple-700 text-white"
                          : "bg-purple-500 hover:bg-purple-600 text-white"
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
                      className={`flex items-center gap-2 text-sm px-4 py-2 rounded-md transition-colors ${
                        dark
                          ? "bg-gray-800 hover:bg-gray-700 text-white"
                          : "bg-gray-200 hover:bg-gray-300 text-gray-800"
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
