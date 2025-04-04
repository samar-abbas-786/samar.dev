import React, { useRef } from "react";
import { project } from "../Projects_Container/allProjects";
import { FaExternalLinkAlt, FaCode } from "react-icons/fa";
import { useScroll } from "../context/ScrollContext";

const Projects_Section = () => {
  const projectsRef = useRef(null);
  const { dark } = useScroll();

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className={`w-full py-12 transition-colors duration-500 ${
        dark
          ? "bg-gradient-to-tr from-[#000000] via-[#101010] to-[#1a1a1a] text-white"
          : "bg-gray-100 text-gray-800"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Navigation Link to Scroll */}
        <button
          onClick={scrollToProjects}
          className={`text-lg font-semibold mb-8 hover:underline ${
            dark ? "text-blue-400" : "text-blue-600"
          }`}
        >
          Scroll to Projects
        </button>

        {/* Projects Section */}
        <h1 ref={projectsRef} className="text-4xl font-bold mb-10 text-center">
          My Projects
        </h1>

        <div className="space-y-12">
          {project.map((proj, index) => (
            <div
              key={proj.id}
              className={`flex flex-col md:flex-row items-center gap-6 p-6 rounded-lg shadow-md transition duration-300 backdrop-blur-md ${
                dark
                  ? "bg-white/5 border border-white/10"
                  : "bg-white border border-gray-200"
              } ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
            >
              {/* Project Image */}
              <div className="md:w-1/2">
                <img
                  src={proj.img}
                  alt={proj.title}
                  className="w-full h-64 object-fit rounded-lg shadow-md"
                />
              </div>

              {/* Project Details */}
              <div className="md:w-1/2 md:text-left">
                <h2 className="text-2xl font-semibold mb-1">{proj.title}</h2>
                <p className="mt-2 text-sm opacity-90">{proj.desc}</p>

                {proj.techStack && (
                  <>
                    <p className="mt-4 text-sm font-medium">Tech Stack:</p>
                    <p className="text-sm opacity-80">
                      {proj.techStack.join(", ")}
                    </p>
                  </>
                )}

                <div className="mt-4 justify-evenly md:justify-normal flex gap-4">
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
