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
      className={`w-full py-16 transition-colors duration-500 ${
        dark
          ? "bg-gradient-to-tr from-[#000000] via-[#101010] to-[#1a1a1a] text-white"
          : "bg-gray-100 text-gray-800"
      }`}
    >
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-20">
          <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            My Experience
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-24">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`relative transition-all duration-700 hover:scale-[1.01] ${
                index % 2 === 0 ? "lg:pr-12" : "lg:pl-12"
              }`}
            >
              {/* Timeline line for larger screens */}
              <div className="hidden lg:block absolute top-8 left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-blue-500 to-purple-600 opacity-30"></div>

              {/* Timeline dot */}
              <div className="hidden lg:flex absolute top-8 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>

              {/* Content container */}
              <div
                className={`${
                  index % 2 === 0
                    ? "lg:text-right lg:mr-8"
                    : "lg:text-left lg:ml-8"
                }`}
              >
                {/* Header section */}
                <div className="mb-8">
                  <div className="flex items-center gap-4 mb-4 lg:justify-start">
                    <span
                      className={`px-4 py-2 rounded-full text-sm font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg`}
                    >
                      Project #{exp.id}
                    </span>
                  </div>

                  <h2 className="text-2xl lg:text-3xl font-bold mb-4 leading-tight">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      {exp.title}
                    </span>
                  </h2>

                  {exp.mentor && (
                    <div className="mb-6">
                      <p className="text-base">
                        <span
                          className={`font-medium ${
                            dark ? "text-gray-300" : "text-gray-600"
                          }`}
                        >
                          Mentor:{" "}
                        </span>
                        <a
                          href={exp.mentorLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 font-semibold underline decoration-2 underline-offset-4 hover:text-blue-400 transition-colors duration-300"
                        >
                          {exp.mentor}
                        </a>
                      </p>
                    </div>
                  )}
                </div>

                {/* Content grid */}
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-10">
                  <div
                    className={`${
                      index % 2 === 0 ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <h3 className="text-lg font-bold mb-4 text-blue-500">
                      Project Description
                    </h3>
                    <p
                      className={`text-base leading-relaxed ${
                        dark ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {exp.description}
                    </p>
                  </div>

                  <div
                    className={`${
                      index % 2 === 0 ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <h3 className="text-lg font-bold mb-4 text-purple-500">
                      Key Learnings
                    </h3>
                    <p
                      className={`text-base leading-relaxed ${
                        dark ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {exp.learnings}
                    </p>
                  </div>
                </div>

                {/* Technology stack */}
                <div className="mb-10">
                  <h3 className="text-lg text-left font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Technology Stack
                  </h3>
                  <div className="flex flex-wrap gap-3 lg:justify-start">
                    {exp.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-3 py-2 rounded-full text-xs font-semibold transition-all duration-300 hover:scale-110 hover:shadow-lg ${
                          dark
                            ? "bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20"
                            : "bg-white/80 text-gray-700 hover:bg-white shadow-md border border-gray-200"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project link */}
                {exp.projectLink && (
                  <div className="flex lg:justify-start">
                    <a
                      href={exp.projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-full font-semibold text-base shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:from-blue-700 hover:to-purple-700"
                    >
                      <span>Explore Project</span>
                      <svg
                        className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
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

              {/* Decorative elements */}
              <div
                className={`absolute -z-10 opacity-10 ${
                  index % 2 === 0 ? "top-0 right-0" : "top-0 left-0"
                }`}
              >
                <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur-2xl"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom decorative line */}
        <div className="mt-20 flex justify-center">
          <div className="w-48 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-50"></div>
        </div>
      </div>
    </div>
  );
};
