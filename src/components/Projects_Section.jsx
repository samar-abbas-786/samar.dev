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
      className={`w-full py-16 transition-colors duration-500 ${
        dark
          ? "bg-gradient-to-tr from-[#000000] via-[#101010] to-[#1a1a1a] text-white"
          : "bg-gray-100 text-gray-800"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <button
          onClick={scrollToProjects}
          className={`text-lg font-semibold mb-8 hover:underline ${
            dark ? "text-blue-400" : "text-blue-600"
          }`}
        >
          Scroll to Projects
        </button>

        <h1
          ref={projectsRef}
          className="text-4xl text-purple-500 font-bold mb-12 text-center"
        >
          My Projects
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {project.map((proj) => (
            <div
              key={proj.id}
              className={`flex flex-col items-center rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 ${
                dark
                  ? "bg-white/5 border border-white/10 text-white"
                  : "bg-white border border-gray-200 text-gray-800"
              }`}
            >
              <img
                src={proj.img}
                alt={proj.title}
                className="w-full h-48 object-cover rounded-t-xl"
              />

              <div className="w-full p-4 flex flex-col h-full">
                <h2 className="text-xl font-bold text-center mb-2">
                  {proj.title}
                </h2>

                <button
                  onClick={() => toggleDetails(proj.id)}
                  className="text-sm font-medium mb-3 text-blue-500 hover:underline self-center"
                >
                  {visibleDetails[proj.id] ? "Hide Details" : "Show Details"}
                </button>

                <AnimatePresence>
                  {visibleDetails[proj.id] && (
                    <motion.div
                      className="mb-4 text-sm opacity-90"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="mb-2">{proj.desc}</p>
                      {proj.techStack && (
                        <>
                          <p className="font-semibold">Tech Stack:</p>
                          <p className="opacity-80">
                            {proj.techStack.join(", ")}
                          </p>
                        </>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="flex gap-4 mt-auto justify-center flex-wrap">
                  {proj.live && (
                    <a
                      href={proj.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-red-600 text-white py-2 px-4 text-sm rounded-md shadow-md flex items-center gap-2 hover:bg-red-700 transition"
                    >
                      <FaExternalLinkAlt /> Live
                    </a>
                  )}

                  {proj.code && (
                    <a
                      href={proj.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-800 text-white py-2 px-4 text-sm rounded-md shadow-md flex items-center gap-2 hover:bg-gray-900 transition"
                    >
                      <FaCode /> Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects_Section;
