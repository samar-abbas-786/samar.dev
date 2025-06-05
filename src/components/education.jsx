import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { motion } from "framer-motion";
import { useScroll } from "../context/ScrollContext";

const educationData = [
  {
    title: "Bachelor of Technology 🎓",
    college: "Zakir Husain College of Engineering and Technology, AMU",
    duration: "2022 - 2026",
    cpi: "8.1 CPI",
    description:
      "Currently pursuing a B.Tech in Computer Engineering, gaining expertise in algorithms, data structures, software development, and emerging technologies.",
  },
  {
    title: "Senior Secondary School 🎓",
    college: "Delhi Public School, Roorkee",
    duration: "2019 - 2021",
    cpi: "80% (12th Grade)",
    description:
      "Completed my Senior Secondary Education with a strong focus on Science and Mathematics.",
  },
];

const EducationPage = () => {
  const { dark } = useScroll();

  return (
    <div
      className={`min-h-screen py-12 px-6 transition-colors duration-500 ${
        dark
          ? "bg-gradient-to-tr from-[#000000] via-[#101010] to-[#1a1a1a] text-white"
          : "bg-gradient-to-br from-gray-100 to-white text-gray-900"
      }`}
    >
      <h2 className="text-4xl font-bold mb-12 text-center  bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        My Education
      </h2>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={`relative rounded-2xl p-6 border shadow-xl transition hover:-translate-y-2 hover:shadow-2xl backdrop-blur-lg ${
              dark
                ? "bg-white/5 border-white/10 text-white"
                : "bg-white/70 border-gray-200 text-gray-800"
            }`}
          >
            <div
              className={`absolute -top-6 left-6 p-4 rounded-full shadow-md ${
                dark ? "bg-purple-600 text-white" : "bg-purple-500 text-white"
              }`}
            >
              <FaGraduationCap className="text-3xl" />
            </div>

            <h3 className="text-2xl font-semibold mt-6">{edu.title}</h3>
            <p className="text-lg opacity-80">{edu.college}</p>
            <p className="text-sm mt-1 opacity-60">{edu.duration}</p>
            <p className="mt-2 font-bold text-violet-500">{edu.cpi}</p>
            <p className="mt-3 leading-relaxed opacity-90">{edu.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default EducationPage;
