import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { motion } from "framer-motion";

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
  return (
    <div className="min-h-screen bg-gradient-to-br  to-white py-12 px-6 ">
      <h2 className="text-4xl font-bold  text-gray-900 mb-12">My Education</h2>

      <div className="grid gap-10 max-w-4xl mx-auto">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative bg-white/70 backdrop-blur-lg shadow-xl border border-gray-200 rounded-2xl p-6 hover:shadow-2xl transition hover:-translate-y-2"
          >
            <div className="absolute -top-6 left-6 bg-blue-500 text-white p-4 rounded-full shadow-md">
              <FaGraduationCap className="text-3xl" />
            </div>

            <h3 className="text-2xl font-semibold text-gray-800 mt-6">
              {edu.title}
            </h3>
            <p className="text-lg text-gray-600">{edu.college}</p>
            <p className="text-gray-500">{edu.duration}</p>
            <p className="mt-2 text-blue-600 font-bold">{edu.cpi}</p>
            <p className="mt-3 text-gray-700">{edu.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default EducationPage;
