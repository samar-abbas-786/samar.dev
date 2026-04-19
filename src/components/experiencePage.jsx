import React from "react";
import { useScroll } from "../context/ScrollContext";

const experiences = [
  {
    id: 1,
    title: "Junior Software Engineer Intern",
    company: "EPAM Systems",
    duration: "Jan 2026 – Present",
    location: "Hyderabad",
    description:
      "Working with Java, Spring Boot, Spring Core,Spring Cloud, Spring Data JPA, JUnit 5 and Mockito for building and testing scalable enterprise-grade applications.",
    learnings:
      "Building RESTful APIs using Clean Code practices, SOLID principles, design patterns, and microservices architecture.",
    techStack: [
      "Java",
      "Spring Boot",
      "Spring Core",
      "JUnit 5",
      "Mockito",
      "Spring Data JPA",
      "REST APIs",
      "Microservices",
    ],
  },

  {
    id: 2,
    title: "Software Development Intern",
    company: "Confidence Connector, Innovative Engineering Solutions",
    duration: "July 2025 – Present",
    location: "Aligarh",
    description:
      "Developed a real-time health monitoring system collecting ECG, heart rate, SpO2, and body temperature data from IoT devices.",
    learnings:
      "Built AI chatbot using Gemini API, secure doctor-patient chat system, and AI-generated diagnosis reporting.",
    techStack: [
      "React.js",
      "Node.js",
      "MongoDB",
      "Gemini API",
      "IoT",
      "WebSocket",
      "AI Chatbot",
    ],
  },

  {
    id: 3,
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
    id: 4,
    title: "Apna Darzi",
    description:
      "Developed and refined the Apna Darzi mobile app, enabling seamless online tailoring services with doorstep delivery.",
    learnings:
      "Worked on startup business logic, optimized APIs, Firebase notifications, Google Analytics, and Twilio integrations.",
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
      className={`w-full transition-colors duration-500 ${
        dark
          ? "bg-gradient-to-tr from-[#000000] via-[#101010] to-[#1a1a1a] text-gray-300"
          : "bg-gray-50 text-gray-700"
      }`}
    >
      <div className="max-w-4xl mx-auto px-5 sm:px-6">
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            My Experience
          </h1>

          <div className="w-20 h-1 mt-3 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full opacity-80"></div>
        </div>

        <div className="space-y-20 relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600 opacity-20 transform -translate-x-1/2"></div>

          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`relative group ${
                index % 2 === 0 ? "md:pr-10" : "md:pl-10"
              }`}
            >
              {/* Timeline Dot */}
              <div className="hidden md:flex absolute left-1/2 top-6 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full items-center justify-center z-10">
                <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
              </div>

              {/* Card */}
              <div
                className={`rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 ${
                  dark
                    ? "bg-zinc-900 border border-white/10 hover:border-white/20"
                    : "bg-white border border-gray-200 hover:border-gray-300 shadow-sm"
                } ${index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"} max-w-xl`}
              >
                {/* Header */}
                <div className="mb-5">
                  <span className="inline-block mb-3 px-3 py-1 text-xs font-semibold bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full">
                    Experience #{exp.id}
                  </span>

                  <h2 className="text-xl font-bold text-gray-400">
                    {exp.title}
                  </h2>

                  {exp.company && (
                    <p className="mt-1 text-sm text-gray-500">{exp.company}</p>
                  )}

                  {exp.location && (
                    <p className="text-xs text-purple-400">
                      {exp.location} • {exp.duration}
                    </p>
                  )}

                  {exp.mentor && (
                    <p className="mt-1 text-xs">
                      <span
                        className={dark ? "text-gray-400" : "text-gray-500"}
                      >
                        Mentor:{" "}
                      </span>

                      <a
                        href={exp.mentorLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-purple-400 underline underline-offset-2"
                      >
                        {exp.mentor}
                      </a>
                    </p>
                  )}
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-blue-400 mb-1">
                      Description
                    </h3>
                    <p className="text-sm leading-relaxed">{exp.description}</p>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-purple-400 mb-1">
                      Learnings
                    </h3>
                    <p className="text-sm leading-relaxed">{exp.learnings}</p>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mt-5">
                  <h3 className="text-sm font-medium text-gray-400 mb-2">
                    Technologies Used
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {exp.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className={`px-2.5 py-0.5 text-xs rounded-full ${
                          dark
                            ? "bg-white/5 text-gray-300"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Link */}
                {exp.projectLink && (
                  <div className="mt-6">
                    <a
                      href={exp.projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm gap-1.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium py-2 px-4 rounded-lg transition-all hover:opacity-90"
                    >
                      View Project
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <div className="w-32 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-30"></div>
        </div>
      </div>
    </div>
  );
};
