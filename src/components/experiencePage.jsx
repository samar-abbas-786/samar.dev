import React from "react";
import { motion } from "framer-motion";
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
      className={`w-full py-16 px-4 transition-all duration-500 ${
        dark
          ? "bg-gradient-to-br from-[#000000] via-[#0f0f1e] to-[#1a0033]"
          : "bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50"
      }`}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1
            className={`text-4xl sm:text-5xl font-bold mb-4 ${
              dark
                ? "text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text"
                : "text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text"
            }`}
          >
            My Experience
          </h1>
          <div
            className={`w-24 h-1 mx-auto rounded-full ${
              dark
                ? "bg-gradient-to-r from-blue-500 to-purple-500"
                : "bg-gradient-to-r from-blue-600 to-purple-600"
            }`}
          />
        </motion.div>

        {/* Timeline Container */}
        <div className="space-y-12 relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 transform -translate-x-1/2 opacity-50" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative group ${
                index % 2 === 0
                  ? "md:pr-[calc(50%+2rem)]"
                  : "md:pl-[calc(50%+2rem)]"
              }`}
            >
              {/* Timeline Dot */}
              <motion.div
                whileHover={{ scale: 1.3 }}
                className="hidden md:flex absolute left-1/2 top-6 transform -translate-x-1/2 z-20"
              >
                <div
                  className={`w-6 h-6 rounded-full border-4 transition-all duration-300 ${
                    dark
                      ? "bg-zinc-900 border-purple-500"
                      : "bg-white border-purple-600"
                  } shadow-lg`}
                />
              </motion.div>

              {/* Card */}
              <motion.div
                whileHover={{ y: -8 }}
                className={`rounded-2xl p-6 md:p-8 transition-all duration-300 backdrop-blur-xl group ${
                  dark
                    ? "bg-gradient-to-br from-zinc-900/80 to-purple-900/40 border border-purple-500/30 hover:border-purple-400/60 shadow-2xl shadow-purple-900/20 hover:shadow-2xl hover:shadow-purple-900/40"
                    : "bg-gradient-to-br from-white/80 to-blue-50/80 border border-gray-200 hover:border-purple-400 shadow-lg hover:shadow-2xl"
                }`}
              >
                {/* Badge */}
                <div className="flex items-start justify-between mb-4">
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    className="inline-block px-4 py-2 text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-lg"
                  >
                    #{exp.id} {exp.company ? "Experience" : "Project"}
                  </motion.span>
                </div>

                {/* Title and Company */}
                <h2
                  className={`text-2xl md:text-3xl font-bold mb-2 ${
                    dark ? "text-white" : "text-gray-900"
                  }`}
                >
                  {exp.title}
                </h2>

                {exp.company && (
                  <p
                    className={`text-lg font-semibold mb-1 ${
                      dark ? "text-blue-300" : "text-blue-700"
                    }`}
                  >
                    {exp.company}
                  </p>
                )}

                {/* Meta Info */}
                <div
                  className={`flex flex-wrap gap-3 mb-4 text-sm ${
                    dark ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {exp.location && (
                    <span className="flex items-center gap-1">
                      📍 {exp.location}
                    </span>
                  )}
                  <span className="flex items-center gap-1">
                    🕐 {exp.duration}
                  </span>
                </div>

                {exp.mentor && (
                  <p
                    className={`text-sm mb-4 ${dark ? "text-gray-300" : "text-gray-700"}`}
                  >
                    <span className={dark ? "text-gray-400" : "text-gray-600"}>
                      Mentor:{" "}
                    </span>
                    <a
                      href={exp.mentorLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`font-semibold hover:underline underline-offset-2 transition ${
                        dark
                          ? "text-blue-300 hover:text-purple-300"
                          : "text-blue-700 hover:text-purple-700"
                      }`}
                    >
                      {exp.mentor}
                    </a>
                  </p>
                )}

                {/* Content Sections */}
                <div className="space-y-4 mb-5">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <h3
                      className={`text-sm font-bold uppercase tracking-wide mb-2 ${
                        dark ? "text-blue-300" : "text-blue-700"
                      }`}
                    >
                      📋 Description
                    </h3>
                    <p
                      className={`text-sm leading-relaxed ${
                        dark ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      {exp.description}
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <h3
                      className={`text-sm font-bold uppercase tracking-wide mb-2 ${
                        dark ? "text-purple-300" : "text-purple-700"
                      }`}
                    >
                      💡 Key Learnings
                    </h3>
                    <p
                      className={`text-sm leading-relaxed ${
                        dark ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      {exp.learnings}
                    </p>
                  </motion.div>
                </div>

                {/* Divider */}
                <div
                  className={`h-px my-4 ${dark ? "bg-white/10" : "bg-gray-300"}`}
                />

                {/* Tech Stack */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <h3
                    className={`text-sm font-bold uppercase tracking-wide mb-3 ${
                      dark ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    🛠️ Technologies Used
                  </h3>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {exp.techStack.map((tech, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + idx * 0.05 }}
                        className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all duration-300 ${
                          dark
                            ? "bg-blue-900/40 text-blue-300 border border-blue-500/30 hover:bg-blue-900/60 hover:border-blue-400/60"
                            : "bg-blue-100/50 text-blue-700 border border-blue-300/50 hover:bg-blue-100 hover:border-blue-400"
                        }`}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                {/* Project Link */}
                {exp.projectLink && (
                  <motion.a
                    href={exp.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`inline-flex items-center gap-2 text-sm font-bold px-4 py-2 rounded-lg transition-all duration-300 ${
                      dark
                        ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-lg shadow-purple-900/30"
                        : "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-md"
                    }`}
                  >
                    🔗 View Project
                  </motion.a>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Accent */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 flex justify-center"
        >
          <div
            className={`w-32 h-1 rounded-full ${
              dark
                ? "bg-gradient-to-r from-blue-500 to-purple-500 opacity-50"
                : "bg-gradient-to-r from-blue-600 to-purple-600 opacity-40"
            }`}
          />
        </motion.div>
      </div>
    </div>
  );
};
