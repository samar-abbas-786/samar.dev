import React, { useRef } from "react";
import { project } from "../Projects_Container/allProjects";
import { FaExternalLinkAlt, FaCode } from "react-icons/fa"; // Importing icons

const Projects_Section = () => {
  const projectsRef = useRef(null);

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        {/* Navigation Link to Scroll */}
        <button
          onClick={scrollToProjects}
          className="text-lg font-semibold text-blue-600 hover:underline mb-8"
        >
          Scroll to Projects
        </button>

        {/* Projects Section */}
        <h1
          ref={projectsRef}
          className="text-4xl font-bold mb-10 text-gray-800"
        >
          My Projects
        </h1>

        <div className="space-y-12">
          {project.map((proj, index) => (
            <div
              key={proj.id}
              className={`flex flex-col md:flex-row items-center gap-6 p-6 rounded-lg shadow-md bg-white ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
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
              <div className="md:w-1/2 text-center md:text-left">
                <h2 className="text-2xl font-semibold text-gray-900">
                  {proj.title}
                </h2>
                <p className="text-gray-700 mt-2 text-sm">{proj.desc}</p>

                {proj.techStack && (
                  <>
                    <p className="text-gray-800 mt-4 text-sm font-medium">
                      Tech Stack:
                    </p>
                    <p className="text-gray-600 text-sm">
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
