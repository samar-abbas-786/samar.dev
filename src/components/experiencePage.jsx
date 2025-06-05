import React from "react";
import { useScroll } from "../context/ScrollContext";

const experiences = [
  {
    id: 1,
    title: "The Amulate Program",
    mentor: "Leonardo Davinci Darwin",
    mentorLink: "https://www.linkedin.com/in/leonardo-davinci-darwin/",
    description:
      "Developing a business case for verifying Android OS-enabled devices, starting with automating mobile handsets.",
    learnings:
      "Explored Testing, DevOps, and Automation potentials applicable across various fields.",
    techStack: [
      "Android Dev Tools",
      "Git",
      "DBMS",
      "MS Excel",
      "Web Development",
    ],
    projectLink:
      "https://github.com/samar-abbas-786/Verification-of-Android-OS-enabled-Devices",
  },
  {
    id: 2,
    title: "Apna Darzi",
    description:
      "Developed and refined the Apna Darzi mobile app, enabling seamless online tailoring services with doorstep delivery. Successfully contributed to its launch on the Google Play Store.",
    learnings:
      "Expertise in developing business logic for startup applications, designing highly optimized APIs, and integrating services like Firebase for notifications, Google Analytics, and more.",
    techStack: [
      "React.js",
      "React Native",
      "Node.js",
      "Express",
      "MongoDB",
      "Firebase",
      "Google Analytics",
      "Twilio",
    ],
    projectLink:
      "https://play.google.com/store/apps/details?id=com.onlinetailoring&hl=en_IN",
  },
];

export const ExperiencePage = () => {
  const { dark } = useScroll();

  return (
    <div
      className={`w-full py-2 transition-colors duration-500 ${
        dark
          ? "bg-gradient-to-tr from-[#000000] via-[#101010] to-[#1a1a1a] text-white"
          : "bg-gray-100 text-gray-800"
      }`}
    >
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          My Experience
        </h1>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`relative p-8 rounded-3xl shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] backdrop-blur-md ${
                dark
                  ? "bg-white/5 border border-white/10 hover:bg-white/10"
                  : "bg-white/70 border border-gray-200 hover:bg-white/90"
              }`}
            >
              {/* Decorative accent */}
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-blue-500 to-purple-600 rounded-l-3xl"></div>

              <div className="ml-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                  <h2 className="text-3xl font-bold mb-2 sm:mb-0">
                    {exp.title}
                  </h2>
                  <div className="flex items-center gap-2">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        dark
                          ? "bg-blue-500/20 text-blue-300"
                          : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      Project #{exp.id}
                    </span>
                  </div>
                </div>

                {exp.mentor && (
                  <div className="mb-6">
                    <p className="text-blue-500 font-medium">
                      Mentor:{" "}
                      <a
                        href={exp.mentorLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-blue-400 transition-colors"
                      >
                        {exp.mentor}
                      </a>
                    </p>
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3
                      className={`text-lg font-semibold mb-3 ${
                        dark ? "text-gray-200" : "text-gray-700"
                      }`}
                    >
                      Description
                    </h3>
                    <p
                      className={`leading-relaxed ${
                        dark ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {exp.description}
                    </p>
                  </div>

                  <div>
                    <h3
                      className={`text-lg font-semibold mb-3 ${
                        dark ? "text-gray-200" : "text-gray-700"
                      }`}
                    >
                      Key Learnings
                    </h3>
                    <p
                      className={`leading-relaxed ${
                        dark ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {exp.learnings}
                    </p>
                  </div>
                </div>

                <div className="mt-8">
                  <h3
                    className={`text-lg font-semibold mb-4 ${
                      dark ? "text-gray-200" : "text-gray-700"
                    }`}
                  >
                    Technology Stack
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {exp.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                          dark
                            ? "bg-gray-700/50 text-gray-300 hover:bg-gray-600/50"
                            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {exp.projectLink && (
                  <div className="flex justify-center sm:justify-start">
                    <a
                      href={exp.projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-8 rounded-full font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                    >
                      <span>View Project</span>
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
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
