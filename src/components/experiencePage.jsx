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
      className={`w-full py-20 transition-colors duration-500 ${
        dark
          ? "bg-gradient-to-tr from-[#000000] via-[#101010] to-[#1a1a1a] text-white"
          : "bg-gray-100 text-gray-800"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            My Experience
          </h1>
          <div className="w-24 h-1 mt-4 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-32 relative">
          {/* Center timeline line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 to-purple-600 opacity-30 transform -translate-x-1/2"></div>

          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`relative group ${
                index % 2 === 0 ? "lg:pr-12" : "lg:pl-12"
              }`}
            >
              {/* Timeline dot */}
              <div className="hidden lg:flex absolute left-1/2 top-0 transform -translate-x-1/2 w-5 h-5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full items-center justify-center z-10">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>

              {/* Decorative Floating Blob */}
              <div
                className={`absolute -z-10 blur-3xl opacity-20 animate-pulse ${
                  index % 2 === 0
                    ? "top-[-20px] right-[-50px]"
                    : "top-[-20px] left-[-50px]"
                }`}
              >
                <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full"></div>
              </div>

              <div
                className={`backdrop-blur-xl shadow-xl transition-all duration-500 rounded-2xl px-6 md:px-10 py-10 ${
                  dark
                    ? "bg-white/5 border border-white/10"
                    : "bg-white border border-gray-200"
                } ${index % 2 === 0 ? "lg:ml-auto" : "lg:mr-auto"} max-w-2xl`}
              >
                {/* Header */}
                <div className="mb-6">
                  <span className="inline-block mb-4 px-4 py-1 text-sm font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-md">
                    Project #{exp.id}
                  </span>

                  <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {exp.title}
                  </h2>

                  {exp.mentor && (
                    <p className="mt-2 text-sm">
                      <span
                        className={dark ? "text-gray-400" : "text-gray-600"}
                      >
                        Mentor:{" "}
                      </span>
                      <a
                        href={exp.mentorLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-blue-500 hover:text-purple-500 underline underline-offset-4"
                      >
                        {exp.mentor}
                      </a>
                    </p>
                  )}
                </div>

                {/* Content Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-md font-semibold text-blue-500 mb-2">
                      Project Description
                    </h3>
                    <p className={dark ? "text-gray-300" : "text-gray-700"}>
                      {exp.description}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-md font-semibold text-purple-500 mb-2">
                      Key Learnings
                    </h3>
                    <p className={dark ? "text-gray-300" : "text-gray-700"}>
                      {exp.learnings}
                    </p>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mt-6">
                  <h3 className="text-md font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
                    Technology Stack
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {exp.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className={`px-3 py-1 text-xs font-medium rounded-full transition-all duration-300 hover:scale-105 ${
                          dark
                            ? "bg-white/10 text-gray-300 border border-white/20"
                            : "bg-gray-100 text-gray-700 border border-gray-200 shadow-sm"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Link */}
                {exp.projectLink && (
                  <div className="mt-8">
                    <a
                      href={exp.projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium py-2 px-5 rounded-full transition-all duration-300 hover:from-blue-700 hover:to-purple-700 shadow-md hover:shadow-lg"
                    >
                      Explore Project
                      <svg
                        className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Line */}
        <div className="mt-24 flex justify-center">
          <div className="w-48 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-50"></div>
        </div>
      </div>
    </div>
  );
};
