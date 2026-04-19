import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { motion } from "framer-motion";
import { useScroll } from "../context/ScrollContext";

const educationData = [
  {
    title: "Bachelor of Technology 🎓",
    college: "Zakir Husain College of Engineering and Technology, AMU",
    duration: "2022 - 2026",

    description:
      "Currently pursuing a B.Tech in Computer Engineering, gaining expertise in algorithms, data structures, software development, and emerging technologies.",
  },
  {
    title: "Senior Secondary School 🎓",
    college: "Delhi Public School, Roorkee",
    duration: "2019 - 2021",

    description:
      "Completed my Senior Secondary Education with a strong focus on Science and Mathematics.",
  },
];

const EducationPage = () => {
  const { dark } = useScroll();

  return (
    <div
      className={`min-h-[90vh] py-16 px-4 sm:px-6 lg:px-12 transition-all duration-500 ${
        dark
          ? "bg-gradient-to-br from-[#000000] via-[#0f0f1e] to-[#1a0033]"
          : "bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className={`text-4xl sm:text-5xl font-bold mb-4 ${
              dark
                ? "text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text"
                : "text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text"
            }`}
          >
            My Education
          </h2>
          <div
            className={`w-24 h-1 mx-auto rounded-full ${
              dark
                ? "bg-gradient-to-r from-blue-500 to-purple-500"
                : "bg-gradient-to-r from-blue-600 to-purple-600"
            }`}
          />
        </motion.div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.85, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -8 }}
              className={`relative rounded-2xl overflow-hidden transition-all duration-300 backdrop-blur-xl group ${
                dark
                  ? "bg-gradient-to-br from-zinc-900/80 to-purple-900/40 border border-purple-500/30 hover:border-purple-400/60 shadow-2xl shadow-purple-900/20 hover:shadow-2xl hover:shadow-purple-900/40"
                  : "bg-gradient-to-br from-white/80 to-blue-50/80 border border-gray-200 hover:border-blue-400 shadow-lg hover:shadow-2xl"
              }`}
            >
              {/* Accent Border */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-60" />

              {/* Icon Badge */}
              <div
                className={`absolute -top-6 left-6 p-4 rounded-xl shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-2 ${
                  dark
                    ? "bg-gradient-to-br from-purple-600 to-pink-600 text-white"
                    : "bg-gradient-to-br from-purple-500 to-pink-500 text-white"
                }`}
              >
                <FaGraduationCap className="text-2xl sm:text-3xl" />
              </div>

              {/* Content */}
              <div className="p-6 pt-12">
                <h3
                  className={`text-xl sm:text-2xl font-bold mb-2 ${
                    dark ? "text-white" : "text-gray-900"
                  }`}
                >
                  {edu.title}
                </h3>

                <p
                  className={`text-base sm:text-lg font-semibold mb-1 ${
                    dark ? "text-blue-300" : "text-blue-700"
                  }`}
                >
                  {edu.college}
                </p>

                <div className="flex items-center gap-2 mb-4">
                  <span
                    className={`text-sm font-medium ${
                      dark ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    📅 {edu.duration}
                  </span>
                </div>

                {edu.cpi && (
                  <p className="mb-3 font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-sm sm:text-base">
                    {edu.cpi}
                  </p>
                )}

                <p
                  className={`text-sm sm:text-base leading-relaxed ${
                    dark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {edu.description}
                </p>

                {/* Decoration */}
                <div
                  className={`absolute bottom-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-300 ${
                    dark ? "bg-purple-500" : "bg-blue-300"
                  }`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EducationPage;
